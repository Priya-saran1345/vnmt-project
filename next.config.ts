import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '134.209.154.193',
        port: '8081',
        pathname: '/**',
      },
    ],
    
  },
};

export default nextConfig;
