import type { Metadata } from "next";
import SpecialEducationCourseContent from "@/components/courses/SpecialEducationCourseContent";
import SpecialEducationHero from "@/components/courses/SpecialEducationHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Special Education Teacher Training with Practical Session | GTT Academy",
  description:
    "Diploma and PG Diploma in Special Education at Global Teacher Training Academy (GTT Academy) — train parents, school teachers and shadow teachers in developmental disorders, PECS, AAC, behaviour management and inclusive classroom strategies with Apostille certification.",
};

export default function PgDiplomaInSpecialEducationPage() {
  return (
    <main>
      <SpecialEducationHero />
      <SpecialEducationCourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
