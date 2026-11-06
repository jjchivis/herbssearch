import { run } from "./lib/populate-herb";

// Daisy (Bellis perennis), from a 2023 review of its compounds and effects (Albien
// and Stark), a 2012 rat wound study (Karakaş et al.) and a 2005 homeopathic trial
// for bleeding after childbirth (Oberbaum et al.). Family per GBIF.

run({
  name: "Daisy",
  profile: { family: "Asteraceae", genus: "Bellis", species: "perennis", nativeRange: "Europe and western Asia", partsUsed: "The flowers and leaves" },
  sources: {
    albien: {
      title: "(Bio)active Compounds in Daisy Flower (Bellis perennis)",
      author: "Albien AL, Stark TD",
      journal: "Molecules",
      publicationDate: "2023-11-22",
      doi: "10.3390/molecules28237716",
      pmid: "38067445",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10707873/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    karakas: {
      title: "The evaluation of topical administration of Bellis perennis fraction on circular excision wound healing in Wistar albino rats",
      author: "Karakaş FP, Karakaş A, Boran Ç, et al.",
      journal: "Pharmaceutical Biology",
      publicationDate: "2012-08-01",
      doi: "10.3109/13880209.2012.656200",
      pmid: "22775421",
      url: "https://doi.org/10.3109/13880209.2012.656200",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    oberbaum: {
      title: "The effect of the homeopathic remedies Arnica montana and Bellis perennis on mild postpartum bleeding--a randomized, double-blind, placebo-controlled study--preliminary results",
      author: "Oberbaum M, Galoyan N, Lerner-Geva L, et al.",
      journal: "Complementary Therapies in Medicine",
      publicationDate: "2005-06-01",
      doi: "10.1016/j.ctim.2005.03.006",
      pmid: "16036165",
      url: "https://doi.org/10.1016/j.ctim.2005.03.006",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Common Daisy", type: "COMMON_NAME" },
    { name: "Lawn Daisy", type: "COMMON_NAME" },
    { name: "English Daisy", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The common lawn daisy, traditionally used to help wounds heal.",
      source: "karakas",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats, an ointment from daisy flowers fully closed skin wounds within 30 days without scarring.",
      source: "karakas",
    },
    {
      category: "PRECLINICAL",
      summary: "Lab studies suggest its compounds may have antioxidant, antimicrobial and insulin-like effects and may affect fat metabolism, but which compounds are responsible is unclear.",
      source: "albien",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In a small trial of 40 new mothers, homeopathic arnica and daisy pills kept hemoglobin steadier after childbirth than placebo. Homeopathic pills are diluted so much they contain almost none of the plant.",
      source: "oberbaum",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human safety studies of daisy herb were found.",
      source: "albien",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "A traditional wound remedy; healed wounds in rats. Not tested in people." },
  ],
});
