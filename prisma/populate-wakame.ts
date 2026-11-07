import { run } from "./lib/populate-herb";

// Wakame (Undaria pinnatifida), an edible brown seaweed. Sources: a 2026
// randomized trial of wakame fucoidan for enlarged prostate and a 2026 review of
// brown seaweeds in type 2 diabetes. Family per GBIF. No source covering safety
// (e.g. iodine) was used, so none is stated.

run({
  name: "Wakame",
  profile: {
    family: "Alariaceae",
    genus: "Undaria",
    species: "pinnatifida",
    partsUsed: "The seaweed (fronds), eaten as food or as an extract",
  },
  sources: {
    wimmer: {
      title: "Fucoidan from Undaria pinnatifida Improves Benign Prostatic Hyperplasia Symptoms in Men: A Randomized, Double-Blind, Placebo-Controlled Study",
      author: "Wimmer BC, Dwan CA, Bhalerao SS, Gupta CG, Vaze SV, Kshirsagar SS",
      journal: "Research and Reports in Urology",
      publicationDate: "2026-07-15",
      doi: "10.2147/RRU.S597883",
      pmid: "42488927",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13389963/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    jung: {
      title: "Brown Seaweeds and Their Bioactive Compounds in Type 2 Diabetes: Mechanisms Underlying Metabolic Regulation",
      author: "Jung UJ, Kim SR",
      journal: "International Journal of Molecular Sciences",
      publicationDate: "2026-05-25",
      doi: "10.3390/ijms27114753",
      pmid: "42278284",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13256143/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Wakame Algae", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "Brown seaweeds such as wakame contain fucoidan, alginate, phlorotannins and fucoxanthin. A 2026 review described a growing body of research, mostly in the lab and in animals, on how these compounds may help regulate blood sugar.",
      source: "jung",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2026 trial, 95 men aged 45 to 80 with a moderately enlarged prostate took fucoidan from wakame or a placebo for 90 days. Their urinary symptoms and quality of life improved more than with placebo. The study was short, and other measures didn't differ between the groups.\n\nTechnical detail: IPSS fell by 3.40 with fucoidan vs 0.93 with placebo at day 90.",
      source: "wimmer",
    },
  ],
  symptoms: [
    { slug: "enlarged-prostate", notes: "A 90-day trial found fucoidan from wakame eased urinary symptoms in men with a moderately enlarged prostate." },
  ],
});
