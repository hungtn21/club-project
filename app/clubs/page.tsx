import Container from "@/components/ui/Container";
import ClubCard from "@/components/club/ClubCard";
import { clubs } from "@/lib/mockData";

export default function ClubsPage() {
  return (
    <Container className="flex flex-col gap-8">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">All Clubs</h1>
        <p className="mt-1 text-sm text-gray-500">
          Browse all {clubs.length} clubs available on campus.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clubs.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>
    </Container>
  );
}
