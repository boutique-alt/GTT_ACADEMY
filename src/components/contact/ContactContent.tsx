import { ArrowRight } from "lucide-react";
import AboutCoursesSidebar from "@/components/about/AboutCoursesSidebar";
import AboutStickyLayout from "@/components/about/AboutStickyLayout";
import ContactGetInTouch from "@/components/contact/ContactGetInTouch";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ApplyNowLink from "@/components/ui/ApplyNowLink";
export default function ContactContent() {
  return (
    <section className="no-view-reveal bg-[#f5f8fc] py-16 sm:py-20">
      <AboutStickyLayout sidebar={<AboutCoursesSidebar />}>
        <div className="space-y-10">
          <div className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <h2 className="font-serif text-3xl font-bold text-[#05245b] sm:text-4xl">Contact Information</h2>
            <div className="mt-8">
              <ContactInfoCards />
            </div>
          </div>

          <ContactGetInTouch />

          <ApplyNowLink className="btn-brand-gradient inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-[0.04em] sm:w-auto">
            Apply Now <ArrowRight size={18} />
            </ApplyNowLink>
        </div>
      </AboutStickyLayout>
    </section>
  );
}
