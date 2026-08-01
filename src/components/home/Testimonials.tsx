"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { alumniHref } from "@/data/site";
import testimonials from "@/data/testimonials.json";

export default function Testimonials() {
  const renderCards = (copy: string) =>
    testimonials.map((testimonial, index) => (
      <article
        key={`${copy}-${index}-${testimonial.name}`}
        className="group/card w-[285px] shrink-0 overflow-hidden rounded-3xl border border-white/15 bg-white shadow-2xl shadow-blue-950/25 sm:w-[330px]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#f3f7fc]">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            sizes="330px"
            className="object-contain transition duration-500 group-hover/card:scale-[1.03]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-[#0045bc]/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur">
            Student Experience
          </span>
        </div>
        <div className="p-6">
          <Quote className="mb-3 text-[#ffbc09]" fill="currentColor" size={27} />
          <p className="line-clamp-5 min-h-[120px] text-sm leading-6 text-slate-600">
            &ldquo;{testimonial.text}&rdquo;
          </p>
          <div className="mt-5 border-t border-slate-200 pt-4">
            <p className="font-serif text-lg font-bold leading-6 text-[#05245b]">{testimonial.name}</p>
            <a href={alumniHref} className="mt-2 inline-block text-sm font-bold text-[#0045bc] transition hover:text-[#30ad22]">
              Read More
            </a>
          </div>
        </div>
      </article>
    ));

  return (
    <section className="relative overflow-hidden bg-[url('/images/testimonial-bg.jpg')] bg-cover bg-center py-24">
      <div className="absolute inset-0 bg-[#0045bc]/90" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={`${testimonials.length} Real Student Experiences`}
          title="Student's Testimonials"
          description="Read the original experiences shared by GTT Academy students from India and around the world."
          light
        />
      </div>
      <div className="relative overflow-hidden">
        <div className="flex w-max gap-6 animate-[testimonialMarquee_1260s_linear_infinite] px-3 hover:[animation-play-state:paused]">
          <div className="flex gap-6">{renderCards("primary")}</div>
          <div className="flex gap-6" aria-hidden="true">{renderCards("duplicate")}</div>
        </div>
      </div>
    </section>
  );
}
