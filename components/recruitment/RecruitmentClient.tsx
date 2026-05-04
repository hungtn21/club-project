"use client";

import { useState } from "react";
import { Club, ClubCategory } from "@/lib/types";
import RecruitmentCard from "./RecruitmentCard";
import RecruitmentDetailModal from "./RecruitmentDetailModal";

const categories: { value: ClubCategory | "all"; label: string }[] = [
  { value: "all", label: "Tất cả" },
  { value: "Technology", label: "Công nghệ" },
  { value: "Arts", label: "Nghệ thuật & Văn hóa" },
  { value: "Sports", label: "Thể thao" },
  { value: "Academic", label: "Học thuật" },
  { value: "Community", label: "Cộng đồng" },
];

interface RecruitmentClientProps {
  clubs: Club[];
}

export default function RecruitmentClient({ clubs }: RecruitmentClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    ClubCategory | "all"
  >("all");
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const recruitingClubs = clubs.filter((club) => club.isRecruiting);

  const filteredClubs =
    selectedCategory === "all"
      ? recruitingClubs
      : recruitingClubs.filter((club) => club.category === selectedCategory);

  const handleSelectClub = (club: Club) => {
    setSelectedClub(club);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClub(null);
  };

  return (
    <div className="w-full">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === cat.value
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white border border-gray-200 text-gray-700 hover:border-gray-300"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Clubs grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClubs.length > 0 ? (
          filteredClubs.map((club) => (
            <RecruitmentCard
              key={club.id}
              club={club}
              onSelect={handleSelectClub}
            />
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <p className="text-gray-500">Hiện chưa có CLB nào tuyển dụng trong lĩnh vực này.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      <RecruitmentDetailModal
        club={selectedClub}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
