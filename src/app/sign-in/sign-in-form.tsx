"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Field, Notice, buttonClass, inputClass } from "@/components/marketplace/ui";

export function SignInForm({ next }: { next: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    const { error } = await authClient.signIn.magicLink({ email, callbackURL: next });
    setState(error ? "error" : "sent");
  }

  if (state === "sent") {
    return (
      <Notice tone="success">
        Check your inbox at <strong>{email}</strong>. The link expires in 5 minutes and works once.
      </Notice>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <Field label="Email" htmlFor="email">
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </Field>
      {state === "error" && <Notice tone="error">We couldn&apos;t send the link. Check the address and try again.</Notice>}
      <button type="submit" disabled={state === "sending"} className={buttonClass}>
        {state === "sending" ? "Sending…" : "Email me a sign-in link"}
      </button>
    </form>
  );
}
