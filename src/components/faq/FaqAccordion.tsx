"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

type Props = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="bg-white">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-start gap-3 px-4 py-4 text-left transition hover:bg-[#f5f8fc] sm:px-5 sm:py-5"
            >
              <span className="min-w-0 flex-1 font-serif text-[15px] font-bold leading-6 text-[#05245b] sm:text-base sm:leading-7">
                {item.question}
              </span>
              <span
                className={`mt-0.5 grid size-8 shrink-0 place-items-center rounded-full transition ${
                  isOpen ? "bg-[#0045bc] text-white" : "bg-[#eef4ff] text-[#0045bc]"
                }`}
              >
                <ChevronDown
                  size={18}
                  className={`transition duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-3 px-4 pb-5 text-[15px] leading-7 text-slate-600 sm:px-5">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
