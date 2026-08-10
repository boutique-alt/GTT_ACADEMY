"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AboutCoursesSidebar from "@/components/about/AboutCoursesSidebar";
import CourseAccordion from "@/components/courses/CourseAccordion";
import CourseBulletList from "@/components/courses/CourseBulletList";
import CoursePageLayout from "@/components/courses/CoursePageLayout";
import CourseRightSidebar from "@/components/courses/CourseRightSidebar";
import ApplyNowLink from "@/components/ui/ApplyNowLink";
import { teacherCourseDetails } from "@/data/courses/course-sidebar";
import { tesol400Course } from "@/data/courses/tesol-400";
import { tesolFirstSidebarGroups } from "@/data/courses/tesol-sidebar";

export default function Tesol400CourseContent() {
  const course = tesol400Course;

  const accordionItems = [
    {
      title: "Focus Of The Training",
      content: (
        <div className="space-y-4">
          {course.focus.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ),
    },
    {
      title: "Eligibility",
      content: <p>{course.eligibility}</p>,
    },
    {
      title: "Who Can Join The Course?",
      content: (
        <div className="space-y-4">
          {course.whoCanJoin.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ),
    },
    {
      title: "Course Content",
      content: (
        <div className="space-y-6">
          {course.units.map((unit) => (
            <div key={unit.title}>
              <h4 className="font-bold text-[#0045bc]">{unit.title}</h4>
              {unit.subtitle ? (
                <p className="mt-2 font-semibold text-[#05245b]">{unit.subtitle}</p>
              ) : null}
              {unit.items?.length ? (
                <div className="mt-3">
                  <CourseBulletList items={unit.items} />
                </div>
              ) : null}
              {unit.modules?.map((mod) => (
                <div key={mod.title} className="mt-4">
                  <h5 className="font-serif text-base font-bold text-[#05245b]">{mod.title}</h5>
                  <div className="mt-2">
                    <CourseBulletList items={mod.items} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Mode Of Learning",
      content: (
        <div className="space-y-4">
          <h4 className="font-serif text-lg font-bold text-[#05245b]">{course.modeTitle}</h4>
          <p>{course.modeText}</p>
        </div>
      ),
    },
    {
      title: "Course Fee",
      content: <p>{course.fee}</p>,
    },
    {
      title: "Certification & Accreditation",
      content: (
        <div className="space-y-4">
          {course.certificationAccreditation.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ),
    },
    {
      title: "Importance Of Educational Certificate Apostille",
      content: (
        <div className="space-y-4">
          {course.apostilleImportance.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ),
    },
    {
      title: "Steps Involved In Document Apostille Process",
      content: (
        <div className="space-y-4">
          <CourseBulletList items={course.apostilleSteps} />
          {course.apostilleNote ? <p>{course.apostilleNote}</p> : null}
        </div>
      ),
    },
    {
      title: "Tutor Support",
      content: (
        <div className="space-y-4">
          {course.tutorSupport.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ),
    },
    {
      title: "Assessment",
      content: (
        <div className="space-y-4">
          {course.assessment.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className="no-view-reveal w-full min-w-0 overflow-x-clip bg-[#f5f8fc] py-16 sm:py-20">
      <CoursePageLayout
        left={<AboutCoursesSidebar groups={tesolFirstSidebarGroups} />}
        right={
          <CourseRightSidebar
            details={teacherCourseDetails.tesol400}
            defaultCourse="400 Hour TESOL Course Masters with Practical Teaching Session"
          />
        }
      >
        <div className="min-w-0 max-w-full rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm sm:p-8 lg:p-8">
          <h2 className="font-serif text-2xl font-bold text-[#05245b] sm:text-3xl lg:text-4xl">{course.title}</h2>

          <div className="relative mt-7 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 640px"
              priority
            />
          </div>

          <div className="mt-7 space-y-5 text-[15px] leading-7 break-words text-slate-600">
            {course.pageIntro.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 inline-flex max-w-full rounded-full bg-[#0045bc] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-900/20">
            {course.badge}
          </div>

          <CourseAccordion items={accordionItems} />

          <ApplyNowLink className="btn-brand-gradient mt-10 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-[0.04em]">
            Apply Now <ArrowRight size={18} />
          </ApplyNowLink>
        </div>
      </CoursePageLayout>
    </section>
  );
}
