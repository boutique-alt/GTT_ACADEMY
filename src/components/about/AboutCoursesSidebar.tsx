import { ChevronRight } from "lucide-react";
import { courseGroups } from "@/data/site";

const sidebarOrder = [
  "Teacher Training Courses",
  "TEFL/TESOL Online Courses",
  "Specialized Courses",
] as const;

export default function AboutCoursesSidebar() {
  const groups = sidebarOrder
    .map((title) => courseGroups.find((group) => group.title === title))
    .filter((group): group is (typeof courseGroups)[number] => Boolean(group));

  return (
    <aside className="w-full min-w-0 max-w-full space-y-5">
      {groups.map((group) => (
        <div key={group.title} className="w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="bg-[#0045bc] px-3 py-3 sm:px-4">
            <p className="text-sm font-bold break-words text-white">{group.title}</p>
          </div>
          <ul className="divide-y divide-slate-100">
            {group.courses.map((course) => (
              <li key={course.href} className="min-w-0">
                <a
                  href={course.href}
                  className="flex min-w-0 items-start gap-2 px-3 py-3 text-sm leading-5 text-slate-700 transition hover:bg-[#f0faf3] hover:text-[#0045bc] sm:px-4"
                >
                  <ChevronRight size={16} className="mt-0.5 shrink-0 text-[#30ad22]" />
                  <span className="min-w-0 flex-1 break-words whitespace-normal">{course.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
