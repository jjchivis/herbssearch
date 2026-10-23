import { run } from "./lib/populate-herb";

// Tea tree (Melaleuca alternifolia), from NCCIH's tea tree oil page (2025), a
// Cochrane review of complementary acne treatments (Cao et al. 2015), a 2026
// meta-analysis of tea tree oil for acne (Ye et al.), two acne trials (Bassett
// et al. 1990; Enshaieh et al. 2007) and a case report of breast growth in boys
// (Henley et al. 2007). Native range per NCCIH.

run({
  name: "Tea Tree",
  profile: {
    family: "Myrtaceae",
    genus: "Melaleuca",
    species: "alternifolia",
    nativeRange: "Native to eastern Australia, where most tea tree oil is made",
    partsUsed: "The leaves, steam-distilled to make tea tree oil",
  },
  sources: {
    nccih: {
      title: "Tea Tree Oil: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-04-01",
      url: "https://www.nccih.nih.gov/health/tea-tree-oil",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    cochrane: {
      title: "Complementary therapies for acne vulgaris",
      author: "Cao H, Yang G, Wang Y, Liu JP, Smith CA, Luo H, Liu Y",
      journal: "Cochrane Database of Systematic Reviews",
      organization: "Cochrane",
      publicationDate: "2015-01-19",
      doi: "10.1002/14651858.CD009436.pub2",
      pmid: "25597924",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4486007/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    ye: {
      title: "Efficacy and Safety of Melaleuca alternifolia (Tea Tree) Oil for Acne-A Systematic Review and Meta-Analysis",
      author: "Ye Y, Lim JJ, Huang Z, Chew FT",
      journal: "Phytotherapy Research",
      organization: "Phytotherapy Research",
      publicationDate: "2026-05-07",
      doi: "10.1002/ptr.70344",
      pmid: "42098589",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13340978/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    bassett: {
      title: "A comparative study of tea-tree oil versus benzoylperoxide in the treatment of acne",
      author: "Bassett IB, Pannowitz DL, Barnetson RS",
      journal: "Medical Journal of Australia",
      organization: "Medical Journal of Australia",
      publicationDate: "1990-10-15",
      doi: "10.5694/j.1326-5377.1990.tb126150.x",
      pmid: "2145499",
      url: "https://pubmed.ncbi.nlm.nih.gov/2145499/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    enshaieh: {
      title: "The efficacy of 5% topical tea tree oil gel in mild to moderate acne vulgaris: a randomized, double-blind placebo-controlled study",
      author: "Enshaieh S, Jooya A, Siadat AH, Iraji F",
      journal: "Indian Journal of Dermatology, Venereology and Leprology",
      organization: "Indian Journal of Dermatology, Venereology and Leprology",
      publicationDate: "2007-01-01",
      doi: "10.4103/0378-6323.30646",
      pmid: "17314442",
      url: "https://pubmed.ncbi.nlm.nih.gov/17314442/",
      sourceType: "peer_reviewed",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    henley: {
      title: "Prepubertal gynecomastia linked to lavender and tea tree oils",
      author: "Henley DV, Lipson N, Korach KS, Bloch CA",
      journal: "New England Journal of Medicine",
      organization: "New England Journal of Medicine",
      publicationDate: "2007-02-01",
      doi: "10.1056/NEJMoa064725",
      pmid: "17267908",
      url: "https://pubmed.ncbi.nlm.nih.gov/17267908/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Tea Tree Oil", type: "COMMON_NAME" },
    { name: "Melaleuca", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Aboriginal Australians used tea tree leaves for wounds, burns and insect bites. Today the oil is promoted for use on the skin for acne, athlete's foot, toenail fungus, lice and other conditions.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "What research says about tea tree oil on the skin:\n- Acne: limited research suggests it might help, but more evidence is needed.\n- Athlete's foot: it may help, but may not work as well as standard treatments.\n- Toenail fungus: there isn't enough good research to say.\n- Lice: it has only been tested mixed with other ingredients, so its own effect is unclear.\n- Eyelid inflammation from tiny mites, and gum problems or bad breath (in mouthwashes): results are uncertain.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2026 review combined 7 studies with 445 people with acne. Tea tree oil on the skin was linked with a modest drop in acne severity compared with other treatments or a placebo. Side effects were mostly mild and on the skin, such as itching, dryness and burning. The authors say larger, better trials are needed.\n\nTechnical detail: pooled odds ratio 0.74 (95% CI 0.63 to 0.88); mild itching less common than with comparison treatments (pOR 0.09, 95% CI 0.03 to 0.23); overall risk of bias low.",
      source: "ye",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A Cochrane review of complementary treatments for acne found low-quality evidence, from a single trial of 60 people, that tea tree oil gel may reduce the number of spots. Some people had mild side effects from the gel.\n\nTechnical detail: total skin lesion counts MD −7.53 (95% CI −10.40 to −4.66); acne severity score MD −5.75 (−9.51 to −1.99); searched to January 2014.",
      source: "cochrane",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In an Iranian trial, 60 people with mild to moderate acne used a 5% tea tree oil gel or a placebo gel for 45 days. Tea tree oil reduced the number of spots and how severe the acne was much more than placebo. Side effects were similar in both groups.\n\nTechnical detail: randomized, double-blind; total lesion count improvement 3.55 times and acne severity index 5.75 times that of placebo.",
      source: "enshaieh",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In an Australian trial, 124 people with mild to moderate acne used a 5% tea tree oil gel or a 5% benzoyl peroxide lotion, a standard acne treatment. Both reduced red, swollen spots as well as blackheads and whiteheads. Tea tree oil worked more slowly but caused fewer side effects.\n\nTechnical detail: single-blind, randomized; reduced inflamed and non-inflamed lesions (open and closed comedones).",
      source: "bassett",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Don't swallow tea tree oil, including mouthwashes that contain it. Swallowing it has caused confusion, unsteadiness, being unable to walk, and coma.",
      source: "nccih",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Most people have no problems using it on the skin, but some get redness or irritation. This may be more likely if the oil is old or has been exposed to heat, light or air.",
      source: "nccih",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Three young boys grew breast tissue while using skin products containing lavender and tea tree oils. It went away soon after they stopped. In lab tests, the oils acted a little like estrogen and blocked male hormones.\n\nTechnical detail: prepubertal gynecomastia; estrogenic and antiandrogenic activity in human cell lines.",
      source: "henley",
    },
    {
      category: "PREGNANCY",
      description: "Tea tree products used on the skin may be safe during pregnancy and while breastfeeding.",
      source: "nccih",
    },
  ],
  symptoms: [
    {
      slug: "acne",
      notes:
        "Several small trials and a 2026 review suggest a 5% tea tree oil gel on the skin may modestly reduce acne, with mostly mild side effects. NCCIH says more evidence is needed.",
    },
    {
      slug: "fungal-skin-infections",
      notes: "May help athlete's foot, but may not work as well as standard treatments. There isn't enough good research for toenail fungus.",
    },
    {
      slug: "lice-and-scabies",
      notes: "Only tested mixed with other ingredients for lice, so its own effect is unclear.",
    },
  ],
});
