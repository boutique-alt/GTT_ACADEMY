const quoteLines = [
  "GTT ACADEMY ENSURES",
  "INTEGRITY AND",
  "AUTHENTICITY",
];

export default function AccreditationHero() {
  return (
    <>
      <section className="relative isolate aspect-video w-full overflow-hidden bg-[#05245b]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/accreditations-hero.jpg)" }}
          role="img"
          aria-label="Accreditations at GTT Academy"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0, 69, 188, 0.5) 0%, rgba(0, 69, 188, 0) 50%)",
          }}
        />
        <div className="relative z-10 flex h-full w-full">
          <div className="flex h-full w-[min(48%,26rem)] items-center px-4 py-5 sm:w-[min(44%,30rem)] sm:px-8 sm:py-8 lg:px-12 lg:py-10 xl:px-16 xl:py-12">
            <p className="border-l-[3px] border-[#ffbc09] pl-3 font-serif text-[clamp(0.95rem,2.6vw,2rem)] font-semibold uppercase leading-[1.45] tracking-[0.04em] text-white sm:pl-5 sm:leading-[1.5]">
              {quoteLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>
      <div className="bg-brand-gradient py-4 sm:py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center font-display text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
            Accreditation
          </h1>
        </div>
      </div>
    </>
  );
}
