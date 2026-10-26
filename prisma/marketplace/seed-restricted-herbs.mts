import { prisma } from "../../src/lib/prisma";

// Herbs that can't be sold to eat or drink in the marketplace (prints, books,
// seeds and other non-ingestible goods are still allowed). Idempotent.
// Cannabis isn't in the library, so it's restricted by wording instead
// (RESTRICTED_TERMS in src/lib/marketplace/products.ts).
// Run: scripts/with-marketplace-env.sh npx tsx prisma/marketplace/seed-restricted-herbs.mts

const RESTRICTED: Record<string, string> = {
  Belladonna: "Poisonous; the library flags it as toxic.",
  Foxglove: "Poisonous; contains heart-affecting glycosides.",
  Pokeberry: "Poisonous; the library flags it as toxic.",
  "Abrus Precatorius": "Seeds contain abrin, one of the deadliest known poisons.",
  "Chinaberry Bark": "Poisonous; the library flags it as toxic.",
  Contribo: "Contains aristolochic acids, which damage the kidneys and cause cancer.",
  "Calamus Root": "Barred by the FDA as a food additive.",
  Comfrey: "Contains liver-damaging pyrrolizidine alkaloids when taken internally.",
  Mitragyna: "Kratom; banned or restricted in several states.",
  Yohimbe: "Serious heart and blood pressure risks; restricted in some countries.",
  Kava: "Prohibited by our payment provider (Stripe) and linked to liver damage.",
  // Added 2026-10-25 with the new herb cards. Herbs not yet in this database
  // are skipped with a warning and restricted once they exist.
  Datura: "Every part is poisonous; causes hallucinations, seizures and death.",
  "Nicotiana Glauca": "Tree tobacco; its leaves contain anabasine, which can stop breathing.",
  "Cassia Occidentalis": "The seeds and leaves have caused fatal liver, muscle and brain damage.",
  "Red Jurema": "The roots contain the hallucinogen DMT.",
  Angico: "The seeds contain hallucinogens that can harm the heart and nerves.",
  Mandrake: "Poisonous; contains hallucinogenic tropane alkaloids.",
  "Echinopsis Pachanoi": "San Pedro cactus; contains the hallucinogen mescaline.",
  Arcayuyo: "Its oil contains ascaridole and has caused a fatal poisoning.",
};

// Removed from the list (poppy seeds are a legal food; opium, pods and straw are
// blocked by wording instead).
const UNRESTRICTED = ["Poppy"];
for (const name of UNRESTRICTED) {
  const herb = await prisma.herb.findUnique({ where: { name } });
  if (herb) await prisma.restrictedHerb.deleteMany({ where: { herbId: herb.id } });
}

for (const [name, reason] of Object.entries(RESTRICTED)) {
  const herb = await prisma.herb.findUnique({ where: { name } });
  if (!herb) {
    console.warn(`Not found in the library: ${name}`);
    continue;
  }
  await prisma.restrictedHerb.upsert({ where: { herbId: herb.id }, update: { reason }, create: { herbId: herb.id, reason } });
}
console.log(`Restricted herbs: ${await prisma.restrictedHerb.count()}`);
await prisma.$disconnect();
