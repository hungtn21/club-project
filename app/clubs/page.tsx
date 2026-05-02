import Container from "@/components/ui/Container";
import ClubsClient from "@/components/club/ClubsClient";
import { clubs } from "@/lib/mockData";

export default function ClubsPage() {
  return (
    <Container className="flex flex-col gap-8">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">
          Khám phá Câu lạc bộ
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Tìm kiếm và tham gia {clubs.length} câu lạc bộ tại ĐHBK HN.
        </p>
      </div>
      <ClubsClient clubs={clubs} />
    </Container>
  );
}
