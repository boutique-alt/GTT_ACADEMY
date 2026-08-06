"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ApplyNowLink from "@/components/ui/ApplyNowLink";
import CourseApplicationForm from "@/components/courses/CourseApplicationForm";
import CourseTestimonialsSlider from "@/components/courses/CourseTestimonialsSlider";
import { courseSidebarAssets, type CoursePageDetails } from "@/data/courses/course-sidebar";

type Props = {
  details: CoursePageDetails;
  defaultCourse?: string;
};

const detailRows: { key: keyof CoursePageDetails; label: string }[] = [
  { key: "eligibility", label: "Eligibility" },
  { key: "duration", label: "Duration" },
  { key: "fees", label: "Fees" },
  { key: "level", label: "Level" },
];

export default function CourseRightSidebar({ details, defaultCourse }: Props) {
  return (
    <aside className="w-full min-w-0 max-w-full space-y-5">
      <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
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

      <CourseApplicationForm defaultCourse={defaultCourse} />

      <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
        <div className="relative aspect-[4/3] w-full bg-slate-100">
          <Image
            src={courseSidebarAssets.certificateTranscript}
            alt="Certificate and Transcript"
            fill
            className="object-contain p-2"
            sizes="(max-width: 1024px) 100vw, 280px"
          />
        </div>
        <p className="border-t border-slate-100 px-3 py-2 text-center text-xs font-semibold text-[#05245b]">
          Certificate and Transcript
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
        <div className="relative aspect-[4/3] w-full bg-slate-100">
          <Image
            src={courseSidebarAssets.apostilleStamp}
            alt="Apostille Stamp"
            fill
            className="object-contain p-2"
            sizes="(max-width: 1024px) 100vw, 280px"
          />
        </div>
        <p className="border-t border-slate-100 px-3 py-2 text-center text-xs font-semibold text-[#05245b]">
          Apostille Stamp
        </p>
      </div>

      <CourseTestimonialsSlider />
    </aside>
  );
}
