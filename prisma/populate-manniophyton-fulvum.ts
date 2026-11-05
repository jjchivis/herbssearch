import { run } from "./lib/populate-herb";

// Manniophyton fulvum, from a 2023 study of Baka hunting and fishing plants
// (Fongnzossie et al.) and a 2015 study of plants eaten by chimpanzees (Ahoua et
// al.). Very little research exists. Family per GBIF.

run({
  name: "Manniophyton Fulvum",
  profile: { family: "Euphorbiaceae", genus: "Manniophyton", species: "fulvum", nativeRange: "West and Central Africa", partsUsed: "The leaves and stems" },
  sources: {
    fongnzossie: {
      title: "Traditional knowledge of plants used in hunting and fishing practices among Baka hunter-gatherers of eastern Cameroon",
      author: "Fongnzossie EF, Ngansop MT, Oishi T, et al.",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2023-01-03",
      doi: "10.1186/s13002-022-00571-3",
      pmid: "36597154",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9808952/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ahoua: {
      title: "Antimicrobial potential of 27 plants consumed by chimpanzees (Pan troglodytes verus Blumenbach) in Ivory Coast",
      author: "Ahoua AR, Konan AG, Bonfoh B, Koné MW",
      journal: "BMC Complementary and Alternative Medicine",
      publicationDate: "2015-10-23",
      doi: "10.1186/s12906-015-0918-7",
      pmid: "26498034",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4618953/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Coussa", type: "REGIONAL_NAME", region: "Cameroon (Baka)" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Baka hunter-gatherers in Cameroon, who call it coussa, use the leaves for hunting luck and the stems to weave baskets for carrying their catch.",
      source: "fongnzossie",
    },
    {
      category: "PRECLINICAL",
      summary: "It's one of the plants wild chimpanzees eat in Ivory Coast. In lab tests, a leaf extract had a small effect against germs.",
      source: "ahoua",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No medical or safety studies were found.",
      source: "fongnzossie",
    },
  ],
});
