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
    <div className="w-full flex flex-col items-center gap-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 min-h-screen relative overflow-hidden">
      {/* 메인 배경 그라데이션 오버레이 */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/30 to-blue-900/40 animate-gradient-shift pointer-events-none z-0" />
      
      {/* 추가 배경 레이어 - 동적 그라데이션 */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent animate-wave-1" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-500/5 to-transparent animate-wave-2" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/5 to-transparent animate-wave-3" />
      </div>
      
      {/* 기하학적 요소들 */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* 다이아몬드 모양들 */}
        <div className="absolute top-[15%] left-[8%] w-6 h-6 bg-red-400/20 rotate-45 animate-float-diamond-1 shadow-lg shadow-red-400/30" />
        <div className="absolute top-[35%] right-[12%] w-8 h-8 bg-blue-400/20 rotate-45 animate-float-diamond-2 shadow-lg shadow-blue-400/30" />
        <div className="absolute bottom-[25%] left-[15%] w-4 h-4 bg-purple-400/20 rotate-45 animate-float-diamond-3 shadow-lg shadow-purple-400/30" />
        <div className="absolute top-[70%] right-[25%] w-5 h-5 bg-pink-400/20 rotate-45 animate-float-diamond-1 shadow-lg shadow-pink-400/30" />
        
        {/* 육각형 요소들 */}
        <div className="absolute top-[45%] left-[5%] w-10 h-10 border-2 border-cyan-400/30 animate-spin-hex shadow-lg shadow-cyan-400/20" 
             style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}} />
        <div className="absolute bottom-[45%] right-[8%] w-8 h-8 border-2 border-yellow-400/30 animate-spin-hex-reverse shadow-lg shadow-yellow-400/20" 
             style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}} />
      </div>
      
      {/* 움직이는 오로라 효과 - 더 강화 */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[80vw] h-[40vh] bg-gradient-to-r from-red-500/15 via-pink-500/20 to-transparent rounded-full blur-3xl animate-float-1" />
        <div className="absolute top-[40%] right-[10%] w-[70vw] h-[35vh] bg-gradient-to-l from-blue-500/15 via-cyan-500/20 to-transparent rounded-full blur-3xl animate-float-2" />
        <div className="absolute bottom-[30%] left-[20%] w-[60vw] h-[30vh] bg-gradient-to-r from-purple-500/15 via-violet-500/20 to-transparent rounded-full blur-3xl animate-float-3" />
        {/* 추가 오로라 */}
        <div className="absolute top-[10%] right-[30%] w-[50vw] h-[25vh] bg-gradient-to-br from-emerald-500/12 via-teal-500/18 to-transparent rounded-full blur-3xl animate-float-4" />
        <div className="absolute bottom-[10%] left-[40%] w-[45vw] h-[20vh] bg-gradient-to-tl from-orange-500/12 via-red-500/18 to-transparent rounded-full blur-3xl animate-float-5" />
      </div>
      
      {/* 더 많은 빛나는 파티클 효과 */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[15%] w-2 h-2 bg-red-400 rounded-full animate-twinkle-1 shadow-lg shadow-red-400/50" />
        <div className="absolute top-[25%] right-[20%] w-1 h-1 bg-blue-400 rounded-full animate-twinkle-2 shadow-lg shadow-blue-400/50" />
        <div className="absolute top-[45%] left-[25%] w-1.5 h-1.5 bg-purple-400 rounded-full animate-twinkle-3 shadow-lg shadow-purple-400/50" />
        <div className="absolute bottom-[40%] right-[15%] w-2 h-2 bg-pink-400 rounded-full animate-twinkle-1 shadow-lg shadow-pink-400/50" />
        <div className="absolute bottom-[60%] left-[80%] w-1 h-1 bg-cyan-400 rounded-full animate-twinkle-2 shadow-lg shadow-cyan-400/50" />
        <div className="absolute top-[60%] left-[5%] w-1.5 h-1.5 bg-yellow-400 rounded-full animate-twinkle-3 shadow-lg shadow-yellow-400/50" />
        {/* 추가 파티클들 */}
        <div className="absolute top-[55%] right-[45%] w-1 h-1 bg-emerald-400 rounded-full animate-twinkle-4 shadow-lg shadow-emerald-400/50" />
        <div className="absolute bottom-[35%] left-[60%] w-1.5 h-1.5 bg-orange-400 rounded-full animate-twinkle-5 shadow-lg shadow-orange-400/50" />
        <div className="absolute top-[80%] right-[70%] w-2 h-2 bg-indigo-400 rounded-full animate-twinkle-6 shadow-lg shadow-indigo-400/50" />
        <div className="absolute top-[30%] left-[70%] w-1 h-1 bg-rose-400 rounded-full animate-twinkle-4 shadow-lg shadow-rose-400/50" />
      </div>
      
      {/* 움직이는 그라데이션 링 - 더 많이 */}
      <div className="absolute top-[30%] left-[70%] w-64 h-64 border-2 border-gradient-to-r from-red-400/30 to-transparent rounded-full animate-spin-reverse pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[60%] w-48 h-48 border-2 border-gradient-to-l from-blue-400/20 to-transparent rounded-full animate-spin-slow pointer-events-none z-0" />
      <div className="absolute top-[10%] left-[20%] w-32 h-32 border border-purple-400/25 rounded-full animate-spin-medium pointer-events-none z-0" />
      <div className="absolute bottom-[50%] right-[20%] w-40 h-40 border-2 border-gradient-to-tr from-cyan-400/25 to-transparent rounded-full animate-spin-reverse-slow pointer-events-none z-0" />
      
      {/* 네온 그리드 효과 */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <div className="animate-grid-move"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px),
                 linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
               `,
               backgroundSize: '100px 100px, 100px 100px, 50px 50px, 50px 50px',
               backgroundPosition: '0 0, 0 0, 25px 25px, 25px 25px'
             }} 
              />
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
          .animate-spin-reverse {
            animation: spin 25s linear infinite reverse;
          }
          .animate-pulse-slow {
            animation: pulse 6s cubic-bezier(.4,0,.6,1) infinite;
          }
          .animate-gradient-shift {
            animation: gradientShift 15s ease-in-out infinite;
          }
          .animate-float-1 {
            animation: float1 20s ease-in-out infinite;
          }
          .animate-float-2 {
            animation: float2 25s ease-in-out infinite;
          }
          .animate-float-3 {
            animation: float3 30s ease-in-out infinite;
          }
          .animate-float-4 {
            animation: float4 35s ease-in-out infinite;
          }
          .animate-float-5 {
            animation: float5 40s ease-in-out infinite;
          }
          .animate-twinkle-1 {
            animation: twinkle 3s ease-in-out infinite;
          }
          .animate-twinkle-2 {
            animation: twinkle 4s ease-in-out infinite 0.5s;
          }
          .animate-twinkle-3 {
            animation: twinkle 5s ease-in-out infinite 1s;
          }
          .animate-twinkle-4 {
            animation: twinkle 3.5s ease-in-out infinite 1.5s;
          }
          .animate-twinkle-5 {
            animation: twinkle 4.5s ease-in-out infinite 2s;
          }
          .animate-twinkle-6 {
            animation: twinkle 2.5s ease-in-out infinite 0.8s;
          }
          .animate-float-diamond-1 {
            animation: floatDiamond 12s ease-in-out infinite;
          }
          .animate-float-diamond-2 {
            animation: floatDiamond 15s ease-in-out infinite;
          }
          .animate-float-diamond-3 {
            animation: floatDiamond 18s ease-in-out infinite;
          }
          .animate-spin-medium {
            animation: spin 14s linear infinite;
          }
          .animate-spin-reverse-slow {
            animation: spin 22s linear infinite reverse;
          }
          .animate-wave-1 {
            animation: wave1 8s ease-in-out infinite;
          }
          .animate-wave-2 {
            animation: wave2 10s ease-in-out infinite;
          }
          .animate-wave-3 {
            animation: wave3 12s ease-in-out infinite;
          }
          .animate-twinkle-4 {
            animation: twinkle 6s ease-in-out infinite 1.5s;
          }
          .animate-twinkle-5 {
            animation: twinkle 7s ease-in-out infinite 2s;
          }
          .animate-twinkle-6 {
            animation: twinkle 8s ease-in-out infinite 2.5s;
          }
          .animate-wave-1 {
            animation: wave 10s ease-in-out infinite;
          }
          .animate-wave-2 {
            animation: wave 12s ease-in-out infinite;
          }
          .animate-wave-3 {
            animation: wave 14s ease-in-out infinite;
          }
          .animate-float-diamond-1 {
            animation: floatDiamond 18s ease-in-out infinite;
          }
          .animate-float-diamond-2 {
            animation: floatDiamond 22s ease-in-out infinite;
          }
          .animate-float-diamond-3 {
            animation: floatDiamond 26s ease-in-out infinite;
          }
          .animate-spin-hex {
            animation: spinHex 20s linear infinite;
          }
          .animate-spin-hex-reverse {
            animation: spinHex 20s linear infinite reverse;
          }
          .animate-grid-move {
            animation: gridMove 30s linear infinite;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.7;}
            50% { opacity: 1;}
          }
          @keyframes gradientShift {
            0%, 100% { 
              background: linear-gradient(45deg, rgba(239, 68, 68, 0.2), rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.4));
            }
            25% { 
              background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.4), rgba(239, 68, 68, 0.2));
            }
            50% { 
              background: linear-gradient(225deg, rgba(168, 85, 247, 0.4), rgba(239, 68, 68, 0.2), rgba(59, 130, 246, 0.3));
            }
            75% { 
              background: linear-gradient(315deg, rgba(239, 68, 68, 0.3), rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.2));
            }
          }
          @keyframes float1 {
            0%, 100% { 
              transform: translate(0, 0) scale(1); 
              opacity: 0.15;
            }
            25% { 
              transform: translate(30px, -20px) scale(1.1); 
              opacity: 0.25;
            }
            50% { 
              transform: translate(-20px, 30px) scale(0.95); 
              opacity: 0.2;
            }
            75% { 
              transform: translate(40px, 10px) scale(1.05); 
              opacity: 0.18;
            }
          }
          @keyframes float2 {
            0%, 100% { 
              transform: translate(0, 0) scale(1) rotate(0deg); 
              opacity: 0.15;
            }
            33% { 
              transform: translate(-40px, 25px) scale(1.15) rotate(120deg); 
              opacity: 0.25;
            }
            66% { 
              transform: translate(25px, -30px) scale(0.9) rotate(240deg); 
              opacity: 0.2;
            }
          }
          @keyframes float3 {
            0%, 100% { 
              transform: translate(0, 0) scale(1); 
              opacity: 0.15;
            }
            20% { 
              transform: translate(50px, 20px) scale(1.2); 
              opacity: 0.3;
            }
            40% { 
              transform: translate(-30px, -40px) scale(0.85); 
              opacity: 0.18;
            }
            60% { 
              transform: translate(35px, 45px) scale(1.1); 
              opacity: 0.22;
            }
            80% { 
              transform: translate(-25px, 15px) scale(0.95); 
              opacity: 0.2;
            }
          }
          @keyframes float4 {
            0%, 100% { 
              transform: translate(0, 0) scale(1); 
              opacity: 0.15;
            }
            10% { 
              transform: translate(-10px, 5px) scale(1.05); 
              opacity: 0.25;
            }
            20% { 
              transform: translate(15px, -10px) scale(0.95); 
              opacity: 0.2;
            }
            30% { 
              transform: translate(-20px, 15px) scale(1.1); 
              opacity: 0.18;
            }
            40% { 
              transform: translate(25px, -5px) scale(0.98); 
              opacity: 0.22;
            }
            50% { 
              transform: translate(-30px, 10px) scale(1.03); 
              opacity: 0.2;
            }
            60% { 
              transform: translate(35px, -15px) scale(1.07); 
              opacity: 0.18;
            }
            70% { 
              transform: translate(-40px, 20px) scale(0.95); 
              opacity: 0.22;
            }
            80% { 
              transform: translate(45px, -10px) scale(1.1); 
              opacity: 0.2;
            }
          }
          @keyframes float5 {
            0%, 100% { 
              transform: translate(0, 0) scale(1); 
              opacity: 0.15;
            }
            5% { 
              transform: translate(10px, -5px) scale(1.05); 
              opacity: 0.25;
            }
            15% { 
              transform: translate(-15px, 10px) scale(0.95); 
              opacity: 0.2;
            }
            25% { 
              transform: translate(20px, -15px) scale(1.1); 
              opacity: 0.18;
            }
            35% { 
              transform: translate(-25px, 5px) scale(0.98); 
              opacity: 0.22;
            }
            45% { 
              transform: translate(30px, -10px) scale(1.03); 
              opacity: 0.2;
            }
            55% { 
              transform: translate(-35px, 15px) scale(1.07); 
              opacity: 0.18;
            }
            65% { 
              transform: translate(40px, -20px) scale(0.95); 
              opacity: 0.22;
            }
            75% { 
              transform: translate(-45px, 10px) scale(1.1); 
              opacity: 0.2;
            }
            85% { 
              transform: translate(50px, -15px) scale(1.05); 
              opacity: 0.18;
            }
          }
          @keyframes twinkle {
            0%, 100% { 
              opacity: 0.3; 
              transform: scale(1);
              box-shadow: 0 0 10px currentColor;
            }
            50% { 
              opacity: 1; 
              transform: scale(1.5);
              box-shadow: 0 0 20px currentColor, 0 0 30px currentColor;
            }
          }
          @keyframes wave {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
          @keyframes floatDiamond {
            0%, 100% { 
              transform: translate(0, 0) rotate(0deg); 
              opacity: 0.15;
            }
            25% { 
              transform: translate(10px, -10px) rotate(45deg) scale(1.1); 
              opacity: 0.25;
            }
            50% { 
              transform: translate(-10px, 10px) rotate(90deg) scale(0.95); 
              opacity: 0.2;
            }
            75% { 
              transform: translate(15px, 5px) rotate(135deg) scale(1.05); 
              opacity: 0.18;
            }
          }
          @keyframes spinHex {
            0% { 
              transform: rotate(0deg); 
            }
            100% { 
              transform: rotate(360deg); 
            }
          }
          @keyframes gridMove {
            0% {
              background-position: 0 0;
            }
            100% {
              background-position: 100px 100px;
            }
          }
          @keyframes wave1 {
            0%, 100% { 
              transform: translateX(0) scaleX(1); 
              opacity: 0.05;
            }
            50% { 
              transform: translateX(100px) scaleX(1.5); 
              opacity: 0.1;
            }
          }
          @keyframes wave2 {
            0%, 100% { 
              transform: translateX(0) scaleY(1); 
              opacity: 0.05;
            }
            50% { 
              transform: translateX(-120px) scaleY(1.3); 
              opacity: 0.1;
            }
          }
          @keyframes wave3 {
            0%, 100% { 
              transform: translateY(0) scale(1); 
              opacity: 0.05;
            }
            50% { 
              transform: translateY(80px) scale(1.2); 
              opacity: 0.1;
            }
          }
        `}
      </style>
    </div>
  );
}
