import type { Metadata } from "next";
import TutorSupportContent from "@/components/info/TutorSupportContent";
import InfoPageHero from "@/components/layout/InfoPageHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Tutor Support & Assessment | GTT Academy",
  description:
    "Tutor support and assessment at Global Teacher Training Academy — guidance from Monday to Sunday with assignment evaluation in 7 to 10 days.",
};

export default function TutorSupportPage() {
  return (
    <main>
      <InfoPageHero
        title="Tutor Support & Assessment"
        image="/images/faq-hero.jpg"
        imageAlt="Tutor support at GTT Academy"
        quoteLines={["GUIDED", "LEARNING", "EVERY", "STEP"]}
      />
      <TutorSupportContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
