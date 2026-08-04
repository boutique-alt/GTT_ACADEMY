import { CheckCircle2, Phone } from "lucide-react";

export default function ThankYouMessage() {
  return (
    <section className="no-view-reveal bg-[#f5f8fc] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.5rem] border border-slate-100 bg-white p-8 text-center shadow-sm sm:p-12 lg:p-14">
          <span className="mx-auto mb-6 grid size-16 place-items-center rounded-full bg-[#30ad22]/12 text-[#30ad22]">
            <CheckCircle2 size={36} strokeWidth={1.75} />
          </span>

          <h1 className="font-display text-4xl font-semibold tracking-[-0.02em] text-[#05245b] sm:text-5xl">
            Thank You !
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-8 text-slate-600 sm:text-base sm:leading-8">
            Thank you for your application. We are currently processing your application and will get back to you within
            the next 24 working hours. In the mean time please read our website{" "}
            <a
              href="https://www.globalteachersacademy.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#0045bc] hover:underline"
            >
              www.globalteachersacademy.com
            </a>{" "}
            for more details. If you have any queries then you can call at the India Toll Free No :{" "}
            <span className="font-bold text-[#bb0000]">
              1-800-120-3481 or Call/ watsapp us at{" "}
              <a href="tel:9674923512" className="hover:underline">
                9674923512
              </a>
            </span>
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-slate-600">
            <a
              href="tel:18001203481"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#f5f8fc] px-5 py-2.5 transition hover:border-[#0045bc] hover:text-[#0045bc]"
            >
              <Phone size={16} className="text-[#30ad22]" />
              18001203481
            </a>
            <a
              href="tel:9674923512"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-[#f5f8fc] px-5 py-2.5 transition hover:border-[#0045bc] hover:text-[#0045bc]"
            >
              <Phone size={16} className="text-[#30ad22]" />
              9674923512
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
