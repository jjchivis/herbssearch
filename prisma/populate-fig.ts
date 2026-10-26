import { run } from "./lib/populate-herb";

// Fig (Ficus carica), from a 2022 review (Hajam & H) and a 2025 trial of fig
// syrup for constipation in pregnancy (Valizadeh et al.). Family per GBIF.

run({
  name: "Fig",
  profile: {
    family: "Moraceae",
    genus: "Ficus",
    species: "carica",
    nativeRange: "Western Asia and the Mediterranean; now grown in warm regions worldwide",
    partsUsed: "The fruit and leaves",
  },
  sources: {
    hajam: {
      title: "Phytochemistry, biological activities, industrial and traditional uses of fig (Ficus carica): A review",
      author: "Hajam TA, H S",
      journal: "Chemico-Biological Interactions",
      publicationDate: "2022-10-23",
      doi: "10.1016/j.cbi.2022.110237",
      pmid: "36288779",
      url: "https://pubmed.ncbi.nlm.nih.gov/36288779/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    valizadeh: {
      title: "The effect of combined fig-Walnut syrup on functional constipation in pregnant women: a randomized controlled trial",
      author: "Valizadeh R, Mohammad-Alizadeh-Charandabi S, Hajizadeh K, Araj-Khodaei M, Mirghafourvand M",
      journal: "Nutrition & Metabolism",
      publicationDate: "2025-01-17",
      doi: "10.1186/s12986-025-00895-3",
      pmid: "39825362",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11742795/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Common Fig", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Figs have traditionally been used as remedies for inflammation, stomach problems and cancer.",
      source: "hajam",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The fruit and leaves are rich in phenolic compounds and organic acids. In lab and animal studies, they showed many effects, including antioxidant activity, protecting the liver, lowering blood sugar, easing constipation and killing some microbes.",
      source: "hajam",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial, 90 pregnant women with constipation took fig syrup, fig and walnut syrup, or a placebo (15 mL each night) for 2 weeks. Both fig syrups increased bowel movements compared with the placebo and improved quality of life. The authors say more studies are needed.\n\nTechnical detail: double-blind randomized trial; quality of life AMD −5.8 (95% CI −3.1 to −8.6) for fig syrup vs placebo.",
      source: "valizadeh",
    },
  ],
});
