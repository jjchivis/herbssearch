import { run } from "./lib/populate-herb";

// Devil's Cotton (Abroma augusta, ulatkambal), from a 2012 rat study of its
// leaves (Islam et al.) and a 2020 lab and mouse study of its bark (Miah et
// al.). A 2015 study on diabetic organ damage carries an editorial expression
// of concern and isn't used. No human trials were found. Family per GBIF.

run({
  name: "Devil's Cotton",
  profile: {
    family: "Malvaceae",
    genus: "Abroma",
    species: "augusta",
    nativeRange: "South and Southeast Asia",
    partsUsed: "The leaves, bark and root",
  },
  sources: {
    islam: {
      title: "Effects of Aqueous Extract of Fresh Leaves of Abroma augusta L. on Oral Absorption of Glucose and Metformin Hydrochloride in Experimental Rats",
      author: "Islam T, Rahman A, Islam AU",
      journal: "ISRN Pharmaceutics",
      publicationDate: "2012-07-05",
      doi: "10.5402/2012/472586",
      pmid: "22830057",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3399456/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    miah: {
      title: "Methanolic Bark Extract of Abroma augusta (L.) Induces Apoptosis in EAC Cells through Altered Expression of Apoptosis Regulatory Genes",
      author: "Miah M, Shimu AS, Mahmud S, et al.",
      journal: "Evidence-Based Complementary and Alternative Medicine",
      publicationDate: "2020-04-13",
      doi: "10.1155/2020/9145626",
      pmid: "32351610",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7178513/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Ulatkambal", type: "REGIONAL_NAME", region: "Bangladesh and India (Bengali)" }],
  symptoms: [
    {
      slug: "high-blood-sugar",
      notes: "A leaf drink is traditionally used for diabetes; it slowed sugar absorption in rats but also reduced absorption of metformin.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A thick, slimy drink made from the fresh leaves of devil's cotton (ulatkambal in Bengali) is traditionally used for diabetes.",
      source: "islam",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats, the leaf drink slowed the absorption of sugar from the gut, which may help control blood sugar.",
      source: "islam",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests and in mice, a bark extract was a strong antioxidant and slowed the growth of a type of cancer cell.",
      source: "miah",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "In diabetic rats, the leaf drink reduced how much metformin was absorbed. The researchers advise against taking it at the same time as metformin.",
      source: "islam",
    },
  ],
});
