"use client";

import { ReactNode, useEffect, useRef } from "react";

type Props = {
  sidebar: ReactNode;
  children: ReactNode;
};

const HEADER_OFFSET = 120;

export default function AboutStickyLayout({ sidebar, children }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const sideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const rail = railRef.current;
    const side = sideRef.current;
    if (!wrap || !rail || !side) return;

    const reset = () => {
      side.style.position = "";
      side.style.top = "";
      side.style.left = "";
      side.style.width = "";
      side.style.maxHeight = "";
      side.style.overflowY = "";
    };

    const update = () => {
      if (window.innerWidth < 1024) {
        reset();
        return;
      }

      const wrapRect = wrap.getBoundingClientRect();
      const railWidth = rail.offsetWidth;
      const maxSideHeight = window.innerHeight - HEADER_OFFSET - 24;

      side.style.maxHeight = `${maxSideHeight}px`;
      side.style.overflowY = "auto";
      side.style.width = `${railWidth}px`;

      const sideHeight = Math.min(side.scrollHeight, maxSideHeight);

      if (wrapRect.top >= HEADER_OFFSET) {
        side.style.position = "relative";
        side.style.top = "0";
        side.style.left = "";
        return;
      }

      if (wrapRect.bottom <= HEADER_OFFSET + sideHeight) {
        side.style.position = "absolute";
        side.style.top = `${Math.max(0, wrap.offsetHeight - sideHeight)}px`;
        side.style.left = `${rail.offsetLeft}px`;
        return;
      }

      side.style.position = "fixed";
      side.style.top = `${HEADER_OFFSET}px`;
      side.style.left = `${rail.getBoundingClientRect().left}px`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      reset();
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-12 lg:px-8">
      <div ref={railRef} className="w-full shrink-0 lg:w-[280px]">
        <div ref={sideRef} className="w-full will-change-[position,top]">
          {sidebar}
        </div>
      </div>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
