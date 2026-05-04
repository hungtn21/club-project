import Container from "@/components/ui/Container";
import RecruitmentClient from "@/components/recruitment/RecruitmentClient";
import { clubs } from "@/lib/mockData";

export default function RecruitmentPage() {
  return (
    <Container className="flex flex-col gap-8">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">
          Tìm công đông của bạn
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Khám phá hàng trăm câu lạc bộ đang mở tuyển dụng. Nơi bạn phát triển kỹ năng, kết nối bạn bè và kiến tạo những kỹ năm tương lai.
        </p>
      </div>
      <RecruitmentClient clubs={clubs} />
    </Container>
  );
}
