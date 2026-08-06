import type { Metadata } from "next";
import Tefl140CourseContent from "@/components/courses/Tefl140CourseContent";
import Tefl140Hero from "@/components/courses/Tefl140Hero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "140 Hour TEFL Course Diploma with Practical Teaching Session | GTT Academy",
  description:
    "140 Hour TEFL Course Diploma with Practical Teaching Session at Global Teacher Training Academy (GTT Academy) — Online TEFL training with Apostille certification.",
};

export default function Tefl140HourCoursePage() {
  return (
    <main>
      <Tefl140Hero />
      <Tefl140CourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
