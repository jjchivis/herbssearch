import { run } from "./lib/populate-herb";

// Merremia angustifolia (Xenostegia tridentata), from a 2022 study of Queensland
// Aboriginal medicinal plants (Turpin et al.), a 2022 mouse study of its
// anti-allergy effects (Suntivich et al.) and a 2024 lung cancer cell study
// (Chatwichien et al.). Family per GBIF.

run({
  name: "Merremia Angustifolia",
  profile: { family: "Convolvulaceae", genus: "Xenostegia", species: "tridentata", nativeRange: "Tropical Africa, Asia and Australia", partsUsed: "The whole plant" },
  sources: {
    turpin: {
      title: "Aboriginal medicinal plants of Queensland: ethnopharmacological uses, species diversity, and biodiscovery pathways",
      author: "Turpin G, Ritmejerytė E, Jamie J, et al.",
      journal: "Journal of Ethnobiology and Ethnomedicine",
      publicationDate: "2022-08-10",
      doi: "10.1186/s13002-022-00552-6",
      pmid: "35948982",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9364609/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    suntivich: {
      title: "LC-MS/MS metabolomics-facilitated identification of the active compounds responsible for anti-allergic activity of the ethanol extract of Xenostegia tridentata",
      author: "Suntivich R, Songjang W, Jiraviriyakul A, Ruchirawat S, Chatwichien J",
      journal: "PLoS One",
      publicationDate: "2022-04-15",
      doi: "10.1371/journal.pone.0265505",
      pmid: "35427369",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9012362/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    chatwichien: {
      title: "Lutein derived from Xenostegia tridentata exhibits anticancer activities against A549 lung cancer cells via hyaluronidase inhibition",
      author: "Chatwichien J, Semakul N, Yimklan S, et al.",
      journal: "PLoS One",
      publicationDate: "2024-12-16",
      doi: "10.1371/journal.pone.0315570",
      pmid: "39680591",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11649105/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Xenostegia tridentata", type: "SCIENTIFIC_SYNONYM" },
    { name: "Merremia angustifolia", type: "SCIENTIFIC_SYNONYM" },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Aboriginal people in Queensland use the whole plant, a climbing vine, on sores, skin lesions, wounds and cuts.",
      source: "turpin",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice and lab cells, an extract reduced allergic reactions about as well as standard anti-allergy drugs; its flavonoids and caffeoylquinic acids were responsible.",
      source: "suntivich",
    },
    {
      category: "PRECLINICAL",
      summary: "Lutein from the plant killed lung cancer cells and slowed their spread in lab tests.",
      source: "chatwichien",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found.",
      source: "turpin",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "A Queensland Aboriginal remedy for sores, wounds and cuts. Not studied in people." },
  ],
});
