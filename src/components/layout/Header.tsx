"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import ApplyNowLink from "@/components/ui/ApplyNowLink";
import SocialMediaLinks from "@/components/ui/SocialMediaLinks";
import { courseDetailSidebarGroups, navLinks } from "@/data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-brand-gradient text-white">
        <div className="mx-auto flex min-h-11 max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2.5 text-sm sm:px-6 sm:text-[15px] lg:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a className="flex items-center gap-1.5 hover:text-[#ffbc09]" href="tel:18001203481">
              <Phone size={15} /> India toll free: 18001203481
            </a>
            <a className="hidden items-center gap-1.5 hover:text-[#ffbc09] sm:flex" href="mailto:enquiry@globalteachersacademy.com">
              <Mail size={15} /> enquiry@globalteachersacademy.com
            </a>
            <a className="flex items-center gap-1.5 hover:text-[#ffbc09]" href="tel:9674923512" aria-label="Call 9674923512">
              <Phone size={15} /> 9674923512
            </a>
          </div>
          <SocialMediaLinks
            className="flex items-center gap-1.5"
            iconClassName="grid size-7 place-items-center rounded-full bg-white/15 text-white transition hover:bg-[#ffbc09] hover:text-[#05245b]"
            size={13}
          />
        </div>
      </div>

      <nav className="border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="GTT Academy home">
            <Image src="/images/logo.png" alt="GTT Academy" width={178} height={62} priority className="h-auto w-[152px] sm:w-[178px]" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.slice(0, 2).map((item) => (
              <a key={item.label} href={item.href} className="rounded-lg px-3 py-7 text-sm font-semibold text-slate-700 transition hover:text-[#0045bc]">
                {item.label}
              </a>
            ))}
            <div className="group">
              <button className="flex items-center gap-1 rounded-lg px-3 py-7 text-sm font-semibold text-slate-700 transition group-hover:text-[#0045bc]">
                Courses <ChevronDown size={15} />
              </button>
              <div className="invisible absolute left-1/2 top-full w-[min(1200px,96vw)] -translate-x-1/2 translate-y-2 rounded-b-2xl border-t-2 border-[#ffbc09] bg-white p-7 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid grid-cols-3 gap-8">
                  {courseDetailSidebarGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="mb-3 border-b border-slate-100 pb-3 font-bold text-[#0045bc]">{group.title}</h3>
                      <ul className="space-y-2.5">
                        {group.courses.map((course) => {
                          const external = course.href.startsWith("http");
                          return (
                            <li key={`${group.title}-${course.title}`}>
                              <a
                                href={course.href}
                                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                                className="text-sm leading-5 text-slate-600 transition hover:text-[#30ad22]"
                              >
                                {course.title}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {navLinks.slice(2).map((item) => (
              <a key={item.label} href={item.href} className="rounded-lg px-3 py-7 text-sm font-semibold text-slate-700 transition hover:text-[#0045bc]">
                {item.label}
              </a>
            ))}
            <ApplyNowLink className="btn-brand-gradient ml-3 rounded-full px-5 py-3 text-sm font-bold">Apply Now</ApplyNowLink>
          </div>

          <button className="rounded-lg p-2 text-[#0045bc] lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="max-h-[calc(100vh-118px)] overflow-y-auto border-t bg-white px-4 py-4 lg:hidden">
            {navLinks.slice(0, 2).map((item) => (
              <a onClick={() => setMenuOpen(false)} key={item.label} href={item.href} className="block border-b border-slate-100 py-3 font-semibold text-slate-700">
                {item.label}
              </a>
            ))}
            <button onClick={() => setCoursesOpen(!coursesOpen)} className="flex w-full items-center justify-between border-b border-slate-100 py-3 font-semibold text-slate-700">
              Courses <ChevronDown className={coursesOpen ? "rotate-180" : ""} size={16} />
            </button>
            {coursesOpen && (
              <div className="space-y-5 bg-slate-50 p-4">
                {courseDetailSidebarGroups.map((group) => (
                  <div key={group.title}>
                    <p className="mb-2 text-sm font-bold text-[#0045bc]">{group.title}</p>
                    {group.courses.map((course) => {
                      const external = course.href.startsWith("http");
                      return (
                        <a
                          key={`${group.title}-${course.title}`}
                          href={course.href}
                          onClick={() => setMenuOpen(false)}
                          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                          className="block py-1.5 text-xs text-slate-600"
                        >
                          {course.title}
                        </a>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}
            {navLinks.slice(2).map((item) => (
              <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="block border-b border-slate-100 py-3 font-semibold text-slate-700">
                {item.label}
              </a>
            ))}
            <a href="tel:9674923512" className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-semibold text-slate-700">
              <Phone size={15} className="text-[#0045bc]" /> 9674923512
            </a>
            <SocialMediaLinks
              className="mt-4 flex items-center gap-2"
              iconClassName="grid size-9 place-items-center rounded-full bg-[#05245b] text-white transition hover:bg-[#30ad22]"
              size={15}
            />
            <ApplyNowLink onClick={() => setMenuOpen(false)} className="btn-brand-gradient mt-4 block rounded-full px-5 py-3 text-center font-bold">
              Apply Now
            </ApplyNowLink>
          </div>
        )}
      </nav>
    </header>
  );
}
