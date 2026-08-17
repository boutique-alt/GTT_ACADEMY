import type { Metadata } from "next";
import BlogContent from "@/components/info/BlogContent";
import InfoPageHero from "@/components/layout/InfoPageHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Blogs | GTT Academy",
  description:
    "GTT Academy blog on Montessori, child psychology, pre and primary teacher training and building a teaching career.",
};

export default function BlogPage() {
  return (
    <main>
      <InfoPageHero
        title="Blogs"
        image="/images/about-banner.png"
        imageAlt="GTT Academy blogs"
        quoteLines={["INSIGHTS", "FOR", "TODAY'S", "TEACHERS"]}
      />
      <BlogContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
