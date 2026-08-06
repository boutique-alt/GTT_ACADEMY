import type { Metadata } from "next";
import PrePrimaryCourseContent from "@/components/courses/PrePrimaryCourseContent";
import PrePrimaryHero from "@/components/courses/PrePrimaryHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Pre and Primary Teacher Training Online Certificate Course | GTT Academy",
  description:
    "Pre and Primary Teacher Training with Practical Session at Global Teacher Training Academy (GTT Academy) for online Pre and Primary, Montessori teacher training and nursery teacher training certificate courses.",
};

export default function PrePrimaryTeacherTrainingPage() {
  return (
    <main>
      <PrePrimaryHero />
      <PrePrimaryCourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
