import type { QuizResult, TagScore } from "@/lib/types";
import { clubs, quizQuestions } from "@/lib/mockData";

export const tagLabels: Record<string, string> = {
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
    tags: [
      "leadership",
      "social-impact",
      "teamwork",
      "communication",
      "confidence",
    ],
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

const TAG_WEIGHT = 0.7;
const MOCK_AI_WEIGHT = 0.3;

export function parseAnswersFromSearchParams(
  searchParams: URLSearchParams
): Record<string, string> {
  const answers: Record<string, string> = {};
  for (const question of quizQuestions) {
    const value = searchParams.get(question.id);
    if (value) answers[question.id] = value;
  }
  return answers;
}

export function hasQuizAnswers(searchParams: URLSearchParams): boolean {
  const mcQuestions = quizQuestions.filter((q) => q.type === "multiple-choice");
  return mcQuestions.some((q) => searchParams.get(q.id) !== null);
}

function computeTagScores(answers: Record<string, string>): Record<string, number> {
  const tagScores: Record<string, number> = {};
  const mcQuestions = quizQuestions.filter((q) => q.type === "multiple-choice");

  for (const question of mcQuestions) {
    const selectedId = answers[question.id];
    if (!selectedId) continue;
    const option = question.options?.find((o) => o.id === selectedId);
    if (!option) continue;
    for (const [tag, weight] of Object.entries(option.weights)) {
      tagScores[tag] = (tagScores[tag] ?? 0) + (weight ?? 0);
    }
  }

  return tagScores;
}

function mockShortAnswerBoost(answers: Record<string, string>): Record<string, number> {
  const boost: Record<string, number> = {};
  const shortQuestions = quizQuestions.filter((q) => q.type === "short-answer");

  for (const question of shortQuestions) {
    const text = answers[question.id]?.trim() ?? "";
    if (text.length < 20) continue;
    const lengthBonus = Math.min(3, Math.floor(text.length / 80));
    boost.communication = (boost.communication ?? 0) + lengthBonus;
    boost["learning-driven"] = (boost["learning-driven"] ?? 0) + lengthBonus;
    if (text.length >= 120) {
      boost.creative = (boost.creative ?? 0) + 1;
      boost.analytical = (boost.analytical ?? 0) + 1;
    }
  }

  return boost;
}

function pickArchetype(tagScores: Record<string, number>) {
  const ranked = archetypeClusters
    .map((cluster) => ({
      cluster,
      score: cluster.tags.reduce((sum, tag) => sum + (tagScores[tag] ?? 0), 0),
    }))
    .sort((a, b) => b.score - a.score);

  return ranked[0]?.cluster ?? archetypeClusters[0];
}

function computeTopTags(tagScores: Record<string, number>): TagScore[] {
  return Object.entries(tagScores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([tag, score]) => ({ tag, score }));
}

function mockAiClubScore(
  clubTags: string[],
  tagScores: Record<string, number>,
  archetypeTags: string[]
): number {
  const clubTagScore = clubTags.reduce(
    (sum, tag) => sum + (tagScores[tag] ?? 0),
    0
  );
  const archetypeOverlap = clubTags.filter((tag) =>
    archetypeTags.includes(tag)
  ).length;
  return clubTagScore * 0.6 + archetypeOverlap * 8;
}

export function computeQuizResult(answers: Record<string, string>): QuizResult {
  const mcTagScores = computeTagScores(answers);
  const shortBoost = mockShortAnswerBoost(answers);
  const tagScores: Record<string, number> = { ...mcTagScores };

  for (const [tag, value] of Object.entries(shortBoost)) {
    tagScores[tag] = (tagScores[tag] ?? 0) + value;
  }

  const archetype = pickArchetype(tagScores);
  const topTags = computeTopTags(tagScores);

  const clubScores = clubs
    .map((club) => {
      const tagClubScore = club.tags.reduce(
        (sum, tag) => sum + (tagScores[tag] ?? 0),
        0
      );
      const mockAiScore = mockAiClubScore(club.tags, tagScores, archetype.tags);
      const score =
        tagClubScore * TAG_WEIGHT + mockAiScore * MOCK_AI_WEIGHT;
      return { clubId: club.id, score };
    })
    .sort((a, b) => b.score - a.score);

  return {
    clubScores,
    personalityType: archetype.title,
    personalityDescription: archetype.description,
    strengths: archetype.strengths,
    topTags,
  };
}

export function getTopClubScores(result: QuizResult, limit = 5) {
  return result.clubScores.slice(0, limit);
}
