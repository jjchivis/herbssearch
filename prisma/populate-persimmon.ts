import { run } from "./lib/populate-herb";

// Persimmon (Diospyros kaki, the common persimmon), from a 2015 review (Butt
// et al.) and a 2024 trial of a fruit extract (Pérez-Piñero et al.). Family
// per GBIF.

run({
  name: "Persimmon",
  profile: {
    family: "Ebenaceae",
    genus: "Diospyros",
    species: "kaki",
    nativeRange: "China; now grown in warm temperate regions worldwide",
    partsUsed: "The fruit and leaves",
  },
  sources: {
    butt: {
      title: "Persimmon (Diospyros kaki) fruit: hidden phytochemicals and health claims",
      author: "Butt MS, Sultan MT, Aziz M, et al.",
      journal: "EXCLI Journal",
      publicationDate: "2015-05-04",
      doi: "10.17179/excli2015-159",
      pmid: "27047315",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4817420/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    perez: {
      title: "Efficacy of a Dietary Supplement Extracted from Persimmon (Diospyros kaki L.f.) in Overweight Healthy Adults: A Randomized, Double-Blind, Controlled Clinical Trial",
      author: "Pérez-Piñero S, Muñoz-Carrillo JC, Echepare-Taberna J, et al.",
      journal: "Foods",
      publicationDate: "2024-12-17",
      doi: "10.3390/foods13244072",
      pmid: "39767014",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11675947/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Kaki", type: "COMMON_NAME" }, { name: "Japanese Persimmon", type: "COMMON_NAME" }],
  constituents: [
    { name: "Proanthocyanidins", slug: "proanthocyanidins", type: "polyphenol" },
    { name: "Tannins", slug: "tannins", type: "polyphenol" },
  ],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "Persimmon fruit is rich in proanthocyanidins, carotenoids, tannins and flavonoids with strong antioxidant activity. In studies, its compounds helped against high cholesterol and high blood sugar.",
      source: "butt",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial, overweight adults took 400 mg of a persimmon fruit extract or a placebo daily for 120 days. The persimmon group lost more body fat, weight and waist size, without losing muscle. Cholesterol and blood sugar didn't change.\n\nTechnical detail: randomized, double-blind, placebo-controlled (NCT05750342); DEXA and BIA fat mass, p < 0.001.",
      source: "perez",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Unripe persimmons are very astringent, and eating persimmons can form hard masses in the stomach (diospyrobezoars).",
      source: "butt",
    },
  ],
});
