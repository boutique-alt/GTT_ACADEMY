import type { Metadata } from "next";
import FranchiseContent from "@/components/info/FranchiseContent";
import InfoPageHero from "@/components/layout/InfoPageHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Franchise Opportunity | GTT Academy",
  description:
    "Franchise opportunity with Global Teacher Training Academy — partner with an established teacher training brand across India.",
};

export default function FranchisePage() {
  return (
    <main>
      <InfoPageHero
        title="Franchise Opportunity"
        image="/images/about-banner.png"
        imageAlt="GTT Academy franchise opportunity"
        quoteLines={["GROW", "WITH", "GTT", "ACADEMY"]}
      />
      <FranchiseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
