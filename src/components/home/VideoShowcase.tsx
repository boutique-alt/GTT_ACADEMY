import { CheckCircle2, PlayCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const highlights = [
  "Real student review from Sarita Jethani after her GTT Academy training.",
  "PG Diploma in Montessori & Early Childhood Care — her learning journey.",
  "Practical methods and confidence she gained for real classrooms.",
];

export default function VideoShowcase() {
  return (
    <section className="bg-brand-gradient-soft py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience GTT Academy"
          title="Learn More About Our Teacher Training"
          description="Discover how GTT Academy helps teachers gain practical skills and globally recognised credentials."
        />

        <div className="grid overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-2xl shadow-blue-950/10 lg:grid-cols-2 lg:items-stretch">
          <div className="flex h-full flex-col justify-center p-6 sm:p-8 lg:p-9">
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#30ad22]">Student Review</p>
            <h3 className="font-serif text-2xl font-bold leading-tight text-[#05245b] sm:text-[1.7rem]">
              Sarita Jethani on her Montessori &amp; Early Childhood journey
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Feedback from a GTT Academy learner on the PG Diploma in Montessori &amp; Early Childhood Care.
            </p>
            <ul className="mt-5 space-y-3">
              {highlights.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#30ad22]" size={18} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex h-full flex-col justify-center bg-[#05245b] p-4 sm:p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-white">
              <PlayCircle className="text-[#ffbc09]" size={20} /> Student Review Video
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-2xl">
              <iframe
                className="size-full"
                src="https://www.youtube.com/embed/xduuUZMSM6M"
                title="GTT Academy student review - Sarita Jethani"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
