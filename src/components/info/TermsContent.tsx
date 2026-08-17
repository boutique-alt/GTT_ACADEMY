import InfoPageContent from "@/components/layout/InfoPageContent";

const headingClass = "font-serif text-xl font-bold text-[#05245b] sm:text-2xl";
const linkClass = "font-semibold text-[#0045bc] hover:underline";

export default function TermsContent() {
  return (
    <InfoPageContent title="Terms and Conditions" showApply={false}>
      <h3 className={headingClass}>About the Information on this website</h3>
      <p>
        We always try to make sure that all the information collected for this website is accurate and complete at the
        same time, but some of the information are provided by third parties, therefore, we are unable to verify the
        accuracy and authenticity of those information for this website. We certainly are not responsible for any
        inaccurate information on this website supplied by you or any other website or by any other person.
      </p>

      <h3 className={headingClass}>Your usage of this website</h3>
      <p>
        You are allowed to use this website only for lawful purpose while you use the companies&apos; services. Under no
        circumstances, you are allowed to jeopardize the security of this website or any information submitted or any
        other information available on this website. Never try to access or misuse or delete any information or coding
        on this website that you do not have authorized access to through any means such as spamming the flooding,
        crashing the software, delaying the operation of this website, damaging, dissembling or modifying any of the
        software etc. using any device.
      </p>
      <p>
        On one except you are responsible for any information provided by you to this website or any of the branches of
        Global Teacher Training Academy. The liability lies with you for any sort of information provided by you to
        Global Teacher Training Academy is true, accurate, up-to-date and not misleading or likely to mislead or
        defraud and should not be discriminatory, obscene, defamatory, offensive or unlawful or fall into any branch of
        any applicable legislation, regulations, guidelines or codes of practice or copyright, trade mark or fall under
        any other intellectual property rights of another person from any jurisdiction. It is also your responsibility
        to check and provide all necessary files, data and information free of viruses or any other harmful entities
        that may harm, damage or interfere in any system or data, before submitting to this website. The right to remove
        any information provided by you at any point of time for any reason from this website without providing any
        explanation reserved only with us.
      </p>

      <h3 className={headingClass}>Interruption and Failure in Service</h3>
      <p>
        We always try to maintain the continuity and high standard for our website, but error, delay, omissions or
        interruption of service can occur due to internet connectivity which is beyond our reach. We are not liable for
        any of such error, delay, omissions or interruption of any service for this website (or any part of the site)
        and cannot provide any solution to that. The specification of this website may differ from time to time without
        any advance notice.
      </p>

      <h3 className={headingClass}>Information you submit</h3>
      <p>
        The information submitted by you (including, without limitation, sensitive or personal date) will be used to
        complete the application process and to support the administrative functions. This will allow us to process and
        store information (including, without limitation, sensitive or personal data) received from the applicants. The
        collection and aggregation of the data derived from these information shared by the applicants will be done on
        purpose to provide them with a better service. You are giving us the permission to use the information
        (including, without limitation, sensitive or personal data) for each one of these. You will solely be
        responsible for any circumstances once you access those websites.
      </p>

      <h3 className={headingClass}>Installment Payment</h3>
      <p>
        In case of delay in making the installment payment by the due date there will be a temporary interruption in the
        course access and per day fine charges of 500 INR will be implied. However, the access will be restored
        immediately after receiving the installment payment from your end. The candidate will not be provided with any
        extra time for loss of time due to the delay in making the installment payment on time. If any discount is
        offered on the course fee it will no longer be applicable if installment is not paid on time and the original
        course fee gets applicable.
      </p>

      <h3 className={headingClass}>Liability</h3>
      <p>
        Global Teacher Training Academy is not liable for any loss (direct or indirect, loss of business, revenue or
        profits, expenditure, wasted, corruption or destruction or modification or manipulation of data or facts or any
        other indirect or consequential loss) due to arising from the use of this website or services offered by the
        organization and therefore, Global Teacher Training Academy is not be liable for any such reason, whether in
        correct, infringement or otherwise. Global Teacher Training Academy is excluded from all representations,
        warranties and conditions related to this website and your usage of this website to the maximum extent granted
        by the law.
      </p>
      <p>
        You will solely be accountable to compensate for all the expenses, claims, losses, liabilities or proceedings
        that take place due to the use or misuse of this website by you.
      </p>
      <p>
        One should immediately inform us if anyone or any organization threatens to acquire claim in relation to your
        usage of this website.
      </p>

      <h3 className={headingClass}>Applicable law</h3>
      <p>
        By completing the registration, individuals hereby affirm that they are to be bound by all the &ldquo;Terms and
        Conditions&rdquo; as mentioned on this website.
      </p>
      <p>This is to be considered as an agreement between the Global Teacher Training Academy and myself, the applicant.</p>

      <h3 className={headingClass}>Terms of service</h3>
      <p>
        A person needs to be minimum of eighteen years of age to be eligible for any Global Teacher Training Academy
        certificate courses. The information provided by the applicants is used to deliver a better service to them
        which they are allowed to change as per their predisposition. The information of payment related cards is
        essential at the time of enrolment which is optional and can be avoided by paying directly for the applied
        courses. The payment related cards information is deleted from the database immediately after the processing is
        over which is a mandatory protocol of Global Teacher Training Academy to maintain the confidentiality of
        personal information.
      </p>

      <h3 className={headingClass}>Global Teacher Training Academy Certification and Membership</h3>
      <p>
        Once an individual applies for a certification course from Global Teacher Training Academy, the information like
        name, shipping address, email, phone number etc. are collected from the applicants to verify the identity of the
        applicants, validate billing, shipping materials and to provide membership to the applicant.
      </p>

      <h3 className={headingClass}>Email</h3>
      <p>
        To process the application, individuals should share name and email address along with other information
        mentioned at the body of the mail to help to get registered. This data can be shared when required with a third
        party without providing any advance notice to respond to the queries. Each and every email form the students are
        preserved to avoid any miscommunication and to improve our service for the students. Signing the contract or
        enrolment form, gives the permission to Global Teacher Training Academy to contact that individual through email
        or telephone as and when required.
      </p>

      <h3 className={headingClass}>Cookies</h3>
      <p>
        Cookies are temporary files sent by websites aiming to identify prior users of a site to customise their visits.
        Cookies make your online experience easier by saving your browsing information. With cookies, websites can keep
        you signed in, remember your site preferences, and give you access to locally relevant content.
      </p>
      <p>
        For clarification, write to{" "}
        <a href="mailto:enquiry@globalteachersacademy.com" className={linkClass}>
          enquiry@globalteachersacademy.com
        </a>
        .
      </p>
    </InfoPageContent>
  );
}
