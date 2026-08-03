import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Feature = {
  icon: string;
  title: string;
  text: string;
  href: string;
};

type Props = {
  features: Feature[];
};

export default function TrustFeaturesMobile({ features }: Props) {
  return (
    <div className="space-y-3 md:hidden">
      {features.map((feature, index) => (
        <a
          key={feature.title}
          href={feature.href}
          className="flex gap-3.5 overflow-hidden rounded-2xl border border-slate-100 bg-white p-3.5 shadow-md shadow-blue-950/5"
        >
          <div className="relative flex w-16 shrink-0 flex-col items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#0045bc] to-[#30ad22] px-2 py-3 text-white">
            <span className="text-[10px] font-extrabold tracking-wider opacity-80">0{index + 1}</span>
            <div className="grid size-10 place-items-center rounded-lg bg-white/15 p-1.5">
              <Image src={feature.icon} alt="" width={40} height={40} className="size-full object-contain" />
            </div>
          </div>
          <div className="min-w-0 flex-1 py-0.5">
            <h2 className="font-serif text-[1.05rem] font-bold leading-snug text-[#05245b]">{feature.title}</h2>
            <p className="mt-1.5 line-clamp-3 text-[12.5px] leading-5 text-slate-600">{feature.text}</p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#0045bc]">
              Read More <ArrowRight size={13} />
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
