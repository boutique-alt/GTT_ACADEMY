import InfoPageContent from "@/components/layout/InfoPageContent";

export default function RefundContent() {
  return (
    <InfoPageContent title="Refund Policy" showApply={false}>
      <p>
        Global Teacher Training Academy does not initiate refund for any fully or partly paid course fees. This is the
        final and confirmed decision from Global Teacher Training Academy to make the fees non-refundable for each and
        every course we provide for our students. The most prominent reason behind this decision is that the supporting
        staff for the courses are also needed to be paid in advance and there is no guarantee to replace the drop out
        members for us.
      </p>
      <p>
        For any clarification, please send us an email at{" "}
        <a href="mailto:enquiry@globalteachersacademy.com" className="font-semibold text-[#0045bc] hover:underline">
          enquiry@globalteachersacademy.com
        </a>
        .
      </p>
    </InfoPageContent>
  );
}
