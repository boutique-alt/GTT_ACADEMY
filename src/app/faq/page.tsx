import type { Metadata } from "next";
import FaqContent from "@/components/faq/FaqContent";
import FaqHero from "@/components/faq/FaqHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "FAQs | GTT Academy",
  description:
    "Know about FAQs at Global Teacher Training Academy (GTT Academy) for online Pre and Primary, Montessori teacher training and nursery teacher training certificate courses.",
};

export default function FaqPage() {
  return (
    <main>
      <FaqHero />
      <FaqContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
