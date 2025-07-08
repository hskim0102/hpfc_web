import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center gap-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen">
      {/* 아스날 스타일 히어로 섹션 */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-700">
        {/* 다이나믹 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

        {/* stadium.png (축구장) 배경 - 더 어둡게 */}
        <Image
          src="/stadium.png"
          alt="축구장 배경"
          fill
          style={{ objectFit: "cover", opacity: 0.3 }}
          priority
          className="z-0"
        />

        {/* main.png (로고/마스코트 등) 오버레이 */}
        <Image
          src="/main.png"
          alt="대문 이미지"
          fill
          style={{ objectFit: "contain" }}
          priority
          className="z-10 opacity-90"
        />

        {/* 아스날 스타일 오버레이 효과 */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-slate-900/40 z-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-25" />

        {/* 중앙 타이틀 - 아스날 스타일 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-4">
          <h1
            className="text-6xl md:text-7xl font-black text-white drop-shadow-2xl text-center tracking-tight"
            style={{
              textShadow:
                "0 4px 24px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.1)",
              background:
                "linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            하늘평화풋살클럽
          </h1>
        </div>

        {/* 하단 소개문구 - 아스날 스타일 */}
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

      {/* 카드형 주요 메뉴 - 아스날 스타일 */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 -mt-16 z-30 relative">
        <Link
          href="/squad"
          className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-600 hover:scale-105 hover:shadow-red-500/20 hover:border-red-500 transition-all duration-300 flex flex-col items-center p-6 min-h-[200px] backdrop-blur-sm"
        >
          <span className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
            선수단 소개
          </span>
          <span className="text-slate-300 text-center">
            클럽의 주요 선수 명단과 포지션을 확인하세요.
          </span>
        </Link>
        <Link
          href="/schedule"
          className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-600 hover:scale-105 hover:shadow-red-500/20 hover:border-red-500 transition-all duration-300 flex flex-col items-center p-6 min-h-[200px] backdrop-blur-sm"
        >
          <span className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
            시합 일정
          </span>
          <span className="text-slate-300 text-center">
            다가오는 경기 일정을 한눈에!
          </span>
        </Link>
        <Link
          href="/board"
          className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-600 hover:scale-105 hover:shadow-red-500/20 hover:border-red-500 transition-all duration-300 flex flex-col items-center p-6 min-h-[200px] backdrop-blur-sm"
        >
          <span className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
            게시판
          </span>
          <span className="text-slate-300 text-center">
            공지사항 및 소식을 확인하세요.
          </span>
        </Link>
        <Link
          href="/photos"
          className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-600 hover:scale-105 hover:shadow-red-500/20 hover:border-red-500 transition-all duration-300 flex flex-col items-center p-6 min-h-[200px] backdrop-blur-sm"
        >
          <span className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
            경기 사진
          </span>
          <span className="text-slate-300 text-center">
            경기 현장의 생생한 모습을 확인하세요.
          </span>
        </Link>
      </section>

      {/* 클럽 비전/연혁 카드 - 아스날 스타일 */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-4">
        <div className="bg-gradient-to-br from-red-900/80 to-red-800/60 rounded-2xl p-8 shadow-2xl border border-red-600/50 flex flex-col items-center backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">
            클럽 비전
          </h2>
          <ul className="list-disc list-inside text-left text-slate-200 space-y-2 text-lg">
            <li>건강한 신체와 밝은 마음을 함께!</li>
            <li>공정한 경기, 즐거운 소통</li>
            <li>지역사회와 함께 성장하는 클럽</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/60 rounded-2xl p-8 shadow-2xl border border-slate-600/50 flex flex-col items-center backdrop-blur-sm">
          <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-lg">
            연혁
          </h2>
          <ul className="list-disc list-inside text-left text-slate-200 space-y-2 text-lg">
            <li>2024년 3월: 하늘평화풋살클럽 창단</li>
            <li>2024년 4월: 첫 공식 시합 개최</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
