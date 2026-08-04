import type { Metadata } from "next";
import ThankYouMessage from "@/components/thank-you/ThankYouMessage";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Thank You | GTT Academy",
  description: "Thank You for contacting us at GTT Academy. We will get back to you soon with your requirement.",
};

export default function ThankYouPage() {
  return (
    <main>
      <ThankYouMessage />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
