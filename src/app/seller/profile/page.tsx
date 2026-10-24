import Image from "next/image";
import { requireSeller } from "@/lib/auth-guards";
import { logoPathPrefix } from "@/lib/marketplace/products";
import { ImageUpload } from "@/components/marketplace/image-upload";
import { setLogoAction } from "../products/actions";
import { Notice } from "@/components/marketplace/ui";
import { ProfileForm } from "./profile-form";

export default async function StoreProfilePage() {
  const { seller } = await requireSeller("/seller/profile");
  const suspended = seller.status !== "ACTIVE";

  return (
    <>
      <header className="flex flex-col gap-2">
        <h1 className="font-serif text-4xl text-[var(--foreground)]">Store profile</h1>
        <p className="text-[15px] text-[var(--muted)]">
          This is what shoppers see about you. Your store&apos;s web address stays{" "}
          <span className="font-mono text-sm">/sellers/{seller.slug}</span> even if you rename it.
        </p>
      </header>
      {suspended && <Notice tone="error">Your store is suspended, so it can&apos;t be edited right now.</Notice>}
      <section className="flex flex-col gap-3">
        <h2 className="font-serif text-2xl text-[var(--foreground)]">Logo</h2>
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-full border border-[var(--border)]">
            {seller.logoUrl ? (
              <Image src={seller.logoUrl} alt={`${seller.storeName} logo`} fill sizes="80px" className="object-cover" />
            ) : (
              <span className="flex h-full items-center justify-center font-serif text-2xl text-[var(--muted)]">
                {seller.storeName.slice(0, 1)}
              </span>
            )}
          </div>
          {!suspended && (
            <ImageUpload
              label={seller.logoUrl ? "Replace logo" : "Upload logo"}
              pathPrefix={logoPathPrefix(seller.id)}
              payload={{ kind: "logo" }}
              onUploaded={setLogoAction}
            />
          )}
        </div>
      </section>
      <ProfileForm
        disabled={suspended}
        profile={{
          storeName: seller.storeName,
          description: seller.description,
          website: seller.website,
          contactEmail: seller.contactEmail,
        }}
      />
    </>
  );
}
