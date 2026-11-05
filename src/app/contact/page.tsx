import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BUSINESS_ADDRESS, BUSINESS_MAP_URL, BUSINESS_NAME } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "How to get in touch with HerbsSearch.",
};

const EMAIL = "support@herbssearch.com";

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-10 px-6 py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
      {/* The banner shows the page title and invitation, so the text versions are for screen readers only. */}
      <header>
        <h1 className="sr-only">Contact Us</h1>
        <p className="sr-only">Questions, corrections or suggestions for the library? We&apos;d like to hear from you.</p>
        <Image
          src="/brand/contact-banner.jpg"
          alt=""
          width={1672}
          height={941}
          priority
          sizes="(min-width: 896px) 848px, calc(100vw - 48px)"
          className="h-auto w-full rounded-lg border border-[var(--border)]"
        />
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
      <section className="flex max-w-2xl flex-col gap-2 rounded-lg border border-[var(--border)] p-6">
        <h2 className="font-mono text-xs uppercase tracking-wide text-[var(--muted)]">Address</h2>
        <address className="font-serif text-2xl not-italic leading-snug text-[var(--foreground)]">
          {BUSINESS_NAME}
          <br />
          {BUSINESS_ADDRESS.street}
          <br />
          {BUSINESS_ADDRESS.suite}
          <br />
          {BUSINESS_ADDRESS.city}, {BUSINESS_ADDRESS.region} {BUSINESS_ADDRESS.postalCode}
        </address>
        <a
          href={BUSINESS_MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit text-sm text-[var(--muted)] underline decoration-[var(--highlight)] underline-offset-4 hover:text-[var(--highlight)]"
        >
          View on a map
        </a>
      </section>
    </main>
  );
}
