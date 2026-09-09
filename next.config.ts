import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin Turbopack to this app instead of inferring a parent workspace.
    root: process.cwd(),
  },
};

export default nextConfig;
