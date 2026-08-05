import Image from "next/image";
import { ArrowUpRight, Crown, Flame } from "lucide-react";

type Props = {
  title: string;
  description: string;
  image: string;
  href: string;
  badge: string;
};

export default function CourseCard({ title, description, image, href, badge }: Props) {
  const isPremium = badge.includes("premium");

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-900/5 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:z-10 hover:shadow-[0_28px_50px_-18px_rgba(5,36,91,0.28)] hover:border-[#0045bc]/15">
      <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 50vw, 25vw"
          className="object-contain transition duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05245b]/45 to-transparent transition duration-500 group-hover:from-[#05245b]/60" />
        <div className="pointer-events-none absolute inset-0 bg-[#0045bc]/0 transition duration-500 group-hover:bg-[#0045bc]/10" />
        <span
          className={`absolute left-1.5 top-1.5 inline-flex items-center gap-1 overflow-hidden rounded-full px-2 py-1 text-[8px] font-extrabold uppercase tracking-[0.06em] shadow-lg transition duration-500 group-hover:scale-105 sm:left-3 sm:top-3 sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-[0.08em] ${
            isPremium ? "bg-[#ffbc09] text-[#05245b]" : "bg-[#30ad22] text-white"
          }`}
        >
          <span className="absolute inset-y-0 -left-8 w-6 rotate-12 bg-white/45 blur-sm animate-[badgeShine_3.5s_ease-in-out_infinite]" />
          {isPremium ? <Crown size={11} strokeWidth={2.4} className="sm:hidden" /> : <Flame size={11} strokeWidth={2.4} className="sm:hidden" />}
          {isPremium ? <Crown size={13} strokeWidth={2.4} className="hidden sm:block" /> : <Flame size={13} strokeWidth={2.4} className="hidden sm:block" />}
          <span className="sm:hidden">{isPremium ? "Premium" : "Popular"}</span>
          <span className="hidden sm:inline">{isPremium ? "Premium Course" : "Popular Course"}</span>
        </span>
      </div>
      <div className="p-3 sm:p-6">
        <h3 className="min-h-10 font-serif text-sm font-bold leading-5 text-[#05245b] transition duration-300 group-hover:text-[#0045bc] sm:min-h-14 sm:text-xl sm:leading-7">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 text-[11px] leading-4 text-slate-600 sm:mt-3 sm:text-sm sm:leading-6">{description}</p>
        <a
          href={href}
          {...(href.startsWith("http") ? { target: "_blank" as const, rel: "noreferrer" } : {})}
          className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#0045bc] transition duration-300 group-hover:gap-2.5 group-hover:text-[#30ad22] sm:mt-5 sm:gap-1.5 sm:text-sm"
        >
          Read More <ArrowUpRight size={16} className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}
