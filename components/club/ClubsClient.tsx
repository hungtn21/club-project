"use client";

import { useState } from "react";
import { Club } from "@/lib/types";
import ClubCard from "@/components/club/ClubCard";
import { personalityTags } from "@/lib/mockData";

interface ClubsClientProps {
  clubs: Club[];
}

const personalityTagTranslations: Record<string, string> = {
  leadership: "Lãnh đạo",
  creative: "Sáng tạo",
  technical: "Kỹ thuật",
  communication: "Giao tiếp",
  teamwork: "Làm việc nhóm",
  discipline: "Kỷ luật",
  competitive: "Cạnh tranh",
  performance: "Biểu diễn",
  "strategic-thinking": "Tư duy chiến lược",
  confidence: "Tự tin",
  analytical: "Phân tích",
  "learning-driven": "Ham học hỏi",
  resilience: "Kiên trì",
  "social-impact": "Tác động xã hội",
  business: "Kinh doanh",
  "problem-solving": "Giải quyết vấn đề",
  "cultural-awareness": "Hiểu biết văn hóa",
};

const sizeTranslations: Record<string, string> = {
  Small: "Nhỏ (<50 TV)",
  Medium: "Vừa (50-100 TV)",
  Large: "Lớn (>100 TV)",
};

export default function ClubsClient({ clubs }: ClubsClientProps) {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [selectedSize, setSelectedSize] = useState<string>("All");
  const [selectedRecruiting, setSelectedRecruiting] = useState<string>("All");

  const filtered = clubs.filter((c) => {
    const matchesQuery =
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase()) ||
      c.tags.some((tag) =>
        personalityTagTranslations[tag]?.toLowerCase().includes(query.toLowerCase())
      );

    const matchesTag =
      selectedTag === "All" || c.tags.includes(selectedTag);

    const matchesSize =
      selectedSize === "All" || c.size === selectedSize;

    const matchesRecruiting =
      selectedRecruiting === "All" ||
      (selectedRecruiting === "true" && c.isRecruiting) ||
      (selectedRecruiting === "false" && !c.isRecruiting);

    return matchesQuery && matchesTag && matchesSize && matchesRecruiting;
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="relative w-full max-w-md">
          <span
            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 select-none pointer-events-none"
            style={{ fontSize: "20px" }}
          >
            search
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm kiếm CLB, personality..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors"
          />
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <div className="relative w-full sm:w-auto">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 select-none pointer-events-none"
              style={{ fontSize: "20px" }}
            >
              filter_list
            </span>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full sm:w-auto appearance-none pl-10 pr-8 py-2 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors cursor-pointer text-gray-700"
            >
              <option value="All">Tất cả personality</option>
              {personalityTags.map((tag) => (
                <option key={tag} value={tag}>
                  {personalityTagTranslations[tag]}
                </option>
              ))}
            </select>
            <span
              className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 select-none pointer-events-none"
              style={{ fontSize: "20px" }}
            >
              expand_more
            </span>
          </div>

          <div className="relative w-full sm:w-auto">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 select-none pointer-events-none"
              style={{ fontSize: "20px" }}
            >
              groups
            </span>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full sm:w-auto appearance-none pl-10 pr-8 py-2 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors cursor-pointer text-gray-700"
            >
              <option value="All">Mọi quy mô</option>
              {Object.entries(sizeTranslations).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
            <span
              className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 select-none pointer-events-none"
              style={{ fontSize: "20px" }}
            >
              expand_more
            </span>
          </div>

          <div className="relative w-full sm:w-auto">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 select-none pointer-events-none"
              style={{ fontSize: "20px" }}
            >
              how_to_reg
            </span>
            <select
              value={selectedRecruiting}
              onChange={(e) => setSelectedRecruiting(e.target.value)}
              className="w-full sm:w-auto appearance-none pl-10 pr-8 py-2 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-colors cursor-pointer text-gray-700"
            >
              <option value="All">Trạng thái tuyển</option>
              <option value="true">Đang tuyển thành viên</option>
              <option value="false">Chưa tuyển thêm</option>
            </select>
            <span
              className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 select-none pointer-events-none"
              style={{ fontSize: "20px" }}
            >
              expand_more
            </span>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-gray-500">
          Không tìm thấy CLB nào khớp với tiêu chí tìm kiếm.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      )}
    </div>
  );
}
