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
          <li>
            <Link href="/seller/products" className="underline underline-offset-2 hover:text-[var(--highlight)]">
              Add products
            </Link>{" "}
            and link them to the herbs in the library.
          </li>
          <li>
            Set your{" "}
            <Link href="/seller/shipping" className="underline underline-offset-2 hover:text-[var(--highlight)]">
              shipping rates
            </Link>
            .
          </li>
          <li className={seller.stripeTransfersActive ? "text-[var(--muted)] line-through" : ""}>
            <Link href="/seller/payouts" className="underline underline-offset-2 hover:text-[var(--highlight)]">
              Set up payouts
            </Link>{" "}
            so customers can buy from you and you get paid.
          </li>
        </ol>
      </section>
    </>
  );
}
