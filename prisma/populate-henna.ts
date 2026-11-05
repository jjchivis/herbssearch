import { run } from "./lib/populate-herb";

// Henna (Lawsonia inermis), from the FDA fact sheet on temporary tattoos, henna
// and black henna, a 2026 systematic review of human studies (Chilmeran et al.,
// abstract only), a 2026 systematic review of allergy to pure henna (Ben Yahia et
// al., abstract only) and a 2025 case of henna-triggered hemolysis in a child
// with G6PD deficiency (Dike et al.). Family per GBIF.

run({
  name: "Henna",
  profile: { family: "Lythraceae", genus: "Lawsonia", species: "inermis", nativeRange: "North Africa, the Middle East and South Asia", partsUsed: "The leaves" },
  sources: {
    fda: {
      title: "Temporary Tattoos, Henna/Mehndi, and \"Black Henna\": Fact Sheet",
      organization: "US Food and Drug Administration",
      url: "https://www.fda.gov/cosmetics/cosmetic-products/temporary-tattoos-hennamehndi-and-black-henna-fact-sheet",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    chilmeran: {
      title: "Clinical Efficacy and Safety of Lawsonia inermis (Henna): A Systematic Review of Human Clinical Studies",
      author: "Chilmeran Z, Mahdi A, Hussain A, Sharafeldin AB, Fredericks S",
      journal: "Complementary Therapies in Medicine",
      publicationDate: "2026-10-31",
      doi: "10.1016/j.ctim.2026.103470",
      pmid: "42966605",
      url: "https://doi.org/10.1016/j.ctim.2026.103470",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    benyahia: {
      title: "Allergic Contact Dermatitis to Pure Henna: A Systematic Review",
      author: "Ben Yahia M, Korbi M, Belhadjali H, Salah NB, Youssef M, Zili J",
      journal: "Contact Dermatitis",
      publicationDate: "2026-07-31",
      doi: "10.1111/cod.70227",
      pmid: "42535430",
      url: "https://doi.org/10.1111/cod.70227",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    dike: {
      title: "Henna-Induced Intravascular Hemolysis in a Glucose-6-Phosphate Dehydrogenase-Deficient Ghanaian Female Child with Full Defect",
      author: "Dike NO, Blankson ES, Segnitome S",
      journal: "International Medical Case Reports Journal",
      publicationDate: "2025-08-14",
      doi: "10.2147/IMCRJ.S534544",
      pmid: "40831552",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12360392/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Mehndi", type: "COMMON_NAME" }],
  constituents: [{ name: "Lawsone", slug: "lawsone", type: "naphthoquinone" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Henna is a plant dye used for centuries on hair, skin and nails, including the body art known as mehndi, in Africa and Asia.",
      source: "dike",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2026 review of 24 human studies found some results favoring henna for various conditions, but the evidence was low or very low quality and doesn't show it's reliably effective or safe. It shouldn't replace standard care.",
      source: "chilmeran",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "In the US, henna is approved only as a hair dye, not for use on the skin. \"Black henna\" usually contains a hair dye chemical, p-phenylenediamine (PPD), that can cause dangerous skin reactions and scarring, and make you allergic to hair dyes.",
      source: "fda",
    },
    {
      category: "ALLERGY",
      description: "Even pure henna can cause allergic skin reactions, from a local rash to an immediate severe reaction, in both adults and children.",
      source: "benyahia",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Henna can trigger the breakdown of red blood cells (hemolysis) in people with G6PD deficiency, an inherited enzyme disorder. An 8-year-old girl in Ghana had severe hemolysis after henna was put on her skin.",
      source: "dike",
    },
  ],
});
