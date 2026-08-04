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
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain transition duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05245b]/45 to-transparent transition duration-500 group-hover:from-[#05245b]/60" />
        <div className="pointer-events-none absolute inset-0 bg-[#0045bc]/0 transition duration-500 group-hover:bg-[#0045bc]/10" />
        <span
          className={`absolute left-3 top-3 inline-flex items-center gap-1.5 overflow-hidden rounded-full px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.08em] shadow-lg transition duration-500 group-hover:scale-105 ${
            isPremium ? "bg-[#ffbc09] text-[#05245b]" : "bg-[#30ad22] text-white"
          }`}
        >
          <span className="absolute inset-y-0 -left-8 w-6 rotate-12 bg-white/45 blur-sm animate-[badgeShine_3.5s_ease-in-out_infinite]" />
          {isPremium ? <Crown size={13} strokeWidth={2.4} /> : <Flame size={13} strokeWidth={2.4} />}
          {isPremium ? "Premium Course" : "Popular Course"}
        </span>
      </div>
      <div className="p-6">
        <h3 className="min-h-14 font-serif text-xl font-bold leading-7 text-[#05245b] transition duration-300 group-hover:text-[#0045bc]">
          {title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{description}</p>
        <a
          href={href}
          {...(href.startsWith("http") ? { target: "_blank" as const, rel: "noreferrer" } : {})}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-[#0045bc] transition duration-300 group-hover:gap-2.5 group-hover:text-[#30ad22]"
        >
          Read More <ArrowUpRight size={16} className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  );
}
