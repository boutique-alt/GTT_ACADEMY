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
import { getCourseSampleCertificates } from "@/data/courses/sample-certificates";
import { classroomManagementCourse } from "@/data/courses/classroom-management";
import { specializedFirstSidebarGroups } from "@/data/courses/tesol-sidebar";

export default function ClassroomManagementCourseContent() {
  const course = classroomManagementCourse;

  const accordionItems = [
    {
      title: "Focus Of The Training",
      content: <CourseBulletList items={course.focus} />,
    },
    {
      title: "Eligibility",
      content: <p>{course.eligibility}</p>,
    },
    {
      title: "Who Can Join The Course?",
      content: <CourseBulletList items={course.whoCanJoin} />,
    },
    {
      title: "Course Content",
      content: (
        <div className="space-y-5">
          {course.phases.map((phase) => (
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
          <p>{course.modeIntro}</p>
          <h4 className="font-serif text-lg font-bold text-[#05245b]">{course.online.title}</h4>
          <p>{course.online.text}</p>
          <CourseBulletList items={course.online.items} />
        </div>
      ),
    },
    {
      title: "Course Fee",
      content: <p>{course.fee}</p>,
    },
    {
      title: "Accreditation",
      content: (
        <div className="space-y-4">
          {course.shared.accreditation.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ),
    },
    {
      title: "Certification",
      content: (
        <div className="space-y-4">
          {course.shared.certification.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ),
    },
    {
      title: "Importance Of Educational Certificate Apostille",
      content: (
        <div className="space-y-4">
          {course.shared.apostilleImportance.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ),
    },
    {
      title: "Steps Involved In Document Apostille Process",
      content: (
        <div className="space-y-4">
          <CourseBulletList items={course.shared.apostilleSteps} />
          {course.shared.apostilleNote ? <p>{course.shared.apostilleNote}</p> : null}
        </div>
      ),
    },
    {
      title: "Tutor Support",
      content: (
        <div className="space-y-4">
          {course.shared.tutorSupport.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ),
    },
    {
      title: "Assessment",
      content: (
        <div className="space-y-4">
          {course.shared.assessment.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className="no-view-reveal w-full min-w-0 overflow-x-clip bg-[#f5f8fc] py-16 sm:py-20">
      <CoursePageLayout
        left={<AboutCoursesSidebar groups={specializedFirstSidebarGroups} />}
        right={
          <CourseRightSidebar
            details={teacherCourseDetails.classroomManagement}
            defaultCourse="Classroom Management Skill"
            sampleCertificates={getCourseSampleCertificates("classroom-management")}
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

          <div className="mt-8 inline-flex rounded-full bg-[#0045bc] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-900/20">
            Diploma
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
