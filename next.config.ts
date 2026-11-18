import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Pictures are resized at build time by scripts/build-image-copies.mjs, so
    // pages never depend on Vercel's image service or its usage allowance.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    // Keep these in step with the widths in src/lib/image-copies.mjs.
    deviceSizes: [384, 640, 828, 1080, 1920],
    imageSizes: [128, 256],
  },
  async headers() {
    return [
      {
        source: "/image-copies/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
};

export default nextConfig;
