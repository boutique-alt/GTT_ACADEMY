"use client";

import WufooEmbed from "@/components/forms/WufooEmbed";
import { wufooForms } from "@/data/wufoo";

export default function HomeApplicationForm() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-100 bg-white shadow-lg shadow-blue-950/10">
      <WufooEmbed
        formHash={wufooForms.application.formHash}
        height={wufooForms.application.height}
        className="min-h-[320px] w-full p-1"
      />
    </div>
  );
}
