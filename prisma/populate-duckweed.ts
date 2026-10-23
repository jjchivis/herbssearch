import { run } from "./lib/populate-herb";

// Duckweed (Lemna minor), from two EFSA novel-food opinions (2022, 2023), a 2024
// food review (Sosa et al.), a 2026 review of duckweed as therapeutic food, a
// human protein trial (Mes et al. 2021), a cell-safety study (Sree et al. 2019)
// and a food-safety review (van der Spiegel et al. 2013). The user's Springer
// chapter on aquatic medicinal plants is paywalled and its references don't
// cover duckweed. No traditional medicinal uses were found in these sources.
// Family per GBIF.

const P = "peer_reviewed" as const;
const T3 = "TIER_3_PEER_REVIEWED" as const;
const G = "government" as const;
const T1 = "TIER_1_GOVERNMENT" as const;

run({
  name: "Duckweed",
  profile: {
    family: "Araceae",
    genus: "Lemna",
    species: "minor",
    partsUsed: "The whole plant",
  },
  sources: {
    efsaWhole: {
      title: "Safety of Lemna minor and Lemna gibba whole plant material as a novel food pursuant to Regulation (EU) 2015/2283",
      organization: "European Food Safety Authority, Panel on Nutrition, Novel Foods and Food Allergens (NDA)",
      journal: "EFSA Journal",
      publicationDate: "2022-11-30",
      doi: "10.2903/j.efsa.2022.7598",
      pmid: "36465669",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9710118/",
      sourceType: G,
      tier: T1,
    },
    efsaProtein: {
      title: "Safety of water lentil protein concentrate from a mixture of Lemna gibba and Lemna minor as a novel food pursuant to Regulation (EU) 2015/2283",
      organization: "European Food Safety Authority, Panel on Nutrition, Novel Foods and Food Allergens (NDA)",
      journal: "EFSA Journal",
      publicationDate: "2023-04-17",
      doi: "10.2903/j.efsa.2023.7903",
      pmid: "37077296",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10108600/",
      sourceType: G,
      tier: T1,
    },
    sosa: {
      title: "Lemna minor: Unlocking the Value of This Duckweed for the Food and Feed Industry",
      author: "Sosa D, Alves FM, Prieto MA, et al.",
      journal: "Foods",
      publicationDate: "2024-05-07",
      doi: "10.3390/foods13101435",
      pmid: "38790736",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11120004/",
      sourceType: P,
      tier: T3,
    },
    hernani: {
      title: "Duckweed (Wolffia globosa, Wolffia arrhiza, and Lemna minor) as novel therapeutic food for acute malnutrition and famine alleviation in low- and middle-income countries and humanitarian crisis settings",
      author: "Hernani-Rodrigo AE, Waters SF, Figueroa LSV, et al.",
      journal: "Frontiers in Nutrition",
      publicationDate: "2026-09-14",
      doi: "10.3389/fnut.2026.1835959",
      pmid: "42807745",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13617429/",
      sourceType: P,
      tier: T3,
    },
    mes: {
      title: "A controlled human intervention trial to study protein quality by amino acid uptake kinetics with the novel Lemna protein concentrate as case study",
      author: "Mes JJ, Esser D, Oosterink E, et al.",
      journal: "International Journal of Food Sciences and Nutrition",
      publicationDate: "2021-08-18",
      doi: "10.1080/09637486.2021.1960958",
      pmid: "34407734",
      url: "https://pubmed.ncbi.nlm.nih.gov/34407734/",
      sourceType: P,
      tier: T3,
    },
    sree: {
      title: "Duckweed for Human Nutrition: No Cytotoxic and No Anti-Proliferative Effects on Human Cell Lines",
      author: "Sree KS, Dahse HM, Chandran JN, Schneider B, Jahreis G, Appenroth KJ",
      journal: "Plant Foods for Human Nutrition",
      publicationDate: "2019-06-01",
      doi: "10.1007/s11130-019-00725-x",
      pmid: "30887272",
      url: "https://pubmed.ncbi.nlm.nih.gov/30887272/",
      sourceType: P,
      tier: T3,
    },
  },
  synonyms: [
    { name: "Common Duckweed", type: "COMMON_NAME" },
    { name: "Lesser Duckweed", type: "COMMON_NAME" },
    { name: "Water Lentil", type: "COMMON_NAME" },
    { name: "Water Lentils", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Duckweed has historically been eaten in southwest Asia. Related duckweeds (Wolffia species) are already sold as food in the US, EU, Israel, Thailand and Japan. Common duckweed is widely used as feed for fish and farm animals.",
      source: "sosa",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Duckweed is one of the fastest-growing plants on Earth and can double in 4 to 5 days. Common duckweed can be up to 39% protein by dry weight, with all the essential amino acids, and it also provides vitamins and minerals. It is low in fat.",
      source: "hernani",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests on three kinds of human cells, extracts of seven duckweed species, including common duckweed, didn't harm the cells or slow their growth.",
      source: "sree",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial of 12 healthy adults, drinking 20 g of duckweed (Lemna) protein raised amino acids in the blood less than the same amount of whey protein from milk, about 60% as much overall. Results varied widely from person to person.\n\nTechnical detail: relative AUC 60.4% for total amino acids and 66.3% for essential amino acids vs whey; double-blind crossover.",
      source: "mes",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description:
        "Duckweed soaks up heavy metals and other substances from the water it grows in; it's even used to clean polluted water. Only eat duckweed grown in clean, monitored water, not plants collected from ponds or ditches.",
      source: "hernani",
    },
    {
      category: "TOXICITY",
      description:
        "In 2022, Europe's food safety agency couldn't confirm that whole duckweed is safe to eat as a vegetable, because it can contain much more manganese than other leafy vegetables. How much it contains depends on how it's grown and fertilized. The agency judged the risk of allergic reactions to be low.",
      source: "efsaWhole",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "In 2023, Europe's food safety agency judged a protein concentrate made from common duckweed and a close relative to be safe as a food ingredient, and for adults as a supplement.",
      source: "efsaProtein",
    },
    {
      category: "ADVERSE_EFFECT",
      description:
        "Duckweed contains oxalates, phytates and tannins, natural compounds that can reduce how well some nutrients are absorbed, at levels similar to common vegetables. Drying in the sun and boiling help control germs.",
      source: "hernani",
    },
  ],
});
