"use client";

import { Club, ClubCategory } from "@/lib/types";

const categoryIcon: Record<ClubCategory, string> = {
  Technology: "terminal",
  Arts: "brush",
  Sports: "sports_basketball",
  Community: "eco",
  Academic: "school",
  Performance: "theater_comedy",
  "Mind Sports": "psychology",
  Communication: "record_voice_over",
  "Social Impact": "volunteer_activism",
  Business: "rocket_launch",
  Culture: "travel_explore",
};

const categoryLabel: Record<ClubCategory, string> = {
  Technology: "Công nghệ",
  Arts: "Nghệ thuật",
  Sports: "Thể thao",
  Community: "Cộng đồng",
  Academic: "Học thuật",
  Performance: "Biểu diễn",
  "Mind Sports": "Thể thao trí tuệ",
  Communication: "Giao tiếp",
  "Social Impact": "Tác động xã hội",
  Business: "Kinh doanh",
  Culture: "Văn hóa",
};

const categoryBg: Record<ClubCategory, string> = {
  Technology: "bg-blue-50",
  Arts: "bg-purple-50",
  Sports: "bg-green-50",
  Community: "bg-amber-50",
  Academic: "bg-indigo-50",
  Performance: "bg-pink-50",
  "Mind Sports": "bg-cyan-50",
  Communication: "bg-teal-50",
  "Social Impact": "bg-emerald-50",
  Business: "bg-orange-50",
  Culture: "bg-rose-50",
};

const categoryBadge: Record<ClubCategory, string> = {
  Technology: "bg-blue-100 text-blue-700",
  Arts: "bg-purple-100 text-purple-700",
  Sports: "bg-green-100 text-green-700",
  Community: "bg-amber-100 text-amber-700",
  Academic: "bg-indigo-100 text-indigo-700",
  Performance: "bg-pink-100 text-pink-700",
  "Mind Sports": "bg-cyan-100 text-cyan-700",
  Communication: "bg-teal-100 text-teal-700",
  "Social Impact": "bg-emerald-100 text-emerald-700",
  Business: "bg-orange-100 text-orange-700",
  Culture: "bg-rose-100 text-rose-700",
};

interface RecruitmentCardProps {
  club: Club;
  onSelect?: (club: Club) => void;
}

export default function RecruitmentCard({ club, onSelect }: RecruitmentCardProps) {
  if (!club.isRecruiting) return null;

  const isClosed = club.recruitmentDeadline
    ? Math.ceil((new Date(club.recruitmentDeadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) <= 0
    : false;

  const formatDeadline = (dateString?: string) => {
    if (!dateString) return "Đang mở";
    const date = new Date(dateString);
    const today = new Date();
    const daysLeft = Math.ceil(
      (date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysLeft <= 0) return "Đã đóng";
    return `Còn ${daysLeft} ngày`;
  };

  return (
    <div className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      {/* Header with category background */}
      <div className={`${categoryBg[club.category]} px-6 py-4 border-b border-gray-100`}>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-gray-700">
                {categoryIcon[club.category]}
              </span>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                {club.name}
              </h3>
              <span className={`inline-block px-2 py-1 ${categoryBadge[club.category]} text-xs font-medium rounded mt-1`}>
                {categoryLabel[club.category]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-4">
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {club.description}
        </p>

        {/* Club info row */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1 flex-1">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "16px" }}
            >
              event
            </span>
            <span>{club.meetingFrequency}</span>
          </div>
          <div className="flex items-center gap-1 flex-1">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "16px" }}
            >
              groups
            </span>
            <span>{club.memberCount}+ thành viên</span>
          </div>
        </div>

        {/* Recruiting positions */}
        {club.recruitingPositions && club.recruitingPositions.length > 0 && (
          <div className="mb-4 pb-4 border-t border-gray-100 pt-4">
            <p className="text-xs font-medium text-gray-700 mb-2">
              Vị trí đang tuyển:
            </p>
            <div className="flex flex-wrap gap-2">
              {club.recruitingPositions.map((position) => (
                <span
                  key={typeof position === 'string' ? position : position.title}
                  className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-200"
                >
                  {typeof position === 'string' ? position : `${position.title} (${position.quota})`}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Deadline and button */}
        <div className="flex items-center justify-between">
          <div className={`text-xs font-medium ${isClosed ? 'text-red-500' : 'text-gray-500'}`}>
            <span className="material-symbols-outlined" style={{ fontSize: "16px", marginRight: "4px", verticalAlign: "middle" }}>
              schedule
            </span>
            {formatDeadline(club.recruitmentDeadline)}
          </div>
          <button
            onClick={() => !isClosed && onSelect?.(club)}
            disabled={isClosed}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isClosed
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
          >
            {isClosed ? "Hết hạn" : "Ứng tuyển"}
          </button>
        </div>
      </div>
    </div>
  );
}
