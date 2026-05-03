import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@ldk-alfath/shared'],
  allowedDevOrigins: ['192.168.100.219'],
};

export default nextConfig;
