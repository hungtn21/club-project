import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { clubs } from "@/lib/mockData";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ClubDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ClubDetailPage({ params }: ClubDetailPageProps) {
  const { id } = await params;
  const club = clubs.find((c) => c.id === id);

  if (!club) notFound();

  return (
    <Container className="flex flex-col gap-8">
      <Link href="/clubs" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
        ← Quay lại danh sách
      </Link>
      <Card className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <h1 className="text-xl font-semibold text-gray-900">{club.name}</h1>
          <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
            {club.category}
          </span>
        </div>
        <p className="text-sm text-gray-600">{club.description}</p>
        <p className="text-xs text-gray-400">{club.memberCount} thành viên</p>
        <div className="flex flex-wrap gap-2">
          {club.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-gray-200 px-2 py-0.5 text-xs text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-2">
          <Button variant="primary">Đăng ký tham gia</Button>
        </div>
      </Card>
    </Container>
  );
}
