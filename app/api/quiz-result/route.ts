import { NextRequest, NextResponse } from "next/server";
import { quizQuestions, clubs } from "@/lib/mockData";
import {
  computePersonalityTagScores,
  computeClubTagScores,
  computeTopTags,
} from "@/lib/scoring";
import { ClubMatchResult, QuizResultOutput } from "@/lib/types";

interface GeminiClubScore {
  id: string;
  score: number;
}

interface GeminiResponse {
  clubs: GeminiClubScore[];
  personality: {
    type: string;
    description: string;
    strengths: string[];
  };
}

async function callGemini(
  answers: Record<string, string>,
  apiKey: string,
): Promise<GeminiResponse | null> {
  const answeredLines = quizQuestions
    .map((q) => {
      if (q.type === "multiple-choice") {
        const option = q.options?.find((o) => o.id === answers[q.id]);
        return option ? `- ${q.text}\n  → ${option.text}` : null;
      }
      const text = answers[q.id];
      return text ? `- ${q.text}\n  → ${text}` : null;
    })
    .filter(Boolean)
    .join("\n");

  const clubLines = clubs
    .map(
      (c) =>
        `ID ${c.id} | ${c.name} | Tags: ${c.tags.join(", ")} | ${c.description}`,
    )
    .join("\n");

  const prompt = `Bạn là chuyên gia tư vấn câu lạc bộ đại học. Phân tích câu trả lời của sinh viên và đánh giá mức độ phù hợp với từng câu lạc bộ.

Câu trả lời của sinh viên (7 câu trắc nghiệm + 3 câu tự luận):
${answeredLines}

Danh sách câu lạc bộ:
${clubLines}

Trả về JSON hợp lệ theo đúng format sau, KHÔNG thêm bất kỳ text nào khác:
{
  "clubs": [
    {"id": "1", "score": 85}
  ],
  "personality": {
    "type": "Tên kiểu người ngắn gọn (2-4 từ tiếng Việt)",
    "description": "Mô tả tính cách 1-2 câu tiếng Việt",
    "strengths": ["Điểm mạnh 1", "Điểm mạnh 2", "Điểm mạnh 3"]
  }
}

Đánh giá tất cả ${clubs.length} câu lạc bộ, điểm từ 0 đến 100.`;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.2,
          responseMimeType: "application/json",
        },
      }),
    },
  );

  if (!res.ok) return null;

  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) return null;

  try {
    return JSON.parse(text) as GeminiResponse;
  } catch {
    return null;
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const answers: Record<string, string> = body.answers ?? {};

  const tagScores = computePersonalityTagScores(answers, quizQuestions);
  const clubTagScores = computeClubTagScores(tagScores, clubs);

  const apiKey = process.env.GEMINI_API_KEY;
  const gemini = apiKey ? await callGemini(answers, apiKey) : null;

  const aiScoreMap: Record<string, number> = {};
  if (gemini) {
    for (const { id, score } of gemini.clubs) {
      aiScoreMap[id] = score;
    }
  }

  const hasAI = Object.keys(aiScoreMap).length > 0;

  const combinedClubs: ClubMatchResult[] = clubs
    .map((club) => {
      const tagScore = clubTagScores[club.id] ?? 0;
      const aiScore = aiScoreMap[club.id] ?? 0;
      const finalScore = hasAI
        ? Math.round(tagScore * 0.7 + aiScore * 0.3)
        : tagScore;
      return { id: club.id, name: club.name, tagScore, aiScore, finalScore };
    })
    .sort((a, b) => b.finalScore - a.finalScore);

  const finalScoreMap = Object.fromEntries(
    combinedClubs.map((c) => [c.id, c.finalScore]),
  );
  const topTags = computeTopTags(finalScoreMap, clubs);

  const personality = gemini?.personality ?? { type: "", description: "", strengths: [] };

  const output: QuizResultOutput = {
    clubs: combinedClubs,
    personality,
    topTags,
  };

  return NextResponse.json(output);
}
