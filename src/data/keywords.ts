export const getKeywordsBySize = (
  size: number
): { word: string; hint: string }[] => {
  if (size === 8) {
    return [
      { word: "tỉnh táo", hint: "Luôn giữ đầu óc sáng suốt khi online." },
      { word: "cẩn thận", hint: "Kiểm tra kỹ thông tin trước khi chia sẻ." },
      { word: "kiên trì", hint: "Không bỏ cuộc trước thử thách." },
      { word: "bình tĩnh", hint: "Xử lý tình huống một cách điềm đạm." },
      { word: "nhận thức", hint: "Hiểu rõ tác động của mạng xã hội." },
    ];
  } else if (size === 12) {
    return [
      { word: "tư duy", hint: "Suy nghĩ phản biện khi đọc tin tức." },
      { word: "sáng suốt", hint: "Phân biệt thật giả trên mạng." },
      { word: "kiểm soát", hint: "Đừng để mạng xã hội điều khiển cảm xúc." },
      { word: "chủ động", hint: "Tự chọn lọc nội dung phù hợp." },
      { word: "tập trung", hint: "Giữ sự chú ý vào điều quan trọng." },
    ];
  }

  // fallback
  return [
    {
      word: "tỉnh táo một chút",
      hint: "Luôn giữ đầu óc sáng suốt khi online.",
    },
  ];
};
