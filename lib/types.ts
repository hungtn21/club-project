export type ClubCategory =
  | "Technology"
  | "Arts"
  | "Sports"
  | "Academic"
  | "Community";

export interface Club {
  id: string;
  name: string;
  category: ClubCategory;
  description: string;
  memberCount: number;
  tags: string[];
}

export interface QuizOption {
  id: string;
  text: string;
  weights: Partial<Record<ClubCategory, number>>;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
}
