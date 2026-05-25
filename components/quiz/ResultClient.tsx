"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { quizQuestions, clubs } from "@/lib/mockData";

const tagLabels: Record<string, string> = {
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

const archetypeClusters: {
  tags: string[];
  title: string;
  description: string;
  strengths: string[];
}[] = [
  {
    tags: ["technical", "problem-solving"],
    title: "Người Kiến Tạo",
    description:
      "Bạn thích xây dựng và giải quyết vấn đề bằng tư duy kỹ thuật. Bạn phát huy tốt nhất khi biến ý tưởng thành sản phẩm thực tế và không ngừng tìm cách tối ưu mọi thứ.",
    strengths: [
      "Tư duy logic và hệ thống",
      "Khả năng học hỏi tự lực",
      "Giải quyết vấn đề sáng tạo",
    ],
  },
  {
    tags: ["creative", "performance"],
    title: "Người Sáng Tạo",
    description:
      "Cảm xúc và thẩm mỹ là động lực của bạn. Bạn nhìn thế giới theo cách riêng và luôn muốn tạo ra những điều có ý nghĩa, đẹp đẽ và truyền cảm hứng cho người khác.",
    strengths: [
      "Tư duy hình ảnh và thẩm mỹ",
      "Biểu đạt cảm xúc tốt",
      "Khả năng kể chuyện",
    ],
  },
  {
    tags: ["discipline", "resilience", "competitive"],
    title: "Người Chiến Đấu",
    description:
      "Kỷ luật, năng lượng và thách thức là đặc trưng của bạn. Bạn không ngại khó và làm tốt nhất khi được cạnh tranh, rèn luyện và phát triển cùng đồng đội.",
    strengths: [
      "Kỷ luật và kiên trì",
      "Tinh thần vượt khó",
      "Khả năng chịu áp lực",
    ],
  },
  {
    tags: ["analytical", "learning-driven", "strategic-thinking"],
    title: "Người Tư Duy",
    description:
      "Ý tưởng, lập luận và tri thức là nguồn năng lượng của bạn. Bạn không bằng lòng với câu trả lời đơn giản và luôn muốn đào sâu, hiểu rõ bản chất của mọi vấn đề.",
    strengths: [
      "Tư duy phân tích sắc bén",
      "Kỹ năng nghiên cứu độc lập",
      "Lập luận logic thuyết phục",
    ],
  },
  {
    tags: ["leadership", "social-impact", "teamwork", "communication", "confidence"],
    title: "Người Kết Nối",
    description:
      "Con người và tác động xã hội là trung tâm của bạn. Bạn có năng lực đặc biệt trong việc xây dựng cộng đồng, tạo ra không gian để mọi người cùng phát triển và tạo ra thay đổi.",
    strengths: [
      "Kỹ năng giao tiếp và lắng nghe",
      "Khả năng lãnh đạo tự nhiên",
      "Đồng cảm và tạo động lực",
    ],
  },
];

export default function ResultClient() {
  const searchParams = useSearchParams();

  const mcQuestions = quizQuestions.filter((q) => q.type === "multiple-choice");
  const hasAnswers = mcQuestions.some((q) => searchParams.get(q.id) !== null);

  if (!hasAnswers) {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-500">Bạn chưa làm bài kiểm tra.</p>
        <Link href="/quiz">
          <Button variant="primary">Làm bài kiểm tra</Button>
        </Link>
      </div>
    );
  }

  // Tính điểm theo từng personality tag
  const tagScores: Record<string, number> = {};
  for (const question of mcQuestions) {
    const selectedId = searchParams.get(question.id);
    if (!selectedId) continue;
    const option = question.options?.find((o) => o.id === selectedId);
    if (!option) continue;
    for (const [tag, weight] of Object.entries(option.weights)) {
      tagScores[tag] = (tagScores[tag] ?? 0) + (weight ?? 0);
    }
  }

  // Tìm archetype phù hợp nhất
  const clusterScores = archetypeClusters.map((cluster) => ({
    cluster,
    score: cluster.tags.reduce((sum, tag) => sum + (tagScores[tag] ?? 0), 0),
  }));
  const topCluster = clusterScores.sort((a, b) => b.score - a.score)[0].cluster;

  // Top 5 tag để hiển thị thanh điểm
  const topTags = Object.entries(tagScores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);
  const maxScore = topTags[0]?.[1] ?? 1;

  // Tính điểm phù hợp cho từng CLB dựa trên tags
  const scoredClubs = clubs
    .map((club) => ({
      club,
      score: club.tags.reduce((sum, tag) => sum + (tagScores[tag] ?? 0), 0),
    }))
    .sort((a, b) => b.score - a.score);

  const maxClubScore = scoredClubs[0]?.score ?? 1;

  return (
    <div className="flex flex-col gap-8">
      {/* Archetype */}
      <Card className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-gray-400 uppercase tracking-wide">
            Kiểu người của bạn
          </p>
          <h2 className="text-xl font-semibold text-gray-900">
            {topCluster.title}
          </h2>
          <p className="text-sm text-gray-600 mt-1">{topCluster.description}</p>
        </div>

        <div className="border-t border-gray-100 pt-5 flex flex-col gap-3">
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Điểm mạnh nổi bật
          </p>
          <ul className="flex flex-col gap-2">
            {topCluster.strengths.map((s) => (
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
            {topTags.map(([tag, score]) => (
              <div key={tag} className="flex items-center gap-3">
                <span className="w-36 shrink-0 text-xs text-gray-600">
                  {tagLabels[tag] ?? tag}
                </span>
                <div className="flex-1 h-1.5 rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-gray-900"
                    style={{ width: `${Math.round((score / maxScore) * 100)}%` }}
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

      {/* Suggested clubs */}
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Câu lạc bộ dành cho bạn
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Gợi ý dựa trên personality và kết quả bài kiểm tra.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {scoredClubs.map(({ club, score }, index) => {
            const matchPct =
              maxClubScore > 0 ? Math.round((score / maxClubScore) * 100) : 0;
            return (
              <Link key={club.id} href={`/clubs/${club.id}`} className="block">
                <Card className="flex flex-col gap-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold text-gray-900">
                      {club.name}
                    </h3>
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
                </Card>
              </Link>
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
