import type { Metadata } from "next";
import CareerContent from "@/components/career/CareerContent";
import CareerHero from "@/components/career/CareerHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Career Opportunities | GTT Academy",
  description:
    "Know about Career Opportunities at Global Teacher Training Academy (GTT Academy) for online Pre and Primary, Montessori teacher training and nursery teacher training certificate courses.",
};

export default function CareerPage() {
  return (
    <main>
      <CareerHero />
      <CareerContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
