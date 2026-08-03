"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/home/TestimonialCard";
import testimonials from "@/data/testimonials.json";

export default function Testimonials() {
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

  return (
    <section className="relative overflow-hidden bg-[url('/images/testimonial-bg.jpg')] bg-cover bg-center py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0045bc]/92 via-[#0045bc]/88 to-[#30ad22]/75" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={`${testimonials.length} Real Student Experiences`}
          title="Student's Testimonials"
          description="Read the original experiences shared by GTT Academy students from India and around the world."
          light
        />
      </div>
      <div className="relative overflow-x-hidden overflow-y-visible py-6 sm:py-8">
        <div className="flex w-max gap-6 animate-[testimonialMarquee_1260s_linear_infinite] px-3 hover:[animation-play-state:paused]">
          <div className="flex items-end gap-6 pb-1">{renderCards("primary")}</div>
          <div className="flex items-end gap-6 pb-1" aria-hidden="true">
            {renderCards("duplicate")}
          </div>
        </div>
      </div>
    </section>
  );
}
