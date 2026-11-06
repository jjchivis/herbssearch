import { run } from "./lib/populate-herb";

// Black Henbane (Hyoscyamus niger), from a 2014 descriptive review of its
// toxicity (Alizadeh et al.) and two recent poisoning case reports (Hassan 2024;
// Yucal and Yucal 2026). Common name per USDA PLANTS; family per GBIF.

run({
  name: "Black Henbane",
  profile: { family: "Solanaceae", genus: "Hyoscyamus", species: "niger", partsUsed: "The leaves, seeds and roots (all poisonous)" },
  sources: {
    alizadeh: {
      title: "Black henbane and its toxicity - a descriptive review",
      author: "Alizadeh A, Moshiri M, Alizadeh J, Balali-Mood M",
      journal: "Avicenna Journal of Phytomedicine",
      publicationDate: "2014-09-01",
      pmid: "25386392",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4224707/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    hassan: {
      title: "Hyoscyamus niger poisoning in Sudan: A case report",
      author: "Hassan IN",
      journal: "Tropical Doctor",
      publicationDate: "2024-10-18",
      doi: "10.1177/00494755241289456",
      pmid: "39420840",
      url: "https://doi.org/10.1177/00494755241289456",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    yucal: {
      title: "Hyperactivity and Euphoria Without Agitation Due to Hyoscyamus niger (Henbane) Poisoning in a Child",
      author: "Yucal A, Yucal M",
      journal: "Cureus",
      publicationDate: "2026-04-23",
      doi: "10.7759/cureus.107588",
      pmid: "42181405",
      url: "https://doi.org/10.7759/cureus.107588",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Henbane", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Used as a medicine for centuries and described in many traditional medicine systems. Chinese and Indian traditional medicine used it for stomachache, heavy cough and nerve pain. Anglo-Saxon healers used it for toothache.",
      source: "alizadeh",
    },
    {
      category: "TRADITIONAL",
      summary: "Every part contains tropane alkaloids, including hyoscyamine, atropine and scopolamine. These relax muscles, dry up secretions, widen the pupils and act on the brain.",
      source: "alizadeh",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Poisonous. Poisoning causes wide pupils, a fast or irregular heartbeat, dry mouth, hot flushed skin, fever, blurred vision, trouble urinating, confusion, hallucinations, seizures and coma. It can be deadly, especially in children.",
      source: "alizadeh",
    },
    {
      category: "TOXICITY",
      description: "A gardener who ate parts of the plant became confused, saw things and had wide pupils. He recovered in hospital.",
      source: "hassan",
    },
    {
      category: "TOXICITY",
      description: "An 11-year-old boy who ate about a tablespoon of the seeds became hyperactive, disoriented and had hallucinations. He recovered within 24 hours.",
      source: "yucal",
    },
  ],
});
