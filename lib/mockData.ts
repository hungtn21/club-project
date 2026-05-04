import { Club, QuizQuestion } from "./types";

export const clubs: Club[] = [
  {
    id: "1",
    name: "Dev Circle",
    category: "Technology",
    description:
      "Cộng đồng dành cho các lập trình viên cùng nhau xây dựng, chia sẻ và phát triển thông qua các dự án và hội thảo.",
    memberCount: 84,
    size: "Medium",
    isRecruiting: true,
    recruitmentDeadline: "2025-05-20",
    recruitingPositions: [
      { title: "Lập trình viên Backend", quota: 8 },
      { title: "Lập trình viên Frontend", quota: 6 },
      { title: "Quản lý Dự án", quota: 4 },
    ],
    selectionStages: [
      { order: 1, name: "CV Review", description: "Đánh giá hồ sơ và portfolio trực tuyến" },
      { order: 2, name: "Vòng Phỏng vấn Kỹ thuật", description: "Kiểm tra kiến thức kỹ thuật qua bài tập coding" },
      { order: 3, name: "Vòng Phỏng vấn Cá nhân", description: "Đánh giá động lực, kỹ năng giao tiếp và sự phù hợp" },
      { order: 4, name: "Quyết định Cuối cùng", description: "Kết quả và lời mời tham gia" },
    ],
    tags: ["coding", "open-source", "web"],
    meetingFrequency: "Họp mặt hàng tuần",
    icon: "terminal",
    vision:
      "Chúng tôi tận tâm nuôi dưỡng một môi trường nghiêm túc, nơi sinh viên có thể khám phá các mô hình máy tính tiên tiến. Sứ mệnh của chúng tôi là thu hẹp khoảng cách giữa khoa học máy tính lý thuyết và kỹ thuật phần mềm thực tế, tiêu chuẩn ngành. Bằng cách nuôi dưỡng văn hóa học tập đồng đẳng và tư duy thuật toán, chúng tôi đặt mục tiêu tạo ra thế hệ lãnh đạo kỹ thuật tiếp theo.",
    annualProjects: 24,
    awards: 6,
    activities: [
      {
        icon: "code",
        title: "Hội thảo Lập trình",
        description:
          "Các buổi thực hành hàng tuần về phát triển web, thuật toán và các phương pháp kỹ thuật phần mềm tốt nhất.",
      },
      {
        icon: "hub",
        title: "Dự án Mã nguồn mở",
        description:
          "Đóng góp chung vào các dự án mã nguồn mở, tích lũy kinh nghiệm thực tế và xây dựng hồ sơ năng lực.",
      },
      {
        icon: "developer_board",
        title: "Hackathons",
        description:
          "Thử thách lập trình cường độ cao trong 48 giờ được thiết kế để thúc đẩy tạo mẫu nhanh và giải quyết vấn đề sáng tạo.",
      },
      {
        icon: "school",
        title: "Tech Talks",
        description:
          "Các buổi trò chuyện hàng tháng với diễn giả từ các chuyên gia trong ngành chia sẻ hiểu biết về các công nghệ mới nổi và con đường sự nghiệp.",
      },
    ],
    address: "Phòng 201, Nhà D9, Đại học Bách Khoa Hà Nội",
    email: "contact@devcircle.hust.edu.vn",
    website: "fb.com/devcircle.hust",
  },
  {
    id: "2",
    name: "Design Lab",
    category: "Arts",
    description:
      "Khám phá UI/UX, thiết kế đồ họa và tư duy sáng tạo trong môi trường studio hợp tác.",
    memberCount: 52,
    size: "Small",
    isRecruiting: false,
    tags: ["design", "ui", "creativity"],
    meetingFrequency: "Tối thứ Năm",
    icon: "brush",
    vision:
      "Design Lab tồn tại để nuôi dưỡng những bộ óc sáng tạo của tương lai. Chúng tôi tin rằng thiết kế tuyệt vời là sự giao thoa giữa nghệ thuật và công nghệ. Studio của chúng tôi cung cấp không gian cộng tác để sinh viên phát triển khả năng thẩm mỹ, sự thấu hiểu người dùng và kỹ năng tư duy thiết kế trong khi xây dựng một hồ sơ năng lực nổi bật.",
    annualProjects: 18,
    awards: 4,
    activities: [
      {
        icon: "palette",
        title: "Phê bình Thiết kế",
        description:
          "Các buổi đánh giá định kỳ nơi các thành viên trình bày tác phẩm và nhận phản hồi có cấu trúc, mang tính xây dựng.",
      },
      {
        icon: "devices",
        title: "UI/UX Sprints",
        description:
          "Các đợt thiết kế sản phẩm tốc độ cao mô phỏng quy trình làm việc thực tế của các agency và kết quả bàn giao cho khách hàng.",
      },
      {
        icon: "photo_camera",
        title: "Kể chuyện bằng Hình ảnh",
        description:
          "Hội thảo nhiếp ảnh và minh họa tập trung vào việc truyền đạt ý tưởng thông qua hình ảnh hấp dẫn.",
      },
      {
        icon: "groups",
        title: "Cố vấn từ Ngành",
        description:
          "Các buổi làm việc một-một với các nhà thiết kế chuyên nghiệp từ các công ty sản phẩm và agency hàng đầu.",
      },
    ],
    address: "Phòng 305, Nhà B1, Đại học Bách Khoa Hà Nội",
    email: "contact@designlab.hust.edu.vn",
    website: "fb.com/designlab.hust",
  },
  {
    id: "3",
    name: "Green Campus",
    category: "Community",
    description:
      "Thúc đẩy các sáng kiến bền vững trong khuôn viên trường thông qua các sự kiện, nghiên cứu và vận động.",
    memberCount: 67,
    size: "Medium",
    isRecruiting: true,
    recruitmentDeadline: "2025-05-25",
    recruitingPositions: [
      { title: "Điều phối sự kiện", quota: 5 },
      { title: "Tiếp cận Cộng đồng", quota: 7 },
      { title: "Quản lý Nội dung", quota: 4 },
    ],
    selectionStages: [
      { order: 1, name: "Đơn ứng tuyển", description: "Điền thông tin cá nhân và động lực tham gia" },
      { order: 2, name: "Vòng Phỏng vấn Nhóm", description: "Thảo luận về dự án bền vững với các ứng viên khác" },
      { order: 3, name: "Vòng Phỏng vấn Cá nhân", description: "Trò chuyện một-một với người phụ trách" },
    ],
    tags: ["environment", "volunteer", "campus"],
    meetingFrequency: "Họp hàng tháng",
    icon: "eco",
    vision:
      "Green Campus cam kết biến trường đại học của chúng ta thành một mô hình về trách nhiệm môi trường. Chúng tôi làm việc tại điểm giao thoa giữa hoạt động sinh viên, nghiên cứu khoa học và sự tham gia của cộng đồng để thúc đẩy sự thay đổi có ý nghĩa. Mọi sáng kiến chúng tôi thực hiện đều được thiết kế để giáo dục, truyền cảm hứng và tạo ra tác động lâu dài vượt ra ngoài khuôn viên trường.",
    annualProjects: 12,
    awards: 3,
    activities: [
      {
        icon: "recycling",
        title: "Chiến dịch Tái chế Học đường",
        description:
          "Tổ chức các sự kiện thu gom rác thải toàn trường và giáo dục sinh viên về các thực hành tái chế có trách nhiệm.",
      },
      {
        icon: "forest",
        title: "Nghiên cứu Xanh",
        description:
          "Các dự án nghiên cứu về tính bền vững do sinh viên dẫn đầu phối hợp với khoa khoa học môi trường của trường.",
      },
      {
        icon: "volunteer_activism",
        title: "Tiếp cận Cộng đồng",
        description:
          "Các chiến dịch nâng cao nhận thức về môi trường và các hoạt động tình nguyện tại các khu dân cư lân cận ở Hà Nội.",
      },
      {
        icon: "lightbulb",
        title: "Vận động Chính sách",
        description:
          "Làm việc với ban giám hiệu nhà trường để thực hiện các chính sách bền vững tại các cơ sở vật chất trong khuôn viên trường.",
      },
    ],
    address: "Phòng 102, Nhà C6, Đại học Bách Khoa Hà Nội",
    email: "contact@greencampus.hust.edu.vn",
    website: "fb.com/greencampus.hust",
  },
  {
    id: "4",
    name: "Debate Society",
    category: "Academic",
    description:
      "Rèn luyện tư duy phản biện và kỹ năng thuyết trình trước công chúng thông qua các buổi tranh biện và giải đấu hàng tuần.",
    memberCount: 39,
    recruitmentDeadline: "2025-05-15",
    recruitingPositions: [
      { title: "Thành viên Tranh biện", quota: 10 },
      { title: "Huấn luyện viên", quota: 3 },
      { title: "Tài vụ", quota: 2 },
    ],
    selectionStages: [
      { order: 1, name: "Nộp CV", description: "Gửi hồ sơ cá nhân và mô tả sở thích" },
      { order: 2, name: "Vòng Sơ loại", description: "Thuyết trình ngắn 5 phút về một chủ đề" },
      { order: 3, name: "Vòng Tranh biện", description: "Tham gia tranh biện trực tiếp với các thành viên hiện tại" },
      { order: 4, name: "Phỏng vấn Lựa chọn", description: "Trò chuyện về mục tiêu cá nhân và sự cam kết" },
    ],
    size: "Small",
    isRecruiting: true,
    tags: ["speaking", "logic", "competition"],
    meetingFrequency: "Hai lần mỗi tuần",
    icon: "forum",
    vision:
      "Hội Tranh biện là diễn đàn để trao đổi trí tuệ nghiêm túc. Chúng tôi thách thức sinh viên trình bày các lập luận phức tạp một cách rõ ràng và chính xác, phát triển sự thấu cảm bằng cách bảo vệ các quan điểm mà họ có thể phản đối cá nhân và thi đấu ở cấp quốc gia và quốc tế. Chúng tôi tin rằng kỹ năng tranh biện mạnh mẽ là nền tảng cho sự lãnh đạo trong bất kỳ lĩnh vực nào.",
    annualProjects: 8,
    awards: 9,
    activities: [
      {
        icon: "mic",
        title: "Tranh biện Hàng tuần",
        description:
          "Các buổi tranh biện có cấu trúc về các vấn đề thời sự, triết học và các chủ đề học thuật theo định dạng Nghị viện Anh.",
      },
      {
        icon: "emoji_events",
        title: "Giải đấu",
        description:
          "Tham gia các cuộc thi tranh biện khu vực và quốc gia, với các vòng chuẩn bị nội bộ và huấn luyện.",
      },
      {
        icon: "record_voice_over",
        title: "Nói trước Công chúng",
        description:
          "Hội thảo về hùng biện, kỹ năng thuyết trình và nói ứng biến trong bối cảnh học thuật và chuyên nghiệp.",
      },
      {
        icon: "menu_book",
        title: "Hội thảo Nghiên cứu",
        description:
          "Các buổi đào tạo về xây dựng lập luận dựa trên bằng chứng, tìm kiếm tài liệu đáng tin cậy và tư duy logic.",
      },
    ],
    address: "Phòng 410, Nhà TC, Đại học Bách Khoa Hà Nội",
    email: "contact@debate.hust.edu.vn",
    website: "fb.com/debate.hust",
  },
  {
    id: "5",
    name: "Running Club",
    category: "Sports",
    description:
      "Chạy bộ hàng tuần cho mọi cấp độ thể lực. Chúng tôi cùng nhau tập luyện, thi đấu và tôn vinh sự vận động.",
    memberCount: 120,
    size: "Large",
    isRecruiting: false,
    tags: ["fitness", "outdoors", "health"],
    meetingFrequency: "Chạy bộ hàng ngày",
    icon: "directions_run",
    vision:
      "Câu lạc bộ Chạy bộ được thành lập trên niềm tin rằng vận động là liều thuốc. Chúng tôi chào đón những người chạy ở mọi cấp độ — từ những người mới bắt đầu đến những người kỳ cựu chạy marathon — và xây dựng một cộng đồng hòa nhập xung quanh những dặm đường chia sẻ, sự khuyến khích lẫn nhau và sức khỏe thể chất. Chúng tôi cùng nhau tập luyện, cùng nhau thi đấu và cùng nhau ăn mừng mỗi vạch đích.",
    annualProjects: 6,
    awards: 5,
    activities: [
      {
        icon: "sprint",
        title: "Chạy bộ buổi sáng",
        description:
          "Chạy bộ nhóm hàng ngày lúc 6 giờ sáng qua khuôn viên trường và các khu vực công viên lân cận, chào đón mọi tốc độ.",
      },
      {
        icon: "fitness_center",
        title: "Tập luyện Sức mạnh",
        description:
          "Các buổi tập bổ trợ hai lần mỗi tuần tập trung vào phòng tránh chấn thương và cải thiện hiệu suất.",
      },
      {
        icon: "emoji_events",
        title: "Tham gia Giải chạy",
        description:
          "Tổ chức tham gia các giải chạy marathon, bán marathon của thành phố và các cuộc thi thể thao sinh viên dưới danh nghĩa đồng đội.",
      },
      {
        icon: "favorite",
        title: "Trò chuyện Sức khỏe",
        description:
          "Các buổi trò chuyện hàng tháng về dinh dưỡng, phục hồi, sức khỏe tâm thần và thói quen thể thao bền vững cho sinh viên.",
      },
    ],
    address: "Khu liên hợp thể thao, Nhà A8, Đại học Bách Khoa Hà Nội",
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
