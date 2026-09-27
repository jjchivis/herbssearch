import { run } from "./lib/populate-herb";

// Adds skin topics to herbs that already have full profiles. Each link rests on
// a sourced entry already on the herb's page.

run({
  // Nettle: traditional use for cuts and wounds (Devkota et al. leaf review) and
  // the stinging rash from the fresh plant (Cummings & Olsen 2011).
  name: "Nettle",
  sources: {},
  symptoms: [
    {
      slug: "wounds-and-burns",
      notes: "Traditionally used in Europe, Asia and Africa for cuts and wounds. This hasn't been tested in people.",
    },
    {
      slug: "skin-irritation",
      notes: "Touching the fresh plant causes a stinging rash, and nettle taken by mouth can cause itching, rash or hives. Dried or cooked nettle doesn't sting.",
    },
  ],
});
