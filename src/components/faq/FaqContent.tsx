import { ArrowRight } from "lucide-react";
import AboutCoursesSidebar from "@/components/about/AboutCoursesSidebar";
import AboutStickyLayout from "@/components/about/AboutStickyLayout";
import FaqAccordion, { type FaqItem } from "@/components/faq/FaqAccordion";
import ApplyNowLink from "@/components/ui/ApplyNowLink";
const faqs: FaqItem[] = [
  {
    question: "Do you offer financial aid?",
    answer: <p>We do not offer any scholarship or financial assistance at this time.</p>,
  },
  {
    question: "Is group discount offered?",
    answer: (
      <p>
        Group discounts as well as ad-hoc course combinations or packages are also provided. For more kindly mail us
        at:{" "}
        <a href="mailto:admin@globalteachersacademy.com" className="font-semibold text-[#0045bc] hover:underline">
          admin@globalteachersacademy.com
        </a>
      </p>
    ),
  },
  {
    question: "Will I be offered any discount if I have a friend who is interested to enroll with me?",
    answer: (
      <p>
        If any of your friends or colleagues is interested to take up an online/Distance course with you, fill the
        application mentioning each participant and we will get back to you. If you are interested for any of our
        Online/Distance courses, kindly refer to the courses fee page for latest information.
      </p>
    ),
  },
  {
    question: "Is there any additional payment attached?",
    answer: (
      <>
        <p>No. All the e-course material, assessment, moderation and the certificate all are inclusive of the course fee.</p>
        <p>However, a hard copy of the course book is chargeable.</p>
      </>
    ),
  },
  {
    question: "How much is the course fee?",
    answer: (
      <>
        <p>
          The course fee is different for different courses. To know more about the course fees, kindly click on the
          &apos;courses&apos; on our website. You can also find about the course fees under Course Details and Course
          Information on the &apos;Courses&apos; page.
        </p>
        <p>
          Are course fees are also listed here on this page. Please click on the link to visit the page.
        </p>
        <p>
          <a
            href="/courses"
            className="font-bold text-[#0045bc] hover:underline"
          >
            View all courses and fees
          </a>
        </p>
      </>
    ),
  },
  {
    question: "Can anyone else pay on my behalf?",
    answer: (
      <p>
        Yes. The name of the person making the payment on your behalf should be informed via email to us to track your
        payment process. Once they made the payment, keep us posted on the details and the rest will be taken care of.
      </p>
    ),
  },
  {
    question: "What is the deadline for making a payment?",
    answer: (
      <p>
        We do not have any deadline for our course payment but for it is best to look for the special offers provided
        for specific time period at our website.
      </p>
    ),
  },
  {
    question: "What kind of payments do you accept?",
    answer: (
      <p>
        We accept the payment through credit/debit card via our secure payment page for any of our course. The payment
        is also possible through your friend or family to pay with their card. The payment is also acceptable via
        PayPal. The bank transfer is also acceptable provided the time it takes including the transfer charges.
      </p>
    ),
  },
  {
    question: "Are these courses accredited?",
    answer: (
      <p>
        You can be assured that when you choose an English Proficiency Course from Global Teacher Training Academy, you
        are achieving the highest quality English Language Training and recognition. On successful completion of each
        course, you will be awarded with a certificate acknowledging the achievement of a specified level of proficiency
        in speaking, listening, reading and writing English for a specified purpose.
      </p>
    ),
  },
  {
    question: "What should be my salary expectation?",
    answer: (
      <p>
        The salary package or remuneration depends on the institution and the place of appointment. The entire salary
        will be satisfactory for you to afford a quality lifestyle as the demand for Pre and primary teachers globally is
        overwhelming.
      </p>
    ),
  },
  {
    question: "Can one without any prior teaching experiences apply for the course?",
    answer: (
      <p>
        Yes, one can apply and enroll for the online/Distance courses easily. With the learning support of the trainers,
        learners those have no experience in teaching in pre primary level can be prepared for a career in primary
        education.
      </p>
    ),
  },
  {
    question: "What kind of Placement support can I look forward to from the Institution?",
    answer: (
      <>
        <p>
          GTT Academy&apos;s insider guide gives a complete organizational overview on exploring different institutes and
          handling recruitment related issues. On approaching our Placement guide the trainee is given step by step
          guideline on the necessary documents, videos, teaching practices, resume preparation, documentation and other
          steps which will be required to make the job search easier.
        </p>
        <p>
          We at GTT Academy foster and nurture a supportive online community, by cultivating personal relationship with
          individual students, providing appropriate feedback and guidance to help them choose the right career option and
          organization. Our able representatives from placement cell will help guide our students by sharing leads,
          techniques and tips to realize their goals and missions.
        </p>
      </>
    ),
  },
  {
    question: "Where can I teach after completion of the program?",
    answer: (
      <p>
        When you successfully completion of any of the courses of your choice, you are awarded a globally recognized
        certificate that enables you to teach anywhere in the world. It is a globally recognized and certified program
        that enables the teacher to teach across many nations.
      </p>
    ),
  },
  {
    question: "What is Pre-Primary Teacher training/ Montessori/Nursery Courses in Particular?",
    answer: (
      <p>
        All the above mentioned Course offers an in depth knowhow of early childhood education The courses are designed
        in an unique way and is a wonderful opportunity for working or aspiring teachers to gain, upgrade skills and
        knowledge in the pre and primary section of teaching.
      </p>
    ),
  },
  {
    question: "What is the eligibility of the course?",
    answer: (
      <ul className="list-disc space-y-2 pl-5">
        <li>For the Diploma Courses you need to be a senior secondary pass out with a degree from High school to apply for the course.</li>
        <li>For PG Diploma courses you need to be a graduate under any stream.</li>
        <li>For Certificate Courses you need to complete Grade 10 under any board.</li>
      </ul>
    ),
  },
  {
    question: "How does the online course works?",
    answer: (
      <p>
        After enrollment for any course students are given access online. The Students are given a unique username and
        password with a link to the course at the backend. You can log in at any time suitable for your convenience and
        read the course material with multiple choice questions.
      </p>
    ),
  },
  {
    question: "What is the difference between Certificate and Diploma Course?",
    answer: (
      <p>
        Diploma Course is an advanced level course whereas the Certificate level Course is the basic level course with
        contents that are not that meticulous. At the Diploma level Courses, you get to touch upon research modules,
        advanced course materials and case studies.
      </p>
    ),
  },
  {
    question: "Can one apply and enroll for two different courses at the same time?",
    answer: (
      <p>
        A student should enroll for a course of their choice at a time, however, one could also have access to another
        course one in due time.
      </p>
    ),
  },
  {
    question: "What is the duration of the course?",
    answer: (
      <p>
        Duration is mentioned on the site where the course is publicized. Duration varies from one course to another. It
        also is depends on the student on how long he or she takes to complete the course. If the stipulated time duration
        for any course is extended, we will contact you with further information. Students who exceed the time limit of
        completion, need to pay an amount of 3500 INR or 50 USD for extending the normal course duration.
      </p>
    ),
  },
  {
    question: "How do I land up with my first teaching job?",
    answer: (
      <>
        <p>
          On successful completion of the teacher training course and equipped with required competency to undertake
          teaching at any location it is advisable that you contact the guides at GTT Academy for expert guidance on the
          markets where you can teach. Depending on the field of interest you can actually apply and teach in a number of
          schools worldwide.
        </p>
        <p>
          The requirement for online teachers, Pre&amp; Primary teachers, ESL teachers, Councilor for young learners is at
          an all time high now. Our insider guide from GTT Academy helps our students to successfully respond to these new
          and ever increasing openings for our teachers. Schools and reputed institutions are now making an online
          platform available that connects tutors with students.
        </p>
      </>
    ),
  },
];

export default function FaqContent() {
  return (
    <section className="no-view-reveal bg-[#f5f8fc] py-16 sm:py-20">
      <AboutStickyLayout sidebar={<AboutCoursesSidebar />}>
        <div className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <h2 className="font-serif text-3xl font-bold text-[#05245b] sm:text-4xl">FAQ</h2>

          <div className="mt-7">
            <FaqAccordion items={faqs} />
          </div>

          <ApplyNowLink className="btn-brand-gradient mt-10 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-[0.04em]">
            Apply Now <ArrowRight size={18} />
            </ApplyNowLink>
        </div>
      </AboutStickyLayout>
    </section>
  );
}
