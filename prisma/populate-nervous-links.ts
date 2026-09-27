import { run } from "./lib/populate-herb";

// Adds nervous-system topics to herbs that already have full profiles. Each link
// rests on a sourced entry already on the herb's page (NCCIH and the review
// sources cited there).

run(
  {
    name: "Valerian",
    sources: {},
    symptoms: [
      {
        slug: "occasional-sleeplessness",
        notes: "Traditionally used for sleep. A review of 60 studies found a modest, inconsistent improvement; US sleep experts advise against it for long-term insomnia.",
      },
      { slug: "anxiety", notes: "Traditionally used in Europe for anxiety and restlessness. A review found a modest, inconsistent effect." },
    ],
  },
  {
    name: "Lavender",
    sources: {},
    symptoms: [
      {
        slug: "anxiety",
        notes: "Research suggests lavender oil taken by mouth might help anxiety, but the studies have limitations.",
      },
    ],
  },
);
