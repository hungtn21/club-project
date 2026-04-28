import { Club } from "./types";

export const clubs: Club[] = [
  {
    id: "1",
    name: "Dev Circle",
    category: "Technology",
    description:
      "A community for developers to build, share, and grow together through projects and workshops.",
    memberCount: 84,
    tags: ["coding", "open-source", "web"],
  },
  {
    id: "2",
    name: "Design Lab",
    category: "Arts",
    description:
      "Explore UI/UX, graphic design, and creative thinking in a collaborative studio environment.",
    memberCount: 52,
    tags: ["design", "ui", "creativity"],
  },
  {
    id: "3",
    name: "Green Campus",
    category: "Community",
    description:
      "Driving sustainability initiatives on campus through events, research, and advocacy.",
    memberCount: 67,
    tags: ["environment", "volunteer", "campus"],
  },
  {
    id: "4",
    name: "Debate Society",
    category: "Academic",
    description:
      "Sharpen your critical thinking and public speaking through weekly debates and tournaments.",
    memberCount: 39,
    tags: ["speaking", "logic", "competition"],
  },
  {
    id: "5",
    name: "Running Club",
    category: "Sports",
    description:
      "Weekly runs for all fitness levels. We train, race, and celebrate movement together.",
    memberCount: 120,
    tags: ["fitness", "outdoors", "health"],
  },
];
