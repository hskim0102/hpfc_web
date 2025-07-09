import Image from "next/image";
import Link from "next/link";
import {
  FaUsers,
  FaCalendarAlt,
  FaRegComments,
  FaCameraRetro,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen relative overflow-x-hidden">
      {/* 움직이는 빛 효과 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] pointer-events-none z-0">
        <div className="absolute w-full h-full bg-gradient-to-br from-red-500/10 via-blue-400/10 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      </div>

      {/* 히어로 섹션 */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-700 shadow-2xl">
        {/* 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

        {/* stadium.png (축구장) 배경 */}
        <Image
          src="/stadium.png"
          alt="축구장 배경"
          fill
          style={{ objectFit: "cover", opacity: 0.25 }}
          priority
          className="z-0"
        />

        {/* main.png (로고/마스코트 등) */}
        <Image
          src="/main.png"
          alt="대문 이미지"
          fill
          style={{ objectFit: "contain" }}
          priority
          className="z-10 opacity-95"
        />

        {/* 빛나는 라인 */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full border-8 border-red-400/20 animate-spin-slow z-20 pointer-events-none" />

        {/* 오버레이 효과 */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-slate-900/40 z-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-25" />

        {/* 중앙 타이틀 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-4">
          <h1
            className="text-6xl md:text-7xl font-black text-white drop-shadow-2xl text-center tracking-tight"
            style={{
              textShadow:
                "0 4px 24px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.1)",
              background:
                "linear-gradient(135deg, #fff 0%, #f8f9fa 50%, #e9ecef 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            하늘평화풋살클럽
          </h1>
          <span className="mt-4 text-xl md:text-2xl text-red-200 font-semibold tracking-wide drop-shadow-lg bg-black/30 px-6 py-2 rounded-full border border-white/10">
            모두가 함께하는 축구의 즐거움!
          </span>
        </div>

        {/* 하단 소개문구 */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 w-full flex justify-center px-4">
          <p
            className="text-lg md:text-2xl max-w-2xl leading-relaxed text-white font-medium bg-black/30 rounded-2xl px-8 py-4 shadow-2xl backdrop-blur-md text-center border border-white/20"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
          >
            모두가 함께 즐기는 풋살, 하늘평화풋살클럽에서 시작하세요.
            <br />
            건강한 운동과 따뜻한 교류, 지금 바로 함께해요!
          </p>
        </div>
      </section>

      {/* 주요 메뉴 카드 */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 -mt-16 z-30 relative">
        <Link
          href="/squad"
          className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-600 hover:scale-105 hover:shadow-red-500/30 hover:border-red-500 transition-all duration-300 flex flex-col items-center p-6 min-h-[200px] backdrop-blur-sm relative overflow-hidden"
        >
          <FaUsers className="text-5xl text-red-400 mb-2 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
            선수단 소개
          </span>
          <span className="text-slate-300 text-center">
            클럽의 주요 선수 명단과 포지션을 확인하세요.
          </span>
        </Link>
        <Link
          href="/schedule"
          className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-600 hover:scale-105 hover:shadow-red-500/30 hover:border-red-500 transition-all duration-300 flex flex-col items-center p-6 min-h-[200px] backdrop-blur-sm relative overflow-hidden"
        >
          <FaCalendarAlt className="text-5xl text-red-400 mb-2 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
            시합 일정
          </span>
          <span className="text-slate-300 text-center">
            다가오는 경기 일정을 한눈에!
          </span>
        </Link>
        <Link
          href="/board"
          className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-600 hover:scale-105 hover:shadow-red-500/30 hover:border-red-500 transition-all duration-300 flex flex-col items-center p-6 min-h-[200px] backdrop-blur-sm relative overflow-hidden"
        >
          <FaRegComments className="text-5xl text-red-400 mb-2 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
            게시판
          </span>
          <span className="text-slate-300 text-center">
            공지사항 및 소식을 확인하세요.
          </span>
        </Link>
        <Link
          href="/photos"
          className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-600 hover:scale-105 hover:shadow-red-500/30 hover:border-red-500 transition-all duration-300 flex flex-col items-center p-6 min-h-[200px] backdrop-blur-sm relative overflow-hidden"
        >
          <FaCameraRetro className="text-5xl text-red-400 mb-2 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
            경기 사진
          </span>
          <span className="text-slate-300 text-center">
            경기 현장의 생생한 모습을 확인하세요.
          </span>
        </Link>
      </section>

      {/* 클럽 비전/연혁 카드 */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-4">
        <div className="relative bg-gradient-to-br from-red-900/80 to-red-800/60 rounded-2xl p-8 shadow-2xl border border-red-600/50 flex flex-col items-center backdrop-blur-sm overflow-hidden">
          {/* 라인 장식 */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500/60 via-transparent to-transparent rounded-t-2xl" />
          <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg flex items-center gap-2">
            <span className="inline-block w-3 h-3 bg-red-400 rounded-full animate-pulse" />
            클럽 비전
          </h2>
          <ul className="list-disc list-inside text-left text-slate-200 space-y-2 text-lg">
            <li>건강한 신체와 밝은 마음을 함께!</li>
            <li>공정한 경기, 즐거운 소통</li>
            <li>지역사회와 함께 성장하는 클럽</li>
          </ul>
        </div>
        <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-700/60 rounded-2xl p-8 shadow-2xl border border-slate-600/50 flex flex-col items-center backdrop-blur-sm overflow-hidden">
          {/* 뱃지 장식 */}
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            Since 2024
          </div>
          <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg flex items-center gap-2">
            <span className="inline-block w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
            연혁
          </h2>
          <ul className="list-disc list-inside text-left text-slate-200 space-y-2 text-lg">
            <li>2024년 3월: 하늘평화풋살클럽 창단</li>
            <li>2024년 4월: 첫 공식 시합 개최</li>
          </ul>
        </div>
      </section>

      {/* 하단 소셜/문의 */}
      <footer className="w-full flex flex-col items-center gap-2 mt-12 mb-6 z-40">
        <div className="flex gap-6">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-white text-3xl transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:contact@hpfc.com"
            className="text-red-400 hover:text-white text-3xl transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
        <span className="text-slate-400 text-sm mt-2">
          © 2024 하늘평화풋살클럽
        </span>
      </footer>
      {/* 커스텀 애니메이션 */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 18s linear infinite;
          }
          .animate-pulse-slow {
            animation: pulse 6s cubic-bezier(.4,0,.6,1) infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.7;}
            50% { opacity: 1;}
          }
        `}
      </style>
    </div>
  );
}
