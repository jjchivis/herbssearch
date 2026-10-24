import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth-guards";
import { safeNextPath } from "@/lib/safe-redirect";
import { SignInForm } from "./sign-in-form";

export const metadata: Metadata = { title: "Sign in", robots: { index: false } };

export default async function SignInPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next } = await searchParams;
  const target = safeNextPath(next);
  if (await getCurrentUser()) redirect(target);

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col gap-6 px-6 py-16">
      <header className="flex flex-col gap-2">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">Sign in</h1>
        <p className="text-[15px] text-[var(--muted)]">
          Enter your email and we&apos;ll send you a link to sign in. No password needed. New here? The same link creates
          your account.
        </p>
      </header>
      <SignInForm next={target} />
    </main>
  );
}
