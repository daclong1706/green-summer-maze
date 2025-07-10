export type CleanItem = {
  id: string;
  content: string;
  type: "text" | "image";
  shouldDelete: boolean;
};

export const getCleanItemsBySize = (size: number): CleanItem[] => {
  if (size < 9) {
    return [
      {
        id: "1",
        content: "Chia sẻ mật khẩu trên status",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "2",
        content: "Gọi video call với người lạ",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "3",
        content: "/images/private-photo.png",
        type: "image",
        shouldDelete: true,
      },
      {
        id: "4",
        content: "Chia sẻ ảnh lớp học không xin phép",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "5",
        content: "Bình luận tích cực",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "6",
        content: "Chia sẻ bài học bổ ích",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "7",
        content: "/images/school-event.jpg",
        type: "image",
        shouldDelete: false,
      },
      {
        id: "8",
        content: "Đăng ảnh bạn bè khi chưa hỏi",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "9",
        content: "Chia sẻ thông tin cá nhân",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "10",
        content: "Gửi ảnh riêng tư cho người lạ",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "11",
        content: "Bài viết có nội dung bạo lực",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "12",
        content: "/images/violent-meme.png",
        type: "image",
        shouldDelete: true,
      },
      {
        id: "13",
        content: "Chia sẻ tin giả",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "14",
        content: "Bài viết khuyến khích học tập",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "15",
        content: "/images/positive-quote.jpg",
        type: "image",
        shouldDelete: false,
      },
    ];
  } else if (size >= 9 && size <= 12) {
    return [
      {
        id: "1",
        content: "Tin giật gân không rõ nguồn",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "2",
        content: "Bình luận xúc phạm người khác",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "3",
        content: "/images/fake-news.jpg",
        type: "image",
        shouldDelete: true,
      },
      {
        id: "4",
        content: "Chia sẻ thông tin sai lệch",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "5",
        content: "Bài viết truyền cảm hứng",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "6",
        content: "Ảnh hoạt động ngoại khóa",
        type: "image",
        shouldDelete: false,
      },
      {
        id: "7",
        content: "Bình luận tích cực",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "8",
        content: "Đăng ảnh người khác không xin phép",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "9",
        content: "Chia sẻ thông tin cá nhân",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "10",
        content: "Ảnh chế xúc phạm",
        type: "image",
        shouldDelete: true,
      },
      {
        id: "11",
        content: "Bài viết cổ vũ bạo lực",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "12",
        content: "Bài viết khuyến khích học tập",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "13",
        content: "/images/educational-post.jpg",
        type: "image",
        shouldDelete: false,
      },
      {
        id: "14",
        content: "Chia sẻ link lừa đảo",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "15",
        content: "Bài viết về kỹ năng sống",
        type: "text",
        shouldDelete: false,
      },
    ];
  } else if (size >= 13 && size <= 15) {
    return [
      {
        id: "1",
        content: "Đăng ảnh CCCD lên mạng",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "2",
        content: "Chia sẻ mật khẩu với bạn bè",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "3",
        content: "/images/id-card.png",
        type: "image",
        shouldDelete: true,
      },
      {
        id: "4",
        content: "Bài viết hướng dẫn bảo mật tài khoản",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "5",
        content: "Ảnh minh họa về quyền riêng tư",
        type: "image",
        shouldDelete: false,
      },
      {
        id: "6",
        content: "Bình luận tiết lộ thông tin cá nhân",
        type: "text",
        shouldDelete: true,
      },
    ];
  } else if (size >= 16 && size <= 18) {
    return [
      {
        id: "1",
        content: "Chia sẻ tin chưa kiểm chứng",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "2",
        content: "Ảnh tiêu đề giật gân",
        type: "image",
        shouldDelete: true,
      },
      {
        id: "3",
        content: "Bài viết kêu gọi chia sẻ tin sai",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "4",
        content: "Bài viết phân tích tin giả",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "5",
        content: "Ảnh hướng dẫn kiểm chứng thông tin",
        type: "image",
        shouldDelete: false,
      },
      {
        id: "6",
        content: "Bình luận phản biện có cơ sở",
        type: "text",
        shouldDelete: false,
      },
    ];
  } else {
    return [
      {
        id: "1",
        content: "Bài viết kích động chia rẽ",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "2",
        content: "Ảnh chế xúc phạm cộng đồng",
        type: "image",
        shouldDelete: true,
      },
      {
        id: "3",
        content: "Bài viết lan tỏa thông điệp tích cực",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "4",
        content: "Bình luận dẫn dắt thảo luận văn minh",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "5",
        content: "Ảnh truyền cảm hứng học tập",
        type: "image",
        shouldDelete: false,
      },
      {
        id: "6",
        content: "Bài viết định hướng tư duy số",
        type: "text",
        shouldDelete: false,
      },
    ];
  }

  return [];
};
