// 陽和用の線アイコン（ありがちな医療・介護アイコンは使わない：CLAUDE.md「やらないこと」）

const paths: Record<string, React.ReactNode> = {
  sun: (
    <>
      <circle cx="12" cy="13" r="4" />
      <path d="M12 4.5v2M5.5 7l1.4 1.4M18.5 7l-1.4 1.4M3.5 13h2M18.5 13h2" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14Z" />
      <path d="M5 19l8-8" />
    </>
  ),
  sprout: (
    <>
      <path d="M12 20v-8" />
      <path d="M12 12c0-3.5-2.5-6-6.5-6 0 3.5 2.5 6 6.5 6Z" />
      <path d="M12 14c0-3.5 2.5-6 6.5-6 0 3.5-2.5 6-6.5 6Z" />
      <path d="M8 20h8" />
    </>
  ),
  door: (
    <>
      <path d="M6 20V5.5A1.5 1.5 0 0 1 7.5 4h9A1.5 1.5 0 0 1 18 5.5V20" />
      <path d="M4 20h16" />
      <circle cx="14.5" cy="12.5" r=".6" fill="currentColor" />
    </>
  ),
  link: (
    <>
      <circle cx="8.5" cy="12" r="4.5" />
      <circle cx="15.5" cy="12" r="4.5" />
    </>
  ),
  houses: (
    <>
      <path d="M2.5 20h19" />
      <path d="M4 20v-7l4-3.5 4 3.5v7" />
      <path d="M12 20v-9.5l4-3.5 4 3.5V20" />
      <path d="M7 20v-3h2v3M15 20v-3h2v3" />
    </>
  ),
  moon: (
    <>
      <path d="M17.5 15.5A7 7 0 0 1 9 5.6a7 7 0 1 0 8.5 9.9Z" />
      <path d="M17 4.5v3M15.5 6h3" />
    </>
  ),
  drip: (
    <>
      <rect x="8" y="3" width="8" height="9" rx="2" />
      <path d="M12 12v3" />
      <path d="M12 15c-1.6 2.2-2.4 3.4-2.4 4.2a2.4 2.4 0 0 0 4.8 0c0-.8-.8-2-2.4-4.2Z" />
      <path d="M10 6.5h4" />
    </>
  ),
  home: (
    <>
      <path d="M4 11 12 4.5l8 6.5" />
      <path d="M6 9.5V20h12V9.5" />
      <path d="M12 13.5a2 2 0 0 1 2 2V20h-4v-4.5a2 2 0 0 1 2-2Z" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M6.5 20c0-3.4 2.5-6 5.5-6s5.5 2.6 5.5 6" />
      <path d="M10.6 5.2c.4-.9 1.2-1.4 2-1.2" />
    </>
  ),
  cloudSun: (
    <>
      <path d="M7.5 18h9a3.5 3.5 0 0 0 .4-7 4.5 4.5 0 0 0-8.6-1A4 4 0 0 0 7.5 18Z" />
      <path d="M16 4.5v1.5M19.5 6l-1 1M21 9.5h-1.5" />
    </>
  ),
  transfer: (
    <>
      <path d="M3 20h18" />
      <path d="M4.5 20V8h5v12" />
      <path d="M14.5 20v-5l2.5-2 2.5 2v5" />
      <path d="M10.5 11.5h4.5m-1.8-1.8 1.8 1.8-1.8 1.8" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8.5" r="2.8" />
      <circle cx="16.5" cy="10" r="2.2" />
      <path d="M3.8 19.5c0-3 2.3-5.4 5.2-5.4s5.2 2.4 5.2 5.4" />
      <path d="M14.8 14.6c.5-.2 1.1-.3 1.7-.3 2.4 0 4.2 2 4.2 4.6" />
    </>
  ),
  tel: (
    <path d="M6.6 3.8 9 3.4l1.6 4-1.9 1.3a10 10 0 0 0 6.6 6.6l1.3-1.9 4 1.6-.4 2.4a2 2 0 0 1-2.1 1.6C10.6 18.5 5.5 13.4 5 6a2 2 0 0 1 1.6-2.2Z" />
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  fax: (
    <>
      <path d="M7 9V4h8l2 2v3" />
      <rect x="4" y="9" width="16" height="8" rx="1.5" />
      <path d="M7 17v3h10v-3" />
      <path d="M16.5 12h.01" />
    </>
  ),
  shirt: (
    <path d="M8.5 4 4 6.5l1.8 4L8 9.6V20h8V9.6l2.2.9 1.8-4L15.5 4c-.6 1.4-2 2.3-3.5 2.3S9.1 5.4 8.5 4Z" />
  ),
  car: (
    <>
      <path d="M4 16v-3.5L6 8h12l2 4.5V16" />
      <path d="M3 16h18v2H3z" />
      <circle cx="7.5" cy="18.5" r="1.5" />
      <circle cx="16.5" cy="18.5" r="1.5" />
      <path d="M7 12h10" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="6" r="2" />
      <path d="M8 18h7a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h7" />
    </>
  ),
  tablet: (
    <>
      <rect x="5.5" y="3" width="13" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5C6.5 4.5 9.5 4.5 12 6c2.5-1.5 5.5-1.5 8-.5V19c-2.5-1-5.5-1-8 .5-2.5-1.5-5.5-1.5-8-.5Z" />
      <path d="M12 6v13.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
      <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  pin: (
    <>
      <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export function Icon({ name, className = "", strokeWidth = 1.4 }: { name: string; className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
