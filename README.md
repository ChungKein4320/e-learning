# E-Learning Platform

## Mô tả

Dự án xây dựng một website hỗ trợ sinh viên giải bài tập thông qua việc **nhập câu hỏi hoặc tải ảnh đề bài lên**. Hệ thống sử dụng AI (OpenAI API) để phân tích và trả lời.

## Mục lục

-   [Giới thiệu](#giới-thiệu)
-   [Cài đặt](#cài-đặt)
-   [Cách sử dụng](#cách-sử-dụng)
-   [Cấu trúc thư mục](#cấu-trúc-thư-mục)
-   [Hướng phát triển](#hướng-phát-triển)
-   [Đóng góp](#đóng-góp)
-   [Lưu ý](#lưu-ý)

## Giới thiệu

Dự án được tạo ra nhằm hỗ trợ các bạn sinh viên **IUH**, đặc biệt trong hai học phần **TCC1** và **TCC2**.

Công nghệ sử dụng:

-   Python (Flask) làm backend.
-   HTML/CSS/JS cho frontend.
-   OpenAI API xử lý câu hỏi và hình ảnh.

## Cài đặt

1. Clone project:
   clone https://github.com/ChungKein4320/e-learning.git
   cd e-learning

2. Cài đặt các thư viện cần thiết (Python 3.7+):
   pip install flask openai

## Cách sử dụng

1. Khởi động giao diện người dùng: Mở public/index.html bằng Live Server (trên VSCode hoặc tương tự).

2. Chạy Flask backend: Từ thư mục backend/, chạy python app.py.

3. Trải nghiệm: Trở lại trình duyệt, đặt câu hỏi hoặc tải ảnh, hệ thống sẽ phản hồi.

## Cấu trúc thư mục


```plaintext
e-learning/
├── backend/
│   └── app.py             # Flask backend
├── public/
│   └── index.html         # Giao diện chính
├── src/
│   ├── assets/            # Giao diện chính (CSS, JS, images...)
│   └── pages/             # Các trang giao diện khác
├── .gitignore
└── README.md

## Hướng phát triển

Dưới đây là một số tính năng và cải tiến dự kiến trong tương lai:

[] Thêm tính năng đăng nhập với Google/Facebook.
[] Tối ưu hóa giao diện.
[] Triển khai lên server thật để hoạt động liên tục (deploy lên Render/Vercel/Heroku...).
[] Gợi ý prompt thông minh khi nhập liệu.
[] Lưu lịch sử chat theo tài khoản người dùng.
[] Chuyển sang dùng cơ sở dữ liệu thực như SQLite/PostgreSQL thay vì LocalStorage.
[] Bảo mật dữ liệu người dùng tốt hơn.

## Đóng góp

Mình rất hoan nghênh mọi đóng góp từ cộng đồng để cải thiện dự án này!

Nếu bạn muốn đóng góp:

1. **Fork** dự án về tài khoản GitHub của bạn.
2. Tạo một **branch mới** từ nhánh `main`.
3. Thực hiện chỉnh sửa, commit và **push** lên repo của bạn.
4. Gửi **Pull Request (PR)** để mình xem xét tích hợp.

Bạn cũng có thể:

-   Gửi phản hồi, góp ý hoặc báo lỗi qua phần [Issues](https://github.com/ChungKein4320/e-learning/issues)
-   Hoặc liên hệ trực tiếp với mình qua email: **trungkien7818@gmail.com**

> Xin chân thành cảm ơn sự quan tâm và đóng góp của bạn!

## Lưu ý

-   Đây là project cá nhân, vẫn đang trong giai đoạn phát triển nên có thể còn lỗi hoặc chưa tối ưu.
-   Hiện tại, bạn cần có OpenAI API key để sử dụng toàn bộ tính năng.
-   Trong tương lai gần, mình sẽ deploy phiên bản demo công khai để mọi người sử dụng mà không cần API key cá nhân.
