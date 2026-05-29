"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { clubs } from "@/lib/mockData";
import {
  computeQuizResult,
  getTopClubScores,
  hasQuizAnswers,
  parseAnswersFromSearchParams,
  tagLabels,
} from "@/lib/quizScoring";

export default function ResultClient() {
  const searchParams = useSearchParams();

  if (!hasQuizAnswers(searchParams)) {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-500">Bạn chưa làm bài kiểm tra.</p>
        <Link href="/quiz">
          <Button variant="primary">Làm bài kiểm tra</Button>
        </Link>
      </div>
    );
  }

  const answers = parseAnswersFromSearchParams(searchParams);
  const result = computeQuizResult(answers);
  const topClubScores = getTopClubScores(result, 5);
  const maxClubScore = topClubScores[0]?.score ?? 1;
  const maxTagScore = result.topTags[0]?.score ?? 1;

  return (
    <div className="flex flex-col gap-8">
      <Card className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-gray-400 uppercase tracking-wide">
            Kiểu người của bạn
          </p>
          <h2 className="text-xl font-semibold text-gray-900">
            {result.personalityType}
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {result.personalityDescription}
          </p>
        </div>

        <div className="border-t border-gray-100 pt-5 flex flex-col gap-3">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Điểm mạnh nổi bật
          </p>
          <ul className="flex flex-col gap-2">
            {result.strengths.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-900" />
                <span className="text-sm text-gray-700">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-100 pt-5 flex flex-col gap-3">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Phân tích personality
          </p>
          <div className="flex flex-col gap-3">
            {result.topTags.map(({ tag, score }) => (
              <div key={tag} className="flex items-center gap-3">
                <span className="w-36 shrink-0 text-xs text-gray-600">
                  {tagLabels[tag] ?? tag}
                </span>
                <div className="flex-1 h-1.5 rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-gray-900"
                    style={{
                      width: `${Math.round((score / maxTagScore) * 100)}%`,
                    }}
                  />
                </div>
                <span className="w-6 text-right text-xs text-gray-400">
                  {score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Câu lạc bộ dành cho bạn
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Top 5 gợi ý dựa trên personality và kết quả bài kiểm tra.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {topClubScores.map(({ clubId, score }, index) => {
            const club = clubs.find((c) => c.id === clubId);
            if (!club) return null;
            const matchPct =
              maxClubScore > 0 ? Math.round((score / maxClubScore) * 100) : 0;
            return (
              <Card key={club.id} className="flex flex-col gap-2.5">
                <div className="flex items-start justify-between gap-2">
                  <Link href={`/clubs/${club.id}`} className="block">
                    <h3 className="text-base font-semibold text-gray-900 hover:text-gray-600 transition-colors">
                      {club.name}
                    </h3>
                  </Link>
                  {index === 0 && (
                    <span className="shrink-0 rounded-md bg-gray-900 px-2 py-0.5 text-xs font-medium text-white">
                      Phù hợp nhất
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {club.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                    {club.category}
                  </span>
                  <span className="text-xs text-gray-400">{matchPct}%</span>
                </div>
                <div className="h-1 rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-gray-900"
                    style={{ width: `${matchPct}%` }}
                  />
                </div>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <Link
                    href={`/clubs/${club.id}`}
                    className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Xem chi tiết CLB
                  </Link>
                  {club.isRecruiting && (
                    <Link href={`/recruitment?club=${club.id}`}>
                      <Button variant="primary" className="px-3 py-1.5 text-xs">
                        Ứng tuyển
                      </Button>
                    </Link>
                  )}
                  {!club.isRecruiting && (
                    <span className="text-xs text-gray-400">Chưa mở tuyển</span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link href="/quiz">
          <Button variant="secondary">Làm lại bài kiểm tra</Button>
        </Link>
        <Link href="/clubs">
          <Button variant="primary">Xem tất cả CLB</Button>
        </Link>
      </div>
    </div>
  );
}
