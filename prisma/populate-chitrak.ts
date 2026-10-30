import { run } from "./lib/populate-herb";

// Chitrak (Plumbago zeylanica), from three studies found by direct PubMed Central
// search: an Ayurvedic purification (shodhana) procedure (Bhinde et al. 2020), a
// rat toxicity study (Kumar et al. 2015) and a rat liver study of the purified
// root (Akhilraj et al. 2021). No studies in people were found, and the sources
// don't give a native range. Family per GBIF.

run({
  name: "Chitrak",
  profile: {
    family: "Plumbaginaceae",
    genus: "Plumbago",
    species: "zeylanica",
    partsUsed: "The root, purified before use",
  },
  sources: {
    bhinde: {
      title: "Standard operating procedure of Purification of Chitraka (Plumbago zeylanica Linn.) along with pharmacognostical and analytical profiles of Plumbagin",
      author: "Bhinde SS, Ravi AK, Patgiri BJ, Harisha CR, Shukla VJ",
      journal: "Ayu",
      publicationDate: "2020-04-01",
      doi: "10.4103/ayu.AYU_299_20",
      pmid: "34908796",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8614202/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kumar: {
      title: "Comparative toxicity profiles of Plumbago zeylanica L. root petroleum ether, acetone and hydroalcoholic extracts in Wistar rats",
      author: "Kumar D, Patil PA, Roy S, Kholkute SD, Hegde HV, Nair V",
      journal: "Ayu",
      publicationDate: "2015-07-01",
      doi: "10.4103/0974-8520.182750",
      pmid: "27313422",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4895762/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    akhilraj: {
      title: "Comparative hepatoprotective activity of detoxified roots of Plumbago zeylanica L. and Plumbago rosea L. in Wistar rats",
      author: "Akhilraj AR, Bhat S, Priyalatha B, Vimala KS",
      journal: "Journal of Ayurveda and Integrative Medicine",
      publicationDate: "2021-07-01",
      doi: "10.1016/j.jaim.2021.04.002",
      pmid: "34366166",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8377173/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Chitraka", type: "TRADITIONAL_NAME", region: "India (Ayurveda)" },
    { name: "Ceylon leadwort", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "ayurveda",
      notes: "A well-known Ayurvedic medicine; the root is purified in lime water before use, and the classics name it as a remedy for liver disorders.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Chitraka is a well-known Ayurvedic medicine. Its root is used, and Ayurveda requires it to be purified before use to remove its harmful effects. This purification, called shodhana, involves soaking the root in lime water.\n\nTechnical detail: in one study, plumbagin content was 0.29% before and 0.98% after purification with churnodaka (lime water).",
      source: "bhinde",
    },
    {
      category: "TRADITIONAL",
      summary: "The root is used in traditional medicine for long-lasting inflammatory diseases and other disorders.",
      source: "kumar",
    },
    {
      category: "TRADITIONAL",
      summary: "The Ayurveda classics name chitraka as a remedy for liver disorders.",
      source: "akhilraj",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats given an overdose of paracetamol (acetaminophen), a tea made by boiling purified chitrak root reduced liver damage.\n\nTechnical detail: detoxified root decoction; lower SGOT, SGPT, alkaline phosphatase and bilirubin, with regenerative changes on histology; Plumbago rosea was more protective than P. zeylanica.",
      source: "akhilraj",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "In rats, chitrak root extracts given for 28 days damaged the liver and kidneys. The most toxic extract killed half the rats at about 93 mg per kg of body weight. Toxicity rose with the amount of plumbagin, a compound in the root.\n\nTechnical detail: OECD 425 and 407; LD50 93.45 mg/kg (petroleum ether), 928.4 mg/kg (acetone and hydroalcoholic extracts); raised AST, urea and creatinine.",
      source: "kumar",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "Ayurveda uses chitrak root only after purification (shodhana) in lime water, to remove its harmful effects.",
      source: "bhinde",
    },
  ],
  symptoms: [
    {
      slug: "liver-disease",
      notes:
        "Named in Ayurveda as a remedy for liver disorders. A purified-root tea protected rats' livers, but root extracts damaged the liver in another rat study. Not tested in people.",
    },
  ],
  preparations: [
    {
      slug: "decoction",
      notes: "A tea made by boiling purified root was tested in rats.",
      source: "akhilraj",
    },
  ],
});
