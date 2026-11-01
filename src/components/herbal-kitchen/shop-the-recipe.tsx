import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import type { ShopIngredient } from "@/content/herbal-kitchen/types";

// Until the HerbsSearch shop opens on this site, nothing here is purchasable:
// ingredients with an Herbal Library entry link to it, and the rest are listed
// as plain information. When the shop launches, this section gains product
// cards for live products (see the marketplace branch).
export async function ShopTheRecipe({ ingredients }: { ingredients: ShopIngredient[] }) {
  const names = ingredients.flatMap((i) => (i.herbName ? [i.herbName] : []));
  const herbs = names.length
    ? await prisma.herb.findMany({ where: { name: { in: names } }, select: { id: true, name: true, imageUrl: true } })
    : [];
  const rows = ingredients.map((ingredient) => ({
    ingredient,
    herb: herbs.find((h) => h.name === ingredient.herbName) ?? null,
  }));
  const libraryRows = rows.filter((r) => r.herb);
  const plainRows = rows.filter((r) => !r.herb);

  return (
    <section id="shop-the-recipe" aria-labelledby="shop-title" className="scroll-mt-6" data-print-hide>
      <h2 id="shop-title" className="font-serif text-3xl text-[var(--foreground)]">
        Shop the Recipe
      </h2>
      <p className="mt-2 max-w-2xl text-[15px] text-[var(--muted)]">
        The HerbsSearch shop is coming soon. In the meantime, learn about the herbs in this recipe below, and find the rest at
        your local grocery store.
      </p>

      {libraryRows.length > 0 && (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {libraryRows.map(({ ingredient, herb }) => (
            <Link
              key={ingredient.name}
              href={`/herbs/${herb!.id}`}
              className="group flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--background)] p-3 transition-colors hover:border-[var(--highlight)]"
            >
              {herb!.imageUrl && (
                <span className="relative h-24 w-[72px] shrink-0 overflow-hidden rounded border border-[var(--border)] bg-[var(--surface-2)]">
                  <Image src={herb!.imageUrl} alt="" fill sizes="72px" className="object-contain" />
                </span>
              )}
              <span className="flex flex-col gap-1">
                <span className="font-serif text-xl text-[var(--foreground)] group-hover:text-[var(--highlight)]">{ingredient.name}</span>
                <span className="text-sm text-[var(--muted)]">{ingredient.description}</span>
                <span className="text-sm font-medium text-[var(--accent)]">Read about {herb!.name} in the Herbal Library →</span>
              </span>
            </Link>
          ))}
        </div>
      )}

      {plainRows.length > 0 && (
        <div className="mt-4">
          <h3 className="font-mono text-[11px] uppercase tracking-wide text-[var(--muted)]">Also in this recipe</h3>
          <ul className="mt-2 grid gap-2 sm:grid-cols-2">
            {plainRows.map(({ ingredient }) => (
              <li key={ingredient.name} className="rounded-lg border border-dashed border-[var(--border)] px-4 py-3 text-sm">
                <span className="font-medium text-[var(--foreground)]">{ingredient.name}</span>
                <span className="text-[var(--muted)]"> — {ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
