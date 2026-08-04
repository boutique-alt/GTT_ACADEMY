import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

/** Always navigates to local /apply-now — never the live PHP site. */
export default function ApplyNowLink({ children, className, onClick, "aria-label": ariaLabel }: Props) {
  return (
    <Link href="/apply-now" className={className} onClick={onClick} aria-label={ariaLabel} prefetch>
      {children}
    </Link>
  );
}
