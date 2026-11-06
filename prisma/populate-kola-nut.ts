import { run } from "./lib/populate-herb";

// Kola Nut (Cola nitida, also Cola acuminata), from the FDA list of substances
// generally recognized as safe (21 CFR 182.20), a 2013 essay on its history
// (Starin), a 2011 survey of kola chewing in Nigerian students (Erinfolami et al.),
// a 2017 lab study of its caffeine-rich infusion (Erukainure et al.) and a 2021 rat
// pregnancy study (Atiba et al.). Family per GBIF.

run({
  name: "Kola Nut",
  profile: { family: "Malvaceae", genus: "Cola", species: "nitida", nativeRange: "West Africa", partsUsed: "The seeds (nuts)" },
  sources: {
    fda: {
      title: "21 CFR 182.20 Essential oils, oleoresins, and natural extractives generally recognized as safe",
      organization: "US Food and Drug Administration",
      url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-182/subpart-A/section-182.20",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    starin: {
      title: "Kola nut: so much more than just a nut",
      author: "Starin D",
      journal: "Journal of the Royal Society of Medicine",
      publicationDate: "2013-10-24",
      doi: "10.1177/0141076813507708",
      pmid: "24158941",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3842857/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    erinfolami: {
      title: "Prevalence and associated risk factors of Kola nut chewing among secondary school students in Osogbo, Nigeria",
      author: "Erinfolami A, Eegunranti A, Ogunsemi O, et al.",
      journal: "Mental Illness",
      publicationDate: "2011-09-08",
      doi: "10.4081/mi.2011.e6",
      pmid: "25478098",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4253356/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    erukainure: {
      title: "Caffeine-rich infusion from Cola nitida (kola nut) inhibits major carbohydrate catabolic enzymes; abates redox imbalance; and modulates oxidative dysregulated metabolic pathways and metabolites in Fe2+-induced hepatic toxicity",
      author: "Erukainure OL, Oyebode OA, Sokhela MK, Koorbanally NA, Islam MS",
      journal: "Biomedicine & Pharmacotherapy",
      publicationDate: "2017-12-06",
      doi: "10.1016/j.biopha.2017.11.120",
      pmid: "29223552",
      url: "https://doi.org/10.1016/j.biopha.2017.11.120",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    atiba: {
      title: "Kola nut from Cola nitida vent. Schott administered to pregnant rats induces histological alterations in pups' cerebellum",
      author: "Atiba FA, Fatokun AA, Imosemi IO, Malomo AO",
      journal: "PLoS One",
      publicationDate: "2021-03-08",
      doi: "10.1371/journal.pone.0247573",
      pmid: "33684143",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7939374/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Cola Nut", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A bitter, caffeine-rich nut native to West Africa, chewed by people of all faiths and backgrounds to stave off hunger and tiredness and shared as a sign of hospitality. An Arab physician recommended it for stomach complaints in the 12th century.",
      source: "starin",
    },
    {
      category: "TRADITIONAL",
      summary: "It was an original flavor and stimulant in Victorian tonics and in the first Coca-Cola and Pepsi-Cola, sold as a brain tonic and for indigestion.",
      source: "starin",
    },
    {
      category: "TRADITIONAL",
      summary: "Kola chewing is common among Nigerian teenagers: three-quarters of secondary school students surveyed in Osogbo had tried it, most starting by age 14.",
      source: "erinfolami",
    },
    {
      category: "PRECLINICAL",
      summary: "In lab tests, a kola infusion, rich in caffeine, blocked starch-digesting enzymes and reduced oxidative damage to liver tissue.",
      source: "erukainure",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "The FDA lists kola nut extracts as generally recognized as safe in foods and drinks.",
      source: "fda",
    },
    {
      category: "PREGNANCY",
      description: "In pregnant rats, repeated doses of kola nut disrupted brain development in their pups. It's also high in caffeine.",
      source: "atiba",
    },
  ],
});
