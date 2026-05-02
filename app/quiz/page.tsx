import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import QuizClient from "@/components/quiz/QuizClient";
import { quizQuestions } from "@/lib/mockData";

export default function QuizPage() {
  return (
    <Container className="flex flex-col gap-8">
      <div className="max-w-2xl">
        <h1 className="text-xl font-semibold text-gray-900">
          Bài kiểm tra tìm CLB
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Trả lời một vài câu hỏi để chúng tôi gợi ý câu lạc bộ phù hợp với
          bạn.
        </p>
      </div>
      <div className="max-w-2xl">
        <Card>
          <QuizClient questions={quizQuestions} />
        </Card>
      </div>
    </Container>
  );
}
