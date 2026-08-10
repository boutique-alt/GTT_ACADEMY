import type { Metadata } from "next";
import IeltsForTeachersCourseContent from "@/components/courses/IeltsForTeachersCourseContent";
import IeltsForTeachersHero from "@/components/courses/IeltsForTeachersHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "IELTS for Teachers | GTT Academy",
  description:
    "IELTS for Teachers at Global Teacher Training Academy (GTT Academy) — 6 month Online IELTS training for graduates with globally recognized certificate and exclusive transcript.",
};

export default function IeltsForTeachersPage() {
  return (
    <main>
      <IeltsForTeachersHero />
      <IeltsForTeachersCourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
