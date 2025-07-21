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

      {/* 히어로 섹션 - 모던한 트렌드 디자인 */}
      <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden pt-20">
        {/* 메인 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-900/90 to-black/95 backdrop-blur-sm" />
        
        {/* 글래스모피즘 배경 */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/3 backdrop-blur-3xl" />
        
        {/* 네온 글로우 효과 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}} />
        </div>

        {/* 메인 컨테이너 */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-6xl mx-auto mt-8">
          {/* 로고 섹션 */}
          <div className="relative mb-8 z-10">
            {/* 로고 배경 글로우 */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 via-purple-500/30 to-blue-500/30 rounded-full blur-2xl animate-pulse-slow" />
            
            {/* 메인 로고 */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center hover:scale-105 transition-all duration-500 hover:shadow-red-500/50 z-10">
              <Image
                src="/logo.png"
                alt="하늘평화풋살클럽 로고"
                width={200}
                height={200}
                className="w-3/4 h-3/4 object-contain drop-shadow-2xl"
                priority
              />
            </div>
            
            {/* 회전하는 링 */}
            <div className="absolute inset-0 border-2 border-gradient-to-r from-red-400/50 via-transparent to-blue-400/50 rounded-full animate-spin-slow" />
            <div className="absolute inset-4 border border-gradient-to-l from-purple-400/30 via-transparent to-pink-400/30 rounded-full animate-spin-reverse" />
          </div>

          {/* 타이틀 */}
          <h1 className="relative mb-6">
            <span className="block text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent drop-shadow-2xl tracking-tight leading-tight">
              하늘평화풋살클럽
            </span>
            <span className="absolute inset-0 text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent opacity-50 blur-sm animate-pulse">
              하늘평화풋살클럽
            </span>
          </h1>

          {/* 서브타이틀 */}
          <div className="relative mb-8">
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium bg-gradient-to-r from-gray-100 via-white to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
              모두가 함께하는 풋살의 즐거움
            </p>
          </div>

          {/* 설명 텍스트 */}
          <div className="relative max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light bg-black/20 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/10 shadow-2xl">
              건강한 신체와 밝은 마음으로 함께하는 풋살 클럽입니다.<br />
              <span className="text-red-300 font-medium">지금 바로 우리와 함께 시작해보세요!</span>
            </p>
          </div>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">       
            <Link
              href="/schedule"
              className="group relative px-8 py-4 bg-gradient-to-r from-transparent to-transparent text-white font-bold text-lg rounded-full shadow-2xl border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">경기 일정 보기</span>
            </Link>
          </div>
        </div>

        {/* 하단 스크롤 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>

        {/* 장식용 기하학적 요소들 */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-red-400/50 rounded-full animate-twinkle-1 z-10" />
        <div className="absolute top-32 right-24 w-3 h-3 bg-blue-400/50 rounded-full animate-twinkle-2 z-10" />
        <div className="absolute bottom-40 left-16 w-2 h-2 bg-purple-400/50 rounded-full animate-twinkle-3 z-10" />
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-pink-400/50 rounded-full animate-twinkle-1 z-10" />
      </section>

      {/* 주요 메뉴 카드 */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 -mt-16 z-20 relative">
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

      {/* 경기 사진 갤러리 섹션 */}
      <section className="w-full mt-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* 섹션 타이틀 */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                경기 현장
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              하늘평화풋살클럽의 열정적인 경기 모습을 만나보세요
            </p>
          </div>

          {/* 메인 갤러리 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* 대형 피처 이미지 */}
            <div className="lg:col-span-2 lg:row-span-2">
              <div className="group relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-600 hover:border-red-500 transition-all duration-300">
                <Image
                  src="/20250720.jpeg"
                  alt="주요 경기 사진"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold mb-2">2025.07.20 경기</h3>
                  <p className="text-sm text-gray-300">3:3 쉬는 타임 없이</p>
                </div>
              </div>
            </div>

            {/* 작은 이미지들 */}
            <div className="space-y-6">
              <div className="group relative h-[190px] rounded-2xl overflow-hidden shadow-xl border border-slate-600 hover:border-red-500 transition-all duration-300">
                <Image
                  src="/20250223.jpeg"
                  alt="경기 사진"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">2025.02.23</p>
                </div>
              </div>

              <div className="group relative h-[190px] rounded-2xl overflow-hidden shadow-xl border border-slate-600 hover:border-red-500 transition-all duration-300">
                <Image
                  src="/20250309.jpeg"
                  alt="경기 사진"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">2025.03.09</p>
                </div>
              </div>
            </div>
          </div>

          {/* 추가 이미지 그리드 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/20250313.jpeg", date: "2025.03.13" },
              { src: "/20250406.jpeg", date: "2025.04.06" },
              { src: "/20250504.jpeg", date: "2025.05.04" },
              { src: "/20250706.jpeg", date: "2025.07.06" }
              //{ src: "/20250720.jpeg", date: "2025.07.20" }
            ].map((photo, index) => (
              <div key={index} className="group relative h-[200px] rounded-xl overflow-hidden shadow-lg border border-slate-600 hover:border-red-500 transition-all duration-300">
                <Image
                  src={photo.src}
                  alt={`경기 사진 ${photo.date}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs font-medium">{photo.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 더보기 버튼 */}
          <div className="text-center mt-12">
            <Link
              href="/photos"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 border border-red-400/50 backdrop-blur-sm"
            >
              <FaCameraRetro className="text-xl" />
              <span>더 많은 사진 보기</span>
            </Link>
          </div>
        </div>
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
      <footer className="w-full flex flex-col items-center gap-2 mt-12 mb-6 z-20">
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
