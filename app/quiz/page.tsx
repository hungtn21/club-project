import Container from "@/components/ui/Container";

export default function QuizPage() {
  return (
    <Container className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Club Match Quiz</h1>
        <p className="mt-1 text-sm text-gray-500">
          Answer a few questions and we will suggest clubs that fit you.
        </p>
      </div>
    </Container>
  );
}
