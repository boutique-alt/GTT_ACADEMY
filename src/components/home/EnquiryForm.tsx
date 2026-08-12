"use client";

import Image from "next/image";
import { Headphones, Mail, Phone } from "lucide-react";
import WufooEmbed from "@/components/forms/WufooEmbed";
import { wufooForms } from "@/data/wufoo";

export default function EnquiryForm() {
  return (
    <section id="enquiry" className="bg-brand-gradient-soft py-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-blue-950/10 lg:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-[320px] overflow-hidden bg-white lg:min-h-full">
          <Image
            src="/images/brochure.jpg"
            alt="GTT Academy course counselling"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <div className="grid min-w-0 content-start gap-4 p-6 sm:gap-5 sm:p-8 lg:p-9">
          <div>
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#30ad22]">Start Your Journey</p>
            <h2 className="font-serif text-2xl font-bold leading-tight text-[#05245b] sm:text-3xl">
              Get free course counselling today.
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Tell us what you want to achieve. Our counsellor will help you choose the right course.
            </p>
          </div>

          <WufooEmbed
            formHash={wufooForms.counselling.formHash}
            height={wufooForms.counselling.height}
            className="min-h-[280px] w-full"
          />

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-600">
            <a href="tel:18001203481" className="inline-flex items-center gap-1.5 transition hover:text-[#0045bc]">
              <Phone size={14} className="text-[#30ad22]" /> 18001203481
            </a>
            <a href="tel:9674923512" className="inline-flex items-center gap-1.5 transition hover:text-[#0045bc]">
              <Headphones size={14} className="text-[#30ad22]" /> 9674923512
            </a>
            <a href="mailto:enquiry@globalteachersacademy.com" className="inline-flex items-center gap-1.5 transition hover:text-[#0045bc]">
              <Mail size={14} className="text-[#30ad22]" /> Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
