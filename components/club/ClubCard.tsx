import { Club, ClubCategory } from "@/lib/types";
import Link from "next/link";

const categoryStyle: Record<
  ClubCategory,
  { gradient: string; badge: string; bar: string }
> = {
  Technology: {
    gradient: "bg-gradient-to-br from-red-500 to-red-700",
    badge: "bg-red-50 text-red-700",
    bar: "bg-red-600",
  },
  Community: {
    gradient: "bg-gradient-to-br from-amber-400 to-orange-500",
    badge: "bg-amber-50 text-amber-700",
    bar: "bg-amber-500",
  },
  Sports: {
    gradient: "bg-gradient-to-br from-rose-400 to-rose-600",
    badge: "bg-rose-50 text-rose-700",
    bar: "bg-rose-500",
  },
  Arts: {
    gradient: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    badge: "bg-yellow-50 text-yellow-700",
    bar: "bg-yellow-500",
  },
  Academic: {
    gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
    badge: "bg-blue-50 text-blue-700",
    bar: "bg-blue-600",
  },
};

interface ClubCardProps {
  club: Club;
}

export default function ClubCard({ club }: ClubCardProps) {
  const style = categoryStyle[club.category];

  return (
    <Link href={`/clubs/${club.id}`} className="block h-full">
      <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 flex flex-col hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden h-full">
        <div
          className={`absolute top-0 left-0 w-full h-1 ${style.bar} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
        />
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`w-16 h-16 rounded-xl ${style.gradient} flex items-center justify-center shrink-0 shadow-inner`}
          >
            <span className="material-symbols-outlined text-white text-3xl">
              {club.icon}
            </span>
          </div>
          <div>
            <span
              className={`inline-block px-2.5 py-1 ${style.badge} font-medium text-xs rounded-full mb-1`}
            >
              {club.category}
            </span>
            <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
              {club.name}
            </h3>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-6 flex-1 leading-relaxed line-clamp-2">
          {club.description}
        </p>
        <div className="flex items-center gap-4 text-xs font-medium text-gray-500 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1.5">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "16px" }}
            >
              groups
            </span>
            {club.memberCount}+ members
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "16px" }}
            >
              event
            </span>
            {club.meetingFrequency}
          </div>
        </div>
      </div>
    </Link>
  );
}
