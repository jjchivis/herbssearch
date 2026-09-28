import { run } from "./lib/populate-herb";

// Quercetin, a plant flavonoid (not a single plant), from verified sources: a
// review of quercetin as a supplement (Devi et al. 2024), a large community
// trial for upper respiratory infections (Heinz et al. 2010), a trial with a
// COVID-19 vaccine (Takahama et al. 2026) and a review of animal studies of
// respiratory viruses (Brito et al. 2021). No source covering pregnancy,
// breastfeeding or medicine interactions was used, so none is stated.

run({
  name: "Quercetin",
  profile: {
    family: "Not a single plant: found in many plant families",
    genus: "",
    species: "",
    partsUsed: "Found in fruits and vegetables such as apples, onions, grapes, citrus and parsley",
  },
  sources: {
    devi: {
      title: "Therapeutic Potential and Clinical Effectiveness of Quercetin: A Dietary Supplement",
      author: "Devi V, Deswal G, Dass R, Chopra B, Kriplani P, Grewal AS, Guarve K, Dhingra AK",
      journal: "Recent Advances in Food, Nutrition & Agriculture",
      organization: "Recent Advances in Food, Nutrition & Agriculture",
      publicationDate: "2024-01-01",
      doi: "10.2174/012772574x269376231107095831",
      pmid: "38258783",
      url: "https://pubmed.ncbi.nlm.nih.gov/38258783/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    heinz: {
      title: "Quercetin supplementation and upper respiratory tract infection: A randomized community clinical trial",
      author: "Heinz SA, Henson DA, Austin MD, Jin F, Nieman DC",
      journal: "Pharmacological Research",
      organization: "Pharmacological Research",
      publicationDate: "2010-05-15",
      doi: "10.1016/j.phrs.2010.05.001",
      pmid: "20478383",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7128946/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    takahama: {
      title: "Immune Preconditioning with Oral Quercetin Supplement and COVID-19 mRNA Vaccine Responses: A Randomized, Double-Blind, Placebo-Controlled Trial",
      author: "Takahama S, Nogimori T, Tanaka A, Nishiyama A, Iwami S, Abe K, Nishihira J, Yamamoto T",
      journal: "The Journal of Nutrition",
      organization: "The Journal of Nutrition",
      publicationDate: "2026-02-25",
      doi: "10.1016/j.tjnut.2026.101431",
      pmid: "41759822",
      url: "https://pubmed.ncbi.nlm.nih.gov/41759822/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    brito: {
      title: "Effectiveness of supplementation with quercetin-type flavonols for treatment of viral lower respiratory tract infections: Systematic review and meta-analysis of preclinical studies",
      author: "Brito JCM, Lima WG, Cordeiro LPB, da Cruz Nizer WS",
      journal: "Phytotherapy Research",
      organization: "Phytotherapy Research",
      publicationDate: "2021-04-17",
      doi: "10.1002/ptr.7122",
      pmid: "33864310",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8250479/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  constituents: [{ name: "Quercetin", slug: "quercetin", type: "flavonoid" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Quercetin is a natural plant compound (a flavonoid). Fruits and vegetables such as apples, citrus, grapes, onions and parsley are the main food sources. It is also sold as a supplement, in doses up to 1,000 mg a day.",
      source: "devi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A review of 11 animal studies found quercetin-type compounds lowered deaths and viral levels in animals with lung virus infections, and reduced inflammation, mucus and airway tightness.",
      source: "brito",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 12-week trial, 1,002 adults aged 18 to 85 took 500 mg or 1,000 mg of quercetin a day, or a placebo. Overall, it didn't reduce colds or other upper respiratory infections. In a subgroup of fitter adults over 40, the higher dose was linked to milder illness and fewer sick days.\n\nTechnical detail: randomized, double-blind; Wisconsin Upper Respiratory Symptom Survey; subgroup n = 325, 36% lower severity (p = 0.020), 31% fewer sick days (p = 0.048).",
      source: "heinz",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial of 50 older or metabolically at-risk adults, taking quercetin for 4 weeks before a COVID-19 booster didn't change the immune response to the vaccine compared with placebo.",
      source: "takahama",
    },
  ],
  symptoms: [
    { slug: "seasonal-immune-support", notes: "In a large trial it didn't prevent colds overall; a subgroup of fitter older adults had milder illness." },
  ],
});
