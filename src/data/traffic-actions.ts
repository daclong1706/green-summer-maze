// src/data/traffic-actions.ts

export type TrafficLevel = "red" | "yellow" | "green";

export const trafficActionsBySize: Record<
  number,
  { text: string; level: TrafficLevel }[]
> = {
  8: [
    { text: "Kết bạn với người lạ", level: "red" },
    { text: "Báo cáo nội dung xấu", level: "green" },
    { text: "Chia sẻ thông tin cá nhân", level: "red" },
    { text: "Dành thời gian học online", level: "green" },
    { text: "Bình luận ác ý", level: "red" },
    { text: "Sử dụng mật khẩu mạnh", level: "green" },
    { text: "Nhấn vào link không rõ nguồn", level: "red" },
    { text: "Hỏi ý kiến người lớn khi nghi ngờ", level: "yellow" },
    { text: "Không tiết lộ địa chỉ nhà", level: "green" },
    { text: "Mở webcam với người lạ", level: "red" },
    { text: "Tham gia group không rõ", level: "yellow" },
    { text: "Báo cáo người lạ nhắn tin", level: "green" },
    { text: "Gửi ảnh riêng tư cho bạn bè mới", level: "red" },
    { text: "Đọc kỹ thông tin trước khi chia sẻ", level: "green" },
    { text: "Kích hoạt bảo mật 2 lớp", level: "green" },
  ],
  // Thêm các cấp độ khác nếu cần
};
