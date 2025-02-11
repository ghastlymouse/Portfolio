import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import Sidebar from "@/components/SideBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "정현욱 | 포트폴리오",
  description: "정현욱 프론트엔드 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ClientLayout>
          <Sidebar />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
