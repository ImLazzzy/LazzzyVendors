import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === "1";

let nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

if (!isVercel) {
  const path = require("path");
  const loaderPath = require.resolve("orchids-visual-edits/loader.js");
  nextConfig = {
    ...nextConfig,
    outputFileTracingRoot: path.resolve(__dirname, "../../"),
    turbopack: {
      rules: {
        "*.{jsx,tsx}": { loaders: [loaderPath] },
      },
    },
    allowedDevOrigins: ["*.orchids.page"],
  };
}

export default nextConfig;
