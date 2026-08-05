import type { Metadata } from "next";
import CoursePageHero from "@/components/courses/CoursePageHero";
import CoursesIndexContent from "@/components/courses/CoursesIndexContent";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Courses | GTT Academy",
  description:
    "Explore all Teacher Training, TEFL/TESOL, Specialized, and English Proficiency courses at Global Teacher Training Academy (GTT Academy).",
};

export default function CoursesPage() {
  return (
    <main>
      <CoursePageHero title="Courses" />
      <CoursesIndexContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
