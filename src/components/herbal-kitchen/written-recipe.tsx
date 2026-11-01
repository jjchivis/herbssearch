import type { KitchenRecipe } from "@/content/herbal-kitchen/types";

// The accessible, printable recipe. This text, not the illustrated card, is
// the source of truth. When printing, everything else on the page is hidden.
export function WrittenRecipe({ title, recipe }: { title: string; recipe: KitchenRecipe }) {
  return (
    <article
      id="recipe"
      data-print-recipe
      className="scroll-mt-6 rounded-xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-[0_10px_40px_-28px_rgb(31_54_22/0.55)] sm:p-8 print:border-0 print:bg-white print:p-0 print:shadow-none"
      aria-labelledby="recipe-title"
    >
      {!recipe.approved && (
        <p className="mb-5 rounded-lg border border-[var(--caution-border)] bg-[var(--caution-bg)] px-4 py-3 text-sm text-[var(--caution)]" data-print-hide>
          Draft recipe text, waiting for the site owner&apos;s approval. It won&apos;t be published until it&apos;s approved.
        </p>
      )}
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--highlight)]">The Herbal Kitchen · Recipe</p>
      <h2 id="recipe-title" className="mt-1 font-serif text-3xl text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>

      <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-y border-[var(--border)] py-4 text-sm">
        {recipe.times.map((t) => (
          <div key={t.label}>
            <dt className="font-mono text-[11px] uppercase tracking-wide text-[var(--muted)]">{t.label}</dt>
            <dd className="text-[var(--foreground)]">{t.text}</dd>
          </div>
        ))}
        {recipe.yield && (
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wide text-[var(--muted)]">Makes</dt>
            <dd className="text-[var(--foreground)]">{recipe.yield}</dd>
          </div>
        )}
      </dl>

      <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] print:block">
        <section aria-labelledby="ingredients-title">
          <h3 id="ingredients-title" className="font-serif text-2xl text-[var(--foreground)]">
            Ingredients
          </h3>
          <ul className="mt-3 flex flex-col gap-2.5 text-[15px] leading-relaxed">
            {recipe.ingredients.map((ing) => (
              <li key={ing.item} className="flex gap-2">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>
                  <strong className="font-semibold">{ing.quantity}</strong> {ing.item}
                  {ing.note && <span className="text-[var(--muted)]"> ({ing.note})</span>}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="method-title" className="print:mt-6">
          <h3 id="method-title" className="font-serif text-2xl text-[var(--foreground)]">
            Instructions
          </h3>
          <ol className="mt-3 flex flex-col gap-4 text-[15px] leading-relaxed">
            {recipe.steps.map((step, i) => (
              <li key={step.title} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] font-mono text-xs text-[var(--accent-foreground)] print:border print:border-black print:bg-white print:text-black"
                >
                  {i + 1}
                </span>
                <span>
                  <strong className="font-semibold">{step.title}.</strong> {step.text}
                </span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section aria-labelledby="storage-title" className="mt-8">
        <h3 id="storage-title" className="font-serif text-2xl text-[var(--foreground)]">
          Storage
        </h3>
        <ul className="mt-2 list-disc pl-5 text-[15px] leading-relaxed">
          {recipe.storage.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="safety-title"
        className="mt-8 rounded-lg border border-[var(--caution-border)] bg-[var(--caution-bg)] p-5 print:border-black print:bg-white"
      >
        <h3 id="safety-title" className="font-serif text-2xl text-[var(--caution)] print:text-black">
          Ingredient safety
        </h3>
        <ul className="mt-2 flex list-disc flex-col gap-2 pl-5 text-[15px] leading-relaxed text-[var(--foreground)]">
          {recipe.safety.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="sources-title" className="mt-6 text-sm text-[var(--muted)]">
        <h3 id="sources-title" className="font-mono text-[11px] uppercase tracking-wide">
          Sources
        </h3>
        <ul className="mt-1 flex flex-col gap-1">
          {recipe.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} className="underline decoration-[var(--border)] underline-offset-2 hover:text-[var(--highlight)]" rel="noopener">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-3">
          HerbsSearch is an educational botanical resource. This recipe is a food, not a medicine, and isn&apos;t a substitute for professional medical advice.
        </p>
      </section>
    </article>
  );
}
