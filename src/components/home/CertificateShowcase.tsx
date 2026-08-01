import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CertificateShowcase() {
  return (
    <section className="overflow-hidden bg-[#f3f8ff] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Globally Recognised"
          title="Certificate, Transcript & Apostille Stamp"
          description="Credentials designed to support your teaching career across boards, schools, embassies and ministries worldwide."
        />
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.3fr_.7fr]">
          <div className="flex flex-col rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-950/5">
            <div className="mb-5 rounded-full bg-[#0045bc] px-6 py-3 text-center font-serif text-xl font-bold text-white">
              Certificate and Transcript
            </div>
            <div className="flex flex-1 items-center justify-center">
              <Image src="/images/certificate-transcript.jpg" alt="GTT Academy certificate and transcript" width={710} height={500} className="h-auto max-h-[500px] w-full object-contain" />
            </div>
          </div>
          <div className="flex flex-col rounded-3xl border border-blue-100 bg-white p-5 shadow-xl shadow-blue-950/5">
            <div className="mb-5 rounded-full bg-[#0045bc] px-6 py-3 text-center font-serif text-xl font-bold text-white">
              Apostille Stamp
            </div>
            <div className="flex flex-1 items-center justify-center">
              <Image src="/images/apostille-stamp.jpg" alt="Apostille Stamp from MEA" width={427} height={594} className="h-auto max-h-[500px] w-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
