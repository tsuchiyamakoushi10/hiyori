// ロゴの太陽を線だけにしたもの（4-4-2）
export function SunRays({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 9 }, (_, i) => -160 + i * 17.5);
  return (
    <svg viewBox="0 0 200 200" fill="none" aria-hidden="true" className={className}>
      <circle cx="100" cy="112" r="30" stroke="var(--sun)" strokeWidth="1.2" />
      {rays.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 100 + Math.cos(rad) * 44;
        const y1 = 112 + Math.sin(rad) * 44;
        const x2 = 100 + Math.cos(rad) * 70;
        const y2 = 112 + Math.sin(rad) * 70;
        return (
          <line
            key={deg}
            x1={x1.toFixed(2)}
            y1={y1.toFixed(2)}
            x2={x2.toFixed(2)}
            y2={y2.toFixed(2)}
            stroke="var(--sun)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
