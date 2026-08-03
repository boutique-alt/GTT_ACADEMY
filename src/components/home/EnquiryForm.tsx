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
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-blue-950/10 lg:grid-cols-[.9fr_1.1fr]">
        <div className="relative overflow-hidden bg-[#05245b] text-white">
          <div className="absolute -bottom-20 -right-20 size-72 rounded-full bg-[#30ad22]/25 blur-2xl" />
          <Image src="/images/brochure.jpg" alt="GTT Academy course counselling" width={1024} height={683} className="relative h-auto w-full border-b border-white/10 object-contain" />
          <div className="relative p-8 sm:p-10">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-[#ffbc09]">Start Your Journey</p>
            <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">Get free course counselling today.</h2>
            <p className="mt-5 leading-7 text-blue-100">Tell us what you want to achieve. Our counsellor will help you choose the right teacher training course.</p>
            <div className="mt-9 space-y-5">
              <a href="tel:18001203481" className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-white/10"><Phone size={19} /></span>
                <span><small className="block text-blue-200">India toll free</small><strong>18001203481</strong></span>
              </a>
              <a href="tel:9674923512" className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-white/10"><Headphones size={19} /></span>
                <span><small className="block text-blue-200">Mobile / WhatsApp</small><strong>9674923512</strong></span>
              </a>
              <a href="mailto:enquiry@globalteachersacademy.com" className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-xl bg-white/10"><Mail size={19} /></span>
                <span className="break-all"><small className="block text-blue-200">Email us</small><strong>enquiry@globalteachersacademy.com</strong></span>
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={submitEnquiry} className="grid content-center gap-5 p-8 sm:grid-cols-2 sm:p-10">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Full Name *
            <input required name="name" placeholder="Enter your name" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none transition focus:border-[#0045bc] focus:ring-3 focus:ring-[#0045bc]/10" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Phone Number *
            <input required name="phone" type="tel" placeholder="Enter phone number" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none transition focus:border-[#0045bc] focus:ring-3 focus:ring-[#0045bc]/10" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Email Address *
            <input required name="email" type="email" placeholder="Enter email address" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none transition focus:border-[#0045bc] focus:ring-3 focus:ring-[#0045bc]/10" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Interested Course *
            <select required name="course" defaultValue="" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none transition focus:border-[#0045bc]">
              <option value="" disabled>Select a course</option>
              <option>Pre and Primary Teacher Training</option>
              <option>Montessori Teacher Training</option>
              <option>Early Childhood Care and Education</option>
              <option>Child Psychology</option>
              <option>TESOL / TEFL</option>
              <option>Other Course</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">
            Message
            <textarea name="message" rows={4} placeholder="How can we help you?" className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 font-normal outline-none transition focus:border-[#0045bc] focus:ring-3 focus:ring-[#0045bc]/10" />
          </label>
          <button className="btn-brand-gradient inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-bold sm:col-span-2 sm:justify-self-start">
            Send Enquiry <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
