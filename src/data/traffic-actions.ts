export type TrafficLevel = "red" | "yellow" | "green";

export function getTrafficActionsBySize(
  size: number
): { text: string; level: TrafficLevel }[] {
  if (size < 12) {
    return [
      // 🟥 RED - Không nên làm
      { text: "Kết bạn với người lạ trên mạng", level: "red" },
      { text: "Chia sẻ mật khẩu với bạn bè", level: "red" },
      { text: "Gửi ảnh riêng tư cho người chưa quen", level: "red" },
      { text: "Nhấn vào đường link lạ", level: "red" },
      { text: "Mở webcam khi chưa xin phép ba mẹ", level: "red" },
      { text: "Chia sẻ địa chỉ nhà lên mạng", level: "red" },
      { text: "Tham gia thử thách nguy hiểm trên mạng", level: "red" },

      // 🟨 YELLOW - Cần kiểm tra kỹ
      { text: "Tham gia nhóm trò chuyện mới", level: "yellow" },
      { text: "Tải ứng dụng chưa rõ nguồn gốc", level: "yellow" },
      { text: "Đăng ảnh bạn bè mà chưa hỏi ý kiến", level: "yellow" },
      { text: "Bình luận vào bài viết người lạ", level: "yellow" },
      { text: "Chơi game online với người chưa quen", level: "yellow" },
      { text: "Xem video chưa rõ nội dung", level: "yellow" },

      // 🟩 GREEN - Làm được
      { text: "Báo cáo nội dung xấu cho người lớn", level: "green" },
      { text: "Sử dụng mật khẩu mạnh", level: "green" },
      { text: "Hỏi ý kiến ba mẹ khi nghi ngờ", level: "green" },
      { text: "Dành thời gian học online", level: "green" },
      { text: "Không chia sẻ thông tin cá nhân", level: "green" },
      { text: "Đọc kỹ nội dung trước khi chia sẻ", level: "green" },
      { text: "Chặn người lạ nhắn tin không phù hợp", level: "green" },
    ];
  } else {
    return [
      {
        text: "Chia sẻ vị trí cá nhân công khai trên mạng xã hội",
        level: "red",
      },
      {
        text: "Tham gia thử thách nguy hiểm lan truyền trên mạng",
        level: "red",
      },
      { text: "Bình luận xúc phạm hoặc công kích người khác", level: "red" },
      {
        text: "Gửi thông tin tài khoản cho người lạ tự xưng là hỗ trợ kỹ thuật",
        level: "red",
      },
      { text: "Đăng ảnh người khác mà không xin phép", level: "red" },
      { text: "Tương tác với nội dung kích động thù ghét", level: "red" },
      { text: "Chia sẻ ảnh riêng tư trong nhóm bạn online", level: "red" },

      // 🟨 YELLOW - Cần kiểm tra kỹ
      { text: "Tham gia nhóm cộng đồng chưa rõ nội dung", level: "yellow" },
      { text: "Bình luận vào bài viết gây tranh cãi", level: "yellow" },
      {
        text: "Tải ứng dụng mạng xã hội mới chưa rõ nguồn gốc",
        level: "yellow",
      },
      { text: "Chia sẻ bài viết chưa kiểm chứng thông tin", level: "yellow" },
      {
        text: "Kết bạn với người quen qua bạn bè nhưng chưa từng gặp",
        level: "yellow",
      },
      {
        text: "Tham gia khảo sát online có yêu cầu thông tin cá nhân",
        level: "yellow",
      },

      // 🟩 GREEN - Làm được
      {
        text: "Bật xác thực hai bước cho tài khoản mạng xã hội",
        level: "green",
      },
      { text: "Kiểm tra quyền truy cập khi cài ứng dụng mới", level: "green" },
      {
        text: "Báo cáo tài khoản giả mạo hoặc nội dung độc hại",
        level: "green",
      },
      { text: "Giới hạn người xem bài viết cá nhân", level: "green" },
      {
        text: "Tìm hiểu chính sách quyền riêng tư của nền tảng",
        level: "green",
      },
      {
        text: "Tự kiểm soát thời gian sử dụng mạng xã hội mỗi ngày",
        level: "green",
      },
      { text: "Chia sẻ nội dung tích cực, truyền cảm hứng", level: "green" },
    ];
  }
}
