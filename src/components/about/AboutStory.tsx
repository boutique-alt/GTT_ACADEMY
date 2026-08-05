import { ArrowRight } from "lucide-react";
import AboutCoursesSidebar from "@/components/about/AboutCoursesSidebar";
import AboutEditMarquee from "@/components/about/AboutEditMarquee";
import AboutStickyLayout from "@/components/about/AboutStickyLayout";
import ApplyNowLink from "@/components/ui/ApplyNowLink";
const paragraphs = [
  "Global Teacher Training Academy (GTT ACADEMY) is not just another name in the gamut of teacher training institutes available in the Teaching and Training Industry but it's a movement to inspire, educate and motivate the class of individuals whom we know as teachers. The global certificate is accepted across all countries as our certificate does not only boast of national and international accreditation but is also legalized through Central Government attestation and apostille which makes the certificate accepted across all schools in India and abroad. The certificate is verified, validated and attested by the central Government and it can be used to get permanent work visa across 130 countries. The Certificate Apostille vouches the credibility and authenticity of the degree that is provided by us. This formal validation saves the time for any additional certification from any embassy to get a work visa in any country.",
  "At our core we believe that if we want a sweep of refinement in any education system we must make competent teachers and to create that we need high quality teacher training programs which focuses on developing people. It is not a hidden fact in the educational system today we significantly lack qualified teachers who not just have a degree but also the skills to nurture minds of children in a holistic manner. We are a team of dedicated professionals with a mission to optimize individual teaching potential for those who desire to become qualified teachers.",
  "We understand how important it is for young minds to have trained teachers in the classroom. They need excellent teachers and are relying on them to get the proper education they deserve. The way teachers approach their curriculum and class stratagems is a facilitator for student knowledge retention and engagement and our well researched and modern course syllabus enable our graduates to mould themselves in any teaching scenario with panache. We are also passionate about giving you the ability to exceed your own teaching expectations that you can be proud of. All of our courses are career focused, designed to equip you with the technical skills and academic knowledge that industry wants and needs.",
  "Our teacher training programs are suitable for graduates, non-graduates currently working in the education industry or to any qualified professional with a passion to teach. The course fees are economical and easily affordable and the online mode of learning makes it accessible by all.",
  "We are here, to help train you to teach. We endeavour to unravel your self-confidence and strengthen your skillsets so you can become the best educator as possible and a valuable, qualified asset to society. We are dedicated to help develop effective, confident and happy teachers who are competently able to demonstrate reflective classroom skills and will embrace their career for a long period of time, providing an exceptional education to the children and young people they work with. The popularity of our courses is attributed to our brilliance in the field of teacher training, and the distinctive elements of our programme.",
];

export default function AboutStory() {
  return (
    <section className="no-view-reveal bg-[#f5f8fc] py-16 sm:py-20">
      <AboutStickyLayout sidebar={<AboutCoursesSidebar />} mobileContentFirst>
        <div className="space-y-8">
          <AboutEditMarquee />

          <div className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <h2 className="font-serif text-3xl font-bold text-[#05245b] sm:text-4xl">About Us</h2>

            <div className="mt-7 space-y-5 text-[15px] leading-7 text-slate-600">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 64)}>{paragraph}</p>
              ))}
            </div>

            <ApplyNowLink className="btn-brand-gradient mt-10 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-[0.04em]">
              Apply Now <ArrowRight size={18} />
            </ApplyNowLink>
          </div>
        </div>
      </AboutStickyLayout>
    </section>
  );
}
