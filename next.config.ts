import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Herb cards are about 760px wide, so larger variants only add download
    // time. Keep sizes for 1x and 2x screens up to that width.
    deviceSizes: [384, 640, 750, 828, 1080],
    imageSizes: [128, 256, 320],
  },
};

export default nextConfig;
