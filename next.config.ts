import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add an explicit (empty) turbopack config so Next 16+ won't error
  // when a custom webpack config is present. Turbopack can be
  // configured here later if desired.
  turbopack: {},
  webpack: (config) => {
    if (process.env.NODE_ENV === "development") {
      config.module.rules.push({
        test: /\.(jsx|tsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: "@dyad-sh/nextjs-webpack-component-tagger",
      });
    }
    return config;
  },
};

export default nextConfig;
