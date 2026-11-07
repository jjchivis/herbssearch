import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BUSINESS_ADDRESS, BUSINESS_MAP_URL, BUSINESS_NAME, BUSINESS_PHONE } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "How to get in touch with HerbsSearch.",
};

const EMAIL = "support@herbssearch.com";

// Antique parchment matching the "Contact Us" plaque in the banner: a pale
// cream centre fading to gold edges. Fixed colours so it reads the same in
// light and dark mode.
const PARCHMENT_BOX =
  "flex max-w-2xl flex-col gap-2 rounded-lg border border-[#d9b877] bg-[radial-gradient(ellipse_at_center,#fef1d1_0%,#fbe7b8_70%,#f3d79c_100%)] p-6 text-[#33512c] shadow-[inset_0_0_24px_rgb(170_120_40/0.18)]";
const LABEL = "font-mono text-xs font-medium uppercase tracking-wide text-[#3f5a36]";

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
      <section className={PARCHMENT_BOX}>
        <h2 className={LABEL}>Email</h2>
        <a
          href={`mailto:${EMAIL}`}
          className="font-serif text-2xl font-bold text-[#33512c] underline decoration-[#ab5030] underline-offset-4 hover:text-[#1f3616]"
        >
          {EMAIL}
        </a>
      </section>
      <section className={PARCHMENT_BOX}>
        <h2 className={LABEL}>Phone</h2>
        <a
          href={`tel:${BUSINESS_PHONE.tel}`}
          className="w-fit font-serif text-2xl font-bold text-[#33512c] underline decoration-[#ab5030] underline-offset-4 hover:text-[#1f3616]"
        >
          {BUSINESS_PHONE.display}
        </a>
        <p className="font-serif text-lg font-bold text-[#3f5a36]">or {BUSINESS_PHONE.vanity}</p>
      </section>
      <section className={PARCHMENT_BOX}>
        <h2 className={LABEL}>Address</h2>
        <address className="font-serif text-2xl font-bold not-italic leading-snug text-[#33512c]">
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
          className="w-fit text-sm font-medium text-[#3f5a36] underline decoration-[#ab5030] underline-offset-4 hover:text-[#1f3616]"
        >
          View on a map
        </a>
      </section>
    </main>
  );
}
