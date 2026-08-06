import type { Metadata } from "next";
import DiplomaTeachingCourseContent from "@/components/courses/DiplomaTeachingCourseContent";
import DiplomaTeachingHero from "@/components/courses/DiplomaTeachingHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Diploma in Teaching and Training Online Certificate Course | GTT Academy",
  description:
    "Diploma in Teaching and Training at Global Teacher Training Academy (GTT Academy) — a 12-month online program for teacher trainers, curriculum developers and examiners with Apostille certification.",
};

export default function DiplomaTeachingAndTrainingPage() {
  return (
    <main>
      <DiplomaTeachingHero />
      <DiplomaTeachingCourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
