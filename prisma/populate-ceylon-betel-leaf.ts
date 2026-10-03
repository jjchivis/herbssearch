import { run } from "./lib/populate-herb";

// Ceylon Betel Leaf (Piper betle), from a 2021 review of betel leaf's
// antibacterial and antifungal properties and safety (Nayaka et al.) and the
// IARC monograph on betel-quid and areca-nut chewing (volume 85, 2004).

run({
  name: "Ceylon Betel Leaf",
  profile: {
    family: "Piperaceae",
    genus: "Piper",
    species: "betle",
    partsUsed: "The fresh leaves, chewed, as juice or a boiled wash, and the essential oil",
  },
  sources: {
    nayaka: {
      title: "Piper betle (L): Recent Review of Antibacterial and Antifungal Properties, Safety Profiles, and Commercial Applications",
      author: "Nayaka NMDMW, Sasadara MMV, Sanjaya DA, Yuda PESK, Dewi NLKAA, Cahyaningsih E, Hartati R",
      journal: "Molecules",
      publicationDate: "2021-04-16",
      doi: "10.3390/molecules26082321",
      pmid: "33923576",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8073370/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    iarc: {
      title: "IARC Monographs Volume 85: Betel-quid and Areca-nut Chewing and Some Areca-nut-derived Nitrosamines (Summaries & Evaluations)",
      organization: "International Agency for Research on Cancer (WHO)",
      publicationDate: "2004-09-30",
      url: "https://inchem.org/documents/iarc/vol85/85-01-betel-areca.html",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
  },
  synonyms: [
    { name: "Betel Leaf", type: "COMMON_NAME" },
    { name: "Betel Vine", type: "COMMON_NAME" },
    { name: "Paan", type: "REGIONAL_NAME", region: "South Asia" },
    { name: "Sirih", type: "REGIONAL_NAME", region: "Malaysia and Indonesia" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Betel leaves are chewed in many countries, where people believe they freshen breath, strengthen gums, protect teeth and aid digestion. In folk medicine they're used:\n- In Sri Lanka, as leaf juice for skin ailments\n- In India and Thailand, as a mouthwash\n- In Malaysia, for dental problems, headaches, arthritis and joint pain\n- In Indonesia, as a vaginal wash",
      source: "nayaka",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, betel leaf extracts and essential oil killed or stopped the growth of many bacteria and fungi, including drug-resistant strains, Staphylococcus aureus, E. coli and Candida (the yeast behind thrush). In mice, a leaf extract wasn't toxic even at high doses.\n\nTechnical detail: methanol extract oral LD50 > 5000 mg/kg in ICR mice.",
      source: "nayaka",
    },
    {
      category: "PRECLINICAL",
      summary: "In animal studies, betel leaf extract given by mouth, in food or on the cheek didn't cause tumors, and in several studies it showed some anti-tumor effects.",
      source: "iarc",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Betel quid, a betel leaf wrapped around areca nut and slaked lime (often with tobacco), causes cancer in people, whether or not it contains tobacco. The areca nut, which is in every betel quid, also causes cancer and a scarring of the mouth that can turn cancerous.\nThe leaf on its own didn't cause tumors in animal studies.\n\nTechnical detail: IARC Group 1 carcinogens: betel quid with tobacco, betel quid without tobacco, and areca nut. Areca nut causes oral submucous fibrosis.",
      source: "iarc",
    },
  ],
});
