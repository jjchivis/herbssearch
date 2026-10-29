import { run } from "./lib/populate-herb";

// Agathosma crenulata (oval-leaf or long-leaf buchu), from a 2022 review
// (Brendler & Abdel-Tawab) and excerpts of a 2008 review (Moolla & Viljoen).
// Family per GBIF.

run({
  name: "Agathosma Crenulata",
  profile: {
    family: "Rutaceae",
    genus: "Agathosma",
    species: "crenulata",
    nativeRange: "The Western Cape, South Africa",
    partsUsed: "The leaves and their essential oil",
  },
  sources: {
    brendler: { title: "Buchu (Agathosma betulina and A. crenulata): Rightfully Forgotten or Underutilized?", author: "Brendler T, Abdel-Tawab M", journal: "Frontiers in Pharmacology", publicationDate: "2022-02-07", doi: "10.3389/fphar.2022.813142", pmid: "35197854", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8859318/", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
    moolla: { title: "'Buchu' – Agathosma betulina and Agathosma crenulata (Rutaceae): A review", author: "Moolla A, Viljoen AM", journal: "Journal of Ethnopharmacology", publicationDate: "2008-10-30", doi: "10.1016/j.jep.2008.07.036", pmid: "18725278", url: "https://www.sciencedirect.com/science/article/pii/S0378874108003966", sourceType: "peer_reviewed", tier: "TIER_3_PEER_REVIEWED" },
  },
  synonyms: [
    { name: "Oval-Leaf Buchu", type: "COMMON_NAME" },
    { name: "Long-Leaf Buchu", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Pulegone", slug: "pulegone", type: "monoterpene ketone" }],
  traditions: [{ slug: "african-traditional-medicine", notes: "One of the two buchu species of the Khoi-San." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The Khoi-San used the word \"buchu\" for any fragrant plant that could be dried and powdered. Today it means two species: round-leaf buchu (Agathosma betulina) and this one, oval-leaf or long-leaf buchu.",
      source: "moolla",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Buchu was used by the Khoisan for kidney and urinary infections, colds, stomach problems, rheumatism, gout and fever, and became a popular urinary remedy in Europe and the US in the 1800s. This species was dropped from the official American drug references by 1906, while round-leaf buchu stayed in longer.",
      source: "brendler",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, the essential oils of both buchu species blocked an enzyme involved in inflammation, and leaf extracts had moderate antioxidant activity. There are no human trials.",
      source: "brendler",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Its essential oil contains more pulegone than round-leaf buchu. Pulegone damaged the liver in rats at high doses, so the reviewers advise caution with this oil and prefer round-leaf buchu. Pulegone doesn't dissolve in water, so this caution doesn't apply to water extracts such as tea.",
      source: "brendler",
    },
  ],
});
