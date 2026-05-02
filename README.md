# ClubMatch — Hướng dẫn cho Team

Tài liệu này dành cho các thành viên trong team để hiểu cấu trúc project và bắt đầu code tính năng một cách nhất quán.

---

## Mục lục

1. [Khởi động pcoroject](#1-khởi-động-project)
2. [Cấu trúc thư mục](#2-cấu-trúc-thư-mục)
3. [Công nghệ sử dụng](#3-công-nghệ-sử-dụng)
4. [Quy tắc code quan trọng](#4-quy-tắc-code-quan-trọng)
5. [UI System — cách dùng component](#5-ui-system--cách-dùng-component)
6. [Thêm tính năng mới](#6-thêm-tính-năng-mới)
7. [Types & Mock data](#7-types--mock-data)
8. [Câu hỏi thường gặp](#8-câu-hỏi-thường-gặp)

---

## 1. Khởi động project

**Yêu cầu:** Node.js >= 18

```bash
# Clone repo và cài dependencies
npm install

# Chạy dev server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.

```bash
# Kiểm tra lỗi TypeScript trước khi commit
npx tsc --noEmit
```

---

## 2. Cấu trúc thư mục

```
club_project/
├── app/                        # Next.js App Router — mỗi folder = 1 route
│   ├── layout.tsx              # Root layout: Navbar + font + global styles
│   ├── page.tsx                # Trang chủ (/)
│   ├── clubs/
│   │   ├── page.tsx            # Danh sách clubs (/clubs)
│   │   └── [id]/
│   │       └── page.tsx        # Chi tiết club (/clubs/123)
│   ├── recruitment/
│   │   └── page.tsx            # Trang tuyển thành viên (/recruitment)
│   ├── quiz/
│   │   └── page.tsx            # Quiz chọn club (/quiz)
│   └── result/
│       └── page.tsx            # Kết quả quiz (/result)
│
├── components/
│   ├── ui/                     # Primitive components — dùng ở mọi nơi
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Container.tsx
│   ├── common/                 # Shared layout components
│   │   └── Navbar.tsx
│   └── club/                   # Components riêng cho domain "club"
│       └── ClubCard.tsx
│
├── lib/
│   ├── types.ts                # TypeScript types toàn project
│   └── mockData.ts             # Dữ liệu mẫu để dev UI
│
└── app/globals.css             # Tailwind import + CSS tokens
```

---

## 3. Công nghệ sử dụng

| Công nghệ | Phiên bản | Ghi chú |
|---|---|---|
| Next.js | 16.x | App Router — **không dùng Pages Router** |
| React | 19.x | Server Components mặc định |
| TypeScript | 5.x | Strict mode bật — không dùng `any` |
| Tailwind CSS | 4.x | Không có `tailwind.config.js` — xem mục 4 |

### Tailwind CSS v4 — khác gì v3?

Đây là điểm dễ nhầm nhất. Tailwind v4 **không dùng** `tailwind.config.js`.

```css
/* globals.css — cách khai báo custom token trong v4 */
@import "tailwindcss";

@theme inline {
  --color-brand: #111827;   /* dùng được với class bg-brand, text-brand */
}
```

Utility classes vẫn dùng bình thường (`bg-gray-900`, `text-sm`, ...).

---

## 4. Quy tắc code quan trọng

### 4.1 Server Component vs Client Component

Mặc định **mọi component trong App Router đều là Server Component** — chạy trên server, không có state, không có event handler.

Chỉ thêm `"use client"` khi component cần:
- `useState` / `useEffect` / hooks React
- Event handler (`onClick`, `onChange`, ...)
- Browser API (`window`, `localStorage`, ...)

```tsx
// ✅ Server Component — không cần directive
export default function ClubsPage() {
  const clubs = getClubs(); // gọi DB hay mock trực tiếp
  return <div>{clubs.map(...)}</div>;
}

// ✅ Client Component — cần directive ở dòng đầu tiên
"use client";
import { useState } from "react";

export default function QuizForm() {
  const [step, setStep] = useState(0);
  ...
}
```

### 4.2 Dynamic route params là async

Trong Next.js 16, `params` là một **Promise** — phải `await` mới dùng được:

```tsx
// app/clubs/[id]/page.tsx
interface Props {
  params: Promise<{ id: string }>;
}

export default async function ClubDetailPage({ params }: Props) {
  const { id } = await params; // ✅ bắt buộc await
  ...
}
```

### 4.3 Path alias

Project dùng alias `@/` trỏ đến root. Luôn dùng alias thay vì đường dẫn tương đối:

```tsx
// ✅ đúng
import Button from "@/components/ui/Button";
import { clubs } from "@/lib/mockData";

// ❌ tránh
import Button from "../../components/ui/Button";
```

### 4.4 TypeScript strict

Không dùng `any`. Nếu không biết type, dùng `unknown` và narrow lại, hoặc định nghĩa type mới trong `lib/types.ts`.

```tsx
// ❌
function process(data: any) { ... }

// ✅
function process(data: unknown) { ... }
// hoặc định nghĩa type rõ ràng
```

---

## 5. UI System — cách dùng component

Tất cả component đều đã có sẵn. **Không tự tạo style inline** — dùng component từ `components/ui/`.

### Container

Dùng để bọc nội dung chính của mỗi page, giữ layout căn giữa:

```tsx
import Container from "@/components/ui/Container";

export default function MyPage() {
  return (
    <Container className="flex flex-col gap-8">
      <h1 className="text-xl font-semibold text-gray-900">Tiêu đề</h1>
      {/* nội dung */}
    </Container>
  );
}
```

### Card

Dùng cho bất kỳ khối nội dung nào cần đóng khung:

```tsx
import Card from "@/components/ui/Card";

<Card>
  <p className="text-sm text-gray-600">Nội dung bên trong card</p>
</Card>
```

### Button

Hai variant: `primary` (nền đen) và `secondary` (viền xám):

```tsx
import Button from "@/components/ui/Button";

<Button variant="primary" onClick={handleSubmit}>Nộp</Button>
<Button variant="secondary">Hủy</Button>
```

Button hỗ trợ mọi HTML button attribute (`disabled`, `type`, ...).

### ClubCard

Dùng để hiển thị một club trong danh sách:

```tsx
import ClubCard from "@/components/club/ClubCard";
import { clubs } from "@/lib/mockData";

{clubs.map((club) => (
  <ClubCard key={club.id} club={club} />
))}
```

### Typography — quy ước chung

| Dùng cho | Class |
|---|---|
| Tiêu đề trang | `text-xl font-semibold text-gray-900` |
| Tiêu đề card | `text-base font-semibold text-gray-900` |
| Mô tả / body | `text-sm text-gray-600` |
| Metadata (số, tag) | `text-xs text-gray-400` |
| Badge / label | `text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md` |

---

## 6. Thêm tính năng mới

### Thêm một trang mới

Tạo file `page.tsx` trong thư mục tương ứng với route muốn thêm:

```
app/
└── recruitment/
    └── page.tsx   →   /recruitment
```

Template tối thiểu cho một page mới:

```tsx
import Container from "@/components/ui/Container";

export default function MyPage() {
  return (
    <Container className="flex flex-col gap-8">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Tên trang</h1>
        <p className="mt-1 text-sm text-gray-500">Mô tả ngắn.</p>
      </div>
      {/* nội dung tính năng */}
    </Container>
  );
}
```

### Thêm một component mới

- Component thuộc domain cụ thể (club, quiz, ...) → để trong `components/<domain>/`
- Component dùng lại ở nhiều nơi, không gắn với domain → để trong `components/ui/`

```
components/
├── ui/          ← Button, Card, Input, Modal, Badge, ...
├── common/      ← Navbar, Footer, ...
├── club/        ← ClubCard, ClubFilter, ...
└── quiz/        ← QuizStep, QuizProgress, ...   ← tạo mới nếu cần
```

### Thêm type mới

Mọi type dùng chung đều khai báo trong `lib/types.ts`:

```ts
// lib/types.ts
export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
}
```

### Thêm dữ liệu mẫu

Trong giai đoạn dev chưa có API, thêm mock vào `lib/mockData.ts`:

```ts
// lib/mockData.ts
export const quizQuestions: QuizQuestion[] = [
  { id: "q1", text: "Bạn thích làm gì vào cuối tuần?", options: [...] },
];
```

---

## 7. Types & Mock data

### Club type

```ts
// lib/types.ts
export type ClubCategory =
  | "Technology" | "Arts" | "Sports" | "Academic" | "Community";

export interface Club {
  id: string;
  name: string;
  category: ClubCategory;
  description: string;
  memberCount: number;
  tags: string[];
}
```

### Mock clubs có sẵn

| id | name | category |
|---|---|---|
| 1 | Dev Circle | Technology |
| 2 | Design Lab | Arts |
| 3 | Green Campus | Community |
| 4 | Debate Society | Academic |
| 5 | Running Club | Sports |

Import:

```ts
import { clubs } from "@/lib/mockData";
```

---

## 8. Câu hỏi thường gặp

**Q: Tôi có cần cài thêm gì không?**
Không. Chỉ cần `npm install` là đủ. Không cài thêm UI library (shadcn, MUI, ...) nếu chưa hỏi lead.

**Q: Dùng `useState` trong page được không?**
Không trực tiếp — page là Server Component. Tách phần cần state ra một file riêng và thêm `"use client"` vào đó, sau đó import vào page.

**Q: Tailwind class không có hiệu lực?**
Đảm bảo `globals.css` được import trong `app/layout.tsx` và class bạn dùng là class hợp lệ của Tailwind v4. Không cần `tailwind.config.js`.

**Q: Làm sao navigate giữa các trang?**
Dùng `<Link href="/clubs">` từ `next/link`. Không dùng thẻ `<a>` thông thường cho internal links.

**Q: Tôi cần fetch dữ liệu thật từ API?**
Trong Server Component, gọi thẳng `fetch()` hoặc hàm async trong component. Trong Client Component, dùng `useEffect` hoặc thư viện như SWR/React Query (hỏi lead trước).

**Q: Sửa màu hay font ở đâu?**
Trong `app/globals.css` dưới block `@theme inline`. Không hardcode màu trực tiếp trong component.
