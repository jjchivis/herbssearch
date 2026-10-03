import { run } from "./lib/populate-herb";

// Avocado Leaf (Persea americana), from a review of ethnomedicines in Trinidad
// and Tobago (Lans 2006) and a rat study of blood pressure (Sutiningsih et al.
// 2022, F1000Research). No studies in people, or of its safety, were found.

run({
  name: "Avocado Leaf",
  profile: {
    family: "Lauraceae",
    genus: "Persea",
    species: "americana",
    partsUsed: "The leaves, usually made into a tea",
  },
  sources: {
    lans: {
      title: "Ethnomedicines used in Trinidad and Tobago for urinary problems and diabetes mellitus",
      author: "Lans CA",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      organization: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2006-10-13",
      doi: "10.1186/1746-4269-2-45",
      pmid: "17040567",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1624823/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sutiningsih: {
      title: "Effectiveness of avocado leaf extract (Persea americana Mill.) as antihypertensive",
      author: "Sutiningsih D, Sari DP, Adi MS, Hadi M, Azzahra NA",
      journal: "F1000Research",
      organization: "F1000Research",
      publicationDate: "2022-01-01",
      doi: "10.12688/f1000research.124643.2",
      pmid: "40919293",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12409261/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Avocado", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "caribbean-folk-medicine", notes: "Used in Trinidad and Tobago for high blood pressure." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Trinidad and Tobago, avocado is used for high blood pressure. The 2006 review that recorded this listed it among the plants that may be safe and justify more formal testing.",
      source: "lans",
    },
    {
      category: "TRADITIONAL",
      summary: "Avocado leaves have traditionally been used to lower blood pressure.",
      source: "sutiningsih",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats with high blood pressure caused by salt, avocado leaf extract given for 14 days brought blood pressure back to near normal and increased urination. In lab tests it blocked ACE, the same enzyme targeted by some blood pressure medicines.\n\nTechnical detail: 16% NaCl-induced hypertension in 24 Wistar rats; extract lowered systolic pressure from 164.9 to 116.8 mmHg and diastolic from 118.4 to 82.8 mmHg; ACE inhibition about 60%; rich in quercetin and potassium.",
      source: "sutiningsih",
    },
  ],
  symptoms: [
    {
      slug: "high-blood-pressure",
      notes: "Traditionally used for high blood pressure in the Caribbean. It lowered blood pressure in rats but hasn't been tested in people.",
    },
  ],
});
