import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/apply-now.php",
        destination: "/apply-now",
        permanent: false,
      },
      {
        source: "/Apply-Now.php",
        destination: "/apply-now",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
