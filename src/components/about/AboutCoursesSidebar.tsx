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
    <aside className="space-y-5">
      {groups.map((group) => (
        <div key={group.title} className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
          <div className="bg-[#0045bc] px-4 py-3">
            <p className="text-sm font-bold text-white">{group.title}</p>
          </div>
          <ul className="divide-y divide-slate-100">
            {group.courses.map((course) => (
              <li key={course.href}>
                <a
                  href={course.href}
                  className="flex items-start gap-2 px-4 py-3 text-sm leading-5 text-slate-700 transition hover:bg-[#f0faf3] hover:text-[#0045bc]"
                >
                  <ChevronRight size={16} className="mt-0.5 shrink-0 text-[#30ad22]" />
                  <span>{course.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
