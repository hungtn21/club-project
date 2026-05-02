import Link from "next/link";
import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="text-sm font-semibold text-gray-900">
          ClubMatch
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/clubs"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Câu lạc bộ
          </Link>
          <Link
            href="/quiz"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Kiểm tra
          </Link>
        </nav>
      </Container>
    </header>
  );
}
