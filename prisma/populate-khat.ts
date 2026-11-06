import { run } from "./lib/populate-herb";

// Khat (Catha edulis), from the DEA khat fact sheet, the federal controlled
// substance schedules (21 CFR 1308.11 and 1308.14), a 2005 review (Al-Hebshi and
// Skaug), a 2018 review of its effects on the mouth (Al-Maweri et al.), a 2024
// meta-analysis of khat use in Ethiopia (Ayano et al.) and a 2014 liver study
// (Riyaz et al.). Family per GBIF.

run({
  name: "Khat",
  profile: { family: "Celastraceae", genus: "Catha", species: "edulis", nativeRange: "East Africa and the Arabian Peninsula", partsUsed: "The fresh leaves and twigs" },
  sources: {
    dea: {
      title: "Khat: Drug Fact Sheet",
      organization: "US Drug Enforcement Administration",
      url: "https://www.dea.gov/factsheets/khat",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    cfr: {
      title: "21 CFR 1308.11 Schedule I and 1308.14 Schedule IV",
      organization: "US Drug Enforcement Administration (Code of Federal Regulations)",
      url: "https://www.ecfr.gov/current/title-21/chapter-II/part-1308",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    alhebshi: {
      title: "Khat (Catha edulis)-an updated review",
      author: "Al-Hebshi NN, Skaug N",
      journal: "Addiction Biology",
      publicationDate: "2005-12-01",
      doi: "10.1080/13556210500353020",
      pmid: "16318950",
      url: "https://doi.org/10.1080/13556210500353020",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    almaweri: {
      title: "Khat (Catha edulis) and its oral health effects: An updated review",
      author: "Al-Maweri SA, Warnakulasuriya S, Samran A",
      journal: "Journal of Investigative and Clinical Dentistry",
      publicationDate: "2017-08-19",
      doi: "10.1111/jicd.12288",
      pmid: "28834423",
      url: "https://doi.org/10.1111/jicd.12288",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ayano: {
      title: "Epidemiology of Khat (Catha edulis) Chewing in Ethiopia: A Systematic Review and meta-analysis",
      author: "Ayano G, Ayalew M, Bedaso A, Duko B",
      journal: "Journal of Psychoactive Drugs",
      publicationDate: "2022-12-12",
      doi: "10.1080/02791072.2022.2155735",
      pmid: "36508190",
      url: "https://doi.org/10.1080/02791072.2022.2155735",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    riyaz: {
      title: "Khat (Catha Edulis) as a possible cause of autoimmune hepatitis",
      author: "Riyaz S, Imran M, Gleeson D, Karajeh MA",
      journal: "World Journal of Hepatology",
      publicationDate: "2014-03-27",
      doi: "10.4254/wjh.v6.i3.150",
      pmid: "24672645",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3959116/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Qat", type: "COMMON_NAME" },
    { name: "Miraa", type: "REGIONAL_NAME", region: "Kenya" },
    { name: "Abyssinian Tea", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A shrub whose fresh leaves and twigs are chewed for their amphetamine-like stimulant effect, a habit common in East Africa and Yemen and recorded since at least the 11th century.",
      source: "alhebshi",
    },
    {
      category: "TRADITIONAL",
      summary: "In Ethiopia, about 1 in 5 people currently chew khat, and men are about four times as likely as women to use it.",
      source: "ayano",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description: "In the US, khat's main active compound, cathinone, is a Schedule I controlled substance, and its other stimulant, cathine, is Schedule IV.",
      source: "cfr",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Khat raises blood pressure and heart rate right away. It can cause paranoia, hallucinations, nightmares, insomnia and stomach problems, and long-term use can lead to violence, suicidal depression and exhaustion.",
      source: "dea",
    },
    {
      category: "TOXICITY",
      description: "Liver damage and heart attacks have been reported, mostly in long-term chewers or after very large amounts. Six men who chewed khat developed hepatitis that looked like autoimmune hepatitis.",
      source: "riyaz",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "Long-term chewing is linked to white patches in the mouth, gum disease, tooth loss, dry mouth and brown-stained teeth.",
      source: "almaweri",
    },
  ],
});
