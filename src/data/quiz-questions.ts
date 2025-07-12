// src/data/quiz-questions.ts
export function getQuestionsBySize(size: number): {
  question: string;
  options: string[];
  correctIndex: number;
}[] {
  if (size < 12) {
    return [
      {
        question: "Mật khẩu mạnh nên bao gồm?",
        options: [
          "Tên và ngày sinh",
          "Ký tự đặc biệt, chữ hoa, số",
          "Toàn số",
          "Tên đăng nhập",
        ],
        correctIndex: 1,
      },
      {
        question: "Khi gặp người lạ nhắn tin, em nên làm gì?",
        options: [
          "Trả lời ngay",
          "Hỏi bạn bè",
          "Báo người lớn",
          "Gửi ảnh cho họ",
        ],
        correctIndex: 2,
      },
      {
        question: "Nội dung nào sau đây KHÔNG nên chia sẻ lên mạng?",
        options: [
          "Ảnh đi chơi với gia đình",
          "Kết quả học tập",
          "Thông tin cá nhân",
          "Hình vẽ của em",
        ],
        correctIndex: 2,
      },
      {
        question: "Khi thấy quảng cáo trúng thưởng bất ngờ, em nên?",
        options: [
          "Bấm vào xem",
          "Chia sẻ cho bạn",
          "Báo người lớn",
          "Làm theo hướng dẫn",
        ],
        correctIndex: 2,
      },
      {
        question: "Ứng dụng nào sau đây có thể chứa nội dung không phù hợp?",
        options: [
          "Ứng dụng học tập",
          "Ứng dụng trò chơi bạo lực",
          "Ứng dụng đọc sách",
          "Ứng dụng vẽ tranh",
        ],
        correctIndex: 1,
      },
      {
        question: "Khi chơi game online, em nên?",
        options: [
          "Chơi với người lạ",
          "Không chia sẻ thông tin",
          "Gửi ảnh cho bạn chơi",
          "Chơi cả ngày",
        ],
        correctIndex: 1,
      },
      {
        question: "Nếu bị người khác bắt nạt trên mạng, em nên?",
        options: ["Im lặng", "Trả lời lại", "Báo người lớn", "Xóa tài khoản"],
        correctIndex: 2,
      },
      {
        question: "Mật khẩu nên được chia sẻ với ai?",
        options: ["Bạn thân", "Người lạ", "Không ai", "Người trong lớp"],
        correctIndex: 2,
      },
      {
        question: "Khi thấy video có nội dung xấu, em nên?",
        options: ["Xem tiếp", "Báo người lớn", "Chia sẻ cho bạn", "Bình luận"],
        correctIndex: 1,
      },
      {
        question: "Em nên dùng mạng xã hội bao lâu mỗi ngày?",
        options: ["Cả ngày", "Tùy thích", "Có giới hạn", "Không cần giới hạn"],
        correctIndex: 2,
      },
      {
        question: "Khi có người lạ rủ gặp mặt, em nên?",
        options: [
          "Đi gặp ngay",
          "Rủ bạn đi cùng",
          "Báo người lớn",
          "Không nói gì",
        ],
        correctIndex: 2,
      },
      {
        question: "Tại sao không nên chia sẻ ảnh riêng tư?",
        options: [
          "Vì ảnh xấu",
          "Có thể bị lan truyền",
          "Không ai quan tâm",
          "Tốn dung lượng",
        ],
        correctIndex: 1,
      },
      {
        question: "Khi thấy bài viết sai sự thật, em nên?",
        options: [
          "Chia sẻ ngay",
          "Bình luận ủng hộ",
          "Báo người lớn",
          "Lưu lại",
        ],
        correctIndex: 2,
      },
      {
        question: "Ứng dụng nào sau đây giúp học tốt hơn?",
        options: [
          "Ứng dụng học tiếng Anh",
          "Ứng dụng chơi game",
          "Ứng dụng mạng xã hội",
          "Ứng dụng xem phim",
        ],
        correctIndex: 0,
      },
      {
        question: "Khi dùng thiết bị số, em nên?",
        options: [
          "Ngồi quá gần màn hình",
          "Dùng trong thời gian hợp lý",
          "Dùng khi đang đi đường",
          "Dùng khi ăn cơm",
        ],
        correctIndex: 1,
      },
    ];
  } else {
    return [
      {
        question: "Mật khẩu mạnh nên bao gồm?",
        options: [
          "Tên và ngày sinh",
          "Ký tự đặc biệt, chữ hoa, số",
          "Toàn số",
          "Tên đăng nhập",
        ],
        correctIndex: 1,
      },
      {
        question: "Khi gặp người lạ nhắn tin, em nên làm gì?",
        options: [
          "Trả lời ngay",
          "Hỏi bạn bè",
          "Báo người lớn",
          "Gửi ảnh cho họ",
        ],
        correctIndex: 2,
      },
      {
        question: "Nội dung nào sau đây KHÔNG nên chia sẻ lên mạng?",
        options: [
          "Ảnh đi chơi với gia đình",
          "Kết quả học tập",
          "Thông tin cá nhân",
          "Hình vẽ của em",
        ],
        correctIndex: 2,
      },
      {
        question: "Khi thấy quảng cáo trúng thưởng bất ngờ, em nên?",
        options: [
          "Bấm vào xem",
          "Chia sẻ cho bạn",
          "Báo người lớn",
          "Làm theo hướng dẫn",
        ],
        correctIndex: 2,
      },
      {
        question: "Ứng dụng nào sau đây có thể chứa nội dung không phù hợp?",
        options: [
          "Ứng dụng học tập",
          "Ứng dụng trò chơi bạo lực",
          "Ứng dụng đọc sách",
          "Ứng dụng vẽ tranh",
        ],
        correctIndex: 1,
      },
      {
        question: "Khi chơi game online, em nên?",
        options: [
          "Chơi với người lạ",
          "Không chia sẻ thông tin",
          "Gửi ảnh cho bạn chơi",
          "Chơi cả ngày",
        ],
        correctIndex: 1,
      },
      {
        question: "Nếu bị người khác bắt nạt trên mạng, em nên?",
        options: ["Im lặng", "Trả lời lại", "Báo người lớn", "Xóa tài khoản"],
        correctIndex: 2,
      },
      {
        question: "Mật khẩu nên được chia sẻ với ai?",
        options: ["Bạn thân", "Người lạ", "Không ai", "Người trong lớp"],
        correctIndex: 2,
      },
      {
        question: "Khi thấy video có nội dung xấu, em nên?",
        options: ["Xem tiếp", "Báo người lớn", "Chia sẻ cho bạn", "Bình luận"],
        correctIndex: 1,
      },
      {
        question: "Em nên dùng mạng xã hội bao lâu mỗi ngày?",
        options: ["Cả ngày", "Tùy thích", "Có giới hạn", "Không cần giới hạn"],
        correctIndex: 2,
      },
      {
        question: "Khi có người lạ rủ gặp mặt, em nên?",
        options: [
          "Đi gặp ngay",
          "Rủ bạn đi cùng",
          "Báo người lớn",
          "Không nói gì",
        ],
        correctIndex: 2,
      },
      {
        question: "Tại sao không nên chia sẻ ảnh riêng tư?",
        options: [
          "Vì ảnh xấu",
          "Có thể bị lan truyền",
          "Không ai quan tâm",
          "Tốn dung lượng",
        ],
        correctIndex: 1,
      },
      {
        question: "Khi thấy bài viết sai sự thật, em nên?",
        options: [
          "Chia sẻ ngay",
          "Bình luận ủng hộ",
          "Báo người lớn",
          "Lưu lại",
        ],
        correctIndex: 2,
      },
      {
        question: "Ứng dụng nào sau đây giúp học tốt hơn?",
        options: [
          "Ứng dụng học tiếng Anh",
          "Ứng dụng chơi game",
          "Ứng dụng mạng xã hội",
          "Ứng dụng xem phim",
        ],
        correctIndex: 0,
      },
      {
        question: "Khi dùng thiết bị số, em nên?",
        options: [
          "Ngồi quá gần màn hình",
          "Dùng trong thời gian hợp lý",
          "Dùng khi đang đi đường",
          "Dùng khi ăn cơm",
        ],
        correctIndex: 1,
      },
    ];
  }
}
