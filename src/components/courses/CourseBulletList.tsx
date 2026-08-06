import { Check } from "lucide-react";

type Props = {
  items: string[];
};

export default function CourseBulletList({ items }: Props) {
  if (items.length === 0) return null;

  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex min-w-0 items-start gap-3 text-sm leading-6 text-slate-700">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#30ad22] text-white">
            <Check size={13} />
          </span>
          <span className="min-w-0 flex-1 break-words">{item}</span>
        </li>
      ))}
    </ul>
  );
}
