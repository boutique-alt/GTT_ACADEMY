import { ArrowRight, Check } from "lucide-react";
import AboutCoursesSidebar from "@/components/about/AboutCoursesSidebar";
import AboutStickyLayout from "@/components/about/AboutStickyLayout";
import ApplyNowLink from "@/components/ui/ApplyNowLink";
const intro = [
  "Global Teacher Training Academy (GTT Academy) provides several opportunities for candidates seeking teaching jobs after completion of their courses. By providing an apostille Certificate, GTT Academy not only authenticates your certificate but also at the same time saves you loads of time while looking for a job.",
  "GTT Academy puts emphasis on the placement services as much as it does on its teacher training programs.",
  "Besides offering first-rate teacher training programs of global standards, we make sure that our teachers could meet their career goals with our trusted placement assistance.",
  "Today's education industry aims to recruit trained teachers skilled to meet the global standards of teaching the new age learners using latest methods and techniques. GTT Academy helps you choose the right teacher training program to keep up with the ever-growing competitive teaching job market.",
  "Students could expect mentoring and guidelines for placements after completion of teacher training programmes. We help our aspiring teachers in various aspects to appear for interviews.",
  "Our global network helps to connect with institutes and employers across the globe. Once we receive a vacancy or the Key Responsibility Areas of a particular role, from both national and international networks, we try to find out the maximum possible job opportunities for our students.",
];

const jobs = [
  "Primary Teacher",
  "ESL Teacher (Communicative English Language Teacher)",
  "Montessori Teacher",
  "Curriculum Developer",
  "Nursery Teacher",
  "Consultant Educator",
  "Assistant language teachers",
  "Soft Skills Trainers",
  "Communication Trainers",
  "Private Tutor",
  "Online Tutor",
  "Opening a Pre school / Playschool / Daycare set up",
  "IELTS Trainer / Examiner",
  "Early Childhood Teacher / Early Childhood Educator",
  "From Teacher to Teacherpreneur",
  "Principal / Head Administrator / Academic Coordinator",
  "Special Educator",
  "Child Development Specialist",
  "Behavioral Therapist",
  "School Counselor / Child Counselor",
];

const closing = [
  "Teaching is a rewarding job but it is also important to do your research and understand what all is involved before you enter this noble profession. For instance, to get a decent job in a university, the job seeker has to be equipped with higher qualifications and years of teaching or professional experience to match up the requirement of the employer. Some jobs are also available which requires minimum qualification like a job of an assistant language teacher in a public school or private school. GTT Academy's TEFL/TESOL certification can definitely help you to get such a job and select the right career.",
  "By doing a TESOL/TEFL course from GTT Academy, candidates could have opportunities to teach English language while travelling worldwide. English has become a global mode of communication, therefore, the demand for the Certified English language trainers across the globe is growing every minute leading to a vast number of job opportunities.",
  "After completion of the TESOL course from GTT Academy, one has many opportunities to explore. Opening your own school to teach English is a popular career choice. Certain public schools accept TEFL/TESOL certificate and allow one to teach their classes. A TEFL certified teacher could also apply his/her skills to get into the ESL/EFL publication world. Professions like this offer flexible schedules and freelance opportunities to those who have a taste for travelling and education. Another way to utilize a TEFL certification globally in a professional field other than teaching is to work in fields like refugee services or immigration.",
];

export default function CareerContent() {
  return (
    <section className="no-view-reveal w-full min-w-0 overflow-x-clip bg-[#f5f8fc] py-16 sm:py-20">
      <AboutStickyLayout sidebar={<AboutCoursesSidebar />}>
        <div className="min-w-0 max-w-full rounded-[1.5rem] border border-slate-100 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <h2 className="font-serif text-2xl font-bold text-[#05245b] sm:text-3xl lg:text-4xl">Career Opportunities</h2>

          <div className="mt-7 space-y-5 text-[15px] leading-7 break-words text-slate-600">
            {intro.map((paragraph) => (
              <p key={paragraph.slice(0, 64)}>{paragraph}</p>
            ))}

            <p>A list of jobs that you can expect after completing a course from GTT Academy includes:</p>

            <ul className="grid gap-3 sm:grid-cols-2">
              {jobs.map((job) => (
                <li key={job} className="flex min-w-0 items-start gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#30ad22] text-white">
                    <Check size={13} />
                  </span>
                  <span className="min-w-0 flex-1 break-words">{job}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-5 pt-2">
              <h3 className="font-serif text-xl font-bold text-[#05245b] sm:text-2xl">
                Diploma in Child Psychology and Diploma in Child and Adolescent Counseling
              </h3>
              <p>
                Our{" "}
                <a
                  href="/courses/teacher-training-courses/diploma-in-child-psychology"
                  className="font-semibold text-[#0045bc] underline-offset-2 hover:underline"
                >
                  Diploma in Child Psychology
                </a>{" "}
                and{" "}
                <a
                  href="/courses/teacher-training-courses/diploma-in-child-and-adolescent-counseling"
                  className="font-semibold text-[#0045bc] underline-offset-2 hover:underline"
                >
                  Diploma in Child and Adolescent Counseling
                </a>{" "}
                programmes attract a diverse group of learners— Not only budding students looking to build their knowledge and explore opportunities in child-focused fields, our learners have included dentists, caregivers, counsellors, educators, and other professionals who already work closely with children. Some participants are already working as child counsellors or caregivers and choose to pursue the programme to further develop their understanding of child and adolescent behaviour, emotional development, developmental needs, and the factors that shape a child&apos;s growth.
              </p>
              <p>
                Roles such as Child Development Specialist, Behavioral Therapist, School Counselor / Child Counselor, and Special Educator are especially supported by these programmes.
              </p>
            </div>

            {closing.map((paragraph) => (
              <p key={paragraph.slice(0, 64)}>{paragraph}</p>
            ))}
          </div>

          <ApplyNowLink className="btn-brand-gradient mt-10 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-[0.04em]">
            Apply Now <ArrowRight size={18} />
            </ApplyNowLink>
        </div>
      </AboutStickyLayout>
    </section>
  );
}
