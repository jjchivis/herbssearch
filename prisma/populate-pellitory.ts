import { run } from "./lib/populate-herb";

// Pellitory (Parietaria officinalis, pellitory-of-the-wall), from a 2020 study
// of pellitory pollen allergy (Cancelliere et al.), a 2025 study of its close
// relative Parietaria judaica (Bielecka et al.) and a 2017 case of anaphylaxis
// to P. judaica pollen (Vella & Sammut). No human trials of the herb were
// found. Family per GBIF.

run({
  name: "Pellitory",
  profile: {
    family: "Urticaceae",
    genus: "Parietaria",
    species: "officinalis",
    nativeRange: "Europe and western Asia",
    partsUsed: "The above-ground parts",
  },
  sources: {
    cancelliere: {
      title: "Cross-reactivity between Parietaria judaica and Parietaria officinalis in immunotherapy extracts for the treatment of allergy to Parietaria",
      author: "Cancelliere N, Iglesias I, Ayuga Á, Enrique Miranda E",
      journal: "Biomedical Reports",
      publicationDate: "2020-04-06",
      doi: "10.3892/br.2020.1297",
      pmid: "32346476",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7184951/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    bielecka: {
      title: "Phytochemical Profile and Selective Anticancer Activity of Parietaria judaica L. Extracts",
      author: "Bielecka I, Natorska-Chomicka D, Dołomisiewicz W, Rodrigues Fortes A, Dos Santos Szewczyk K",
      journal: "Molecules",
      publicationDate: "2025-06-25",
      doi: "10.3390/molecules30132739",
      pmid: "40649257",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12251272/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    vella: {
      title: "Anaphylaxis secondary to Parietaria judaica (wall pellitory)",
      author: "Vella C, Sammut P",
      journal: "BMJ Case Reports",
      publicationDate: "2017-07-14",
      doi: "10.1136/bcr-2017-220309",
      pmid: "28710239",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5535051/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Pellitory-of-the-Wall", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Pellitory and its close relative Parietaria judaica were historically treated as interchangeable medicines. In Cabo Verde, P. judaica is drunk as a tea for urinary infections, swelling, stomach pain, hemorrhoids, genital infections, diabetes and hair loss.",
      source: "bielecka",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, extracts of the related P. judaica acted as antioxidants, fought microbes and harmed some cancer cells more than normal cells.",
      source: "bielecka",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description:
        "Pellitory pollen is a major cause of hay fever and allergic asthma, especially around the Mediterranean, where its relative P. judaica is the main cause of pollen allergy. People allergic to one species usually react to the other.",
      source: "cancelliere",
    },
    {
      category: "ALLERGY",
      description: "In a rare case, pollen from the related P. judaica was suspected of causing anaphylaxis, a severe allergic reaction.",
      source: "vella",
    },
  ],
});
