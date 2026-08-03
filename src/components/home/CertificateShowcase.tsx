import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const cards = [
  {
    src: "/images/certificate-transcript.jpg",
    alt: "GTT Academy certificate and transcript",
    title: "Certificate and Transcript",
  },
  {
    src: "/images/apostille-stamp.jpg",
    alt: "Apostille Stamp from MEA",
    title: "Apostille Stamp",
  },
];

export default function CertificateShowcase() {
  return (
    <section className="overflow-hidden bg-brand-gradient-soft py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Globally Recognised"
          title="Certificate, Transcript & Apostille Stamp"
          description="Credentials designed to support your teaching career across boards, schools, embassies and ministries worldwide."
        />
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.3fr_.7fr]">
          {cards.map((card) => (
            <div key={card.src} className="flex flex-col rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-950/5">
              <div className="mb-5 rounded-full bg-brand-gradient px-6 py-3 text-center font-serif text-xl font-bold text-white">
                {card.title}
              </div>
              <div className="relative flex flex-1 items-center justify-center">
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={card.src.includes("apostille") ? 427 : 710}
                  height={card.src.includes("apostille") ? 594 : 500}
                  className="h-auto max-h-[500px] w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
