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
