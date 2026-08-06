import type { Metadata } from "next";
import EcceCourseContent from "@/components/courses/EcceCourseContent";
import EcceHero from "@/components/courses/EcceHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Early Childhood Care and Education Online Course India | GTT Academy",
  description:
    "Early Childhood Care and Education (ECCE) at Global Teacher Training Academy (GTT Academy) — Online PG Diploma and Diploma courses for ages 0–6 with Apostille certification.",
};

export default function EarlyChildhoodCareAndEducationPage() {
  return (
    <main>
      <EcceHero />
      <EcceCourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
