import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/stracture/Header/Navigation";
import Footer from "@/components/stracture/Footer";
import Provider from "@/components/providers/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ویکیتوری",
  description: "اراعه دهنده خدمات ویکیپدیا",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <head>
      </head>
      <body className="">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
