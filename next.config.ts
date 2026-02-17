import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  headers: async () => [
    {
      source: "/((?!_next/static|_next/image|favicon.ico).*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=0, must-revalidate",
        },
      ],
    },
    {
      source: "/_next/static/:path*",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ],
};

export default nextConfig;
