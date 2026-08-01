import { PlayCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function VideoShowcase() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience GTT Academy"
          title="Learn More About Our Teacher Training"
          description="Discover how GTT Academy helps teachers gain practical skills and globally recognised credentials."
        />
        <div className="overflow-hidden rounded-3xl border border-blue-100 bg-[#05245b] p-2 shadow-2xl shadow-blue-950/15 sm:p-4">
          <div className="mb-3 flex items-center gap-2 px-2 text-sm font-bold text-white">
            <PlayCircle className="text-[#ffbc09]" size={20} /> GTT Academy Video
          </div>
          <div className="aspect-video overflow-hidden rounded-2xl">
            <iframe
              className="size-full"
              src="https://www.youtube.com/embed/xduuUZMSM6M"
              title="GTT Academy teacher training video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
