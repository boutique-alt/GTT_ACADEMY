import InfoPageContent from "@/components/layout/InfoPageContent";

const headingClass = "font-serif text-xl font-bold text-[#05245b] sm:text-2xl";
const linkClass = "font-semibold text-[#0045bc] hover:underline";

const cookieGuides = [
  {
    label: "Chrome",
    href: "https://support.google.com/chrome/bin/answer.py?hl=en&answer=95647&p=cpn_cookies",
  },
  {
    label: "Firefox",
    href: "https://support.mozilla.org/en-US/kb/Cookies",
  },
  {
    label: "Internet Explorer",
    href: "https://support.microsoft.com/kb/278835",
  },
  {
    label: "Safari 5 for Mac",
    href: "https://support.apple.com/en-in/guide/safari/manage-cookies-and-website-data-sfri11471/mac",
  },
  {
    label: "Opera",
    href: "https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/",
  },
] as const;

export default function PrivacyPolicyContent() {
  return (
    <InfoPageContent title="Privacy Policy" showApply={false}>
      <h3 className={headingClass}>Fair Information Practice with Personal Information</h3>
      <p>
        Personal information are collected when applicants submit their information voluntarily to our website. Along
        with other information, your IP (internet protocol) is also obtained from the system administration that allows
        you access to the site every time. We monitor web &lsquo;traffic&rsquo;; maintain log file users&apos; access to
        the website files and also keep a track of the domains from where students usually visit us to monitor the use
        of information provided to you. These are some of the cardinal affairs which we need to run in order to improve
        and provide you with a service of the highest quality. The information we receive from applicants are preserved
        carefully for future use of trends and statistics. Each and every information, Global Teacher Training Academy
        receives from the applicants are carefully stored in a specially designed system which restricts unauthorized
        access; modification; losses of information; misuses and unauthorized disclosure.
      </p>
      <p>Global Teacher Training Academy never store any kind of credit or debit card information of the clients.</p>
      <p>
        Usage of cookies for collection of users&apos; information has never been a practice for Global Teacher Training
        Academy (Cookie is a small format file sent by a site aiming to identify prior users of a site to personalize
        the visit).
      </p>
      <p>
        Your information can be used by Global Teacher Training Academy worldwide to offer you our other services which
        are relevant to your interest to keep you updated. If you want to disable the service of receiving relevant
        information, kindly mail us by keeping &lsquo;unsubscribe&rsquo; as the subject. Your personal information can
        be provided to third parties or to the government or law for any other purpose only when necessary.
      </p>

      <h3 className={headingClass}>Notification of Changes</h3>
      <p>
        The right to make any changes in the statement at any point of time lies with the Global Teacher Training
        Academy. You are advised to follow the changes on privacy statement of the site regularly to keep yourself up to
        date. If you do not want your information to be shared on any of our posts, kindly mail us at{" "}
        <a href="mailto:admin@globalteachersacademy.com" className={linkClass}>
          admin@globalteachersacademy.com
        </a>
        .
      </p>

      <h3 className={headingClass}>Access to Personal Information</h3>
      <p>
        As per the Data Protection Act 1998, you are eligible to request a copy of your information lies with us. You
        need to pay a fee for to avail this service.
      </p>

      <h3 className={headingClass}>General</h3>
      <p>
        Though this site is live for 24 hours a day, we will not be liable if this site for any reason becomes
        unavailable at any point of time. At the time of accessing any part of this site, you fall under these terms in
        full. This privacy policy is restricted to cover only Global Teacher Training Academy website. Any other
        hyperlinks leading to any other websites are not covered under this policy. If any difficulty arises while
        accessing this website, feel free to contact us at{" "}
        <a href="mailto:enquiry@globalteachersacademy.com" className={linkClass}>
          enquiry@globalteachersacademy.com
        </a>
        .
      </p>

      <h3 className={headingClass}>Legal Statement</h3>
      <p>
        Any part of this website shall not be reproduced in any alternative way without the express written consent from
        Global Teacher Training Academy. All the information stored on this website can be used personally by an
        individual and shall not be used for any commercial programs of any kind. Other websites, books, guides,
        databases, or any kind of software without an express permission from Global Teacher Training Academy. Global
        Teacher Training Academy has given its best effort in preparing all the materials for this website as accurate
        as possible but no warranty or fitness for it is applicable. The publishers and authors will not be responsible
        for any peripheral, consequential or special damages or loss of information of content of this website.
      </p>

      <h3 className={headingClass}>Cookies</h3>
      <h3 className={headingClass}>What are Cookies?</h3>
      <p>
        Cookies are temporary internet files containing small amounts of information, often including a unique
        identifier, which are downloaded to your computer when you visit a website — if your browser preferences allow
        it. Cookies are then accessed by the originating website on future visits to the website. Cookies are useful
        because they allow a website to recognise a user&apos;s computer.
      </p>

      <h3 className={headingClass}>How are cookies used on our website?</h3>
      <p>
        The cookies we use are there to allow you to perform the services you require and to help us in providing a
        better website for our users. We do not use cookies to store information that identifies you as an individual.
        Details on cookies used are provided below. We encourage you to accept the cookies we serve. However, if you
        wish to block these cookies which are set by our or any other website, you can do this through your browser
        settings. Please see the &lsquo;How to control and delete cookies&rsquo; section for more information.
      </p>

      <h3 className={headingClass}>Google Analytics</h3>
      <p>
        We use Google Analytics cookies to check information about your visit to our website. It helps us to better
        identify the use and popularity of our services and how successfully the website is operating. If you do not
        wish us to do this, you can opt out of the Analytics service by installing an add-on for your browser. This can
        be found at{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          tools.google.com/dlpage/gaoptout
        </a>
        . You can also delete/restrict the cookies as for any other websites — see &lsquo;How to control and delete
        cookies&rsquo; for more information.
      </p>

      <h3 className={headingClass}>Types of cookies</h3>
      <p>
        Session cookies are produced temporarily when a user visits a website. Once the user leaves the site or closes
        the browser, the session cookie is deleted. A persistent cookie file remains on the user&apos;s computer and is
        re-activated when the user visits the website which has created that particular cookie. These cookies expire
        after a certain period (set in the file), or can be removed manually.
      </p>

      <h3 className={headingClass}>How to control and delete cookies</h3>
      <p>
        You can manage cookie usage through your browser settings. The help function in your preferred browser should
        provide you with the correct information. Some browsers provide helpful cookie guides:
      </p>
      <ul className="list-disc space-y-1.5 pl-5">
        {cookieGuides.map((guide) => (
          <li key={guide.label}>
            {guide.label}:{" "}
            <a href={guide.href} target="_blank" rel="noreferrer" className={linkClass}>
              {guide.href}
            </a>
          </li>
        ))}
      </ul>
      <p>
        Alternatively,{" "}
        <a href="https://www.allaboutcookies.org" target="_blank" rel="noreferrer" className={linkClass}>
          www.allaboutcookies.org
        </a>{" "}
        provides advice on how to do this, and further information on cookies and how to manage them. In the case of
        some mobile devices, it may be necessary to consult the device&apos;s instruction manual to manage cookies
        effectively.
      </p>
    </InfoPageContent>
  );
}
