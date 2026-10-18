import { run } from "./lib/populate-herb";

// Sphagnum moss (Sphagnum spp., peat moss), from a 2021 review of medicinal mosses
// in European works from 1616 to 1889 (Drobnik & Stebel) and a 2003 paper on why
// Sphagnum wound dressings work (Painter).

run({
  name: "Sphagnum Moss",
  profile: {
    family: "Sphagnaceae",
    genus: "Sphagnum",
    species: "spp.",
    partsUsed: "The whole dried moss",
  },
  sources: {
    drobnik: {
      title: "Four Centuries of Medicinal Mosses and Liverworts in European Ethnopharmacy and Scientific Pharmacy: A Review",
      author: "Drobnik J, Stebel A",
      journal: "Plants (Basel)",
      publicationDate: "2021-06-25",
      doi: "10.3390/plants10071296",
      pmid: "34202287",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8309153/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    painter: {
      title: "Concerning the wound-healing properties of Sphagnum holocellulose: the Maillard reaction in pharmacology",
      author: "Painter TJ",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2003-10-01",
      doi: "10.1016/S0378-8741(03)00189-2",
      pmid: "12963134",
      url: "https://pubmed.ncbi.nlm.nih.gov/12963134/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Peat Moss", type: "COMMON_NAME" },
    { name: "Bog Moss", type: "COMMON_NAME" },
    { name: "Sphagnum palustre", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Used in Europe as a wound dressing, and as nappies and bedding for babies." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Old European medical books record sphagnum moss being used:\n- As nappies and bedding for babies, because it soaks up urine well\n- As a dressing for wounds\n- Boiled with beer and applied as a poultice to swollen feet in older people\nWhen interest in medicinal mosses faded in the 1880s, sphagnum stayed in use as a source of wound dressings.",
      source: "drobnik",
    },
    {
      category: "PRECLINICAL",
      summary:
        "Sphagnum dressings can soak up 3 to 4 times as much as cotton ones. Lab research suggests a sugar-like substance in the moss (sphagnan) binds to proteins, which may trap bacteria and switch off the harmful substances they release. This is a proposed explanation for its use on wounds, not proof from studies in people.\n\nTechnical detail: inactivation of enzymes by a Maillard reaction; the moss's complex pectin resembles immune-stimulating pectins from other wound-healing plants.",
      source: "painter",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "Historically used as a wound dressing; not tested in modern trials." },
  ],
});
