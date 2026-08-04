import { MapPin } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5613666862128!2d78.37930131412128!3d17.4328255060833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ff70e1a15b%3A0x1b788965bc4623a3!2sGlobal%20Teacher%20Training%20Academy!5e0!3m2!1sen!2sin!4v1640775770526!5m2!1sen!2sin";

export default function ContactGetInTouch() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white shadow-sm">
      <div className="bg-gradient-to-br from-[#eef4ff] via-white to-[#f0faf3] px-6 pb-2 pt-8 sm:px-10 sm:pt-10">
        <p className="text-center text-xs font-extrabold uppercase tracking-[0.22em] text-[#30ad22]">
          We&apos;re here to help
        </p>
        <h2 className="mt-2 text-center font-serif text-3xl font-bold text-[#05245b] sm:text-4xl">Get In Touch</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-6 text-slate-600">
          Fill out my online form and our team will get back to you shortly.
        </p>
        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-brand-gradient" />
      </div>

      <div className="px-4 pb-8 sm:px-8 sm:pb-10 lg:px-10">
        <ContactForm />
      </div>

      <div className="border-t border-slate-100 bg-[#f8fafc] px-4 pb-6 pt-2 sm:px-8 sm:pb-8 lg:px-10">
        <div className="mb-4 flex items-center gap-2 pt-4">
          <span className="grid size-9 place-items-center rounded-full bg-[#0045bc]/10 text-[#0045bc]">
            <MapPin size={18} />
          </span>
          <div>
            <p className="text-sm font-bold text-[#05245b]">Visit our campus</p>
            <p className="text-xs text-slate-500">Hi-Tech City, Hyderabad</p>
          </div>
        </div>
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 shadow-inner sm:aspect-[21/9]">
          <iframe
            title="Global Teacher Training Academy location map"
            src={mapSrc}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
