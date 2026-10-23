import { run } from "./lib/populate-herb";

// Adds to Oregano without touching populate-oregano.ts: a wound-healing trial
// (Ragi et al. 2011), found through a 2023 World Journal of Pharmaceutical
// Research review that isn't itself cited (low-quality journal, factual errors).

run({
  name: "Oregano",
  sources: {
    ragi: {
      title: "Oregano extract ointment for wound healing: a randomized, double-blind, petrolatum-controlled study evaluating efficacy",
      author: "Ragi J, Pappert A, Rao B, Havkin-Frenkel D, Milgraum S",
      journal: "Journal of Drugs in Dermatology",
      organization: "Journal of Drugs in Dermatology",
      publicationDate: "2011-10-01",
      pmid: "21968667",
      url: "https://pubmed.ncbi.nlm.nih.gov/21968667/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  evidence: [
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a US trial, 40 people who'd had skin surgery used a 3% oregano extract ointment or plain petroleum jelly on their wound. Fewer oregano wounds grew Staphylococcus aureus bacteria (19% vs 41%), and 1 person in the oregano group got a skin infection compared with 3 in the petroleum jelly group. Overall scars looked about the same, though the oregano group did better on scar color and flexibility. It was a small trial.\n\nTechnical detail: randomized, double-blind, petrolatum-controlled; cultures on day 12; Patient and Observer Scar Assessment Scale on days 12, 45 and 90; cellulitis 1 vs 3.",
      source: "ragi",
    },
  ],
  symptoms: [
    {
      slug: "wounds-and-burns",
      notes:
        "In one small trial, a 3% oregano extract ointment on surgical wounds meant fewer wounds grew staph bacteria than with petroleum jelly. Scars looked about the same overall.",
    },
  ],
});
