@AGENTS.md

# ClubMatch — Project Rules for Claude

## Stack

- Next.js 16, React 19, TypeScript 5 (strict), Tailwind CSS 4
- App Router only. No Pages Router.
- Path alias: `@/` → project root

## Critical: Next.js 16 breaking rules

### `params` is a Promise — always await it

```tsx
// Every dynamic route page
interface Props { params: Promise<{ id: string }> }
export default async function Page({ params }: Props) {
  const { id } = await params
}
```

### Tailwind v4 — no tailwind.config.js

Custom tokens go in `app/globals.css` under `@theme inline`. Do not create `tailwind.config.js`.

### Before writing any Next.js code

Read the relevant file in `node_modules/next/dist/docs/` first.

---

## File structure rules

| What | Where |
|---|---|
| New page | `app/<route>/page.tsx` |
| Shared primitive UI | `components/ui/` |
| Layout components | `components/common/` |
| Domain components | `components/<domain>/` (e.g. `components/club/`) |
| Shared types | `lib/types.ts` |
| Mock / static data | `lib/mockData.ts` |

---

## UI system — use these, don't reinvent

All primitive components live in `components/ui/`. Always use them.

```tsx
import Container from "@/components/ui/Container"  // centered max-w-5xl layout
import Card      from "@/components/ui/Card"        // white card, border, hover
import Button    from "@/components/ui/Button"      // variant="primary" | "secondary"
```

**Page template — every page must follow this:**

```tsx
import Container from "@/components/ui/Container"

export default function SomePage() {
  return (
    <Container className="flex flex-col gap-8">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Title</h1>
        <p className="mt-1 text-sm text-gray-500">Subtitle.</p>
      </div>
      {/* feature content */}
    </Container>
  )
}
```

---

## Typography — follow exactly

| Element | Classes |
|---|---|
| Page title | `text-xl font-semibold text-gray-900` |
| Card title | `text-base font-semibold text-gray-900` |
| Body / description | `text-sm text-gray-600` |
| Meta (count, date) | `text-xs text-gray-400` |
| Badge / tag | `text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md` |

---

## Design constraints — enforce strictly

- No bright colors. Palette: gray-900 / gray-600 / gray-200 / white / gray-50.
- No gradients.
- No shadows (or `shadow-sm` at most).
- No animations (or `transition-colors` at most).
- Accent blue only for links or focus rings, never decorative.

---

## Server vs Client Components

Default is Server Component. Add `"use client"` **only** when the component uses:
- `useState`, `useEffect`, or any React hook
- Event handlers (`onClick`, `onChange`, ...)
- Browser APIs (`window`, `localStorage`, ...)

Keep Client Components small. If a page needs interactivity, extract only the interactive part to a Client Component and keep the page itself a Server Component.

---

## TypeScript rules

- No `any`. Use `unknown` and narrow, or define a proper type in `lib/types.ts`.
- Run `npx tsc --noEmit` after making changes. Zero errors expected.
- All shared types go in `lib/types.ts`. No inline type definitions that are used across files.

---

## What NOT to do

- Do not install new UI libraries (shadcn, MUI, Radix, etc.) without being asked.
- Do not create `tailwind.config.js`.
- Do not use `<a>` for internal links — use `<Link>` from `next/link`.
- Do not add comments explaining what code does. Only add a comment when the WHY is non-obvious.
- Do not add error handling or validation for things that can't fail in this context.
- Do not touch `app/globals.css` or `app/layout.tsx` unless the task requires it.
