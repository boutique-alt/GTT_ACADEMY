import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";
import ContactHero from "@/components/contact/ContactHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Contact Us | GTT Academy",
  description:
    "Contact Us at Global Teacher Training Academy (GTT Academy) for online Pre and Primary, Montessori teacher training and nursery teacher training certificate courses.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
