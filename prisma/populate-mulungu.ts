import { run } from "./lib/populate-herb";

// Mulungu (Erythrina mulungu, also listed as Erythrina verna), from a 2020
// dental surgery trial (da Cunha et al.), a 2018 mouse asthma study (Amorim et
// al.) and a 2011 rat seizure study (Faggion et al.). Family per GBIF.

run({
  name: "Mulungu",
  profile: {
    family: "Fabaceae",
    genus: "Erythrina",
    species: "mulungu",
    nativeRange: "Brazil",
    partsUsed: "The flowers and bark",
  },
  sources: {
    dacunha: {
      title: "Herbal medicines as anxiolytics prior to third molar surgical extraction. A randomized controlled clinical trial",
      author: "da Cunha RS, Amorim KS, Gercina AC, et al.",
      journal: "Clinical Oral Investigations",
      publicationDate: "2020-09-19",
      doi: "10.1007/s00784-020-03468-1",
      pmid: "32951121",
      url: "https://pubmed.ncbi.nlm.nih.gov/32951121/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    amorim: {
      title: "The ethanolic extract from Erythrina mulungu Benth. flowers attenuates allergic airway inflammation and hyperresponsiveness in a murine model of asthma",
      author: "Amorim J, Borges MC, Fabro AT, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2018-08-10",
      doi: "10.1016/j.jep.2018.08.009",
      pmid: "30102994",
      url: "https://pubmed.ncbi.nlm.nih.gov/30102994/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    faggion: {
      title: "Anticonvulsant profile of the alkaloids (+)-erythravine and (+)-11-α-hydroxy-erythravine isolated from the flowers of Erythrina mulungu Mart ex Benth (Leguminosae-Papilionaceae)",
      author: "Faggion SA, Cunha AO, Fachim HA, et al.",
      journal: "Epilepsy & Behavior",
      publicationDate: "2011-02-01",
      doi: "10.1016/j.yebeh.2010.12.037",
      pmid: "21277832",
      url: "https://pubmed.ncbi.nlm.nih.gov/21277832/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Erythrina verna", type: "SCIENTIFIC_SYNONYM" }],
  constituents: [
    { name: "Erythravine", slug: "erythravine", type: "erythrina alkaloid" },
    { name: "Erysotrine", slug: "erysotrine", type: "erythrina alkaloid" },
    { name: "Hypaphorine", slug: "hypaphorine", type: "alkaloid" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Mulungu is a native Brazilian tree used traditionally for breathing problems.",
      source: "amorim",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice with allergic asthma, a flower extract reduced airway over-reactivity and lung inflammation.\n\nTechnical detail: 200–800 mg/kg intraperitoneally; ovalbumin model; reduced IL-4 and IL-5; main alkaloids erysotrine, erysotrine-N-oxide and hypaphorine.",
      source: "amorim",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats, two alkaloids from the flowers blocked up to all chemically triggered seizures, depending on the trigger, and protected the animals from death.\n\nTechnical detail: (+)-erythravine and (+)-11-α-hydroxy-erythravine; bicuculline, pentylenetetrazole, kainic acid and NMDA models.",
      source: "faggion",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a trial of 200 people having wisdom teeth removed, 500 mg of mulungu taken an hour before surgery didn't control anxiety any better than a placebo. Passionflower worked about as well as midazolam, a prescription medicine used to calm people before procedures.\n\nTechnical detail: randomized, placebo-controlled, triple-blind; compared with Passiflora incarnata 500 mg and midazolam 15 mg.",
      source: "dacunha",
    },
  ],
});
