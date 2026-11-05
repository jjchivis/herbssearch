import { run } from "./lib/populate-herb";

// Era (Gnetum africanum, eru), from a 2026 study of four African leafy vegetables
// (Rangel et al., abstract only), a 2026 meta-analysis of Congo Basin leafy
// vegetables (Begouabe et al., abstract only) and a 2025 Nigerian survey of plants
// used for obesity (Anyanwu et al.). Family per GBIF.

run({
  name: "Era",
  profile: { family: "Gnetaceae", genus: "Gnetum", species: "africanum", nativeRange: "Central and West Africa", partsUsed: "The leaves" },
  sources: {
    rangel: {
      title: "Biochemical potential of four widely consumed African leafy vegetables",
      author: "Rangel J, Liberal Â, Finimundy TC, et al.",
      journal: "Food Research International",
      publicationDate: "2026-07-05",
      doi: "10.1016/j.foodres.2026.119926",
      pmid: "42632680",
      url: "https://doi.org/10.1016/j.foodres.2026.119926",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    begouabe: {
      title: "Nutritional, mineral, and bioactive composition of indigenous leafy vegetables from the Congo Basin: A systematic review and meta-analysis",
      author: "Begouabe H, Mbogho Abogo J, Obiang-Nze JA, et al.",
      journal: "Food Research International",
      publicationDate: "2026-05-12",
      doi: "10.1016/j.foodres.2026.119410",
      pmid: "42215083",
      url: "https://doi.org/10.1016/j.foodres.2026.119410",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    anyanwu: {
      title: "An Ethnobotanical Survey and Pharmacological and Toxicity Review of Medicinal Plants Used in the Management of Obesity in the North Central Zone of Nigeria",
      author: "Anyanwu GO, Anzaku D, Bulus YJ, et al.",
      journal: "Journal of Obesity",
      publicationDate: "2025-02-05",
      doi: "10.1155/jobe/5568216",
      pmid: "40026359",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11870763/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Eru", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Era (eru) is one of the most widely eaten wild leafy vegetables in Central and West Africa, boiled into soups and side dishes.",
      source: "rangel",
    },
    {
      category: "TRADITIONAL",
      summary: "In north central Nigeria it's among the plants traditionally used to manage obesity.",
      source: "anyanwu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Congo Basin leafy vegetables including eru are nutrient-dense, with good amounts of protein, calcium, iron and vitamin C. In lab tests, eru extracts were rich in plant compounds and had the strongest germ-fighting effect of four African greens tested.",
      source: "begouabe",
    },
  ],
  safety: [
    { category: "PREPARATION_SPECIFIC", description: "Eaten as a cooked vegetable. No medical or safety studies were found.", source: "rangel" },
  ],
  preparations: [{ slug: "culinary-preparation", notes: "Leaves boiled in soups and side dishes.", source: "rangel" }],
});
