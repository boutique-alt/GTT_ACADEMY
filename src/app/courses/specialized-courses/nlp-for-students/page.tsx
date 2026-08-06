import type { Metadata } from "next";
import NlpForStudentsCourseContent from "@/components/courses/NlpForStudentsCourseContent";
import NlpForStudentsHero from "@/components/courses/NlpForStudentsHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "NLP for Students | GTT Academy",
  description:
    "NLP for Students at Global Teacher Training Academy (GTT Academy) — 4 month Online specialized course with Apostille certification.",
};

export default function NlpForStudentsPage() {
  return (
    <main>
      <NlpForStudentsHero />
      <NlpForStudentsCourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
