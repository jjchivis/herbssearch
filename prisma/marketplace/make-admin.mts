import { randomUUID } from "node:crypto";
import { prisma } from "../../src/lib/prisma";

// Makes an email address a marketplace admin, creating the account if it
// doesn't exist yet (signing in with that email then uses this account).
// Run through the branch guard:
//   scripts/with-marketplace-env.sh npx tsx prisma/marketplace/make-admin.mts you@example.com

const email = process.argv[2]?.trim().toLowerCase();
if (!email || !email.includes("@")) {
  console.error("Usage: make-admin.mts <email>");
  process.exit(1);
}

const user = await prisma.user.upsert({
  where: { email },
  update: { role: "admin" },
  create: { id: randomUUID(), email, name: email.split("@")[0], role: "admin" },
});
console.log(`${user.email} is now an admin.`);
await prisma.$disconnect();
