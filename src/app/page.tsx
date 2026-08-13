import dynamic from "next/dynamic";
import About from "@/components/home/About";
import Courses from "@/components/home/Courses";
import Hero from "@/components/home/Hero";
import TrustFeatures from "@/components/home/TrustFeatures";

const AcademyCoursesRange = dynamic(() => import("@/components/home/AcademyCoursesRange"));
const AcademyDetails = dynamic(() => import("@/components/home/AcademyDetails"));
const Branches = dynamic(() => import("@/components/home/Branches"));
const BrochureEnquiry = dynamic(() => import("@/components/home/BrochureEnquiry"));
const CertificateShowcase = dynamic(() => import("@/components/home/CertificateShowcase"));
const EnquiryForm = dynamic(() => import("@/components/home/EnquiryForm"));
const FinalCta = dynamic(() => import("@/components/home/FinalCta"));
const FloatingContact = dynamic(() => import("@/components/home/FloatingContact"));
const Gallery = dynamic(() => import("@/components/home/Gallery"));
const Stats = dynamic(() => import("@/components/home/Stats"));
const Testimonials = dynamic(() => import("@/components/home/Testimonials"));
const VideoShowcase = dynamic(() => import("@/components/home/VideoShowcase"));

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustFeatures />
      <About />
      <Courses />
      <CertificateShowcase />
      <AcademyDetails />
      <AcademyCoursesRange />
      <VideoShowcase />
      <Stats />
      <EnquiryForm />
      <Testimonials />
      <BrochureEnquiry />
      <Branches />
      <FinalCta />
      <Gallery />
      <FloatingContact />
    </main>
  );
}
