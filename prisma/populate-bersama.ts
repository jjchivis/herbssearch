import { run } from "./lib/populate-herb";

// Bersama (Bersama abyssinica), from a 2024 review of the genus (Nigussie et al.),
// a 2022 study in diabetic mice (Kifle et al.) and a 2025 liver study in mice
// (Mekuria et al.). Bersama is the Ethiopian name for the genus. Family per GBIF.

run({
  name: "Bersama",
  profile: { family: "Melianthaceae", genus: "Bersama", species: "abyssinica", nativeRange: "Tropical Africa, from Ethiopia to Angola", partsUsed: "The bark, leaves and roots" },
  sources: {
    nigussie: {
      title: "The ethnomedicine, phytochemistry, and pharmacological properties of the genus Bersama: current review and future perspectives",
      author: "Nigussie G, Ashenef S, Meresa A",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2024-03-21",
      doi: "10.3389/fphar.2024.1366427",
      pmid: "38576479",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10991763/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    kifle: {
      title: "Effect of Crude Leaves Extract of Bersama abyssinica on Blood Glucose Level and Serum Lipid Level of Streptozotocin-Induced Diabetic Mice: Evidence for in vivo Antidiabetic Activity",
      author: "Kifle ZD, Alehegn AA, Adugna BY, Mekuria AB, Enyew EF",
      journal: "Cardiovascular & Hematological Agents in Medicinal Chemistry",
      publicationDate: "2022-01-01",
      doi: "10.2174/1871525719666210726114802",
      pmid: "34313203",
      url: "https://doi.org/10.2174/1871525719666210726114802",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mekuria: {
      title: "Hepatoprotective Effect of Bersama abyssinica Fresen Leaf Methanolic Extract on Paracetamol-Induced Hepatotoxicity in Swiss Albino Mice",
      author: "Mekuria S, Wondimnew T, Fekadie M, et al.",
      journal: "Global Advances in Integrative Medicine and Health",
      publicationDate: "2025-11-26",
      doi: "10.1177/27536130251405227",
      pmid: "41323764",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12657767/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A shrub or small tree whose bark, leaves and roots are boiled for colic, diarrhea, dysentery and worms, and used for rheumatism, diabetes, malaria, hemorrhoids, epilepsy and sexually transmitted infections. In southern Ethiopia the bark is used for liver ailments and snakebite.",
      source: "nigussie",
    },
    {
      category: "PRECLINICAL",
      summary: "In diabetic mice, a leaf extract lowered blood sugar by about half over 14 days, close to the diabetes drug glibenclamide, and improved blood fats.",
      source: "kifle",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, a leaf extract protected the liver from acetaminophen (paracetamol) damage.",
      source: "mekuria",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description: "It contains cardiac glycosides, compounds that act on the heart and can affect the gut, nerves and breathing. Its leaves have been linked to deaths of cattle and other animals, so the dose matters.",
      source: "nigussie",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found.",
      source: "nigussie",
    },
  ],
  symptoms: [
    { slug: "diarrhea", notes: "A traditional remedy for diarrhea and dysentery. Not tested in people." },
    { slug: "high-blood-sugar", notes: "Lowered blood sugar in diabetic mice. Not tested in people." },
  ],
});
