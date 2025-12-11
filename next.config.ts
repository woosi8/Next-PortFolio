import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
devIndicators: {
    buildActivity: false, 
  },
  env: {
    VAPID_PRIVATE_KEY: process.env.VAPID_PRIVATE_KEY,
  },
  /* config options here */

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
