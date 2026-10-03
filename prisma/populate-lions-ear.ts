import { run } from "./lib/populate-herb";

// Lion's Ear (Leonotis nepetifolia), from verified sources: a TRAMIL
// ethnobotanical survey of 450 households in rural Trinidad (Clement et al.
// 2015), a 2018 review of its chemistry and biological activity (Almeida et
// al., Rev Cubana Plant Med) and a 2025 zebrafish embryo toxicity study
// (Adolpho et al., Nat Prod Res). No studies in people were found.

run({
  name: "Lion's Ear",
  profile: {
    family: "Lamiaceae",
    genus: "Leonotis",
    species: "nepetifolia",
    nativeRange: "Native to tropical Africa and southern India",
    partsUsed:
      "The leaves. In Trinidad they are made into a tea, boiled, or pounded and squeezed for their juice, with salt added.",
  },
  sources: {
    clement: {
      title: "An ethnobotanical survey of medicinal plants in Trinidad",
      author: "Clement YN, Baksh-Comeau YS, Seaforth CE",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      organization: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2015-09-15",
      doi: "10.1186/s13002-015-0052-0",
      pmid: "26369926",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4570261/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    almeida: {
      title: "A review of the chemical composition and biological activity of Leonotis nepetifolia (Linn.) R. Br. (lion's ear)",
      author: "Almeida JRGS, Barbosa JM, Cavalcante NB, Delange DM",
      journal: "Revista Cubana de Plantas Medicinales",
      organization: "Revista Cubana de Plantas Medicinales",
      publicationDate: "2018-01-01",
      url: "https://revplantasmedicinales.sld.cu/index.php/pla/article/view/687",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    adolpho: {
      title: "Comprehensive analysis of Leonotis nepetifolia flower extracts: phytochemical composition and toxicity in zebrafish embryos",
      author: "Adolpho L, Portalanza D, Ames J, Casoti R, Loro VL, Morel AF, Dalcol II",
      journal: "Natural Product Research",
      organization: "Natural Product Research",
      publicationDate: "2025-01-29",
      doi: "10.1080/14786419.2025.2457123",
      pmid: "39878299",
      url: "https://doi.org/10.1080/14786419.2025.2457123",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Lion's Ears", type: "COMMON_NAME" },
    { name: "Lions Ear", type: "COMMON_NAME" },
    { name: "Shandilay", type: "REGIONAL_NAME", region: "Trinidad" },
  ],
  traditions: [
    {
      slug: "caribbean-folk-medicine",
      notes: "In rural Trinidad, where it's called shandilay, about 30% of people surveyed named it as a remedy for colds and coughs.",
    },
    {
      slug: "african-traditional-medicine",
      notes: "Widely used as a medicinal plant in its native range, which includes tropical Africa.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In a 2007–2008 survey of 450 households in rural Trinidad, about 30% of people named lion's ear (shandilay) as a remedy for colds and coughs. That was enough to count it as a popular, established use.\nPeople also used it for:\n- Fever\n- Asthma\n- Diabetes\n- As a \"cooling\" or cleansing remedy\n\nTechnical detail: 85 of 89 citations were for common cold and cough (30.5% of informants), above the TRAMIL 20% threshold for significant use. Leaves taken by mouth as an infusion, a decoction, or juice pounded out with salt.",
      source: "clement",
    },
    {
      category: "TRADITIONAL",
      summary: "Widely used for medicine in its native range of tropical Africa and southern India.",
      source: "almeida",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2018 review of 32 lab and animal studies reported that lion's ear extracts may fight bacteria, viruses and fungi, may help reduce inflammation, and act as antioxidants. They also showed effects against seizures and anxiety. The review didn't report any studies in people.\n\nTechnical detail: antibacterial, antiviral, antifungal, anti-inflammatory, antioxidant, anticonvulsant, anxiolytic and anticarcinogenic activity; main compounds are labdane and bis-spirolabdane diterpenes, flavonoids, fatty acids and esters, iridoids, phenylethanoid glycosides and coumarins.",
      source: "almeida",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a 2025 study on zebrafish embryos, extracts of lion's ear flowers were toxic and caused developmental defects. The authors say the plant's possible risks need careful study.\n\nTechnical detail: 96-hour exposure to a methanol extract and its n-hexane and ethyl acetate fractions; the methanol extract and ethyl acetate fraction were toxic, the ethyl acetate fraction markedly embryotoxic and teratogenic. Verbascoside was isolated from the flowers.",
      source: "adolpho",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Little is known about its safety, and it hasn't been studied in people. In a 2025 lab study, flower extracts harmed developing zebrafish embryos and caused birth defects.",
      source: "adolpho",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "A popular traditional remedy for coughs in Trinidad. This use hasn't been tested in people." },
    { slug: "colds-and-congestion", notes: "A popular traditional remedy for colds in Trinidad. This use hasn't been tested in people." },
    { slug: "fever", notes: "Traditionally used for fever in Trinidad. This use hasn't been tested in people." },
    { slug: "asthma-and-wheezing", notes: "Traditionally used for asthma in Trinidad. This use hasn't been tested in people." },
    { slug: "high-blood-sugar", notes: "Traditionally used for diabetes in Trinidad. This use hasn't been tested in people." },
  ],
});
