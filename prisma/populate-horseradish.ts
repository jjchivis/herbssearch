import { run } from "./lib/populate-herb";

// Horseradish (Armoracia rusticana), from a 2017 lab study of horseradish root
// extract (Herz et al.) and a 2026 randomized trial of a nasturtium herb and
// horseradish root medicine for recurrent cystitis (Albrecht et al.; sponsored
// by the product's maker, Repha GmbH).

run({
  name: "Horseradish",
  profile: {
    family: "Brassicaceae",
    genus: "Armoracia",
    species: "rusticana",
    partsUsed: "The root, as a condiment and in herbal medicines",
  },
  sources: {
    herz: {
      title: "Evaluation of an Aqueous Extract from Horseradish Root (Armoracia rusticana Radix) against Lipopolysaccharide-Induced Cellular Inflammation Reaction",
      author: "Herz C, Tran HT, Márton MR, et al.",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2017-01-15",
      doi: "10.1155/2017/1950692",
      pmid: "28182113",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5274677/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    albrecht: {
      title: "Clinical evaluation of the efficacy and safety of nasturtium herb and horseradish root versus placebo in the continuous prophylaxis of recurrent uncomplicated cystitis: a double-blind randomised clinical trial",
      author: "Albrecht U, Schmitz G, Stefenelli U, et al.",
      journal: "BMC Complementary Medicine and Therapies",
      publicationDate: "2026-03-05",
      doi: "10.1186/s12906-026-05328-z",
      pmid: "41782129",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13063873/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Armoracia rusticana", type: "COMMON_NAME" },
    { name: "Horseradish Root", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Horseradish root is used as a hot, sharp-smelling condiment. In traditional medicine it's used for bacterial infections of the airways and bladder, such as sinusitis, bronchitis and bladder infections.",
      source: "herz",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Horseradish root is rich in glucosinolates, sulphur compounds that break down into the sharp-tasting mustard oils. In lab tests, a water extract of the root reduced an inflammation signal in immune cells. This hasn't been tested in people.\n\nTechnical detail: inhibited LPS-induced TNF-α release at 37 µg/mL and above; glucosinolates include sinigrin.",
      source: "herz",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2026 German trial, 217 women with repeated bladder infections took a medicine combining nasturtium herb and horseradish root, or a dummy pill, for 6 months. About 36% of the herbal group had another infection, compared with 48% of the dummy-pill group. Side effects were similar in both groups. The trial was paid for by the medicine's maker, and it tested the combination, not horseradish alone.\n\nTechnical detail: recurrence hazard ratio 0.64 (95% CI 0.42 to 0.97); product Angocin Anti-Infekt N; EudraCT 2013-004653-25.",
      source: "albrecht",
    },
  ],
  symptoms: [
    { slug: "urinary-tract-infections", notes: "A trial paid for by the maker found a nasturtium and horseradish medicine reduced repeat bladder infections in women." },
  ],
});
