"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { secondaryButtonClass } from "@/components/marketplace/ui";

export function SignOutButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      className={secondaryButtonClass}
      onClick={async () => {
        await authClient.signOut();
        router.push("/");
        router.refresh();
      }}
    >
      Sign out
    </button>
  );
}
