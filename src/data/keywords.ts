export const getKeywordsBySize = (
  size: number
): { word: string; hint: string }[] => {
  if (size < 9) {
    return [
      { word: "tỉnh táo", hint: "Luôn giữ đầu óc sáng suốt khi online." },
      { word: "cẩn thận", hint: "Kiểm tra kỹ thông tin trước khi chia sẻ." },
      { word: "kiên trì", hint: "Không bỏ cuộc trước thử thách." },
      { word: "bình tĩnh", hint: "Xử lý tình huống một cách điềm đạm." },
      { word: "nhận thức", hint: "Hiểu rõ tác động của mạng xã hội." },
    ];
  } else if (size >= 9 && size <= 12) {
    return [
      { word: "tư duy", hint: "Suy nghĩ phản biện khi đọc tin tức." },
      { word: "sáng suốt", hint: "Phân biệt thật giả trên mạng." },
      { word: "kiểm soát", hint: "Đừng để mạng xã hội điều khiển cảm xúc." },
      { word: "chủ động", hint: "Tự chọn lọc nội dung phù hợp." },
      { word: "tập trung", hint: "Giữ sự chú ý vào điều quan trọng." },
    ];
  } else if (size >= 13 && size <= 15) {
    return [
      {
        word: "bảo mật",
        hint: "Giữ an toàn cho tài khoản và dữ liệu cá nhân.",
      },
      { word: "ẩn danh", hint: "Không chia sẻ thông tin cá nhân công khai." },
      { word: "mã hóa", hint: "Hiểu cách bảo vệ thông tin bằng kỹ thuật số." },
      {
        word: "riêng tư",
        hint: "Tôn trọng quyền riêng tư của bản thân và người khác.",
      },
      { word: "cảnh giác", hint: "Luôn đề phòng các mối nguy trên mạng." },
    ];
  } else if (size >= 16 && size <= 18) {
    return [
      { word: "kiểm chứng", hint: "Xác minh thông tin trước khi tin." },
      { word: "phân tích", hint: "Hiểu rõ nguồn gốc và mục đích của tin tức." },
      { word: "phản biện", hint: "Đặt câu hỏi và tìm hiểu đa chiều." },
      { word: "trách nhiệm", hint: "Chia sẻ thông tin có trách nhiệm." },
      { word: "chống tin giả", hint: "Không tiếp tay cho tin sai lệch." },
    ];
  } else {
    return [
      { word: "lãnh đạo", hint: "Dẫn dắt người khác sử dụng mạng an toàn." },
      { word: "truyền cảm hứng", hint: "Lan tỏa thông điệp tích cực." },
      { word: "trách nhiệm", hint: "Ý thức rõ vai trò của mình trên mạng." },
      { word: "tư duy số", hint: "Hiểu biết sâu về thế giới số." },
      { word: "tỉnh táo", hint: "Không bị cuốn theo đám đông." },
    ];
  }
};
