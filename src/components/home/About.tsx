import Image from "next/image";
import { Check } from "lucide-react";

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
    <section id="about" className="bg-brand-gradient-soft pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] bg-slate-100">
            <Image src="/images/hero-2.jpg" alt="Teacher training at GTT Academy" width={1920} height={1280} className="h-auto w-full object-contain" />
          </div>
          <div className="absolute -bottom-7 -right-3 rounded-2xl border-4 border-white bg-[#ffbc09] p-6 text-[#05245b] shadow-xl sm:right-8">
            <p className="font-serif text-4xl font-bold">20,000+</p>
            <p className="mt-1 text-sm font-bold">Certified Teachers</p>
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#30ad22]">Welcome to GTT Academy</p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-[#05245b] sm:text-4xl">Building a bright future for teachers around the world.</h2>
          <p className="mt-6 leading-7 text-slate-600">
            Global Teacher Training Academy is a one-stop solution catering to a wide range of teacher training courses. We create professionals who make learning fun and engaging for students of all ages.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            We prepare you with teaching methodologies and techniques of international standard—essential for today&apos;s competitive teaching environment.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex gap-3 text-sm leading-6 text-slate-700">
                <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#30ad22] text-white"><Check size={13} /></span>
                {benefit}
              </div>
            ))}
          </div>
          <p className="mt-7 border-l-4 border-[#ffbc09] pl-5 font-serif text-lg font-semibold italic text-[#0045bc]">
            You are a good teacher already. Now let us help you become the best version of yourself!
          </p>
        </div>
      </div>
    </section>
  );
}
