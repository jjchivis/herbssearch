import { run } from "./lib/populate-herb";

// Calea Zacatechichi (Calea zacatechichi, dream herb), from a 1986 study in
// animals and healthy volunteers, mouse and rat studies (2016, 2021), and lab
// studies of kidney and brain cells (2016, 2025).

run({
  name: "Calea Zacatechichi",
  profile: {
    family: "Asteraceae",
    genus: "Calea",
    species: "zacatechichi",
    nativeRange: "Mexico",
    partsUsed: "The leaves and other above-ground parts, as a tea or extract",
  },
  sources: {
    mayagoitia: {
      title: "Psychopharmacologic analysis of an alleged oneirogenic plant: Calea zacatechichi",
      author: "Mayagoitia L, Díaz JL, Contreras CM",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "1986-12-01",
      doi: "10.1016/0378-8741(86)90002-4",
      pmid: "3821139",
      url: "https://pubmed.ncbi.nlm.nih.gov/3821139/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    salaga: {
      title: "Neuropharmacological characterization of the oneirogenic Mexican plant Calea zacatechichi aqueous extract in mice",
      author: "Sałaga M, Fichna J, Socała K, Nieoczym D, Pieróg M, Zielińska M, Kowalczuk A, Wlaź P",
      journal: "Metabolic Brain Disease",
      publicationDate: "2016-06-01",
      doi: "10.1007/s11011-016-9794-1",
      pmid: "26821073",
      url: "https://pubmed.ncbi.nlm.nih.gov/26821073/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    martinezMota: {
      title: "Calea zacatechichi Schltdl. (Compositae) produces anxiolytic- and antidepressant-like effects, and increases the hippocampal activity during REM sleep in rodents",
      author: "Martinez-Mota L, Cruz-Tavera A, Dorantes-Barrón AM, Arrieta-Báez D, Ramírez-Salado I, Cruz-Aguilar M",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2021-01-10",
      doi: "10.1016/j.jep.2020.113316",
      pmid: "32866569",
      url: "https://pubmed.ncbi.nlm.nih.gov/32866569/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mossoba: {
      title: "Evaluation of \"Dream Herb,\" Calea zacatechichi, for Nephrotoxicity Using Human Kidney Proximal Tubule Cells",
      author: "Mossoba ME, Flynn TJ, Vohra S, Wiesenfeld P, Sprando RL",
      journal: "Journal of Toxicology",
      publicationDate: "2016-09-15",
      doi: "10.1155/2016/9794570",
      pmid: "27703475",
      url: "https://pubmed.ncbi.nlm.nih.gov/27703475/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    garcia: {
      title: "Mexican calea (Calea zacatechichi Schltdl.) interferes with cholinergic and dopaminergic pathways and causes neuroglial toxicity",
      author: "Garcia MR, Ferreres F, Mineiro T, Videira RA, Gil-Izquierdo Á, Andrade PB, Seabra V, Dias-da-Silva D",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2025-01-10",
      doi: "10.1016/j.jep.2024.118915",
      pmid: "39389391",
      url: "https://pubmed.ncbi.nlm.nih.gov/39389391/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Dream Herb", type: "COMMON_NAME" },
    { name: "Mexican Calea", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The Chontal people of Mexico have used calea to receive messages through their dreams.",
      source: "mayagoitia",
    },
    {
      category: "TRADITIONAL",
      summary: "In Mexican folk medicine calea is used for coughs, asthma and stomach and gut problems, and it has been used for centuries in rituals.",
      source: "salaga",
    },
    {
      category: "TRADITIONAL",
      summary: "Its ritual use was long limited to Indigenous communities in Mexico, but it has recently become popular for recreational use in Western countries.",
      source: "garcia",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In cats, calea extracts at doses similar to those people take caused drowsiness and light sleep. Large doses caused drooling, unsteadiness, retching and sometimes vomiting.",
      source: "mayagoitia",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice and rats, a calea extract reduced signs of anxiety and depression, and a high dose made rats mildly drowsy and changed their brain activity during dreaming sleep.\n\nTechnical detail: anxiolytic- and antidepressant-like effects at 0.5–50 mg/kg; mild sedation and more slow-wave sleep at 100 mg/kg; increased hippocampal gamma activity during REM sleep.",
      source: "martinezMota",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, a water-based calea extract eased belly pain but had no effect on seizures, anxiety, activity or muscle strength.",
      source: "salaga",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In one small study, healthy volunteers took low doses of calea extract or a dummy pill without knowing which. Calea slowed their reaction times. During a nap, it increased light sleep and the number of times they woke up.\nThey also reported more dream-like images than with the dummy pill or with diazepam (a sleep and anxiety medicine).",
      source: "mayagoitia",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "In lab tests on human kidney cells, calea extract caused cell damage even at low doses. The researchers said its safety needs closer study, especially since it's marketed for diabetes, which can itself harm the kidneys.",
      source: "mossoba",
    },
    {
      category: "TOXICITY",
      description:
        "In lab tests, calea extract harmed nerve and brain immune cells. Very little is known about its safety in people.\n\nTechnical detail: cytotoxicity in SH-SY5Y neuronal and BV-2 microglial cells; effects on cholinergic and dopaminergic pathways.",
      source: "garcia",
    },
  ],
});
