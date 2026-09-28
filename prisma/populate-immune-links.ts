import { run } from "./lib/populate-herb";

// Adds the immune topic to herbs that already have full profiles. Each link
// rests on a sourced entry already on the herb's page.

run({
  // Andrographis: Memorial Sloan Kettering entry on colds and flu.
  name: "Andrographis",
  sources: {},
  symptoms: [
    { slug: "seasonal-immune-support", notes: "Mostly studied for colds and flu; it may shorten symptoms and make them less severe." },
  ],
});
