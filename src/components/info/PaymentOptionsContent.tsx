import { CreditCard, Landmark, Smartphone, Wallet } from "lucide-react";
import CourseBulletList from "@/components/courses/CourseBulletList";
import InfoPageContent from "@/components/layout/InfoPageContent";
import ApplyNowLink from "@/components/ui/ApplyNowLink";
import { coursesCatalogGroups } from "@/data/courses/courses-catalog";

const headingClass = "font-serif text-xl font-bold text-[#05245b] sm:text-2xl";
const linkClass = "font-semibold text-[#0045bc] hover:underline";

const acceptedPayments = [
  "Credit Card / Debit Card",
  "Online Bank Transfer / Net banking",
  "UPI Payment Options: GPay / PhonePe / Paytm",
];

const paymentModes = [
  "Direct bank transfer",
  "International payment through PayPal",
  "Debit and credit card payment through CCAvenue",
];

const paymentCourses = coursesCatalogGroups.flatMap((group) => group.courses);

export default function PaymentOptionsContent() {
  return (
    <InfoPageContent title="Payment Options" showApply={false}>
      <p>
        We at Global Teacher Training Academy accept payment through credit/debit card via our secure payment page for
        any of our course. The payment is also possible through your friend or family to pay with their card. The
        payment is also acceptable via PayPal. The bank transfer is also acceptable provided the time it takes including
        the transfer charges.
      </p>

      <h3 className={headingClass}>The payment options are as follows</h3>
      <CourseBulletList items={acceptedPayments} />

      <p>
        Global Teacher Training Academy offers flexibility every way. We offer flexibility in selecting the course as we
        offer different modes for learning. Similarly we offer flexibility in our payment option as well. We offer
        different payment modes and you may select any from the given options depending on your preference. The modes of
        payment we offer are:
      </p>
      <CourseBulletList items={paymentModes} />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Landmark, label: "Bank Transfer" },
          { icon: Wallet, label: "PayPal" },
          { icon: CreditCard, label: "CCAvenue" },
          { icon: Smartphone, label: "UPI" },
        ].map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-xl border border-slate-100 bg-[#f5f8fc] px-4 py-3"
          >
            <span className="grid size-10 place-items-center rounded-full bg-[#0045bc]/10 text-[#0045bc]">
              <Icon size={18} />
            </span>
            <p className="text-sm font-semibold text-[#05245b]">{label}</p>
          </div>
        ))}
      </div>

      <h3 className={headingClass}>Course Payment</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-100">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#05245b] text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">Course Name</th>
              <th className="px-4 py-3 font-semibold">Price</th>
              <th className="px-4 py-3 font-semibold">Pay Online</th>
            </tr>
          </thead>
          <tbody>
            {paymentCourses.map((course) => (
              <tr key={course.title} className="border-t border-slate-100 even:bg-[#f8fbff]">
                <td className="px-4 py-3 font-medium text-[#05245b]">{course.title}</td>
                <td className="px-4 py-3 text-slate-600">
                  {course.feeLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </td>
                <td className="px-4 py-3">
                  <ApplyNowLink className="btn-brand-gradient inline-flex rounded-full px-4 py-2 text-xs font-semibold tracking-[0.04em]">
                    Pay Online
                  </ApplyNowLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className={headingClass}>Miscellaneous Payment</h3>
      <p>
        For miscellaneous payments, please write to our accounts team with the payment title and amount. Our customer
        service is available 24/7 to guide you in a better manner. To know more, you can always write to us or call us
        and our responsible personnel from accounts team will look into the matter with optimum efficiency and urgency.
      </p>
      <p>
        Write to us at{" "}
        <a href="mailto:admin@globalteachersacademy.com" className={linkClass}>
          admin@globalteachersacademy.com
        </a>{" "}
        or{" "}
        <a href="mailto:enquiry@globalteachersacademy.com" className={linkClass}>
          enquiry@globalteachersacademy.com
        </a>
        .
      </p>
      <p>
        Call us at{" "}
        <a href="tel:9674923512" className={linkClass}>
          9674923512
        </a>
        . Toll Free:{" "}
        <a href="tel:18001203481" className={linkClass}>
          18001203481
        </a>
        .
      </p>
    </InfoPageContent>
  );
}
