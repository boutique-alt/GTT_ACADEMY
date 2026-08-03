"use client";

import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  title: string;
  active: boolean;
};

export default function CertificateCard({ src, alt, title, active }: Props) {
  return (
    <div
      className="gallery-slide absolute left-1/2 top-1/2 w-[250px] sm:w-[320px] md:w-[400px] lg:w-[480px]"
      style={{
        transform: active
          ? "translate(-72%, -50%) scale(1)"
          : "translate(8%, -50%) scale(0.82)",
        opacity: active ? 1 : 0.72,
        zIndex: active ? 10 : 4,
        filter: active ? "blur(0px)" : "blur(0.4px)",
        transition:
          "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), filter 0.9s ease",
      }}
    >
      <article
        className={`flex h-[320px] w-full flex-col overflow-hidden rounded-[1.75rem] bg-white transition-[box-shadow] duration-700 sm:h-[380px] md:h-[460px] lg:h-[520px] ${
          active
            ? "shadow-[0_28px_60px_-18px_rgba(5,36,91,0.35)] ring-1 ring-[#0045bc]/10"
            : "shadow-[0_14px_36px_-16px_rgba(5,36,91,0.2)] ring-1 ring-slate-200/80"
        }`}
      >
        <div
          className={`px-4 py-3 text-center font-serif text-base font-bold text-white sm:px-6 sm:py-3.5 sm:text-lg md:text-xl ${
            active ? "bg-brand-gradient" : "bg-[#05245b]/85"
          }`}
        >
          {title}
        </div>
        <div className="relative flex-1 bg-gradient-to-b from-[#f7fbff] to-white">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 250px, (max-width: 1024px) 400px, 480px"
            className="object-contain p-4 sm:p-5 md:p-6"
          />
        </div>
      </article>
    </div>
  );
}
