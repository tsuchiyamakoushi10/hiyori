// 対応エリアの模式図（北区中心）。実際の境界線ではなく位置関係を示すイメージ。
const regions = [
  { name: "上尾市", d: "M120 20 C175 8 245 14 262 40 C276 64 258 92 226 98 C190 104 150 102 122 92 C98 82 90 36 120 20Z", fill: "var(--sage-soft)", lx: 182, ly: 58 },
  { name: "伊奈町", d: "M268 44 C300 34 342 44 352 72 C360 98 336 124 304 126 C280 128 262 112 256 96 C270 82 278 64 268 44Z", fill: "var(--sage-soft)", lx: 310, ly: 86 },
  { name: "西区", d: "M40 118 C70 98 108 102 124 112 C138 130 136 176 128 206 C116 238 76 244 50 226 C28 208 22 146 40 118Z", fill: "var(--sun-soft)", lx: 80, ly: 172 },
  { name: "北区", d: "M128 108 C168 104 224 104 252 112 C268 128 270 160 258 182 C236 196 186 198 150 192 C136 170 134 136 128 108Z", fill: "var(--peach-soft)", lx: 196, ly: 134 },
  { name: "大宮区", d: "M150 198 C188 204 236 202 260 190 C276 208 276 244 256 262 C228 280 180 278 158 260 C140 244 140 218 150 198Z", fill: "var(--sun-soft)", lx: 206, ly: 236 },
];

export function AreaMap() {
  return (
    <figure className="rounded-[24px] bg-paper p-4 sm:p-6">
      <svg viewBox="0 0 380 290" role="img" aria-labelledby="area-map-title" className="h-auto w-full">
        <title id="area-map-title">対応エリアの位置関係：北区を中心に、西区・大宮区・上尾市・伊奈町</title>
        {regions.map((r) => (
          <g key={r.name}>
            <path d={r.d} fill={r.fill} stroke="var(--paper)" strokeWidth="3" />
            <text
              x={r.lx}
              y={r.ly}
              textAnchor="middle"
              fontSize="13"
              fill="var(--ink)"
              style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.1em" }}
            >
              {r.name}
            </text>
          </g>
        ))}
        {/* 事業所（北区） */}
        <g transform="translate(196 182)">
          <path d="M0 0c-7-8-11-13-11-18a11 11 0 0 1 22 0c0 5-4 10-11 18Z" fill="var(--peach)" />
          <circle cy="-18" r="4" fill="var(--paper)" />
        </g>
      </svg>
      <figcaption className="mt-2 text-right text-xs text-[#7f7268]">※位置関係を示したイメージです</figcaption>
    </figure>
  );
}
