import Image from "next/image";

type AccreditationSampleDocumentProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function AccreditationSampleDocument({
  src,
  alt,
  width,
  height,
}: AccreditationSampleDocumentProps) {
  return (
    <div className="flex justify-center py-4">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full max-w-[424px] object-contain shadow-sm"
      />
    </div>
  );
}
