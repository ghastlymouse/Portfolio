import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";

export const metadata: Metadata = {
  title: "무시무시한쥐의 포트폴리오",
  description: "무시무시한쥐의 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
