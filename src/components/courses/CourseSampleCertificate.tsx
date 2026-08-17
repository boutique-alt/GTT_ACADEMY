import Image from "next/image";
import type { SampleCertificatePage } from "@/data/courses/sample-certificates";

type CourseSampleCertificateProps = {
  pages: SampleCertificatePage[];
};

export default function CourseSampleCertificate({ pages }: CourseSampleCertificateProps) {
  if (pages.length === 0) return null;

  return (
    <div className="space-y-2">
      {pages.map((page) => (
        <Image
          key={page.src}
          src={page.src}
          alt={page.alt}
          width={page.width}
          height={page.height}
          className="h-auto w-full object-contain"
          sizes="(max-width: 1024px) 100vw, 280px"
        />
      ))}
    </div>
  );
}
