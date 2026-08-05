const quoteLines = [
  "Keep checking our website",
  "to find out the latest deals",
  "and discounts on courses",
  "and join GTT Academy",
  "to join the global",
  "teaching platform",
];

function QuoteBlock({ className = "" }: { className?: string }) {
  return (
    <p
      className={`border-l-[3px] border-[#ffbc09] pl-3 font-serif text-[clamp(0.95rem,3.8vw,1.25rem)] font-semibold uppercase leading-[1.4] tracking-[0.03em] drop-shadow-[0_2px_10px_rgba(3,27,70,0.45)] sm:pl-5 sm:text-[clamp(1rem,2.2vw,1.55rem)] sm:leading-[1.35] lg:border-l-4 lg:pl-6 lg:text-[2.15rem] lg:leading-[1.22] lg:tracking-[0.02em] xl:text-[2.65rem] xl:leading-[1.18] ${className}`}
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

export default function SpecialOfferHero() {
  return (
    <>
      <section className="relative isolate w-full overflow-hidden bg-[#05245b]">
        <div className="relative aspect-[4/3] w-full sm:aspect-video">
          <div
            className="absolute inset-0 bg-cover bg-[center_20%] bg-no-repeat"
            style={{ backgroundImage: "url(/images/special-offer-hero.jpg)" }}
            role="img"
            aria-label="Special offer at GTT Academy"
          />
          <div
            className="pointer-events-none absolute inset-0 hidden sm:block"
            style={{
              background:
                "linear-gradient(to right, rgba(0, 69, 188, 0.5) 0%, rgba(0, 69, 188, 0) 50%)",
            }}
          />
          <div className="relative z-10 hidden h-full w-full min-w-0 sm:flex">
            <div className="flex h-full w-[min(55%,34rem)] max-w-full items-start px-6 pt-8 pb-6 sm:w-[min(50%,38rem)] sm:px-8 sm:pt-10 lg:w-[min(52%,44rem)] lg:px-12 lg:pt-12 lg:pb-8 xl:px-16 xl:pt-14">
              <QuoteBlock />
            </div>
          </div>
        </div>

        <div className="bg-[#0045bc] px-5 py-6 sm:hidden">
          <QuoteBlock />
        </div>
      </section>

      <div className="bg-brand-gradient py-4 sm:py-5 lg:py-7">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center font-display text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-[4.5rem] lg:leading-[1.05]">
            Special Offer
          </h1>
        </div>
      </div>
    </>
  );
}
