"use client";

import { ReactNode, useEffect, useRef } from "react";
import MobileApplyNowCta from "@/components/ui/MobileApplyNowCta";

type Props = {
  left: ReactNode;
  right: ReactNode;
  children: ReactNode;
};

const HEADER_OFFSET = 120;

function useStickyRail(railRef: React.RefObject<HTMLDivElement | null>, sideRef: React.RefObject<HTMLDivElement | null>, wrapRef: React.RefObject<HTMLDivElement | null>) {
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
  }, [railRef, sideRef, wrapRef]);
}

export default function CoursePageLayout({ left, right, children }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const leftRailRef = useRef<HTMLDivElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const rightRailRef = useRef<HTMLDivElement>(null);
  const rightSideRef = useRef<HTMLDivElement>(null);

  useStickyRail(leftRailRef, leftSideRef, wrapRef);
  useStickyRail(rightRailRef, rightSideRef, wrapRef);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-8 overflow-x-clip px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-8 lg:px-8"
    >
      <div ref={leftRailRef} className="order-4 w-full min-w-0 max-w-full shrink-0 lg:order-1 lg:w-[240px]">
        <div ref={leftSideRef} className="w-full min-w-0 max-w-full will-change-[position,top]">
          {left}
        </div>
      </div>

      <div className="order-2 min-w-0 max-w-full flex-1 lg:order-2">
        <MobileApplyNowCta />
        {children}
      </div>

      <div ref={rightRailRef} className="contents w-full min-w-0 max-w-full shrink-0 lg:block lg:order-3 lg:w-[280px]">
        <div ref={rightSideRef} className="contents w-full min-w-0 max-w-full will-change-[position,top] lg:block">
          {right}
        </div>
      </div>
    </div>
  );
}
