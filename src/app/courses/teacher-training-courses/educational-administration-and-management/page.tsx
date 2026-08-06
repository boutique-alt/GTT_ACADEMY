import type { Metadata } from "next";
import AdminCourseContent from "@/components/courses/AdminCourseContent";
import AdminHero from "@/components/courses/AdminHero";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Educational Administration and Management Online Course | GTT Academy Pvt Ltd",
  description:
    "Educational Administration and Management at Global Teacher Training Academy (GTT Academy) — Online PG Diploma and Diploma for school leaders and administrators with Apostille certification.",
};

export default function EducationalAdministrationAndManagementPage() {
  return (
    <main>
      <AdminHero />
      <AdminCourseContent />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
