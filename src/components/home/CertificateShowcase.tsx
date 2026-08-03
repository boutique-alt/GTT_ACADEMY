"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CertificateCard from "@/components/home/CertificateCard";

const cards = [
  {
    src: "/images/certificate-transcript.jpg",
    alt: "GTT Academy certificate and transcript",
    title: "Certificate and Transcript",
  },
  {
    src: "/images/apostille-stamp.jpg",
    alt: "Apostille Stamp from MEA",
    title: "Apostille Stamp",
  },
];

export default function CertificateShowcase() {
  const [active, setActive] = useState(0);
  const total = cards.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [total]);

  const goNext = () => setActive((current) => (current + 1) % total);

  return (
    <section className="relative w-full overflow-hidden bg-brand-gradient-soft py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Globally Recognised"
          title="Certificate, Transcript & Apostille Stamp"
          description="Credentials designed to support your teaching career across boards, schools, embassies and ministries worldwide."
        />
      </div>

      <div className="relative mx-auto h-[360px] w-full max-w-6xl sm:h-[420px] md:h-[500px] lg:h-[560px]">
        {cards.map((card, index) => (
          <CertificateCard
            key={card.src}
            src={card.src}
            alt={card.alt}
            title={card.title}
            active={index === active}
          />
        ))}

        <button
          type="button"
          onClick={goNext}
          className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#05245b] shadow-lg ring-1 ring-slate-200/80 transition hover:bg-[#0045bc] hover:text-white md:right-6"
          aria-label="Next certificate"
        >
          <ChevronRight size={22} />
        </button>

        <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-4">
          {cards.map((card, index) => (
            <button
              key={card.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show ${card.title}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === active ? "w-7 bg-brand-gradient" : "w-2 bg-[#05245b]/25 hover:bg-[#05245b]/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
