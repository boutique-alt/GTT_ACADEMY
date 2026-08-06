"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { courseSidebarTestimonials } from "@/data/courses/course-sidebar";

const slides = courseSidebarTestimonials.filter((item) => item.image).slice(0, 24);

export default function CourseTestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    if (total < 2) return;
    const id = window.setInterval(() => setIndex((prev) => (prev + 1) % total), 6000);
    return () => window.clearInterval(id);
  }, [total]);

  if (total === 0) return null;

  const item = slides[index] ?? slides[0];

  return (
    <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
      <div className="bg-[#0045bc] px-4 py-3">
        <p className="text-sm font-bold text-white">Testimonials</p>
      </div>

      <div className="p-4">
        {item.image ? (
          <div className="relative mx-auto aspect-square w-28 overflow-hidden rounded-full bg-slate-100">
            <Image src={item.image} alt={item.name} fill className="object-cover" sizes="112px" />
          </div>
        ) : null}

        <p className="mt-3 text-center text-sm font-bold text-[#05245b]">{item.name}</p>
        <p className="mt-1 text-center text-xs font-semibold text-[#0045bc]">{item.course}</p>
        <p className="mt-3 text-center text-[13px] leading-6 text-slate-600">{item.text}</p>

        {total > 1 ? (
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => setIndex((prev) => (prev - 1 + total) % total)}
              className="grid size-8 place-items-center rounded-full bg-[#eef4ff] text-[#0045bc] transition hover:bg-[#0045bc] hover:text-white"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-xs font-semibold text-slate-500">
              {index + 1} / {total}
            </span>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => setIndex((prev) => (prev + 1) % total)}
              className="grid size-8 place-items-center rounded-full bg-[#eef4ff] text-[#0045bc] transition hover:bg-[#0045bc] hover:text-white"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
