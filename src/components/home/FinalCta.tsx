import { ArrowRight } from "lucide-react";
import { applyNowHref } from "@/data/site";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#30ad22] px-4 py-16 text-white">
      <div className="absolute -left-24 top-0 size-64 rounded-full border-[40px] border-white/10" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#05245b]">Take the next step</p>
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">The Future of Teaching and Learning Starts Here!</h2>
        </div>
        <a href={applyNowHref} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#05245b] px-7 py-4 font-bold shadow-xl transition hover:-translate-y-0.5 hover:bg-[#0045bc]">
          Apply Now <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
