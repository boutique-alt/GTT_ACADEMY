"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/home/TestimonialCard";
import testimonials from "@/data/testimonials.json";

function canHover() {
  return typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;
}

export default function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<number | null>(null);

  const renderCards = (copy: string) =>
    testimonials.map((testimonial, index) => (
      <TestimonialCard
        key={`${copy}-${index}-${testimonial.name}`}
        name={testimonial.name}
        text={testimonial.text}
        image={testimonial.image}
        copy={copy}
      />
    ));

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || paused) return;

    const tick = () => {
      if (window.matchMedia("(min-width: 640px)").matches) return;
      const loopAt = el.scrollWidth / 2;
      if (el.scrollLeft >= loopAt) {
        el.scrollLeft -= loopAt;
      } else {
        el.scrollLeft += 0.6;
      }
    };

    const id = window.setInterval(tick, 16);
    return () => window.clearInterval(id);
  }, [paused]);

  function pauseForManualScroll() {
    if (canHover()) return;
    setPaused(true);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setPaused(false), 2200);
  }

  return (
    <section className="relative overflow-hidden bg-[url('/images/testimonial-bg.jpg')] bg-cover bg-center py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0045bc]/92 via-[#0045bc]/88 to-[#30ad22]/75" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Real Student Experiences"
          title="Student's Testimonials"
          description="Read the original experiences shared by GTT Academy students from India and around the world."
          light
        />
      </div>
      <div
        ref={scrollerRef}
        className="relative overflow-x-auto overflow-y-visible py-6 [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-x sm:overflow-x-hidden sm:py-8 [&::-webkit-scrollbar]:hidden"
        onTouchStart={pauseForManualScroll}
        onTouchMove={pauseForManualScroll}
        onWheel={pauseForManualScroll}
      >
        <div
          className={`flex w-max gap-6 px-3 max-sm:[animation:none] sm:animate-[testimonialMarquee_1260s_linear_infinite] sm:hover:[animation-play-state:paused] ${
            paused ? "sm:[animation-play-state:paused]" : ""
          }`}
        >
          <div className="flex items-end gap-6 pb-1">{renderCards("primary")}</div>
          <div className="flex items-end gap-6 pb-1" aria-hidden="true">
            {renderCards("duplicate")}
          </div>
        </div>
      </div>
    </section>
  );
}
