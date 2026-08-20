import { ArrowRight } from "lucide-react";
import ApplyNowLink from "@/components/ui/ApplyNowLink";
import type { CoursePageDetails } from "@/data/courses/course-sidebar";

const detailRows: { key: keyof CoursePageDetails; label: string }[] = [
  { key: "level", label: "Level" },
  { key: "eligibility", label: "Eligibility" },
  { key: "duration", label: "Duration" },
  { key: "fees", label: "Fees" },
];

type Props = {
  details: CoursePageDetails;
  className?: string;
};

export default function CourseDetailsCard({ details, className = "" }: Props) {
  return (
    <div className={`overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm ${className}`}>
      <div className="bg-[#0045bc] px-4 py-3">
        <p className="text-sm font-bold text-white">Course Details</p>
      </div>
      <dl className="divide-y divide-slate-100">
        {detailRows.map(({ key, label }) => (
          <div key={key} className="grid grid-cols-[88px_1fr] gap-2 px-4 py-3 sm:grid-cols-[100px_1fr]">
            <dt className="text-xs font-bold uppercase tracking-wide text-[#0045bc]">{label}</dt>
            <dd className="text-sm leading-5 text-slate-700">{details[key]}</dd>
          </div>
        ))}
      </dl>
      <div className="border-t border-slate-100 p-4">
        <ApplyNowLink className="btn-brand-gradient inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.04em]">
          Apply Now <ArrowRight size={16} />
        </ApplyNowLink>
      </div>
    </div>
  );
}
