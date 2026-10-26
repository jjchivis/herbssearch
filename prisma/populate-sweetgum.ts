import { run } from "./lib/populate-herb";

// Sweetgum (Liquidambar styraciflua), from a 2015 review of sweetgum trees
// (Lingbeck et al.; only findings it attributes to this species are used,
// not those for Asian L. orientalis or L. formosana) and a 2019 lab study
// (Mancarz et al.). No human studies or safety sources were found. Family per GBIF.

run({
  name: "Sweetgum",
  profile: {
    family: "Altingiaceae",
    genus: "Liquidambar",
    species: "styraciflua",
    nativeRange: "The southeastern United States, Mexico and Central America",
    partsUsed: "The resin (storax) from damaged bark, and the leaves, bark and seeds",
  },
  sources: {
    lingbeck: {
      title: "Sweetgum: An ancient source of beneficial compounds with modern benefits",
      author: "Lingbeck JM, O'Bryan CA, Martin EM, Adams JP, Crandall PG",
      journal: "Pharmacognosy Reviews",
      publicationDate: "2015-01-01",
      doi: "10.4103/0973-7847.156307",
      pmid: "26009686",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4441155/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    mancarz: {
      title: "Liquidambar styraciflua L.: A new potential source for therapeutic uses",
      author: "Mancarz GFF, Laba LC, da Silva ECP, et al.",
      journal: "Journal of Pharmaceutical and Biomedical Analysis",
      publicationDate: "2019-06-06",
      doi: "10.1016/j.jpba.2019.06.003",
      pmid: "31220700",
      url: "https://pubmed.ncbi.nlm.nih.gov/31220700/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "American Sweetgum", type: "COMMON_NAME" },
    { name: "American Storax", type: "COMMON_NAME" },
    { name: "Alligator Tree", type: "COMMON_NAME" },
  ],
  constituents: [
    { name: "Shikimic Acid", slug: "shikimic-acid", type: "organic acid" },
    { name: "Benzyl Benzoate", slug: "benzyl-benzoate", type: "ester" },
    { name: "Cinnamic Acid", slug: "cinnamic-acid", type: "phenylpropanoid" },
  ],
  traditions: [
    { slug: "native-american-ethnobotany", notes: "Native Americans used storax, the tree's resin, to control coughs and dysentery." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The sweet-smelling resin that oozes from damaged bark is called storax. It has been used for centuries for skin problems, coughs and ulcers. Native Americans used it to control coughs and dysentery.",
      source: "lingbeck",
    },
    {
      category: "TRADITIONAL",
      summary: "In traditional medicine, sweetgum is used for stomach problems, wounds and coughs.",
      source: "mancarz",
    },
    {
      category: "PRECLINICAL",
      summary:
        "The leaves, bark and young seeds contain shikimic acid, the starting material for the flu medicine Tamiflu (oseltamivir). Infertile seeds hold the most.\n\nTechnical detail: average seed yield 3.23% w/w; infertile seeds 6.5% w/w, fertile seeds 0.14% w/w.",
      source: "lingbeck",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, a compound from the resin (benzyl benzoate) reduced the rise in blood pressure caused by a blood-pressure-raising hormone. In mice, compounds from the seed pods delayed skin tumors. In lab tests, the leaf and stem oils showed mild antioxidant activity and may help reduce inflammation.\n\nTechnical detail: angiotensin II-induced rise of 20–40 mmHg with pretreatment vs 100 mmHg without; 5-LOX IC50 about 24 µg/mL.",
      source: "lingbeck",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests, the leaves and stems were rich in flavonoids and tannins, and stem extracts may help reduce inflammation. Some extracts made the antibiotic tetracycline work better against Enterococcus faecalis and Staphylococcus aureus bacteria.\n\nTechnical detail: hyaluronidase inhibition assay; checkerboard synergy assay.",
      source: "mancarz",
    },
  ],
});
