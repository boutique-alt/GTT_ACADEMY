import InfoPageContent from "@/components/layout/InfoPageContent";

export default function PrivacyPolicyContent() {
  return (
    <InfoPageContent title="Privacy Policy" showApply={false}>
      <p>
        Global Teacher Training Academy (GTT Academy) respects your privacy. This policy explains how we collect, use
        and protect information when you visit our website or enquire about our courses. This policy is specific to the
        GTT Academy website and does not cover third-party websites that may be linked from our pages.
      </p>
      <h3 className="font-serif text-xl font-bold text-[#05245b] sm:text-2xl">Cookies</h3>
      <p>
        Cookies are temporary internet files containing small amounts of information, often including a unique
        identifier, which are downloaded to your computer when you visit a website — if your browser preferences allow
        it. Cookies are then accessed by the originating website on future visits. Cookies are useful because they allow
        a website to recognise a user&apos;s computer.
      </p>
      <h3 className="font-serif text-xl font-bold text-[#05245b] sm:text-2xl">How are cookies used on our website?</h3>
      <p>
        The cookies we use are there to allow you to perform the services you require and to help us in providing a
        better website for our users. We do not use cookies to store information that identifies you as an individual.
        We encourage you to accept the cookies we serve. However, if you wish to block these cookies which are set by
        our or any other website, you can do this through your browser settings.
      </p>
      <h3 className="font-serif text-xl font-bold text-[#05245b] sm:text-2xl">Google Analytics</h3>
      <p>
        We use Google Analytics cookies to check information about your visit to our website. It helps us to better
        identify the use and popularity of our services and how successfully the website is operating. If you do not
        wish us to do this, you can opt out of the Analytics service by installing an add-on for your browser at{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-[#0045bc] hover:underline"
        >
          tools.google.com/dlpage/gaoptout
        </a>
        . You can also delete or restrict cookies as for any other websites through your browser settings.
      </p>
      <h3 className="font-serif text-xl font-bold text-[#05245b] sm:text-2xl">Types of cookies</h3>
      <p>
        Session cookies are produced temporarily when a user visits a website. Once the user leaves the site or closes
        the browser, the session cookie is deleted. A persistent cookie file remains on the user&apos;s computer and is
        re-activated when the user visits the website which has created that particular cookie. These cookies expire
        after a certain period, or can be removed manually.
      </p>
      <h3 className="font-serif text-xl font-bold text-[#05245b] sm:text-2xl">Your information</h3>
      <p>
        Personal information submitted through enquiry or application forms may be used to respond to your request and
        to provide course-related support. Information may be shared with third parties or government authorities when
        necessary to deliver our services or when required by law.
      </p>
      <p>
        Under applicable data protection law, you may request a copy of the personal information held about you. For any
        privacy related query, write to us at{" "}
        <a href="mailto:enquiry@globalteachersacademy.com" className="font-semibold text-[#0045bc] hover:underline">
          enquiry@globalteachersacademy.com
        </a>
        .
      </p>
    </InfoPageContent>
  );
}
