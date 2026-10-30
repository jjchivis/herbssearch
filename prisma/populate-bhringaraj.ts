import { run } from "./lib/populate-herb";

// Bhringaraj (Eclipta prostrata, syn. Eclipta alba), from a 2021 review of its
// traditional uses, chemistry and biological activities (Timalsina & Devkota),
// found by direct PubMed Central search. The only studies in people tested it
// in mixtures with other herbs, so none are listed here. No North American uses
// were found in the Native American Ethnobotany Database. Family per GBIF.

run({
  name: "Bhringaraj",
  profile: {
    family: "Asteraceae",
    genus: "Eclipta",
    species: "prostrata",
    nativeRange: "Tropical and subtropical regions; widely used in India, Nepal and Bangladesh",
    partsUsed: "The whole plant, especially the leaves and shoots",
  },
  sources: {
    timalsina: {
      title: "Eclipta prostrata (L.) L. (Asteraceae): Ethnomedicinal Uses, Chemical Constituents, and Biological Activities",
      author: "Timalsina D, Devkota HP",
      journal: "Biomolecules",
      publicationDate: "2021-11-01",
      doi: "10.3390/biom11111738",
      pmid: "34827736",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8615741/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Eclipta alba", type: "SCIENTIFIC_SYNONYM" }],
  traditions: [
    { slug: "ayurveda", notes: "Used as a revitalizing, anti-aging herb." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Traditional uses recorded across South Asia and beyond:\n- India: skin problems, jaundice and other liver problems, stomach and gut problems, asthma, fever, hair loss and graying hair, cuts and wounds, and an enlarged spleen.\n- India: leaf juice with honey for mucus and congestion in babies, and shoot juice with mustard oil for diarrhea and dysentery.\n- Nepal: the leaves and shoots, to prevent and treat infected wounds.\n- Bangladesh: jaundice.\n- South America: some groups use it for snakebites.\n- Ayurveda: a revitalizing, anti-aging herb.",
      source: "timalsina",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In animal studies, a leaf extract put on the skin helped hair regrow almost as fast as 2% minoxidil, a standard hair-loss treatment: about 19 days to full regrowth, compared with 16. The review notes it's not clear whether it helps hair loss caused by disease, aging or genetics.\n\nTechnical detail: ethanolic leaf extract; 19.01 ± 0.51 vs 16.05 ± 0.41 days; hair length at day 30, 21.08 vs 22.13 mm.",
      source: "timalsina",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats with chemically caused liver damage, a water extract of the leaves lowered raised liver enzymes and bilirubin.\n\nTechnical detail: carbon tetrachloride-induced hepatotoxicity; 250 mg/kg; reduced GOT, GPT and bilirubin.",
      source: "timalsina",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, extracts and compounds from the plant have shown activity against microbes and cancer cells. Few studies have pinned down which compounds are responsible, and the review's authors call for more animal and clinical studies.\n\nTechnical detail: coumestans (including wedelolactone), phenolic acids, flavonoids, triterpenoid and steroid saponins, and thiophenes.",
      source: "timalsina",
    },
  ],
  symptoms: [
    {
      slug: "hair-loss",
      notes: "Traditionally used for hair loss and graying hair. In animal studies a leaf extract helped hair regrow; it hasn't been tested on its own in people.",
    },
    {
      slug: "liver-disease",
      notes: "Traditionally used for jaundice in India and Bangladesh. A leaf extract protected the liver in rats; it hasn't been tested in people.",
    },
    {
      slug: "wounds-and-burns",
      notes: "Traditional use only: used for cuts, wounds and burns in India and Nepal. Not studied in people.",
    },
    {
      slug: "fever",
      notes: "Traditional use only: used for fever in India. Not studied in people.",
    },
  ],
});
