import { CheckCircle2 } from "lucide-react";

const sections = [
  {
    title: "Why Teacher Training?",
    items: [
      "Teacher Training will not only make learning effective but will also make the lives of students easier!",
      "In this entire process called teaching, it is not just a textbook that is important; it’s a teacher who determines the output of the process with the help of relevant teaching strategies.",
      "A Teacher’s Training is a continuous process that promotes a teacher’s teaching skills and helps them with the art of expressing themselves with ease.",
    ],
  },
  {
    title: "Why Choose Global Teacher Training Academy?",
    items: [
      "You will get an Apostille Certificate granted by the MEA (Ministry of External Affairs) after successful completion of your course.",
      "You will get a transcript showcasing the content of the study which is necessary while applying for a teacher's job across all board schools in both India and abroad.",
      "Our Certificate will widen your career prospects. You can apply for a teacher’s position in private schools, international schools, and IB schools.",
      "We offer job placements for our teachers in both India and abroad; working visas are granted by the Ministry of External Affairs (MEA).",
    ],
  },
  {
    title: "How would choosing Global Teacher Training Academy benefit you?",
    items: [
      "We offer flexible study facilities; study from anywhere at your convenience; we provide Distance, Online and In-class mode of learning.",
      "The language we use in our courses is easy to understand; candidates who have done their schooling from vernacular mediums will not have any troubles either.",
      "Our courses go easy on your pockets too; the fee for the courses ranges between Rs.8000 and 28000.",
      "We offer easy payment and instalment facilities.",
    ],
  },
];

export default function AcademyDetails() {
  return (
    <section className="bg-brand-gradient-soft pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-blue-100/80 bg-white/80 p-7 shadow-sm backdrop-blur">
              <h3 className="mb-5 font-serif text-xl font-bold text-[#05245b]">{section.title}</h3>
              <ul className="space-y-4">
                {section.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
                    <CheckCircle2 className="mt-1 shrink-0 text-[#30ad22]" size={17} /> {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
