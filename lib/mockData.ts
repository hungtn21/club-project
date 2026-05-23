import { Club, QuizQuestion } from './types';

export const personalityTags = [
  'leadership',
  'creative',
  'technical',
  'communication',
  'teamwork',
  'discipline',
  'competitive',
  'performance',
  'strategic-thinking',
  'confidence',
  'analytical',
  'learning-driven',
  'resilience',
  'social-impact',
  'business',
  'problem-solving',
  'cultural-awareness',
];

export const clubs: Club[] = [
  {
    id: '1',
    name: 'CLB Yêu Sách Bách Khoa Hà Nội',
    category: 'Academic',
    description:
      'Cộng đồng sinh viên yêu sách của Đại học Bách Khoa Hà Nội với slogan “Mở sách đọc tương lai”, nơi thành viên cùng đọc, chia sẻ, thảo luận và lan tỏa văn hóa đọc trong môi trường đại học kỹ thuật.',
    memberCount: 98,
    size: 'Medium',
    isRecruiting: true,
    recruitmentDeadline: '2026-06-10',
    recruitingPositions: [
      { title: 'Thành viên Nội dung', quota: 8 },
      { title: 'Điều phối sự kiện đọc sách', quota: 5 },
      { title: 'Truyền thông cộng đồng', quota: 6 },
    ],
    selectionStages: [
      {
        order: 1,
        name: 'Đơn đăng ký',
        description:
          'Chia sẻ thói quen đọc sách, cuốn sách yêu thích và mong muốn khi tham gia câu lạc bộ.',
      },
      {
        order: 2,
        name: 'Phỏng vấn cá nhân',
        description:
          'Trao đổi về khả năng chia sẻ, tinh thần học hỏi và mức độ cam kết sinh hoạt.',
      },
      {
        order: 3,
        name: 'Thử thách chia sẻ sách',
        description:
          'Chuẩn bị một phần giới thiệu ngắn về một cuốn sách hoặc chủ đề bản thân tâm đắc.',
      },
    ],
    tags: ['learning-driven', 'communication', 'creative', 'analytical'],
    meetingFrequency: 'Sinh hoạt và chia sẻ sách định kỳ hàng tuần',
    icon: 'menu_book',
    vision:
      'CLB Yêu Sách Bách Khoa Hà Nội hướng tới việc xây dựng một cộng đồng sinh viên đọc sâu, nghĩ rộng và biết chuyển hóa tri thức thành hành động. Câu lạc bộ tạo ra không gian để sinh viên Đại học Bách Khoa Hà Nội cùng nuôi dưỡng thói quen đọc, rèn khả năng trình bày quan điểm, phát triển tư duy phản biện và lan tỏa văn hóa đọc tới cộng đồng sinh viên.',
    annualProjects: 14,
    awards: 2,
    activities: [
      {
        icon: 'auto_stories',
        title: 'Book Sharing',
        description:
          'Các buổi chia sẻ sách, giới thiệu sách và thảo luận về nội dung, bài học, góc nhìn cá nhân sau khi đọc.',
      },
      {
        icon: 'local_library',
        title: 'Tủ sách Sinh viên',
        description:
          'Duy trì hoạt động kết nối sách với sinh viên, khuyến khích mượn, trao đổi và giới thiệu sách phù hợp với đời sống đại học.',
      },
      {
        icon: 'edit_note',
        title: 'Review và Viết cảm nhận',
        description:
          'Rèn luyện khả năng viết review, tóm tắt, phân tích và truyền tải giá trị của sách trên các kênh truyền thông.',
      },
      {
        icon: 'campaign',
        title: 'Lan tỏa Văn hóa Đọc',
        description:
          'Tổ chức chiến dịch truyền thông, sự kiện giao lưu và hoạt động cộng đồng để đưa việc đọc sách trở nên gần gũi hơn.',
      },
    ],
    address: 'Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội, Vietnam',
    email: 'clbyeusachbachkhoahanoi@gmail.com',
    website: 'https://www.facebook.com/CLBYeuSachBachKhoaHaNoi',
  },
  {
    id: '2',
    name: 'CLB Múa Đoàn Đại học Bách Khoa Hà Nội',
    category: 'Performance',
    description:
      'Câu lạc bộ nghệ thuật biểu diễn dành cho sinh viên Đại học Bách Khoa Hà Nội yêu thích múa, chuyển động sân khấu, biểu cảm hình thể và các hoạt động văn nghệ trong trường.',
    memberCount: 52,
    size: 'Small',
    isRecruiting: true,
    recruitmentDeadline: '2026-06-12',
    recruitingPositions: [
      { title: 'Thành viên Biểu diễn', quota: 12 },
      { title: 'Biên đạo hỗ trợ', quota: 3 },
      { title: 'Hậu cần sân khấu', quota: 4 },
    ],
    selectionStages: [
      {
        order: 1,
        name: 'Đăng ký thông tin',
        description:
          'Gửi thông tin cá nhân, kinh nghiệm biểu diễn nếu có và thể loại múa yêu thích.',
      },
      {
        order: 2,
        name: 'Vòng thử động tác',
        description:
          'Học và thể hiện một tổ hợp động tác ngắn do ban chuyên môn hướng dẫn.',
      },
      {
        order: 3,
        name: 'Phỏng vấn động lực',
        description:
          'Trao đổi về tinh thần tập luyện, khả năng sắp xếp thời gian và định hướng tham gia.',
      },
    ],
    tags: ['performance', 'discipline', 'creative', 'teamwork'],
    meetingFrequency: 'Tập luyện 2-3 buổi mỗi tuần theo lịch biểu diễn',
    icon: 'self_improvement',
    vision:
      'CLB Múa Đoàn Đại học Bách Khoa Hà Nội tạo môi trường để sinh viên kỹ thuật thể hiện cảm xúc, thẩm mỹ và cá tính qua nghệ thuật múa. Câu lạc bộ đề cao kỷ luật tập luyện, tinh thần đồng đội, khả năng cảm nhạc và sự tự tin khi đứng trên sân khấu.',
    annualProjects: 18,
    awards: 5,
    activities: [
      {
        icon: 'music_note',
        title: 'Tập luyện Vũ đạo',
        description:
          'Các buổi tập định kỳ giúp thành viên rèn kỹ thuật cơ bản, cảm nhạc, đội hình và khả năng biểu cảm.',
      },
      {
        icon: 'theater_comedy',
        title: 'Biểu diễn Sự kiện',
        description:
          'Tham gia các chương trình văn nghệ, lễ hội sinh viên, sự kiện cấp khoa, cấp trường và hoạt động của Đoàn.',
      },
      {
        icon: 'diversity_3',
        title: 'Dự án Biên đạo Nhóm',
        description:
          'Thành viên cùng xây dựng concept, đội hình, động tác và hoàn thiện tiết mục từ ý tưởng đến sân khấu.',
      },
      {
        icon: 'videocam',
        title: 'Dance Video Project',
        description:
          'Sản xuất video vũ đạo ngắn để lưu giữ hoạt động và lan tỏa hình ảnh sinh viên Bách Khoa năng động.',
      },
    ],
    address: 'Đại học Bách Khoa Hà Nội, Quận Hai Bà Trưng, Vietnam',
    email: 'beudhbachkhoa@gmail.com',
    website: 'https://www.facebook.com/BeUBK',
  },
  {
    id: '3',
    name: 'CLB Cờ Vua Bách Khoa Hà Nội - BKC',
    category: 'Mind Sports',
    description:
      'Cộng đồng dành cho sinh viên Đại học Bách Khoa Hà Nội yêu thích cờ vua, rèn luyện tư duy chiến lược, khả năng tính toán, sự tập trung và tinh thần thi đấu bền bỉ.',
    memberCount: 57,
    size: 'Medium',
    isRecruiting: false,
    tags: ['analytical', 'strategic-thinking', 'competitive', 'discipline'],
    meetingFrequency: 'Sinh hoạt và luyện cờ định kỳ hàng tuần',
    icon: 'extension',
    vision:
      'CLB Cờ Vua Bách Khoa Hà Nội - BKC hướng tới việc xây dựng một sân chơi trí tuệ nghiêm túc cho sinh viên. Thành viên được học khai cuộc, trung cuộc, tàn cuộc, phân tích ván đấu và tham gia các giải giao hữu để phát triển tư duy chiến lược trong cả học tập lẫn đời sống.',
    annualProjects: 9,
    awards: 7,
    activities: [
      {
        icon: 'psychology',
        title: 'Phân tích Ván đấu',
        description:
          'Cùng xem lại ván cờ của thành viên và các ván đấu kinh điển để rút kinh nghiệm về chiến thuật, sai lầm và cách xử lý thế cờ.',
      },
      {
        icon: 'emoji_events',
        title: 'Giải Cờ Nội bộ',
        description:
          'Tổ chức giải đấu theo nhiều trình độ để thành viên cọ xát, tích lũy kinh nghiệm và nâng cao bản lĩnh thi đấu.',
      },
      {
        icon: 'school',
        title: 'Lớp Cơ bản cho Người mới',
        description:
          'Hướng dẫn luật chơi, nguyên tắc khai cuộc, cách đọc thế cờ và phương pháp luyện tập cho sinh viên mới bắt đầu.',
      },
      {
        icon: 'groups',
        title: 'Giao lưu Liên trường',
        description:
          'Kết nối với các câu lạc bộ cờ vua ở các trường đại học khác để thi đấu giao hữu và mở rộng cộng đồng.',
      },
    ],
    address: 'Số 1 Đại Cồ Việt, Hanoi, Vietnam',
    email: 'clbcovuabachkhoa@gmail.com',
    website: 'https://www.facebook.com/clbcovuabachkhoahanoi',
  },
  {
    id: '4',
    name: 'EdTech Bách Khoa',
    category: 'Technology',
    description:
      'Câu lạc bộ học thuật tại Đại học Bách Khoa Hà Nội dành cho sinh viên quan tâm đến giáo dục, công nghệ, AI, sản phẩm học tập số và các giải pháp đổi mới trong lĩnh vực EdTech.',
    memberCount: 74,
    size: 'Medium',
    isRecruiting: true,
    recruitmentDeadline: '2026-06-18',
    recruitingPositions: [
      { title: 'Thành viên Nghiên cứu AI giáo dục', quota: 6 },
      { title: 'Phát triển sản phẩm học tập số', quota: 5 },
      { title: 'Truyền thông giáo dục', quota: 5 },
      { title: 'Thiết kế nội dung học thuật', quota: 4 },
    ],
    selectionStages: [
      {
        order: 1,
        name: 'Vòng hồ sơ',
        description:
          'Đánh giá mức độ quan tâm đến giáo dục, công nghệ và kinh nghiệm tham gia dự án nếu có.',
      },
      {
        order: 2,
        name: 'Bài tập tình huống',
        description:
          'Đề xuất ý tưởng ứng dụng công nghệ hoặc AI để giải quyết một vấn đề học tập cụ thể.',
      },
      {
        order: 3,
        name: 'Phỏng vấn nhóm',
        description:
          'Trao đổi về khả năng làm việc nhóm, tư duy sản phẩm và tinh thần học hỏi trong môi trường học thuật.',
      },
    ],
    tags: ['technical', 'learning-driven', 'creative', 'communication'],
    meetingFrequency: 'Workshop và sinh hoạt dự án hàng tuần',
    icon: 'school',
    vision:
      'EdTech Bách Khoa mong muốn kết nối sinh viên có niềm yêu thích giáo dục và công nghệ để cùng nghiên cứu, thử nghiệm và phát triển các giải pháp học tập hiện đại. Câu lạc bộ khuyến khích tư duy sáng tạo, ứng dụng AI có trách nhiệm và tinh thần tạo giá trị thực tiễn cho người học.',
    annualProjects: 16,
    awards: 4,
    activities: [
      {
        icon: 'smart_toy',
        title: 'AI trong Giáo dục',
        description:
          'Tìm hiểu các ứng dụng AI hỗ trợ học tập, cá nhân hóa nội dung và cải thiện trải nghiệm giáo dục.',
      },
      {
        icon: 'design_services',
        title: 'Thiết kế Sản phẩm EdTech',
        description:
          'Xây dựng ý tưởng, prototype và kịch bản sử dụng cho website, app hoặc công cụ học tập số.',
      },
      {
        icon: 'article',
        title: 'Nội dung Học thuật',
        description:
          'Biên soạn bài viết, tài liệu, infographic và nội dung truyền thông về công nghệ giáo dục.',
      },
      {
        icon: 'groups',
        title: 'Dự án Cộng đồng',
        description:
          'Triển khai hoạt động hướng tới học sinh, sinh viên và những nhóm người học cần tiếp cận tri thức công nghệ.',
      },
    ],
    address: '241-3-5 - C7 - Đại học Bách Khoa Hà Nội, Hanoi, Vietnam',
    email: 'edtechhust@gmail.com',
    website: 'https://www.facebook.com/edtech.hust',
  },
  {
    id: '5',
    name: 'CLB An Toàn Thông Tin - BKHN',
    category: 'Technology',
    description:
      'Câu lạc bộ học thuật của Đại học Bách Khoa Hà Nội dành cho sinh viên yêu thích an ninh mạng, bảo mật hệ thống, CTF, tư duy phòng thủ số và nghiên cứu chuyên sâu về an toàn thông tin.',
    memberCount: 88,
    size: 'Medium',
    isRecruiting: true,
    recruitmentDeadline: '2026-06-22',
    recruitingPositions: [
      { title: 'Thành viên CTF', quota: 10 },
      { title: 'Nghiên cứu bảo mật', quota: 6 },
      { title: 'Phát triển công cụ', quota: 5 },
      { title: 'Truyền thông học thuật', quota: 4 },
    ],
    selectionStages: [
      {
        order: 1,
        name: 'Vòng hồ sơ',
        description:
          'Đánh giá nền tảng lập trình, kiến thức bảo mật cơ bản và động lực tham gia.',
      },
      {
        order: 2,
        name: 'Bài test tư duy kỹ thuật',
        description:
          'Kiểm tra logic, kiến thức mạng máy tính, lập trình và khả năng phân tích vấn đề.',
      },
      {
        order: 3,
        name: 'Mini CTF',
        description:
          'Giải một số thử thách cơ bản về web, crypto, forensic hoặc reverse tùy trình độ.',
      },
      {
        order: 4,
        name: 'Phỏng vấn chuyên môn',
        description:
          'Trao đổi về hướng học tập, tinh thần tự học và khả năng tham gia đội nhóm nghiên cứu.',
      },
    ],
    tags: ['technical', 'analytical', 'problem-solving', 'resilience'],
    meetingFrequency: 'Training kỹ thuật và sinh hoạt chuyên môn hàng tuần',
    icon: 'security',
    vision:
      'CLB An Toàn Thông Tin - BKHN, còn được biết đến với tên BKSEC, hướng tới việc xây dựng cộng đồng sinh viên có năng lực bảo vệ hệ thống số, tư duy phân tích rủi ro và tinh thần học hỏi bền bỉ. Câu lạc bộ là nơi thành viên cùng học bảo mật web, mạng máy tính, mã hóa, điều tra số và tham gia các cuộc thi CTF.',
    annualProjects: 17,
    awards: 10,
    activities: [
      {
        icon: 'flag',
        title: 'CTF Training',
        description:
          'Luyện tập các thử thách Capture The Flag theo nhiều mảng như web security, crypto, reverse engineering, pwn và forensic.',
      },
      {
        icon: 'bug_report',
        title: 'Phân tích Lỗ hổng',
        description:
          'Tìm hiểu nguyên lý lỗ hổng phổ biến, cách tái hiện trong môi trường học tập và phương pháp phòng tránh an toàn.',
      },
      {
        icon: 'terminal',
        title: 'Workshop Kỹ thuật',
        description:
          'Các buổi chia sẻ về Linux, mạng máy tính, lập trình bảo mật, điều tra số và quy trình kiểm thử an toàn thông tin.',
      },
      {
        icon: 'emoji_events',
        title: 'Thi đấu An toàn Thông tin',
        description:
          'Thành lập đội tham gia các cuộc thi CTF, cuộc thi sinh viên với an toàn thông tin và sự kiện giao lưu chuyên môn.',
      },
    ],
    address:
      'Phòng 409, Toà nhà B1 - Trường CNTT&TT, Đại học Bách Khoa Hà Nội, Số 1 Đại Cồ Việt, Bạch Mai, Hà Nội',
    email: 'atttbkhn@gmail.com',
    website: 'https://bksec.vn',
  },
  {
    id: '6',
    name: 'HUST Red Owls Baseball Team - Đoàn Đại học Bách Khoa Hà Nội',
    category: 'Sports',
    description:
      'Đội bóng chày của Đoàn Đại học Bách Khoa Hà Nội, nơi sinh viên rèn luyện thể lực, kỹ thuật bóng chày, tinh thần đồng đội và văn hóa thể thao hiện đại.',
    memberCount: 63,
    size: 'Medium',
    isRecruiting: true,
    recruitmentDeadline: '2026-06-15',
    recruitingPositions: [
      { title: 'Vận động viên mới', quota: 15 },
      { title: 'Hỗ trợ truyền thông đội', quota: 4 },
      { title: 'Hậu cần thi đấu', quota: 4 },
    ],
    selectionStages: [
      {
        order: 1,
        name: 'Đăng ký thông tin',
        description:
          'Gửi thông tin cá nhân, nền tảng thể thao và lý do muốn tham gia đội bóng chày.',
      },
      {
        order: 2,
        name: 'Buổi thử thể lực',
        description:
          'Đánh giá sức bền, phản xạ, phối hợp vận động và khả năng tiếp thu kỹ thuật cơ bản.',
      },
      {
        order: 3,
        name: 'Training thử thách',
        description:
          'Tham gia một buổi tập thực tế để đánh giá tinh thần đồng đội, thái độ tập luyện và sự phù hợp.',
      },
    ],
    tags: ['discipline', 'teamwork', 'competitive', 'resilience'],
    meetingFrequency: 'Tập luyện nhiều buổi mỗi tuần theo lịch đội',
    icon: 'sports_baseball',
    vision:
      'HUST Red Owls Baseball Team tạo dựng một cộng đồng thể thao mới mẻ trong Đại học Bách Khoa Hà Nội, nơi thành viên cùng học luật chơi, rèn kỹ thuật, xây dựng tinh thần kỷ luật và đại diện hình ảnh sinh viên Bách Khoa trong các hoạt động bóng chày. Đội đề cao sự bền bỉ, tinh thần đồng đội và văn hóa thể thao tích cực.',
    annualProjects: 12,
    awards: 4,
    activities: [
      {
        icon: 'sports_baseball',
        title: 'Training Bóng chày',
        description:
          'Tập luyện ném bóng, bắt bóng, đánh bóng, chạy base và phối hợp chiến thuật theo từng vị trí.',
      },
      {
        icon: 'fitness_center',
        title: 'Rèn Thể lực',
        description:
          'Các buổi tập sức bền, tốc độ, phản xạ và thể lực nền tảng để đáp ứng yêu cầu thi đấu.',
      },
      {
        icon: 'emoji_events',
        title: 'Thi đấu và Giao hữu',
        description:
          'Tham gia các trận giao hữu, giải đấu sinh viên và hoạt động kết nối với cộng đồng bóng chày.',
      },
      {
        icon: 'campaign',
        title: 'Truyền thông Đội bóng',
        description:
          'Sản xuất nội dung giới thiệu luật chơi, hành trình tập luyện và tinh thần Red Owls tới sinh viên.',
      },
    ],
    address: 'Số 1 Đại Cồ Việt, Hanoi, Vietnam',
    email: 'hustredowlsbaseballteam@gmail.com',
    website: 'https://www.facebook.com/HUSTRedOwlsBaseballTeam',
  },
  {
    id: '7',
    name: 'Bóng Chuyền Đại học Bách Khoa Hà Nội',
    category: 'Sports',
    description:
      'Cộng đồng thể thao dành cho sinh viên Đại học Bách Khoa Hà Nội yêu thích bóng chuyền, rèn luyện sức khỏe, kỹ thuật thi đấu, phối hợp đội hình và tinh thần đồng đội.',
    memberCount: 79,
    size: 'Medium',
    isRecruiting: true,
    recruitmentDeadline: '2026-06-16',
    recruitingPositions: [
      { title: 'Vận động viên Nam/Nữ', quota: 18 },
      { title: 'Hỗ trợ huấn luyện', quota: 3 },
      { title: 'Truyền thông thể thao', quota: 4 },
    ],
    selectionStages: [
      {
        order: 1,
        name: 'Đăng ký thông tin',
        description:
          'Gửi thông tin cá nhân, vị trí từng chơi, kinh nghiệm thi đấu và lịch rảnh.',
      },
      {
        order: 2,
        name: 'Test kỹ thuật cơ bản',
        description:
          'Đánh giá phát bóng, chuyền bước một, chuyền hai, đập bóng, chắn bóng và di chuyển sân.',
      },
      {
        order: 3,
        name: 'Tập thử cùng đội',
        description:
          'Tham gia buổi tập để đánh giá khả năng phối hợp, tinh thần đồng đội và thái độ tập luyện.',
      },
    ],
    tags: ['teamwork', 'discipline', 'competitive', 'resilience'],
    meetingFrequency: 'Tập luyện định kỳ theo lịch đội',
    icon: 'sports_volleyball',
    vision:
      'Bóng Chuyền Đại học Bách Khoa Hà Nội hướng tới xây dựng môi trường thể thao lành mạnh, nơi sinh viên vừa rèn sức khỏe vừa phát triển tinh thần thi đấu, khả năng phối hợp và kỷ luật cá nhân. Câu lạc bộ là điểm đến phù hợp với những bạn muốn gắn bó với thể thao đồng đội và không ngại luyện tập bền bỉ.',
    annualProjects: 11,
    awards: 5,
    activities: [
      {
        icon: 'sports_volleyball',
        title: 'Tập Kỹ thuật',
        description:
          'Rèn luyện phát bóng, đệm bóng, chuyền bóng, đập bóng, chắn bóng và các kỹ thuật nền tảng.',
      },
      {
        icon: 'groups',
        title: 'Phối hợp Đội hình',
        description:
          'Luyện chiến thuật theo đội hình, xoay vòng vị trí và xử lý tình huống trong trận đấu.',
      },
      {
        icon: 'emoji_events',
        title: 'Giải đấu và Giao hữu',
        description:
          'Tham gia các trận giao hữu, giải nội bộ và giải bóng chuyền sinh viên.',
      },
      {
        icon: 'campaign',
        title: 'Truyền thông Thể thao',
        description:
          'Ghi lại khoảnh khắc tập luyện, thi đấu và tinh thần đồng đội trên các kênh truyền thông.',
      },
    ],
    address: 'Số 1 Đại Cồ Việt, Hanoi, Vietnam',
    email: '',
    website: 'https://www.facebook.com/hustbc/',
  },
  {
    id: '8',
    name: 'CLB Tranh Biện Bách Khoa - BKD',
    category: 'Communication',
    description:
      'Câu lạc bộ dành cho sinh viên Đại học Bách Khoa Hà Nội yêu thích tranh biện, tư duy phản biện, lập luận logic, diễn đạt quan điểm và phân tích các vấn đề xã hội.',
    memberCount: 69,
    size: 'Medium',
    isRecruiting: true,
    recruitmentDeadline: '2026-06-14',
    recruitingPositions: [
      { title: 'Thành viên Tranh biện', quota: 12 },
      { title: 'Nghiên cứu motion', quota: 5 },
      { title: 'Truyền thông học thuật', quota: 4 },
      { title: 'Điều phối sự kiện', quota: 3 },
    ],
    selectionStages: [
      {
        order: 1,
        name: 'Đơn đăng ký',
        description:
          'Chia sẻ trải nghiệm tranh biện, vấn đề xã hội quan tâm và mong muốn phát triển kỹ năng.',
      },
      {
        order: 2,
        name: 'Bài lập luận ngắn',
        description:
          'Viết hoặc trình bày quan điểm về một chủ đề để đánh giá tư duy logic và khả năng cấu trúc ý.',
      },
      {
        order: 3,
        name: 'Debate Trial',
        description:
          'Tham gia phần tranh biện thử theo nhóm để đánh giá phản biện, lắng nghe và phối hợp.',
      },
      {
        order: 4,
        name: 'Phỏng vấn phù hợp',
        description:
          'Trao đổi về tinh thần học hỏi, thái độ với khác biệt quan điểm và cam kết sinh hoạt.',
      },
    ],
    tags: ['communication', 'analytical', 'confidence', 'strategic-thinking'],
    meetingFrequency: 'Training tranh biện hàng tuần',
    icon: 'record_voice_over',
    vision:
      'CLB Tranh Biện Bách Khoa - BKD tạo môi trường để sinh viên rèn tư duy phản biện, khả năng nghiên cứu, kỹ năng nói trước đám đông và văn hóa đối thoại văn minh. Câu lạc bộ không chỉ giúp thành viên tranh luận tốt hơn mà còn hỗ trợ các bạn biết lắng nghe, phân tích thông tin và bảo vệ quan điểm bằng lập luận rõ ràng.',
    annualProjects: 13,
    awards: 6,
    activities: [
      {
        icon: 'gavel',
        title: 'Debate Training',
        description:
          'Luyện tập xây dựng case, phản biện, đặt câu hỏi, xử lý POI và trình bày quan điểm trong format tranh biện.',
      },
      {
        icon: 'manage_search',
        title: 'Nghiên cứu Motion',
        description:
          'Phân tích vấn đề xã hội, chính sách, kinh tế, văn hóa và chuẩn bị dữ liệu phục vụ lập luận.',
      },
      {
        icon: 'emoji_events',
        title: 'Giải Tranh biện',
        description:
          'Tổ chức và tham gia các giải tranh biện nội bộ, liên trường và hoạt động giao lưu học thuật.',
      },
      {
        icon: 'mic',
        title: 'Public Speaking',
        description:
          'Rèn luyện giọng nói, ngôn ngữ cơ thể, sự tự tin và khả năng truyền tải thông điệp trước công chúng.',
      },
    ],
    address: 'No.1, Dai Co Viet Street, Hai Ba Trung District, Hanoi, Vietnam',
    email: 'bkd.hust@gmail.com',
    website: 'https://www.facebook.com/TranhBienBK',
  },
  {
    id: '9',
    name: 'Karate-do Bách Khoa',
    category: 'Sports',
    description:
      'Câu lạc bộ võ thuật tại Đại học Bách Khoa Hà Nội dành cho sinh viên muốn rèn luyện Karate-do, nâng cao thể lực, kỷ luật, tinh thần tự chủ và bản lĩnh cá nhân.',
    memberCount: 58,
    size: 'Medium',
    isRecruiting: true,
    recruitmentDeadline: '2026-06-20',
    recruitingPositions: [
      { title: 'Võ sinh mới', quota: 20 },
      { title: 'Hỗ trợ lớp tập', quota: 3 },
      { title: 'Truyền thông võ thuật', quota: 3 },
    ],
    selectionStages: [
      {
        order: 1,
        name: 'Đăng ký thông tin',
        description:
          'Gửi thông tin cá nhân, tình trạng sức khỏe cơ bản và kinh nghiệm võ thuật nếu có.',
      },
      {
        order: 2,
        name: 'Buổi tập thử',
        description:
          'Tham gia buổi tập để làm quen với nề nếp lớp, động tác cơ bản và tinh thần võ đạo.',
      },
      {
        order: 3,
        name: 'Phỏng vấn ngắn',
        description:
          'Trao đổi về mục tiêu rèn luyện, sự kiên trì và khả năng duy trì lịch tập đều đặn.',
      },
    ],
    tags: ['discipline', 'resilience', 'confidence', 'performance'],
    meetingFrequency: 'Tập luyện định kỳ tại nhà thi đấu',
    icon: 'sports_martial_arts',
    vision:
      'Karate-do Bách Khoa hướng tới việc xây dựng môi trường rèn luyện võ thuật nghiêm túc, an toàn và giàu tinh thần võ đạo. Câu lạc bộ giúp sinh viên cải thiện thể lực, sự tập trung, tính kỷ luật và khả năng kiểm soát bản thân thông qua luyện tập Karate-do.',
    annualProjects: 10,
    awards: 5,
    activities: [
      {
        icon: 'sports_martial_arts',
        title: 'Tập Kỹ thuật Cơ bản',
        description:
          'Rèn luyện tấn pháp, đòn tay, đòn chân, di chuyển và các kỹ thuật nền tảng của Karate-do.',
      },
      {
        icon: 'accessibility_new',
        title: 'Kata và Kumite',
        description:
          'Luyện bài quyền, đối luyện có kiểm soát và kỹ năng ứng dụng trong môi trường tập luyện an toàn.',
      },
      {
        icon: 'fitness_center',
        title: 'Thể lực Võ thuật',
        description:
          'Tăng cường sức bền, tốc độ, độ dẻo dai và khả năng phản xạ cho võ sinh.',
      },
      {
        icon: 'emoji_events',
        title: 'Thi đấu và Biểu diễn',
        description:
          'Tham gia các hoạt động biểu diễn, giao lưu và giải đấu phù hợp với trình độ thành viên.',
      },
    ],
    address:
      'Trong nhà thi đấu Đại học Bách Khoa Hà Nội, số 42 phố Tạ Quang Bửu, Hanoi, Vietnam',
    email: 'bttkaratedobkhn@gmail.com',
    website: 'https://www.facebook.com/KaratedoBKHN',
  },
  {
    id: '10',
    name: 'EMCEE - CLB Dẫn chương trình Đoàn Đại học Bách Khoa Hà Nội',
    category: 'Communication',
    description:
      'CLB EMCEE là nơi ươm mầm những tài năng trẻ của Đại học Bách Khoa Hà Nội có niềm đam mê dẫn chương trình, nói trước công chúng và làm chủ sân khấu.',
    memberCount: 61,
    size: 'Medium',
    isRecruiting: true,
    recruitmentDeadline: '2026-06-13',
    recruitingPositions: [
      { title: 'Thành viên MC sân khấu', quota: 10 },
      { title: 'Biên tập kịch bản dẫn', quota: 5 },
      { title: 'Truyền thông hình ảnh', quota: 4 },
      { title: 'Hậu cần sự kiện', quota: 3 },
    ],
    selectionStages: [
      {
        order: 1,
        name: 'Đơn đăng ký',
        description:
          'Chia sẻ kinh nghiệm dẫn chương trình, giọng nói, sở trường và mục tiêu khi tham gia.',
      },
      {
        order: 2,
        name: 'Casting giọng nói',
        description:
          'Thể hiện một đoạn dẫn ngắn để đánh giá phát âm, nhịp nói, thần thái và khả năng kết nối.',
      },
      {
        order: 3,
        name: 'Xử lý tình huống sân khấu',
        description:
          'Nhận tình huống giả định và trình bày cách ứng biến khi chương trình có thay đổi.',
      },
      {
        order: 4,
        name: 'Phỏng vấn cá nhân',
        description:
          'Trao đổi về sự tự tin, tinh thần học hỏi và khả năng tham gia các sự kiện của trường.',
      },
    ],
    tags: ['communication', 'confidence', 'performance', 'leadership'],
    meetingFrequency: 'Training kỹ năng MC và thực hành sân khấu hàng tuần',
    icon: 'mic',
    vision:
      'EMCEE - CLB Dẫn chương trình Đoàn Đại học Bách Khoa Hà Nội xây dựng môi trường để sinh viên phát triển giọng nói, phong thái, khả năng biên tập lời dẫn và bản lĩnh sân khấu. Câu lạc bộ là nơi thành viên được luyện tập thực tế, tham gia dẫn các chương trình và trưởng thành qua từng sự kiện.',
    annualProjects: 20,
    awards: 4,
    activities: [
      {
        icon: 'record_voice_over',
        title: 'Luyện Giọng và Phát âm',
        description:
          'Rèn phát âm, nhả chữ, nhịp nói, kiểm soát hơi thở và cách truyền cảm xúc qua giọng nói.',
      },
      {
        icon: 'theater_comedy',
        title: 'Thực hành Sân khấu',
        description:
          'Tập dẫn theo nhiều format như hội thảo, gala, cuộc thi, lễ khai mạc và chương trình sinh viên.',
      },
      {
        icon: 'edit_note',
        title: 'Viết Kịch bản Dẫn',
        description:
          'Xây dựng rundown, lời mở, lời chuyển, lời kết và phương án ứng biến cho chương trình.',
      },
      {
        icon: 'event',
        title: 'Dẫn Chương trình Thực tế',
        description:
          'Tham gia hỗ trợ và dẫn các sự kiện của Đoàn, Hội, khoa, viện và các hoạt động trong trường.',
      },
    ],
    address: 'Hanoi, Vietnam',
    email: 'clbemceedhbkhn@gmail.com',
    website: 'https://www.facebook.com/EMCEE.DHBK/',
  },
  {
    id: '11',
    name: 'HUST Basketball Club - CLB Bóng rổ Đoàn Đại học Bách Khoa Hà Nội',
    category: 'Sports',
    description:
      'Câu lạc bộ bóng rổ của Đoàn Đại học Bách Khoa Hà Nội, nơi sinh viên rèn kỹ thuật, thể lực, chiến thuật thi đấu và tinh thần đồng đội trên sân bóng rổ.',
    memberCount: 86,
    size: 'Large',
    isRecruiting: true,
    recruitmentDeadline: '2026-06-17',
    recruitingPositions: [
      { title: 'Vận động viên đội nam/nữ', quota: 18 },
      { title: 'Hỗ trợ huấn luyện', quota: 4 },
      { title: 'Truyền thông thể thao', quota: 5 },
      { title: 'Hậu cần giải đấu', quota: 4 },
    ],
    selectionStages: [
      {
        order: 1,
        name: 'Đăng ký thông tin',
        description:
          'Cung cấp thông tin cá nhân, vị trí sở trường, chiều cao, kinh nghiệm chơi bóng và lịch rảnh.',
      },
      {
        order: 2,
        name: 'Test kỹ thuật',
        description:
          'Đánh giá dẫn bóng, ném rổ, chuyền bóng, phòng thủ và khả năng di chuyển.',
      },
      {
        order: 3,
        name: 'Scrimmage',
        description:
          'Thi đấu thử để quan sát tư duy phối hợp, tinh thần đồng đội và khả năng xử lý áp lực.',
      },
      {
        order: 4,
        name: 'Phỏng vấn ngắn',
        description:
          'Trao đổi về mục tiêu tham gia, kỷ luật tập luyện và cam kết với đội.',
      },
    ],
    tags: ['teamwork', 'competitive', 'discipline', 'resilience'],
    meetingFrequency: 'Tập luyện nhiều buổi mỗi tuần theo lịch đội',
    icon: 'sports_basketball',
    vision:
      'HUST Basketball Club hướng tới xây dựng một cộng đồng bóng rổ năng động, có kỷ luật và giàu tinh thần thể thao trong Đại học Bách Khoa Hà Nội. Câu lạc bộ tạo điều kiện để thành viên nâng cao kỹ năng cá nhân, hiểu chiến thuật đồng đội và đại diện trường trong các hoạt động giao hữu, giải đấu sinh viên.',
    annualProjects: 14,
    awards: 8,
    activities: [
      {
        icon: 'sports_basketball',
        title: 'Tập Kỹ thuật Bóng rổ',
        description:
          'Rèn dẫn bóng, ném rổ, chuyền bóng, phòng thủ, di chuyển không bóng và dứt điểm.',
      },
      {
        icon: 'groups',
        title: 'Chiến thuật Đội hình',
        description:
          'Luyện phối hợp tấn công, phòng thủ khu vực, bắt người và triển khai tình huống trong trận.',
      },
      {
        icon: 'emoji_events',
        title: 'Giải đấu và Giao hữu',
        description:
          'Tham gia các giải bóng rổ sinh viên, trận giao hữu và hoạt động thể thao liên trường.',
      },
      {
        icon: 'campaign',
        title: 'Truyền thông Câu lạc bộ',
        description:
          'Sản xuất hình ảnh, video, recap trận đấu và nội dung lan tỏa tinh thần bóng rổ Bách Khoa.',
      },
    ],
    address: 'Số 1 Đại Cồ Việt, Hanoi, Vietnam',
    email: 'hustbasketballclub@gmail.com',
    website: 'https://www.facebook.com/HUSTBasketballClub',
  },
  {
    id: '12',
    name: 'HIEC - CLB Sáng tạo & Khởi nghiệp HUST',
    category: 'Business',
    description:
      'Câu lạc bộ Sáng tạo & Khởi nghiệp của Đại học Bách Khoa Hà Nội, nơi sinh viên phát triển tư duy đổi mới, ý tưởng kinh doanh, dự án khởi nghiệp và năng lực tạo tác động thực tiễn.',
    memberCount: 82,
    size: 'Medium',
    isRecruiting: true,
    recruitmentDeadline: '2026-06-19',
    recruitingPositions: [
      { title: 'Thành viên Dự án khởi nghiệp', quota: 8 },
      { title: 'Nghiên cứu thị trường', quota: 5 },
      { title: 'Đối ngoại và kết nối', quota: 5 },
      { title: 'Truyền thông cộng đồng', quota: 5 },
    ],
    selectionStages: [
      {
        order: 1,
        name: 'Đơn đăng ký',
        description:
          'Chia sẻ ý tưởng, trải nghiệm hoạt động, mối quan tâm về đổi mới sáng tạo và khởi nghiệp.',
      },
      {
        order: 2,
        name: 'Case Challenge',
        description:
          'Giải quyết một bài toán nhỏ về sản phẩm, thị trường hoặc mô hình kinh doanh.',
      },
      {
        order: 3,
        name: 'Phỏng vấn nhóm',
        description:
          'Đánh giá tư duy sáng tạo, khả năng làm việc nhóm và tinh thần chủ động.',
      },
      {
        order: 4,
        name: 'Onboarding dự án',
        description:
          'Tham gia giai đoạn thử việc trong một nhóm dự án hoặc ban chức năng cụ thể.',
      },
    ],
    tags: ['leadership', 'business', 'creative', 'strategic-thinking'],
    meetingFrequency: 'Sinh hoạt dự án, workshop và networking định kỳ',
    icon: 'rocket_launch',
    vision:
      'HIEC - CLB Sáng tạo & Khởi nghiệp HUST hướng tới xây dựng cộng đồng sinh viên dám nghĩ, dám thử và biết biến ý tưởng thành giá trị thực tế. Câu lạc bộ là nơi thành viên học về khởi nghiệp, đổi mới sáng tạo, mô hình kinh doanh, nghiên cứu thị trường và kết nối với hệ sinh thái startup.',
    annualProjects: 18,
    awards: 6,
    activities: [
      {
        icon: 'lightbulb',
        title: 'Ươm mầm Ý tưởng',
        description:
          'Tổ chức hoạt động phát triển ý tưởng, xác định vấn đề, khách hàng mục tiêu và giá trị đề xuất.',
      },
      {
        icon: 'business_center',
        title: 'Dự án Khởi nghiệp',
        description:
          'Thành viên làm việc theo nhóm để xây dựng prototype, kế hoạch kinh doanh và thử nghiệm thị trường.',
      },
      {
        icon: 'connect_without_contact',
        title: 'Networking',
        description:
          'Kết nối sinh viên với mentor, diễn giả, startup, doanh nghiệp và các cuộc thi đổi mới sáng tạo.',
      },
      {
        icon: 'campaign',
        title: 'Truyền thông Khởi nghiệp',
        description:
          'Sản xuất nội dung chia sẻ kiến thức, câu chuyện startup và hoạt động cộng đồng sáng tạo.',
      },
    ],
    address: 'Hà Nội, Vietnam',
    email: 'hiec.hust@gmail.com',
    website: 'https://www.facebook.com/hiec.vn/',
  },
  {
    id: '13',
    name: 'Hedspi Nichibu',
    category: 'Culture',
    description:
      'Câu lạc bộ dành cho cộng đồng sinh viên yêu thích văn hóa Nhật Bản trong môi trường Đại học Bách Khoa Hà Nội, đặc biệt phù hợp với những bạn muốn giao lưu, học hỏi và tham gia hoạt động văn hóa.',
    memberCount: 66,
    size: 'Medium',
    isRecruiting: true,
    recruitmentDeadline: '2026-06-21',
    recruitingPositions: [
      { title: 'Thành viên Văn hóa', quota: 10 },
      { title: 'Nội dung truyền thông', quota: 5 },
      { title: 'Tổ chức sự kiện', quota: 4 },
      { title: 'Thiết kế hình ảnh', quota: 3 },
    ],
    selectionStages: [
      {
        order: 1,
        name: 'Đơn đăng ký',
        description:
          'Chia sẻ mức độ quan tâm tới văn hóa Nhật Bản, kỹ năng hiện có và mong muốn tham gia.',
      },
      {
        order: 2,
        name: 'Mini Challenge',
        description:
          'Thực hiện một nhiệm vụ nhỏ như giới thiệu chủ đề văn hóa, lên ý tưởng sự kiện hoặc sản xuất nội dung ngắn.',
      },
      {
        order: 3,
        name: 'Phỏng vấn phù hợp',
        description:
          'Trao đổi về khả năng giao tiếp, tinh thần cởi mở và cam kết tham gia hoạt động chung.',
      },
    ],
    tags: ['communication', 'cultural-awareness', 'creative', 'teamwork'],
    meetingFrequency: 'Sinh hoạt văn hóa và chuẩn bị sự kiện định kỳ',
    icon: 'travel_explore',
    vision:
      'Hedspi Nichibu xây dựng không gian giao lưu văn hóa Nhật Bản cho sinh viên Đại học Bách Khoa Hà Nội, giúp thành viên mở rộng hiểu biết văn hóa, rèn kỹ năng tổ chức sự kiện, giao tiếp và làm việc nhóm. Câu lạc bộ phù hợp với những bạn có tinh thần cởi mở, yêu thích khám phá và muốn kết nối với cộng đồng cùng sở thích.',
    annualProjects: 12,
    awards: 3,
    activities: [
      {
        icon: 'language',
        title: 'Giao lưu Văn hóa',
        description:
          'Tổ chức buổi chia sẻ về văn hóa, đời sống, ngôn ngữ, lễ hội và các chủ đề liên quan đến Nhật Bản.',
      },
      {
        icon: 'event',
        title: 'Sự kiện Chủ đề',
        description:
          'Xây dựng các hoạt động trải nghiệm, minigame, workshop và chương trình giao lưu cho sinh viên.',
      },
      {
        icon: 'photo_camera',
        title: 'Nội dung Truyền thông',
        description:
          'Sản xuất bài viết, hình ảnh, video ngắn và nội dung giới thiệu văn hóa trên fanpage, TikTok.',
      },
      {
        icon: 'groups',
        title: 'Kết nối Cộng đồng',
        description:
          'Tạo môi trường để thành viên làm quen, trao đổi sở thích và phát triển kỹ năng mềm.',
      },
    ],
    address: 'Hanoi, Vietnam, 112400',
    email: 'hedspi.nichibu@gmail.com',
    website: 'https://www.facebook.com/hedspi.nichibu',
  },
  {
    id: '14',
    name: 'CLB Chiến binh xanh',
    category: 'Social Impact',
    description:
      'Câu lạc bộ học thuật của Trường H&KHSS, Đại học Bách Khoa Hà Nội với tinh thần “Make Green Warriors More Confident”, hướng tới hoạt động xanh, phát triển bản thân và tác động cộng đồng.',
    memberCount: 71,
    size: 'Medium',
    isRecruiting: true,
    recruitmentDeadline: '2026-06-23',
    recruitingPositions: [
      { title: 'Thành viên Dự án xanh', quota: 8 },
      { title: 'Truyền thông cộng đồng', quota: 6 },
      { title: 'Tổ chức sự kiện', quota: 5 },
      { title: 'Nghiên cứu học thuật', quota: 4 },
    ],
    selectionStages: [
      {
        order: 1,
        name: 'Đơn đăng ký',
        description:
          'Chia sẻ mối quan tâm về môi trường, hoạt động xã hội, học thuật và kỹ năng muốn phát triển.',
      },
      {
        order: 2,
        name: 'Bài tập ý tưởng',
        description:
          'Đề xuất một hoạt động nhỏ giúp sinh viên sống xanh, tự tin hơn hoặc tạo ảnh hưởng tích cực.',
      },
      {
        order: 3,
        name: 'Phỏng vấn nhóm',
        description:
          'Trao đổi về tinh thần trách nhiệm, khả năng phối hợp và mong muốn đóng góp lâu dài.',
      },
    ],
    tags: ['social-impact', 'communication', 'leadership', 'resilience'],
    meetingFrequency: 'Sinh hoạt dự án và truyền thông cộng đồng định kỳ',
    icon: 'eco',
    vision:
      'CLB Chiến binh xanh hướng tới xây dựng cộng đồng sinh viên tự tin, có trách nhiệm và quan tâm tới các vấn đề xanh trong đời sống học đường. Câu lạc bộ kết hợp yếu tố học thuật, truyền thông và hoạt động cộng đồng để giúp thành viên phát triển năng lực cá nhân đồng thời tạo ra tác động tích cực.',
    annualProjects: 15,
    awards: 4,
    activities: [
      {
        icon: 'eco',
        title: 'Dự án Sống Xanh',
        description:
          'Triển khai hoạt động nâng cao nhận thức về môi trường, thói quen xanh và trách nhiệm của sinh viên với cộng đồng.',
      },
      {
        icon: 'campaign',
        title: 'Truyền thông Cộng đồng',
        description:
          'Sản xuất nội dung lan tỏa thông điệp xanh, sự tự tin và các giá trị tích cực trong đời sống sinh viên.',
      },
      {
        icon: 'school',
        title: 'Sinh hoạt Học thuật',
        description:
          'Tổ chức buổi chia sẻ, workshop và thảo luận liên quan đến kỹ năng, xã hội, môi trường và phát triển bản thân.',
      },
      {
        icon: 'volunteer_activism',
        title: 'Hoạt động Tình nguyện',
        description:
          'Tham gia các chương trình cộng đồng, sự kiện xanh và hoạt động kết nối sinh viên.',
      },
    ],
    address: 'Số 1 Đại Cồ Việt, Hanoi, Vietnam',
    email: 'clbchienbinhxanh@gmail.com',
    website: 'https://www.facebook.com/CLBChienBinhXanh/',
  },
  {
    id: '15',
    name: 'AMIC - Câu lạc bộ Toán học ứng dụng và Tin học',
    category: 'Academic',
    description:
      'Câu lạc bộ giáo dục của Đại học Bách Khoa Hà Nội dành cho sinh viên yêu thích toán học ứng dụng, tin học, tư duy thuật toán, mô hình hóa và giải quyết vấn đề bằng phương pháp định lượng.',
    memberCount: 73,
    size: 'Medium',
    isRecruiting: true,
    recruitmentDeadline: '2026-06-24',
    recruitingPositions: [
      { title: 'Thành viên Toán ứng dụng', quota: 8 },
      { title: 'Thành viên Tin học', quota: 8 },
      { title: 'Nghiên cứu thuật toán', quota: 5 },
      { title: 'Truyền thông học thuật', quota: 4 },
    ],
    selectionStages: [
      {
        order: 1,
        name: 'Đơn đăng ký',
        description:
          'Chia sẻ nền tảng toán, lập trình, môn học yêu thích và mục tiêu khi tham gia câu lạc bộ.',
      },
      {
        order: 2,
        name: 'Bài test tư duy',
        description:
          'Làm một số câu hỏi logic, toán ứng dụng hoặc lập trình cơ bản tùy định hướng.',
      },
      {
        order: 3,
        name: 'Phỏng vấn học thuật',
        description:
          'Trao đổi về tinh thần tự học, khả năng làm việc nhóm và mong muốn tham gia dự án học thuật.',
      },
    ],
    tags: ['analytical', 'technical', 'learning-driven', 'problem-solving'],
    meetingFrequency: 'Sinh hoạt học thuật và luyện bài định kỳ',
    icon: 'functions',
    vision:
      'AMIC - Câu lạc bộ Toán học ứng dụng và Tin học hướng tới xây dựng môi trường học thuật cho sinh viên yêu thích tư duy định lượng. Câu lạc bộ giúp thành viên rèn nền tảng toán, lập trình, thuật toán, mô hình hóa và khả năng áp dụng kiến thức vào các bài toán thực tế.',
    annualProjects: 13,
    awards: 6,
    activities: [
      {
        icon: 'calculate',
        title: 'Toán học Ứng dụng',
        description:
          'Cùng học và thảo luận các chủ đề như tối ưu, xác suất, đại số tuyến tính, mô hình hóa và phương pháp tính.',
      },
      {
        icon: 'terminal',
        title: 'Tin học và Lập trình',
        description:
          'Rèn luyện kỹ năng lập trình, thuật toán, cấu trúc dữ liệu và giải quyết bài toán bằng code.',
      },
      {
        icon: 'psychology',
        title: 'Problem Solving',
        description:
          'Tổ chức buổi luyện tư duy logic, phân tích đề, trình bày lời giải và học hỏi phương pháp giải từ thành viên.',
      },
      {
        icon: 'article',
        title: 'Chia sẻ Học thuật',
        description:
          'Biên soạn tài liệu, bài viết và nội dung giải thích kiến thức toán - tin theo cách dễ tiếp cận.',
      },
    ],
    address: 'Số 1 Đại Cồ Việt, Hanoi, Vietnam',
    email: 'amic.club@gmail.com',
    website: 'https://www.facebook.com/AMIC.HUST',
  },
];

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    text: 'Tối thứ Sáu, bạn thích làm gì nhất?',
    options: [
      {
        id: 'q1_a',
        text: 'Code một dự án cá nhân',
        weights: { Technology: 3, Academic: 1 },
      },
      {
        id: 'q1_b',
        text: 'Vẽ, thiết kế hoặc làm nhạc',
        weights: { Arts: 3, Community: 1 },
      },
      {
        id: 'q1_c',
        text: 'Chạy bộ hoặc chơi thể thao',
        weights: { Sports: 3 },
      },
      {
        id: 'q1_d',
        text: 'Đọc sách hoặc thảo luận chuyên sâu',
        weights: { Academic: 3, Technology: 1 },
      },
      {
        id: 'q1_e',
        text: 'Tổ chức sự kiện cho cộng đồng',
        weights: { Community: 3, Arts: 1 },
      },
    ],
  },
  {
    id: 'q2',
    text: 'Loại công việc nào khiến bạn hứng khởi nhất?',
    options: [
      {
        id: 'q2_a',
        text: 'Giải quyết bài toán kỹ thuật khó',
        weights: { Technology: 3 },
      },
      {
        id: 'q2_b',
        text: 'Thiết kế một thứ gì đó đẹp mắt',
        weights: { Arts: 3, Technology: 1 },
      },
      {
        id: 'q2_c',
        text: 'Luyện tập và cải thiện thể chất',
        weights: { Sports: 3 },
      },
      {
        id: 'q2_d',
        text: 'Xây dựng lập luận thuyết phục',
        weights: { Academic: 3, Community: 1 },
      },
      {
        id: 'q2_e',
        text: 'Tập hợp mọi người vì một mục tiêu chung',
        weights: { Community: 3, Academic: 1 },
      },
    ],
  },
  {
    id: 'q3',
    text: 'Bạn thích học theo cách nào?',
    options: [
      {
        id: 'q3_a',
        text: 'Tự xây dựng dự án và đọc tài liệu',
        weights: { Technology: 2, Academic: 1 },
      },
      {
        id: 'q3_b',
        text: 'Workshop và thực hành trực tiếp',
        weights: { Arts: 2, Community: 1 },
      },
      {
        id: 'q3_c',
        text: 'Luyện tập thể chất lặp đi lặp lại',
        weights: { Sports: 3 },
      },
      {
        id: 'q3_d',
        text: 'Nghiên cứu và học có hệ thống',
        weights: { Academic: 2, Technology: 1 },
      },
      {
        id: 'q3_e',
        text: 'Thảo luận và làm dự án nhóm',
        weights: { Community: 2, Arts: 1 },
      },
    ],
  },
  {
    id: 'q4',
    text: 'CLB lý tưởng của bạn sẽ tạo ra điều gì?',
    options: [
      {
        id: 'q4_a',
        text: 'Sản phẩm hoạt động được hoặc công cụ mã nguồn mở',
        weights: { Technology: 3 },
      },
      {
        id: 'q4_b',
        text: 'Triển lãm, tạp chí hoặc buổi biểu diễn',
        weights: { Arts: 3, Community: 1 },
      },
      {
        id: 'q4_c',
        text: 'Kết quả thi đấu hoặc chức vô địch',
        weights: { Sports: 3, Academic: 1 },
      },
      {
        id: 'q4_d',
        text: 'Chiến thắng tranh luận hoặc bài nghiên cứu',
        weights: { Academic: 3 },
      },
      {
        id: 'q4_e',
        text: 'Sự thay đổi lâu dài cho trường học',
        weights: { Community: 3, Academic: 1 },
      },
    ],
  },
  {
    id: 'q5',
    text: 'Điều gì thúc đẩy bạn nhiều nhất?',
    options: [
      {
        id: 'q5_a',
        text: 'Tạo ra những thứ chưa từng tồn tại',
        weights: { Technology: 2, Academic: 1 },
      },
      {
        id: 'q5_b',
        text: 'Thể hiện tầm nhìn sáng tạo của bạn',
        weights: { Arts: 3 },
      },
      {
        id: 'q5_c',
        text: 'Vượt giới hạn thể chất của bản thân',
        weights: { Sports: 3 },
      },
      {
        id: 'q5_d',
        text: 'Hiểu sâu hơn về thế giới xung quanh',
        weights: { Academic: 2, Technology: 1 },
      },
      {
        id: 'q5_e',
        text: 'Kết nối mọi người và tạo ra thay đổi',
        weights: { Community: 3, Arts: 1 },
      },
    ],
  },
];
