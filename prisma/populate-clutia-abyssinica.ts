import { run } from "./lib/populate-herb";

// Clutia Abyssinica (Clutia abyssinica), from mouse studies of its leaf for liver
// protection (Meharie et al. 2020) and its root for diarrhea (Zayede et al. 2020),
// and a 2005 Tanzanian antimicrobial study (de Boer et al.). Family per GBIF.

run({
  name: "Clutia Abyssinica",
  profile: { family: "Peraceae", genus: "Clutia", species: "abyssinica", nativeRange: "East and Central Africa", partsUsed: "The leaves and roots" },
  sources: {
    meharie: {
      title: "Evaluation of Hepatoprotective Activity of the Crude Extract and Solvent Fractions of Clutia abyssinica (Euphorbiaceae) Leaf Against CCl4-Induced Hepatotoxicity in Mice",
      author: "Meharie BG, Amare GG, Belayneh YM",
      journal: "Journal of Experimental Pharmacology",
      publicationDate: "2020-06-09",
      doi: "10.2147/JEP.S248677",
      pmid: "32607005",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7294107/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    zayede: {
      title: "Antidiarrheal Activity of Hydromethanolic Root Extract and Solvent Fractions of Clutia abyssinica Jaub. & Spach. (Euphorbiaceae) in Mice",
      author: "Zayede D, Mulaw T, Kahaliw W",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2020-01-17",
      doi: "10.1155/2020/5416749",
      pmid: "32419812",
      url: "https://doi.org/10.1155/2020/5416749",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    deboer: {
      title: "Anti-fungal and anti-bacterial activity of some herbal remedies from Tanzania",
      author: "de Boer HJ, Kool A, Broberg A, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2005-01-15",
      doi: "10.1016/j.jep.2004.09.035",
      pmid: "15619565",
      url: "https://doi.org/10.1016/j.jep.2004.09.035",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The most widely used liver remedy in Ethiopian traditional medicine. The leaves are also used for hepatitis and jaundice, dysentery, gastritis, high blood pressure, shingles, ringworm and other fungal skin infections, and parasites.",
      source: "meharie",
    },
    {
      category: "TRADITIONAL",
      summary: "The roots are a folk remedy for diarrhea, and the Pare people of Tanzania use the plant as medicine.",
      source: "zayede",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, a leaf extract protected the liver from chemical damage.",
      source: "meharie",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, a root extract reduced diarrhea and slowed the gut.",
      source: "zayede",
    },
    {
      category: "PRECLINICAL",
      summary: "Extracts were active against several fungi and bacteria in lab tests.",
      source: "deboer",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found.",
      source: "meharie",
    },
  ],
  symptoms: [
    { slug: "diarrhea", notes: "A traditional diarrhea remedy; reduced diarrhea in mice. Not tested in people." },
    { slug: "fungal-skin-infections", notes: "Used for ringworm and other fungal skin infections. Not tested in people." },
  ],
});
