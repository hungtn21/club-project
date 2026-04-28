import Container from "@/components/ui/Container";

export default function ResultPage() {
  return (
    <Container className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Your Matches</h1>
        <p className="mt-1 text-sm text-gray-500">
          Based on your quiz, here are the clubs we recommend for you.
        </p>
      </div>
    </Container>
  );
}
