import type { Metadata } from "next";
import ClassroomManagementCourseContent from "@/components/courses/ClassroomManagementCourseContent";
import ClassroomManagementHero from "@/components/courses/ClassroomManagementHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Classroom Management Skill | GTT Academy",
  description:
    "Classroom Management Skill at Global Teacher Training Academy (GTT Academy) — 4 month Online specialized course with Apostille certification.",
};

export default function ClassroomManagementSkillPage() {
  return (
    <main>
      <ClassroomManagementHero />
      <ClassroomManagementCourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
