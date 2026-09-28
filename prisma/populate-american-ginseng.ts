import { run } from "./lib/populate-herb";

// American ginseng (Panax quinquefolius), from verified sources: a systematic
// review of ginseng for preventing colds (Seida et al. 2011) and a review of
// complementary medicine for colds (Nahas & Balla 2011). Family per GBIF /
// Catalogue of Life. No source covering pregnancy, breastfeeding or medicine
// interactions was used, so none is stated.

run({
  name: "American Ginseng",
  profile: {
    family: "Araliaceae",
    genus: "Panax",
    species: "quinquefolius",
    partsUsed: "The root",
  },
  sources: {
    seida: {
      title: "North American (Panax quinquefolius) and Asian Ginseng (Panax ginseng) Preparations for Prevention of the Common Cold in Healthy Adults: A Systematic Review",
      author: "Seida JK, Durec T, Kuhle S",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      organization: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2011-02-14",
      doi: "10.1093/ecam/nep068",
      pmid: "19592479",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3136130/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    nahas: {
      title: "Complementary and alternative medicine for prevention and treatment of the common cold",
      author: "Nahas R, Balla A",
      journal: "Canadian Family Physician",
      organization: "Canadian Family Physician",
      publicationDate: "2011-01-01",
      pmid: "21322286",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3024156/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Panax quinquefolius", type: "COMMON_NAME" },
    { name: "North American Ginseng", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A review of 5 trials with 747 healthy adults, all testing North American ginseng, found:\n- In one trial, it cut the total number of colds by 25% compared with placebo.\n- There was a trend toward fewer people catching a cold or respiratory infection, but it wasn't statistically significant.\n- In two trials, colds lasted about 6 days less.\nThe authors concluded it may shorten colds when taken for 8 to 16 weeks to prevent them, but there isn't enough evidence that it reduces how often or how badly people get colds.\n\nTechnical detail: incidence RR 0.70 (95% CI 0.48 to 1.02); duration −6.2 days (95% CI 3.4 to 9.0); trial quality varied widely.",
      source: "seida",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "A review for family doctors found the evidence for North American ginseng in preventing colds inconsistent, and said it needs more research.",
      source: "nahas",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "In the cold-prevention trials, side effects were mostly digestive. In one trial they were more common with ginseng than placebo (7% vs 1%).",
      source: "seida",
    },
  ],
  symptoms: [
    { slug: "seasonal-immune-support", notes: "Taken for 8 to 16 weeks, it shortened colds in healthy adults in a few trials; evidence is inconsistent." },
    { slug: "colds-and-congestion", notes: "Studied for preventing colds; it may shorten them but may not prevent them." },
  ],
});
