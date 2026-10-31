import { run } from "./lib/populate-herb";

// Atees (Aconitum heterophyllum, ativisha), from a 2017 review (Paramanick et
// al.), a 2025 study describing it as the genus's only non-toxic member (Tomar
// et al.) and a 2016 kidney study in rats (Konda et al.). Family per GBIF.

run({
  name: "Atees",
  profile: {
    family: "Ranunculaceae",
    genus: "Aconitum",
    species: "heterophyllum",
    nativeRange: "The western Himalayas",
    partsUsed: "The tuberous root",
  },
  sources: {
    paramanick: {
      title: "Primary Pharmacological and Other Important Findings on the Medicinal Plant \"Aconitum Heterophyllum\" (Aruna)",
      author: "Paramanick D, Panday R, Shukla SS, Sharma V",
      journal: "Journal of Pharmacopuncture",
      publicationDate: "2017-06-30",
      doi: "10.3831/KPI.2017.20.011",
      pmid: "30087784",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5532466/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    tomar: {
      title: "Population assessment and habitat suitability modelling of endangered medicinal plant, Aconitum heterophyllum Wall. ex Royle in the western Himalaya",
      author: "Tomar S, Thakur S, Kanwal KS, Bhatt ID, Puri S",
      journal: "Scientific Reports",
      publicationDate: "2025-09-30",
      doi: "10.1038/s41598-025-03324-w",
      pmid: "41028014",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12484762/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    konda: {
      title: "Antioxidant and Nephroprotective Activities of Aconitum heterophyllum Root in Glycerol Induced Acute Renal Failure in Rats",
      author: "Konda VG, Eerike M, Raghuraman LP, Rajamanickam MK",
      journal: "Journal of Clinical and Diagnostic Research",
      publicationDate: "2016-03-01",
      doi: "10.7860/JCDR/2016/10798.7388",
      pmid: "27134892",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4843278/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Ativisha", type: "TRADITIONAL_NAME" }, { name: "Aruna", type: "TRADITIONAL_NAME" }],
  traditions: [{ slug: "ayurveda", notes: "Called ativisha; used for diarrhea, fever, urinary infections and inflammation." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Atees (ativisha) has been used in Ayurveda since ancient times, for urinary infections, diarrhea, fever and inflammation, and to loosen mucus. For diarrhea it is taken with dry ginger, bael fruit or nutmeg.",
      source: "paramanick",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats with sudden kidney failure, a root extract protected the kidneys, and in the lab it was as strong an antioxidant as vitamin C.",
      source: "konda",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Atees belongs to the aconite genus, most of whose species are extremely poisonous.",
      source: "paramanick",
    },
    {
      category: "TOXICITY",
      description: "Unlike its relatives, Atees is described as the only non-toxic member of the aconite genus.",
      source: "tomar",
    },
  ],
});
