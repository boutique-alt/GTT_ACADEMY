import { courseDetailSidebarGroups } from "@/data/site";
import { teacherCourseDetails } from "@/data/courses/course-sidebar";

export type CatalogCourse = {
  title: string;
  href: string;
  feeLines: string[];
  level?: string;
};

const feesByTitle: Record<string, string> = {
  "Pre and Primary Teacher Training with Practical Session": teacherCourseDetails.prePrimary.fees,
  "Montessori Teacher Training with Practical Session": teacherCourseDetails.montessori.fees,
  "Diploma in Teaching and Training": teacherCourseDetails.diplomaTeaching.fees,
  "Early Childhood Care and Education": teacherCourseDetails.ecce.fees,
  "Nursery Teacher Training With Practical Session": teacherCourseDetails.nursery.fees,
  "Educational Administration and Management": teacherCourseDetails.admin.fees,
  "Diploma in Child and Adolescent Counseling": teacherCourseDetails.counseling.fees,
  "Diploma in Child Psychology": teacherCourseDetails.psychology.fees,
  "Classroom Management Skill": teacherCourseDetails.classroomManagement.fees,
  "Teaching Grammar": teacherCourseDetails.teachingGrammar.fees,
  "Teaching Phonetics": teacherCourseDetails.teachingPhonetics.fees,
  "NLP for Students": teacherCourseDetails.nlpForStudents.fees,
  "Train the Trainer Program": teacherCourseDetails.trainTheTrainer.fees,
  "140 Hour TEFL Course Diploma with Practical Teaching Session": teacherCourseDetails.tefl140.fees,
  "200 Hour TESOL Course PG Diploma with Dual Specialisation and Practical Teaching Session":
    teacherCourseDetails.tesol200.fees,
  "400 Hour TESOL Course Masters with Practical Teaching Session": teacherCourseDetails.tesol400.fees,
  "IELTS for Teachers": teacherCourseDetails.ieltsForTeachers.fees,
  "Special Education": teacherCourseDetails.specialEducation.fees,
};

function toFeeLines(fees: string): string[] {
  return fees
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean);
}

export const coursesCatalogGroups = courseDetailSidebarGroups.map((group) => ({
  title: group.title,
  courses: group.courses.map(
    (course): CatalogCourse => ({
      title: course.title,
      href: course.href,
      feeLines: toFeeLines(feesByTitle[course.title] ?? "Contact counsellor for fees"),
    }),
  ),
}));
