import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Activa el modo estricto de React
  async rewrites() {
    return [
      {
        source: '/api/:path*', 
        destination: 'http://192.168.0.28:8080/api/:path*',
      },
    ];
  },
};

export default nextConfig;
