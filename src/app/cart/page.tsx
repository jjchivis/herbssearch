import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { requireUser } from "@/lib/auth-guards";
import { MAX_QUANTITY, getCart } from "@/lib/marketplace/orders";
import { formatPrice } from "@/lib/marketplace/products";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CheckoutButton } from "@/components/marketplace/checkout-button";
import { inputClass, secondaryButtonClass } from "@/components/marketplace/ui";
import { updateCartAction } from "./actions";

export const metadata: Metadata = { title: "Your cart", robots: { index: false } };

export default async function CartPage() {
  const user = await requireUser("/cart");
  const cart = await getCart(user.id);

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-6 py-12">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }, { label: "Your cart" }]} />
      <h1 className="font-serif text-4xl text-[var(--foreground)]">Your cart</h1>

      {cart.isEmpty ? (
        <p className="text-[15px] text-[var(--muted)]">
          Your cart is empty.{" "}
          <Link href="/shop" className="underline underline-offset-2 hover:text-[var(--highlight)]">
            Browse the shop
          </Link>
          .
        </p>
      ) : (
        <>
          {cart.stores.length > 1 && (
            <p className="text-[15px] text-[var(--muted)]">
              Your items come from {cart.stores.length} stores. Each store ships its own package and charges its own shipping.
            </p>
          )}
          {cart.stores.map(({ seller, lines, plan }) => (
            <section key={seller.id} className="flex flex-col gap-4 rounded-lg border border-[var(--border)] p-5">
              <h2 className="font-serif text-xl text-[var(--foreground)]">
                From{" "}
                <Link href={`/sellers/${seller.slug}`} className="hover:text-[var(--highlight)]">
                  {seller.storeName}
                </Link>
              </h2>
              <ul className="flex flex-col gap-4">
                {lines.map(({ item, product, image, problem }) => (
                  <li key={item.id} className="flex gap-4">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded">
                      {image && (
                        <Image src={image.url} alt={image.alt} fill sizes="80px" className={image.illustration ? "object-contain" : "object-cover"} />
                      )}
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <Link href={`/products/${product.slug}`} className="font-serif text-lg leading-snug hover:text-[var(--highlight)]">
                        {product.name}
                      </Link>
                      <span className="text-sm text-[var(--muted)]">{formatPrice(product.priceCents)} each</span>
                      {problem && (
                        <p role="alert" className="text-sm text-[var(--caution)]">
                          {problem}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-2">
                        <form action={updateCartAction} className="flex items-center gap-2">
                          <input type="hidden" name="productId" value={product.id} />
                          <label htmlFor={`qty-${item.id}`} className="sr-only">
                            Quantity
                          </label>
                          <select id={`qty-${item.id}`} name="quantity" defaultValue={String(item.quantity)} className={`${inputClass} w-20 py-1.5`}>
                            {Array.from({ length: Math.max(item.quantity, Math.min(Math.max(product.inventory, 1), MAX_QUANTITY)) }, (_, i) => i + 1).map((n) => (
                              <option key={n} value={n}>
                                {n}
                              </option>
                            ))}
                          </select>
                          <button type="submit" className={`${secondaryButtonClass} px-3 py-1.5`}>
                            Update
                          </button>
                        </form>
                        <form action={updateCartAction}>
                          <input type="hidden" name="productId" value={product.id} />
                          <input type="hidden" name="quantity" value="0" />
                          <button type="submit" className="text-sm text-[var(--muted)] underline underline-offset-2 hover:text-[var(--highlight)]">
                            Remove
                          </button>
                        </form>
                      </div>
                    </div>
                    <span className="text-[15px] font-medium">{formatPrice(product.priceCents * item.quantity)}</span>
                  </li>
                ))}
              </ul>
              {plan && (
                <p className="flex justify-between border-t border-[var(--border)] pt-3 text-sm text-[var(--muted)]">
                  <span>Shipping from {seller.storeName}</span>
                  <span>{plan.shippingCents === 0 ? "Free" : formatPrice(plan.shippingCents)}</span>
                </p>
              )}
            </section>
          ))}

          <section className="ml-auto flex w-full max-w-sm flex-col gap-3">
            <dl className="flex flex-col gap-1 text-[15px]">
              <div className="flex justify-between">
                <dt className="text-[var(--muted)]">Items</dt>
                <dd>{formatPrice(cart.itemsCents)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[var(--muted)]">Shipping</dt>
                <dd>{formatPrice(cart.shippingCents)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[var(--muted)]">Tax</dt>
                <dd className="text-[var(--muted)]">Added at checkout</dd>
              </div>
              <div className="flex justify-between border-t border-[var(--border)] pt-2 font-medium">
                <dt>Subtotal</dt>
                <dd>{formatPrice(cart.itemsCents + cart.shippingCents)}</dd>
              </div>
            </dl>
            <CheckoutButton disabled={cart.hasProblems} />
            <p className="text-xs text-[var(--muted)]">
              You&apos;ll pay on Stripe&apos;s secure checkout page. We ship to US addresses only for now.
            </p>
          </section>
        </>
      )}
    </main>
  );
}
