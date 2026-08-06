import type { Metadata } from "next";
import TeachingGrammarCourseContent from "@/components/courses/TeachingGrammarCourseContent";
import TeachingGrammarHero from "@/components/courses/TeachingGrammarHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Teaching Grammar | GTT Academy",
  description:
    "Teaching Grammar at Global Teacher Training Academy (GTT Academy) — 4 month Online specialized course with Apostille certification.",
};

export default function TeachingGrammarPage() {
  return (
    <main>
      <TeachingGrammarHero />
      <TeachingGrammarCourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
