import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AboutCoursesSidebar from "@/components/about/AboutCoursesSidebar";
import AboutStickyLayout from "@/components/about/AboutStickyLayout";
import ApplyNowLink from "@/components/ui/ApplyNowLink";
import { coursesCatalogGroups } from "@/data/courses/courses-catalog";
import { courseDetailSidebarGroups } from "@/data/site";

export default function CoursesIndexContent() {
  return (
    <section className="no-view-reveal relative w-full min-w-0 overflow-x-clip bg-[#f5f8fc] py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "url(/images/accreditations-hero.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative">
        <AboutStickyLayout sidebar={<AboutCoursesSidebar groups={courseDetailSidebarGroups} />} mobileContentFirst>
          <div className="min-w-0 max-w-full space-y-8">
            {coursesCatalogGroups.map((group) => (
              <div key={group.title} className="space-y-5">
                <div className="rounded-xl bg-[#0045bc] px-5 py-3.5 sm:px-6">
                  <h2 className="font-serif text-xl font-bold text-white sm:text-2xl">{group.title}</h2>
                </div>

                {group.courses.map((course) => {
                  const external = course.href.startsWith("http");
                  return (
                    <article
                      key={`${group.title}-${course.href}`}
                      className="rounded-[1.25rem] border border-slate-100 bg-white/95 p-5 shadow-sm backdrop-blur sm:p-7"
                    >
                      <h3 className="font-serif text-xl font-bold leading-snug text-[#30ad22] sm:text-2xl lg:text-[1.65rem]">
                        {course.title}
                      </h3>

                      <p className="mt-4 text-sm font-bold uppercase tracking-[0.08em] text-[#0045bc]">Course Fees</p>
                      <ul className="mt-2 space-y-1.5">
                        {course.feeLines.map((fee) => (
                          <li key={fee} className="flex items-start gap-2 text-[15px] leading-6 text-slate-700">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#0045bc]" />
                            <span>{fee}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-3">
                        {external ? (
                          <a
                            href={course.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-md bg-[#0045bc] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#05245b]"
                          >
                            View Details <ArrowRight size={16} />
                          </a>
                        ) : (
                          <Link
                            href={course.href}
                            className="inline-flex items-center gap-2 rounded-md bg-[#0045bc] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#05245b]"
                          >
                            View Details <ArrowRight size={16} />
                          </Link>
                        )}
                        <ApplyNowLink className="inline-flex items-center gap-2 rounded-md bg-[#0045bc] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#05245b]">
                          Apply Now <ArrowRight size={16} />
                        </ApplyNowLink>
                      </div>
                    </article>
                  );
                })}
              </div>
            ))}
          </div>
        </AboutStickyLayout>
      </div>
    </section>
  );
}
