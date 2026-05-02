export type ClubCategory =
  | "Technology"
  | "Arts"
  | "Sports"
  | "Academic"
  | "Community";

export type ClubSize = "Small" | "Medium" | "Large";

export interface ClubActivity {
  icon: string;
  title: string;
  description: string;
}

export interface Club {
  id: string;
  name: string;
  category: ClubCategory;
  description: string;
  memberCount: number;
  size: ClubSize;
  isRecruiting: boolean;
  tags: string[];
  meetingFrequency: string;
  icon: string;
  vision: string;
  annualProjects: number;
  awards: number;
  activities: ClubActivity[];
  address: string;
  email: string;
  website: string;
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
