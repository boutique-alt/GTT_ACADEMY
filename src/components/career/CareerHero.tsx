const quoteLines = [
  "Teaching is a very noble",
  "profession that shapes the",
  "character, caliber, and future",
  "of an individual.",
  "If the people remember me",
  "as a good teacher,",
  "that will be the biggest",
  "honour for me.",
];

function QuoteBlock({ className = "" }: { className?: string }) {
  return (
    <blockquote className={`max-w-full border-l-[3px] border-[#ffbc09] pl-3 sm:pl-5 ${className}`}>
      <p className="font-serif text-[clamp(0.85rem,2.8vw,1.4rem)] font-semibold leading-[1.6] text-white sm:leading-[1.85]">
        <span className="block">&ldquo;{quoteLines[0]}</span>
        {quoteLines.slice(1, -1).map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
        <span className="block">{quoteLines[quoteLines.length - 1]}&rdquo;</span>
      </p>
      <footer className="mt-3 text-[11px] font-bold tracking-[0.08em] text-[#ffbc09] sm:mt-4 sm:text-xs sm:tracking-[0.12em] md:text-sm">
        — A. P. J. Abdul Kalam
      </footer>
    </blockquote>
  );
}

export default function CareerHero() {
  return (
    <>
      <section className="relative isolate w-full overflow-hidden bg-[#05245b]">
        {/* Image plane — full photo on mobile, not covered by quote */}
        <div className="relative aspect-[4/3] w-full sm:aspect-video">
          <div
            className="absolute inset-0 bg-cover bg-[center_20%] bg-no-repeat"
            style={{ backgroundImage: "url(/images/career-hero-banner.jpg)" }}
            role="img"
            aria-label="Career opportunities at GTT Academy"
          />
          <div
            className="pointer-events-none absolute inset-0 hidden sm:block"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 69, 188, 0.5) 0%, rgba(0, 69, 188, 0) 50%)",
            }}
          />
          {/* Desktop / tablet: quote over image */}
          <div className="relative z-10 hidden h-full w-full min-w-0 sm:flex">
            <div className="flex h-full w-[min(48%,28rem)] max-w-full items-center px-6 py-8 sm:px-8 lg:px-12 xl:px-16">
              <QuoteBlock />
            </div>
          </div>
        </div>

        {/* Mobile: quote under image so it does not cover the photo */}
        <div className="bg-[#0045bc] px-5 py-6 sm:hidden">
          <QuoteBlock />
        </div>
      </section>

      <div className="bg-brand-gradient py-4 sm:py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center font-display text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl">
            Career Opportunities
          </h1>
        </div>
      </div>
    </>
  );
}
