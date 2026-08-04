import { ArrowRight, Gift } from "lucide-react";
import AboutCoursesSidebar from "@/components/about/AboutCoursesSidebar";
import AboutStickyLayout from "@/components/about/AboutStickyLayout";
import ApplyNowLink from "@/components/ui/ApplyNowLink";

export default function SpecialOfferContent() {
  return (
    <section className="no-view-reveal w-full min-w-0 overflow-x-clip bg-[#f5f8fc] py-16 sm:py-20">
      <AboutStickyLayout sidebar={<AboutCoursesSidebar />}>
        <div className="min-w-0 max-w-full overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-sm">
          <div className="bg-gradient-to-br from-[#eef4ff] via-white to-[#f0faf3] px-6 py-8 sm:px-10 sm:py-10">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#ffbc09]/15 text-[#ffbc09]">
              <Gift size={28} />
            </div>
            <p className="mt-5 text-center text-xs font-extrabold uppercase tracking-[0.22em] text-[#30ad22]">
              Limited time opportunity
            </p>
            <h2 className="mt-2 text-center font-serif text-3xl font-bold text-[#05245b] sm:text-4xl">
              GTT Teacher Training Courses
            </h2>
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-brand-gradient" />
            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              Your classroom is changing — fast. AI tools, digital platforms, and new learner expectations. If your
              teaching hasn&apos;t caught up yet, this is the perfect time to start. GTT Academy&apos;s Teacher Training
              courses are built for exactly this moment.
            </p>
            <div className="mt-8 flex justify-center">
              <ApplyNowLink className="btn-brand-gradient inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold tracking-[0.04em] text-white">
                Apply Now <ArrowRight size={18} />
              </ApplyNowLink>
            </div>
          </div>

          <div className="border-t border-slate-100 px-6 py-8 sm:px-10 sm:py-10">
            <h3 className="text-center font-serif text-2xl font-bold text-[#05245b] sm:text-3xl">
              The Future of Teaching and Learning Starts Here!
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-center leading-7 text-slate-600">
              Join thousands of teachers who upskilled with GTT Academy. Get globally recognised credentials, practical
              classroom methods, and career-ready support — online, distance, or in-class.
            </p>
            <div className="mt-7 flex justify-center">
              <ApplyNowLink className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0045bc] px-8 py-3.5 text-sm font-semibold tracking-[0.04em] text-[#0045bc] transition hover:bg-[#0045bc] hover:text-white">
                Apply Now <ArrowRight size={18} />
              </ApplyNowLink>
            </div>
          </div>
        </div>
      </AboutStickyLayout>
    </section>
  );
}
