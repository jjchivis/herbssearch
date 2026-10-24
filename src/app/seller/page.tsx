import Link from "next/link";
import { requireSeller } from "@/lib/auth-guards";
import { Notice } from "@/components/marketplace/ui";

export default async function SellerOverviewPage() {
  const { seller } = await requireSeller("/seller");

  return (
    <>
      <header className="flex flex-col gap-2">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">Overview</h1>
        <p className="text-[15px] text-[var(--muted)]">Welcome! Here&apos;s where your store stands.</p>
      </header>

      {seller.status === "SUSPENDED" && (
        <Notice tone="error">Your store is suspended, so it can&apos;t be edited or shown to shoppers. Contact us to restore it.</Notice>
      )}

      <section className="flex flex-col gap-4">
        <h2 className="font-serif text-2xl text-[var(--foreground)]">Next steps</h2>
        <ol className="flex list-decimal flex-col gap-2 pl-5 text-[15px] leading-relaxed text-[var(--foreground)]">
          <li>
            Check your{" "}
            <Link href="/seller/profile" className="underline underline-offset-2 hover:text-[var(--highlight)]">
              store profile
            </Link>{" "}
            so shoppers know who you are.
          </li>
          <li className="text-[var(--muted)]">Add products and link them to the herbs in the library (coming soon).</li>
          <li className="text-[var(--muted)]">Connect a payout account so you can get paid (coming soon).</li>
        </ol>
      </section>
    </>
  );
}
