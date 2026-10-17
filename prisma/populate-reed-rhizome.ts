import { run } from "./lib/populate-herb";

// Reed Rhizome (Phragmitis Rhizoma, lu gen, from Phragmites australis /
// P. communis), from a 2026 study of its effect on high uric acid (Saleem et al.)
// and a 2026 lab study of its polysaccharides (Gao et al.; abstract only).

run({
  name: "Reed Rhizome",
  profile: {
    family: "Poaceae",
    genus: "Phragmites",
    species: "australis",
    nativeRange: "Worldwide, on the banks of rivers, lakes and ponds and in low wetlands",
    partsUsed: "The fresh or dried underground stem (rhizome)",
  },
  sources: {
    saleem: {
      title: "Phragmites Communis (Lu Gen) Alleviates Hyperuricemia via Xanthine Oxidase Inhibition and Gut-Microbiota-Mediated Metabolite Urate Transporter Regulation",
      author: "Saleem A, Walayat B, Xue Q, Ansari I, Wei X, Li M",
      journal: "Pharmaceuticals",
      publicationDate: "2026-09-17",
      doi: "10.3390/ph19091474",
      pmid: "42797519",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13610185/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gao: {
      title: "The physiochemical characteristics of Phragmites communis trin polysaccharides and in vitro anti-diabetic effects of their different fractions",
      author: "Gao W, Che K, Zhou B, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2026-04-01",
      doi: "10.3389/fphar.2026.1727657",
      pmid: "41993585",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13079151/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Lu Gen", type: "TRADITIONAL_NAME" },
    { name: "Lugen", type: "TRADITIONAL_NAME" },
    { name: "Reed Root", type: "COMMON_NAME" },
    { name: "Phragmitis Rhizoma", type: "COMMON_NAME" },
    { name: "Common Reed", type: "COMMON_NAME" },
    { name: "Phragmites communis", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called lu gen; used to \"clear heat\" and increase urination, for fever, nausea and urinary problems." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Lu gen is the fresh or dried underground stem of the common reed, which grows worldwide on riverbanks and in wetlands. In Chinese medicine it's used to \"clear heat\" and increase urination, and has been prescribed for fever, nausea and urinary problems.",
      source: "saleem",
    },
    {
      category: "TRADITIONAL",
      summary: "Chinese medical texts also record its use for conditions like diabetes.",
      source: "gao",
    },
    {
      category: "PRECLINICAL",
      summary: "In a 2026 lab and animal study, a reed rhizome extract lowered high uric acid levels (linked to gout) by blocking the enzyme that makes uric acid and helping the kidneys and gut clear it. It also reduced inflammation and helped the gut lining. This hasn't been tested in people.",
      source: "saleem",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, a polysaccharide from the rhizome slowed the breakdown of starch into sugar and helped insulin-resistant liver cells take up sugar.",
      source: "gao",
    },
  ],
  symptoms: [
    { slug: "fever", notes: "A traditional Chinese remedy for fever. Not tested in trials." },
    { slug: "occasional-nausea", notes: "Traditionally prescribed for nausea. Not tested in trials." },
  ],
});
