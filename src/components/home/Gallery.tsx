"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryItem from "@/components/home/GalleryItem";

const images = [
  { src: "/images/gallery/gallery-1.jpg", alt: "GTT Academy Certification" },
  { src: "/images/gallery/gallery-2.jpg", alt: "GTT Academy Certification" },
  { src: "/images/gallery/gallery-3.jpg", alt: "GTT Academy Certification" },
  { src: "/images/gallery/gallery-4.jpg", alt: "PG Diploma Montessori Teacher Training" },
  { src: "/images/gallery/gallery-5.jpg", alt: "Gallery image" },
  { src: "/images/gallery/gallery-6.jpg", alt: "Gallery image" },
  { src: "/images/gallery/gallery-7.jpg", alt: "Gallery image" },
  { src: "/images/gallery/gallery-8.jpg", alt: "Gallery image" },
  { src: "/images/gallery/gallery-9.jpg", alt: "Gallery image" },
  { src: "/images/gallery/gallery-10.jpg", alt: "Gallery image" },
  { src: "/images/gallery/gallery-11.jpg", alt: "Gallery image" },
  { src: "/images/gallery/gallery-12.jpg", alt: "Gallery image" },
];

function getOffset(index: number, active: number, total: number) {
  let offset = index - active;
  const half = Math.floor(total / 2);
  if (offset < -half) offset += total;
  if (offset > half) offset -= total;
  return offset;
}

function canHover() {
  return typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;
}

export default function Gallery() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const didSwipe = useRef(false);
  const resumeTimer = useRef<number | null>(null);
  const total = images.length;

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, 2000);
    return () => window.clearInterval(timer);
  }, [paused, total]);

  function pauseBriefly() {
    setPaused(true);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setPaused(false), 2800);
  }

  function goTo(index: number) {
    setActive(((index % total) + total) % total);
    pauseBriefly();
  }

  return (
    <section className="relative w-full overflow-hidden bg-brand-gradient-soft py-16 md:py-24">
      <div className="mx-auto w-full px-4 md:max-w-none md:px-12 lg:px-24">
        <SectionHeading eyebrow="GTT Academy" title="Our Gallery" />

        <div
          className="relative mx-auto flex h-[400px] w-full max-w-5xl items-center justify-center touch-pan-y md:h-[550px] md:max-w-none lg:h-[650px]"
          onMouseEnter={() => {
            if (canHover()) setPaused(true);
          }}
          onMouseLeave={() => {
            if (canHover()) setPaused(false);
          }}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
            touchDeltaX.current = 0;
            didSwipe.current = false;
            setPaused(true);
          }}
          onTouchMove={(event) => {
            touchDeltaX.current = event.touches[0].clientX - touchStartX.current;
          }}
          onTouchEnd={() => {
            const dx = touchDeltaX.current;
            if (Math.abs(dx) > 35) {
              didSwipe.current = true;
              if (dx < 0) goTo(active + 1);
              else goTo(active - 1);
            } else {
              pauseBriefly();
            }
          }}
        >
          {images.map((image, index) => {
            const offset = getOffset(index, active, total);
            return (
              <GalleryItem
                key={image.src}
                src={image.src}
                alt={image.alt}
                offset={offset}
                active={offset === 0}
                onSelect={
                  offset === 0
                    ? undefined
                    : () => {
                        if (didSwipe.current) return;
                        goTo(index);
                      }
                }
              />
            );
          })}

          <button
            type="button"
            onClick={() => goTo(active - 1)}
            className="absolute left-2 z-20 hidden h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#05245b] shadow-lg backdrop-blur transition hover:bg-white hover:text-[#0045bc] sm:flex md:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            className="absolute right-2 z-20 hidden h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#05245b] shadow-lg backdrop-blur transition hover:bg-white hover:text-[#0045bc] sm:flex md:right-8"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
