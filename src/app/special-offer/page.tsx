import type { Metadata } from "next";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";
import SpecialOfferContent from "@/components/special-offer/SpecialOfferContent";
import SpecialOfferHero from "@/components/special-offer/SpecialOfferHero";

export const metadata: Metadata = {
  title: "Independence Day Special Offer | GTT Academy",
  description:
    "This Independence Day, let education be our freedom. Avail special discounts across GTT Academy teacher training courses and take the next step towards becoming a confident, future-ready teacher.",
};

export default function SpecialOfferPage() {
  return (
    <main>
      <SpecialOfferHero />
      <SpecialOfferContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
