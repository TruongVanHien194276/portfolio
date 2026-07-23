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

Để kiểm tra bản chạy trên máy:

```bash
pnpm run build
```

Để kiểm tra đúng bản tĩnh sẽ được đưa lên GitHub Pages:

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio pnpm run export
```

Nếu Terminal không báo lỗi và thư mục `out` được tạo, website đã sẵn sàng để deploy.

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

## 13. Website đang được deploy ở đâu?

Portfolio đang được xuất bản miễn phí bằng **GitHub Pages** tại:

```text
https://truongvanhien194276.github.io/portfolio/
```

Mã nguồn được lưu trong repository:

```text
https://github.com/TruongVanHien194276/portfolio
```

## 14. Cơ chế tự động deploy

Dự án đã được cấu hình tự động deploy trong:

```text
.github/workflows/deploy-pages.yml
```

Mỗi khi có code mới được đẩy lên nhánh `main`, GitHub sẽ tự thực hiện:

1. Cài đặt thư viện.
2. Tạo bản website tĩnh.
3. Đưa bản mới lên GitHub Pages.
4. Thay thế phiên bản cũ đang hiển thị trên website.

Bạn không cần chạy thêm lệnh deploy riêng.

> Lưu ý: Nhấn `Command + S` chỉ cập nhật bản xem trước tại `localhost`. Website thật chỉ tự deploy sau khi bạn chạy `git push origin main`.

## 15. Cách cập nhật website sau khi sửa code

Sau khi chỉnh sửa và kiểm tra tại `http://localhost:3000/`, mở Terminal trong Visual Studio Code và chạy lần lượt:

### Bước 1: Xem những file đã thay đổi

```bash
git status
```

### Bước 2: Chọn các file nội dung và hình ảnh cần cập nhật

```bash
git add app public README.md
```

Nếu bạn sửa một file khác, thêm chính xác file đó vào lệnh `git add`.

### Bước 3: Tạo bản ghi thay đổi

```bash
git commit -m "Cap nhat portfolio"
```

Bạn có thể thay nội dung trong dấu ngoặc kép bằng mô tả ngắn, ví dụ:

```bash
git commit -m "Cap nhat du an PubPower"
```

### Bước 4: Đẩy code lên GitHub

```bash
git push origin main
```

Ngay sau bước này, quy trình tự động deploy sẽ bắt đầu. Thông thường website cần khoảng 1–3 phút để hiển thị phiên bản mới.

## 16. Kiểm tra trạng thái deploy

Mở trang sau:

```text
https://github.com/TruongVanHien194276/portfolio/actions
```

Trạng thái của lần deploy mới nhất:

- Biểu tượng màu vàng: đang xử lý.
- Dấu tích màu xanh: deploy thành công.
- Dấu X màu đỏ: deploy thất bại.

Sau khi có dấu tích xanh, mở lại website và nhấn:

```text
Command + Shift + R
```

Thao tác này tải lại toàn bộ trang và bỏ qua dữ liệu cũ trong bộ nhớ trình duyệt.

## 17. Deploy thủ công khi cần

Nếu code trên GitHub đã đúng nhưng website chưa tự cập nhật:

1. Mở trang `Actions` của repository.
2. Chọn **Deploy portfolio to GitHub Pages**.
3. Chọn **Run workflow**.
4. Giữ nhánh `main` và nhấn **Run workflow**.

Không cần deploy thủ công nếu quy trình tự động sau `git push` đang hoạt động bình thường.

## 18. Quy trình sử dụng hằng ngày

Mỗi lần muốn chỉnh portfolio, chỉ cần mở Terminal và chạy:

```bash
cd "/Users/hoangyugi001/Documents/Coder/truong-van-hien-portfolio"
pnpm run dev
```

Sau đó mở:

```text
http://localhost:3000/
```

Sau khi sửa xong:

```bash
git status
git add app public README.md
git commit -m "Cap nhat portfolio"
git push origin main
```

Website thật sẽ tự động deploy sau lệnh cuối cùng.
