import { Club, QuizQuestion } from "./types";

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

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    text: "Tối thứ Sáu, bạn thích làm gì nhất?",
    options: [
      { id: "q1_a", text: "Code một dự án cá nhân", weights: { Technology: 3, Academic: 1 } },
      { id: "q1_b", text: "Vẽ, thiết kế hoặc làm nhạc", weights: { Arts: 3, Community: 1 } },
      { id: "q1_c", text: "Chạy bộ hoặc chơi thể thao", weights: { Sports: 3 } },
      { id: "q1_d", text: "Đọc sách hoặc thảo luận chuyên sâu", weights: { Academic: 3, Technology: 1 } },
      { id: "q1_e", text: "Tổ chức sự kiện cho cộng đồng", weights: { Community: 3, Arts: 1 } },
    ],
  },
  {
    id: "q2",
    text: "Loại công việc nào khiến bạn hứng khởi nhất?",
    options: [
      { id: "q2_a", text: "Giải quyết bài toán kỹ thuật khó", weights: { Technology: 3 } },
      { id: "q2_b", text: "Thiết kế một thứ gì đó đẹp mắt", weights: { Arts: 3, Technology: 1 } },
      { id: "q2_c", text: "Luyện tập và cải thiện thể chất", weights: { Sports: 3 } },
      { id: "q2_d", text: "Xây dựng lập luận thuyết phục", weights: { Academic: 3, Community: 1 } },
      { id: "q2_e", text: "Tập hợp mọi người vì một mục tiêu chung", weights: { Community: 3, Academic: 1 } },
    ],
  },
  {
    id: "q3",
    text: "Bạn thích học theo cách nào?",
    options: [
      { id: "q3_a", text: "Tự xây dựng dự án và đọc tài liệu", weights: { Technology: 2, Academic: 1 } },
      { id: "q3_b", text: "Workshop và thực hành trực tiếp", weights: { Arts: 2, Community: 1 } },
      { id: "q3_c", text: "Luyện tập thể chất lặp đi lặp lại", weights: { Sports: 3 } },
      { id: "q3_d", text: "Nghiên cứu và học có hệ thống", weights: { Academic: 2, Technology: 1 } },
      { id: "q3_e", text: "Thảo luận và làm dự án nhóm", weights: { Community: 2, Arts: 1 } },
    ],
  },
  {
    id: "q4",
    text: "CLB lý tưởng của bạn sẽ tạo ra điều gì?",
    options: [
      { id: "q4_a", text: "Sản phẩm hoạt động được hoặc công cụ mã nguồn mở", weights: { Technology: 3 } },
      { id: "q4_b", text: "Triển lãm, tạp chí hoặc buổi biểu diễn", weights: { Arts: 3, Community: 1 } },
      { id: "q4_c", text: "Kết quả thi đấu hoặc chức vô địch", weights: { Sports: 3, Academic: 1 } },
      { id: "q4_d", text: "Chiến thắng tranh luận hoặc bài nghiên cứu", weights: { Academic: 3 } },
      { id: "q4_e", text: "Sự thay đổi lâu dài cho trường học", weights: { Community: 3, Academic: 1 } },
    ],
  },
  {
    id: "q5",
    text: "Điều gì thúc đẩy bạn nhiều nhất?",
    options: [
      { id: "q5_a", text: "Tạo ra những thứ chưa từng tồn tại", weights: { Technology: 2, Academic: 1 } },
      { id: "q5_b", text: "Thể hiện tầm nhìn sáng tạo của bạn", weights: { Arts: 3 } },
      { id: "q5_c", text: "Vượt giới hạn thể chất của bản thân", weights: { Sports: 3 } },
      { id: "q5_d", text: "Hiểu sâu hơn về thế giới xung quanh", weights: { Academic: 2, Technology: 1 } },
      { id: "q5_e", text: "Kết nối mọi người và tạo ra thay đổi", weights: { Community: 3, Arts: 1 } },
    ],
  },
];
