import { run } from "./lib/populate-herb";

// Datura (Datura stramonium, jimsonweed), from a 2021 review of Datura species
// (Sharma et al.; only statements it attributes to D. stramonium are used) and
// the 2019 Uganda food-contamination outbreak investigation (Mutebi et al.
// 2022). Family per GBIF.

run({
  name: "Datura",
  profile: {
    family: "Solanaceae",
    genus: "Datura",
    species: "stramonium",
    nativeRange: "The Americas; now a widespread weed in warm and temperate regions",
    partsUsed: "The leaves, seeds and bark (all parts are poisonous)",
  },
  sources: {
    sharma: {
      title: "Phytochemistry, Pharmacology, and Toxicology of Datura Species—A Review",
      author: "Sharma M, Dhaliwal I, Rana K, Delta AK, Kaushik P",
      journal: "Antioxidants",
      publicationDate: "2021-08-15",
      doi: "10.3390/antiox10081291",
      pmid: "34439539",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8389218/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mutebi: {
      title: "Large outbreak of Jimsonweed (Datura stramonium) poisoning due to consumption of contaminated humanitarian relief food: Uganda, March-April 2019",
      author: "Mutebi RR, Ario AR, Nabatanzi M, et al.",
      journal: "BMC Public Health",
      publicationDate: "2022-03-30",
      doi: "10.1186/s12889-022-12854-1",
      pmid: "35354446",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8969350/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Jimsonweed", type: "COMMON_NAME" },
    { name: "Thorn Apple", type: "COMMON_NAME" },
    { name: "Devil's Trumpet", type: "COMMON_NAME" },
  ],
  constituents: [
    { name: "Atropine", slug: "atropine", type: "tropane alkaloid" },
    { name: "Scopolamine", slug: "scopolamine", type: "tropane alkaloid" },
    { name: "Hyoscyamine", slug: "hyoscyamine", type: "tropane alkaloid" },
  ],
  traditions: [
    {
      slug: "ayurveda",
      notes: "Used for wounds, ulcers, rheumatism, fever, inflammation, asthma and toothache; leaves were smoked in a pipe for allergies.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Ayurveda, datura has been used for:\n- wounds, ulcers, burns and swellings (the bark, applied to the skin)\n- rheumatism and sciatica pain (as an ointment)\n- asthma and sinus problems (the leaf, taken by mouth, or smoked)\n- fever, inflammation and toothache\nThe seeds have also been smoked for their hallucinogenic effect, and the plant is used in religious rituals.",
      source: "sharma",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, seed extracts showed antioxidant activity and killed breast cancer cells. Leaf extracts killed some bacteria and repelled or killed mosquito larvae.\n\nTechnical detail: methanolic seed extract DPPH IC50 94.87 µg/mL; MCF-7 IC50 113.05 µg/mL; larvicidal against Aedes aegypti, Anopheles stephensi and Culex quinquefasciatus.",
      source: "sharma",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "The 2021 review mentions a study in which people with mild asthma inhaled smoke from datura cigarettes and their airways opened slightly. It gives no details of how many people took part, and no controlled trials in people were found.",
      source: "sharma",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Every part of datura is poisonous, and the seeds are the most poisonous. Drying or boiling doesn't destroy the poison. Poisoning can cause dry mouth and skin, widened pupils, blurred vision, a fast heartbeat, fever, confusion, hallucinations, seizures, coma and death. Get emergency help if someone may have eaten it.",
      source: "sharma",
    },
    {
      category: "CONTAMINATION",
      description:
        "Datura seeds can get mixed into grain and bean harvests. In Uganda in 2019, contaminated food aid poisoned 293 people and 5 died. Symptoms included confusion, dizziness, diarrhea, vomiting, seizures and hallucinations, starting 2 to 12 hours after eating.",
      source: "mutebi",
    },
    {
      category: "CONTRAINDICATION",
      description:
        "Don't use datura if you have glaucoma, an enlarged prostate, a fast or irregular heartbeat, a blocked or paralyzed bowel, a narrowed stomach outlet (pyloric stenosis) or fluid on the lungs.",
      source: "sharma",
    },
    {
      category: "PREGNANCY",
      description: "The review warns that exposure before birth may cause lasting harm to the baby. Don't use it while pregnant.",
      source: "sharma",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "People who take datura recreationally for its hallucinogenic effects have been seriously poisoned.",
      source: "sharma",
    },
  ],
});
