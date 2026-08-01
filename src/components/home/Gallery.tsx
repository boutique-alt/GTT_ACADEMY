import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const images = [
  { src: "/images/gallery/gallery-1.jpg", width: 750, height: 1000, alt: "GTT Academy Certification", portrait: true },
  { src: "/images/gallery/gallery-2.jpg", width: 1067, height: 1280, alt: "GTT Academy Certification", portrait: true },
  { src: "/images/gallery/gallery-3.jpg", width: 554, height: 880, alt: "GTT Academy Certification", portrait: true },
  { src: "/images/gallery/gallery-4.jpg", width: 150, height: 205, alt: "PG Diploma Montessori Teacher Training", portrait: true },
  { src: "/images/gallery/gallery-5.jpg", width: 1040, height: 780, alt: "GTT Academy gallery image 17" },
  { src: "/images/gallery/gallery-6.jpg", width: 350, height: 262, alt: "GTT Academy gallery image 15" },
  { src: "/images/gallery/gallery-7.jpg", width: 350, height: 262, alt: "GTT Academy gallery image 16" },
  { src: "/images/gallery/gallery-8.jpg", width: 350, height: 262, alt: "GTT Academy gallery image 13" },
  { src: "/images/gallery/gallery-9.jpg", width: 350, height: 262, alt: "GTT Academy gallery image 11" },
  { src: "/images/gallery/gallery-10.jpg", width: 350, height: 262, alt: "GTT Academy gallery image 1" },
  { src: "/images/gallery/gallery-11.jpg", width: 1040, height: 780, alt: "GTT Academy gallery image 3" },
  { src: "/images/gallery/gallery-12.jpg", width: 1040, height: 780, alt: "GTT Academy gallery image 4" },
];

export default function Gallery() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Life at GTT" title="Our Gallery" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {images.map((image) => (
            <div key={image.src} className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-[#f5f8fc] shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${image.portrait ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw" className="object-cover object-top transition duration-500 group-hover:scale-[1.03]" />
              <div className="pointer-events-none absolute inset-0 bg-[#0045bc]/0 transition group-hover:bg-[#0045bc]/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
