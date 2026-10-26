import { run } from "./lib/populate-herb";

// Spiked Pepper (Piper aduncum), from a 2026 mouse study of the leaf oil with
// ethnobotanical background (Eloi Fernandes et al.). No human or safety
// studies were found. Family per GBIF.

run({
  name: "Spiked Pepper",
  profile: {
    family: "Piperaceae",
    genus: "Piper",
    species: "aduncum",
    nativeRange: "The tropical Americas",
    partsUsed: "The leaves",
  },
  sources: {
    eloi: {
      title: "Gastroprotective action of Piper aduncum L. leaf essential oil mediated by α2-adrenergic biochemical pathways, nitric oxide synthase, and sulfhydryl compounds",
      author: "Eloi Fernandes PH, de Deus E Melo S, Andrade do Nascimento Silva PH, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2026-05-30",
      doi: "10.1016/j.jep.2026.121947",
      pmid: "42219069",
      url: "https://pubmed.ncbi.nlm.nih.gov/42219069/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Matico", type: "REGIONAL_NAME", region: "Peru" },
    { name: "Pimenta-de-Macaco", type: "REGIONAL_NAME", region: "Brazil" },
    { name: "Aperta-Ruão", type: "REGIONAL_NAME", region: "Brazil" },
  ],
  constituents: [{ name: "Dillapiole", slug: "dillapiole", type: "phenylpropanoid" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In traditional medicine, the leaves are commonly used to relieve stomach pain and digestive discomfort.",
      source: "eloi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The leaf oil is mostly dillapiole. In mice, it protected the stomach lining from ulcers caused by alcohol or by the painkiller indomethacin, by up to about 91%.\n\nTechnical detail: 50–200 mg/kg orally; dillapiole 69.65%; involves nitric oxide synthase, sulfhydryl compounds and α2-adrenergic receptors.",
      source: "eloi",
    },
  ],
});
