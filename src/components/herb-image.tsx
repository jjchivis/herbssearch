import Image from "next/image";

export function HerbImage({
  src,
  alt,
  className,
  sizes,
  priority,
}: {
  src: string | null;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (!src) return null;

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(max-width: 640px) 100vw, 50vw"}
        className="object-contain"
        priority={priority}
      />
    </div>
  );
}
