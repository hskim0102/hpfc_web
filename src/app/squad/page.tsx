import Image from "next/image";

function RadarChart({ stats }: { stats: number[] }) {
  const centerX = 90;
  const centerY = 100;
  const radius = 80;
  const labelRadius = 75;
  const angles = stats.map((_, i) => (Math.PI / 3) * i - Math.PI / 2);
  const points = stats
    .map((v, i) => {
      const r = radius * (v / 100);
      const x = centerX + r * Math.cos(angles[i]);
      const y = centerY + r * Math.sin(angles[i]);
      return `${x},${y}`;
    })
    .join(" ");
  const axis = angles.map((a) => [
    centerX,
    centerY,
    centerX + radius * Math.cos(a),
    centerY + radius * Math.sin(a),
  ]);
  return (
    <svg width={180} height={200} className="my-2 drop-shadow-xl">
      {/* Glow filter */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* 육각형 틀 */}
      <polygon
        points={angles
          .map(
            (a) =>
              `${centerX + radius * Math.cos(a)},${
                centerY + radius * Math.sin(a)
              }`
          )
          .join(" ")}
        fill="#b3d8ff33"
        stroke="#3a6ea5"
        strokeWidth={2}
        filter="url(#glow)"
      />
      {/* 축 */}
      {axis.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#3a6ea5"
          strokeWidth={1}
        />
      ))}
      {/* 능력치 영역 */}
      <polygon
        points={points}
        fill="#3a6ea5bb"
        stroke="#22577a"
        strokeWidth={2}
        filter="url(#glow)"
      />
      {/* 라벨 */}
      {[
        [
          "패스",
          centerX + labelRadius * Math.cos(angles[0]),
          centerY + labelRadius * Math.sin(angles[0]) - 5,
        ],
        [
          "슛",
          centerX + labelRadius * Math.cos(angles[1]),
          centerY + labelRadius * Math.sin(angles[1]),
        ],
        [
          "수비",
          centerX + labelRadius * Math.cos(angles[2]),
          centerY + labelRadius * Math.sin(angles[2]) + 5,
        ],
        [
          "체력",
          centerX + labelRadius * Math.cos(angles[3]),
          centerY + labelRadius * Math.sin(angles[3]) + 5,
        ],
        [
          "스피드",
          centerX + labelRadius * Math.cos(angles[4]),
          centerY + labelRadius * Math.sin(angles[4]),
        ],
        [
          "팀워크",
          centerX + labelRadius * Math.cos(angles[5]),
          centerY + labelRadius * Math.sin(angles[5]) - 5,
        ],
      ].map(([label, x, y]) => (
        <text
          key={label as string}
          x={x as number}
          y={y as number}
          fontSize={"0.8rem"}
          fill="#003366"
          stroke="#fff"
          strokeWidth={2}
          paintOrder="stroke"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {label}
        </text>
      ))}
    </svg>
  );
}

export default function Squad() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-white to-blue-200 relative pb-16 overflow-x-hidden">
      {/* 히어로 배너 */}
      <div className="w-full flex flex-col items-center justify-center py-14 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 shadow-2xl relative mb-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] h-[30vh] bg-gradient-to-br from-blue-300/30 via-blue-200/10 to-transparent rounded-full blur-3xl animate-pulse-slow z-0" />
        <div className="relative z-10 flex flex-col items-center">
          <Image
            src="/main.png"
            alt="클럽 로고"
            width={130}
            height={130}
            className="rounded-full border-4 border-white shadow-2xl mb-4 bg-white/80 animate-float"
            style={{ background: "white" }}
          />
          <h1 className="text-5xl md:text-6xl font-black text-white drop-shadow-2xl tracking-tight mb-2 animate-gradient-text bg-gradient-to-r from-blue-200 via-white to-blue-400 bg-clip-text text-transparent">
            하늘평화풋살클럽 선수단
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 font-medium drop-shadow mb-2 animate-fade-in">
            열정과 팀워크로 뭉친 우리의 선수들을 소개합니다!
          </p>
        </div>
      </div>
      {/* 선수 카드 그리드 */}
      <section className="flex flex-col items-center gap-8 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 w-full max-w-7xl px-4">
          {/* 선수 카드 반복 */}
          {[
            {
              img: "/lee.png",
              name: "이한빈",
              pos: "피보 (PIVO)",
              desc: "풋살마스터, 팀의 중심을 잡아주는 플레이메이커",
              stats: [85, 80, 80, 80, 88, 92],
            },
            {
              img: "/lee2.png",
              name: "이승재",
              pos: "픽소 (FIXO)",
              desc: "클럽 주장, 철통 방어가 장점",
              stats: [80, 75, 100, 75, 75, 85],
            },
            {
              img: "/kang.png",
              name: "강충원",
              pos: "골레이로 (GOLEIRO)",
              desc: "철벽 수문장",
              stats: [90, 95, 90, 85, 80, 80],
            },
            {
              img: "/min.png",
              name: "이민용",
              pos: "픽소 (FIXO)",
              desc: "폭풍같은 공격수",
              stats: [90, 85, 90, 90, 85, 90],
            },
            {
              img: "/im.png",
              name: "임현묵",
              pos: "픽소 (FIXO)",
              desc: "치밀한 전략가",
              stats: [80, 80, 85, 85, 70, 100],
            },
            {
              img: "/jung.png",
              name: "정재훈",
              pos: "피보 (PIVO)",
              desc: "날쌘돌이 공격수",
              stats: [90, 85, 80, 80, 90, 85],
            },
            {
              img: "/dong.png",
              name: "윤동현",
              pos: "피보 (PIVO)",
              desc: "최강의 슛터",
              stats: [85, 100, 80, 80, 80, 85],
            },
            {
              img: "/sang.png",
              name: "윤상일",
              pos: "아라 (ALA)",
              desc: "군대 축구 최강자",
              stats: [85, 85, 80, 80, 90, 90],
            },
            {
              img: "/ho.png",
              name: "김현호",
              pos: "픽소 (FIXO)",
              desc: "부상 투혼",
              stats: [90, 80, 70, 60, 85, 90],
            },
            {
              img: "/kim.png",
              name: "김호섭",
              pos: "아라 (ALA)",
              desc: "럭키 가이",
              stats: [75, 70, 70, 80, 70, 80],
            },
          ].map((p) => (
            <div
              key={p.name}
              className="bg-white/90 rounded-3xl shadow-2xl border-2 border-blue-200 flex flex-col items-center p-7 w-full max-w-xs hover:scale-[1.04] hover:shadow-blue-400/50 hover:border-blue-400 transition-all duration-300 relative group before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-blue-200/30 before:to-blue-400/10 before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-300 overflow-hidden"
              style={{
                boxShadow:
                  "0 8px 32px 0 rgba(58,110,165,0.13), 0 2px 12px 0 rgba(58,110,165,0.10)",
                minWidth: 0,
              }}
            >
              <div className="w-40 h-40 relative mb-4">
                <Image
                  src={p.img}
                  alt={p.name + " 선수"}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl border-4 border-blue-400 shadow-lg group-hover:shadow-blue-400/70 transition-all duration-300 animate-float-img"
                />
                <div className="absolute -top-3 -right-3 bg-gradient-to-br from-blue-400 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg opacity-90 group-hover:scale-110 transition-all">
                  {p.pos}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-blue-700 mb-1 drop-shadow animate-fade-in">
                {p.name}
              </h2>
              <p className="text-blue-600 mb-2 text-sm animate-fade-in delay-100">
                {p.desc}
              </p>
              <RadarChart stats={p.stats} />
            </div>
          ))}
        </div>
      </section>
      {/* 스타일 추가 */}
      <style>
        {`
          .drop-shadow-xl {
            filter: drop-shadow(0 8px 24px rgba(58,110,165,0.18));
          }
          .animate-float {
            animation: float 3.5s ease-in-out infinite alternate;
          }
          .animate-float-img {
            animation: float-img 4s ease-in-out infinite alternate;
          }
          @keyframes float {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
          }
          @keyframes float-img {
            0% { transform: scale(1) translateY(0); }
            100% { transform: scale(1.04) translateY(-8px); }
          }
          .animate-gradient-text {
            background-size: 200% 200%;
            animation: gradient-move 4s ease-in-out infinite alternate;
          }
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animate-fade-in {
            opacity: 0;
            animation: fadeIn 1.2s ease forwards;
          }
          .animate-fade-in.delay-100 {
            animation-delay: 0.2s;
          }
          @keyframes fadeIn {
            to { opacity: 1; }
          }
          .animate-pulse-slow {
            animation: pulse 7s cubic-bezier(.4,0,.6,1) infinite;
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
