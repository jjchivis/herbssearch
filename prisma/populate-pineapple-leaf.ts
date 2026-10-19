import { run } from "./lib/populate-herb";

// Pineapple leaf (Ananas comosus), from a 2024 study of a water extract of the leaf
// in rats (Ugbogu et al.). No human or safety sources beyond this, so none are listed.

run({
  name: "Pineapple Leaf",
  profile: {
    family: "Bromeliaceae",
    genus: "Ananas",
    species: "comosus",
    partsUsed: "The leaves",
  },
  sources: {
    ugbogu: {
      title: "Phytochemical characterization, anti-diarrhoeal, analgesic, anti-inflammatory activities and toxicity profile of Ananas comosus (L.) Merr (pineapple) leaf in albino rats",
      author: "Ugbogu EA, Okoro H, Emmanuel O, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2023-09-23",
      doi: "10.1016/j.jep.2023.117224",
      pmid: "37748634",
      url: "https://pubmed.ncbi.nlm.nih.gov/37748634/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Ananas comosus", type: "COMMON_NAME" },
    { name: "Pineapple Leaves", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In traditional medicine, pineapple leaf is used for diarrhoea, inflammation, pain, bacterial infections and swelling.",
      source: "ugbogu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a study in rats, a water extract of pineapple leaf reduced diarrhoea, pain and swelling. A single large dose caused no deaths or signs of poisoning, and 28 days of use lowered liver enzyme levels and blood fats. It hasn't been tested in people.\n\nTechnical detail: single oral dose up to 5,000 mg/kg; 200–600 mg/kg for 28 days lowered AST, ALT, total cholesterol, triglycerides and LDL, and raised HDL.",
      source: "ugbogu",
    },
  ],
  symptoms: [
    { slug: "diarrhea", notes: "Traditionally used for diarrhoea; reduced diarrhoea in rats. Not tested in people." },
  ],
});
