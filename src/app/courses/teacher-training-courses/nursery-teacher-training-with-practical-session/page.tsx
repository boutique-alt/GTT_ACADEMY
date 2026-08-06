import type { Metadata } from "next";
import NurseryCourseContent from "@/components/courses/NurseryCourseContent";
import NurseryHero from "@/components/courses/NurseryHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Nursery Teacher Training Course Online in India - GTT Academy",
  description:
    "Nursery Teacher Training With Practical Session at Global Teacher Training Academy (GTT Academy) — Certificate, Diploma and PG Diploma via Online/Distance with Apostille certification.",
};

export default function NurseryTeacherTrainingPage() {
  return (
    <main>
      <NurseryHero />
      <NurseryCourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
