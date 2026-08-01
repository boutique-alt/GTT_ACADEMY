import Image from "next/image";
import { ArrowUpRight, Crown, Flame } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { courses } from "@/data/site";

export default function Courses() {
  return (
    <section id="courses" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Learn. Grow. Lead."
          title="Our Featured Courses"
          description="Choose from our extensive range of flexible teaching courses, created for aspiring and in-service teachers."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <article key={course.title} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-900/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                <Image src={course.image} alt={course.title} fill className="object-contain transition duration-500 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05245b]/45 to-transparent" />
                <span
                  className={`absolute left-3 top-3 inline-flex items-center gap-1.5 overflow-hidden rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.08em] shadow-lg ${
                    course.badge.includes("premium")
                      ? "bg-[#ffbc09] text-[#05245b]"
                      : "bg-[#30ad22] text-white"
                  }`}
                >
                  <span className="absolute inset-y-0 -left-8 w-6 rotate-12 bg-white/45 blur-sm animate-[badgeShine_3.5s_ease-in-out_infinite]" />
                  {course.badge.includes("premium") ? (
                    <Crown size={13} strokeWidth={2.4} />
                  ) : (
                    <Flame size={13} strokeWidth={2.4} />
                  )}
                  {course.badge.includes("premium") ? "Premium Course" : "Popular Course"}
                </span>
              </div>
              <div className="p-6">
                <h3 className="min-h-14 font-serif text-xl font-bold leading-7 text-[#05245b]">{course.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{course.description}</p>
                <a href={course.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#0045bc] transition group-hover:text-[#30ad22]">
                  Read More <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
