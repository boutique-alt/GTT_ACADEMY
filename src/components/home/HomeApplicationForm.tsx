"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { courseApplicationOptions } from "@/data/courses/course-sidebar";
import { thankYouHref } from "@/data/site";

const fieldClass =
  "w-full min-w-0 rounded border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#0045bc] focus:ring-1 focus:ring-[#0045bc]/20";

const labelClass = "grid min-w-0 gap-0.5 text-[11px] font-semibold leading-4 text-[#05245b]";

export default function HomeApplicationForm() {
  const router = useRouter();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Teacher Training Course Application from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nCity and Country: ${data.get("cityCountry")}\nHighest Educational Qualification: ${data.get("qualification")}\nCurrent Profession: ${data.get("profession")}\nCourse: ${data.get("course")}`,
    );
    window.open(`mailto:enquiry@globalteachersacademy.com?subject=${subject}&body=${body}`, "_blank");
    router.push(thankYouHref);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full overflow-hidden rounded-xl border border-slate-100 bg-white shadow-lg shadow-blue-950/10"
    >
      <div className="bg-[#0045bc] px-3 py-2.5 text-center">
        <p className="text-[13px] font-bold leading-tight text-white">Teacher Training Course Application</p>
        <p className="mt-0.5 text-[10px] font-semibold tracking-wide text-[#ffbc09]">We Educate</p>
      </div>

      <div className="grid gap-2 p-3.5">
        <label className={labelClass}>
          Please mention your Name *
          <input required name="name" autoComplete="name" className={fieldClass} />
        </label>

        <label className={labelClass}>
          Please mention your Email *
          <input required name="email" type="email" autoComplete="email" className={fieldClass} />
        </label>

        <label className={labelClass}>
          Please mention your Phone number *
          <input required name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </label>

        <label className={labelClass}>
          Please mention your City and Country *
          <input required name="cityCountry" autoComplete="address-level2" className={fieldClass} />
        </label>

        <label className={labelClass}>
          Please mention your Highest Education
          <input name="qualification" className={fieldClass} />
        </label>

        <label className={labelClass}>
          Please mention your Current Profession
          <input name="profession" className={fieldClass} />
        </label>

        <label className={labelClass}>
          Please select a Course *
          <span className="relative block">
            <select
              required
              name="course"
              defaultValue=""
              className={`${fieldClass} cursor-pointer appearance-none bg-none pr-8`}
            >
              <option value="" disabled>
                Select a course
              </option>
              {courseApplicationOptions.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#0045bc]"
              aria-hidden
            />
          </span>
        </label>

        <button
          type="submit"
          className="btn-brand-gradient mt-0.5 inline-flex w-fit items-center justify-center rounded-md px-5 py-1.5 text-[12px] font-semibold"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
