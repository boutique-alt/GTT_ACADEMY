import Image from "next/image";
import { Quote } from "lucide-react";
import { alumniHref } from "@/data/site";

type Props = {
  name: string;
  text: string;
  image: string;
  copy: string;
};

export default function TestimonialCard({ name, text, image, copy }: Props) {
  return (
    <article className="group/card flex h-[470px] w-[260px] shrink-0 flex-col overflow-hidden rounded-3xl border border-white/15 bg-white shadow-2xl shadow-blue-950/25 transition-[width,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:w-[540px] hover:flex-row hover:shadow-[0_28px_60px_-16px_rgba(5,36,91,0.45)] sm:h-[490px] sm:w-[290px] sm:hover:w-[580px]">
      <div className="relative h-[42%] w-full shrink-0 overflow-hidden bg-white transition-[height,width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:h-full group-hover/card:w-[250px] sm:group-hover/card:w-[270px]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 260px, 290px"
          loading="lazy"
          className="object-cover object-top transition duration-700 ease-out group-hover/card:scale-[1.04]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-[#0045bc]/90 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white backdrop-blur">
          Student Experience
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col justify-between gap-3 bg-white p-5 pb-6 transition-[padding] duration-500 sm:p-6 sm:pb-7 group-hover/card:justify-center group-hover/card:p-6 sm:group-hover/card:p-8">
        <div className="min-h-0">
          <Quote className="mb-2 text-[#ffbc09] transition duration-500 group-hover/card:mb-4" fill="currentColor" size={24} />
          <p className="line-clamp-3 text-sm leading-6 text-slate-600 transition-all duration-500 group-hover/card:line-clamp-8 group-hover/card:leading-7">
            &ldquo;{text}&rdquo;
          </p>
        </div>
        <div className="shrink-0 border-t border-slate-200 pt-3">
          <p className="font-serif text-lg font-bold leading-6 text-[#05245b]">{name}</p>
          <a
            href={alumniHref}
            tabIndex={copy === "duplicate" ? -1 : undefined}
            className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-[#0045bc] transition hover:text-[#30ad22]"
          >
            Read More
            <span className="inline-block max-w-0 overflow-hidden opacity-0 transition-all duration-500 group-hover/card:max-w-[5rem] group-hover/card:opacity-100">
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
