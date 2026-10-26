import { run } from "./lib/populate-herb";

// Heart Flower, better known as bleeding heart (Lamprocapnos spectabilis,
// formerly Dicentra spectabilis). Only lab research and a zebrafish study were
// found (McNulty et al. 2007; Misiurek et al. 2023), plus a 2015 report of
// poisoning after eating the plant (Jeong et al.; title only, no abstract).
// No source for traditional medicinal use was found, so none is given.
// Family per GBIF.

run({
  name: "Heart Flower",
  profile: {
    family: "Papaveraceae",
    genus: "Lamprocapnos",
    species: "spectabilis",
    nativeRange: "Northern China, Korea and Siberia; grown in gardens in North America, Europe and Asia",
    partsUsed: "The root and the above-ground plant have been studied in the lab",
  },
  sources: {
    mcnulty: {
      title: "Discovery of the apoptosis-inducing activity and high accumulation of the butenolides, menisdaurilide and aquilegiolide in Dicentra spectabilis",
      author: "McNulty J, Poloczek J, Larichev V, Werstiuk NH, Griffin C, Pandey S",
      journal: "Planta Medica",
      publicationDate: "2007-12-01",
      doi: "10.1055/s-2007-990264",
      pmid: "17999351",
      url: "https://pubmed.ncbi.nlm.nih.gov/17999351/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    misiurek: {
      title: "Determination of Some Isoquinoline Alkaloids in Extracts Obtained from Selected Plants of the Ranunculaceae, Papaveraceae and Fumarioideae Families by Liquid Chromatography and In Vitro and In Vivo Investigations of Their Cytotoxic Activity",
      author: "Misiurek J, Plech T, Kaproń B, et al.",
      journal: "Molecules",
      publicationDate: "2023-04-16",
      doi: "10.3390/molecules28083503",
      pmid: "37110737",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10143472/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    jeong: {
      title: "Anticholinergic syndrome following ingestion of Lamprocapnos spectabilis (Bleeding Heart)",
      author: "Jeong TO, Lee JB, Jin YH, Yoon JC",
      journal: "Clinical Toxicology",
      publicationDate: "2015-07-16",
      doi: "10.3109/15563650.2015.1066506",
      pmid: "26177699",
      url: "https://pubmed.ncbi.nlm.nih.gov/26177699/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Bleeding Heart", type: "COMMON_NAME" },
    { name: "Dicentra spectabilis", type: "SCIENTIFIC_SYNONYM" },
  ],
  constituents: [
    { name: "Protopine", slug: "protopine", type: "isoquinoline alkaloid" },
    { name: "Menisdaurilide", slug: "menisdaurilide", type: "butenolide" },
  ],
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "Bleeding heart contains two compounds, menisdaurilide and aquilegiolide, in large amounts. In lab tests, both made human tumor cells self-destruct.\n\nTechnical detail: butenolides; apoptosis induced at 10 µM.",
      source: "mcnulty",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, extracts of the root and the above-ground plant killed melanoma (skin cancer) cells. The above-ground extract also reduced the number of human melanoma cells growing in zebrafish larvae. The authors say this is a basis for further research.\n\nTechnical detail: isoquinoline alkaloids measured by HPLC-DAD and LC-MS/MS; A375, G-361 and SK-MEL-3 cell lines; zebrafish xenograft model.",
      source: "misiurek",
    },
  ],
  safety: [
    {
      category: "TOXICITY",
      description:
        "Don't eat bleeding heart. Doctors in Korea reported a case of anticholinergic poisoning after someone ate the plant. That kind of poisoning can cause confusion, a fast heartbeat, dry mouth and widened pupils.",
      source: "jeong",
    },
  ],
});
