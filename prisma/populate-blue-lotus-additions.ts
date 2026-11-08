import { run } from "./lib/populate-herb";

// Adds a 2008 lab study of antioxidant compounds in blue lotus flowers
// (Agnihotri et al.) to the existing Blue Lotus page. Prompted by a skincare
// blog the site owner shared; the blog's skin claims were not backed by
// studies, so only the underlying lab research is cited.

run({
  name: "Blue Lotus",
  sources: {
    agnihotri: {
      title: "Antioxidant constituents of Nymphaea caerulea flowers",
      author: "Agnihotri VK, ElSohly HN, Khan SI, et al.",
      journal: "Phytochemistry",
      publicationDate: "2008-07-01",
      doi: "10.1016/j.phytochem.2008.04.009",
      pmid: "18534639",
      url: "https://doi.org/10.1016/j.phytochem.2008.04.009",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "Blue lotus is now added to skincare products. In a 2008 lab study, 20 compounds were isolated from its flowers, mostly flavonoids such as myricetin, quercetin and kaempferol, and nine of them acted as antioxidants in a test tube. No studies have tested blue lotus on human skin, so its skincare benefits are unproven.\n\nTechnical detail: active compounds had IC50 values of 0.34–11.0 μg/ml; the ethyl acetate fraction was most active (IC50 0.2 μg/ml).",
      source: "agnihotri",
    },
  ],
});
