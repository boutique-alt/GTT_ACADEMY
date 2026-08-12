"use client";

import WufooEmbed from "@/components/forms/WufooEmbed";
import { wufooForms } from "@/data/wufoo";

type Props = {
  defaultCourse?: string;
};

export default function CourseApplicationForm(_props: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
      <WufooEmbed
        formHash={wufooForms.application.formHash}
        height={wufooForms.application.height}
        className="min-h-[320px] w-full p-1"
      />
    </div>
  );
}
