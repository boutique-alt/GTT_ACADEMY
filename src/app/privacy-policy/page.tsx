import type { Metadata } from "next";
import PrivacyPolicyContent from "@/components/info/PrivacyPolicyContent";
import InfoPageHero from "@/components/layout/InfoPageHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Privacy Policy | GTT Academy",
  description: "Privacy policy of Global Teacher Training Academy covering cookies, analytics and how we handle your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <InfoPageHero title="Privacy Policy" image="/images/contact-hero.jpg" imageAlt="GTT Academy privacy policy" />
      <PrivacyPolicyContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
