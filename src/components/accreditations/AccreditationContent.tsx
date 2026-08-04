import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AboutCoursesSidebar from "@/components/about/AboutCoursesSidebar";
import AboutStickyLayout from "@/components/about/AboutStickyLayout";
import ApplyNowLink from "@/components/ui/ApplyNowLink";
const intro = [
  "The world of education is often found to be spoiled by questionable certification of academic courses. In order to draw a line between genuine, bona fide qualifications and those that are fabricated for commercial gain, it is imperative that education companies provide accredited certification.",
  "GTT Academy is the only platform where teachers are facilitated with such a badge of authenticity. Global Teacher Training Academy provides an Apostille Certificate granted by the MEA (Ministry of External Affairs) after successful completion of its courses. The Apostille certificate is accepted across all embassies worldwide and therefore across all board schools in India and abroad.",
];

const body = [
  "The apostille certificate authenticates the credibility of personal, educational and commercial documents with the help of a signature, seal or stamp so that they get accepted when presented in another country. An Apostille contains a computer-generated unique identification number to maintain records online. It also helps to allow the concerned authorities to check the authenticity with ease. After receiving this Apostille from the MEA, there is no need for any added certification from the embassy.",
  "An Apostille can only be obtained for documents issued in one country party to the Apostille convention and can be used in another country that is also a party to the same convention. India is a signatory to the Apostille convention and had been delegated with the same authorities for authentication of documents for both Attestation and Apostille.",
  "In simple words, Apostille is an international attestation that is accepted across 112 countries, and most of the western world recognises the Apostille Service. Therefore you can apply for a teacher's job across all board schools in both India and abroad with this Apostille certificate with confidence.",
  "The Apostille certification ensures the standard of the academic processes and showcases it to the employers. All our courses fall under the Apostille certification to ensure a higher level of learning for the students.",
  "Global Teacher Training Academy helps teachers embark on a career that imbibes the best teaching methodologies and strategies that help them aim high in their teaching profession. It is devoted to design tailor-made teacher training courses and vows to exhibit the high standard of training and likely courses that it promises to offer.",
  "On successful completion of the course, you shall be provided with an Apostille certificate granted by MEA (Ministry of External Affairs) which will speak about your eligibility in this field of global teaching. Steps that are involved in to get an Apostille Certificate includes Notary Attestation, Home Department Attestation, HRD Attestation, SMD Attestation, Chamber of Commerce Attestation and MEA Attestation. It is quite hard for an individual to do the apostille process on their own as it's not a direct process and there are different steps involved for each document type. At Global Teacher Training Academy, our teachers do not have to go through the tedious and complicated process of getting their certificates attested and we save your time and effort by making your journey hassle-free.",
  "A transcript will also be provided to the students showcasing the content of the study. It lists the modules covered in the program and helps teachers while applying for a teacher's job across all board schools both in India and abroad.",
  "You can be assured that when you choose an English Proficiency Course from Global Teacher Training Academy, you are achieving the highest quality English Language Training and recognition. On successful completion of each course, you will be awarded with a certificate acknowledging the achievement of a specified level of proficiency in speaking, listening, reading and writing English for a specified purpose.",
];

export default function AccreditationContent() {
  return (
    <section className="no-view-reveal bg-[#f5f8fc] py-16 sm:py-20">
      <AboutStickyLayout sidebar={<AboutCoursesSidebar />}>
        <div className="rounded-[1.5rem] border border-slate-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <h2 className="font-serif text-3xl font-bold text-[#05245b] sm:text-4xl">
            CERTIFICATION &amp; ACCREDITATION
          </h2>

          <div className="mt-7 space-y-5 text-[15px] leading-7 text-slate-600">
            {intro.map((paragraph) => (
              <p key={paragraph.slice(0, 64)}>{paragraph}</p>
            ))}

            <div className="flex justify-center py-4">
              <Image
                src="/images/accreditations-certificate.png"
                alt="Sample certificate from GTT Academy"
                width={424}
                height={591}
                className="h-auto w-full max-w-[424px] object-contain"
              />
            </div>

            {body.map((paragraph) => (
              <p key={paragraph.slice(0, 64)}>{paragraph}</p>
            ))}
          </div>

          <ApplyNowLink className="btn-brand-gradient mt-10 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-[0.04em]">
            Apply Now <ArrowRight size={18} />
            </ApplyNowLink>
        </div>
      </AboutStickyLayout>
    </section>
  );
}
