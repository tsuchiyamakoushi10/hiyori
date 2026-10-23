import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 写真は WebP に圧縮済みで届いているため、再圧縮すると画質が落ちる。そのまま配信する。
    unoptimized: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
          // ほかのサイトに枠で埋め込ませない（なりすまし・クリック誘導の対策）
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'; object-src 'none'; base-uri 'self'; form-action 'self'" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // 名刺のQRコード用。印刷物に載るので、このパスは消さない。行き先はここで変えられる
      { source: "/card", destination: "/?utm_source=card&utm_medium=qr", permanent: false },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
