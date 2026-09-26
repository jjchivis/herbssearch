import { run } from "./lib/populate-herb";

// Ginseng (Panax ginseng, Asian ginseng), from verified sources: NCCIH and a
// 2016 meta-analysis of ginseng and blood pressure (Komishon et al., J Hum
// Hypertens). Family per GBIF / Catalogue of Life; native range per NCCIH.

run({
  name: "Ginseng",
  profile: {
    family: "Araliaceae",
    genus: "Panax",
    species: "ginseng",
    nativeRange: "The Far East, including Korea, northeastern China and far-eastern Siberia",
    partsUsed: "The root",
  },
  sources: {
    nccih: {
      title: "Asian Ginseng: Usefulness and Safety",
      organization: "National Center for Complementary and Integrative Health (NIH)",
      publicationDate: "2025-02-01",
      url: "https://www.nccih.nih.gov/health/asian-ginseng",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    komishon: {
      title: "The effect of ginseng (genus Panax) on blood pressure: a systematic review and meta-analysis of randomized controlled clinical trials",
      author: "Komishon AM, Shishtar E, Ha V, Sievenpiper JL, de Souza RJ, Jovanovski E, Ho HV, Duvnjak LS, Vuksan V",
      journal: "Journal of Human Hypertension",
      organization: "Journal of Human Hypertension",
      publicationDate: "2016-10-01",
      doi: "10.1038/jhh.2016.18",
      pmid: "27074879",
      url: "https://pubmed.ncbi.nlm.nih.gov/27074879/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Asian Ginseng", type: "COMMON_NAME" },
    { name: "Chinese Ginseng", type: "COMMON_NAME" },
    { name: "Korean Ginseng", type: "COMMON_NAME" },
    { name: "Red Ginseng", type: "COMMON_NAME" },
    { name: "White Ginseng", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes: "Used in traditional Chinese medicine as a calming herb, and as an adaptogen.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Asian ginseng has been used as a calming herb in traditional Chinese medicine and as an adaptogen. The root is the part most often used.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Research in people so far suggests:\n- Thinking: it may improve abstract thinking, attention, arithmetic and reaction time in middle-aged adults, but not in young adults.\n- Tiredness: a 2023 review found it may have a small benefit for general fatigue.\n- Blood sugar: a 2022 review found improvements in fasting blood sugar, total cholesterol and some markers of inflammation in people with prediabetes or diabetes, but overall the research is inconclusive and conflicting.\n- Erectile dysfunction: it seems to improve sexual function.\n- Exercise: most research shows it doesn't improve athletic performance.\n- Flu: early research suggests it may lower the risk of getting the flu, but not how bad it is or how long it lasts.",
      source: "nccih",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2016 review of 17 trials with 1,381 people found ginseng had no significant effect on blood pressure, up or down. The authors concluded people don't need to avoid ginseng out of concern that it raises blood pressure, and called for better trials.\n\nTechnical detail: randomized controlled trials lasting 4 weeks or more; systolic, diastolic and mean arterial pressure; genus Panax.",
      source: "komishon",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Taking Asian ginseng by mouth for up to 6 months in recommended amounts appears safe for most people. The most common side effect is trouble sleeping. Severe rashes, liver damage and severe allergic reactions have also been reported.",
      source: "nccih",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "Asian ginseng might lower blood sugar and may interfere with blood clotting. It may interact with some medicines, so check with your health care provider before using it.",
      source: "nccih",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Experts recommend against Asian ginseng for babies, children and people who are pregnant or breastfeeding. It may make autoimmune conditions worse.",
      source: "nccih",
    },
    {
      category: "PREGNANCY",
      description: "Asian ginseng may be unsafe during pregnancy. One of its compounds caused birth defects in animal studies.",
      source: "nccih",
    },
  ],
  symptoms: [
    {
      slug: "high-blood-sugar",
      notes: "Some studies in people with prediabetes or diabetes found lower fasting blood sugar, but the results conflict.",
    },
    {
      slug: "high-cholesterol",
      notes: "A 2022 review found lower total cholesterol in people with prediabetes or diabetes, but the research is inconclusive.",
    },
    { slug: "high-blood-pressure", notes: "A review of 17 trials found ginseng didn't raise or lower blood pressure." },
  ],
});
