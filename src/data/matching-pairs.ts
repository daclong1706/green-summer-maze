// src/data/matching-pairs.ts
export function getPairsBySize(size: number): [string, string][] {
  if (size < 12) {
    return [
      ["Xem video", "Chọn video tốt"],
      ["Dùng điện thoại", "Không quá lâu"],
      ["Gặp người lạ", "Hỏi ba mẹ"],
      ["Chia sẻ ảnh", "Chỉ với người thân"],
      ["Mật khẩu", "Không nói ra"],
      ["Chơi game", "Phải xin phép"],
      ["Gặp quảng cáo", "Không bấm vào"],
      ["Không hiểu gì", "Hỏi người lớn"],
    ];
  } else {
    return [
      ["Chia sẻ thông tin cá nhân", "Có thể bị lừa đảo"],
      ["Bình luận xấu", "Làm người khác buồn"],
      ["Dùng mạng xã hội hợp lý", "Giữ sức khỏe tinh thần"],
      ["Gặp tin giả", "Hỏi người lớn"],
      ["Chơi game quá nhiều", "Ảnh hưởng học tập"],
      ["Kết bạn online", "Phải cẩn thận"],
      ["Đăng ảnh bạn bè", "Phải xin phép"],
      ["Mật khẩu yếu", "Dễ bị hack"],
      ["Xem nội dung xấu", "Phải báo người lớn"],
      ["Bị bắt nạt online", "Nói với người lớn"],
      ["Chia sẻ vị trí", "Có thể bị theo dõi"],
      ["Gặp quảng cáo lạ", "Không nên bấm vào"],
    ];
  }
}
