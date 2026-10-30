import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

// pg already treats sslmode=require as verify-full but warns that its next major
// version will make it weaker, so ask for verify-full by name.
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL?.replace(
    /([?&]sslmode=)(prefer|require|verify-ca)\b/,
    "$1verify-full",
  ),
});

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
