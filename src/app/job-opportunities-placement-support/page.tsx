import type { Metadata } from "next";
import JobOpportunitiesContent from "@/components/info/JobOpportunitiesContent";
import InfoPageHero from "@/components/layout/InfoPageHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Job Opportunities & Placement Support | GTT Academy",
  description:
    "Job opportunities and placement support at Global Teacher Training Academy for pre and primary, Montessori, ESL and online teaching careers.",
};

export default function JobOpportunitiesPage() {
  return (
    <main>
      <InfoPageHero
        title="Job Opportunities & Placement Support"
        image="/images/career-hero-banner.jpg"
        imageAlt="Placement support at GTT Academy"
        quoteLines={["YOUR", "TEACHING", "CAREER", "STARTS HERE"]}
      />
      <JobOpportunitiesContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
