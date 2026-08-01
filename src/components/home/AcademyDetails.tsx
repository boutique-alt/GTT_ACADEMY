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
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-blue-100 bg-[#f8fbff] p-7">
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
        <div className="mt-6 rounded-3xl bg-[#05245b] p-7 text-white sm:p-10">
          <h3 className="font-serif text-2xl font-bold">Our extensive range of courses is specially designed for your needs!</h3>
          <div className="mt-6 grid gap-5 text-sm leading-7 text-blue-100 lg:grid-cols-2">
            <p>Choose from our list of Teacher Training Courses if you are an aspiring teacher or if you simply want to equip yourself with the smart and new skills to educate. The list includes Pre and Primary Teacher Training | Regular/In-class Pre and Primary Teacher Training Course | Montessori Teacher Training | Nursery Teacher Training | Diploma in Early Childhood Care and Education.</p>
            <p>GTT Academy&apos;s TESOL/TEFL courses are competently designed programs that enable you to learn beyond the norm and get access to the international teaching industry. TESOL (Teaching English to Speakers of Other Languages) or TEFL (Teaching English as Foreign Language) are international programs for teachers who are willing to carry their teaching skills overseas. Both are similar to each other in their approach to English language instruction for the non-native speakers. As the course is developed considering the qualities one EFL/ESL teacher should have, hence the courses comprises all the detail guidelines required to excel in this professional field of teaching. It only talks about the proven methods in practical field of EFL teaching.</p>
            <p>Choose from our wide range of Specialized Courses if you want to enhance your communication skills, confidence, and motivation using both conscious and unconscious processes that are needed to perform great in any context. Get to learn, how these methods can help you increase your ability to influence and persuade. The list of our Specialized Courses includes Neuro-linguistic Programming (NLP) | Teaching Phonetics | Teaching Grammar | Diploma in Child Psychology | Diploma in Educational Administration and Management | Certificate of Language Teaching Online | English for Academic Purpose | Classroom Management Skill.</p>
            <p>The Diploma in Teaching and Training, a transformative course offered by GTT Academy is designed to elevate trainers and teachers to become exceptional educators and leaders in the field. This comprehensive program is tailored for those aspiring to become teacher trainers, curriculum developers or examiners, equipping them with the skills to shape the future of education.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
