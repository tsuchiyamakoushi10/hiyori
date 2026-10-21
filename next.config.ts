import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 写真は WebP に圧縮済みで届いているため、再圧縮すると画質が落ちる。そのまま配信する。
    unoptimized: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
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
