import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "dlss5.net",
          },
        ],
        destination: "https://www.dlss5.net/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
