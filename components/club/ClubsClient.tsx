"use client";

import { useState } from "react";
import { Club } from "@/lib/types";
import ClubCard from "@/components/club/ClubCard";

interface ClubsClientProps {
  clubs: Club[];
}

export default function ClubsClient({ clubs }: ClubsClientProps) {
  const [query, setQuery] = useState("");

  const filtered = clubs.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 select-none" style={{ fontSize: "20px" }}>
          search
        </span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm kiếm CLB, thể loại..."
          className="w-full max-w-md pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-gray-500">
          Không tìm thấy CLB nào khớp với &ldquo;{query}&rdquo;.
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
