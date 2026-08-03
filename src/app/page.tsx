import About from "@/components/home/About";
import AcademyCoursesRange from "@/components/home/AcademyCoursesRange";
import AcademyDetails from "@/components/home/AcademyDetails";
import Branches from "@/components/home/Branches";
import BrochureEnquiry from "@/components/home/BrochureEnquiry";
import CertificateShowcase from "@/components/home/CertificateShowcase";
import Courses from "@/components/home/Courses";
import EnquiryForm from "@/components/home/EnquiryForm";
import FinalCta from "@/components/home/FinalCta";
import FloatingContact from "@/components/home/FloatingContact";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import TrustFeatures from "@/components/home/TrustFeatures";
import VideoShowcase from "@/components/home/VideoShowcase";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustFeatures />
      <About />
      <CertificateShowcase />
      <AcademyDetails />
      <AcademyCoursesRange />
      <VideoShowcase />
      <Courses />
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
