import { run } from "./lib/populate-herb";

// Chinaberry Bark (Melia azedarach; related Melia toosendan), from a 2023 review
// of toosendanin (Hu et al.; abstract only), a 2025 study of toosendanin liver
// toxicity (Ni et al.), a 2023 review of plant poisonings in animals (Nagy et al.)
// and a 2026 lab study of compounds from the bark (Huang et al.).

run({
  name: "Chinaberry Bark",
  profile: {
    family: "Meliaceae",
    genus: "Melia",
    species: "azedarach",
    nativeRange: "Asia; planted as an ornamental tree worldwide",
    partsUsed: "The bark (and the fruit of the related Melia toosendan)",
  },
  sources: {
    hu: {
      title: "Therapeutic potential of toosendanin: Novel applications of an old ascaris repellent as a drug candidate",
      author: "Hu M, Xu M, Chen Y, et al.",
      journal: "Biomedicine & Pharmacotherapy",
      publicationDate: "2023-09-20",
      doi: "10.1016/j.biopha.2023.115541",
      pmid: "37738795",
      url: "https://pubmed.ncbi.nlm.nih.gov/37738795/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ni: {
      title: "Toosendanin Induces Hepatotoxicity by Facilitating ALOX5-Mediated Lipid Peroxidation and Sensitizing Cells to Ferroptosis",
      author: "Ni J, Huang L, Tian Y, Zhao C, Zhou Z, Shen F, Huang Z",
      journal: "Pharmaceuticals",
      publicationDate: "2025-07-21",
      doi: "10.3390/ph18071078",
      pmid: "40732365",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12300629/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nagy: {
      title: "Emerging Plant Intoxications in Domestic Animals: A European Perspective",
      author: "Nagy AL, Ardelean S, Chapuis RJJ, et al.",
      journal: "Toxins",
      publicationDate: "2023-07-04",
      doi: "10.3390/toxins15070442",
      pmid: "37505711",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10467095/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    huang: {
      title: "Anti-Hepatocarcinoma Activity and Mechanism of Isosendanin and Its Novel Structural Analogues Isolated from the Bark of Melia azedarach L.: In Vitro and In Vivo Studies",
      author: "Huang Y, Gao E, Liu Q, Yuan J, Wu Y, Wang W, Rao X",
      journal: "Antioxidants",
      publicationDate: "2026-04-29",
      doi: "10.3390/antiox15050562",
      pmid: "42193184",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13203457/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Chinaberry", type: "COMMON_NAME" },
    { name: "Chinaberry Tree", type: "COMMON_NAME" },
    { name: "White Cedar", type: "COMMON_NAME" },
    { name: "Pride of India", type: "COMMON_NAME" },
    { name: "Indian Lilac", type: "COMMON_NAME" },
    { name: "Melia toosendan", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "Melia has long been recorded in Chinese medical books; its compound toosendanin was developed into a roundworm medicine. It's toxic to the liver." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The chinaberry tree has long been recorded in traditional Chinese medical books. In China, toosendanin, a compound from Melia azedarach and Melia toosendan, was developed into a medicine to expel roundworms (ascaris). The fruit of Melia toosendan is used to \"regulate qi\", soothe the liver and expel gut parasites.",
      source: "hu",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab and mouse studies, compounds isolated from the bark slowed liver cancer. This hasn't been tested in people.",
      source: "huang",
    },
    {
      category: "PRECLINICAL",
      summary: "In research studies, toosendanin has shown anticancer, antiviral and antiparasitic activity. Its use as a roundworm medicine has declined as roundworm infections have become less common.",
      source: "hu",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "Toosendanin, the main active compound, is also the main toxic one. It damages the liver, and this liver injury limits its medical use. Melia toosendan fruit has been reported to cause liver damage.",
      source: "ni",
    },
    {
      category: "TOXICITY",
      description: "Chinaberry poisoning has been reported in horses, cattle, sheep, goats, pigs, dogs, rabbits and poultry. Its toxins (meliatoxins), which are most concentrated in the fruit, irritate the gut and damage the liver and kidneys.",
      source: "nagy",
    },
  ],
  symptoms: [
    { slug: "liver-safety-warnings", notes: "Its main compound, toosendanin, damages the liver; Melia fruit has been reported to cause liver injury." },
    { slug: "sibo-and-parasites", notes: "Toosendanin was developed in China as a roundworm medicine, but it's toxic to the liver." },
  ],
});
