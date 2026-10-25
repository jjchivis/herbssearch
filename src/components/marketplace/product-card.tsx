import Image from "next/image";
import Link from "next/link";
import type { ProductCardData } from "@/lib/marketplace/catalog";
import { formatPrice } from "@/lib/marketplace/products";
import { Badge } from "@/components/marketplace/ui";

export function ProductCard({ product }: { product: ProductCardData }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col gap-2 rounded-lg border border-[var(--border)] p-3 transition-colors hover:border-[var(--highlight)]"
    >
      <div className="relative aspect-square overflow-hidden rounded">
        {product.image && (
          <Image
            src={product.image.url}
            alt={product.image.alt}
            fill
            sizes="(max-width: 640px) 50vw, 240px"
            className={product.image.illustration ? "object-contain" : "object-cover"}
          />
        )}
      </div>
      <span className="font-serif text-lg leading-snug text-[var(--foreground)] group-hover:text-[var(--highlight)]">{product.name}</span>
      <span className="text-sm text-[var(--muted)]">{product.storeName}</span>
      {product.isFoundingSeller && (
        <span>
          <Badge kind="FOUNDING" />
        </span>
      )}
      <span className="mt-auto flex items-baseline gap-2">
        <span className="text-[15px] font-medium text-[var(--foreground)]">{formatPrice(product.priceCents)}</span>
        {product.compareAtPriceCents && (
          <span className="text-sm text-[var(--muted)] line-through">{formatPrice(product.compareAtPriceCents)}</span>
        )}
        {!product.inStock && <span className="text-xs text-[var(--caution)]">Out of stock</span>}
      </span>
    </Link>
  );
}
