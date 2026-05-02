import Link from "next/link";
import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="text-xl font-black text-red-600 tracking-tight">
          Bách Khoa Clubs
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/clubs"
            className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
          >
            Câu lạc bộ
          </Link>
          <Link
            href="/recruitment"
            className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
          >
            Tuyển thành viên
          </Link>
          <Link
            href="/quiz"
            className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
          >
            Kiểm tra
          </Link>
        </nav>
      </Container>
    </header>
  );
}
