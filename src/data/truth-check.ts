export type TruthItem = {
  id: string;
  content: string;
  type: "text" | "image";
  isTrue: boolean;
  explanation: string;
};

export const getTruthItemsBySize = (size: number): TruthItem[] => {
  if (size < 12) {
    return [
      {
        id: "1",
        content: "/BG.png",
        type: "image",
        isTrue: false, // false là giả
        explanation:
          "Ảnh bị chỉnh sửa, tiêu đề không trùng khớp với nội dung thật.",
      },
      {
        id: "2",
        content: "/BG.png",
        type: "image",
        isTrue: true, // true là thật
        explanation: "Ảnh là bài viết thật từ báo điện tử uy tín.",
      },
    ];
  } else {
  }
  return [];
};
