import CourseBulletList from "@/components/courses/CourseBulletList";
import InfoPageContent from "@/components/layout/InfoPageContent";

const tutorSupport = [
  "The experienced trainers of GTT Academy assess and evaluate the progress of each and every student and provide feedback and suggestions accordingly so that each individual student may work on both their strength and weakness.",
  "The trainers also assess the candidates to point out the fields in which they need to improve such as practice-teaching or the understanding of a particular topic.",
  "The trainers guide the students extensively in completing their assigned projects. If, while completing the project a student faces a problem, he or she can get in touch with the trainer who will help the student immediately by providing tips on the subject. Students can contact their tutor from Monday to Sunday between 10 A.M to 7:30 pm by phone, email.",
];

const assessment = [
  "The trainees enrolling in any of the courses of GTT Academy can expect complete guidance from the experienced tutors who are committed to helping the trainees to achieve their learning goals. Experienced tutors provide great support to the trainees and guide them through all the aspects of teaching, giving valuable advice in every step of the way. They extend their tutoring support by sharing relevant information and answering questions related to the course content.",
  "Tutors take help of the wide variety of methods or tools that educators use to evaluate, measure, and document the academic readiness, learning progress, skill acquisition, or educational needs of students.",
  "At the GTT Academy we have experienced tutors that help shape the learning curve of the learners.",
  "The assessments actually help trainees understand exactly where they are lacking and identify the room for change. Once the assessments are well documented and sent to learners, they will be awarded a globally recognized certificate that will fetch a lot of new job opportunities globally. Learners will be able to teach in an internationally accepted environment and gain recognition.",
  "A lot of importance is given on the evaluation process and the tutors take a maximum of 7 to 10 days to evaluate the assignments. The trainees can expect a thorough evaluation in the form of errors being pointed out along with encouraging remarks which boost their confidence level.",
];

export default function TutorSupportContent() {
  return (
    <InfoPageContent title="Tutor Support & Assessment">
      {tutorSupport.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
      {assessment.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
      <p>
        <span className="font-semibold text-[#05245b]">Note: </span>
        The course material can be accessed and read online or students can receive the study materials in hand for
        Distance mode. It is recommended to progress phase wise. The next assessment (whether it be a test or assignment)
        is not opened until the previous one has been completed successfully.
      </p>
      <CourseBulletList
        items={[
          "Tutor support available Monday to Sunday, 10:00 A.M. to 7:30 P.M.",
          "Contact your tutor by phone or email for queries and project guidance",
          "Assignments are evaluated within 7 to 10 days",
        ]}
      />
    </InfoPageContent>
  );
}
