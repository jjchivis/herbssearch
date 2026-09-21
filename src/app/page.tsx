import { prisma } from "@/lib/prisma";
import { FadeIn } from "@/components/motion/fade-in";
import { HerbImage } from "@/components/herb-image";

const CURATED_NAMES = ["Ashwagandha", "Chamomile", "Ginger", "Lavender", "Peppermint", "Turmeric"];

const ROADMAP_CATEGORIES = [
  "Symptoms",
  "Conditions",
  "Constituents",
  "Preparations",
  "Traditional Uses",
  "Evidence",
];

export default async function HomePage() {
  const [featured, curated, bodySystems, herbCount] = await Promise.all([
    prisma.herb.findFirst({ where: { name: "Echinacea" } }),
    prisma.herb.findMany({
      where: { name: { in: CURATED_NAMES } },
      orderBy: { name: "asc" },
    }),
    prisma.bodySystem.findMany({ orderBy: { name: "asc" } }),
    prisma.herb.count(),
  ]);

  return (
    <main className="flex flex-1 flex-col">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--band)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 15%, rgba(184,194,163,0.16), transparent 60%), radial-gradient(50% 45% at 85% 80%, rgba(171,80,48,0.14), transparent 60%), linear-gradient(180deg, var(--band) 0%, var(--band-2) 60%, var(--band) 100%)",
          }}
        />
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 left-1/2 h-[70%] w-[140%] -translate-x-1/2 opacity-[0.08]"
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMax slice"
        >
          <path
            d="M0,500 C150,420 220,320 260,220 C300,320 340,420 420,500 M420,500 C460,380 520,280 600,180 C680,280 740,380 780,500 M780,500 C830,400 890,300 960,220 C1010,300 1060,400 1200,500"
            fill="none"
            stroke="var(--on-band)"
            strokeWidth="2"
          />
        </svg>

        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-6 py-24 text-center sm:py-32">
          <FadeIn className="flex flex-col items-center gap-5">
            <p className="font-mono text-xs font-medium tracking-[0.3em] text-[var(--highlight)] uppercase">
              An herbal knowledge engine
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] text-[var(--on-band)] sm:text-7xl">
              Discover the <em className="italic text-[var(--highlight)]">Power</em> of Plants
            </h1>
            <p className="max-w-xl text-lg text-[var(--on-band-soft)]">
              A botanical encyclopedia and research library — search any herb, symptom, body
              system, or traditional use, and follow the connections between them.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="w-full max-w-xl">
            <form method="GET" action="/herbs" className="flex flex-col gap-3 sm:flex-row">
              <input
                type="search"
                name="q"
                placeholder="Search herbs, symptoms, traditional uses…"
                className="flex-1 rounded-full border border-[var(--on-band-soft)] bg-[rgba(241,233,212,0.08)] px-5 py-3.5 text-sm text-[var(--on-band)] outline-none placeholder:text-[var(--on-band-soft)] focus:border-[var(--highlight)]"
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--highlight)] px-7 py-3.5 text-sm font-medium text-[var(--on-band)] transition hover:opacity-90"
              >
                Search the library
              </button>
            </form>
          </FadeIn>

          <FadeIn delay={0.18} className="flex flex-col items-center gap-2 pt-2">
            <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--highlight)] uppercase">
              Explore the Herbal World
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-sm">
              <a
                href="/herbs"
                className="font-medium text-[var(--on-band)] underline decoration-[var(--highlight)] underline-offset-4 hover:text-[var(--highlight)]"
              >
                Herbs
              </a>
              {ROADMAP_CATEGORIES.map((label) => (
                <span key={label} className="text-[var(--on-band-soft)]">
                  {label}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FEATURED HERB */}
      {featured && (
        <section className="border-b border-[var(--border)]">
          <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-8 px-6 py-16 sm:grid-cols-[240px_1fr] sm:py-20">
            <HerbImage
              src={featured.imageUrl}
              alt={`Botanical illustration of ${featured.name}`}
              className="aspect-[4/5] w-full max-w-[240px]"
              priority
            />
            <div className="flex flex-col gap-2">
              <p className="font-mono text-xs tracking-[0.14em] text-[var(--highlight)] uppercase">
                Featured herb
              </p>
              <h2 className="font-serif text-4xl text-[var(--foreground)]">{featured.name}</h2>
              <p className="font-mono text-sm italic text-[var(--muted)]">
                {featured.scientificName}
              </p>
              <p className="max-w-prose text-[15px] text-[var(--foreground)]/80">
                {featured.summary}
              </p>
              <a
                href={`/herbs/${featured.id}`}
                className="mt-2 w-fit rounded-full border border-[var(--border)] px-5 py-2 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--highlight)] hover:text-[var(--highlight)]"
              >
                Read the full entry →
              </a>
            </div>
          </div>
        </section>
      )}

      {/* EXPLORE BY TOPIC */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-16">
          <div>
            <h2 className="font-serif text-2xl text-[var(--foreground)]">Explore by topic</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Browse herbs traditionally associated with each body system.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {bodySystems.map((bs) => (
              <a
                key={bs.id}
                href={`/herbs?bodySystem=${bs.slug}`}
                className="group flex flex-col gap-1 rounded-lg border border-[var(--border)] bg-[var(--background)] p-4 transition-colors hover:border-[var(--highlight)]"
              >
                <span className="font-serif text-lg text-[var(--foreground)] group-hover:text-[var(--highlight)]">
                  {bs.name}
                </span>
                {bs.description && (
                  <span className="text-xs text-[var(--muted)]">{bs.description}</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FROM THE HERBAL LIBRARY */}
      {curated.length > 0 && (
        <section>
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-16">
            <div className="flex items-baseline justify-between">
              <div>
                <h2 className="font-serif text-2xl text-[var(--foreground)]">
                  From the herbal library
                </h2>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  A small selection from {herbCount} herbs in the collection.
                </p>
              </div>
              <a
                href="/herbs"
                className="font-mono hidden shrink-0 text-xs uppercase tracking-wide text-[var(--highlight)] hover:underline sm:block"
              >
                View full library →
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {curated.map((herb) => (
                <a
                  key={herb.id}
                  href={`/herbs/${herb.id}`}
                  className="group flex flex-col gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--highlight)]"
                >
                  <HerbImage
                    src={herb.imageUrl}
                    alt={`Botanical illustration of ${herb.name}`}
                    className="aspect-[4/3] w-full bg-[var(--surface-2)]"
                  />
                  <h3 className="font-serif text-xl text-[var(--foreground)] group-hover:text-[var(--highlight)]">
                    {herb.name}
                  </h3>
                  <p className="font-mono text-xs italic text-[var(--muted)]">
                    {herb.scientificName}
                  </p>
                </a>
              ))}
            </div>

            <a
              href="/herbs"
              className="font-mono text-center text-xs uppercase tracking-wide text-[var(--highlight)] hover:underline sm:hidden"
            >
              View full library →
            </a>
          </div>
        </section>
      )}

      {/* WHY THIS LIBRARY EXISTS */}
      <section className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-16 text-center">
          <h2 className="font-serif text-2xl text-[var(--foreground)]">Why this library exists</h2>
          <p className="text-[15px] leading-relaxed text-[var(--muted)]">
            Herbal knowledge is scattered — traditional practice in one place, scientific
            research in another, safety information somewhere else entirely, if it's written
            down at all. This library exists to put them in one place, clearly labeled as what
            they are: traditional use, preclinical research, human evidence, and safety
            considerations, never blended into a single unproven claim.
          </p>
          <p className="text-[15px] leading-relaxed text-[var(--muted)]">
            It's an educational resource, not medical advice — always talk to a healthcare
            professional about your own situation.
          </p>
        </div>
      </section>
    </main>
  );
}
