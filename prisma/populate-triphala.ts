import { run } from "./lib/populate-herb";

// Triphala, an Ayurvedic blend of three fruits (Phyllanthus emblica, Terminalia
// bellirica, Terminalia chebula), from a verified source: a review of its
// therapeutic uses (Peterson et al. 2017). Families per GBIF / Catalogue of
// Life. No source covering side effects, interactions, pregnancy or
// breastfeeding was used, so none is stated.

run({
  name: "Triphala",
  profile: {
    family: "Phyllanthaceae (the leafflower family) for amalaki; Combretaceae (the combretum family) for bibhitaki and haritaki",
    genus: "Phyllanthus / Terminalia",
    species: "emblica / bellirica / chebula",
    partsUsed: "The dried fruits of three plants",
  },
  sources: {
    peterson: {
      title: "Therapeutic Uses of Triphala in Ayurvedic Medicine",
      author: "Peterson CT, Denniston K, Chopra D",
      journal: "Journal of Alternative and Complementary Medicine",
      organization: "Journal of Alternative and Complementary Medicine",
      publicationDate: "2017-07-11",
      doi: "10.1089/acm.2017.0083",
      pmid: "28696777",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5567597/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Amalaki", type: "TRADITIONAL_NAME" },
    { name: "Bibhitaki", type: "TRADITIONAL_NAME" },
    { name: "Haritaki", type: "TRADITIONAL_NAME" },
    { name: "Emblica officinalis", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "ayurveda", notes: "A cornerstone of digestive and rejuvenating treatment, made from three fruits: amalaki, bibhitaki and haritaki." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Triphala is a well-known Ayurvedic medicine made from the fruits of three plants: amalaki (Emblica officinalis), bibhitaki (Terminalia bellirica) and haritaki (Terminalia chebula). It is a cornerstone of digestive and rejuvenating treatment, and is used as a laxative.",
      source: "peterson",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In animal studies, triphala extracts prevented diarrhea, protected the gut lining, protected against stress ulcers and reduced colitis. Lab research suggests its plant compounds encourage helpful gut bacteria (Bifidobacteria and Lactobacillus) and discourage unwanted ones.",
      source: "peterson",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "One clinical trial in people with digestive disorders reported that triphala reduced constipation, mucus, belly pain, excess stomach acid and gas, and improved how often and how easily people passed stools. More clinical research is needed.",
      source: "peterson",
    },
  ],
  symptoms: [
    { slug: "constipation", notes: "Used as a laxative in Ayurveda. One clinical trial reported less constipation." },
    { slug: "bloating", notes: "One clinical trial reported less gas and belly pain." },
  ],
});
