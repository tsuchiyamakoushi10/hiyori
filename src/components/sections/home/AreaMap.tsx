// 対応エリアの地図（北が上）。実際の位置関係をもとに手描き風に起こしたもの。境界は正確ではない。

type Region = { name: string; d: string; fill: string; lx: number; ly: number; served: boolean };

const regions: Region[] = [
  {
    name: "上尾市",
    d: "M40 70 L95 48 L150 40 L205 30 L250 44 L262 80 L255 120 L270 160 L250 200 L215 228 L180 236 L150 226 L120 236 L80 222 L58 190 L42 150 L30 110 Z",
    fill: "var(--sage-soft)",
    lx: 118,
    ly: 128,
    served: true,
  },
  {
    name: "伊奈町",
    d: "M262 80 L300 50 L345 42 L380 70 L392 110 L380 150 L350 180 L318 196 L288 210 L270 160 L255 120 Z",
    fill: "var(--sage-soft)",
    lx: 330,
    ly: 120,
    served: true,
  },
  {
    name: "西区",
    d: "M30 230 L58 190 L80 222 L120 236 L150 226 L170 272 L182 310 L200 342 L195 380 L160 410 L110 418 L70 400 L40 370 L22 320 L18 270 Z",
    fill: "var(--sun-soft)",
    lx: 102,
    ly: 320,
    served: true,
  },
  {
    name: "北区",
    d: "M150 226 L180 236 L215 228 L250 200 L288 210 L300 245 L292 285 L300 320 L268 340 L232 350 L200 342 L182 310 L170 272 Z",
    fill: "var(--peach-soft)",
    lx: 262,
    ly: 258,
    served: true,
  },
  {
    name: "大宮区",
    d: "M200 342 L232 350 L268 340 L300 320 L318 352 L310 392 L280 418 L240 420 L212 405 L195 380 Z",
    fill: "var(--sun-soft)",
    lx: 306,
    ly: 404,
    served: true,
  },
  // 位置関係がわかるように、まわりの地域も薄く描く（対応エリア外）
  {
    name: "見沼区",
    d: "M288 210 L318 196 L350 180 L395 200 L420 250 L415 310 L390 350 L318 352 L300 320 L292 285 L300 245 Z",
    fill: "transparent",
    lx: 362,
    ly: 278,
    served: false,
  },
];

// 線路（大宮→宮原→上尾）と駅
const railway = "M292 440 L262 382 L230 290 L173 175 L146 104 L128 30";
const stations = [
  { name: "大宮", x: 262, y: 382, dx: -12, anchor: "end" as const },
  { name: "宮原", x: 230, y: 290, dx: -12, anchor: "end" as const },
  { name: "上尾", x: 173, y: 175, dx: 12, anchor: "start" as const },
];
const office = { x: 246, y: 304 };

const serif = { fontFamily: "var(--font-serif)" };

export function AreaMap() {
  return (
    <figure className="rounded-[24px] bg-paper p-4 sm:p-6">
      <svg viewBox="0 0 440 440" role="img" aria-labelledby="area-map-title" className="h-auto w-full">
        <title id="area-map-title">
          対応エリアの地図：さいたま市北区を中心に、西区・大宮区・上尾市・伊奈町。事業所は北区（宮原駅の近く）
        </title>
        <defs>
          {/* 線をわずかに揺らして手描き風にする */}
          <filter id="hand" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" />
            <feDisplacementMap in="SourceGraphic" scale="4" />
          </filter>
          <radialGradient id="glow">
            <stop offset="0%" stopColor="var(--sun)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--sun)" stopOpacity="0" />
          </radialGradient>
          <clipPath id="frame">
            <rect width="440" height="440" rx="18" />
          </clipPath>
        </defs>

        <g clipPath="url(#frame)">
          {/* 荒川 */}
          <path
            d="M10 0 C24 90 4 170 16 250 S34 380 70 440"
            fill="none"
            stroke="var(--teal)"
            strokeOpacity="0.35"
            strokeWidth="9"
            strokeLinecap="round"
            filter="url(#hand)"
          />

          <g filter="url(#hand)">
            {regions.map((r) => (
              <path
                key={r.name}
                d={r.d}
                fill={r.fill}
                stroke="var(--brown)"
                strokeOpacity={r.served ? 0.55 : 0.3}
                strokeWidth="1.2"
                strokeDasharray={r.served ? undefined : "3 4"}
                strokeLinejoin="round"
              />
            ))}
          </g>

          {/* 事業所のまわりの光 */}
          <circle cx={office.x} cy={office.y} r="70" fill="url(#glow)" />

          {/* 線路：茶色の線に白い切れ目 */}
          <path d={railway} fill="none" stroke="var(--brown)" strokeOpacity="0.7" strokeWidth="3.2" strokeLinejoin="round" />
          <path d={railway} fill="none" stroke="var(--paper)" strokeWidth="1.6" strokeDasharray="7 7" strokeLinejoin="round" />
          {stations.map((s) => (
            <g key={s.name}>
              <circle cx={s.x} cy={s.y} r="4.5" fill="var(--paper)" stroke="var(--brown)" strokeWidth="1.4" />
              <text x={s.x + s.dx} y={s.y + 4} textAnchor={s.anchor} fontSize="11" fill="var(--brown)" style={{ letterSpacing: "0.08em" }}>
                {s.name}
              </text>
            </g>
          ))}

          {/* 地域名 */}
          {regions.map((r) => (
            <text
              key={r.name}
              x={r.lx}
              y={r.ly}
              textAnchor="middle"
              fontSize={r.served ? 16 : 13}
              fill={r.served ? "var(--ink)" : "var(--muted)"}
              style={{ ...serif, letterSpacing: "0.14em" }}
            >
              {r.name}
            </text>
          ))}
          <text x="56" y="350" fontSize="10.5" fill="#6f8f8d" style={{ letterSpacing: "0.3em", writingMode: "vertical-rl" }}>
            荒川
          </text>

          {/* 事業所：ロゴの太陽 */}
          <g transform={`translate(${office.x} ${office.y})`}>
            {Array.from({ length: 8 }, (_, i) => {
              const a = (i * Math.PI) / 4;
              return (
                <line
                  key={i}
                  x1={(Math.cos(a) * 11).toFixed(2)}
                  y1={(Math.sin(a) * 11).toFixed(2)}
                  x2={(Math.cos(a) * 16).toFixed(2)}
                  y2={(Math.sin(a) * 16).toFixed(2)}
                  stroke="#e0a54f"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              );
            })}
            <circle r="7.5" fill="var(--sun)" stroke="#e0a54f" strokeWidth="1" />
            <g transform="translate(22 -6)">
              <rect width="44" height="22" rx="11" fill="var(--brown)" />
              <text x="22" y="15" textAnchor="middle" fontSize="12" fill="#fff" style={{ ...serif, letterSpacing: "0.12em" }}>
                陽和
              </text>
            </g>
          </g>

          {/* 方位 */}
          <g transform="translate(410 30)" fill="var(--brown)">
            <path d="M0 -14 L5 4 L0 0 L-5 4 Z" />
            <text y="18" textAnchor="middle" fontSize="10" style={{ fontFamily: "var(--font-en)", fontStyle: "italic" }}>
              N
            </text>
          </g>
        </g>
      </svg>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs text-[#7f7268]">
        <span className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true" className="inline-block size-2.5 rounded-full bg-sun" />
            事業所
          </span>
          <span className="flex items-center gap-1.5">
            <span aria-hidden="true" className="inline-block h-[3px] w-4 rounded bg-brown/70" />
            JR線
          </span>
        </span>
        <span>※位置関係を示したイメージです</span>
      </figcaption>
    </figure>
  );
}
