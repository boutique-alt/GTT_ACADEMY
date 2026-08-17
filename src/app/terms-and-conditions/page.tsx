import type { Metadata } from "next";
import TermsContent from "@/components/info/TermsContent";
import InfoPageHero from "@/components/layout/InfoPageHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Terms and Conditions | GTT Academy",
  description:
    "Terms and conditions for using the Global Teacher Training Academy website, courses, installment payments and services.",
};

export default function TermsPage() {
  return (
    <main>
      <InfoPageHero title="Terms and Conditions" image="/images/contact-hero.jpg" imageAlt="GTT Academy terms and conditions" />
      <TermsContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
