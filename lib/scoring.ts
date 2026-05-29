import { Club, QuizQuestion } from "./types";

export function computePersonalityTagScores(
  answers: Record<string, string>,
  questions: QuizQuestion[],
): Record<string, number> {
  const tagScores: Record<string, number> = {};
  for (const q of questions) {
    if (q.type !== "multiple-choice") continue;
    const selectedId = answers[q.id];
    if (!selectedId) continue;
    const option = q.options?.find((o) => o.id === selectedId);
    if (!option) continue;
    for (const [tag, weight] of Object.entries(option.weights)) {
      tagScores[tag] = (tagScores[tag] ?? 0) + (weight ?? 0);
    }
  }
  return tagScores;
}

export function computeClubTagScores(
  tagScores: Record<string, number>,
  clubs: Club[],
): Record<string, number> {
  const rawScores: Record<string, number> = {};
  for (const club of clubs) {
    rawScores[club.id] = club.tags.reduce(
      (sum, tag) => sum + (tagScores[tag] ?? 0),
      0,
    );
  }
  const max = Math.max(...Object.values(rawScores), 1);
  const result: Record<string, number> = {};
  for (const [id, score] of Object.entries(rawScores)) {
    result[id] = Math.round((score / max) * 100);
  }
  return result;
}

export function computeTopTags(
  finalScores: Record<string, number>,
  clubs: Club[],
): string[] {
  const tagPoints = new Map<string, number>();
  for (const club of clubs) {
    const score = finalScores[club.id] ?? 0;
    for (const tag of club.tags) {
      tagPoints.set(tag, (tagPoints.get(tag) ?? 0) + score);
    }
  }
  return Array.from(tagPoints.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([tag]) => tag);
}
