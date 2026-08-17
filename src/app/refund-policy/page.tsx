import type { Metadata } from "next";
import RefundContent from "@/components/info/RefundContent";
import InfoPageHero from "@/components/layout/InfoPageHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Refund Policy | GTT Academy",
  description: "Refund policy of Global Teacher Training Academy — course fees are non-refundable.",
};

export default function RefundPage() {
  return (
    <main>
      <InfoPageHero title="Refund Policy" image="/images/contact-hero.jpg" imageAlt="GTT Academy refund policy" />
      <RefundContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
