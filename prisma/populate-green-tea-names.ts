import { run } from "./lib/populate-herb";

// Adds "White Prakash" as another name for Green Tea (Camellia sinensis), at
// the site owner's request (seen in research they have read).

run({
  name: "Green Tea",
  sources: {},
  synonyms: [{ name: "White Prakash", type: "COMMON_NAME" }],
});
