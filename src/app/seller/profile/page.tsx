import { requireSeller } from "@/lib/auth-guards";
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
          This is what shoppers see about you. Logo upload is coming soon. Your store&apos;s web address stays{" "}
          <span className="font-mono text-sm">/sellers/{seller.slug}</span> even if you rename it.
        </p>
      </header>
      {suspended && <Notice tone="error">Your store is suspended, so it can&apos;t be edited right now.</Notice>}
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
