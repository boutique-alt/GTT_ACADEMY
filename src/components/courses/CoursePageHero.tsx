type Props = {
  title: string;
};

export default function CoursePageHero({ title }: Props) {
  return (
    <div className="bg-brand-gradient py-5 sm:py-6 lg:py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-display text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl lg:text-[4.5rem] lg:leading-[1.05]">
          {title}
        </h1>
      </div>
    </div>
  );
}
