import { run } from "./lib/populate-herb";

// Gynostemma (Gynostemma pentaphyllum, jiaogulan), from verified sources: a
// 2022 systematic review of RCTs for dyslipidemia (Dai et al., Front
// Pharmacol) and a 2022 review of jiaogulan (Huang et al., Food Sci Nutr).
// Family per GBIF / Catalogue of Life; distribution per Dai et al.
// No source covering pregnancy, breastfeeding or drug interactions was found,
// so none is stated.

run({
  name: "Gynostemma",
  profile: {
    family: "Cucurbitaceae",
    genus: "Gynostemma",
    species: "pentaphyllum",
    nativeRange:
      "Grows in China, India, Nepal, Bangladesh, Sri Lanka, Myanmar, Laos, Vietnam, Malaysia, Indonesia, New Guinea, North Korea and Japan",
  },
  sources: {
    dai: {
      title: "Gynostemma pentaphyllum for dyslipidemia: A systematic review of randomized controlled trials",
      author: "Dai N, Zhao FF, Fang M, Pu FL, Kong LY, Liu JP",
      journal: "Frontiers in Pharmacology",
      organization: "Frontiers in Pharmacology",
      publicationDate: "2022-01-01",
      doi: "10.3389/fphar.2022.917521",
      pmid: "36091752",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9459123/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    huang: {
      title: "Prebiotic properties of jiaogulan in the context of gut microbiome",
      author: "Huang G, Yasir M, Zheng Y, Khan I",
      journal: "Food Science & Nutrition",
      organization: "Food Science & Nutrition",
      publicationDate: "2022-03-01",
      doi: "10.1002/fsn3.2701",
      pmid: "35282005",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8907712/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Jiaogulan", type: "COMMON_NAME" }],
  constituents: [{ name: "Gypenosides", slug: "gypenosides", type: "saponin" }],
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes: "Known as jiaogulan, a traditional Chinese medicinal herb that is also widely used in foods, teas and supplements.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Jiaogulan is a traditional Chinese medicinal herb. It is widely used in foods and supplements, and products such as jiaogulan tea, drinks, bread and noodles are sold in the United States, China and other Asian countries.",
      source: "huang",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In China, gynostemma has been used as a traditional herbal remedy to lower blood fats, though its use has declined as statins have become common.",
      source: "dai",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Researchers have isolated more than 200 natural compounds from jiaogulan. In research, mostly outside the human body, these have shown anticancer, anti-obesity and antioxidant properties and reduced inflammation.",
      source: "huang",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2022 review of 22 trials with 2,407 people with unhealthy blood fat levels found:\n- Gynostemma lowered cholesterol and triglycerides about as much as standard cholesterol medicines, but the certainty of this evidence was very low.\n- Red yeast rice worked better than gynostemma.\n- Adding gynostemma to standard cholesterol medicines improved results more than the medicines alone (low to moderate certainty).\nMost trials had some risk of bias.\n\nTechnical detail: comparators were statins, fibrates and n-3 fatty acids; gynostemma plus lipid-lowering agents vs agents alone: TG MD −0.65 mmol/L, LDL-C MD −0.57 mmol/L, HDL-C MD +0.15 mmol/L; risk of bias: 14 trials some concerns, 7 high, 1 low.",
      source: "dai",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "In the trials reviewed, no serious side effects were reported, and gynostemma caused fewer side effects than cholesterol medicines. Side effects reported across the trials included bloating, stomach pain, headache, muscle pain, dizziness, nausea, rash, diarrhea, hard stools and heartburn. Use for more than 8 weeks appeared safe.",
      source: "dai",
    },
  ],
  symptoms: [
    {
      slug: "high-cholesterol",
      notes: "A review of trials found it may lower cholesterol and triglycerides, but the evidence is low quality.",
    },
  ],
});
