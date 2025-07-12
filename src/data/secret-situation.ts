export interface SecretSituation {
  id: string;
  situation: string;
  prompt: string;
  pinCode: string;
}

export const getSecretSituationsBySize = (size: number): SecretSituation[] => {
  if (size < 12) {
    return [
      {
        id: "1",
        situation: "Người lạ nhắn tin hỏi thông tin cá nhân",
        prompt:
          "Không vội trả lời ngay mà nên xác nhận với người lớn trước rồi mới chặn hoặc không trả lời.",
        pinCode: "4821",
      },
      {
        id: "2",
        situation: "Nhận đường link lạ qua tin nhắn",
        prompt: "Không bấm vào, xóa ngay, hỏi người lớn nếu cần.",
        pinCode: "9307",
      },
      {
        id: "3",
        situation: "Người khác dùng tài khoản giả để nói xấu bạn",
        prompt: "Báo với giáo viên/phụ huynh, lưu bằng chứng, không đáp trả.",
        pinCode: "1574",
      },
      {
        id: "4",
        situation: "Bạn trong nhóm nhắn tin thiếu tôn trọng",
        prompt:
          "Nhắn riêng nhắc bạn lịch sự, nếu không cải thiện thì báo giáo viên.",
        pinCode: "6043",
      },
      {
        id: "5",
        situation: "Gửi tin nhắn nhưng bị trêu chọc",
        prompt:
          "Không phản ứng tiêu cực, nhờ thầy cô can thiệp nếu bị bắt nạt.",
        pinCode: "2189",
      },
      {
        id: "6",
        situation: "Bạn khác đăng thông tin cá nhân của bạn lên mạng",
        prompt: "Yêu cầu xóa ngay, báo người lớn để bảo vệ quyền riêng tư.",
        pinCode: "7650",
      },
      {
        id: "7",
        situation: "Người lạ gọi video qua mạng xã hội",
        prompt: "Không nhận cuộc gọi, chặn người đó, báo người lớn.",
        pinCode: "3498",
      },
      {
        id: "8",
        situation: "Bạn nhắn quá nhiều tin không liên quan trong nhóm lớp",
        prompt:
          "Nhắc bạn dùng nhóm đúng mục đích, nếu tiếp diễn báo quản lý nhóm.",
        pinCode: "5902",
      },
      {
        id: "9",
        situation: "Gửi nhầm ảnh cá nhân vào nhóm lạ",
        prompt:
          "Xóa ảnh ngay nếu có thể, xin lỗi nếu cần, kiểm tra kỹ trước khi gửi.",
        pinCode: "8716",
      },
      {
        id: "10",
        situation: "Thấy bài đăng bắt nạt bạn mình",
        prompt: "Khuyên bạn không tương tác, nói với thầy cô nếu cần.",
        pinCode: "4367",
      },
      {
        id: "11",
        situation: "Có người yêu cầu chia sẻ mật khẩu để “quản lý”",
        prompt:
          "Không chia sẻ với ai, kể cả bạn thân. Bảo vệ tài khoản là quan trọng.",
        pinCode: "1295",
      },
      {
        id: "12",
        situation: "Người lạ bình luận khiếm nhã vào ảnh của bạn",
        prompt: "Xóa bình luận, chặn người đó, chỉnh quyền riêng tư.",
        pinCode: "3840",
      },
      {
        id: "13",
        situation: "Bị thêm vào nhóm chat có nội dung xấu",
        prompt: "Rời khỏi nhóm, chặn người thêm bạn vào, báo người lớn.",
        pinCode: "6071",
      },
    ];
  } else {
    return [
      {
        id: "14",
        situation: "Bạn đăng ảnh chế giễu người khác trong nhóm lớp",
        prompt:
          "Nhắc bạn không nên làm vậy, khuyên xóa bài, nếu nghiêm trọng thì báo giáo viên.",
        pinCode: "7193",
      },
      {
        id: "15",
        situation: "Bạn bật mic nói chuyện riêng khi học online",
        prompt: "Nhắn riêng nhắc bạn, nếu ảnh hưởng cả lớp thì báo giáo viên.",
        pinCode: "2840",
      },
      {
        id: "16",
        situation: "Bạn chia sẻ thông tin sai trên mạng xã hội",
        prompt: "Nhắc bạn kiểm tra thông tin, đừng chia sẻ nếu chưa chắc chắn.",
        pinCode: "6351",
      },
      {
        id: "17",
        situation: "Đăng bài học lên nhóm lớp nhưng không ai phản hồi",
        prompt:
          "Tiếp tục chia sẻ nếu thấy hữu ích, nhẹ nhàng nhắc mọi người tương tác tích cực.",
        pinCode: "9027",
      },
      {
        id: "18",
        situation: "Người kia nhắn bằng ký hiệu viết tắt khó hiểu",
        prompt:
          "Lịch sự hỏi lại, đề nghị dùng từ rõ ràng nếu cần trao đổi học tập.",
        pinCode: "1486",
      },
      {
        id: "19",
        situation: "Nhận video có nội dung phản cảm",
        prompt: "Không mở/xem, xóa ngay, không chia sẻ lại, báo người lớn.",
        pinCode: "3762",
      },
      {
        id: "20",
        situation:
          "Người nhắn tin bảo bạn “trúng thưởng” và cần thông tin cá nhân",
        prompt: "Không cung cấp gì cả, xóa tin nhắn, có thể là lừa đảo.",
        pinCode: "8504",
      },
      {
        id: "21",
        situation: "Có bạn dùng mạng xã hội nói xấu thầy cô/bạn bè",
        prompt:
          "Không tham gia, có thể nhắc bạn dừng lại, báo thầy cô nếu cần.",
        pinCode: "4917",
      },
      {
        id: "22",
        situation: "Người hứa “nạp thẻ game” nếu bạn gửi tài khoản",
        prompt: "Đây là lừa đảo. Không chia sẻ bất kỳ thông tin tài khoản nào.",
        pinCode: "2639",
      },
      {
        id: "23",
        situation: "Người trong game rủ bạn chuyển tiền mua vật phẩm",
        prompt:
          "Tuyệt đối không chuyển tiền, không giao dịch với người không quen.",
        pinCode: "5078",
      },
      {
        id: "24",
        situation: "Ảnh của bạn bị chế và đăng lên mạng",
        prompt:
          "Thu thập bằng chứng, yêu cầu gỡ xuống, báo người lớn, có thể nhờ đến nhà trường hoặc pháp luật.",
        pinCode: "7942",
      },
      {
        id: "25",
        situation:
          "Bạn thấy người khác quay lén trong giờ học online và đăng lên TikTok để chế giễu.",
        prompt: "Không chia sẻ, khuyên gỡ xuống, báo giáo viên nếu cần.",
        pinCode: "3184",
      },
      {
        id: "26",
        situation:
          "Một người trong nhóm học tập spam sticker, ảnh chế khiến các bạn khác khó theo dõi bài học.",
        prompt:
          "Nhắc bạn dùng nhóm đúng mục đích, nếu tiếp diễn thì báo quản trị nhóm.",
        pinCode: "7620",
      },
      {
        id: "27",
        situation:
          "Bạn bị chụp màn hình tin nhắn và chia sẻ công khai khiến bạn thấy xấu hổ.",
        prompt:
          "Trao đổi với người chia sẻ, yêu cầu gỡ xuống. Nếu gây ảnh hưởng nghiêm trọng, báo giáo viên.",
        pinCode: "5401",
      },
      {
        id: "28",
        situation: "Một bạn rủ bạn tham gia một hội nhóm chia sẻ “meme 18+”.",
        prompt: "Từ chối tham gia, chặn nhóm, báo thầy cô/phụ huynh nếu cần.",
        pinCode: "6893",
      },
      {
        id: "29",
        situation:
          "Bạn bị các bạn trong lớp lập nhóm riêng để nói xấu sau lưng bạn.",
        prompt:
          "Không tự cô lập mình, chia sẻ với giáo viên chủ nhiệm, phụ huynh để có hướng xử lý.",
        pinCode: "9275",
      },
      {
        id: "30",
        situation:
          "Có người gửi ảnh không phù hợp rồi xoá ngay sau khi bạn xem.",
        prompt:
          "Chặn tài khoản, báo người lớn. Không tiếp tục nhắn tin với người đó.",
        pinCode: "1538",
      },
      {
        id: "31",
        situation:
          "Bạn chia sẻ một ảnh chế vui nhưng bị hiểu lầm là công kích bạn khác.",
        prompt:
          "Giải thích rõ ý định, xin lỗi nếu làm bạn khác buồn, rút kinh nghiệm.",
        pinCode: "8046",
      },
      {
        id: "32",
        situation:
          "Có người dọa sẽ tung ảnh bạn từng gửi nếu bạn không làm theo yêu cầu họ nói.",
        prompt:
          "Không làm theo, báo người lớn ngay. Đây là hành vi tống tiền – cần can thiệp khẩn.",
        pinCode: "4719",
      },
      {
        id: "33",
        situation:
          "Bạn lỡ bình luận ác ý về một người nổi tiếng trên mạng xã hội.",
        prompt:
          "Xóa bình luận, xin lỗi công khai nếu cần, nhận trách nhiệm và rút kinh nghiệm.",
        pinCode: "2360",
      },
      {
        id: "34",
        situation:
          "Một bạn gửi link “câu like” hoặc trò chơi đoán tuổi, ghép đôi… yêu cầu bạn đăng nhập Facebook.",
        prompt: "Không bấm vào link lạ, cảnh báo bạn, bảo vệ tài khoản.",
        pinCode: "6952",
      },
      {
        id: "35",
        situation: "Bạn bị bạn thân chụp ảnh dìm và đăng lên story để “troll”.",
        prompt: "Góp ý thẳng thắn, yêu cầu gỡ nếu bạn không đồng ý.",
        pinCode: "8704",
      },
      {
        id: "36",
        situation:
          "Bạn gửi tin nhắn trong lúc nóng giận, dùng lời lẽ không phù hợp với bạn học.",
        prompt: "Gỡ tin nếu có thể, xin lỗi chân thành, rút kinh nghiệm.",
        pinCode: "3097",
      },
      {
        id: "37",
        situation: "Người quen nhờ bạn gửi ảnh riêng tư để “làm kỷ niệm”.",
        prompt:
          "Từ chối lịch sự. Ảnh cá nhân không nên chia sẻ nếu không cần thiết.",
        pinCode: "1582",
      },
      {
        id: "38",
        situation:
          "Bạn thấy một bạn học đăng trạng thái buồn bã, nói về chuyện muốn biến mất.",
        prompt:
          "Nhắn tin an ủi, động viên bạn. Báo giáo viên/phụ huynh để được hỗ trợ tâm lý kịp thời.",
        pinCode: "4926",
      },
      {
        id: "39",
        situation:
          "Một bạn trong lớp thường xuyên đăng ảnh chụp lớp không xin phép ai.",
        prompt:
          "Góp ý nhẹ nhàng, nhắc về quyền riêng tư. Nếu không hợp tác, nhờ giáo viên can thiệp.",
        pinCode: "7430",
      },
    ];
  }
};
