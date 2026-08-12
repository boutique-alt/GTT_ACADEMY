import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AboutCoursesSidebar from "@/components/about/AboutCoursesSidebar";
import AboutStickyLayout from "@/components/about/AboutStickyLayout";
import CourseBulletList from "@/components/courses/CourseBulletList";
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

const mofaParagraphs = [
  "For students planning to study, work or build their careers in the UAE and other Middle Eastern countries, attestation of educational documents can be an important requirement. In the middle east, documents issued outside the country may need to go through the prescribed authentication and Ministry of Foreign Affairs (MOFA) attestation process before they can be used for certain official purposes.",
  "MOFA attestation helps verify the authenticity of official documents and their seals and signatures, making it an important step when educational certificates need to be presented to employers, educational institutions or government authorities.",
  "At GTT Academy, we understand that completing document authentication after finishing a course can be an additional responsibility for students planning their careers overseas.",
  "That is why we provide MEA Apostille for eligible certificates issued to our students.",
  "For students who subsequently need to obtain MOFA attestation independently, having the required MEA authentication already completed in India can make the process easier and more convenient, as it completes an important Indian-side stage of the document-authentication process before the student proceeds with the applicable MOFA attestation.",
];

const equivalencyParagraphs = [
  "Different countries have different education systems and qualification frameworks. As a result, students may be asked to have their qualifications evaluated, recognised, compared or assessed before they can be used for purposes such as higher education, employment, professional licensing or immigration.",
  "The terminology and process vary from country to country. It may be referred to as equivalency, credential evaluation, qualification recognition, or a Statement of Comparability.",
  "Depending on the country and purpose, an evaluation may consider:",
];

const equivalencyItems = [
  "Level and duration of the programme",
  "Subjects and course content",
  "Academic transcripts or marksheets",
  "Marks and grades obtained",
  "Authenticity and verification of documents",
  "Breakdown of course hours and components",
];

const wesParagraphs = [
  "For students planning to use their qualifications in the USA or Canada, credential evaluation may be an important part of the process. World Education Services (WES) is one of the recognised organisations that evaluates international educational credentials and provides reports comparing them with educational standards in the USA or Canada.",
  "Whether a student is planning to pursue opportunities in the USA, Canada, UK, Australia, the Middle East or another destination, the exact documentation and recognition requirements will depend on the country, qualification and purpose of the application.",
  "Depending on the purpose, WES evaluations may be used for higher education, employment, professional licensing or immigration. In Canada, WES is also one of the organisations designated by Immigration, Refugees and Citizenship Canada (IRCC) to provide Educational Credential Assessments (ECAs) for applicable immigration purposes.",
];

const marksheetParagraphs = [
  "At GTT Academy, we understand that our students may have different plans for using their qualifications in India and overseas.",
  "Therefore, marksheets are available on request for eligible courses.",
  "We can provide relevant course and assessment details while keeping in mind the documentation and qualification-recognition requirements of the country and the purpose for which the student intends to use the qualification.",
];

const sectionHeadingClass = "font-serif text-xl font-bold text-[#05245b] sm:text-2xl";

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

            <div className="space-y-5 pt-4">
              <h3 className={sectionHeadingClass}>
                MOFA Attestation: An Important Step for Using Your Certificate across the Middle East
              </h3>
              {mofaParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 64)}>{paragraph}</p>
              ))}
            </div>

            <div className="space-y-5 pt-4">
              <h3 className={sectionHeadingClass}>Equivalency Documents</h3>
              {equivalencyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 64)}>{paragraph}</p>
              ))}
              <CourseBulletList items={equivalencyItems} />
              <p>The exact requirements depend on the country, qualification and purpose of the application.</p>
            </div>

            <div className="space-y-5 pt-4">
              <h3 className={sectionHeadingClass}>ECCE and WES Evaluation</h3>
              {wesParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 64)}>{paragraph}</p>
              ))}
            </div>

            <div className="space-y-5 pt-4">
              <h3 className={sectionHeadingClass}>Marksheets Available on Request</h3>
              {marksheetParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 64)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <ApplyNowLink className="btn-brand-gradient mt-10 inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold tracking-[0.04em]">
            Apply Now <ArrowRight size={18} />
          </ApplyNowLink>
        </div>
      </AboutStickyLayout>
    </section>
  );
}
