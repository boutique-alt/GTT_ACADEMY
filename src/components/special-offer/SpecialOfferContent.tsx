import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AboutCoursesSidebar from "@/components/about/AboutCoursesSidebar";
import AboutStickyLayout from "@/components/about/AboutStickyLayout";
import ApplyNowLink from "@/components/ui/ApplyNowLink";
import { courseGroups } from "@/data/site";

function PromoImage({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 ${className}`}>
      <Image
        src="/images/special-offer-promo.jpg"
        alt="GTT Academy Independence Day Special Offer"
        width={819}
        height={1024}
        className="h-auto w-full object-contain"
        priority
      />
    </div>
  );
}

export default function SpecialOfferContent() {
  return (
    <section className="no-view-reveal w-full min-w-0 overflow-x-clip bg-[#f5f8fc] py-10 sm:py-16 lg:py-20">
      <div className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:hidden">
        <div className="rounded-[1.5rem] border border-slate-100 bg-white p-4 shadow-sm sm:p-5">
          <h2 className="mb-4 text-center font-serif text-2xl font-bold text-[#05245b]">
            Independence Day Offer
          </h2>
          <PromoImage />
        </div>
      </div>

      <AboutStickyLayout sidebar={<AboutCoursesSidebar groups={courseGroups} />} mobileContentFirst>
        <div className="min-w-0 max-w-full rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <h2 className="hidden font-serif text-2xl font-bold text-[#05245b] lg:block lg:text-4xl">
            Independence Day Offer
          </h2>

          <div className="space-y-5 text-[15px] leading-7 break-words text-slate-600 lg:mt-7">
            <p className="text-lg font-semibold text-[#05245b] sm:text-xl">
              This Independence Day, Let Education Be Our Freedom.
            </p>

            <p>
              <strong className="text-[#05245b]">Special Independence Day Offer</strong>
              <br />
              Avail special discounts across our courses and take the next step towards becoming a confident,
              future-ready teacher.
            </p>

            <p>
              <ApplyNowLink className="inline-flex font-bold text-[#0045bc] underline-offset-2 transition hover:text-[#30ad22] hover:underline">
                Apply now!!
              </ApplyNowLink>
            </p>

            <PromoImage className="hidden lg:block" />
          </div>

          <div className="mt-8 flex justify-center">
            <ApplyNowLink className="btn-brand-gradient inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-[0.04em]">
              Apply Now <ArrowRight size={18} />
            </ApplyNowLink>
          </div>
        </div>
      </AboutStickyLayout>
    </section>
  );
}
