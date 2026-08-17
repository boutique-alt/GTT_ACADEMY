import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
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
      {
        source: "/thank-you.php",
        destination: "/thank-you",
        permanent: false,
      },
      {
        source: "/download-brochure.php",
        destination: "/thank-you",
        permanent: false,
      },
      {
        source: "/tutor-support-assessment.php",
        destination: "/tutor-support-assessment",
        permanent: false,
      },
      {
        source: "/Job-opportunities-placement-support.php",
        destination: "/job-opportunities-placement-support",
        permanent: false,
      },
      {
        source: "/franchise-opportunity.php",
        destination: "/franchise-opportunity",
        permanent: false,
      },
      {
        source: "/privacy-policy.php",
        destination: "/privacy-policy",
        permanent: false,
      },
      {
        source: "/terms-conditions.php",
        destination: "/terms-and-conditions",
        permanent: false,
      },
      {
        source: "/refund.php",
        destination: "/refund-policy",
        permanent: false,
      },
      {
        source: "/blog.php",
        destination: "/blog",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
