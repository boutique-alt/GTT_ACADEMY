import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import ApplyNowLink from "@/components/ui/ApplyNowLink";
import HomeApplicationForm from "@/components/home/HomeApplicationForm";

const benefits = [
  "Apostille Certificate granted by the Ministry of External Affairs",
  "Transcript showcasing the complete content of study",
  "Career opportunities in private, international and IB schools",
  "Distance, online and in-class modes of learning",
  "Easy payment and instalment facilities",
  "Job placement support in India and abroad",
];

export default function About() {
  return (
    <section id="about" className="bg-brand-gradient-soft pt-8 pb-24 sm:pt-12">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)_minmax(280px,320px)] lg:gap-8 lg:px-8 xl:gap-10">
        <div className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:max-w-none">
          <div className="overflow-hidden rounded-[2rem] bg-white">
            <Image src="/images/hero-2.jpg" alt="Teacher training at GTT Academy" width={1920} height={1280} className="h-auto w-full object-cover" />
          </div>
          <div className="absolute -bottom-5 -right-2 rounded-2xl border-4 border-white bg-[#ffbc09] p-3.5 text-[#05245b] shadow-xl sm:-bottom-6 sm:right-3 sm:p-4">
            <p className="font-serif text-3xl font-bold">20,000+</p>
            <p className="mt-1 text-sm font-bold">Certified Teachers</p>
          </div>
        </div>

        <div className="min-w-0">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#30ad22]">Welcome to GTT Academy</p>
          <h2 className="font-serif text-2xl font-bold leading-tight text-[#05245b] sm:text-3xl xl:text-[2rem]">Building a bright future for teachers around the world.</h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-[15px]">
            Global Teacher Training Academy is a one-stop solution catering to a wide range of teacher training courses. We create professionals who make learning fun and engaging for students of all ages.
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
            We prepare you with teaching methodologies and techniques of international standard—essential for today&apos;s competitive teaching environment.
          </p>
          <div className="mt-6 grid gap-2.5">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-2.5 text-sm leading-6 text-slate-700">
                <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#30ad22] text-white"><Check size={13} /></span>
                {benefit}
              </div>
            ))}
          </div>
          <p className="mt-6 border-l-4 border-[#ffbc09] pl-4 font-serif text-base font-semibold italic text-[#0045bc] sm:text-lg">
            You are a good teacher already. Now let us help you become the best version of yourself!
          </p>
          <ApplyNowLink className="btn-brand-gradient mt-6 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-[0.04em] text-white">
            Apply Now <ArrowRight size={18} />
          </ApplyNowLink>
        </div>

        <div className="mx-auto w-full max-w-[320px] lg:mx-0 lg:sticky lg:top-24">
          <HomeApplicationForm />
        </div>
      </div>
    </section>
  );
}
