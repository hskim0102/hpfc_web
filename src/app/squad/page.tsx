import Image from "next/image";

function RadarChart({ stats }: { stats: number[] }) {
  // stats: [패스, 슛, 수비, 체력, 스피드, 팀워크] (0~100)
  const centerX = 90;
  const centerY = 100;
  const radius = 80; // 육각형 반지름
  const labelRadius = 75; // 라벨 반지름
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
    <svg width={180} height={200} className="my-2">
      {/* 육각형 틀 */}
      <polygon
        points={angles
          .map((a) => `${centerX + radius * Math.cos(a)},${centerY + radius * Math.sin(a)}`)
          .join(" ")}
        fill="#b3d8ff33"
        stroke="#3a6ea5"
        strokeWidth={2}
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
        fill="#3a6ea5aa"
        stroke="#22577a"
        strokeWidth={2}
      />
      {/* 라벨 */}
      {[
        ["패스", centerX + labelRadius * Math.cos(angles[0]), centerY + labelRadius * Math.sin(angles[0]) - 5],
        ["슛", centerX + labelRadius * Math.cos(angles[1]), centerY + labelRadius * Math.sin(angles[1])],
        ["수비", centerX + labelRadius * Math.cos(angles[2]), centerY + labelRadius * Math.sin(angles[2]) + 5],
        ["체력", centerX + labelRadius * Math.cos(angles[3]), centerY + labelRadius * Math.sin(angles[3]) + 5],
        ["스피드", centerX + labelRadius * Math.cos(angles[4]), centerY + labelRadius * Math.sin(angles[4])],
        ["팀워크", centerX + labelRadius * Math.cos(angles[5]), centerY + labelRadius * Math.sin(angles[5]) - 5],
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
    <section className="flex flex-col items-center gap-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-[#3a6ea5]">선수단 소개</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-6xl">
        {/* 이한빈 선수 프로필 카드 */}
        <div className="bg-[#e3f0ff] rounded-2xl shadow-xl border-2 border-[#b3d8ff] flex flex-col items-center p-6 w-72">
          <div className="w-48 h-48 relative mb-4">
            <Image
              src="/lee.png"
              alt="이한빈 선수"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl border-4 border-[#3a6ea5] shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#3a6ea5] mb-1">이한빈</h2>
          <div className="text-lg font-semibold text-[#22577a] mb-2">
            AM (공격형 미드필더)
          </div>
          <p className="text-[#22577a] mb-2">
            풋살마스터, 팀의 중심을 잡아주는 플레이메이커
          </p>
          
          <RadarChart stats={[85, 80, 80, 80, 88, 92]} />
        </div>
        {/* 추가 선수 카드 예시 */}
        <div className="bg-[#e3f0ff] rounded-2xl shadow-xl border-2 border-[#b3d8ff] flex flex-col items-center p-6 w-72">
          <div className="w-48 h-48 relative mb-4">
            <Image
              src="/lee2.png"
              alt="이승재 구단주"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl border-4 border-[#3a6ea5] shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#3a6ea5] mb-1">이승재</h2>
          <div className="text-lg font-semibold text-[#22577a] mb-2">
            DM (수비형 미드필더)
          </div>
          <p className="text-[#22577a] mb-2">
            클럽 주장, 철통 방어가 장점
          </p>
          <RadarChart stats={[80, 75, 110, 75, 75, 85]} />
        </div>
        <div className="bg-[#e3f0ff] rounded-2xl shadow-xl border-2 border-[#b3d8ff] flex flex-col items-center p-6 w-72">
          <div className="w-48 h-48 relative mb-4">
            <Image
              src="/kang.png"
              alt="강췅원 선수"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl border-4 border-[#3a6ea5] shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#3a6ea5] mb-1">강충원</h2>
          <div className="text-lg font-semibold text-[#22577a] mb-2">
            GK (골키퍼)
          </div>
          <p className="text-[#22577a] mb-2">철벽 수문장</p>
          <RadarChart stats={[90, 95, 90, 85, 80, 80]} />
        </div>
        <div className="bg-[#e3f0ff] rounded-2xl shadow-xl border-2 border-[#b3d8ff] flex flex-col items-center p-6 w-72">
          <div className="w-48 h-48 relative mb-4">
            <Image
              src="/min.png"
              alt="이민용 선수"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl border-4 border-[#3a6ea5] shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#3a6ea5] mb-1">이민용</h2>
          <div className="text-lg font-semibold text-[#22577a] mb-2">
            CM (중앙 미드필더)
          </div>
          <p className="text-[#22577a] mb-2">폭풍같은 공격수</p>
          <RadarChart stats={[90, 85, 90, 90, 85, 90]} />
        </div>
        <div className="bg-[#e3f0ff] rounded-2xl shadow-xl border-2 border-[#b3d8ff] flex flex-col items-center p-6 w-72">
          <div className="w-48 h-48 relative mb-4">
            <Image
              src="/im.png"
              alt="임현묵 선수"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl border-4 border-[#3a6ea5] shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#3a6ea5] mb-1">임현묵</h2>
          <div className="text-lg font-semibold text-[#22577a] mb-2">
            CB (센터백)
          </div>
          <p className="text-[#22577a] mb-2">치밀한 전략가</p>
          <RadarChart stats={[80, 80, 85, 85, 70, 120]} />
        </div>
        <div className="bg-[#e3f0ff] rounded-2xl shadow-xl border-2 border-[#b3d8ff] flex flex-col items-center p-6 w-72">
          <div className="w-48 h-48 relative mb-4">
            <Image
              src="/jung.png"
              alt="정재훈 선수"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl border-4 border-[#3a6ea5] shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#3a6ea5] mb-1">정재훈</h2>
          <div className="text-lg font-semibold text-[#22577a] mb-2">
            ST (최전방 공격수)
          </div>
          <p className="text-[#22577a] mb-2">날쌘돌이 공격수</p>
          <RadarChart stats={[90, 85, 80, 80, 90, 85]} />
        </div>
        <div className="bg-[#e3f0ff] rounded-2xl shadow-xl border-2 border-[#b3d8ff] flex flex-col items-center p-6 w-72">
          <div className="w-48 h-48 relative mb-4">
            <Image
              src="/dong.png"
              alt="윤동현 선수"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl border-4 border-[#3a6ea5] shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#3a6ea5] mb-1">윤동현</h2>
          <div className="text-lg font-semibold text-[#22577a] mb-2">
            RW (윙어)
          </div>
          <p className="text-[#22577a] mb-2">최강의 슛터</p>
          <RadarChart stats={[85, 100, 80, 80, 80, 85]} />
        </div>
        <div className="bg-[#e3f0ff] rounded-2xl shadow-xl border-2 border-[#b3d8ff] flex flex-col items-center p-6 w-72">
          <div className="w-48 h-48 relative mb-4">
            <Image
              src="/sang.png"
              alt="윤상일 선수"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl border-4 border-[#3a6ea5] shadow-lg"
            />
          </div>
          <h2 className="text-2xl font-bold text-[#3a6ea5] mb-1">윤상일</h2>
          <div className="text-lg font-semibold text-[#22577a] mb-2">
            LW (윙어)
          </div>
          <p className="text-[#22577a] mb-2">군대 축구 최강자</p>
          <RadarChart stats={[85, 85, 80, 80, 90, 90]} />
        </div>
      </div>
    </section>
  );
}
