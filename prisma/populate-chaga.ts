import { run } from "./lib/populate-herb";

// Chaga (Inonotus obliquus), a medicinal fungus, from verified sources: a review
// of its medicinal importance (Camilleri et al. 2024), a review of its
// polysaccharides (Zhang et al. 2026) and a rat study of kidney injury that
// describes clinical cases (Lee et al. 2026). Family per GBIF / Catalogue of
// Life. No clinical trials were found.

run({
  name: "Chaga",
  profile: {
    family: "Hymenochaetaceae",
    genus: "Inonotus",
    species: "obliquus",
    nativeRange: "Grows on birch trees in cold northern regions, mainly Siberia, North America and Scandinavia",
    partsUsed: "The fungal growth (sclerotium) on the tree",
  },
  sources: {
    camilleri: {
      title: "A brief overview of the medicinal and nutraceutical importance of Inonotus obliquus (chaga) mushrooms",
      author: "Camilleri E, Blundell R, Baral B, Karpinski TM, Aruci E, Atrooz OM",
      journal: "Heliyon",
      organization: "Heliyon",
      publicationDate: "2024-08-06",
      doi: "10.1016/j.heliyon.2024.e35638",
      pmid: "39170453",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11336990/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    zhang: {
      title: "Inonotus obliquus Polysaccharides: Preparation, Structural Characteristics, Structure-Activity Relationships, Biological Activities and Applications",
      author: "Zhang S, Zhang W, Wu X, Li S, Shi D, Li H, Liu T, Gong A",
      journal: "Nutrients",
      organization: "Nutrients",
      publicationDate: "2026-03-31",
      doi: "10.3390/nu18071125",
      pmid: "41978174",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13075156/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    lee: {
      title: "Kidney Injury Induced by High-Dose Chaga Mushroom Consumption: Experimental Evidence in a Rat Model",
      author: "Lee S, Cui S, Fang X, Lee H, Lim SW, Shin YJ, Li C, Yang CW, Chung BH",
      journal: "Journal of Korean Medical Science",
      organization: "Journal of Korean Medical Science",
      publicationDate: "2026-01-19",
      doi: "10.3346/jkms.2026.41.e37",
      pmid: "41555803",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12815897/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Chaga Mushroom", type: "COMMON_NAME" },
  ],
  traditions: [{ slug: "european-folk-medicine", notes: "Long used as a folk remedy in Western Siberia and Russia for immunity and inflammation." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Chaga has a long history as a folk remedy in Western Siberia and Russia, where it is valued for supporting the immune system and easing inflammation.",
      source: "camilleri",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, chaga compounds showed antioxidant, antimicrobial and anti-cancer effects and reduced inflammation, and water extracts and chaga melanin were active against several viruses, including flu viruses.",
      source: "camilleri",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Chaga polysaccharides (complex sugars) showed effects on immunity, gut bacteria, blood sugar, cholesterol, tumors and viruses in lab and animal studies. These haven't been confirmed in people.",
      source: "zhang",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Chaga is very high in oxalate (about 143 mg per gram of powder), which can damage the kidneys. Patients have developed long-term kidney damage after taking chaga for months or years.",
      source: "lee",
    },
    {
      category: "TOXICITY",
      description: "In rats, high doses of chaga caused oxalate crystal deposits and kidney damage.",
      source: "lee",
    },
  ],
  symptoms: [
    { slug: "seasonal-immune-support", notes: "A traditional Siberian immune remedy; only lab and animal studies exist, and long-term use has damaged kidneys." },
  ],
});
