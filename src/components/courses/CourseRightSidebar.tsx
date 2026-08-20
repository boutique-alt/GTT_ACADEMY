"use client";

import Image from "next/image";
import CourseApplicationForm from "@/components/courses/CourseApplicationForm";
import CourseDetailsCard from "@/components/courses/CourseDetailsCard";
import CourseSampleCertificate from "@/components/courses/CourseSampleCertificate";
import CourseTestimonialsSlider from "@/components/courses/CourseTestimonialsSlider";
import { courseSidebarAssets, type CoursePageDetails } from "@/data/courses/course-sidebar";
import type { SampleCertificatePage } from "@/data/courses/sample-certificates";

type Props = {
  details: CoursePageDetails;
  defaultCourse?: string;
  sampleCertificates?: SampleCertificatePage[];
};

export default function CourseRightSidebar({ details, defaultCourse, sampleCertificates = [] }: Props) {
  return (
    <aside className="contents w-full min-w-0 max-w-full lg:block lg:space-y-5">
      <CourseDetailsCard details={details} className="order-1 w-full min-w-0 max-w-full" />

      <div className="order-3 w-full min-w-0 max-w-full space-y-5">
        <CourseApplicationForm defaultCourse={defaultCourse} />

        <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
          {sampleCertificates.length > 0 ? (
            <div className="bg-slate-50 p-2">
              <CourseSampleCertificate pages={sampleCertificates} />
            </div>
          ) : (
            <div className="relative aspect-[4/3] w-full bg-slate-100">
              <Image
                src={courseSidebarAssets.certificateTranscript}
                alt="Certificate and Transcript"
                fill
                className="object-contain p-2"
                sizes="(max-width: 1024px) 100vw, 280px"
              />
            </div>
          )}
          <p className="border-t border-slate-100 px-3 py-2 text-center text-xs font-semibold text-[#05245b]">
            Certificate and Transcript
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
          <div className="bg-slate-50 p-2">
            <Image
              src={courseSidebarAssets.apostilleStamp}
              alt="Sample Apostille Stamp"
              width={427}
              height={594}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 280px"
            />
          </div>
          <p className="border-t border-slate-100 px-3 py-2 text-center text-xs font-semibold text-[#05245b]">
            Apostille Stamp
          </p>
        </div>

        <CourseTestimonialsSlider />
      </div>
    </aside>
  );
}
