import { run } from "./lib/populate-herb";

// Cloves (Syzygium aromaticum), from verified sources: the EMA/HMPC community
// herbal monograph on clove oil (2011) and a review of clove essential oil
// (Pandey et al. 2024). Family per GBIF / Catalogue of Life.

run({
  name: "Cloves",
  profile: {
    family: "Myrtaceae",
    genus: "Syzygium",
    species: "aromaticum",
    partsUsed: "The flowers and their essential oil",
  },
  sources: {
    ema: {
      title: "Community herbal monograph on Syzygium aromaticum (L.) Merill et L.M. Perry, floris aetheroleum (EMA/HMPC/534924/2010)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2011-09-13",
      url: "https://www.ema.europa.eu/en/documents/herbal-monograph/final-community-herbal-monograph-syzygium-aromaticum-l-merill-et-l-m-perry-floris-aetheroleum_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    pandey: {
      title: "Bioactive properties of clove (Syzygium aromaticum) essential oil nanoemulsion: A comprehensive review",
      author: "Pandey VK, Srivastava S, Ashish, et al.",
      journal: "Heliyon",
      organization: "Heliyon",
      publicationDate: "2023-11-30",
      doi: "10.1016/j.heliyon.2023.e22437",
      pmid: "38163240",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10755278/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Clove", type: "COMMON_NAME" },
    { name: "Clove Oil", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Eugenol", slug: "eugenol", type: "phenylpropanoid" }],
  traditions: [
    { slug: "european-folk-medicine", notes: "Clove oil is recognized in Europe as a traditional medicine for toothache and minor mouth and throat inflammation." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Based on long-standing use, the European Medicines Agency recognizes clove oil as a traditional herbal medicine for adults:\n- Minor inflammation in the mouth or throat (as a 1% to 5% mouthwash)\n- Temporary relief of toothache from a cavity (applied to the tooth)",
      source: "ema",
    },
    {
      category: "TRADITIONAL",
      summary: "Cloves are a kitchen spice also used in medicine and cosmetics. Clove oil is a popular natural remedy for toothache and gum pain.",
      source: "pandey",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, clove essential oil, which is rich in eugenol, killed bacteria and fungi, reduced inflammation and relieved pain. It hasn't been tested for immunity in people.",
      source: "pandey",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description: "Clove oil can irritate the lining of the mouth and cause allergic reactions. When using it for toothache, avoid getting it on the gums.",
      source: "ema",
    },
    {
      category: "ALLERGY",
      description: "Don't use clove oil if you're allergic to it or to Peru balsam.",
      source: "ema",
    },
    {
      category: "DOSAGE",
      description: "Clove oil medicines aren't recommended for anyone under 18. See a doctor if symptoms get worse.",
      source: "ema",
    },
    {
      category: "PREGNANCY",
      description: "Its safety during pregnancy and breastfeeding hasn't been established, so it isn't recommended at these times.",
      source: "ema",
    },
  ],
  symptoms: [
    { slug: "seasonal-immune-support", notes: "In lab tests clove oil kills bacteria and fungi; it hasn't been tested for immunity in people." },
    { slug: "sore-throat", notes: "Recognized in Europe as a mouthwash for minor mouth and throat inflammation." },
  ],
});
