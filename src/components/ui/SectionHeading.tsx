type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, light = false }: Props) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#30ad22]">{eyebrow}</p>
      <h2 className={`font-serif text-3xl font-bold leading-tight sm:text-4xl ${light ? "text-white" : "text-[#05245b]"}`}>{title}</h2>
      {description && <p className={`mx-auto mt-4 max-w-2xl leading-7 ${light ? "text-blue-100" : "text-slate-600"}`}>{description}</p>}
    </div>
  );
}
