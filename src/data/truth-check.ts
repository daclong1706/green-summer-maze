export type TruthItem = {
  id: string;
  content: string;
  type: "text" | "image";
  isTrue: boolean;
  explanation: string;
};

export const getTruthItemsBySize = (size: number): TruthItem[] => {
  if (size < 9) {
    return [
      {
        id: "1",
        content: "/BG.png",
        type: "image",
        isTrue: false,
        explanation:
          "Ảnh bị chỉnh sửa, tiêu đề không trùng khớp với nội dung thật.",
      },
      {
        id: "2",
        content: "/BG.png",
        type: "image",
        isTrue: true,
        explanation: "Ảnh là bài viết thật từ báo điện tử uy tín.",
      },
      {
        id: "3",
        content: "/BGepngst.jpg",
        type: "image",
        isTrue: false,
        explanation:
          "Ảnh là nội dung giả liên quan đến vaccine lan truyền sai lệch.",
      },
      {
        id: "4",
        content: "/BGspng-2.png",
        type: "image",
        isTrue: true,
        explanation: "Ảnh chụp từ trang báo thật, có thể tra cứu lại.",
      },
      {
        id: "5",
        content: "/images/fake-news-1.jpg",
        type: "image",
        isTrue: false,
        explanation: "Ảnh đã bị chỉnh sửa để gây hiểu lầm về sự kiện.",
      },
      {
        id: "6",
        content: "/images/real-news-1.jpg",
        type: "image",
        isTrue: true,
        explanation: "Ảnh chụp từ bài báo chính thống, có thể kiểm chứng.",
      },
      {
        id: "7",
        content: "/images/fake-vaccine.jpg",
        type: "image",
        isTrue: false,
        explanation: "Ảnh lan truyền thông tin sai lệch về vaccine.",
      },
      {
        id: "8",
        content: "/images/real-health-news.jpg",
        type: "image",
        isTrue: true,
        explanation: "Ảnh từ trang tin y tế chính thức, đáng tin cậy.",
      },
      {
        id: "9",
        content: "/images/fake-giveaway.jpg",
        type: "image",
        isTrue: false,
        explanation: "Ảnh quảng bá chương trình trúng thưởng giả mạo.",
      },
    ];
  }

  // Có thể mở rộng cho size >= 9
  return [];
};
