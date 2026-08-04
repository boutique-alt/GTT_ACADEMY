"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import AboutCoursesSidebar from "@/components/about/AboutCoursesSidebar";
import AboutStickyLayout from "@/components/about/AboutStickyLayout";
import ApplyNowLink from "@/components/ui/ApplyNowLink";
import { prePrimaryCourse } from "@/data/courses/pre-and-primary";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-8 font-serif text-xl font-bold text-[#05245b] sm:text-2xl">{children}</h3>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex min-w-0 items-start gap-3 text-sm leading-6 text-slate-700">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#30ad22] text-white">
            <Check size={13} />
          </span>
          <span className="min-w-0 flex-1 break-words">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrePrimaryCourseContent() {
  const { pageIntro, image, title, levels, shared } = prePrimaryCourse;
  const [activeId, setActiveId] = useState(levels[0].id);
  const level = levels.find((item) => item.id === activeId) ?? levels[0];

  return (
    <section className="no-view-reveal w-full min-w-0 overflow-x-clip bg-[#f5f8fc] py-16 sm:py-20">
      <AboutStickyLayout sidebar={<AboutCoursesSidebar />}>
        <div className="min-w-0 max-w-full rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <h2 className="font-serif text-2xl font-bold text-[#05245b] sm:text-3xl lg:text-4xl">{title}</h2>

          <div className="relative mt-7 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100">
            <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 720px" priority />
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

            <SectionTitle>Focus of the Training</SectionTitle>
            <BulletList items={level.focus} />

            <SectionTitle>Eligibility</SectionTitle>
            <p>{level.eligibility}</p>

            <SectionTitle>Who can join the course?</SectionTitle>
            <BulletList items={level.whoCanJoin} />

            <SectionTitle>Course content</SectionTitle>
            <div className="space-y-5">
              {level.phases.map((phase) => (
                <div key={phase.title}>
                  <h4 className="font-bold text-[#0045bc]">{phase.title}</h4>
                  <BulletList items={phase.items} />
                </div>
              ))}
            </div>

            <SectionTitle>Mode of Learning</SectionTitle>
            <p>{level.modeIntro}</p>

            <h4 className="mt-6 font-serif text-lg font-bold text-[#05245b]">{level.online.title}</h4>
            <p>{level.online.text}</p>
            <BulletList items={level.online.items} />

            <h4 className="mt-6 font-serif text-lg font-bold text-[#05245b]">{level.distance.title}</h4>
            <p>{level.distance.text}</p>
            <BulletList items={level.distance.items} />

            <SectionTitle>Course fee</SectionTitle>
            <p>{level.fee}</p>

            <SectionTitle>Accreditation</SectionTitle>
            {shared.accreditation.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}

            <SectionTitle>Certification</SectionTitle>
            {shared.certification.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}

            <SectionTitle>Importance of Educational Certificate Apostille</SectionTitle>
            {shared.apostilleImportance.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}

            <SectionTitle>Steps involved in Document Apostille Process</SectionTitle>
            <BulletList items={shared.apostilleSteps} />

            <SectionTitle>Tutor Support</SectionTitle>
            {shared.tutorSupport.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}

            <SectionTitle>Assessment</SectionTitle>
            {shared.assessment.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <ApplyNowLink className="btn-brand-gradient mt-10 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-[0.04em]">
            Apply Now <ArrowRight size={18} />
          </ApplyNowLink>
        </div>
      </AboutStickyLayout>
    </section>
  );
}
