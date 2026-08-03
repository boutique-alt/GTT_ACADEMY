import { Gift, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { applyNowHref } from "@/data/site";

export default function FloatingContact() {
  return (
    <>
      <a
        href="https://wa.me/919674923512?text=Hello%20GTT%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
        target="_blank"
        rel="noreferrer"
        aria-label="Message GTT Academy on WhatsApp"
        className="group fixed bottom-4 left-3 z-40 grid size-12 place-items-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-green-950/25 transition hover:-translate-y-1 hover:bg-[#20bd5a] sm:bottom-5 sm:left-4 sm:size-14"
      >
        <span className="pointer-events-none absolute bottom-full left-0 mb-3 hidden animate-[messageFloat_2.8s_ease-in-out_infinite] whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-bold text-[#05245b] shadow-xl sm:block">
          Message us
          <span className="absolute left-5 top-full size-0 border-x-[6px] border-t-[7px] border-x-transparent border-t-white" />
        </span>
        <FaWhatsapp size={26} className="sm:hidden" />
        <FaWhatsapp size={29} className="hidden sm:block" />
      </a>

      <div className="fixed bottom-4 right-3 z-40 flex flex-col items-end gap-2 sm:bottom-5 sm:right-4">
        <a
          href={applyNowHref}
          aria-label="View special offer"
          className="hidden animate-[contactFloat_3.2s_ease-in-out_infinite] items-center gap-2 rounded-full border border-[#ffbc09]/40 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-[#05245b] shadow-xl transition hover:bg-[#ffbc09] sm:inline-flex"
        >
          <Gift size={15} className="text-[#30ad22]" /> Special Offer
        </a>
        <a
          href="tel:9674923512"
          aria-label="Call GTT Academy"
          className="btn-brand-gradient grid size-12 place-items-center rounded-full shadow-2xl shadow-blue-950/25 transition hover:-translate-y-1 sm:inline-flex sm:size-auto sm:items-center sm:gap-2 sm:rounded-full sm:px-5 sm:py-3 sm:text-sm sm:font-bold"
        >
          <span className="grid size-7 place-items-center rounded-full bg-white/15 sm:bg-white/15"><Phone size={14} /></span>
          <span className="hidden sm:inline">Call Now</span>
        </a>
      </div>
    </>
  );
}
