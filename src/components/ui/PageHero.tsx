import CoverImage from "@/components/ui/CoverImage";

type Props = {
  title: string;
  image: string;
};

export default function PageHero({ title, image }: Props) {
  return (
    <>
      <section className="relative isolate h-[min(55svh,600px)] min-h-[320px] w-full overflow-hidden bg-[#05245b] sm:min-h-[420px] lg:h-[600px] lg:min-h-[600px]">
        <CoverImage src={image} alt="" priority />
        <div className="absolute inset-0 bg-black/40" />
      </section>
      <div className="bg-brand-gradient py-4 sm:py-5 lg:py-7">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-center font-display text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-[4.5rem] lg:leading-[1.05]">
            {title}
          </h1>
        </div>
      </div>
    </>
  );
}
