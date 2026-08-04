import type { Metadata } from "next";
import ApplyNowContent from "@/components/apply-now/ApplyNowContent";
import ApplyNowHero from "@/components/apply-now/ApplyNowHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Apply Now | GTT Academy",
  description:
    "Apply Now at Global Teacher Training Academy (GTT Academy) for online Pre and Primary, Montessori teacher training and nursery teacher training certificate courses.",
};

export default function ApplyNowPage() {
  return (
    <main>
      <ApplyNowHero />
      <ApplyNowContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
