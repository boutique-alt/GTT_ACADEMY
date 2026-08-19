import { Award, Headphones, Phone } from "lucide-react";
import AboutCoursesSidebar from "@/components/about/AboutCoursesSidebar";
import AboutStickyLayout from "@/components/about/AboutStickyLayout";
import WufooEmbed from "@/components/forms/WufooEmbed";
import { wufooForms } from "@/data/wufoo";

export default function ApplyNowContent() {
  return (
    <section className="no-view-reveal w-full min-w-0 overflow-x-clip bg-[#f5f8fc] py-16 sm:py-20">
      <AboutStickyLayout sidebar={<AboutCoursesSidebar />} mobileContentFirst showMobileApply={false}>
        <div className="min-w-0 max-w-full overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-sm">
          <div className="bg-gradient-to-br from-[#eef4ff] via-white to-[#f0faf3] px-6 pb-2 pt-8 sm:px-10 sm:pt-10">
            <p className="text-center text-xs font-extrabold uppercase tracking-[0.22em] text-[#30ad22]">
              Start your journey
            </p>
            <h2 className="mt-2 text-center font-serif text-3xl font-bold text-[#05245b] sm:text-4xl">Apply Now</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-slate-600">
              Fill out my online form. Our team will process your application and get back to you soon.
            </p>
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-brand-gradient" />

            <div className="mx-auto mt-7 mb-2 grid max-w-lg grid-cols-3 gap-3">
              {[
                { icon: Award, label: "Apostille Certificate" },
                { icon: Phone, label: "24hr Callback" },
                { icon: Headphones, label: "Expert Support" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/80 bg-white/70 px-2 py-3 text-center shadow-sm backdrop-blur"
                >
                  <span className="mx-auto mb-2 grid size-9 place-items-center rounded-full bg-[#0045bc]/10 text-[#0045bc]">
                    <Icon size={16} />
                  </span>
                  <p className="text-[11px] font-semibold leading-4 text-[#05245b] sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 pb-8 pt-2 sm:px-8 sm:pb-10 lg:px-10">
            <WufooEmbed
              formHash={wufooForms.application.formHash}
              height={wufooForms.application.height}
              className="min-h-[400px] w-full"
            />
          </div>
        </div>
      </AboutStickyLayout>
    </section>
  );
}
