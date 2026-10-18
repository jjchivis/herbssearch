import { run } from "./lib/populate-herb";

// Adds the high blood pressure topic to herbs that already have full profiles.
// Each link rests on a sourced entry already on the herb's page.

run(
  {
    // Cilantro: human study of coriander seed powder on its page.
    name: "Cilantro",
    sources: {},
    symptoms: [
      { slug: "high-blood-pressure", notes: "One human study linked 2 g of coriander seed powder a day to lower blood pressure and cholesterol." },
    ],
  },
  {
    // Scutellaria Baicalensis: the 1593 Compendium of Materia Medica (Zhao et al. review).
    name: "Scutellaria Baicalensis",
    sources: {},
    symptoms: [
      { slug: "high-blood-pressure", notes: "Listed for high blood pressure in the 1593 Compendium of Materia Medica. Not tested on its own in trials." },
    ],
  },
  {
    name: "Cleavers",
    sources: {},
    symptoms: [{ slug: "high-blood-pressure", notes: "A traditional folk use. Not tested in trials." }],
  },
  {
    name: "Parsley",
    sources: {},
    symptoms: [{ slug: "high-blood-pressure", notes: "A traditional use. Not tested in trials." }],
  },
  {
    name: "Ginger",
    sources: {},
    symptoms: [{ slug: "high-blood-pressure", notes: "A traditional use. Not tested in trials." }],
  },
);
