import { run } from "./lib/populate-herb";

// Cassia occidentalis, now Senna occidentalis (coffee senna), from a 2010
// review (Yadav et al.), a toxicology study of the seeds (Panigrahi et al.
// 2015) and case reports of poisoning in children (Chhapola et al. 2018) and
// an adult (Ish et al. 2019). Family per GBIF.

run({
  name: "Cassia Occidentalis",
  profile: {
    family: "Fabaceae",
    genus: "Senna",
    species: "occidentalis",
    nativeRange: "The tropical Americas; now a common weed throughout the tropics",
    partsUsed: "The leaves, roots and seeds",
  },
  sources: {
    yadav: {
      title: "Cassia occidentalis L.: a review on its ethnobotany, phytochemical and pharmacological profile",
      author: "Yadav JP, Arya V, Yadav S, Panghal M, Kumar S, Dhankhar S",
      journal: "Fitoterapia",
      publicationDate: "2010-06-01",
      doi: "10.1016/j.fitote.2009.09.008",
      pmid: "19796670",
      url: "https://pubmed.ncbi.nlm.nih.gov/19796670/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    panigrahi: {
      title: "Activity-guided chemo toxic profiling of Cassia occidentalis (CO) seeds: detection of toxic compounds in body fluids of CO-exposed patients and experimental rats",
      author: "Panigrahi GK, Ch R, Mudiam MK, Vashishtha VM, Raisuddin S, Das M",
      journal: "Chemical Research in Toxicology",
      publicationDate: "2015-05-14",
      doi: "10.1021/acs.chemrestox.5b00056",
      pmid: "25915165",
      url: "https://pubmed.ncbi.nlm.nih.gov/25915165/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    chhapola: {
      title: "Hepatomyoencephalopathy Secondary to Cassia occidentalis Poisoning: Report of Three Cases from North India",
      author: "Chhapola V, Kanwal SK, Sharma AG, Kumar V",
      journal: "Indian Journal of Critical Care Medicine",
      publicationDate: "2018-06-01",
      doi: "10.4103/ijccm.IJCCM_85_18",
      pmid: "29962748",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6020631/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ish: {
      title: "Senna occidentalis Poisoning: An Uncommon Cause of Liver Failure",
      author: "Ish P, Rathi S, Singh H, Anuradha S",
      journal: "ACG Case Reports Journal",
      publicationDate: "2019-04-08",
      doi: "10.14309/crj.0000000000000035",
      pmid: "31616727",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6658039/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Coffee Senna", type: "COMMON_NAME" },
    { name: "Senna occidentalis", type: "SCIENTIFIC_SYNONYM" },
  ],
  constituents: [
    { name: "Emodin", slug: "emodin", type: "anthraquinone" },
    { name: "Aloe-Emodin", slug: "aloe-emodin", type: "anthraquinone" },
    { name: "Chrysophanol", slug: "chrysophanol", type: "anthraquinone" },
    { name: "Rhein", slug: "rhein", type: "anthraquinone" },
  ],
  traditions: [{ slug: "ayurveda", notes: "Described as an Ayurvedic plant used in several traditional medicine systems." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Cassia occidentalis is a weed used in Ayurveda and several other traditional medicine systems for many illnesses. In India, an older woman took the leaves for knee arthritis (see Safety for what happened).",
      source: "yadav",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab and animal studies, extracts killed some bacteria and fungi, lowered blood sugar, may help reduce inflammation and protected the liver. Many compounds have been found in the plant, including emodin, aloe-emodin and other anthraquinones.\n\nTechnical detail: reported antibacterial, antifungal, antidiabetic, anti-inflammatory, anticancer, antimutagenic and hepatoprotective activity.",
      source: "yadav",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The seeds contain five anthraquinones that were also found in the blood and urine of poisoned children and rats. In lab tests, they damaged liver cells; rhein was the most harmful.\n\nTechnical detail: physcion, emodin, rhein, aloe-emodin and chrysophanol; rat primary hepatocytes and HepG2 cells.",
      source: "panigrahi",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Don't eat the seeds or beans. In northern India, children who ate them developed a severe illness affecting the liver, muscles and brain. Up to 76% of such cases have died, most within 48 hours.",
      source: "ish",
    },
    {
      category: "TOXICITY",
      description:
        "In three children from North India who ate the seeds, the illness began with drowsiness, jaundice (yellow skin and eyes) and confusion. It can be mistaken for a viral brain infection, so tell doctors if a child may have eaten the seeds.",
      source: "chhapola",
    },
    {
      category: "TOXICITY",
      description:
        "A 75-year-old woman who took the leaves for 2 weeks for knee arthritis developed vomiting, diarrhea, jaundice and seizures, and died of liver failure within 5 days. The authors say this poisoning is unpredictable and its danger is greatly underestimated.",
      source: "ish",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "This isn't the senna used as a laxative, which comes from different Senna species.",
      source: "ish",
    },
  ],
});
