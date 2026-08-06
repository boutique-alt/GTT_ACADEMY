"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export type CourseAccordionItem = {
  title: string;
  content: ReactNode;
};

type Props = {
  items: CourseAccordionItem[];
  defaultOpenIndex?: number;
};

export default function CourseAccordion({ items, defaultOpenIndex = 0 }: Props) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.title} className="bg-white">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center gap-2.5 py-3.5 text-left transition hover:bg-[#fafafa] sm:gap-3 sm:py-4"
            >
              <span className="shrink-0 text-[#b30000]" aria-hidden>
                {isOpen ? <ChevronDown size={18} strokeWidth={2.5} /> : <ChevronUp size={18} strokeWidth={2.5} />}
              </span>
              <span className="min-w-0 flex-1 font-serif text-[15px] font-bold leading-6 text-[#b30000] sm:text-base sm:leading-7">
                {item.title}
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-4 pb-5 text-[15px] leading-7 text-slate-600">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
