import { run } from "./lib/populate-herb";

// Cryptolepis sanguinolenta, from a 2026 lab study of its use with neem
// against malaria (Korsah et al.), a 2025 lab study of Ghanaian herbal malaria
// medicines (Yeboah et al.) and a 2025 tuberculosis lab study (Tuyiringire et
// al.). No human or safety studies were found. Family per GBIF.

run({
  name: "Cryptolepis Sanguinolenta Root",
  profile: {
    family: "Apocynaceae",
    genus: "Cryptolepis",
    species: "sanguinolenta",
    nativeRange: "West and Central Africa",
    partsUsed: "The root",
  },
  sources: {
    korsah: {
      title: "Synergistic Combination of Cryptolepis sanguinolenta (Lindl.) Schlechter (Apocynaceae) and Azadirachta Indica (A. Juss) (Meliaceae) Against 3D7 and DD2 Strains of Plasmodium Falciparum",
      author: "Korsah S, Nortey NND, Akakpo C, et al.",
      journal: "Advances in Pharmacological and Pharmaceutical Sciences",
      publicationDate: "2026-08-31",
      doi: "10.1155/adpp/1273876",
      pmid: "42677102",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13527865/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    yeboah: {
      title: "The efficacy of selected Ghanaian herbal antimalarials against laboratory strains and clinical isolates of Plasmodium falciparum",
      author: "Yeboah SN, Ansong M, Clotworthy D, et al.",
      journal: "Scientific Reports",
      publicationDate: "2025-10-09",
      doi: "10.1038/s41598-025-19429-1",
      pmid: "41068365",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12511297/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    tuyiringire: {
      title: "Antimycobacterial Activities of Cryptolepis sanguinolenta, Lantana camara, Zanthoxylum leprieurii Modeled as a Function of Their Fingerprints for Active Compounds Identification",
      author: "Tuyiringire N, Tusubira D, Boarbi S, et al.",
      journal: "Planta Medica",
      publicationDate: "2025-08-07",
      doi: "10.1055/a-2660-2042",
      pmid: "40774310",
      url: "https://pubmed.ncbi.nlm.nih.gov/40774310/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  constituents: [{ name: "Cryptolepine", slug: "cryptolepine", type: "indoloquinoline alkaloid" }],
  traditions: [{ slug: "african-traditional-medicine", notes: "Used in Ghana, often with neem, in herbal malaria medicines." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "In Ghana, cryptolepis root is commonly combined with neem in herbal malaria medicines.",
      source: "korsah",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, water extracts of cryptolepis and neem strongly killed malaria parasites, including a strain resistant to chloroquine. Together they worked better than either alone.\n\nTechnical detail: IC50 ≤ 10 µg/mL against P. falciparum 3D7 and DD2; combination index 0.15–0.61.",
      source: "korsah",
    },
    {
      category: "PRECLINICAL",
      summary:
        "When 20 herbal malaria medicines sold in Accra were tested in the lab, only 6 strongly killed malaria parasites. The authors call for better testing and quality control of these products.",
      source: "yeboah",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, extracts of the root slowed the bacteria that cause tuberculosis.",
      source: "tuyiringire",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description:
        "Most herbal malaria medicines tested in Ghana worked poorly against the parasite.",
      source: "yeboah",
    },
  ],
});
