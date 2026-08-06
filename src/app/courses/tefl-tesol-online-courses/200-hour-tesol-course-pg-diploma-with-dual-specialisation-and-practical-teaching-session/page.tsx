import type { Metadata } from "next";
import Tesol200CourseContent from "@/components/courses/Tesol200CourseContent";
import Tesol200Hero from "@/components/courses/Tesol200Hero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title:
    "200 Hour TESOL Course PG Diploma with Dual Specialisation and Practical Teaching Session | GTT Academy",
  description:
    "200 Hour TESOL Course PG Diploma with Dual Specialisation and Practical Teaching Session at Global Teacher Training Academy (GTT Academy) — Online TESOL training with Apostille certification.",
};

export default function Tesol200HourCoursePage() {
  return (
    <main>
      <Tesol200Hero />
      <Tesol200CourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
