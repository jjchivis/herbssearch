import { run } from "./lib/populate-herb";

// Sweet Leaf, stevia (Stevia rebaudiana), from the FDA's sweeteners page and a
// 2026 review of human studies (Scott et al.). Family per GBIF.

run({
  name: "Sweet Leaf",
  profile: {
    family: "Asteraceae",
    genus: "Stevia",
    species: "rebaudiana",
    nativeRange: "Parts of South America",
    partsUsed: "The leaves",
  },
  sources: {
    fda: {
      title: "Aspartame and Other Sweeteners in Food",
      organization: "U.S. Food and Drug Administration",
      url: "https://www.fda.gov/food/food-additives-petitions/aspartame-and-other-sweeteners-food",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    scott: {
      title: "Stevia Rebaudiosides Usage as a Sugar Reduction Tool: A Narrative Review of Their Metabolic, Gut Microbiome and Weight Management Effects in Human Clinical Studies",
      author: "Scott C, Stamataki N, McLaughlin J",
      journal: "Nutrients",
      publicationDate: "2026-06-20",
      doi: "10.3390/nu18122002",
      pmid: "42356389",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13305536/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Stevia", type: "COMMON_NAME" }],
  constituents: [
    { name: "Steviol Glycosides", slug: "steviol-glycosides", type: "diterpene glycoside" },
    { name: "Rebaudioside A", slug: "rebaudioside-a", type: "diterpene glycoside" },
  ],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Sweeteners made from stevia leaves taste sweet with little or no calories. In short human studies, they had no clear effect on blood sugar, insulin, blood fats, appetite hormones or gut bacteria. Replacing sugar with stevia led to very small weight changes. The studies lasted three months at most, and longer ones are needed.",
      source: "scott",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "In the US, highly purified stevia sweeteners (at least 95% steviol glycosides) are accepted as safe in food. Whole stevia leaf and crude stevia extracts aren't, and they can't be imported as sweeteners.\n\nTechnical detail: acceptable daily intake 4 mg/kg body weight per day, as steviol equivalents (JECFA).",
      source: "fda",
    },
  ],
});
