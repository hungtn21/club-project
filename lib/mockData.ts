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
    meetingFrequency: "Weekly meetups",
    icon: "terminal",
    vision:
      "We are dedicated to fostering a rigorous environment where students can explore advanced computing paradigms. Our mission is to bridge the gap between theoretical computer science and practical, industry-standard software engineering. By cultivating a culture of peer-driven learning and algorithmic thinking, we aim to produce the next generation of technical leaders.",
    annualProjects: 24,
    awards: 6,
    activities: [
      {
        icon: "code",
        title: "Coding Workshops",
        description:
          "Weekly hands-on sessions covering web development, algorithms, and software engineering best practices.",
      },
      {
        icon: "hub",
        title: "Open Source Projects",
        description:
          "Collaborative contributions to open source projects, building real-world experience and portfolios.",
      },
      {
        icon: "developer_board",
        title: "Hackathons",
        description:
          "Intensive 48-hour coding challenges designed to foster rapid prototyping and creative problem-solving.",
      },
      {
        icon: "school",
        title: "Tech Talks",
        description:
          "Monthly speaker sessions from industry professionals sharing insights on emerging technologies and career paths.",
      },
    ],
    address: "Room 201, D9 Building, Hanoi University of Science and Technology",
    email: "contact@devcircle.hust.edu.vn",
    website: "fb.com/devcircle.hust",
  },
  {
    id: "2",
    name: "Design Lab",
    category: "Arts",
    description:
      "Explore UI/UX, graphic design, and creative thinking in a collaborative studio environment.",
    memberCount: 52,
    tags: ["design", "ui", "creativity"],
    meetingFrequency: "Thu evenings",
    icon: "brush",
    vision:
      "Design Lab exists to nurture the creative minds of tomorrow. We believe that great design is the intersection of art and technology. Our studio provides a collaborative space for students to develop their visual literacy, user empathy, and design thinking skills while building a portfolio that stands out.",
    annualProjects: 18,
    awards: 4,
    activities: [
      {
        icon: "palette",
        title: "Design Critiques",
        description:
          "Regular peer review sessions where members present work and receive structured, constructive feedback.",
      },
      {
        icon: "devices",
        title: "UI/UX Sprints",
        description:
          "Fast-paced product design sprints simulating real agency workflows and client deliverables.",
      },
      {
        icon: "photo_camera",
        title: "Visual Storytelling",
        description:
          "Photography and illustration workshops focused on communicating ideas through compelling visuals.",
      },
      {
        icon: "groups",
        title: "Industry Mentorship",
        description:
          "One-on-one sessions with professional designers from leading product companies and agencies.",
      },
    ],
    address: "Room 305, B1 Building, Hanoi University of Science and Technology",
    email: "contact@designlab.hust.edu.vn",
    website: "fb.com/designlab.hust",
  },
  {
    id: "3",
    name: "Green Campus",
    category: "Community",
    description:
      "Driving sustainability initiatives on campus through events, research, and advocacy.",
    memberCount: 67,
    tags: ["environment", "volunteer", "campus"],
    meetingFrequency: "Monthly meetings",
    icon: "eco",
    vision:
      "Green Campus is committed to transforming our university into a model of environmental responsibility. We work at the intersection of student activism, scientific research, and community engagement to drive meaningful change. Every initiative we run is designed to educate, inspire, and create lasting impact beyond the campus borders.",
    annualProjects: 12,
    awards: 3,
    activities: [
      {
        icon: "recycling",
        title: "Campus Recycling Drives",
        description:
          "Organizing campus-wide waste collection events and educating students on responsible recycling practices.",
      },
      {
        icon: "forest",
        title: "Green Research",
        description:
          "Student-led sustainability research projects in partnership with the university's environmental science department.",
      },
      {
        icon: "volunteer_activism",
        title: "Community Outreach",
        description:
          "Environmental awareness campaigns and volunteer activities in the surrounding Hanoi neighborhoods.",
      },
      {
        icon: "lightbulb",
        title: "Policy Advocacy",
        description:
          "Working with university administration to implement sustainable policies across campus facilities.",
      },
    ],
    address: "Room 102, C6 Building, Hanoi University of Science and Technology",
    email: "contact@greencampus.hust.edu.vn",
    website: "fb.com/greencampus.hust",
  },
  {
    id: "4",
    name: "Debate Society",
    category: "Academic",
    description:
      "Sharpen your critical thinking and public speaking through weekly debates and tournaments.",
    memberCount: 39,
    tags: ["speaking", "logic", "competition"],
    meetingFrequency: "Twice weekly",
    icon: "forum",
    vision:
      "The Debate Society is a forum for rigorous intellectual exchange. We challenge students to articulate complex arguments with clarity and precision, develop empathy by defending positions they may personally oppose, and compete at national and international levels. We believe strong debate skills are foundational to leadership in any field.",
    annualProjects: 8,
    awards: 9,
    activities: [
      {
        icon: "mic",
        title: "Weekly Debates",
        description:
          "Structured debate sessions covering current affairs, philosophy, and academic topics in British Parliamentary format.",
      },
      {
        icon: "emoji_events",
        title: "Tournaments",
        description:
          "Participation in regional and national debate competitions, with internal prep rounds and coaching.",
      },
      {
        icon: "record_voice_over",
        title: "Public Speaking",
        description:
          "Workshops on rhetoric, presentation skills, and impromptu speaking for academic and professional contexts.",
      },
      {
        icon: "menu_book",
        title: "Research Workshops",
        description:
          "Training sessions on building evidence-based arguments, sourcing credible materials, and logical reasoning.",
      },
    ],
    address: "Room 410, TC Building, Hanoi University of Science and Technology",
    email: "contact@debate.hust.edu.vn",
    website: "fb.com/debate.hust",
  },
  {
    id: "5",
    name: "Running Club",
    category: "Sports",
    description:
      "Weekly runs for all fitness levels. We train, race, and celebrate movement together.",
    memberCount: 120,
    tags: ["fitness", "outdoors", "health"],
    meetingFrequency: "Daily runs",
    icon: "directions_run",
    vision:
      "Running Club was founded on the belief that movement is medicine. We welcome runners of every level — from first-timers to marathon veterans — and build an inclusive community around shared miles, mutual encouragement, and physical wellbeing. We train together, race together, and celebrate every finish line together.",
    annualProjects: 6,
    awards: 5,
    activities: [
      {
        icon: "sprint",
        title: "Morning Runs",
        description:
          "Daily 6 AM group runs through the campus and surrounding park areas, all paces welcome.",
      },
      {
        icon: "fitness_center",
        title: "Strength Training",
        description:
          "Twice-weekly cross-training sessions focused on injury prevention and performance improvement.",
      },
      {
        icon: "emoji_events",
        title: "Race Participation",
        description:
          "Organized entries into city marathons, half-marathons, and student sport competitions as a team.",
      },
      {
        icon: "favorite",
        title: "Wellness Talks",
        description:
          "Monthly sessions on nutrition, recovery, mental health, and sustainable athletic habits for students.",
      },
    ],
    address:
      "Sports Complex, A8 Building, Hanoi University of Science and Technology",
    email: "contact@runningclub.hust.edu.vn",
    website: "fb.com/runningclub.hust",
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
