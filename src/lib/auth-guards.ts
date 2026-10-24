import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { Actor } from "@/lib/marketplace/sellers";

// Server-side permission checks. Every marketplace page and server action goes
// through one of these; nothing relies on the browser hiding a button.

export async function getCurrentUser() {
  const session = await auth.api.getSession({ headers: await headers() });
  return session?.user ?? null;
}

export function toActor(user: { id: string; role?: string | null }): Actor {
  return { id: user.id, role: user.role === "admin" ? "admin" : "customer" };
}

/** Signed-in user, or a redirect to sign-in that returns to `returnTo`. */
export async function requireUser(returnTo: string) {
  const user = await getCurrentUser();
  if (!user) redirect(`/sign-in?next=${encodeURIComponent(returnTo)}`);
  return user;
}

/** Admins only. Everyone else gets a 404, so admin pages aren't advertised. */
export async function requireAdmin() {
  const user = await getCurrentUser();
  if (!user || user.role !== "admin") notFound();
  return user;
}

/**
 * The signed-in user's own store. The seller is always looked up from the
 * session's user id, never from an id in the URL or form.
 */
export async function requireSeller(returnTo: string) {
  const user = await requireUser(returnTo);
  const seller = await prisma.seller.findUnique({ where: { userId: user.id } });
  if (!seller) redirect("/sell");
  return { user, seller };
}
