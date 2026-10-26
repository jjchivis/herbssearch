import { run } from "./lib/populate-herb";

// Maytenus aquifolium (now Monteverdia aquifolia), one of the plants sold as
// "espinheira-santa" in Brazil, from a 2000 rat ulcer study (Bersani-Amado et
// al.) and a 2003 antioxidant study (Corsino et al.). Safety notes come from
// studies of the closely related espinheira-santa Maytenus ilicifolia
// (Danilevicz et al. 2024; do Nascimento et al. 2025) and are labeled so.
// Family per GBIF.

run({
  name: "Maytenus Aquifolium",
  profile: {
    family: "Celastraceae",
    genus: "Maytenus",
    species: "aquifolium",
    nativeRange: "Southern and southeastern Brazil",
    partsUsed: "The leaves",
  },
  sources: {
    bersani: {
      title: "Antiulcer effectiveness of Maytenus aquifolium spray dried extract",
      author: "Bersani-Amado CA, Massao LB, Baggio SR, Johanson L, Albiero AL, Kimura E",
      journal: "Phytotherapy Research",
      publicationDate: "2000-11-01",
      doi: "10.1002/1099-1573(200011)14:7<543::aid-ptr647>3.0.co;2-x",
      pmid: "11054847",
      url: "https://pubmed.ncbi.nlm.nih.gov/11054847/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    corsino: {
      title: "Antioxidant flavan-3-ols and flavonol glycosides from Maytenus aquifolium",
      author: "Corsino J, Silva DH, Zanoni MV, et al.",
      journal: "Phytotherapy Research",
      publicationDate: "2003-09-01",
      doi: "10.1002/ptr.1249",
      pmid: "13680823",
      url: "https://pubmed.ncbi.nlm.nih.gov/13680823/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    danilevicz: {
      title: "Pharmacological evaluation of a traditional Brazilian medicinal plant, Monteverdia ilicifolia. Part I - Preclinical safety study",
      author: "Danilevicz CK, Pizzolato LS, Bianchi SE, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2024-01-24",
      doi: "10.1016/j.jep.2024.117806",
      pmid: "38278373",
      url: "https://pubmed.ncbi.nlm.nih.gov/38278373/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nascimento: {
      title: "Evaluation of the Pharmacokinetic Interactions of Maytenus ilicifolia Mart. ex Reiss Extracts on Drug Intestinal Permeability and Hepatic Metabolism",
      author: "do Nascimento SB, Dos Santos PHG, Costa GHO, et al.",
      journal: "ACS Omega",
      publicationDate: "2025-09-25",
      doi: "10.1021/acsomega.5c07564",
      pmid: "41078739",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12508949/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Espinheira-Santa", type: "REGIONAL_NAME", region: "Brazil" },
    { name: "Monteverdia aquifolia", type: "SCIENTIFIC_SYNONYM" },
  ],
  constituents: [
    { name: "Epigallocatechin", slug: "epigallocatechin", type: "flavan-3-ol" },
    { name: "Proanthocyanidins", slug: "proanthocyanidins", type: "polyphenol" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Brazil, espinheira-santa species are widely used for stomach and gut problems. The related Maytenus ilicifolia is listed in the Brazilian Pharmacopeia.",
      source: "danilevicz",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats, a dried leaf extract protected against stomach ulcers caused by alcohol, the painkiller indomethacin and stress.",
      source: "bersani",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The leaves and root bark contain antioxidant flavonoids, including epigallocatechin (also found in green tea) and proanthocyanidins.",
      source: "corsino",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "In lab tests on rat liver tissue, an extract of the closely related espinheira-santa (Maytenus ilicifolia) showed signs of liver damage. The authors advise avoiding espinheira-santa if you have liver disease.",
      source: "danilevicz",
    },
    {
      category: "DRUG_INTERACTION",
      description:
        "In lab tests, extracts of the related espinheira-santa (Maytenus ilicifolia) blocked the CYP3A4 enzyme and the P-gp pump that handle many medicines. This could change levels of drugs such as midazolam, nifedipine and fexofenadine.",
      source: "nascimento",
    },
  ],
});
