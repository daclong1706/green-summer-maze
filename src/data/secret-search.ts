export interface SecretSearch {
  id: string;
  topic: string;
  questions: string[];
  pinCode: string;
}

export const getSecretSearchBySize = (size: number): SecretSearch[] => {
  if (size < 12) {
    return [
      {
        id: "1",
        topic: "Trang web/ Ứng dụng dùng để học",
        questions: [
          "Tên của trang web hoặc ứng dụng?",
          "Em học được gì từ nó?",
          "Em dùng nó như thế nào?",
        ],
        pinCode: "3278",
      },
      {
        id: "2",
        topic: "Trò chơi rèn luyện tư duy trên mạng",
        questions: [
          "Tên của trò chơi đó là gì?",
          "Trò chơi giúp rèn luyện điều gì?",
          "Em tìm thấy trò chơi đó ở đâu?",
        ],
        pinCode: "3287",
      },
      {
        id: "3",
        topic: "Quy tắc an toàn khi dùng Internet",
        questions: [
          "Quy tắc đó là gì?",
          "Em học được từ đâu?",
          "Vì sao cần tuân theo quy tắc đó?",
        ],
        pinCode: "3827",
      },
      {
        id: "4",
        topic: "Tìm hiểu về nghề lập trình viên",
        questions: [
          "Lập trình viên là người làm gì?",
          "Cần học giỏi môn nào để làm nghề này?",
          "Trẻ em có thể học lập trình ở đâu?",
        ],
        pinCode: "3872",
      },
    ];
  } else {
    return [
      {
        id: "5",
        topic: "Kênh YouTube hoặc TikTok chia sẻ kiến thức bổ ích",
        questions: [
          "Tên kênh là gì?",
          "Họ thường làm nội dung gì?",
          "Em biết đến kênh này từ đâu?",
        ],
        pinCode: "8732",
      },
      {
        id: "6",
        topic: "Một dấu hiệu nhận biết tin giả trên mạng",
        questions: [
          "Dấu hiệu đó là gì?",
          "Em đọc được ở đâu?",
          "Làm sao kiểm tra thông tin đó là đúng hay sai?",
        ],
        pinCode: "8372",
      },
      {
        id: "7",
        topic: "Lịch sử của điện thoại di động",
        questions: [
          "Được phát minh khi nào?",
          "Ai là người sáng chế?",
          "Nó thay đổi thế giới như thế nào?",
        ],
        pinCode: "8273",
      },
      {
        id: "8",
        topic:
          "Một mạng xã hội phổ biến hiện nay và những mặt tích cực/tiêu cực của nó",
        questions: [
          "Mạng xã hội đó tên là gì?",
          "Người dùng thường làm gì trên đó?",
          "Có lợi/hại gì cho học sinh?",
        ],
        pinCode: "8723",
      },
    ];
  }
};
