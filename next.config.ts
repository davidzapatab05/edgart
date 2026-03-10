import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local images from public/ to be served without size restrictions
    localPatterns: [
      {
        pathname: "/images/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
