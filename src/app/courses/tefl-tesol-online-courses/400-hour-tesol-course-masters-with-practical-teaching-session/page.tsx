import type { Metadata } from "next";
import Tesol400CourseContent from "@/components/courses/Tesol400CourseContent";
import Tesol400Hero from "@/components/courses/Tesol400Hero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "400 Hour TESOL Course Masters with Practical Teaching Session | GTT Academy",
  description:
    "400 Hour TESOL Course Masters with Practical Teaching Session at Global Teacher Training Academy (GTT Academy) — Online TESOL Masters training with Apostille certification.",
};

export default function Tesol400HourCoursePage() {
  return (
    <main>
      <Tesol400Hero />
      <Tesol400CourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
