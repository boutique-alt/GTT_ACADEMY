import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { applyNowHref } from "@/data/site";

const columns = [
  [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/courses/pre-primary.jpg",
    "/images/gallery/gallery-3.jpg",
  ],
  [
    "/images/gallery/gallery-5.jpg",
    "/images/hero-2.jpg",
    "/images/gallery/gallery-6.jpg",
    "/images/courses/montessori.jpg",
  ],
  [
    "/images/gallery/gallery-8.jpg",
    "/images/gallery/gallery-9.jpg",
    "/images/courses/early-childhood.jpg",
    "/images/gallery/gallery-11.jpg",
  ],
];

const columnMotion = [
  "animate-[aboutScrollUp_25s_linear_infinite]",
  "animate-[aboutScrollDown_30s_linear_infinite]",
  "animate-[aboutScrollUp_20s_linear_infinite]",
];

export default function AboutEditMarquee() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-sm">
      <div className="grid items-center gap-6 p-4 sm:p-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:p-6">
        <div
          className="relative grid h-[420px] grid-cols-3 gap-2 overflow-hidden rounded-xl sm:h-[480px] sm:gap-3 md:h-[520px]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          {columns.map((images, columnIndex) => (
            <div
              key={columnIndex}
              className="about-marquee-col relative overflow-hidden"
            >
              <div
                className={`about-marquee flex flex-col gap-2 sm:gap-3 ${columnMotion[columnIndex]}`}
              >
                {[...images, ...images].map((src, imageIndex) => (
                  <div
                    key={`${src}-${imageIndex}`}
                    className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-slate-100 bg-[#f5f8fc]"
                  >
                    <Image
                      src={src}
                      alt="GTT Academy campus and training"
                      fill
                      sizes="(max-width: 1024px) 30vw, 180px"
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center px-2 py-4 text-center lg:items-start lg:py-6 lg:text-left">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#30ad22]">GTT Academy</p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#05245b] sm:text-4xl">
            Teacher Training Edit
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
            Timeless craft for classrooms that matter — practical skills, global credentials, and confident educators.
          </p>
          <a
            href={applyNowHref}
            className="btn-brand-gradient mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em]"
          >
            Explore <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
