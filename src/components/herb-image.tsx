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

  // Card art is portrait (about 3:4) and shown with object-contain, so in the
  // landscape library boxes it fills only ~56% of the box width. Callers pass
  // \`sizes\` accordingly so the browser downloads the smallest adequate file.

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
