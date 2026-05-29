export type ClubCategory =
  | 'Technology'
  | 'Arts'
  | 'Sports'
  | 'Academic'
  | 'Community'
  | 'Performance'
  | 'Mind Sports'
  | 'Communication'
  | 'Social Impact'
  | 'Business'
  | 'Culture';

export type ClubSize = 'Small' | 'Medium' | 'Large';

export interface ClubActivity {
  icon: string;
  title: string;
  description: string;
}

export interface RecruitmentPosition {
  title: string;
  quota: number;
}

export interface SelectionStage {
  order: number;
  name: string;
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
  recruitmentDeadline?: string;
  recruitingPositions?: RecruitmentPosition[];
  recruitmentPositionsText?: string[]; // for backward compatibility
  selectionStages?: SelectionStage[];
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
  weights: Partial<Record<string, number>>;
}

export interface QuizQuestion {
  id: string;
  text: string;
  type: "multiple-choice" | "short-answer";
  options?: QuizOption[];
}

export interface TagScore {
  tag: string;
  score: number;
}

export interface ClubScore {
  clubId: string;
  score: number;
}

export interface QuizResult {
  clubScores: ClubScore[];
  personalityType: string;
  personalityDescription: string;
  strengths: string[];
  topTags: TagScore[];
}
