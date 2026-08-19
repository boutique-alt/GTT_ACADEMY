import { ArrowRight } from "lucide-react";
import ApplyNowLink from "@/components/ui/ApplyNowLink";

type Props = {
  className?: string;
};

export default function MobileApplyNowCta({ className = "" }: Props) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 lg:hidden">
      <ApplyNowLink
        className={`btn-brand-gradient btn-apply-float pointer-events-auto inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-[0.04em] ${className}`}
      >
        Apply Now <ArrowRight size={18} />
      </ApplyNowLink>
    </div>
  );
}
