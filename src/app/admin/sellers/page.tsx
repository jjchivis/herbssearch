import { prisma } from "@/lib/prisma";
import { setFoundingSellerAction, setSellerStatusAction } from "../actions";
import { Badge, Notice, dangerButtonClass, secondaryButtonClass } from "@/components/marketplace/ui";

export default async function SellersPage({ searchParams }: { searchParams: Promise<{ done?: string; error?: string }> }) {
  const { done, error } = await searchParams;
  const sellers = await prisma.seller.findMany({
    orderBy: { createdAt: "desc" },
    include: { user: { select: { email: true } } },
  });

  return (
    <>
      <h1 className="font-serif text-4xl text-[var(--foreground)]">Sellers</h1>
      {done && <Notice tone="success">{done}</Notice>}
      {error && <Notice tone="error">{error}</Notice>}

      {sellers.length === 0 ? (
        <p className="text-[15px] text-[var(--muted)]">No sellers yet. Approve an application to create one.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {sellers.map((s) => (
            <li key={s.id} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-serif text-xl">{s.storeName}</span>
                  <Badge kind={s.status} />
                  {s.isFoundingSeller && <Badge kind="FOUNDING" />}
                </div>
                <span className="text-sm text-[var(--muted)]">
                  {s.user.email} · /sellers/{s.slug} · since {s.createdAt.toLocaleDateString("en-US", { dateStyle: "medium" })}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <form action={setFoundingSellerAction}>
                  <input type="hidden" name="sellerId" value={s.id} />
                  <input type="hidden" name="founding" value={s.isFoundingSeller ? "off" : "on"} />
                  <button type="submit" className={secondaryButtonClass}>
                    {s.isFoundingSeller ? "Remove Founding badge" : "Make Founding Seller"}
                  </button>
                </form>
                <form action={setSellerStatusAction}>
                  <input type="hidden" name="sellerId" value={s.id} />
                  <input type="hidden" name="status" value={s.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE"} />
                  <button type="submit" className={s.status === "ACTIVE" ? dangerButtonClass : secondaryButtonClass}>
                    {s.status === "ACTIVE" ? "Suspend" : "Reactivate"}
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
