// src/data/quiz-questions.ts
export function getQuestionsBySize(size: number): {
  question: string;
  options: string[];
  correctIndex: number;
}[] {
  if (size < 12) {
    return [
      {
        question: "Khi có người lạ nhắn tin, em nên làm gì?",
        options: ["Trả lời ngay", "Gửi ảnh", "Báo người lớn", "Kết bạn"],
        correctIndex: 2,
      },
      {
        question: "Em nên chia sẻ ảnh với ai?",
        options: ["Người lạ", "Bạn thân", "Người thân", "Tất cả mọi người"],
        correctIndex: 2,
      },
      {
        question: "Mật khẩu nên như thế nào?",
        options: ["Dễ đoán", "Có tên em", "Có số và chữ", "Chia sẻ với bạn"],
        correctIndex: 2,
      },
      {
        question: "Khi thấy video xấu, em nên?",
        options: ["Xem tiếp", "Báo người lớn", "Chia sẻ", "Bình luận"],
        correctIndex: 1,
      },
      {
        question: "Ứng dụng nào có thể không phù hợp với trẻ em?",
        options: [
          "Ứng dụng học tập",
          "Ứng dụng vẽ",
          "Ứng dụng bạo lực",
          "Ứng dụng đọc sách",
        ],
        correctIndex: 2,
      },
      {
        question: "Khi chơi game online, em nên?",
        options: [
          "Chơi với người lạ",
          "Không chia sẻ thông tin",
          "Gửi ảnh",
          "Chơi cả ngày",
        ],
        correctIndex: 1,
      },
      {
        question: "Nếu bị chọc ghẹo trên mạng, em nên?",
        options: ["Im lặng", "Trả lời lại", "Báo người lớn", "Xóa tài khoản"],
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
        question: "Tại sao không nên chia sẻ vị trí hiện tại lên mạng xã hội?",
        options: [
          "Vì không ai quan tâm",
          "Vì có thể bị theo dõi",
          "Vì mạng yếu",
          "Vì tốn pin",
        ],
        correctIndex: 1,
      },
      {
        question: "Nếu một người lạ giả làm bạn em và nhắn tin, em nên?",
        options: [
          "Trả lời bình thường",
          "Gửi ảnh để kiểm tra",
          "Báo người lớn ngay",
          "Hỏi họ tên thật",
        ],
        correctIndex: 2,
      },
      {
        question:
          "Một ứng dụng yêu cầu quyền truy cập camera và micro, em nên?",
        options: [
          "Cho phép ngay",
          "Hỏi người lớn trước",
          "Tắt điện thoại",
          "Xóa ứng dụng",
        ],
        correctIndex: 1,
      },
      {
        question: "Tại sao không nên đăng bài khi đang tức giận?",
        options: [
          "Vì sẽ bị xóa bài",
          "Vì có thể nói điều không nên",
          "Vì mạng chậm",
          "Vì không ai đọc",
        ],
        correctIndex: 1,
      },
      {
        question: "Nếu bạn em chia sẻ ảnh riêng tư của người khác, em nên?",
        options: [
          "Chia sẻ tiếp",
          "Bình luận vui",
          "Khuyên bạn xóa đi",
          "Lưu lại để xem sau",
        ],
        correctIndex: 2,
      },
      {
        question:
          "Một người lạ hứa tặng quà nếu em gửi thông tin cá nhân, em nên?",
        options: [
          "Gửi ngay",
          "Hỏi bạn thân",
          "Báo người lớn",
          "Cảm ơn và im lặng",
        ],
        correctIndex: 2,
      },
      {
        question: "Tại sao không nên tham gia thử thách nguy hiểm trên mạng?",
        options: [
          "Vì không vui",
          "Vì có thể gây hại cho bản thân",
          "Vì không ai làm",
          "Vì mất thời gian",
        ],
        correctIndex: 1,
      },
      {
        question: "Nếu thấy một bài viết có nội dung bạo lực, em nên?",
        options: [
          "Báo người lớn hoặc báo cáo",
          "Chia sẻ để cảnh báo",
          "Bình luận phản đối",
          "Lướt qua",
        ],
        correctIndex: 0,
      },
      {
        question: "Một người lạ xin mật khẩu tài khoản học tập, em nên?",
        options: [
          "Cho nếu họ nói là thầy cô",
          "Không chia sẻ và báo người lớn",
          "Đổi mật khẩu rồi cho",
          "Hỏi bạn xem có nên cho không",
        ],
        correctIndex: 1,
      },
      {
        question: "Tại sao cần kiểm tra nguồn tin trước khi chia sẻ?",
        options: [
          "Để không bị sai chính tả",
          "Để tránh lan truyền tin giả",
          "Để bài viết đẹp hơn",
          "Để được nhiều lượt thích",
        ],
        correctIndex: 1,
      },
    ];
  } else {
    return [
      {
        question: "Tại sao không nên chia sẻ mật khẩu với người khác?",
        options: [
          "Vì họ có thể giúp mình đăng nhập",
          "Vì có thể bị mất tài khoản",
          "Vì mật khẩu không quan trọng",
          "Vì bạn bè sẽ giữ bí mật",
        ],
        correctIndex: 1,
      },
      {
        question: "Khi thấy một bài viết có nội dung gây sốc, bạn nên?",
        options: [
          "Chia sẻ ngay để cảnh báo",
          "Bình luận cho vui",
          "Kiểm tra nguồn trước khi chia sẻ",
          "Bỏ qua vì không liên quan",
        ],
        correctIndex: 2,
      },
      {
        question: "Một người lạ gửi link trúng thưởng, bạn nên?",
        options: [
          "Bấm vào thử vận may",
          "Chia sẻ cho bạn bè",
          "Báo cáo và không bấm vào",
          "Gửi thông tin để nhận quà",
        ],
        correctIndex: 2,
      },
      {
        question: "Tại sao cần đặt mật khẩu mạnh cho tài khoản mạng xã hội?",
        options: [
          "Để dễ nhớ",
          "Để tránh bị hack",
          "Để bạn bè dễ đăng nhập",
          "Để không cần đổi thường xuyên",
        ],
        correctIndex: 1,
      },
      {
        question: "Khi thấy bạn chia sẻ thông tin sai lệch, bạn nên?",
        options: [
          "Bỏ qua",
          "Chia sẻ lại vì tin tưởng bạn",
          "Nhắc bạn kiểm tra lại thông tin",
          "Bình luận ủng hộ",
        ],
        correctIndex: 2,
      },
      {
        question: "Ứng dụng yêu cầu quyền truy cập danh bạ, bạn nên?",
        options: [
          "Cho phép ngay",
          "Từ chối nếu không cần thiết",
          "Xóa ứng dụng",
          "Hỏi bạn bè trước",
        ],
        correctIndex: 1,
      },
      {
        question: "Tại sao không nên đăng ảnh người khác khi chưa xin phép?",
        options: [
          "Vì ảnh có thể bị chỉnh sửa",
          "Vì có thể vi phạm quyền riêng tư",
          "Vì ảnh không đẹp",
          "Vì không ai quan tâm",
        ],
        correctIndex: 1,
      },
      {
        question: "Khi bị người lạ làm phiền qua tin nhắn, bạn nên?",
        options: [
          "Trả lời lịch sự",
          "Chặn và báo cáo",
          "Gửi ảnh để họ ngừng",
          "Im lặng và tiếp tục theo dõi",
        ],
        correctIndex: 1,
      },
      {
        question: "Bài viết nào sau đây nên được chia sẻ?",
        options: [
          "Bài viết chưa rõ nguồn",
          "Bài viết có nội dung tích cực và đúng sự thật",
          "Bài viết gây tranh cãi",
          "Bài viết có nhiều lượt thích",
        ],
        correctIndex: 1,
      },
      {
        question: "Tại sao cần giới hạn thời gian dùng mạng xã hội?",
        options: [
          "Để tiết kiệm pin",
          "Để tránh ảnh hưởng sức khỏe và học tập",
          "Vì mạng chậm",
          "Vì không có gì hay",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Điều gì khiến việc chia sẻ ảnh người khác mà chưa xin phép trở nên nguy hiểm?",
        options: [
          "Có thể bị xóa bài",
          "Vi phạm quyền riêng tư và gây tổn thương",
          "Không ai quan tâm",
          "Làm bài viết không đẹp",
        ],
        correctIndex: 1,
      },
      {
        question: "Khi một ứng dụng yêu cầu quyền truy cập vị trí, bạn nên?",
        options: [
          "Cho phép nếu ứng dụng cần chức năng định vị",
          "Cho phép mọi lúc để tiện sử dụng",
          "Từ chối ngay lập tức",
          "Chia sẻ vị trí với bạn bè",
        ],
        correctIndex: 0,
      },
      {
        question: "Tại sao việc lan truyền tin giả lại nguy hiểm?",
        options: [
          "Làm mất thời gian người đọc",
          "Gây hiểu lầm và ảnh hưởng đến cộng đồng",
          "Không ai tin",
          "Làm giảm lượt thích bài viết",
        ],
        correctIndex: 1,
      },
      {
        question: "Khi thấy một tài khoản giả mạo người nổi tiếng, bạn nên?",
        options: [
          "Theo dõi để xem họ đăng gì",
          "Báo cáo tài khoản đó",
          "Bình luận cảnh báo",
          "Chia sẻ để bạn bè biết",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Tại sao không nên tham gia các thử thách nguy hiểm trên mạng?",
        options: [
          "Vì không vui",
          "Vì có thể gây hại cho bản thân và người khác",
          "Vì không ai làm",
          "Vì bị mất tài khoản",
        ],
        correctIndex: 1,
      },
      {
        question: "Một người lạ yêu cầu bạn gửi thông tin tài khoản, bạn nên?",
        options: [
          "Gửi nếu họ nói là nhân viên hỗ trợ",
          "Hỏi bạn bè trước",
          "Không chia sẻ và báo người lớn",
          "Gửi thử rồi đổi mật khẩu",
        ],
        correctIndex: 2,
      },
      {
        question: "Khi bạn thấy một bài viết kích động thù ghét, bạn nên?",
        options: [
          "Bình luận phản đối",
          "Chia sẻ để cảnh báo",
          "Báo cáo và không tương tác",
          "Lưu lại để đọc sau",
        ],
        correctIndex: 2,
      },
      {
        question: "Tại sao cần kiểm tra quyền truy cập khi cài ứng dụng mới?",
        options: [
          "Để tránh bị thu thập dữ liệu không cần thiết",
          "Để ứng dụng chạy nhanh hơn",
          "Để có thể chia sẻ ảnh dễ hơn",
          "Để tiết kiệm pin",
        ],
        correctIndex: 0,
      },
      {
        question: "Nếu bạn bị người lạ đe dọa qua tin nhắn, bạn nên?",
        options: [
          "Trả lời để làm rõ",
          "Chặn và báo người lớn hoặc cơ quan chức năng",
          "Xóa tin nhắn và im lặng",
          "Chia sẻ lên mạng để cảnh báo",
        ],
        correctIndex: 1,
      },
      {
        question:
          "Tại sao cần giới hạn thông tin cá nhân khi tạo hồ sơ mạng xã hội?",
        options: [
          "Để hồ sơ trông gọn hơn",
          "Để tránh bị lừa đảo hoặc theo dõi",
          "Để có nhiều lượt theo dõi",
          "Để dễ đăng nhập",
        ],
        correctIndex: 1,
      },
    ];
  }
}
