import TrustFeatureCard from "@/components/home/TrustFeatureCard";
import TrustFeaturesMobile from "@/components/home/TrustFeaturesMobile";

const LIVE = "https://www.globalteachersacademy.com";

const features = [
  {
    icon: "/images/certificate.png",
    title: "Importance of Teacher Training",
    text: "Learn and create new teaching strategies that increase students' interest and make classroom education more effective.",
    href: `${LIVE}/courses/teacher-training-courses/pre-and-primary-teacher-training-with-practical-session.php`,
  },
  {
    icon: "/images/certificate-detail.jpg",
    title: "Why Choose Us?",
    text: "More than 16 years in teacher training and 20,000+ certified teachers working successfully across the globe.",
    href: "/about",
  },
  {
    icon: "/images/apostille.jpg",
    title: "Apostille Certification from MEA",
    text: "Receive an Apostille Certificate after course completion, eliminating the need for added embassy certification.",
    href: "/about",
  },
];

export default function TrustFeatures() {
  return (
    <section className="relative z-10 -mt-4 px-4 pb-10 sm:-mt-12 sm:px-6 sm:pb-12">
      <div className="mx-auto max-w-7xl">
        <TrustFeaturesMobile features={features} />

        <div className="hidden overflow-hidden rounded-2xl bg-white shadow-2xl shadow-blue-950/10 md:flex md:flex-row">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-1 transition-[flex] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] has-[:hover]:flex-[1.45] ${
                index < 2 ? "md:border-r md:border-slate-100" : ""
              }`}
            >
              <TrustFeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
