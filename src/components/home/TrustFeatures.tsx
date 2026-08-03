import Image from "next/image";

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
    <section className="relative z-10 -mt-4 px-4 pb-20 sm:-mt-12 sm:px-6">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-white shadow-2xl shadow-blue-950/10 md:grid-cols-3">
        {features.map(({ icon, title, text, href }, index) => (
          <article key={title} className={`group p-8 transition hover:bg-[#f7fbff] ${index < 2 ? "border-b border-slate-100 md:border-b-0 md:border-r" : ""}`}>
            <div className="mb-5 grid size-16 place-items-center rounded-xl bg-[#0045bc]/10 p-2">
              <Image src={icon} alt="" width={60} height={60} className="size-full object-contain" />
            </div>
            <h2 className="mb-3 font-serif text-xl font-bold text-[#05245b]">{title}</h2>
            <p className="text-sm leading-6 text-slate-600">{text}</p>
            <a href={href} className="mt-5 inline-block text-sm font-bold text-[#30ad22]">Read More →</a>
          </article>
        ))}
      </div>
    </section>
  );
}
