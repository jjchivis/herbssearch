"use client";

import Link from "next/link";
import { useEffect } from "react";

const button =
  "inline-flex min-h-11 items-center justify-center rounded-full border px-5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--highlight)]";
const primary = `${button} border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-foreground)] hover:opacity-90`;
const secondary = `${button} border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:border-[var(--highlight)]`;

// View Recipe | Print Recipe | Shop Ingredients. On a recipe page, Print opens
// the print dialog right away; elsewhere it opens the recipe page, which
// prints itself (?print=1). The print stylesheet keeps only the recipe.
export function RecipeActions({
  recipeHref,
  printHere,
  shopHref,
}: {
  recipeHref: string;
  printHere: boolean;
  shopHref?: string;
}) {
  return (
    <div className="flex flex-wrap gap-3" data-print-hide>
      <Link href={recipeHref} className={primary}>
        View Recipe
      </Link>
      {printHere ? (
        <button type="button" onClick={() => window.print()} className={secondary}>
          Print Recipe
        </button>
      ) : (
        <Link href={`${recipeHref.split("#")[0]}?print=1`} className={secondary}>
          Print Recipe
        </Link>
      )}
      {shopHref && (
        <Link href={shopHref} className={secondary}>
          Shop Ingredients
        </Link>
      )}
    </div>
  );
}

/** Opens the print dialog once when the page was opened with ?print=1. */
export function AutoPrint() {
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("print") !== "1") return;
    const id = window.setTimeout(() => window.print(), 600);
    return () => window.clearTimeout(id);
  }, []);
  return null;
}
