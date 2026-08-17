import InfoPageContent from "@/components/layout/InfoPageContent";

const paragraphs = [
  "Opting to choose a career in the Pre and Primary sector in schools is a noble and wise decision. There is always a great demand for quality teachers across the world, especially in the pre and primary section of schools. Pre & Primary teachers prepare young minds to believe in themselves and work towards the direction of their goals.",
  "Global Teacher Training Academy (GTT Academy) offers future teaching professionals planning to make a career in the Pre and Primary education sector several options to teach young learners. They may work as Early childhood educator, Montessori teacher, Nursery teacher, Early childhood curriculum/instruction material developer, Course coordinator, Preschool supervisor and of course as a Pre and Primary school teacher.",
  "You'll receive your certificate on successful completion of the course. It is a globally recognized and certified program that enables the teacher to teach across many nations. The Apostille certificate displays your name, your certificate's unique ID number, date of completion, and the course details. At GTT Academy we provide the apostille Certificate from the Hague Convention for legalization which can save your valuable time and energy.",
  "The requirement for online teachers, Pre & Primary teachers, ESL teachers, counsellors for young learners and various other online teaching jobs is at an all time high now. Our insider guide from GTT Academy helps our students to successfully respond to these new and ever increasing openings for our teachers. Schools and reputed institutions are now making an online platform available that connects tutors with students. Our insider guide helps our students to successfully navigate and respond to these opportunities to yield optimum results.",
  "GTT Academy's insider guide gives a complete organisational overview on exploring different institutes and handling recruitment related issues. On approaching our Placement guide the trainee is given step by step guideline on the necessary documents, videos, teaching practices, resume preparation, documentation and other steps which will be required to make the job search easier.",
  "GTT Academy not only provides the modern teaching programs that are recognized globally but we make sure to provide you with necessary guidance and advice and help to shape your career ahead with our placement assistance. Please follow our insider guide to start your journey of teaching. Valuable suggestions from our Placement cell at the time of interview has proven to be of great use for our trainees.",
  "We at GTT Academy foster and nurture a supportive online community, by cultivating personal relationships with individual students, providing appropriate feedback and guidance to help them choose the right career option and organisation. Our able representatives from the placement cell will help guide our students by sharing leads, techniques and tips to realise their goals and missions.",
];

export default function JobOpportunitiesContent() {
  return (
    <InfoPageContent title="Job Opportunities & Placement Support">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 64)}>{paragraph}</p>
      ))}
    </InfoPageContent>
  );
}
