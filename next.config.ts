import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // This disables ESLint during builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This disables TypeScript errors during builds
    ignoreBuildErrors: true,
  },
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
