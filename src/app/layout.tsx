import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import {
  FaUsers,
  FaCalendarAlt,
  FaRegComments,
  FaCameraRetro,
  FaHome,
} from "react-icons/fa";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "하늘평화풋살클럽",
  description: "하늘평화풋살클럽",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#e3f0ff] text-[#3a6ea5] min-h-screen`}
      >
        <header className="fixed top-0 left-0 w-full z-30 bg-[#5a1e08] bg-opacity-95 shadow-lg border-b border-[#b3d8ff]/30">
          <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="하늘평화풋살클럽 로고"
                width={48}
                height={60}
                priority
                className="rounded-md drop-shadow-lg"
              />
              <span className="text-2xl font-extrabold tracking-wide text-white drop-shadow">
                하늘평화풋살클럽
              </span>
            </div>
            <nav>
              {/* 데스크탑 메뉴 */}
              <ul className="hidden md:flex gap-8 text-lg font-semibold">
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-[#ffd966] transition flex items-center gap-1"
                  >
                    <FaHome className="inline-block md:hidden" />
                    클럽 소개
                  </Link>
                </li>
                <li>
                  <Link
                    href="/squad"
                    className="text-white hover:text-[#ffd966] transition flex items-center gap-1"
                  >
                    <FaUsers className="inline-block md:hidden" />
                    선수단 소개
                  </Link>
                </li>
                <li>
                  <Link
                    href="/schedule"
                    className="text-white hover:text-[#ffd966] transition flex items-center gap-1"
                  >
                    <FaCalendarAlt className="inline-block md:hidden" />
                    시합 일정
                  </Link>
                </li>
                <li>
                  <Link
                    href="/board"
                    className="text-white hover:text-[#ffd966] transition flex items-center gap-1"
                  >
                    <FaRegComments className="inline-block md:hidden" />
                    게시판
                  </Link>
                </li>
                <li>
                  <Link
                    href="/photos"
                    className="text-white hover:text-[#ffd966] transition flex items-center gap-1"
                  >
                    <FaCameraRetro className="inline-block md:hidden" />
                    경기 사진
                  </Link>
                </li>
              </ul>
              {/* 모바일 메뉴 (아이콘만) */}
              <ul className="flex md:hidden gap-6 text-2xl">
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-[#ffd966] transition"
                  >
                    <FaHome />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/squad"
                    className="text-white hover:text-[#ffd966] transition"
                  >
                    <FaUsers />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/schedule"
                    className="text-white hover:text-[#ffd966] transition"
                  >
                    <FaCalendarAlt />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/board"
                    className="text-white hover:text-[#ffd966] transition"
                  >
                    <FaRegComments />
                  </Link>
                </li>
                <li>
                  <Link
                    href="/photos"
                    className="text-white hover:text-[#ffd966] transition"
                  >
                    <FaCameraRetro />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto w-full px-4 pt-28 pb-8 min-h-[80vh]">
          {children}
        </main>
        <footer className="w-full bg-[#5a1e08] text-[#ffd966] text-center py-4 border-t border-[#b3d8ff]/30 opacity-90 text-sm">
          Copyright © 2024 하늘평화풋살클럽
        </footer>
      </body>
    </html>
  );
}
