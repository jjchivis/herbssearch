import { run } from "./lib/populate-herb";

// Alstonia boonei, from a 2012 review (Adotey et al.) and a 2025 case report
// of liver and kidney injury from a product containing it (Zacharia et al.).
// Family per GBIF.

run({
  name: "Alstonia Boonei",
  profile: {
    family: "Apocynaceae",
    genus: "Alstonia",
    species: "boonei",
    nativeRange: "West and Central Africa",
    partsUsed: "The bark, leaves and roots",
  },
  sources: {
    adotey: {
      title: "A Review of the Ethnobotany and Pharmacological Importance of Alstonia boonei De Wild (Apocynaceae)",
      author: "Adotey JP, Adukpo GE, Opoku Boahen Y, Armah FA",
      journal: "ISRN Pharmacology",
      publicationDate: "2012-07-30",
      doi: "10.5402/2012/587160",
      pmid: "22900200",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3413980/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    zacharia: {
      title: "Complementary and Alternative Medicine-Induced Combined Hepatorenal Toxicity: A Case Report",
      author: "Zacharia GS, Ravte V, Jyala A, Shehi E",
      journal: "Cureus",
      publicationDate: "2025-12-27",
      doi: "10.7759/cureus.100197",
      pmid: "41602262",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12834359/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "God's Tree", type: "COMMON_NAME" },
    { name: "Onyame Dua", type: "REGIONAL_NAME", region: "Ghana" },
  ],
  constituents: [{ name: "Echitamidine", slug: "echitamidine", type: "alkaloid" }],
  traditions: [{ slug: "african-traditional-medicine", notes: "Sacred in some West African forest communities; used for malaria and fever." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Called God's tree (Onyame dua) in Ghana, Alstonia boonei is sacred in some West African forest communities, so its parts aren't eaten. It is traditionally used for malaria, fever, diabetes and infections, and as an aphrodisiac.",
      source: "adotey",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Lab and animal studies support its use against malaria and fever, and found antimicrobial and blood-sugar-lowering effects. It is rich in alkaloids and triterpenes.",
      source: "adotey",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "A man who took an herbal product containing Alstonia boonei, prekese and papaya extracts developed serious liver and kidney damage, which improved after he stopped. Alstonia boonei has been linked to liver and kidney damage in animal studies.",
      source: "zacharia",
    },
  ],
});
