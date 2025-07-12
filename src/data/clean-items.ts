export type CleanItem = {
  id: string;
  content: string;
  type: "text";
  shouldDelete: boolean;
};

export const getCleanItemsBySize = (size: number): CleanItem[] => {
  if (size < 12) {
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
        content: "Chia sẻ ảnh lớp học không xin phép",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "4",
        content: "Bình luận tích cực",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "5",
        content: "Chia sẻ bài học bổ ích",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "6",
        content: "Đăng ảnh bạn bè khi chưa hỏi",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "7",
        content: "Chia sẻ thông tin cá nhân",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "8",
        content: "Gửi ảnh riêng tư cho người lạ",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "9",
        content: "Bài viết có nội dung bạo lực",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "10",
        content: "Chia sẻ tin giả",
        type: "text",
        shouldDelete: true,
      },
    ];
  } else {
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
        content: "Chia sẻ thông tin sai lệch",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "4",
        content: "Bài viết truyền cảm hứng",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "5",
        content: "Bình luận tích cực",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "6",
        content: "Đăng ảnh người khác không xin phép",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "7",
        content: "Chia sẻ thông tin cá nhân",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "8",
        content: "Bài viết cổ vũ bạo lực",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "9",
        content: "Bài viết khuyến khích học tập",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "10",
        content: "Chia sẻ link lừa đảo",
        type: "text",
        shouldDelete: true,
      },
    ];
  }
};
