import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="flex flex-col gap-6 pt-16">
      <div className="max-w-xl">
        <h1 className="text-3xl font-semibold text-gray-900">
          Find your club.
        </h1>
        <p className="mt-3 text-base text-gray-500">
          Discover university clubs that match your interests, personality, and goals.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/quiz">
            <Button variant="primary">Take the Quiz</Button>
          </Link>
          <Link href="/clubs">
            <Button variant="secondary">Browse Clubs</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
