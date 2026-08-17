import type { Metadata } from "next";
import PaymentOptionsContent from "@/components/info/PaymentOptionsContent";
import InfoPageHero from "@/components/layout/InfoPageHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Payment Options | GTT Academy",
  description:
    "Payment options at Global Teacher Training Academy — credit/debit card, PayPal, bank transfer, UPI and CCAvenue.",
};

export default function PaymentPage() {
  return (
    <main>
      <InfoPageHero
        title="Payment Options"
        image="/images/contact-hero.jpg"
        imageAlt="GTT Academy payment options"
        quoteLines={["FLEXIBLE", "PAYMENT", "OPTIONS"]}
      />
      <PaymentOptionsContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
