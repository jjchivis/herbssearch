import { run } from "./lib/populate-herb";

// Bearded Scutellaria (Scutellaria barbata, ban zhi lian), from a 2024 review of
// its chemistry, anticancer mechanisms and clinical use (Sun et al.).

run({
  name: "Bearded Scutellaria",
  profile: {
    family: "Lamiaceae",
    genus: "Scutellaria",
    species: "barbata",
    nativeRange: "East Asia, including China, Japan and Korea",
    partsUsed: "The dried herb",
  },
  sources: {
    sun: {
      title: "Chemical Constituents, Anti-Tumor Mechanisms, and Clinical Application: A Comprehensive Review on Scutellaria barbata",
      author: "Sun J, Cao Y, Liu Q, Zhou Z, Xu Y, Liu C",
      journal: "Molecules",
      publicationDate: "2024-08-31",
      doi: "10.3390/molecules29174134",
      pmid: "39274982",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11397148/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Ban Zhi Lian", type: "TRADITIONAL_NAME" },
    { name: "Banzhilian", type: "TRADITIONAL_NAME" },
    { name: "Scutellaria barbata", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called ban zhi lian; first recorded in the Ming Dynasty for snake bites, and used to \"clear heat and remove toxins\", reduce swelling and move blood." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Ban zhi lian has been used for hundreds of years in China, Japan and Korea. It was first recorded by the Ming Dynasty physician Chen Shigong, who used it for snake bites. In Chinese medicine it's used to \"clear heat and remove toxins\", increase urination to reduce swelling, and get the blood moving. The Chinese Pharmacopoeia lists it for:\n- Sores and abscesses\n- Sore throat\n- Injuries\n- Swelling (oedema)\n- Jaundice\n- Snake bites",
      source: "sun",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, its extracts and compounds slowed or killed liver, breast, ovarian and prostate cancer cells and leukaemia cells, and reduced the spread of breast cancer to bone in animals. Most of this research is still at the lab stage.",
      source: "sun",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In China it's used mainly alongside standard cancer treatment, often in herbal formulas, to ease the side effects of chemotherapy and radiotherapy and improve quality of life. There are relatively few clinical studies, and more research is needed to confirm that it's safe and works.",
      source: "sun",
    },
  ],
  symptoms: [
    { slug: "sore-throat", notes: "Listed in the Chinese Pharmacopoeia for sore throat. Not tested on its own in trials." },
    { slug: "skin-irritation", notes: "Traditionally used for sores and abscesses. Not tested in trials." },
  ],
});
