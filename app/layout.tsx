import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resume",
  description: "Hi! My name is JuHyun Kwon. Introduce myself.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
