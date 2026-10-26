import { run } from "./lib/populate-herb";

// Angico (Anadenanthera colubrina), from a 2026 review of var. cebil
// (González et al.), a 2024 rat study of the bark (Pimentel et al.), a 2026
// lab study of the bark (Samame-Caramutti et al.) and a 2024 study of Andean
// uses of the seeds (Lema). Family per GBIF.

run({
  name: "Angico",
  profile: {
    family: "Fabaceae",
    genus: "Anadenanthera",
    species: "colubrina",
    nativeRange: "Dry forests and savannas of Brazil, Argentina, Paraguay and Bolivia, and the Andes of Peru",
    partsUsed: "The bark, leaves, gum and seeds",
  },
  sources: {
    gonzalez: {
      title: "Beyond a Psychotropic Plant: Exploring the Ethnomedicinal Value of Anadenanthera colubrina var. cebil",
      author: "González RB, Ojeda GA, Miragliotta AMG, et al.",
      journal: "Mini Reviews in Medicinal Chemistry",
      publicationDate: "2026-03-30",
      doi: "10.2174/0113895575418590260116110240",
      pmid: "41936090",
      url: "https://pubmed.ncbi.nlm.nih.gov/41936090/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    pimentel: {
      title: "Anti-inflammatory effect of Anadenanthera colubrina var. cebil (Griseb.) Altschul in experimental elastase-induced pulmonary emphysema in rats",
      author: "Pimentel VD, Acha BT, Gomes GF, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2024-04-19",
      doi: "10.1016/j.jep.2024.118216",
      pmid: "38642622",
      url: "https://pubmed.ncbi.nlm.nih.gov/38642622/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    samame: {
      title: "In vitro antioxidant and anti-inflammatory activities and total polyphenol and flavonoid contents of Anadenanthera colubrina from northern Peru",
      author: "Samame-Caramutti EA, Salcedo-Valdez L, Suárez-Cunza S",
      journal: "Revista Peruana de Medicina Experimental y Salud Pública",
      publicationDate: "2026-03-27",
      doi: "10.17843/rpmesp.2026.431.15207",
      pmid: "42424283",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13245994/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    lema: {
      title: "Contemporary Uses of Vilca (Anadenanthera colubrina var cebil): A Major Ritual Plant in the Andes",
      author: "Lema VS",
      journal: "Plants",
      publicationDate: "2024-08-27",
      doi: "10.3390/plants13172398",
      pmid: "39273881",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11397254/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Cebil", type: "REGIONAL_NAME", region: "Argentina" },
    { name: "Vilca", type: "REGIONAL_NAME", region: "Andes" },
    { name: "Red Angico", type: "COMMON_NAME" },
  ],
  constituents: [
    { name: "Bufotenine", slug: "bufotenine", type: "tryptamine alkaloid" },
    { name: "N,N-Dimethyltryptamine (DMT)", slug: "dmt", type: "tryptamine alkaloid" },
    { name: "Quercetin", slug: "quercetin", type: "flavonoid" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Guaraní, Tupí and Wichí communities have long used angico in healing and ritual. It's used for breathing problems, inflammation and infections. In the Caatinga of northeastern Brazil, it's widely used for lung diseases.",
      source: "gonzalez",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The seeds, called vilca or cebil, were used as a ritual snuff by pre-Hispanic peoples of the southern Andes. Market research in Argentina, Bolivia and Peru found the seeds are still sold and used to restore health.",
      source: "lema",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In rats with damaged lungs (emphysema), a bark extract reduced lung inflammation and damage. It didn't damage the rats' genes or blood cells.\n\nTechnical detail: hydroethanolic stem-bark extract; elastase-induced emphysema; reduced TNF-α, IL-1β, IL-6, myeloperoxidase and malondialdehyde; micronucleus test negative.",
      source: "pimentel",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, a bark extract from northern Peru was rich in polyphenols, showed strong antioxidant activity and may help reduce inflammation.\n\nTechnical detail: DPPH 747.6 mg Trolox equivalents/g; FRAP 435.9 mg FeSO4 equivalents/g; inhibited heat-induced ovalbumin denaturation.",
      source: "samame",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In animal studies, bark and leaf extracts may help reduce inflammation and pain, killed some microbes, eased diarrhea and helped wounds heal. The gum also helped wounds heal and appears to be low in toxicity.",
      source: "gonzalez",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "The seeds contain strong hallucinogens (bufotenine, DMT and 5-MeO-DMT) that can harm the heart and nerves.",
      source: "gonzalez",
    },
  ],
});
