import { run } from "./lib/populate-herb";

// Berberine, a plant compound, shown here with barberry (Berberis vulgaris), one
// of its main sources. Verified sources: a review of barberry (Momeni-Moghaddam
// et al. 2025), a review of berberine (Sanlier et al. 2026), meta-analyses for
// diarrhea (Yu et al. 2020) and H. pylori (Hu et al. 2020), a chart review of
// herbal SIBO treatment (Ruscio et al. 2025) and NCCIH's goldenseal page on
// berberine in newborns. Family per GBIF / Catalogue of Life.

run({
  name: "Berberine",
  profile: {
    family: "Berberidaceae",
    genus: "Berberis",
    species: "vulgaris",
    partsUsed: "Mostly the bark and root, which contain the most berberine",
  },
  sources: {
    momeni: {
      title: "Berberis vulgaris and its role in atherosclerosis improvement: A review of in vitro and in vivo data",
      author: "Momeni-Moghaddam MA, Rostamian M, Mohebbati R",
      journal: "Avicenna Journal of Phytomedicine",
      organization: "Avicenna Journal of Phytomedicine",
      publicationDate: "2025-11-01",
      doi: "10.22038/ajp.2025.25922",
      pmid: "41509110",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12777716/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sanlier: {
      title: "Potential Health Effects of the Natural Alkaloid Berberine: A Narrative Review",
      author: "Sanlier N, Ozler E, Karanfil N",
      journal: "Nutrition Reviews",
      organization: "Nutrition Reviews",
      publicationDate: "2026-10-01",
      doi: "10.1093/nutrit/nuaf192",
      pmid: "41230892",
      url: "https://pubmed.ncbi.nlm.nih.gov/41230892/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    yu: {
      title: "Berberine for diarrhea in children and adults: a systematic review and meta-analysis",
      author: "Yu M, Jin X, Liang C, Bu F, Pan D, He Q, Ming Y, Little P, Du H, Liang S, Hu R, Li C, Hu YJ, Cao H, Liu J, Fei Y",
      journal: "Therapeutic Advances in Gastroenterology",
      organization: "Therapeutic Advances in Gastroenterology",
      publicationDate: "2020-10-23",
      doi: "10.1177/1756284820961299",
      pmid: "33149763",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7586028/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    hu: {
      title: "The Efficacy of Berberine-Containing Quadruple Therapy on Helicobacter Pylori Eradication in China: A Systematic Review and Meta-Analysis of Randomized Clinical Trials",
      author: "Hu Q, Peng Z, Li L, Zou X, Xu L, Gong J, Yi P",
      journal: "Frontiers in Pharmacology",
      organization: "Frontiers in Pharmacology",
      publicationDate: "2020-02-04",
      doi: "10.3389/fphar.2019.01694",
      pmid: "32116685",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7010642/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    ruscio: {
      title: "Biofilm Disruption Enhances Antimicrobial Therapy for Small Intestinal Bacterial Overgrowth and Intestinal Methanogen Overgrowth",
      author: "Ruscio M, Guard G, O'Dwyer D, Darville R, Klopf H, Abbott R, Spiridigliozzi S",
      journal: "Cureus",
      organization: "Cureus",
      publicationDate: "2025-12-13",
      doi: "10.7759/cureus.99116",
      pmid: "41394228",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12701763/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nccih: {
      title: "Goldenseal: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-02-01",
      url: "https://www.nccih.nih.gov/health/goldenseal",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Barberry", type: "COMMON_NAME" },
    { name: "Berberis", type: "COMMON_NAME" },
  ],
  constituents: [{ name: "Berberine", slug: "berberine", type: "alkaloid" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Berberine is found in the roots, stems and fruits of plants in several plant families, including the barberry family. The bark and root contain the most.",
      source: "sanlier",
    },
    {
      category: "TRADITIONAL",
      summary: "Barberry (Berberis vulgaris) contains 22 alkaloids, of which berberine is the main one.",
      source: "momeni",
    },
    {
      category: "TRADITIONAL",
      summary: "Berberine has a broad antibiotic effect and is very widely used to treat diarrhea in China.",
      source: "yu",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Very little berberine (less than 1%) is absorbed into the blood when taken by mouth, which has limited its use as a medicine.",
      source: "momeni",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2020 review of 38 trials with 3,948 people (2,702 of them children) found berberine, alone or added to antibiotics, generally improved cure rates and shortened diarrhea compared with other treatments. No serious side effects or deaths were reported. Most children's trials gave it as an enema, and the quality of evidence was moderate to very low.",
      source: "yu",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2020 review of 13 trials in China found that adding berberine to standard triple therapy for H. pylori raised the rate of clearing the infection, helped stomach ulcers heal and relieved symptoms, with fewer side effects than standard therapy alone.\n\nTechnical detail: eradication RR 1.22 (95% CI 1.16 to 1.27); ulcer healing RR 1.15; adverse events RR 0.65.",
      source: "hu",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A review of berberine research describes possible benefits for obesity, diabetes, heart and gut diseases, and some infections, and says it is generally regarded as safe. The authors caution against assuming it prevents disease.",
      source: "sanlier",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small chart review of 13 people with SIBO (bacterial overgrowth in the small intestine), herbal antimicrobial formulas containing berberine, barberry, black walnut and wormwood among other herbs cleared SIBO in 60% to 100% of people. The study was too small to draw firm conclusions.",
      source: "ruscio",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description: "Berberine can harm newborns. Don't use berberine-containing products during pregnancy or breastfeeding, and never give them to babies.",
      source: "nccih",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Some side effects have been reported, but berberine is generally regarded as safe.",
      source: "sanlier",
    },
  ],
  symptoms: [
    { slug: "diarrhea", notes: "A review of 38 trials found it improved cure rates and shortened diarrhea; evidence quality was low." },
    { slug: "stomach-ulcers", notes: "Added to standard H. pylori treatment, it raised cure rates and helped ulcers heal in trials in China." },
    { slug: "sibo-and-parasites", notes: "An ingredient in herbal SIBO formulas; evidence comes from a very small chart review." },
  ],
});
