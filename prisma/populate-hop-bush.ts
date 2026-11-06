import { run } from "./lib/populate-herb";

// Hop Bush (Dodonaea viscosa), from the USDA PLANTS database, a 2026 review of
// its pharmacology (Saferdien et al.) and a 2021 Saudi reproductive toxicity study
// (Khan et al.). Family per GBIF.

run({
  name: "Hop Bush",
  profile: { family: "Sapindaceae", genus: "Dodonaea", species: "viscosa", nativeRange: "Tropical and subtropical regions worldwide", partsUsed: "The leaves, and also roots" },
  sources: {
    usda: {
      title: "Dodonaea viscosa (L.) Jacq. (Florida hopbush)",
      organization: "USDA Natural Resources Conservation Service, PLANTS Database",
      url: "https://plants.usda.gov/plant-profile/DOVI",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    saferdien: {
      title: "Pharmacological properties of the ethnomedicinal plant Dodonaea viscosa: Anticancer potential and beyond (Review)",
      author: "Saferdien A, Yekelo B, Mowla S",
      journal: "Biomedical Reports",
      publicationDate: "2026-01-29",
      doi: "10.3892/br.2026.2115",
      pmid: "41696140",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12902742/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    khan: {
      title: "The Reproductive Toxicity Associated with Dodonaea viscosa, a Folk Medicinal Plant in Saudi Arabia",
      author: "Khan MF, Alqahtani AS, Almarfadi OM, et al.",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2021-01-15",
      doi: "10.1155/2021/6689110",
      pmid: "33510808",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7822660/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Hopbush", type: "COMMON_NAME" },
    { name: "Florida Hopbush", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A hardy evergreen shrub with papery, winged seed pods, used in traditional medicine in more than 20 countries, from Australia and the Pacific to Africa, the Middle East, Asia and the Americas. The leaves are applied to skin rashes, infections and wounds.",
      source: "saferdien",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats, leaf extracts sped wound healing, about as well as an antibiotic cream. In mice, root extracts reduced diarrhea about as well as loperamide.",
      source: "saferdien",
    },
    {
      category: "PRECLINICAL",
      summary: "Lab studies suggest extracts may fight bacteria and inflammation and kill some cancer cells.",
      source: "saferdien",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description: "A leaf extract was toxic to developing zebrafish embryos. Researchers advise caution with its use in pregnancy.",
      source: "khan",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "The leaves are a traditional wound remedy; sped healing in rats. Not tested in people." },
    { slug: "diarrhea", notes: "Root extracts reduced diarrhea in mice. Not tested in people." },
  ],
});
