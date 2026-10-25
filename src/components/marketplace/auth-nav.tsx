"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

// Loaded in the browser so the herb pages stay statically rendered and fast.
export function AuthNav() {
  const { data: session, isPending } = authClient.useSession();

  return (
    <>
      <Link href="/sell" className="hover:text-[var(--foreground)]">
        Sell
      </Link>
      {isPending ? (
        <span className="w-14" aria-hidden="true" />
      ) : session ? (
        <>
          <Link href="/cart" className="hover:text-[var(--foreground)]">
            Cart
          </Link>
          <Link href="/account" className="hover:text-[var(--foreground)]">
            Account
          </Link>
        </>
      ) : (
        <Link href="/sign-in" className="hover:text-[var(--foreground)]">
          Sign in
        </Link>
      )}
    </>
  );
}
