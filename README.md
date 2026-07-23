# Portfolio — Trương Văn Hiển

Website portfolio cá nhân dành cho các vị trí **Media Executive, Content Creator, Social Media và Meta Ads**.

## 1. Mở dự án bằng Visual Studio Code

Trong Visual Studio Code, chọn:

```text
File → Open Folder…
```

Sau đó mở thư mục:

```text
/Users/hoangyugi001/Documents/Coder/truong-van-hien-portfolio
```

## 2. Mở Terminal

Trong Visual Studio Code, chọn:

```text
Terminal → New Terminal
```

Nếu Terminal chưa ở đúng thư mục dự án, chạy:

```bash
cd "/Users/hoangyugi001/Documents/Coder/truong-van-hien-portfolio"
```

## 3. Kiểm tra Node.js

Dự án yêu cầu **Node.js 22.13.0 trở lên**.

Kiểm tra phiên bản đang sử dụng:

```bash
node -v
npm -v
```

Nếu Terminal báo `command not found: node`, có thể cài bằng Homebrew:

```bash
brew install node
```

Sau khi cài, hãy đóng Terminal cũ, mở Terminal mới và kiểm tra lại `node -v`.

## 4. Cài đặt pnpm

Kích hoạt pnpm bằng Corepack:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

Kiểm tra:

```bash
pnpm -v
```

Nếu máy không sử dụng được Corepack, cài pnpm bằng npm:

```bash
npm install -g pnpm
```

## 5. Cài thư viện của dự án

Chạy lệnh sau trong thư mục dự án:

```bash
pnpm install
```

Thông thường chỉ cần chạy lại khi:

- Mới sao chép dự án sang máy khác.
- File `package.json` thay đổi.
- Thư mục `node_modules` bị xóa.

## 6. Chạy portfolio trên máy

Chạy:

```bash
pnpm run dev
```

Khi Terminal hiển thị địa chỉ local, mở trình duyệt tại:

```text
http://localhost:3000/
```

Trong quá trình chỉnh sửa, website sẽ tự cập nhật sau khi lưu file bằng `Command + S`. Nếu trình duyệt chưa cập nhật, nhấn `Command + R`.

## 7. Dừng website

Quay lại Terminal đang chạy website và nhấn:

```text
Control + C
```

## 8. Kiểm tra trước khi đăng website

Chạy:

```bash
pnpm run build
```

Nếu Terminal hiển thị `Build complete`, dự án đã biên dịch thành công.

## 9. Những file quan trọng

```text
app/page.tsx                         Nội dung và cấu trúc portfolio
app/globals.css                      Màu sắc, bố cục và responsive
app/layout.tsx                       Tiêu đề, mô tả và thông tin SEO
public/media/                        Ảnh và video của portfolio
public/files/truong-van-hien-cv.pdf  File CV tải xuống
```

## 10. Chỉnh sửa nội dung

Phần lớn nội dung nằm trong:

```text
app/page.tsx
```

Một số nội dung có thể tìm nhanh bằng tên section:

- `hero`: phần giới thiệu đầu trang.
- `dunnio`: dự án Dunnio Tailor.
- `pubpower`: dự án PubPower.
- `interdog`: dự án Interdog Media và Meta Ads.
- `photography`: các dự án chụp ảnh cá nhân.
- `about`: thông tin giới thiệu bản thân.
- `capabilities`: năng lực chuyên môn.
- `experience`: kinh nghiệm làm việc.
- `contact`: thông tin liên hệ cuối trang.

## 11. Thay ảnh hoặc video

Đặt file mới vào một thư mục phù hợp bên trong:

```text
public/media/
```

Ví dụ:

```text
public/media/about/anh-moi.jpg
```

Sau đó sử dụng trong `app/page.tsx`:

```tsx
<img src="/media/about/anh-moi.jpg" alt="Mô tả nội dung ảnh" />
```

Nên dùng tên file không dấu, không có khoảng trắng và viết thường, ví dụ:

```text
truong-van-hien-portrait.jpg
```

## 12. Thay CV

Thay file sau bằng CV mới và giữ nguyên tên:

```text
public/files/truong-van-hien-cv.pdf
```

Nếu giữ nguyên tên file, các nút `Xem CV` trên website không cần chỉnh sửa.

## Quy trình sử dụng hằng ngày

Mỗi lần muốn chỉnh portfolio, chỉ cần mở Terminal và chạy:

```bash
cd "/Users/hoangyugi001/Documents/Coder/truong-van-hien-portfolio"
pnpm run dev
```

Sau đó mở:

```text
http://localhost:3000/
```
