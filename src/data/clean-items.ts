export type CleanItem = {
  id: string;
  content: string;
  type: "text" | "image";
  shouldDelete: boolean;
};

export const getCleanItemsBySize = (size: number): CleanItem[] => {
  if (size === 8) {
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
        content: "/background.png",
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
        content: "/background.png",
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
        content: "/background.png",
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
        content: "/background.png",
        type: "image",
        shouldDelete: false,
      },
    ];
  }

  return [];
};
