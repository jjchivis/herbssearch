import { run } from "./lib/populate-herb";

// Adds the "Sensitive Plant" name (already used in this herb's summary) so
// searches for it find Shame O' Lady (Mimosa pudica).

run({
  name: "Shame O' Lady",
  sources: {},
  synonyms: [{ name: "Sensitive Plant", type: "COMMON_NAME" }],
});
