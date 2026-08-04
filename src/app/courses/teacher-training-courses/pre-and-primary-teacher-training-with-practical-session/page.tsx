import type { Metadata } from "next";
import CoursePageHero from "@/components/courses/CoursePageHero";
import PrePrimaryCourseContent from "@/components/courses/PrePrimaryCourseContent";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";
import { prePrimaryCourse } from "@/data/courses/pre-and-primary";

export const metadata: Metadata = {
  title: "Pre and Primary Teacher Training Online Certificate Course | GTT Academy",
  description:
    "Pre and Primary Teacher Training with Practical Session at Global Teacher Training Academy (GTT Academy). Online and Distance PG Diploma, Diploma and Certificate courses with Apostille certification.",
};

export default function PrePrimaryTeacherTrainingPage() {
  return (
    <main>
      <CoursePageHero title={prePrimaryCourse.title} />
      <PrePrimaryCourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
