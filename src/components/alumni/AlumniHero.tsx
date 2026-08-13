import CoverImage from "@/components/ui/CoverImage";

const quoteLines = [
  "Check out",
  "what our",
  "teachers",
  "have",
  "to say!",
];

export default function AlumniHero() {
  return (
    <>
      <section className="relative isolate aspect-video w-full overflow-hidden bg-[#05245b]">
        <CoverImage src="/images/alumni-hero.jpg" alt="Alumni of GTT Academy" priority />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 69, 188, 0.5) 0%, rgba(0, 69, 188, 0) 50%)",
          }}
        />
        <div className="relative z-10 flex h-full w-full">
          <div className="flex h-full w-[min(48%,26rem)] items-center px-4 py-5 sm:w-[min(44%,30rem)] sm:px-8 sm:py-8 lg:w-[min(58%,52rem)] lg:items-start lg:px-12 lg:pt-16 lg:pb-10 xl:w-[min(60%,56rem)] xl:px-16 xl:pt-20 xl:pb-12">
            <p className="border-l-[3px] border-[#ffbc09] pl-3 font-serif text-[clamp(0.95rem,2.6vw,2rem)] font-semibold leading-[1.45] tracking-[0.02em] drop-shadow-[0_2px_10px_rgba(3,27,70,0.45)] sm:pl-5 sm:leading-[1.5] lg:border-l-4 lg:pl-6 lg:text-5xl lg:leading-[1.1] lg:tracking-[-0.01em] xl:text-[4.5rem] xl:leading-[1.05]">
              {quoteLines.map((line, i) => (
                <span
                  key={line}
                  className={`block ${
                    i === quoteLines.length - 1
                      ? "text-[#ffbc09]"
                      : i === 0
                        ? "text-white"
                        : "text-[#dce9ff]"
                  }`}
                >
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>
      <div className="bg-brand-gradient py-4 sm:py-5 lg:py-7">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center font-display text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-[4.5rem] lg:leading-[1.05]">
            Alumni
          </h1>
        </div>
      </div>
    </>
  );
}
