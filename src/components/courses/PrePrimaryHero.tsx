const quoteLines = [
  "Educate and raise",
  "the masses, and thus",
  "alone a nation",
  "is possible.",
];

function QuoteBlock({ className = "" }: { className?: string }) {
  return (
    <blockquote className={`max-w-full border-l-[3px] border-[#ffbc09] pl-3 sm:pl-5 lg:border-l-4 lg:pl-6 ${className}`}>
      <p className="font-serif text-[clamp(0.95rem,2.6vw,1.75rem)] font-semibold leading-[1.45] tracking-[0.02em] drop-shadow-[0_2px_10px_rgba(3,27,70,0.45)] sm:leading-[1.5] lg:text-5xl lg:leading-[1.15] lg:tracking-[-0.01em] xl:text-[3.75rem] xl:leading-[1.1]">
        <span className="block text-white">&ldquo;{quoteLines[0]}</span>
        {quoteLines.slice(1, -1).map((line) => (
          <span key={line} className="block text-[#dce9ff]">
            {line}
          </span>
        ))}
        <span className="block text-[#ffbc09]">{quoteLines[quoteLines.length - 1]}&rdquo;</span>
      </p>
      <footer className="mt-3 text-[11px] font-bold tracking-[0.08em] text-[#ffbc09] sm:mt-4 sm:text-xs sm:tracking-[0.12em] md:text-sm lg:mt-6 lg:text-base lg:tracking-[0.14em]">
        — Swami Vivekananda
      </footer>
    </blockquote>
  );
}

export default function PrePrimaryHero() {
  return (
    <>
      <section className="relative isolate w-full overflow-hidden bg-[#05245b]">
        <div className="relative aspect-[4/3] w-full sm:aspect-video">
          <div
            className="absolute inset-0 bg-cover bg-[center_20%] bg-no-repeat"
            style={{ backgroundImage: "url(/images/pre-primary-hero.jpg)" }}
            role="img"
            aria-label="Pre and Primary Teacher Training at GTT Academy"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 69, 188, 0.5) 0%, rgba(0, 69, 188, 0) 50%)",
            }}
          />
          <div className="relative z-10 flex h-full w-full min-w-0">
            <div className="flex h-full w-[min(78%,18rem)] max-w-full items-start px-4 pt-6 pb-8 sm:w-[min(48%,28rem)] sm:items-center sm:px-8 sm:py-8 lg:w-[min(58%,48rem)] lg:items-start lg:px-12 lg:pt-16 lg:pb-8 xl:w-[min(60%,52rem)] xl:px-16 xl:pt-20">
              <QuoteBlock />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-brand-gradient py-4 sm:py-5 lg:py-7">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center font-display text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl lg:text-[3.25rem] lg:leading-[1.1] xl:text-[4rem]">
            Pre and Primary Teacher Training with Practical Session
          </h1>
        </div>
      </div>
    </>
  );
}
