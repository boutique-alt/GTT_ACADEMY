import { MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { branches, contactHref } from "@/data/site";

export default function Branches() {
  return (
    <section className="bg-brand-gradient-soft py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Pan-India Presence" title="Our Branches" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {branches.map((branch) => (
            <a key={branch} href={contactHref} className="group rounded-2xl border border-blue-100 bg-white px-3 py-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#30ad22]">
              <MapPin className="mx-auto mb-3 text-[#0045bc] transition group-hover:text-[#30ad22]" size={24} />
              <p className="font-bold text-[#05245b]">{branch}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
