import { run } from "./lib/populate-herb";

// Green tea (Camellia sinensis), from verified sources: NCCIH (2025), NIH
// LiverTox (2020) and a systematic review of trials on liver enzymes (Mahmoodi
// et al. 2020). Family per GBIF / Catalogue of Life.

run({
  name: "Green Tea",
  profile: {
    family: "Theaceae",
    genus: "Camellia",
    species: "sinensis",
    nativeRange: "First grown in China thousands of years ago",
    partsUsed: "The leaves, steamed, pan-fried and dried without being fermented",
  },
  sources: {
    nccih: {
      title: "Green Tea: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-02-01",
      url: "https://www.nccih.nih.gov/health/green-tea",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    livertox: {
      title: "Green Tea. In: LiverTox: Clinical and Research Information on Drug-Induced Liver Injury",
      organization: "LiverTox, National Institute of Diabetes and Digestive and Kidney Diseases (NIH)",
      publicationDate: "2020-11-20",
      url: "https://www.ncbi.nlm.nih.gov/books/NBK547925/",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    mahmoodi: {
      title: "Effects of green tea or green tea catechin on liver enzymes in healthy individuals and people with nonalcoholic fatty liver disease: A systematic review and meta-analysis of randomized clinical trials",
      author: "Mahmoodi M, Hosseini R, Kazemi A, Kazemi A, Ofori-Asenso R, Mazidi M, Mazloomi SM",
      journal: "Phytotherapy Research",
      organization: "Phytotherapy Research",
      publicationDate: "2020-02-18",
      doi: "10.1002/ptr.6637",
      pmid: "32067271",
      url: "https://pubmed.ncbi.nlm.nih.gov/32067271/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Green Tea Extract", type: "COMMON_NAME" },
    { name: "Tea Plant", type: "COMMON_NAME" },
  ],
  constituents: [
    { name: "Epigallocatechin Gallate (EGCG)", slug: "egcg", type: "catechin" },
    { name: "Caffeine", slug: "caffeine", type: "alkaloid" },
  ],
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes: "The tea plant was first grown in China thousands of years ago, and tea has been used for health for about 3,000 years.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The tea plant was first grown in China thousands of years ago, and there is evidence of tea being used for health for about 3,000 years. Green, black and oolong teas all come from the same plant; green tea isn't fermented. Today, green tea and its extracts are promoted for weight loss, lowering cholesterol, and preventing heart disease and cancer.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "What research in people has found:\n- Cancer: studies of green tea and cancer risk have had inconsistent results.\n- Heart disease: drinking green tea has been linked to lower risk in Asian populations, but not in Western ones.\n- Weight: its catechins and caffeine may have a modest effect on body weight.\n- Cholesterol: green tea lowered total and LDL cholesterol slightly, but didn't affect HDL cholesterol or triglycerides.\nAn ointment made from a green tea extract is approved by the FDA for external genital warts.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Drinking green tea hasn't been linked to liver injury. Surveys suggest that people who regularly drink green tea tend to have slightly lower liver enzyme levels.",
      source: "livertox",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2020 review of 15 trials found that green tea or its catechins had no overall effect on liver enzymes. In people with non-alcoholic fatty liver disease, liver enzymes went down moderately, while in healthy people they went up slightly. The authors concluded that the effect depends on a person's health.\n\nTechnical detail: ALT SMD −0.17 (95% CI −0.42 to 0.08); AST SMD −0.07 (−0.43 to 0.29); ALP SMD −0.17 (−0.45 to 0.10); subgroup analyses by health status.",
      source: "mahmoodi",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Green tea extract, and more rarely drinking very large amounts of green tea, has caused sudden liver injury. This has included liver failure needing an urgent transplant, and deaths. More than 100 cases have been reported. Injury usually starts 1 to 6 months after starting the product, often with yellow skin or eyes. Most people recover within 1 to 2 months of stopping.\n\nTechnical detail: LiverTox likelihood score A (well-established cause of clinically apparent liver injury); hepatocellular pattern; linked to HLA-B*35:01; catechins, mainly EGCG, implicated.",
      source: "livertox",
    },
    {
      category: "TOXICITY",
      description:
        "Liver injury is uncommon and has mostly involved green tea extract tablets or capsules. People with a particular gene variant, which 5 to 15 percent of Americans have, appear to be more likely to be affected.",
      source: "nccih",
    },
    {
      category: "TOXICITY",
      description:
        "Green tea extract is an ingredient in many weight-loss supplements, some of which have been linked to rare liver injury. If you've had liver injury from green tea extract, avoid products that might contain it.",
      source: "livertox",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "No safety concerns have been reported for adults drinking green tea, but it contains caffeine. Green tea extract supplements can cause nausea, constipation, stomach discomfort and higher blood pressure.",
      source: "nccih",
    },
    {
      category: "DOSAGE",
      description: "In studies, single doses of up to 1.6 grams of green tea extract were well tolerated. The safety of taking extracts for a long time isn't well known.",
      source: "livertox",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Green tea may affect some medicines:\n- Large amounts lowered blood levels of nadolol, a beta-blocker for high blood pressure and heart problems.\n- Green tea extract lowered blood levels of the cholesterol medicine atorvastatin.\n- It interacted with raloxifene, a medicine for osteoporosis.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description: "During pregnancy, keep caffeine to moderate amounts.",
      source: "nccih",
    },
    {
      category: "BREASTFEEDING",
      description:
        "Breastfed babies usually aren't affected when their mothers have low to moderate amounts of caffeine, but large amounts can cause fussiness and poor sleep.",
      source: "nccih",
    },
  ],
  symptoms: [
    {
      slug: "liver-safety-warnings",
      notes: "Green tea extract supplements are a well-established, though rare, cause of liver injury. Drinking green tea hasn't been linked to it.",
    },
    {
      slug: "fatty-liver",
      notes: "A 2020 review found green tea lowered liver enzymes moderately in people with fatty liver disease.",
    },
    { slug: "high-cholesterol", notes: "Research found green tea lowered total and LDL cholesterol slightly." },
  ],
});
