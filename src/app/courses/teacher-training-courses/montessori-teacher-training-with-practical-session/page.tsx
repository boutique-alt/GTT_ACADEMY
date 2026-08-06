import type { Metadata } from "next";
import MontessoriCourseContent from "@/components/courses/MontessoriCourseContent";
import MontessoriHero from "@/components/courses/MontessoriHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Montessori Teacher Training Course Online in India | GTT Academy",
  description:
    "Montessori Teacher Training with Practical Session at Global Teacher Training Academy (GTT Academy) — Online and Distance Montessori teacher training with Apostille certification.",
};

export default function MontessoriTeacherTrainingPage() {
  return (
    <main>
      <MontessoriHero />
      <MontessoriCourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
