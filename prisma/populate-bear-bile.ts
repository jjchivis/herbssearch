import { run } from "./lib/populate-herb";

// Bear bile, an animal product used in traditional Chinese and Bhutanese
// medicine. Sources: a 2025 review of ursodeoxycholic acid (UDCA), bear bile's
// key compound, now an approved drug; a 2025 case report of liver injury after
// drinking bear bile; and a 2025 veterinary study of bile-extracted bears that
// documents the welfare and conservation issues. Listed under the General
// Wellness "Animal-Derived Remedies" topic at the site owner's request.

run({
  name: "Bear Bile",
  profile: {
    family: "Ursidae",
    genus: "Ursus",
    species: "arctos",
    partsUsed: "Bile from the gallbladder, usually dried to a powder",
  },
  sources: {
    li: {
      title: "Advances in Pharmacological Activities, Biosynthesis, and Structural Modification of Ursodeoxycholic Acid (UDCA): A Review",
      author: "Li P, Wang J, Hao H, Chen X, He X, Shao Q",
      journal: "Drug Design, Development and Therapy",
      publicationDate: "2025-12-05",
      doi: "10.2147/DDDT.S557300",
      pmid: "41376668",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12687655/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    rabjay: {
      title: "Toxin-Induced Liver Injury Following Bear Bile Consumption in a Middle-Aged Female in Bhutan: A Case Report",
      author: "Rabjay SW, Wangmo T, Dorji T",
      journal: "Clinical Case Reports",
      publicationDate: "2025-07-29",
      doi: "10.1002/ccr3.70692",
      pmid: "40741117",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12307233/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    bearWelfare: {
      title: "High Prevalence of Lesions of Systemic Hypertension in Bile-Extracted Asiatic Black Bears (Ursus thibetanus) and Associated Renal Disease",
      journal: "Animals",
      publicationDate: "2025-07-01",
      doi: "10.3390/ani15131940",
      pmid: "40646840",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12249298/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Bear Bile Powder", type: "COMMON_NAME" },
    { name: "Ursodeoxycholic Acid", type: "COMMON_NAME" },
    { name: "UDCA", type: "COMMON_NAME" },
    { name: "Ursodiol", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "traditional-chinese-medicine",
      notes: "Used for more than 1,300 years to calm the liver, help bile flow, relieve fever, clear toxins, ease spasms and protect the liver.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Bear bile has been used in traditional Chinese medicine for more than 1,300 years, to calm the liver, help bile flow, relieve fever, clear toxins, ease spasms and protect the liver.",
      source: "li",
    },
    {
      category: "TRADITIONAL",
      summary:
        "In traditional Bhutanese medicine (Sowa Rigpa), bear bile has been taken for fever, clearing toxins, liver problems and pain. Mainstream Bhutanese traditional practitioners no longer endorse taking pure bear bile.",
      source: "rabjay",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Bear bile's key compound, ursodeoxycholic acid (UDCA, also called ursodiol), is now an approved medicine made without bears. The FDA approved it in 1997 for primary biliary cirrhosis (now called primary biliary cholangitis), a long-term liver disease. It is used to dissolve certain gallstones and to treat several other liver and bile-flow problems. These results are for the purified medicine, not for raw bear bile.",
      source: "li",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "A woman in Bhutan developed liver injury with jaundice (yellow skin and eyes) after drinking a pea-sized spoonful of bear bile dissolved in water once. The authors warn that bear bile can cause severe liver damage.",
      source: "rabjay",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "About 17,000 bears across Asia are kept in bile-extraction facilities, often in small cages, with bile drawn from the gallbladder through needles, implanted tubes or surgical openings. These bears suffer high rates of high blood pressure damage and kidney disease. The Asiatic black bear, the species most used, is listed as vulnerable, and international trade is restricted under CITES Appendix I. Proven alternatives exist, including the approved medicine ursodiol.",
      source: "bearWelfare",
    },
  ],
  symptoms: [
    { slug: "animal-derived-remedies", notes: "A traditional remedy made from bear bile, with serious animal-welfare and conservation concerns." },
    { slug: "liver-disease", notes: "Its compound UDCA (ursodiol) is an approved medicine for primary biliary cholangitis; raw bear bile itself has caused liver injury." },
    { slug: "gallstones-and-bile-flow", notes: "Its compound UDCA (ursodiol) is used as a medicine to dissolve certain gallstones and improve bile flow." },
    { slug: "liver-safety-warnings", notes: "Drinking bear bile caused liver injury with jaundice in a case report." },
  ],
});
