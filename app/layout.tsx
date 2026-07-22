import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const heading = Manrope({ variable: "--font-heading", subsets: ["latin", "vietnamese"] });
const body = Inter({ variable: "--font-body", subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Truong Van Hien — Media Executive & Social Content Creator",
  description: "Portfolio of Truong Van Hien, a Hanoi-based Media Executive and Social Content Creator working across short-form video, social design and photography.",
  metadataBase: new URL("https://truong-van-hien-portfolio.pages.dev"),
  openGraph: {
    title: "Truong Van Hien — Media Executive & Social Content Creator",
    description: "Social content, short-form video, visual design and photography.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Truong Van Hien — Media Executive & Social Content Creator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Truong Van Hien — Creative Portfolio",
    description: "Media Executive & Social Content Creator based in Hanoi.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
