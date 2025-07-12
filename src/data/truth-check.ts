export type TruthItem = {
  id: string;
  content: string;
  type: "text" | "image";
  isTrue: boolean;
  explanation: string;
};

export const getTruthItemsBySize = (size: number): TruthItem[] => {
  if (size < 12) {
    // tiểu học
    return [
      {
        id: "1",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752314896/Screenshot_2025-07-12_170421_eorhd0.png",
        type: "image",
        isTrue: false,
        explanation:
          "Quà tặng không rõ nguồn gốc: Không ghi rõ đơn vị tổ chức, không có logo chính thống, không dẫn link điều lệ chương trình, thiết kế hấp dẫn, màu đỏ gây kích động: Tâm lý 'trúng lớn', 'chỉ cần nộp một ít' làm người dùng mất cảnh giác. ",
      },
      {
        id: "2",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752314952/Screenshot_2025-07-12_170533_iii8jq.png",
        type: "image",
        isTrue: false,
        explanation:
          "Giao diện sặc sỡ, hoạt hình vui nhộn dễ đánh lừa trẻ nhỏ, thông báo “GAME OVER” gây áp lực phải nạp tiền để tiếp tục, Không có logo, tên công ty hay chính sách rõ ràng.",
      },
      {
        id: "3",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752315003/Screenshot_2025-07-12_170627_h6vx68.png",
        type: "image",
        isTrue: false,
        explanation:
          "Tên miền sai lệch: d0cs.intern4ut.com không phải tên miền chính thức của Facebook,Tên gọi giả mạo: Dùng chữ “FACEBOOT” thay vì “Facebook” để đánh lừa người dùng không để ý.",
      },
      {
        id: "11",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752334303/Screenshot_2025-07-12_222529_dnqksq.png",
        type: "image",
        isTrue: true,
        explanation:
          "Địa chỉ web là youtube.com hiển thị đầy đủ, có biểu tượng ổ khóa và giao thức https bảo mật, logo YouTube chuẩn, sắc nét, không sai chính tả hay sai thương hiệu, giao diện chuyên nghiệp, có đầy đủ chức năng như Trang chủ, Shorts, Đăng ký, Video đã xem.",
      },
      {
        id: "12",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752335186/Screenshot_2025-07-12_222537_rlydix.png",
        type: "image",
        isTrue: true,
        explanation:
          "Địa chỉ người gửi là paula@zylkertraining.com – thuộc tên miền công ty rõ ràng, không mạo danh dịch vụ công cộng, email dùng lời chào, ngôn từ chuyên nghiệp, có chữ ký tên, chức vụ và công ty rõ ràng ở cuối thư.",
      },
      {
        id: "13",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752335320/Screenshot_2025-07-12_222544_wmgoaz.png",
        type: "image",
        isTrue: true,
        explanation:
          "Tên miền chính xác: accounts.google.com, thuộc Google, có bảo mật HTTPS và biểu tượng ổ khóa, giao diện chuẩn, không lỗi font hay bố cục, có các liên kết trợ giúp, quyền riêng tư rõ ràng",
      },
      {
        id: "14",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752335450/Screenshot_2025-07-12_222551_dbq5qg.png",
        type: "image",
        isTrue: true,
        explanation:
          "Tên người gửi là Google, địa chỉ email chính xác: no-reply@accounts.google.com, nội dung rõ ràng, thông báo cụ thể thiết bị và thời gian đăng nhập, có liên kết chính thức: https://myaccount.google.com/notifications.",
      },
    ];
  } else {
    // trung học cơ sở
    return [
      {
        id: "4",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752315046/Screenshot_2025-07-12_170715_nerz3h.png",
        type: "image",
        isTrue: false,
        explanation:
          "Thông báo giật gân, khẩn cấp: Đánh vào tâm lý hoảng loạn khiến người dùng mất lý trí, dụ nhấn vào nút tải về: Có thể dẫn tới phần mềm độc hại hoặc đánh cắp dữ liệu, Không có tên phần mềm rõ ràng, không có nhà cung cấp uy tín.",
      },
      {
        id: "5",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752315071/Screenshot_2025-07-12_170742_kcpjia.png",
        type: "image",
        isTrue: false,
        explanation:
          "Giao diện bắt chước Gmail: Thiết kế đơn giản, avatar người, ô nhập thông tin giống các dịch vụ quen thuộc như Google, Microsoft, v.v.",
      },
      {
        id: "6",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752315156/Screenshot_2025-07-12_170809_wtotg9.png",
        type: "image",
        isTrue: false,
        explanation:
          "Logo công an nhưng không có địa chỉ chính thống, tên đơn vị cụ thể, ngôn ngữ đe dọa pháp lý: như “liên quan điều tra”, “xử lý hình sự”.",
      },
      {
        id: "7",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752315167/Screenshot_2025-07-12_170903_vy2obw.png",
        type: "image",
        isTrue: false,
        explanation:
          "Tiêu đề dùng từ ngữ giật gân, viết hoa toàn bộ như “CHÚC MỪNG”, “CỰC HIẾM”, dễ đánh lừa người đọc, nội dung nói bạn trúng phần quà giá trị lớn dù không tham gia bất kỳ sự kiện nào",
      },
      {
        id: "8",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752315192/Screenshot_2025-07-12_170941_r3e4jm.png",
        type: "image",
        isTrue: false,
        explanation:
          "Nội dung cảnh báo tài khoản tiêu dùng ở nước ngoài gây hoang mang và thúc đẩy hành động vội vàng, tên miền shb.com-sk.info trông giống thật nhưng thực chất không phải trang chính thức của ngân hàng SHB, dùng ngôn ngữ không dấu và viết không chuẩn khiến tin nhắn thiếu tính chuyên nghiệp",
      },
      {
        id: "9",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752315243/Screenshot_2025-07-12_171016_cux8pv.png",
        type: "image",
        isTrue: false,
        explanation:
          "Hứa tặng Quân Huy không qua cổng chính thức, không phải fanpage có dấu tích xanh.",
      },
      {
        id: "10",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752334282/Screenshot_2025-07-12_222519_ln5fny.png",
        type: "image",
        isTrue: false,
        explanation:
          "Email mạo danh TPBank, link không rõ nguồn, không có mã giao dịch hay hotline chính thức.",
      },
      {
        id: "15",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752335459/Screenshot_2025-07-12_222600_yz7wku.png",
        type: "image",
        isTrue: true,
        explanation:
          "Đường link bắt đầu bằng https://facebook.com kèm ổ khóa bảo mật, đúng tên miền chính thức của Facebook, giao diện rõ ràng, chuyên nghiệp, đúng thiết kế quen thuộc của Facebook quốc tế, có tùy chọn chuyển đổi ngôn ngữ phía dưới như English, Español, Français, v.v.",
      },
      {
        id: "16",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752335472/Screenshot_2025-07-12_222617_yg1se5.png",
        type: "image",
        isTrue: true,
        explanation:
          "Địa chỉ gửi email là noreply@id.supercell.com, đúng tên miền chính thức của Supercell, tên người gửi có dấu xác minh màu xanh (Verified icon) – dấu hiệu của email doanh nghiệp uy tín, nội dung thông báo rõ ràng, đúng ngữ cảnh cảnh báo bảo mật thiết bị đăng nhập mới.",
      },
      {
        id: "17",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752335494/Screenshot_2025-07-12_222623_kadyvi.png",
        type: "image",
        isTrue: true,
        explanation:
          "Dưới đây là các dấu hiệu cho thấy đây là trang đăng nhập Zalo chính thức, đáng tin cậy, địa chỉ web là id.zalo.me – tên miền phụ chính chủ của Zalo, có chứng chỉ bảo mật (ổ khóa HTTPS), giao diện thiết kế chuẩn của Zalo, màu xanh dương thương hiệu, logo sắc nét, bố cục rõ ràng, có đầy đủ các phương thức đăng nhập: bằng mật khẩu, bằng mã QR, có cả tính năng khôi phục mật khẩu.",
      },
      {
        id: "18",
        content:
          "https://example.com/image18.jhttps://res.cloudinary.com/dcrrvtmhh/image/upload/v1752335496/Screenshot_2025-07-12_222630_jiuamp.pngpg",
        type: "image",
        isTrue: true,
        explanation:
          "Tên người gửi hiển thị là Spotify, có dấu tick xanh xác minh, địa chỉ email hợp lệ: no-reply@hello.spotify.com, đúng domain chính thức của Spotify",
      },
      {
        id: "19",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752335690/Screenshot_2025-07-12_225121_zgknti.png",
        type: "image",
        isTrue: true,
        explanation:
          "Tên miền chuẩn: login.microsoftonline.com, chính thức của Microsoft, kết nối bảo mật HTTPS có ổ khóa an toàn",
      },
      {
        id: "20",
        content:
          "https://res.cloudinary.com/dcrrvtmhh/image/upload/v1752335768/Screenshot_2025-07-12_225217_eulk3j.png",
        type: "image",
        isTrue: true,
        explanation:
          " Tên miền vnexpress.net, đúng tên miền chính thức, không phải giả mạo, giao diện đúng nhận diện thương hiệu VnExpress, chuyên nghiệp, rõ ràng.",
      },
    ];
  }
};
