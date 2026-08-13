import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export default function CoverImage({
  src,
  alt,
  priority = false,
  className = "object-cover object-center",
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="100vw"
      className={`z-0 ${className}`}
    />
  );
}
