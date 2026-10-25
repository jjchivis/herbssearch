import type { Metadata } from "next";
import Link from "next/link";
import { requireUser } from "@/lib/auth-guards";
import { prisma } from "@/lib/prisma";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Badge } from "@/components/marketplace/ui";
import { SignOutButton } from "@/components/marketplace/sign-out-button";

export const metadata: Metadata = { title: "Your account", robots: { index: false } };

export default async function AccountPage() {
  const user = await requireUser("/account");
  const [seller, application] = await Promise.all([
    prisma.seller.findUnique({ where: { userId: user.id } }),
    prisma.sellerApplication.findFirst({ where: { userId: user.id }, orderBy: { createdAt: "desc" } }),
  ]);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Your account" }]} />
      <header className="flex flex-col gap-2">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">Your account</h1>
        <p className="text-[15px] text-[var(--muted)]">Signed in as {user.email}</p>
      </header>

      <section className="flex flex-col gap-3 border-t border-[var(--border)] pt-8">
        <h2 className="font-serif text-2xl text-[var(--foreground)]">Selling</h2>
        {seller ? (
          <p className="flex flex-wrap items-center gap-3 text-[15px]">
            <span>{seller.storeName}</span>
            <Badge kind={seller.status} />
            {seller.isFoundingSeller && <Badge kind="FOUNDING" />}
            <Link href="/seller" className="underline underline-offset-2 hover:text-[var(--highlight)]">
              Open your Seller Dashboard
            </Link>
          </p>
        ) : application ? (
          <p className="flex flex-wrap items-center gap-3 text-[15px]">
            <span>Your application for {application.storeName}</span>
            <Badge kind={application.status} />
            <Link href="/sell" className="underline underline-offset-2 hover:text-[var(--highlight)]">
              View details
            </Link>
          </p>
        ) : (
          <p className="text-[15px] text-[var(--muted)]">
            Grow, blend or make herbal goods?{" "}
            <Link href="/sell" className="underline underline-offset-2 hover:text-[var(--highlight)]">
              Apply to sell here
            </Link>
            .
          </p>
        )}
      </section>

      <section className="flex flex-col gap-3 border-t border-[var(--border)] pt-8">
        <h2 className="font-serif text-2xl text-[var(--foreground)]">Orders</h2>
        <p className="flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
          <Link href="/orders" className="underline underline-offset-2 hover:text-[var(--highlight)]">
            Your orders
          </Link>
          <Link href="/cart" className="underline underline-offset-2 hover:text-[var(--highlight)]">
            Your cart
          </Link>
        </p>
      </section>

      {user.role === "admin" && (
        <p className="text-[15px]">
          <Link href="/admin" className="underline underline-offset-2 hover:text-[var(--highlight)]">
            Marketplace admin
          </Link>
        </p>
      )}

      <div>
        <SignOutButton />
      </div>
    </main>
  );
}
