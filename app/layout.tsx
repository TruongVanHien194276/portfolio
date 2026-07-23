import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const heading = Manrope({ variable: "--font-heading", subsets: ["latin", "vietnamese"] });
const body = Inter({ variable: "--font-body", subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Trương Văn Hiển — Media Executive & Content Creator",
  description: "Portfolio của Trương Văn Hiển — Media Executive và Content Creator tại Hà Nội, làm việc trong lĩnh vực video ngắn, nội dung social, thiết kế hình ảnh và nhiếp ảnh.",
  metadataBase: new URL("https://truong-van-hien-portfolio.pages.dev"),
  openGraph: {
    title: "Trương Văn Hiển — Media Executive & Content Creator",
    description: "Nội dung social, video ngắn, thiết kế hình ảnh và nhiếp ảnh.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Trương Văn Hiển — Media Executive & Content Creator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trương Văn Hiển — Creative Portfolio",
    description: "Media Executive & Content Creator tại Hà Nội.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body className={`${heading.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
