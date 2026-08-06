import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { courseDetailSidebarGroups, courseGroups } from "@/data/site";

type CourseGroup = (typeof courseGroups)[number];

type Props = {
  groups?: CourseGroup[];
};

export default function AboutCoursesSidebar({ groups }: Props) {
  // Default matches live course detail pages (no English Proficiency).
  const resolvedGroups = groups ?? courseDetailSidebarGroups;

  return (
    <aside className="w-full min-w-0 max-w-full space-y-5">
      {resolvedGroups.map((group) => (
        <div key={group.title} className="w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="bg-[#0045bc] px-3 py-3 sm:px-4">
            <p className="text-sm font-bold break-words text-white">{group.title}</p>
          </div>
          <ul className="divide-y divide-slate-100">
            {group.courses.map((course) => {
              const external = course.href.startsWith("http");
              const className =
                "flex min-w-0 items-start gap-2 px-3 py-3 text-sm leading-5 text-slate-700 transition hover:bg-[#f0faf3] hover:text-[#0045bc] sm:px-4";
              const children = (
                <>
                  <ChevronRight size={16} className="mt-0.5 shrink-0 text-[#30ad22]" />
                  <span className="min-w-0 flex-1 break-words whitespace-normal">{course.title}</span>
                </>
              );
              return (
                <li key={`${group.title}-${course.href}`} className="min-w-0">
                  {external ? (
                    <a href={course.href} target="_blank" rel="noreferrer" className={className}>
                      {children}
                    </a>
                  ) : (
                    <Link href={course.href} className={className}>
                      {children}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}
