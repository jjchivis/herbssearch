import Image from "next/image";
import type { ReactNode } from "react";

// The apothecary picture used as a banner on the marketplace pages (Shop,
// store pages, Sell with us). Its children sit over the darkened lower part,
// so use cream text (bannerText / bannerMuted) inside it.

export const bannerText = "text-[#f8f2e2]";
export const bannerMuted = "text-[#f1e6cc]";

export function ApothecaryBanner({ children }: { children: ReactNode }) {
  return (
    <header className="relative isolate flex min-h-64 flex-col justify-end gap-2 overflow-hidden rounded-xl p-6 sm:min-h-80 sm:p-10">
      <Image
        src="/shop/apothecary.webp"
        alt=""
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 1024px"
        className="-z-10 object-cover object-[50%_40%]"
      />
      {/* Darkens the lower part so the text stays readable over the picture. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1f2a17]/90 via-[#1f2a17]/60 to-[#1f2a17]/5" />
      {children}
    </header>
  );
}
