import InfoPageContent from "@/components/layout/InfoPageContent";

export default function TermsContent() {
  return (
    <InfoPageContent title="Terms and Conditions" showApply={false}>
      <p>
        By accessing and using the Global Teacher Training Academy (GTT Academy) website and services, you acknowledge
        and agree to the following terms. If you do not wish to agree, please exit from the website.
      </p>
      <p>
        Total confidentiality and security is not yet achieved for this website and the content submitted to it, due to
        the use of internet communication, is subject to interception, loss and modification of information. It is
        sometimes possible for a third party to view such information submitted by an applicant on this website. It is
        not uncommon that some messages from newsgroups land up in unsolicited mail in the spam section.
      </p>
      <p>
        It comes under your acknowledgement that there is no surety that the confidential or sensitive information you
        share with Global Teacher Training Academy is not going to be the cause of any damage for you and if it does,
        then Global Teacher Training Academy does not hold the responsibility for that; therefore, sharing any
        information will be at your own risk.
      </p>
      <p>We do not initiate any refund for any of our courses.</p>
      <p>
        Upon joining Global Teacher Training Academy and accessing the services, you acknowledge and agree with the fact
        that Global Teacher Training Academy and its employees, stockholders, owners, partners and affiliates are not
        legally responsible (both criminally or civilly) under any court in the world for any damages to the members and
        are not liable for any loss or alteration of information provided to them by the applicants.
      </p>
      <p>
        You are acknowledging that travelling abroad is not safe all the time and for that matter Global Teacher
        Training Academy employees, stockholders, owners, partners and affiliates are not accountable for any sort of
        damages caused to a member while travelling, working or living anywhere in the world.
      </p>
      <p>
        While using this website, you are agreeing with these terms. For clarification, write to{" "}
        <a href="mailto:enquiry@globalteachersacademy.com" className="font-semibold text-[#0045bc] hover:underline">
          enquiry@globalteachersacademy.com
        </a>
        .
      </p>
    </InfoPageContent>
  );
}
