import { Club } from "@/lib/types";
import Card from "../ui/Card";
import Link from "next/link";

interface ClubCardProps {
  club: Club;
}

export default function ClubCard({ club }: ClubCardProps) {
  return (
    <Link href={`/clubs/${club.id}`} className="block">
      <Card className="flex flex-col gap-2">
        <div className="flex items-start justify-between">
          <h3 className="text-base font-semibold text-gray-900">{club.name}</h3>
          <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
            {club.category}
          </span>
        </div>
        <p className="text-sm text-gray-500 line-clamp-2">{club.description}</p>
        <p className="text-xs text-gray-400">{club.memberCount} members</p>
      </Card>
    </Link>
  );
}
