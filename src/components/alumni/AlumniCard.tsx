import Image from "next/image";

export type AlumniEntry = {
  name: string;
  course: string;
  text: string;
  image: string;
  page?: number;
};

type Props = {
  alumnus: AlumniEntry;
};

export default function AlumniCard({ alumnus }: Props) {
  return (
    <article className="flex flex-col gap-4 border-b border-slate-100 py-6 last:border-b-0 sm:flex-row sm:gap-5 sm:py-7">
      <div className="mx-auto size-24 shrink-0 overflow-hidden rounded-2xl bg-[#eef4ff] sm:mx-0 sm:size-28">
        <Image
          src={alumnus.image}
          alt={alumnus.name}
          width={112}
          height={112}
          className="size-full object-cover"
        />
      </div>
      <div className="min-w-0 flex-1 text-center sm:text-left">
        <h3 className="font-serif text-lg font-bold text-[#05245b] sm:text-xl">{alumnus.name}</h3>
        <p className="mt-1 text-sm font-bold uppercase tracking-[0.06em] text-[#0045bc]">{alumnus.course}</p>
        <p className="mt-3 text-[15px] leading-7 text-slate-600">{alumnus.text}</p>
      </div>
    </article>
  );
}
