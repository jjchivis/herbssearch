import { run } from "./lib/populate-herb";

// Cinquefoil (Potentilla reptans, creeping cinquefoil), from a 2012 study of plants
// in 10th-century Anglo-Saxon wound remedies (Watkins et al.), a 2014 survey of
// folk heart remedies in Navarra, Spain (Calvo and Cavero), a 2015 mouse
// inflammation study (Tomovic et al.) and a 2018 rat heart study (Enayati et al.).
// Family per GBIF.

run({
  name: "Cinquefoil",
  profile: { family: "Rosaceae", genus: "Potentilla", species: "reptans", nativeRange: "Europe, North Africa and western Asia", partsUsed: "The root (rhizome) and aerial parts" },
  sources: {
    watkins: {
      title: "Antimicrobial assays of three native British plants used in Anglo-Saxon medicine for wound healing formulations in 10th century England",
      author: "Watkins F, Pendry B, Sanchez-Medina A, Corcoran O",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2012-11-21",
      doi: "10.1016/j.jep.2012.09.031",
      pmid: "23026307",
      url: "https://doi.org/10.1016/j.jep.2012.09.031",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    calvo: {
      title: "Medicinal plants used for cardiovascular diseases in Navarra and their validation from official sources",
      author: "Calvo MI, Cavero RY",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2014-11-18",
      doi: "10.1016/j.jep.2014.09.047",
      pmid: "25304200",
      url: "https://doi.org/10.1016/j.jep.2014.09.047",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    tomovic: {
      title: "Antioxidant and anti-inflammatory activity of Potentilla reptans L.",
      author: "Tomovic MT, Cupara SM, Popovic-Milenkovic MT, et al.",
      journal: "Acta Poloniae Pharmaceutica",
      publicationDate: "2015-01-01",
      pmid: "25850209",
      url: "https://pubmed.ncbi.nlm.nih.gov/25850209/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    enayati: {
      title: "Cardioprotective and anti-apoptotic effects of Potentilla reptans L. root via Nrf2 pathway in an isolated rat heart ischemia/reperfusion model",
      author: "Enayati A, Yassa N, Mazaheri Z, et al.",
      journal: "Life Sciences",
      publicationDate: "2018-12-15",
      doi: "10.1016/j.lfs.2018.11.021",
      pmid: "30419282",
      url: "https://doi.org/10.1016/j.lfs.2018.11.021",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Creeping Cinquefoil", type: "COMMON_NAME" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A creeping, strawberry-like plant with five-fingered leaves. It's one of the herbs in 10th-century Anglo-Saxon remedies for healing wounds.",
      source: "watkins",
    },
    {
      category: "TRADITIONAL",
      summary: "In Navarra, Spain, it's a folk remedy for heart and circulation problems.",
      source: "calvo",
    },
    {
      category: "PRECLINICAL",
      summary: "A root extract stopped Staphylococcus aureus and other wound bacteria from growing in lab tests.",
      source: "watkins",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, a root extract reduced skin swelling about 90% as well as the steroid dexamethasone.",
      source: "tomovic",
    },
    {
      category: "PRECLINICAL",
      summary: "In isolated rat hearts, a root extract reduced damage and irregular heartbeats after blood flow was cut off and restored.",
      source: "enayati",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found.",
      source: "tomovic",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "Used in Anglo-Saxon wound remedies; root extracts fought wound bacteria in lab tests. Not tested in people." },
  ],
});
