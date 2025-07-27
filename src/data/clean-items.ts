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

      {
        id: "11",
        content: "Không chấp nhận lời mời kết bạn từ người lạ",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "12",
        content: "Không chia sẻ mật khẩu với bạn bè",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "13",
        content: "Không nhấn vào link lạ trong tin nhắn",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "14",
        content: "Luôn kiểm tra nguồn tin trước khi chia sẻ",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "15",
        content: "Không đăng ảnh cá nhân quá riêng tư",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "16",
        content: "Không trả lời tin nhắn từ tài khoản đáng ngờ",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "17",
        content: "Không chia sẻ vị trí hiện tại công khai",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "18",
        content: "Chỉ kết bạn với người quen biết rõ",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "19",
        content: "Không đăng bài khi đang tức giận",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "20",
        content: "Đọc kỹ điều khoản khi dùng ứng dụng mới",
        type: "text",
        shouldDelete: false,
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

      {
        id: "11",
        content: "Phân tích độ tin cậy của nguồn tin trước khi chia sẻ",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "12",
        content: "Không tham gia các thử thách nguy hiểm trên mạng",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "13",
        content: "Cảnh giác với các tài khoản giả mạo người nổi tiếng",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "14",
        content: "Không lan truyền thông tin chưa kiểm chứng về sức khỏe",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "15",
        content: "Không chia sẻ hình ảnh người khác trong tình huống nhạy cảm",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "16",
        content: "Tìm hiểu kỹ về quyền riêng tư khi sử dụng mạng xã hội",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "17",
        content: "Không tham gia bình luận kích động hoặc gây chia rẽ",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "18",
        content: "Không sử dụng mạng xã hội để công kích cá nhân",
        type: "text",
        shouldDelete: true,
      },
      {
        id: "19",
        content: "Luôn kiểm tra độ bảo mật của tài khoản cá nhân",
        type: "text",
        shouldDelete: false,
      },
      {
        id: "20",
        content: "Không chia sẻ thông tin tài chính cá nhân lên mạng",
        type: "text",
        shouldDelete: true,
      },
    ];
  }
};
