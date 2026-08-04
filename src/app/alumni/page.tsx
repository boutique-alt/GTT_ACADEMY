import type { Metadata } from "next";
import AlumniContent from "@/components/alumni/AlumniContent";
import AlumniHero from "@/components/alumni/AlumniHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Alumni | GTT Academy",
  description:
    "Know about Alumni at Global Teacher Training Academy (GTT Academy) for online Pre and Primary, Montessori teacher training and nursery teacher training certificate courses.",
};

export default function AlumniPage() {
  return (
    <main>
      <AlumniHero />
      <AlumniContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
