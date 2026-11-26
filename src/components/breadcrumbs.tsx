import Link from "next/link";
import { absoluteUrl } from "@/lib/site-url";

// "Home / Section / Page" trail. The last crumb is the current page and isn't a link.
// The same trail is also described to search engines (schema.org BreadcrumbList),
// so results can show "Herbs Search › Herbs › Basil" instead of a bare address.
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      // The current page (last crumb) needs no address.
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-[var(--muted)]">
      <script
        type="application/ld+json"
        // "<" is escaped so a crumb label can never close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-[var(--highlight)]">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-[var(--foreground)]">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
