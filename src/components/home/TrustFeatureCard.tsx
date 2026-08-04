import Image from "next/image";

type Props = {
  icon: string;
  title: string;
  text: string;
  href: string;
};

export default function TrustFeatureCard({ icon, title, text, href }: Props) {
  return (
    <article className="group relative z-0 flex min-h-[280px] w-full flex-col overflow-hidden bg-white p-7 transition-[padding,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#f7fbff] hover:p-8 hover:shadow-[0_24px_48px_-16px_rgba(5,36,91,0.22)] sm:min-h-[300px] sm:p-8">
      <div className="mb-5 grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-[#0045bc]/15 to-[#30ad22]/15 p-2 transition duration-500 group-hover:scale-110 group-hover:from-[#0045bc]/20 group-hover:to-[#30ad22]/20">
        <Image src={icon} alt="" width={60} height={60} className="size-full object-contain" />
      </div>
      <h2 className="mb-3 font-serif text-xl font-bold text-[#05245b] transition duration-300 group-hover:text-[#0045bc]">{title}</h2>
      <p className="flex-1 text-sm leading-6 text-slate-600 transition-all duration-500 group-hover:leading-7">{text}</p>
      <a
        href={href}
        {...(href.startsWith("http") ? { target: "_blank" as const, rel: "noreferrer" } : {})}
        className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[#30ad22] transition duration-300 group-hover:gap-2 group-hover:text-[#0045bc]"
      >
        Read More <span className="transition duration-300 group-hover:translate-x-0.5">→</span>
      </a>
    </article>
  );
}
