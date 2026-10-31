import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { herbOptions } from "@/lib/marketplace/herb-options";
import { FDA_DISCLAIMER, findDiseaseClaim, formatPrice } from "@/lib/marketplace/products";
import { HerbPicker } from "@/components/marketplace/herb-picker";
import {
  Badge,
  Field,
  Notice,
  PRODUCT_CATEGORY_LABELS,
  buttonClass,
  dangerButtonClass,
  inputClass,
  secondaryButtonClass,
} from "@/components/marketplace/ui";
import {
  approveProductAction,
  rejectProductAction,
  setProductGroupAction,
  setProductHerbsAction,
  setProductHiddenAction,
} from "../../actions";

export default async function AdminProductPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ done?: string; error?: string }>;
}) {
  const [{ id }, { done, error }] = await Promise.all([params, searchParams]);
  const p = await prisma.product.findUnique({
    where: { id },
    include: {
      seller: true,
      images: { orderBy: { position: "asc" } },
      herbs: { include: { herb: { include: { restriction: true } } } },
      reviewedBy: { select: { email: true } },
    },
  });
  if (!p) notFound();

  // Re-run the automatic claims check so reviewers see anything borderline.
  const claim = findDiseaseClaim(`${p.name}\n${p.description}`);
  const rows: [string, string][] = [
    ["Store", `${p.seller.storeName}${p.seller.status !== "ACTIVE" ? " (suspended)" : ""}`],
    [
      "Source",
      p.shopifyVariantId
        ? `Shopify store (bought through Shopify checkout; last synced ${p.shopifySyncedAt?.toLocaleString("en-US") ?? "never"})`
        : "Added by the seller",
    ],
    ["Category", PRODUCT_CATEGORY_LABELS[p.group]],
    ["Price", `${formatPrice(p.priceCents)}${p.compareAtPriceCents ? ` (was ${formatPrice(p.compareAtPriceCents)})` : ""}`],
    ["In stock", String(p.inventory)],
    ["SKU", p.sku ?? "—"],
    ["Weight", p.weightGrams ? `${p.weightGrams} g` : "—"],
    ["Shipping note", p.shippingNote ?? "—"],
    ["Submitted", p.submittedAt?.toLocaleString("en-US") ?? "—"],
  ];

  return (
    <>
      <Link href="/admin/products" className="text-sm text-[var(--muted)] hover:text-[var(--highlight)]">
        ← All products
      </Link>
      <header className="flex flex-wrap items-center gap-3">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">{p.name}</h1>
        <Badge kind={p.status} />
      </header>
      {done && <Notice tone="success">{done}</Notice>}
      {error && <Notice tone="error">{error}</Notice>}
      {claim && <Notice tone="error">Possible disease claim: {claim}</Notice>}

      {p.images.length > 0 ? (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {p.images.map((img) => (
            <li key={img.id} className="relative aspect-square overflow-hidden rounded-lg border border-[var(--border)]">
              <Image src={img.url} alt={img.alt} fill sizes="200px" className="object-cover" />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[15px] text-[var(--muted)]">No photos; the main herb&apos;s illustration is shown instead.</p>
      )}

      <dl className="grid gap-x-6 gap-y-3 text-[15px] sm:grid-cols-[10rem_1fr]">
        {rows.map(([label, value]) => (
          <div key={label} className="contents">
            <dt className="text-[var(--muted)]">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <section className="flex flex-col gap-2">
        <h2 className="font-serif text-2xl text-[var(--foreground)]">Description</h2>
        <p className="whitespace-pre-line text-[15px] leading-relaxed">{p.description}</p>
        {p.group === "SUPPLEMENTS_EXTRACTS" && <p className="text-xs text-[var(--muted)]">Shown with: {FDA_DISCLAIMER}</p>}
      </section>

      <section className="flex flex-col gap-3 border-t border-[var(--border)] pt-6">
        <h2 className="font-serif text-2xl text-[var(--foreground)]">Category</h2>
        {p.shopifyVariantId && (
          <p className="text-sm text-[var(--muted)]">
            Guessed from the Shopify product type. It decides the eat-or-drink rules and whether the FDA disclaimer shows.
          </p>
        )}
        <form action={setProductGroupAction} className="flex flex-wrap items-end gap-3">
          <input type="hidden" name="productId" value={p.id} />
          <select name="group" defaultValue={p.group} aria-label="Category" className={inputClass + " max-w-xs"}>
            {Object.entries(PRODUCT_CATEGORY_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <button type="submit" className={secondaryButtonClass}>
            Save category
          </button>
        </form>
      </section>

      <section className="flex flex-col gap-3 border-t border-[var(--border)] pt-6">
        <h2 className="font-serif text-2xl text-[var(--foreground)]">Linked herbs</h2>
        <form action={setProductHerbsAction} className="flex flex-col gap-3">
          <input type="hidden" name="productId" value={p.id} />
          <HerbPicker
            herbs={await herbOptions()}
            defaultIds={p.herbs.map((h) => h.herbId)}
            defaultPrimary={p.herbs.find((h) => h.isPrimary)?.herbId ?? null}
          />
          <div>
            <button type="submit" className={secondaryButtonClass}>
              Save herb links
            </button>
          </div>
        </form>
      </section>

      <section className="flex flex-col gap-6 border-t border-[var(--border)] pt-6">
        {p.status === "PENDING_REVIEW" && (
          <>
            <form action={approveProductAction}>
              <input type="hidden" name="productId" value={p.id} />
              <button type="submit" className={buttonClass}>
                Approve and publish
              </button>
            </form>
            <form action={rejectProductAction} className="flex flex-col gap-3">
              <input type="hidden" name="productId" value={p.id} />
              <Field label="Reason for not approving" htmlFor="reject-note" hint="Required. The seller sees this note.">
                <textarea id="reject-note" name="note" rows={2} required className={inputClass} />
              </Field>
              <div>
                <button type="submit" className={dangerButtonClass}>
                  Don&apos;t approve
                </button>
              </div>
            </form>
          </>
        )}
        {p.status === "HIDDEN" ? (
          <form action={setProductHiddenAction}>
            <input type="hidden" name="productId" value={p.id} />
            <input type="hidden" name="hidden" value="off" />
            <button type="submit" className={secondaryButtonClass}>
              Unhide (sends it back to review)
            </button>
          </form>
        ) : (
          <form action={setProductHiddenAction} className="flex flex-col gap-3">
            <input type="hidden" name="productId" value={p.id} />
            <input type="hidden" name="hidden" value="on" />
            <Field label="Hide from shoppers" htmlFor="hide-note" hint="Optional note for the seller.">
              <input id="hide-note" name="note" className={inputClass} />
            </Field>
            <div>
              <button type="submit" className={dangerButtonClass}>
                Hide product
              </button>
            </div>
          </form>
        )}
        {p.reviewedBy && (
          <p className="text-sm text-[var(--muted)]">
            Last reviewed by {p.reviewedBy.email} on {p.reviewedAt?.toLocaleString("en-US")}
            {p.reviewNote ? `. Note: ${p.reviewNote}` : ""}.
          </p>
        )}
      </section>
    </>
  );
}
