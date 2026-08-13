import Link from "next/link";
import { Gift, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import AnimatedEllipsis from "@/components/ui/AnimatedEllipsis";
import FloatingChatButton from "@/components/home/FloatingChatButton";

export default function FloatingContact() {
  return (
    <>
      <div className="fixed bottom-4 left-3 z-50 flex flex-col items-start gap-2.5 sm:bottom-5 sm:left-4">
        <a
          href="tel:9674923512"
          aria-label="Call GTT Academy"
          className="btn-brand-gradient grid size-12 place-items-center rounded-full text-white shadow-2xl shadow-blue-950/25 transition hover:-translate-y-0.5 sm:inline-flex sm:size-auto sm:gap-2 sm:py-2 sm:pl-2 sm:pr-3.5"
        >
          <span className="grid place-items-center sm:size-9 sm:rounded-full sm:bg-white/15">
            <Phone size={18} />
          </span>
          <span className="hidden whitespace-nowrap text-xs font-extrabold tracking-wide sm:inline">
            Call Now
            <AnimatedEllipsis />
          </span>
        </a>
        <a
          href="https://wa.me/919674923512?text=Hello%20GTT%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
          target="_blank"
          rel="noreferrer"
          aria-label="Message GTT Academy on WhatsApp"
          className="grid size-12 place-items-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-green-950/25 transition hover:-translate-y-0.5 hover:bg-[#20bd5a] sm:inline-flex sm:size-auto sm:gap-2 sm:py-2 sm:pl-2 sm:pr-3.5"
        >
          <span className="grid place-items-center sm:size-9 sm:rounded-full sm:bg-white/15">
            <FaWhatsapp size={20} />
          </span>
          <span className="hidden whitespace-nowrap text-xs font-extrabold tracking-wide sm:inline">
            WhatsApp Us
            <AnimatedEllipsis />
          </span>
        </a>
      </div>

      <div className="fixed bottom-4 right-3 z-50 flex flex-col items-end gap-2.5 sm:bottom-5 sm:right-4">
        <Link
          href="/special-offer"
          aria-label="View special offer"
          prefetch={false}
          className="grid size-12 place-items-center rounded-full border border-[#ffbc09] bg-[#ffbc09] text-[#05245b] shadow-xl animate-[offerBlink_1.4s_ease-in-out_infinite] transition hover:brightness-110 sm:inline-flex sm:size-auto sm:gap-2 sm:px-4 sm:py-2 sm:text-xs sm:font-extrabold sm:uppercase sm:tracking-wide"
        >
          <Gift size={16} />
          <span className="hidden sm:inline">Special Offer</span>
        </Link>
        <FloatingChatButton />
      </div>
    </>
  );
}
