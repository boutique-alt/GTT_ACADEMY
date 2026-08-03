"use client";

import { FormEvent } from "react";
import Image from "next/image";
import { ArrowRight, Headphones, Mail, Phone } from "lucide-react";

export default function EnquiryForm() {
  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Course enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nCourse: ${data.get("course")}\nMessage: ${data.get("message")}`,
    );
    window.location.href = `mailto:enquiry@globalteachersacademy.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="enquiry" className="bg-brand-gradient-soft py-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-blue-950/10 lg:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-[320px] overflow-hidden bg-white lg:min-h-full">
          <Image
            src="/images/brochure.jpg"
            alt="GTT Academy course counselling"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        <form onSubmit={submitEnquiry} className="grid min-w-0 grid-cols-1 content-start gap-4 p-6 sm:grid-cols-2 sm:gap-5 sm:p-8 lg:p-9">
          <div className="sm:col-span-2">
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#30ad22]">Start Your Journey</p>
            <h2 className="font-serif text-2xl font-bold leading-tight text-[#05245b] sm:text-3xl">Get free course counselling today.</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Tell us what you want to achieve. Our counsellor will help you choose the right course.</p>
          </div>

          <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-slate-700">
            Full Name *
            <input required name="name" placeholder="Enter your name" className="w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-[#0045bc] focus:ring-3 focus:ring-[#0045bc]/10" />
          </label>
          <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-slate-700">
            Phone Number *
            <input required name="phone" type="tel" placeholder="Enter phone number" className="w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-[#0045bc] focus:ring-3 focus:ring-[#0045bc]/10" />
          </label>
          <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-slate-700">
            Email Address *
            <input required name="email" type="email" placeholder="Enter email address" className="w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-[#0045bc] focus:ring-3 focus:ring-[#0045bc]/10" />
          </label>
          <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-slate-700">
            Interested Course *
            <select required name="course" defaultValue="" className="w-full min-w-0 max-w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 font-normal outline-none transition focus:border-[#0045bc]">
              <option value="" disabled>Select a course</option>
              <option>Pre and Primary Teacher Training</option>
              <option>Montessori Teacher Training</option>
              <option>Early Childhood Care and Education</option>
              <option>Child Psychology</option>
              <option>TESOL / TEFL</option>
              <option>Other Course</option>
            </select>
          </label>
          <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-slate-700 sm:col-span-2">
            Message
            <textarea name="message" rows={3} placeholder="How can we help you?" className="w-full min-w-0 resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none transition focus:border-[#0045bc] focus:ring-3 focus:ring-[#0045bc]/10" />
          </label>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-600 sm:col-span-2">
            <a href="tel:18001203481" className="inline-flex items-center gap-1.5 transition hover:text-[#0045bc]">
              <Phone size={14} className="text-[#30ad22]" /> 18001203481
            </a>
            <a href="tel:9674923512" className="inline-flex items-center gap-1.5 transition hover:text-[#0045bc]">
              <Headphones size={14} className="text-[#30ad22]" /> 9674923512
            </a>
            <a href="mailto:enquiry@globalteachersacademy.com" className="inline-flex items-center gap-1.5 transition hover:text-[#0045bc]">
              <Mail size={14} className="text-[#30ad22]" /> Email us
            </a>
          </div>

          <button className="btn-brand-gradient inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-bold sm:col-span-2 sm:justify-self-start">
            Send Enquiry <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
