export type SecretSearch = {
  id: string;
  prompt: string;
  pinCode: string;
};

export const secretSearchs: SecretSearch[] = [
  {
    id: "1",
    prompt: "Giới thiệu một mẹo an toàn mạng cho bạn bên cạnh.",
    pinCode: "2635",
  },
  {
    id: "2",
    prompt:
      "Kể cho quản trò một tình huống gặp nguy hiểm trên mạng và cách xử lý.",
    pinCode: "4819",
  },
  {
    id: "3",
    prompt: "Thực hiện tư thế cảnh giác trước một hình ảnh đáng ngờ.",
    pinCode: "7782",
  },
];
