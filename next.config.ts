import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maoa.xiamusicoa.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;