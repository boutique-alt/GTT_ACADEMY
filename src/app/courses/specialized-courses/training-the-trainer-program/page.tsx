import type { Metadata } from "next";
import TrainTheTrainerCourseContent from "@/components/courses/TrainTheTrainerCourseContent";
import TrainTheTrainerHero from "@/components/courses/TrainTheTrainerHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Train the Trainer Program | GTT Academy",
  description:
    "Train the Trainer course at Global Teacher Training Academy (GTT Academy) — 8 month Online programme in facilitation, TNA, feedback and high-impact training delivery with Apostille certification.",
};

export default function TrainTheTrainerPage() {
  return (
    <main>
      <TrainTheTrainerHero />
      <TrainTheTrainerCourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
