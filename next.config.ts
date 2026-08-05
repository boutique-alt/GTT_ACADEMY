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
      {
        source: "/courses/teacher-training-courses/pre-and-primary-teacher-training-with-practical-session.php",
        destination: "/courses/teacher-training-courses/pre-and-primary-teacher-training-with-practical-session",
        permanent: false,
      },
      {
        source: "/special-offer.php",
        destination: "/special-offer",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
