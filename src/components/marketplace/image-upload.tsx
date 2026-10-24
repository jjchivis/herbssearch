"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { upload } from "@vercel/blob/client";
import { Notice, secondaryButtonClass } from "@/components/marketplace/ui";

/**
 * Uploads one image straight from the browser to Vercel Blob (the server only
 * issues a token for the seller's own folder), then hands the result to a
 * server action that records it.
 */
export function ImageUpload({
  label,
  pathPrefix,
  payload,
  onUploaded,
}: {
  label: string;
  pathPrefix: string;
  payload: Record<string, string>;
  onUploaded: (blob: { url: string; pathname: string }) => Promise<{ error: string | null }>;
}) {
  const router = useRouter();
  const input = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) return setError("Use a JPEG, PNG or WebP image.");
    if (file.size > 5 * 1024 * 1024) return setError("Images can be at most 5 MB.");
    setBusy(true);
    try {
      const safeName = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, "-").slice(-60);
      const blob = await upload(`${pathPrefix}${safeName}`, file, {
        access: "public",
        handleUploadUrl: "/api/marketplace/upload",
        clientPayload: JSON.stringify(payload),
      });
      const result = await onUploaded({ url: blob.url, pathname: blob.pathname });
      if (result.error) setError(result.error);
      else router.refresh();
    } catch (err) {
      setError((err as Error).message || "The upload failed. Please try again.");
    } finally {
      setBusy(false);
      if (input.current) input.current.value = "";
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <label className={`${secondaryButtonClass} w-fit cursor-pointer`}>
        {busy ? "Uploading…" : label}
        <input ref={input} type="file" accept="image/jpeg,image/png,image/webp" onChange={onChange} disabled={busy} className="sr-only" />
      </label>
      <p className="text-xs text-[var(--muted)]">JPEG, PNG or WebP, up to 5 MB.</p>
      {error && <Notice tone="error">{error}</Notice>}
    </div>
  );
}
