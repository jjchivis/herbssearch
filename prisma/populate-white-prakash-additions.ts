import { run } from "./lib/populate-herb";

// Adds the Camellia sinensis section of a 2024 review of anticancer medicinal
// plants (Bajpai et al., Intelligent Pharmacy), supplied by the site owner, to
// the White Prakash (Camellia sinensis) page.

run({
  name: "White Prakash",
  sources: {
    bajpai: {
      title: "Recent advances in anticancer approach of traditional medicinal plants: A novel strategy for cancer chemotherapy",
      author: "Bajpai P, Usmani S, Kumar R, Prakash O",
      journal: "Intelligent Pharmacy",
      doi: "10.1016/j.ipha.2024.02.001",
      url: "https://doi.org/10.1016/j.ipha.2024.02.001",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "A 2024 review of plants studied against cancer describes a lab study in which saponins (soap-like compounds) from tea plant flowers slowed the growth of ovarian cancer cells and triggered their death. This used the flowers, not white tea leaves, and has not been tested in people.\n\nTechnical detail: 1.5 μg/ml saponins in A2780/CP70 and OVCAR-3 cells; p53-dependent apoptosis and S-phase arrest.",
      source: "bajpai",
    },
  ],
});
