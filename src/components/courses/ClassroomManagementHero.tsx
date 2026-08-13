import CoverImage from "@/components/ui/CoverImage";

const quoteLines = [
  "Our Specialized courses",
  "are aimed at helping",
  "teachers realize",
  "their full potential",
];

function QuoteBlock({ className = "" }: { className?: string }) {
  return (
    <p
      className={`max-w-full border-l-[3px] border-[#ffbc09] pl-3 font-serif text-[clamp(0.95rem,2.6vw,1.75rem)] font-semibold leading-[1.45] tracking-[0.02em] drop-shadow-[0_2px_10px_rgba(3,27,70,0.45)] sm:pl-5 sm:leading-[1.5] lg:border-l-4 lg:pl-6 lg:text-5xl lg:leading-[1.15] lg:tracking-[-0.01em] xl:text-[3.5rem] xl:leading-[1.1] ${className}`}
    >
      {quoteLines.map((line, i) => (
        <span
          key={line}
          className={`block ${
            i === quoteLines.length - 1 ? "text-[#ffbc09]" : i === 0 ? "text-white" : "text-[#dce9ff]"
          }`}
        >
          {line}
        </span>
      ))}
    </p>
  );
}

export default function ClassroomManagementHero() {
  return (
    <>
      <section className="relative isolate w-full overflow-hidden bg-[#05245b]">
        <div className="relative aspect-[4/3] w-full sm:aspect-video">
          <CoverImage
            src="/images/classroom-management-hero.jpg"
            alt="Classroom Management Skill at GTT Academy"
            priority
            className="object-cover object-[center_30%]"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 69, 188, 0.5) 0%, rgba(0, 69, 188, 0) 50%)",
            }}
          />
          <div className="relative z-10 flex h-full w-full min-w-0">
            <div className="flex h-full w-[min(78%,18rem)] max-w-full items-start px-4 pt-6 pb-8 sm:w-[min(52%,32rem)] sm:items-center sm:px-8 sm:py-8 lg:w-[min(58%,48rem)] lg:items-start lg:px-12 lg:pt-16 lg:pb-8 xl:w-[min(60%,52rem)] xl:px-16 xl:pt-20">
              <QuoteBlock />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-brand-gradient py-4 sm:py-5 lg:py-7">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center font-display text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl lg:text-[3.25rem] lg:leading-[1.1] xl:text-[4rem]">
            Classroom Management Skill
          </h1>
        </div>
      </div>
    </>
  );
}
