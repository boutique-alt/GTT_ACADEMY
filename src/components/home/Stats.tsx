import Image from "next/image";

const stats = [
  { value: "25,000+", label: "Students", icon: "/images/stats/students.png" },
  { value: "35", label: "Courses", icon: "/images/stats/courses.png" },
  { value: "20,000+", label: "Certified Teachers", icon: "/images/stats/teachers.png" },
  { value: "", label: "Apostille stamp from MEA — Approved across all embassies worldwide", icon: "/images/stats/authentic.png" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[url('/images/counter-bg.jpg')] bg-cover bg-center py-16 text-white">
      <div className="absolute inset-0 bg-[#0045bc]/80" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map(({ value, label, icon }, index) => (
          <div key={label} className={`text-center ${index ? "lg:border-l lg:border-white/20" : ""}`}>
            <Image
              src={icon}
              alt=""
              width={100}
              height={100}
              style={{ animationDelay: `${index * 220}ms` }}
              className="mx-auto mb-4 size-14 animate-[iconFloat_3.4s_ease-in-out_infinite] object-contain"
            />
            {value && <p className="font-serif text-3xl font-bold sm:text-4xl">{value}</p>}
            <p className="mt-2 text-sm text-blue-100">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
