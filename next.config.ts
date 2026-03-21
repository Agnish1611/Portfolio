import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
<<<<<<< HEAD
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
=======
>>>>>>> e4aceb04d3095cd413b9419499f64c7d4e2d1fae
        ],
      },
    ];
  },
};

export default nextConfig;
