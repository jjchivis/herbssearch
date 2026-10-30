import { run } from "./lib/populate-herb";

// Manjistha (Rubia cordifolia), from a 2022 review of its traditional uses,
// chemistry, pharmacology and clinical use (Wen et al.) and a 2017 rodent study
// of the leafy stems (Gong et al.), found by direct PubMed Central search. The
// review notes that clinical safety data is lacking. Family per GBIF.

run({
  name: "Manjistha",
  profile: {
    family: "Rubiaceae",
    genus: "Rubia",
    species: "cordifolia",
    nativeRange: "Africa, tropical Asia including India and Malaysia, China, Japan and tropical Australia",
    partsUsed: "Mainly the root; the leafy stems are also used in China",
  },
  sources: {
    wen: {
      title: "A comprehensive review of Rubia cordifolia L.: Traditional uses, phytochemistry, pharmacological activities, and clinical applications",
      author: "Wen M, Chen Q, Chen W, Yang J, Zhou X, Zhang C, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2022-01-01",
      doi: "10.3389/fphar.2022.965390",
      pmid: "36160419",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9500525/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gong: {
      title: "Anti-diarrheal and anti-inflammatory activities of aqueous extract of the aerial part of Rubia cordifolia",
      author: "Gong XP, Sun YY, Chen W, Guo X, Guan JK, Li DY, Du G",
      journal: "BMC Complementary and Alternative Medicine",
      publicationDate: "2017-01-01",
      doi: "10.1186/s12906-016-1527-9",
      pmid: "28056930",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5217154/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Manjishtha", type: "TRADITIONAL_NAME", region: "India (Ayurveda)" },
    { name: "Qiancaogen", type: "REGIONAL_NAME", region: "China" },
    { name: "Chien-tsao", type: "REGIONAL_NAME", region: "China" },
  ],
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes: "The root (qiancaogen) is used mainly to stop bleeding; it's listed in the Chinese Pharmacopoeia.",
    },
    {
      slug: "ayurveda",
      notes: "Applied to inflamed areas, ulcers and fractures, used for long-lasting inflammation, and mixed with honey for skin discoloration.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In traditional Chinese medicine, the root (qiancaogen) is described as bitter and cooling. It's used mainly to stop bleeding, such as vomiting blood, heavy menstrual bleeding and nosebleeds, and for wounds, injuries and strains. It's officially listed in the Chinese Pharmacopoeia.",
      source: "wen",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Uses in other traditions:\n- India: rheumatism, menstrual pain, urinary problems, fluid swelling, paralysis, missed periods and jaundice.\n- Ayurveda: used to color medicinal oils, applied to inflamed areas, ulcers and fractures, and used for long-lasting inflammation. A paste with honey is put on the skin to fade brown spots and freckles and to help wounds heal.\n- Korea: menstrual pain, arthritis, rheumatism, bleeding and urinary problems.",
      source: "wen",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In China today, herbal prescriptions that include manjistha are used for abnormal uterine bleeding, painful periods, allergic purpura (a bleeding rash) and bleeding from the kidneys.",
      source: "wen",
    },
    {
      category: "TRADITIONAL",
      summary: "In Shaanxi province, China, a water extract of the leafy stems is traditionally used for diarrhea.",
      source: "gong",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, a water extract of the leafy stems delayed and reduced diarrhea. In rats with chemically caused colitis (inflammation of the large bowel), it reduced bowel damage and inflammation.\n\nTechnical detail: senna leaf-induced diarrhea and castor oil-induced intestinal transit, compared with loperamide; TNBS colitis with lower MDA, IL-1β and TNF-α.",
      source: "gong",
    },
    {
      category: "PRECLINICAL",
      summary:
        "More than 100 compounds have been found in the plant, mostly quinones and peptides. In lab and animal studies, it has slowed tumors, shown antioxidant activity, may have helped reduce inflammation, and slowed blood clotting. Most research is lab and animal work, few studies have looked at toxicity, and safety data in people is lacking.\n\nTechnical detail: bicyclic peptides, anthraquinones, terpenes, polysaccharides and flavonoids; anti-platelet aggregation activity.",
      source: "wen",
    },
  ],
  symptoms: [
    {
      slug: "diarrhea",
      notes: "Traditionally used for diarrhea in Shaanxi, China. A leafy-stem extract reduced diarrhea in mice; it hasn't been tested in people.",
    },
    {
      slug: "menstrual-discomfort",
      notes: "Traditionally used for menstrual pain in India and Korea, and in Chinese formulas for painful periods. Not tested on its own in people.",
    },
    {
      slug: "joint-discomfort",
      notes: "Traditional use only: used for rheumatism and arthritis in India and Korea. Not studied in people.",
    },
    {
      slug: "wounds-and-burns",
      notes: "Traditional use only: used for wounds in Chinese medicine, and as a honey paste to help wounds heal in Ayurveda. Not studied in people.",
    },
  ],
});
