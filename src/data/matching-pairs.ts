// src/data/matching-pairs.ts
export function getPairsBySize(size: number): [string, string][] {
  if (size < 12) {
    return [
      ["Người lạ nhắn tin", "Không trả lời"],
      ["Thấy tin lạ", "Hỏi người lớn"],
      ["Muốn đăng ảnh", "Hỏi ba mẹ trước"],
      ["Gặp quảng cáo lạ", "Không bấm vào"],
      ["Bạn rủ chơi game khuya", "Nói không"],
      ["Thấy video xấu", "Tắt ngay"],
      ["Muốn kết bạn online", "Phải biết rõ"],
      ["Bị chọc ghẹo online", "Nói với người lớn"],
      ["Thấy link lạ", "Không bấm vào"],
      ["Muốn chia sẻ ảnh", "Chỉ với người thân"],
      ["Không hiểu bài đăng", "Hỏi người lớn"],
      ["Thấy ảnh người khác", "Không chia sẻ"],
      ["Muốn dùng app mới", "Hỏi ba mẹ"],
      ["Thấy tin buồn", "Không chia sẻ vội"],
      ["Bị ép gửi ảnh", "Từ chối ngay"],
      ["Thấy lời mời lạ", "Không chấp nhận"],
      ["Muốn đăng bài", "Nghĩ kỹ trước"],
      ["Bạn gửi ảnh riêng tư", "Không lan truyền"],
      ["Người lạ xin mật khẩu", "Không cho"],
      ["Thấy nội dung bạo lực", "Báo người lớn"],
    ];
  } else {
    return [
      ["Chia sẻ thông tin cá nhân", "Dễ bị lợi dụng"],
      ["Bình luận tiêu cực", "Gây tổn thương người khác"],
      ["Tin giả lan truyền", "Gây hoang mang cộng đồng"],
      ["Kết bạn với người lạ", "Tiềm ẩn nguy cơ bị lừa"],
      ["Đăng ảnh người khác", "Phải xin phép trước"],
      ["Mật khẩu yếu", "Dễ bị đánh cắp tài khoản"],
      ["Tham gia thử thách nguy hiểm", "Có thể gây hại bản thân"],
      ["Bị bắt nạt online", "Phải lên tiếng và tìm hỗ trợ"],
      ["Chia sẻ vị trí cá nhân", "Có thể bị theo dõi"],
      ["Bấm vào link lạ", "Nguy cơ nhiễm mã độc"],
      ["Bài viết kích động", "Gây chia rẽ xã hội"],
      ["Tin tức chưa kiểm chứng", "Không nên chia sẻ"],
      ["Bình luận theo cảm xúc", "Dễ gây hiểu lầm"],
      ["Tài khoản giả mạo", "Không nên tương tác"],
      ["Chia sẻ ảnh riêng tư", "Có thể bị phát tán"],
      ["Tham gia nhóm độc hại", "Ảnh hưởng tâm lý"],
      ["Đăng bài khi tức giận", "Dễ nói lời sai trái"],
      ["Tin nhắn dụ dỗ", "Phải cảnh giác và chặn"],
      ["Bài viết gây sốc", "Cần kiểm tra nguồn"],
      ["Ứng dụng yêu cầu quyền lạ", "Phải xem kỹ trước khi cấp"],
    ];
  }
}
