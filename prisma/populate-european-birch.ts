import { run } from "./lib/populate-herb";

// European Birch (Betula pendula, silver birch; with downy birch, Betula
// pubescens), from the EMA birch leaf summary, a 2022 review of birch leaf and
// bark (Dragićević et al.), a 2014 review of the birch genus (Rastogi et al.), a
// 2011 lab study of birch bark (Soica et al.) and a 2026 trial of a birch bark
// gel (Sprecher et al.). Family per GBIF.

run({
  name: "European Birch",
  profile: {
    family: "Betulaceae",
    genus: "Betula",
    species: "pendula",
    nativeRange: "Europe and northern Asia",
    partsUsed: "The leaves and bark",
  },
  sources: {
    ema: {
      title: "Birch leaf (Betulae folium): summary for the public (EMA/482160/2015)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2015-10-20",
      url: "https://www.ema.europa.eu/en/medicines/herbal/betulae-folium",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    rastogi: {
      title: "Medicinal plants of the genus Betula--traditional uses and a phytochemical-pharmacological review",
      author: "Rastogi S, Pandey MM, Kumar Singh Rawat A",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2014-11-18",
      doi: "10.1016/j.jep.2014.11.010",
      pmid: "25449458",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7126499/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    dragicevic: {
      title: "Biological activity of the birch leaf and bark",
      author: "Dragićević A, Kitić D, Pavlović D",
      journal: "Natural Medicinal Materials (Lekovite sirovine)",
      publicationDate: "2022-12-25",
      doi: "10.5937/leksir2242089D",
      url: "https://doi.org/10.5937/leksir2242089D",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    soica: {
      title: "Physico-chemical comparison of betulinic acid, betulin and birch bark extract and in vitro investigation of their cytotoxic effects towards skin epidermoid carcinoma (A431), breast carcinoma (MCF7) and cervix adenocarcinoma (HeLa) cell lines",
      author: "Soica CM, Dehelean CA, Peev C, Aluas M, Zupkó I, Kása P, Alexa E",
      journal: "Natural Product Research",
      publicationDate: "2011-05-27",
      doi: "10.1080/14786419.2010.545352",
      pmid: "21598174",
      url: "https://doi.org/10.1080/14786419.2010.545352",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    sprecher: {
      title: "Long-Term Efficacy and Safety of Oleogel-S10 (Birch Triterpenes) for Pediatric Patients With Epidermolysis Bullosa",
      author: "Sprecher E, Torres-Pradilla M, Fernandez MF, et al.",
      journal: "Pediatric Dermatology",
      publicationDate: "2026-05-28",
      doi: "10.1111/pde.70224",
      pmid: "42205007",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13617162/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Silver Birch", type: "COMMON_NAME" },
    { name: "Downy Birch", type: "COMMON_NAME" },
    { name: "Betula pubescens", type: "SCIENTIFIC_SYNONYM" },
  ],
  constituents: [
    { name: "Betulin", slug: "betulin", type: "triterpene" },
    { name: "Betulinic Acid", slug: "betulinic-acid", type: "triterpene" },
    { name: "Hyperoside", slug: "hyperoside", type: "flavonoid" },
  ],
  traditions: [{ slug: "european-folk-medicine", notes: "Leaves used since Greek and Roman times; recognized by the EMA for urine flow." }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Birch leaf (from silver birch, downy birch or their hybrids) is recognized in Europe as a traditional herbal medicine to increase urine flow and help flush the urinary tract in minor urinary problems, for adults and children over 12, for 2 to 4 weeks. It is an official drug in the European Pharmacopoeia.",
      source: "ema",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Birch leaf has been used since ancient Greek and Roman times, for gout, arthritis, rheumatism and other pain. In Serbian folk medicine, birch leaves, bark and seeds are used for skin conditions, chesty coughs, colds and kidney pain.",
      source: "dragicevic",
    },
    {
      category: "TRADITIONAL",
      summary: "Several birch species are traditionally used for inflammatory diseases, including arthritis.",
      source: "rastogi",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Birch bark is rich in betulin and betulinic acid. In lab tests, a birch bark extract and both compounds slowed the growth of skin, breast and cervical cancer cells.",
      source: "soica",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "In a trial of 57 people with minor burns, more healed faster with a gel containing birch bark extract than with a standard wound gel.",
      source: "dragicevic",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A gel made from birch bark compounds (Oleogel-S10) helps wounds heal in people with epidermolysis bullosa, a rare blistering skin disease. In a trial of 156 children, 45% had a wound fully close within 45 days, compared with 26% using a plain gel.",
      source: "sprecher",
    },
  ],
  safety: [
    {
      category: "PREGNANCY",
      description:
        "Because there isn't enough safety information, birch leaf isn't recommended during pregnancy, while breastfeeding, or for children under 12.",
      source: "dragicevic",
    },
  ],
});
