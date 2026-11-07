import { run } from "./lib/populate-herb";

// Salad burnet (Sanguisorba minor, syn. Poterium sanguisorba). Sources: a 2023
// review, a 2023 rat study and a 2026 lab study of its seed oil. Family per GBIF.
// No source covering human safety was found, so none is stated.

run({
  name: "Salad Burnet",
  profile: {
    family: "Rosaceae",
    genus: "Sanguisorba",
    species: "minor",
    partsUsed: "The above-ground parts and seeds",
  },
  sources: {
    tocai: {
      title: "Sanguisorba minor Scop.: An Overview of Its Phytochemistry and Biological Effects",
      author: "Tocai Moţoc AC, Kokeric T, Tripon S, et al.",
      journal: "Plants",
      publicationDate: "2023-05-27",
      doi: "10.3390/plants12112128",
      pmid: "37299107",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10255321/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    hosseini: {
      title: "Cardioprotective effect of Sanguisorba minor against isoprenaline-induced myocardial infarction in rats",
      author: "Hosseini A, Ghorbani A, Alavi MS, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2023-12-21",
      doi: "10.3389/fphar.2023.1305816",
      pmid: "38223198",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10784747/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    torun: {
      title: "Exploring Antimicrobial Activities of Fixed Oil From Sanguisorba minor Seeds by In Vitro and In Silico Analysis",
      author: "Torun Z, Unver T, Uslu H, Goktas B",
      journal: "ChemistryOpen",
      publicationDate: "2026-07-01",
      doi: "10.1002/open.70250",
      pmid: "42394206",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13328840/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Poterium sanguisorba", type: "SCIENTIFIC_SYNONYM" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Plants in the burnet genus have been used as medicine for more than 2,000 years.",
      source: "tocai",
    },
    {
      category: "TRADITIONAL",
      summary: "Salad burnet has traditionally been used for wound healing, burns and to stop bleeding.",
      source: "torun",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 2023 rat study, salad burnet extract given for 9 days protected the heart from damage caused by a drug that triggers heart-attack-like injury, and boosted the body's antioxidant defenses.\n\nTechnical detail: isoprenaline-induced myocardial infarction; lowered cTnT, LDH, CK-MB and CPK; raised SOD and catalase.",
      source: "hosseini",
    },
    {
      category: "PRECLINICAL",
      summary: "In a 2026 lab study, oil pressed from salad burnet seeds slowed the growth of several bacteria and Candida yeasts.",
      source: "torun",
    },
  ],
});
