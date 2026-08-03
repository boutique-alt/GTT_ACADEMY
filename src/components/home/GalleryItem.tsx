"use client";

import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  offset: number;
  active: boolean;
  onSelect?: () => void;
};

function getOffsetX(offset: number) {
  if (offset === 0) return "-50%";
  if (offset === -1) return "-130%";
  if (offset === 1) return "30%";
  if (offset <= -2) return "-200%";
  return "100%";
}

export default function GalleryItem({ src, alt, offset, active, onSelect }: Props) {
  const nearby = Math.abs(offset) === 1;

  return (
    <div
      className="gallery-slide absolute left-1/2 top-0 flex h-full w-[220px] flex-col items-center justify-center md:w-[360px] lg:w-[440px]"
      style={{
        transform: `translateX(${getOffsetX(offset)}) scale(${active ? 1 : 0.75})`,
        opacity: active ? 1 : nearby ? 0.85 : 0,
        zIndex: active ? 10 : nearby ? 5 : 0,
        pointerEvents: Math.abs(offset) <= 1 ? "auto" : "none",
        transition: "transform 0.8s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.8s cubic-bezier(0.32, 0.72, 0, 1)",
      }}
    >
      <article
        role={onSelect ? "button" : undefined}
        tabIndex={onSelect ? 0 : undefined}
        onClick={onSelect}
        onKeyDown={(event) => {
          if (!onSelect) return;
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onSelect();
          }
        }}
        className={`relative h-[280px] w-full overflow-hidden rounded-2xl border-[6px] border-white bg-[#f5f8fc] shadow-xl transition-shadow duration-500 md:h-[480px] md:border-[10px] lg:h-[550px] ${
          active ? "shadow-[#05245b]/25" : "shadow-[#05245b]/5"
        } ${onSelect && !active ? "cursor-pointer" : ""}`}
      >
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 220px, (max-width: 1024px) 360px, 440px" className="object-cover object-top" />
      </article>
    </div>
  );
}
