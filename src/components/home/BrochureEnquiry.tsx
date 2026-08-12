"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import WufooEmbed from "@/components/forms/WufooEmbed";
import { wufooForms } from "@/data/wufoo";

const BROCHURE_HREF = "/images/home-brochure.png";
const BROCHURE_FILENAME = "GTT-Academy-Brochure.png";

export default function BrochureEnquiry() {
  return (
    <section className="bg-brand-gradient py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-8 px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
        <div className="order-2 min-w-0 overflow-hidden rounded-3xl bg-white p-6 shadow-2xl sm:p-8 lg:order-1 lg:p-9">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#30ad22]">Get a Free Brochure</p>
          <h2 className="font-serif text-3xl font-bold text-[#05245b]">Fill out my online form</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Share your details and our team will guide you with the right teacher training course brochure.
          </p>
          <div className="mt-6">
            <WufooEmbed
              formHash={wufooForms.brochure.formHash}
              height={wufooForms.brochure.height}
              className="min-h-[260px] w-full"
            />
          </div>
        </div>

        <div className="order-1 flex flex-col overflow-hidden rounded-3xl bg-white p-3 shadow-2xl lg:order-2">
          <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
            <Image
              src={BROCHURE_HREF}
              alt="GTT Academy original brochure"
              width={900}
              height={700}
              className="h-auto w-full object-contain"
              priority={false}
            />
          </div>
          <div className="flex flex-col items-center gap-2 px-3 py-4 sm:flex-row sm:justify-between sm:px-4">
            <p className="text-center text-sm font-semibold text-[#05245b] sm:text-left">Original GTT Academy Brochure</p>
            <a
              href={BROCHURE_HREF}
              download={BROCHURE_FILENAME}
              className="btn-brand-gradient inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold"
            >
              <Download size={16} /> Download Brochure
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
