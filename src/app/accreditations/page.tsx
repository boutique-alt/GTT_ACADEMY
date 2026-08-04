import type { Metadata } from "next";
import AccreditationContent from "@/components/accreditations/AccreditationContent";
import AccreditationHero from "@/components/accreditations/AccreditationHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Accreditation | GTT Academy",
  description:
    "Know about Certification & Accreditation at Global Teacher Training Academy (GTT Academy). Apostille Certificate granted by MEA accepted across embassies and board schools in India and abroad.",
};

export default function AccreditationsPage() {
  return (
    <main>
      <AccreditationHero />
      <AccreditationContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
