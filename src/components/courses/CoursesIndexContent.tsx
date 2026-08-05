import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import AboutCoursesSidebar from "@/components/about/AboutCoursesSidebar";
import AboutStickyLayout from "@/components/about/AboutStickyLayout";
import { courseGroups } from "@/data/site";

export default function CoursesIndexContent() {
  return (
    <section className="no-view-reveal w-full min-w-0 overflow-x-clip bg-[#f5f8fc] py-16 sm:py-20">
      <AboutStickyLayout sidebar={<AboutCoursesSidebar />} mobileContentFirst>
        <div className="min-w-0 max-w-full space-y-6">
          <div className="rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
            <h2 className="font-serif text-2xl font-bold text-[#05245b] sm:text-3xl lg:text-4xl">Our Courses</h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600">
              Choose from our extensive range of flexible teaching courses, created for aspiring and in-service teachers.
            </p>
          </div>

          {courseGroups.map((group) => (
            <div
              key={group.title}
              className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-sm"
            >
              <div className="bg-[#0045bc] px-5 py-4 sm:px-8">
                <h3 className="font-serif text-xl font-bold text-white sm:text-2xl">{group.title}</h3>
              </div>
              <ul className="divide-y divide-slate-100">
                {group.courses.map((course) => {
                  const external = course.href.startsWith("http");
                  const className =
                    "flex min-w-0 items-start justify-between gap-3 px-5 py-4 text-sm leading-6 text-slate-700 transition hover:bg-[#f0faf3] hover:text-[#0045bc] sm:px-8 sm:text-[15px]";
                  const body = (
                    <>
                      <span className="flex min-w-0 items-start gap-2">
                        <ChevronRight size={16} className="mt-1 shrink-0 text-[#30ad22]" />
                        <span className="min-w-0 flex-1 break-words">{course.title}</span>
                      </span>
                      <ArrowUpRight size={16} className="mt-1 shrink-0 text-[#0045bc]" />
                    </>
                  );
                  return (
                    <li key={`${group.title}-${course.href}`} className="min-w-0">
                      {external ? (
                        <a href={course.href} target="_blank" rel="noreferrer" className={className}>
                          {body}
                        </a>
                      ) : (
                        <Link href={course.href} className={className}>
                          {body}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </AboutStickyLayout>
    </section>
  );
}
