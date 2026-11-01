"use client";

import { useState } from "react";

// Share a Herbal Kitchen page: the device share sheet where available, plus
// copy-link, Facebook, Pinterest and email. No third-party scripts are loaded.
export function ShareButtons({ path, title, image }: { path: string; title: string; image: string }) {
  const [copied, setCopied] = useState(false);
  const url = () => new URL(path, window.location.origin).toString();

  const chip =
    "inline-flex min-h-10 items-center rounded-full border border-[var(--border)] px-4 text-sm text-[var(--foreground)] transition-colors hover:border-[var(--highlight)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--highlight)]";

  function open(make: (u: string) => string) {
    window.open(make(encodeURIComponent(url())), "_blank", "noopener,noreferrer");
  }

  return (
    <div className="flex flex-wrap items-center gap-2" data-print-hide>
      <span className="mr-1 text-sm text-[var(--muted)]">Share:</span>
      <button
        type="button"
        className={chip}
        onClick={async () => {
          if (navigator.share) {
            try {
              await navigator.share({ title, url: url() });
              return;
            } catch {
              // Cancelled or unavailable: fall back to copying the link.
            }
          }
          await navigator.clipboard?.writeText(url());
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
      >
        {copied ? "Link copied" : "Copy link"}
      </button>
      <button type="button" className={chip} onClick={() => open((u) => `https://www.facebook.com/sharer/sharer.php?u=${u}`)}>
        Facebook
      </button>
      <button
        type="button"
        className={chip}
        onClick={() =>
          open(
            (u) =>
              `https://www.pinterest.com/pin/create/button/?url=${u}&media=${encodeURIComponent(new URL(image, window.location.origin).toString())}&description=${encodeURIComponent(title)}`,
          )
        }
      >
        Pinterest
      </button>
      <a className={chip} href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(path)}`} onClick={(e) => {
        e.currentTarget.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url())}`;
      }}>
        Email
      </a>
    </div>
  );
}
