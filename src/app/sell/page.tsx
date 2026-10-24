import type { Metadata } from "next";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth-guards";
import { prisma } from "@/lib/prisma";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Badge, Notice, buttonClass } from "@/components/marketplace/ui";
import { ApplicationForm } from "./application-form";

export const metadata: Metadata = {
  title: "Sell with us",
  description: "Apply to sell herbs, teas and herbal goods alongside the library's herb research.",
};

export default async function SellPage({ searchParams }: { searchParams: Promise<{ submitted?: string }> }) {
  const { submitted } = await searchParams;
  const user = await getCurrentUser();
  const [seller, application] = user
    ? await Promise.all([
        prisma.seller.findUnique({ where: { userId: user.id } }),
        prisma.sellerApplication.findFirst({ where: { userId: user.id }, orderBy: { createdAt: "desc" } }),
      ])
    : [null, null];

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-10 px-6 py-14">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sell with us" }]} />
      <header className="flex flex-col gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--highlight)]">For growers and makers</p>
        <h1 className="font-serif text-4xl text-[var(--foreground)]">Sell with us</h1>
        <p className="text-[15px] leading-relaxed text-[var(--muted)]">
          Your products appear right beside the herb research people are already reading, so shoppers find you while
          they&apos;re learning about the plant. Every store and product is reviewed before it goes live.
        </p>
      </header>

      {!user ? (
        <div className="flex flex-col items-start gap-4">
          <p className="text-[15px] text-[var(--foreground)]">Sign in or create a free account to apply.</p>
          <Link href="/sign-in?next=/sell" className={buttonClass}>
            Sign in to apply
          </Link>
        </div>
      ) : seller ? (
        <Notice tone={seller.status === "ACTIVE" ? "success" : "error"}>
          {seller.status === "ACTIVE" ? (
            <>
              Your store <strong>{seller.storeName}</strong> is approved.{" "}
              <Link href="/seller" className="underline underline-offset-2">
                Open your Seller Dashboard
              </Link>
              .
            </>
          ) : (
            <>Your store {seller.storeName} is suspended. Contact us to restore it.</>
          )}
        </Notice>
      ) : application?.status === "PENDING" ? (
        <section className="flex flex-col gap-3">
          {submitted && <Notice tone="success">Thanks! Your application was received.</Notice>}
          <p className="flex flex-wrap items-center gap-3 text-[15px]">
            Application for <strong>{application.storeName}</strong> <Badge kind="PENDING" />
          </p>
          <p className="text-[15px] text-[var(--muted)]">
            We review every application by hand and will email {application.contactEmail} when it&apos;s decided.
          </p>
        </section>
      ) : (
        <section className="flex flex-col gap-6">
          {application?.status === "REJECTED" && (
            <Notice>
              <p className="mb-1 font-medium">Your last application wasn&apos;t approved.</p>
              {application.reviewNote && <p>Our note: {application.reviewNote}</p>}
              <p className="mt-1">You&apos;re welcome to apply again below.</p>
            </Notice>
          )}
          <ApplicationForm defaultEmail={user.email} />
        </section>
      )}
    </main>
  );
}
