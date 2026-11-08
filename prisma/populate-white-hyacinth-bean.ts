import { run } from "./lib/populate-herb";

// White hyacinth bean (Lablab purpureus), seed. Sources: a 2024 systematic review and a 2024 lab study of seed saponins. Family per GBIF.

run({
  name: "White Hyacinth Bean",
  profile: {
    family: "Fabaceae",
    genus: "Lablab",
    species: "purpureus",
    partsUsed: "The dried white seeds",
  },
  sources: {
    yao: {
      title: "Botany, traditional uses, phytochemistry, pharmacology, edible uses, and quality control of Lablab semen Album: A systematic review",
      author: "Yao L, Xia Z, Tang P, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2024-11-15",
      pmid: "38945467",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
      doi: "10.1016/j.jep.2024.118507",
      url: "https://doi.org/10.1016/j.jep.2024.118507",
    },
    zhang: {
      title: "Saponins from Dolichos lablab seeds with anti-inflammatory activity",
      author: "Zhang W, Li F, Cheng J, et al.",
      journal: "Bioorganic Chemistry",
      publicationDate: "2024-10-01",
      pmid: "39102757",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
      doi: "10.1016/j.bioorg.2024.107692",
      url: "https://doi.org/10.1016/j.bioorg.2024.107692",
    },
  },
  synonyms: [{ name: "Lablab", type: "COMMON_NAME" }, { name: "Dolichos lablab", type: "SCIENTIFIC_SYNONYM" }],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Used for a weak stomach, poor appetite, loose stools and diarrhea." },
  ],
  evidence: [
    { category: "TRADITIONAL", summary: "The dried white seeds, called Lablab Semen Album, are a traditional Chinese medicine with a long history. They are usually combined with other herbs for a weak stomach, poor appetite, loose stools, heavy vaginal discharge, summer diarrhea, chest tightness and a bloated belly. The beans are also widely eaten as food.", source: "yao" },
    { category: "PRECLINICAL", summary: "Lab and animal studies report effects on blood fats, blood sugar, immunity, oxidation, the liver, tumors and viruses. A 2024 review said some traditional uses haven't been confirmed and that clinical studies are lacking.", source: "yao" },
    { category: "PRECLINICAL", summary: "Saponins (soap-like compounds) from the seeds reduced inflammation in a 2024 lab study.", source: "zhang" },
  ],
  safety: [
    { category: "TOXICITY", description: "The beans are toxic if not prepared properly.", source: "yao" },
  ],
  symptoms: [
    { slug: "loss-of-appetite", notes: "Used in Chinese medicine for poor appetite and a weak stomach." },
    { slug: "diarrhea", notes: "Used in Chinese medicine for loose stools and summer diarrhea." },
  ],
});
