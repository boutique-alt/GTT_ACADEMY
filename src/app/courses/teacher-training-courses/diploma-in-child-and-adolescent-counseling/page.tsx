import type { Metadata } from "next";
import CounselingCourseContent from "@/components/courses/CounselingCourseContent";
import CounselingHero from "@/components/courses/CounselingHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Diploma in Child and Adolescent Counseling | GTT Academy",
  description:
    "Diploma in Child and Adolescent Counseling at Global Teacher Training Academy (GTT Academy) — Online and Distance course for teachers, parents and caregivers with Apostille certification.",
};

export default function DiplomaInChildAndAdolescentCounselingPage() {
  return (
    <main>
      <CounselingHero />
      <CounselingCourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
