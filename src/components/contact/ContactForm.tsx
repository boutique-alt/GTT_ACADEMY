"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronDown, Headphones, Mail, Phone } from "lucide-react";
import { thankYouHref } from "@/data/site";

const fieldClass =
  "w-full min-w-0 rounded-xl border border-slate-200/90 bg-white px-4 py-3.5 font-normal text-slate-800 shadow-[inset_0_1px_2px_rgba(5,36,91,0.04)] outline-none transition placeholder:text-slate-400 focus:border-[#0045bc] focus:bg-white focus:ring-4 focus:ring-[#0045bc]/12";

const labelClass = "grid min-w-0 gap-2 text-sm font-semibold text-[#05245b]";

type Props = {
  eyebrow?: string;
  description?: string;
  submitLabel?: string;
  mailSubjectPrefix?: string;
};

export default function ContactForm({
  eyebrow = "Fill out my online form",
  description = "Share your details and our counsellor will get back to you with the right course guidance.",
  submitLabel = "Submit Enquiry",
  mailSubjectPrefix = "Contact enquiry from",
}: Props) {
  const router = useRouter();

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`${mailSubjectPrefix} ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nCourse: ${data.get("course")}\nCity: ${data.get("city")}\nMessage: ${data.get("message")}`,
    );
    window.open(`mailto:enquiry@globalteachersacademy.com?subject=${subject}&body=${body}`, "_blank");
    router.push(thankYouHref);
  }

  return (
    <form
      onSubmit={submitContact}
      className="relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-b from-white to-[#f8fafc] shadow-[0_20px_50px_-28px_rgba(5,36,91,0.28)]"
    >
      <div className="h-1.5 w-full bg-brand-gradient" />

      <div className="grid gap-5 bg-[radial-gradient(ellipse_at_top,_rgba(238,244,255,0.9),_transparent_55%)] p-5 sm:grid-cols-2 sm:gap-5 sm:p-8 lg:p-9">
        <div className="sm:col-span-2">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#30ad22]">{eyebrow}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        </div>

        <label className={labelClass}>
          Full Name *
          <input required name="name" autoComplete="name" placeholder="Enter your full name" className={fieldClass} />
        </label>

        <label className={labelClass}>
          Phone Number *
          <input required name="phone" type="tel" autoComplete="tel" placeholder="Enter phone / WhatsApp number" className={fieldClass} />
        </label>

        <label className={labelClass}>
          Email Address *
          <input required name="email" type="email" autoComplete="email" placeholder="Enter email address" className={fieldClass} />
        </label>

        <label className={labelClass}>
          City
          <input name="city" autoComplete="address-level2" placeholder="Enter your city" className={fieldClass} />
        </label>

        <label className={`${labelClass} sm:col-span-2`}>
          Interested Course *
          <span className="relative block">
            <select
              required
              name="course"
              defaultValue=""
              className={`${fieldClass} cursor-pointer appearance-none bg-none pr-11 [-moz-appearance:none] [-webkit-appearance:none]`}
            >
              <option value="" disabled>
                Select a course
              </option>
              <option>Pre and Primary Teacher Training</option>
              <option>Montessori Teacher Training</option>
              <option>Early Childhood Care and Education</option>
              <option>Diploma in Teaching and Training</option>
              <option>Nursery Teacher Training</option>
              <option>Educational Administration and Management</option>
              <option>Child Psychology</option>
              <option>Child and Adolescent Counseling</option>
              <option>Special Education</option>
              <option>TESOL / TEFL</option>
              <option>Other Course</option>
            </select>
            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#0045bc]"
              aria-hidden
            />
          </span>
        </label>

        <label className={`${labelClass} sm:col-span-2`}>
          Message
          <textarea name="message" rows={4} placeholder="How can we help you?" className={`${fieldClass} resize-none leading-6`} />
        </label>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-slate-100 bg-white/80 px-4 py-3 text-xs font-semibold text-slate-600 sm:col-span-2">
          <a href="tel:18001203481" className="inline-flex items-center gap-1.5 transition hover:text-[#0045bc]">
            <Phone size={14} className="text-[#30ad22]" /> 18001203481
          </a>
          <a href="tel:9674923512" className="inline-flex items-center gap-1.5 transition hover:text-[#0045bc]">
            <Headphones size={14} className="text-[#30ad22]" /> 9674923512
          </a>
          <a
            href="mailto:enquiry@globalteachersacademy.com"
            className="inline-flex min-w-0 items-center gap-1.5 break-all transition hover:text-[#0045bc]"
          >
            <Mail size={14} className="shrink-0 text-[#30ad22]" /> enquiry@globalteachersacademy.com
          </a>
        </div>

        <button
          type="submit"
          className="btn-brand-gradient inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold tracking-[0.04em] sm:col-span-2 sm:w-auto sm:justify-self-start sm:px-10"
        >
          {submitLabel} <ArrowRight size={18} />
        </button>
      </div>
    </form>
  );
}
