import { Suspense } from "react";
import Container from "@/components/ui/Container";
import ResultClient from "@/components/quiz/ResultClient";

export default function ResultPage() {
  return (
    <Container className="flex flex-col gap-8">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">
          Kết quả của bạn
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Dựa trên bài kiểm tra, đây là phân tích về tính cách và định hướng
          của bạn.
        </p>
      </div>
      <Suspense
        fallback={
          <p className="text-sm text-gray-400">Đang tải kết quả...</p>
        }
      >
        <ResultClient />
      </Suspense>
    </Container>
  );
}
