import type { Metadata } from "next";
import PsychologyCourseContent from "@/components/courses/PsychologyCourseContent";
import PsychologyHero from "@/components/courses/PsychologyHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Diploma in Child Psychology | GTT Academy",
  description:
    "Diploma in Child Psychology at Global Teacher Training Academy (GTT Academy) — Online and Distance course covering child development, psychiatry and safety with Apostille certification.",
};

export default function DiplomaInChildPsychologyPage() {
  return (
    <main>
      <PsychologyHero />
      <PsychologyCourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
