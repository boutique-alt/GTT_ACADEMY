"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AlumniCard, { type AlumniEntry } from "@/components/alumni/AlumniCard";

const PER_PAGE = 12;

type Props = {
  items: AlumniEntry[];
};

export default function AlumniList({ items }: Props) {
  const totalPages = Math.max(1, Math.ceil(items.length / PER_PAGE));
  const [page, setPage] = useState(1);

  const pageItems = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return items.slice(start, start + PER_PAGE);
  }, [items, page]);

  const go = (next: number) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="divide-y divide-slate-100">
        {pageItems.map((alumnus) => (
          <AlumniCard key={`${alumnus.name}-${alumnus.course}`} alumnus={alumnus} />
        ))}
      </div>

      {totalPages > 1 && (
        <nav aria-label="Alumni pages" className="mt-8 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => go(page - 1)}
            className="grid size-10 place-items-center rounded-full border border-slate-200 text-[#0045bc] transition hover:bg-[#eef4ff] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous page"
          >
            <ChevronLeft size={18} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => {
            const active = n === page;
            return (
              <button
                key={n}
                type="button"
                onClick={() => go(n)}
                aria-current={active ? "page" : undefined}
                className={`grid size-10 place-items-center rounded-full text-sm font-bold transition ${active
                    ? "bg-[#0045bc] text-white"
                    : "border border-slate-200 text-[#05245b] hover:bg-[#eef4ff]"
                  }`}
              >
                {n}
              </button>
            );
          })}

          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => go(page + 1)}
            className="grid size-10 place-items-center rounded-full border border-slate-200 text-[#0045bc] transition hover:bg-[#eef4ff] disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Next page"
          >
            <ChevronRight size={18} />
          </button>
        </nav>
      )}
    </div>
  );
}
