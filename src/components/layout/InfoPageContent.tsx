import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import AboutCoursesSidebar from "@/components/about/AboutCoursesSidebar";
import AboutStickyLayout from "@/components/about/AboutStickyLayout";
import ApplyNowLink from "@/components/ui/ApplyNowLink";

type InfoPageContentProps = {
  title: string;
  children: ReactNode;
  showApply?: boolean;
};

export default function InfoPageContent({ title, children, showApply = true }: InfoPageContentProps) {
  return (
    <section className="no-view-reveal bg-[#f5f8fc] py-16 sm:py-20">
      <AboutStickyLayout sidebar={<AboutCoursesSidebar />}>
        <div className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <h2 className="font-serif text-3xl font-bold text-[#05245b] sm:text-4xl">{title}</h2>
          <div className="mt-7 space-y-5 text-[15px] leading-7 text-slate-600">{children}</div>
          {showApply ? (
            <ApplyNowLink className="btn-brand-gradient mt-10 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-[0.04em]">
              Apply Now <ArrowRight size={18} />
            </ApplyNowLink>
          ) : null}
        </div>
      </AboutStickyLayout>
    </section>
  );
}
