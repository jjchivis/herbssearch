import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "How to get in touch with HerbsSearch.",
};

const EMAIL = "support@herbssearch.com";

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-10 px-6 py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
      <header className="flex max-w-2xl flex-col gap-3">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">Contact Us</h1>
        <p className="text-[15px] text-[var(--muted)]">
          Questions, corrections or suggestions for the library? We&apos;d like to hear from you.
        </p>
      </header>
      <section className="flex max-w-2xl flex-col gap-2 rounded-lg border border-[var(--border)] p-6">
        <h2 className="font-mono text-xs uppercase tracking-wide text-[var(--muted)]">Email</h2>
        <a
          href={`mailto:${EMAIL}`}
          className="font-serif text-2xl text-[var(--foreground)] underline decoration-[var(--highlight)] underline-offset-4 hover:text-[var(--highlight)]"
        >
          {EMAIL}
        </a>
      </section>
    </main>
  );
}
