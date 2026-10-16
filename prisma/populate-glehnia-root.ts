import { run } from "./lib/populate-herb";

// Glehnia Root (Glehnia littoralis, bei sha shen), from a 2025 review of its
// polysaccharides that summarises its traditional use (Qu et al.).

run({
  name: "Glehnia Root",
  profile: {
    family: "Apiaceae",
    genus: "Glehnia",
    species: "littoralis",
    partsUsed: "The dried root, harvested in summer and autumn",
  },
  sources: {
    qu: {
      title: "Extraction, Purification, Structure, and Bioactivities of Polysaccharides from Glehnia littoralis: A Review",
      author: "Qu Z, Gao Q, Liu M, Zhang Q, Shi D, Gao P, Dai Y",
      journal: "Molecules",
      publicationDate: "2025-10-24",
      doi: "10.3390/molecules30214173",
      pmid: "41226136",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12610580/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Bei Sha Shen", type: "TRADITIONAL_NAME" },
    { name: "Beishashen", type: "TRADITIONAL_NAME" },
    { name: "Glehniae Radix", type: "COMMON_NAME" },
    { name: "Glehnia", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Called bei sha shen; recorded in the Shennong Herbal Classic and used to nourish yin, clear the lungs and help the stomach." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Glehnia root, bei sha shen in Chinese, was first recorded in the Shennong Herbal Classic. It's described as sweet, bitter and slightly cold, and is used to nourish yin, \"clear the lungs\", help the stomach and promote body fluids. It's mainly grown in coastal areas. It's in 126 Chinese patent medicines, including lung-clearing and cough capsules, and in formulas for dry mouth, sore throat and poor appetite.",
      source: "qu",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and animal studies, polysaccharides from the root affected the immune system, slowed tumours and acted as antioxidants. They haven't been tested on their own in people.",
      source: "qu",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Used in Chinese lung-clearing and cough medicines. Not tested on its own in trials." },
    { slug: "sore-throat", notes: "Used in traditional formulas for sore throat and dry mouth. Not tested on its own in trials." },
  ],
});
