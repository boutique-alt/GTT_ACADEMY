"use client";

import Image from "next/image";
import { FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export default function BrochureEnquiry() {
  function submitBrochure(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Brochure request from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nEmail: ${data.get("email")}\nCourse: ${data.get("course")}\nRequest: Please send the course brochure.`,
    );
    window.location.href = `mailto:enquiry@globalteachersacademy.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="bg-brand-gradient py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-8 px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
        <form onSubmit={submitBrochure} className="order-2 min-w-0 overflow-hidden rounded-3xl bg-white p-6 shadow-2xl sm:p-8 lg:order-1 lg:p-9">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#30ad22]">Get a Free Brochure</p>
          <h2 className="font-serif text-3xl font-bold text-[#05245b]">Fill out my online form</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">Share your details and our team will guide you with the right teacher training course brochure.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="grid min-w-0 gap-2 text-sm font-semibold text-slate-700">
              Full Name *
              <input required name="name" className="w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none focus:border-[#0045bc]" />
            </label>
            <label className="grid min-w-0 gap-2 text-sm font-semibold text-slate-700">
              Phone *
              <input required name="phone" type="tel" className="w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none focus:border-[#0045bc]" />
            </label>
            <label className="grid min-w-0 gap-2 text-sm font-semibold text-slate-700">
              Email *
              <input required name="email" type="email" className="w-full min-w-0 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-normal outline-none focus:border-[#0045bc]" />
            </label>
            <label className="grid min-w-0 gap-2 text-sm font-semibold text-slate-700">
              Course *
              <select required name="course" defaultValue="" className="w-full min-w-0 max-w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 font-normal outline-none focus:border-[#0045bc]">
                <option value="" disabled>Select a course</option>
                <option>Pre and Primary Teacher Training</option>
                <option>Montessori Teacher Training</option>
                <option>Early Childhood Care and Education</option>
                <option>Child Psychology</option>
                <option>TESOL / TEFL</option>
                <option>Other Course</option>
              </select>
            </label>
          </div>
          <button className="btn-brand-gradient mt-6 inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold">
            Request Brochure <ArrowRight size={18} />
          </button>
        </form>
        <div className="order-1 overflow-hidden rounded-3xl bg-white p-3 lg:order-2">
          <Image src="/images/home-brochure.png" alt="GTT Academy home brochure" width={900} height={700} className="h-auto w-full rounded-2xl object-contain" />
        </div>
      </div>
    </section>
  );
}
