import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

// Tests touch the database, so `npm test` runs them through
// scripts/with-marketplace-env.sh, which refuses to use the live database.
export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  test: { environment: "node", include: ["tests/**/*.test.ts"], fileParallelism: false, testTimeout: 30000 },
});
