import { run } from "./lib/populate-herb";

// Lapacho, pau d'arco (Handroanthus impetiginosus), from the Memorial Sloan
// Kettering "About Herbs" entry (updated 2023). Family per GBIF.

run({
  name: "Lapacho",
  profile: {
    family: "Bignoniaceae",
    genus: "Handroanthus",
    species: "impetiginosus",
    nativeRange: "South America",
    partsUsed: "The inner bark, usually made into a tea",
  },
  sources: {
    mskcc: {
      title: "Pau D'arco",
      organization: "Memorial Sloan Kettering Cancer Center",
      publicationDate: "2023-04-13",
      url: "https://www.mskcc.org/cancer-care/integrative-medicine/herbs/pau-d-arco",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
  },
  synonyms: [
    { name: "Pau d'Arco", type: "COMMON_NAME" },
    { name: "Taheebo", type: "COMMON_NAME" },
    { name: "Ipê-Roxo", type: "REGIONAL_NAME", region: "Brazil" },
    { name: "Trumpet Bush", type: "COMMON_NAME" },
    { name: "Tabebuia impetiginosa", type: "SCIENTIFIC_SYNONYM" },
    { name: "Tabebuia avellanedae", type: "SCIENTIFIC_SYNONYM" },
  ],
  constituents: [
    { name: "Lapachol", slug: "lapachol", type: "naphthoquinone" },
    { name: "Beta-Lapachone", slug: "beta-lapachone", type: "naphthoquinone" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Tea made from the inner bark of South American lapacho trees is used in traditional medicine. Supplements are sold for infections and cancer.",
      source: "mskcc",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab studies, pau d'arco killed some bacteria, fungi and cancer cells, and may help reduce inflammation. These effects haven't been shown in people. Its compounds lapachol and beta-lapachone are thought to be responsible.",
      source: "mskcc",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "Research in people is limited:\n- Small studies of a lapacho-based preparation suggested it may help prevent painful mouth sores in people having radiotherapy for head and neck cancer. The findings are preliminary.\n- A 1974 study found lapachol didn't help people with chronic myelocytic leukemia.\n- A small 2022 open-label study of adults with painful periods suggested it may reduce pain, but it had no comparison group.",
      source: "mskcc",
    },
  ],
  safety: [
    {
      category: "DRUG_INTERACTION",
      description:
        "Don't take it with blood thinners such as warfarin, or antiplatelet medicines such as aspirin or clopidogrel. Its compound lapachol works in a similar way to warfarin and may raise the risk of bleeding.",
      source: "mskcc",
    },
    {
      category: "ADVERSE_EFFECT",
      description: "In a clinical study, people had nausea, vomiting and discolored urine.",
      source: "mskcc",
    },
    {
      category: "PREGNANCY",
      description: "In animal studies, lapachol harmed unborn young and caused anemia and chromosome damage.",
      source: "mskcc",
    },
  ],
  preparations: [{ slug: "tea-infusion", notes: "The inner bark is made into a tea.", source: "mskcc" }],
});
