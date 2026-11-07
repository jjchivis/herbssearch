import { BUSINESS_ADDRESS_ONE_LINE, BUSINESS_NAME, BUSINESS_PHONE } from "@/lib/business";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto w-full max-w-5xl px-6 py-8 text-sm text-[var(--muted)]">
        <p>Discover the Power of Plants — an educational botanical resource.</p>
        <p className="mt-1">
          Information provided is for educational purposes and is not a substitute for
          professional medical advice.
        </p>
        <address className="mt-3 not-italic">{BUSINESS_NAME} · {BUSINESS_ADDRESS_ONE_LINE} ·{" "}
          <a href={`tel:${BUSINESS_PHONE.tel}`} className="whitespace-nowrap hover:text-[var(--foreground)]">
            {BUSINESS_PHONE.display} ({BUSINESS_PHONE.vanity})
          </a>
        </address>
      </div>
    </footer>
  );
}
