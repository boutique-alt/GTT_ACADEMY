import { BookOpen, Globe2, GraduationCap, Sparkles } from "lucide-react";

const points = [
  {
    icon: GraduationCap,
    title: "Teacher Training Courses",
    text: "Pre and Primary, Montessori, Nursery Teacher Training, and Early Childhood Care — for aspiring and in-service teachers.",
  },
  {
    icon: Globe2,
    title: "TESOL / TEFL Programs",
    text: "International English teaching courses designed to help you teach overseas with practical, classroom-ready methods.",
  },
  {
    icon: Sparkles,
    title: "Specialized Courses",
    text: "Child Psychology, Educational Administration, NLP, Phonetics, Grammar, and Classroom Management skills.",
  },
  {
    icon: BookOpen,
    title: "Diploma in Teaching & Training",
    text: "A transformative path for teacher trainers, curriculum developers, and education leaders shaping the future of learning.",
  },
];

export default function AcademyCoursesRange() {
  return (
    <section className="bg-brand-gradient-soft pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-gradient p-7 text-white sm:p-10">
          <h3 className="mx-auto max-w-3xl text-center font-serif text-2xl font-bold sm:text-3xl">
            Our extensive range of courses is specially designed for your needs!
          </h3>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {points.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition hover:bg-white/15">
                <span className="mb-4 grid size-11 place-items-center rounded-xl bg-white/15 text-[#ffbc09]">
                  <Icon size={22} />
                </span>
                <h4 className="font-serif text-lg font-bold leading-snug">{title}</h4>
                <p className="mt-3 text-sm leading-6 text-blue-100">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
