import { Mail, Phone } from "lucide-react";
import { contactBranches } from "@/data/contact-branches";

function telHref(value: string) {
  const plus = value.trim().startsWith("+");
  const digits = value.replace(/[^\d]/g, "");
  return plus ? `tel:+${digits}` : `tel:${digits}`;
}

export default function ContactBranchCards() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-700">
        <a href="tel:18001203481" className="inline-flex items-center gap-2 transition hover:text-[#0045bc]">
          <Phone size={15} className="text-[#30ad22]" /> India Toll Free: 18001203481
        </a>
        <a href="tel:9674923512" className="inline-flex items-center gap-2 transition hover:text-[#0045bc]">
          <Phone size={15} className="text-[#30ad22]" /> Mobile / WhatsApp: 9674923512
        </a>
        <a
          href="mailto:enquiry@globalteachersacademy.com"
          className="inline-flex items-center gap-2 transition hover:text-[#0045bc]"
        >
          <Mail size={15} className="text-[#30ad22]" /> enquiry@globalteachersacademy.com
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {contactBranches.map((branch) => (
          <article
            key={branch.name}
            className="overflow-hidden rounded-xl border-2 border-[#ffbc09]/70 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="bg-[#ffbc09] px-4 py-2.5 text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.06em] text-[#05245b]">{branch.region}</p>
            </div>
            <div className="space-y-3 p-5 sm:p-6">
              <h3 className="font-serif text-xl font-bold text-[#0045bc]">{branch.name}</h3>
              <p className="whitespace-pre-line text-sm leading-6 text-slate-600">
                <span className="font-semibold text-[#05245b]">Address: </span>
                {branch.address}
              </p>
              <p className="text-sm leading-6 text-slate-600">
                <span className="font-semibold text-[#05245b]">Contact No: </span>
                <a href={telHref(branch.contact)} className="text-[#0045bc] transition hover:text-[#30ad22]">
                  {branch.contact}
                </a>
              </p>
              {branch.tollFree ? (
                <p className="text-sm leading-6 text-slate-600">
                  <span className="font-semibold text-[#05245b]">India Toll Free Number: </span>
                  <a href={telHref(branch.tollFree)} className="text-[#0045bc] transition hover:text-[#30ad22]">
                    {branch.tollFree}
                  </a>
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
