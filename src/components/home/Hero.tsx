"use client";

import { ArrowRight, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { applyNowHref } from "@/data/site";

const slides = [
  {
    image: "/images/hero-banner.png",
    heading: "Global Teacher Training Academy",
    text: "Say goodbye to the old monotonous and strictly conventional approach to the 'only theoretical' textbook studies.",
  },
  {
    image: "/images/hero-banner-2.png",
    heading: "Listen Up Teachers! Get TRAINED LOCAL to go GLOBAL!",
    text: "Join Our Teacher Training Program today! Get an Apostille Certificate which is accepted across all embassies and ministries of education and join the global teaching forum.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  const move = (direction: number) => setActive((current) => (current + direction + slides.length) % slides.length);

  return (
    <section className="relative isolate h-[min(70svh,620px)] min-h-[520px] w-full overflow-hidden bg-[#05245b] max-sm:h-auto max-sm:min-h-0 lg:h-[40vw] lg:min-h-[560px] lg:max-h-[640px]">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 bg-cover bg-[72%_center] bg-no-repeat transition-all duration-1000 max-sm:bg-[72%_30%] sm:bg-[center_22%] ${active === index ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031b46]/85 via-[#05245b]/72 to-[#031b46]/60 sm:bg-gradient-to-r sm:from-[#031b46]/95 sm:via-[#05245b]/75 sm:to-[#0045bc]/25" />
      <div className="absolute -right-24 top-20 size-80 rounded-full bg-[#30ad22]/20 blur-3xl max-sm:hidden" />
      <button
        onClick={() => move(-1)}
        aria-label="Previous hero slide"
        className="absolute left-2 top-1/2 z-20 hidden size-10 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-[#05245b]/45 text-white backdrop-blur transition hover:bg-white hover:text-[#0045bc] sm:left-6 sm:grid sm:size-13"
      >
        <ChevronLeft size={26} />
      </button>
      <button
        onClick={() => move(1)}
        aria-label="Next hero slide"
        className="absolute right-2 top-1/2 z-20 hidden size-10 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-[#05245b]/45 text-white backdrop-blur transition hover:bg-white hover:text-[#0045bc] sm:right-6 sm:grid sm:size-13"
      >
        <ChevronRight size={26} />
      </button>
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-4 py-8 max-sm:min-h-[68svh] sm:h-full sm:py-20 sm:pl-16 sm:pr-20 lg:pl-10 lg:pr-24 lg:pt-10 lg:pb-14">
        <div className="w-full max-w-3xl text-white lg:-ml-4 lg:-translate-y-4 xl:-ml-8">
          <div className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] backdrop-blur sm:mb-6 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.14em]">
            <Award size={15} className="shrink-0 text-[#ffbc09]" /> 16+ Years of Excellence in Teacher Training
          </div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ffbc09] sm:mb-4 sm:text-xs sm:tracking-[0.28em]">GTT Academy · We Educate</p>
          <h1 key={`heading-${active}`} className="animate-[heroIn_.7s_ease-out] font-display text-[1.65rem] font-semibold leading-[1.15] tracking-[-0.02em] max-sm:min-h-[5.4rem] sm:min-h-0 sm:text-5xl sm:leading-[1.05] lg:text-[4.5rem]">
            {slides[active].heading}
          </h1>
          <p key={`text-${active}`} className="mt-3 max-w-xl animate-[heroIn_.7s_.1s_ease-out_both] text-[13px] font-light leading-6 tracking-[0.01em] text-blue-50/95 max-sm:line-clamp-3 max-sm:min-h-[4.5rem] sm:mt-6 sm:min-h-0 sm:text-lg sm:leading-9 sm:line-clamp-none">
            {slides[active].text}
          </p>
          <div className="mt-5 flex flex-col gap-2.5 max-sm:pb-16 sm:mt-8 sm:flex-row sm:gap-3 sm:pb-0">
            <a href={applyNowHref} className="btn-brand-gradient inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-[0.04em] sm:px-7 sm:py-4">
              Apply Now <ArrowRight size={18} />
            </a>
            <a href="#courses" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold tracking-[0.04em] backdrop-blur transition hover:bg-white hover:text-[#0045bc] sm:px-7 sm:py-4">
              Explore Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
