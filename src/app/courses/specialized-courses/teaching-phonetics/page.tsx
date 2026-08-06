import type { Metadata } from "next";
import TeachingPhoneticsCourseContent from "@/components/courses/TeachingPhoneticsCourseContent";
import TeachingPhoneticsHero from "@/components/courses/TeachingPhoneticsHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Teaching Phonetics | GTT Academy",
  description:
    "Teaching Phonetics at Global Teacher Training Academy (GTT Academy) — 4 month Online specialized course with Apostille certification.",
};

export default function TeachingPhoneticsPage() {
  return (
    <main>
      <TeachingPhoneticsHero />
      <TeachingPhoneticsCourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
