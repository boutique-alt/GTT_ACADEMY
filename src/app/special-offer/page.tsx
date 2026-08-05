import type { Metadata } from "next";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";
import SpecialOfferContent from "@/components/special-offer/SpecialOfferContent";
import SpecialOfferHero from "@/components/special-offer/SpecialOfferHero";

export const metadata: Metadata = {
  title: "Special Offer | GTT Academy",
  description:
    "Know about Special Offer at Global Teacher Training Academy (GTT Academy) for online Pre and Primary, Montessori teacher training and nursery teacher training certificate courses.",
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
