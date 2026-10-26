import { run } from "./lib/populate-herb";

// Luehea divaricata, from a 2024 chemistry study of a Mbya-Guarani
// contraceptive decoction (Sánchez-Hernández et al.) and a 2026 lab study of
// Pampa plants against cattle viruses (da Fonseca et al.). Family per GBIF.

run({
  name: "Luehea Divaricata",
  profile: {
    family: "Malvaceae",
    genus: "Luehea",
    species: "divaricata",
    nativeRange: "Southern Brazil, Paraguay, Uruguay and northeastern Argentina",
    partsUsed: "The leaves",
  },
  sources: {
    sanchez: {
      title: "Phytochemical study of 'tajy' (Handroanthus impetiginosus (Mart.) Mattos) and 'ka'a ovetĩ' (Luehea divaricata Mart.) extracts",
      author: "Sánchez-Hernández E, Cáceres-González C, García-Valdecasas JI, et al.",
      journal: "Natural Product Research",
      publicationDate: "2024-02-27",
      doi: "10.1080/14786419.2024.2319658",
      pmid: "38414225",
      url: "https://pubmed.ncbi.nlm.nih.gov/38414225/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    fonseca: {
      title: "Pampa biome plant extracts and flavonoids show antiviral activity against Bovine Herpesvirus and Bovine Viral Diarrhea Virus",
      author: "da Fonseca RN, de Andrade Lourenço D, Zandoná GP, et al.",
      journal: "Scientific Reports",
      publicationDate: "2026-05-13",
      doi: "10.1038/s41598-026-50900-9",
      pmid: "42129231",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13365603/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Ka'a Ovetĩ", type: "TRADITIONAL_NAME", region: "Paraguay" },
    { name: "Açoita-Cavalo", type: "REGIONAL_NAME", region: "Brazil" },
  ],
  constituents: [
    { name: "Quercetin", slug: "quercetin", type: "flavonoid" },
    { name: "Kaempferol", slug: "kaempferol", type: "flavonoid" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Mbya-Guarani women use the leaves, with lapacho, in a decoction meant to prevent pregnancy.",
      source: "sanchez",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A chemical study found nothing in the leaves that would explain a contraceptive effect. In lab tests, the extract slowed a plant-damaging mold.",
      source: "sanchez",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, leaf extracts inactivated two cattle viruses and showed antioxidant activity. Their flavonoids, such as quercetin and kaempferol, were active too.",
      source: "fonseca",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "The leaves contain compounds that could damage cells and genes. The researchers found no evidence that the contraceptive decoction works, and raised safety concerns about it.",
      source: "sanchez",
    },
  ],
});
