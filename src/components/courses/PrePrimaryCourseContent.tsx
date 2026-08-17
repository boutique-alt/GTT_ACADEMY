"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import AboutCoursesSidebar from "@/components/about/AboutCoursesSidebar";
import CourseAccordion from "@/components/courses/CourseAccordion";
import CourseBulletList from "@/components/courses/CourseBulletList";
import CoursePageLayout from "@/components/courses/CoursePageLayout";
import CourseRightSidebar from "@/components/courses/CourseRightSidebar";
import ApplyNowLink from "@/components/ui/ApplyNowLink";
import { teacherCourseDetails } from "@/data/courses/course-sidebar";
import { prePrimaryCourse } from "@/data/courses/pre-and-primary";
import { getCourseSampleCertificates } from "@/data/courses/sample-certificates";
import { courseDetailSidebarGroups } from "@/data/site";

export default function PrePrimaryCourseContent() {
  const { pageIntro, image, title, levels, shared } = prePrimaryCourse;
  const [activeId, setActiveId] = useState(levels[0].id);
  const level = levels.find((item) => item.id === activeId) ?? levels[0];

  const accordionItems = [
    {
      title: "Focus Of The Training",
      content: <CourseBulletList items={level.focus} />,
    },
    {
      title: "Eligibility",
      content: <p>{level.eligibility}</p>,
    },
    {
      title: "Who Can Do The Course?",
      content: <CourseBulletList items={level.whoCanJoin} />,
    },
    {
      title: "Course Content",
      content: (
        <div className="space-y-5">
          {level.phases.map((phase) => (
            <div key={phase.title}>
              <h4 className="font-bold text-[#0045bc]">{phase.title}</h4>
              <div className="mt-3">
                <CourseBulletList items={phase.items} />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Mode Of Learning",
      content: (
        <div className="space-y-4">
          <p>{level.modeIntro}</p>
          <h4 className="font-serif text-lg font-bold text-[#05245b]">{level.online.title}</h4>
          <p>{level.online.text}</p>
          <CourseBulletList items={level.online.items} />
          <h4 className="font-serif text-lg font-bold text-[#05245b]">{level.distance.title}</h4>
          <p>{level.distance.text}</p>
          <CourseBulletList items={level.distance.items} />
        </div>
      ),
    },
    {
      title: "Course Fee",
      content: <p>{level.fee}</p>,
    },
    {
      title: "Accreditation",
      content: (
        <div className="space-y-4">
          {shared.accreditation.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ),
    },
    {
      title: "Certification",
      content: (
        <div className="space-y-4">
          {shared.certification.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ),
    },
    {
      title: "Importance Of Educational Certificate Apostille",
      content: (
        <div className="space-y-4">
          {shared.apostilleImportance.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ),
    },
    {
      title: "Steps Involved In Document Apostille Process",
      content: <CourseBulletList items={shared.apostilleSteps} />,
    },
    {
      title: "Tutor Support",
      content: (
        <div className="space-y-4">
          {shared.tutorSupport.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ),
    },
    {
      title: "Assessment",
      content: (
        <div className="space-y-4">
          {shared.assessment.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className="no-view-reveal w-full min-w-0 overflow-x-clip bg-[#f5f8fc] py-16 sm:py-20">
      <CoursePageLayout
        left={<AboutCoursesSidebar groups={courseDetailSidebarGroups} />}
        right={
          <CourseRightSidebar
            details={teacherCourseDetails.prePrimary}
            defaultCourse="Pre and Primary Teacher Training with Practical Session"
            sampleCertificates={getCourseSampleCertificates("pre-primary", activeId)}
          />
        }
      >
        <div className="min-w-0 max-w-full rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm sm:p-8 lg:p-8">
          <h2 className="font-serif text-2xl font-bold text-[#05245b] sm:text-3xl lg:text-4xl">{title}</h2>

          <div className="relative mt-7 w-full overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={image}
              alt={title}
              width={800}
              height={1070}
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 640px"
              priority
            />
          </div>

          <div className="mt-7 space-y-5 text-[15px] leading-7 break-words text-slate-600">
            {pageIntro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2 border-b border-slate-200 pb-1">
            {levels.map((item) => {
              const active = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    active
                      ? "bg-[#0045bc] text-white shadow-md shadow-blue-900/20"
                      : "bg-slate-100 text-[#05245b] hover:bg-slate-200"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-6 space-y-5 text-[15px] leading-7 break-words text-slate-600">
            {level.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <CourseAccordion key={activeId} items={accordionItems} />

          <ApplyNowLink className="btn-brand-gradient mt-10 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-[0.04em]">
            Apply Now <ArrowRight size={18} />
          </ApplyNowLink>
        </div>
      </CoursePageLayout>
    </section>
  );
}
