import Image from "next/image";
import Link from "next/link";

export default function Photos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* 헤더 섹션 */}
      <section className="relative w-full h-64 flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-red-700">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

        <div className="relative z-30 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white drop-shadow-2xl mb-4">
            경기 사진
          </h1>
          <p className="text-xl text-slate-200 font-medium">
            하늘평화풋살클럽의 생생한 경기 현장
          </p>
        </div>
      </section>

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 py-8">
        {/* 필터/정렬 옵션 */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center"></div>

        {/* 사진 갤러리 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* 사진 카드들 */}

          <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-600 hover:scale-105 hover:shadow-red-500/20 hover:border-red-500 transition-all duration-300 overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/20250803.jpg"
                alt="2025년 8월  3일 경기"
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2">
                2025년 8월 3일 경기(5 vs 5)
              </h3>
              <p className="text-slate-300 text-sm">강북 아크풋살 스타디움</p>
            </div>
          </div>


          <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-600 hover:scale-105 hover:shadow-red-500/20 hover:border-red-500 transition-all duration-300 overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/20250720.jpeg"
                alt="2025년 7월 20일 경기"
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2">
                2025년 7월 20일 경기
              </h3>
              <p className="text-slate-300 text-sm">서경대 풋살장</p>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-600 hover:scale-105 hover:shadow-red-500/20 hover:border-red-500 transition-all duration-300 overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/20250706.jpeg"
                alt="2025년 7월 6일 경기"
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2">
                2025년 7월 6일 경기
              </h3>
              <p className="text-slate-300 text-sm">강북 아크풋살 스타디움</p>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-600 hover:scale-105 hover:shadow-red-500/20 hover:border-red-500 transition-all duration-300 overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/20250615.jpeg"
                alt="2025년 6월 15일 경기"
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2">
                2025년 6월 15일 경기
              </h3>
              <p className="text-slate-300 text-sm">
                동대문 토모 풋살피치 야외 구장
              </p>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-600 hover:scale-105 hover:shadow-red-500/20 hover:border-red-500 transition-all duration-300 overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/20250504.jpeg"
                alt="2025년 5월 4일 경기"
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2">
                2025년 5월 4일 경기
              </h3>
              <p className="text-slate-300 text-sm">도봉 풋살장 2구장</p>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-600 hover:scale-105 hover:shadow-red-500/20 hover:border-red-500 transition-all duration-300 overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/20250406.jpeg"
                alt="2025년 4월 6일 경기"
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2">
                2025년 4월 6일 경기
              </h3>
              <p className="text-slate-300 text-sm">도봉 풋살장 2구장</p>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-600 hover:scale-105 hover:shadow-red-500/20 hover:border-red-500 transition-all duration-300 overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/20250313.jpeg"
                alt="2025년 3월 13일 경기"
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2">
                2025년 3월 13일 회식
              </h3>
              <p className="text-slate-300 text-sm">육전국밥</p>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-600 hover:scale-105 hover:shadow-red-500/20 hover:border-red-500 transition-all duration-300 overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/20250309.jpeg"
                alt="2025년 3월 9일 경기"
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2">
                2025년 3월 9일 경기
              </h3>
              <p className="text-slate-300 text-sm">도봉 풋살장 2구장</p>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-600 hover:scale-105 hover:shadow-red-500/20 hover:border-red-500 transition-all duration-300 overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/flag.jpeg"
                alt="FC 깃발"
                fill
                style={{ objectFit: "cover" }}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2">FC 깃발</h3>
              <p className="text-slate-300 text-sm">하늘평화 FC 사무실 앞</p>
            </div>
          </div>
        </div>
        {/* 페이지네이션 */}
        <div className="mt-12 flex justify-center"></div>
      </div>

      {/* 뒤로가기 버튼 */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link
          href="/"
          className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-full shadow-2xl hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:scale-110"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
