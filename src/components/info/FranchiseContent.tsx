import CourseBulletList from "@/components/courses/CourseBulletList";
import InfoPageContent from "@/components/layout/InfoPageContent";

const intro = [
  "Global Teacher Training Academy (GTT Academy) is seeking interested partners across major cities in India for franchisee opportunities. Apply for a franchise and get a chance to become a part of this 16 years of successful journey.",
  "GTT Academy's learner centric courses are considered one of the best in the educational industries. Our path to success has been broadening and growing significantly year after year despite the numerous changes of economic situations throughout the world. The demand for teaching jobs is always on the rise in the global market, therefore, the investments for the Global Teacher Training Academy remain stable everywhere. This makes investing into GTT Academy more reliable with a greater ROI.",
  "With 16 years of experience GTT Academy has gained a significant amount of market knowledge and experience. GTT Academy branches are well spread across India. GTT Academy always looks for an opportunity to tie up with established pre & primary schools, Montessori schools, language schools or any other professional institutes to strengthen and expand the network globally.",
];

const benefits = [
  "If you are an investor, you do not have to take the burden of establishing a brand as GTT Academy is already an established name in the field of teacher training. Our 16 years of experience has rewarded us with recognition of qualifications.",
  "All our teachers are provided with certifications which are issued with an Apostille stamp from the MEA (Ministry of External Affairs) after successful completion of courses.",
  "GTT Academy launches centralised marketing campaigns which cover and provide benefits to all franchisees; therefore, the cost of promotion will be less for the franchises.",
];

export default function FranchiseContent() {
  return (
    <InfoPageContent title="Franchise Opportunity">
      {intro.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
      <h3 className="font-serif text-xl font-bold text-[#05245b] sm:text-2xl">
        Benefits of becoming a part of GTT Academy Franchise
      </h3>
      <CourseBulletList items={benefits} />
      <p>
        GTT Academy franchise charges are not too high and include full commitment and support from the organisation, as
        it believes that both mutual and beneficial partnership between both the organisations are important to grow as
        a GTT Academy family and share the success together.
      </p>
      <p>
        For any more information on GTT Academy franchises please feel free to reach us at{" "}
        <a href="mailto:enquiry@globalteachersacademy.com" className="font-semibold text-[#0045bc] hover:underline">
          enquiry@globalteachersacademy.com
        </a>{" "}
        or Call / WhatsApp us at{" "}
        <a href="tel:9674923512" className="font-semibold text-[#0045bc] hover:underline">
          9674923512
        </a>
        .
      </p>
    </InfoPageContent>
  );
}
