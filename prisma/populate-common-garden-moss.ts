import { run } from "./lib/populate-herb";

// Common garden moss (Brachythecium rutabulum, rough-stalked feather-moss), from a
// 2021 review of medicinal mosses in European works from 1616 to 1889 (Drobnik &
// Stebel) and a 2018 paper identifying it as the 17th-century "ground and garden
// moss" (Drobnik & Stebel, Human Ecology). No safety sources exist, so none are listed.

run({
  name: "Common Garden Moss",
  profile: {
    family: "Brachytheciaceae",
    genus: "Brachythecium",
    species: "rutabulum",
    nativeRange: "Common across Europe, on soil, tree trunks, logs, stones and walls, and often in lawns and gardens",
    partsUsed: "The whole moss",
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
    drobnik2018: {
      title: "Brachythecium rutabulum, A Neglected Medicinal Moss",
      author: "Drobnik J, Stebel A",
      journal: "Human Ecology",
      publicationDate: "2017-12-06",
      doi: "10.1007/s10745-017-9961-y",
      pmid: "29576675",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5849649/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Brachythecium rutabulum", type: "COMMON_NAME" },
    { name: "Rough-stalked Feather-moss", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Probably recommended for dressing wounds and stopping bleeding in the 17th and 18th centuries." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "This common moss of lawns and gardens was probably recommended for dressing wounds and stopping bleeding, at least between 1651 and 1731.\n\nTechnical detail: recorded as \"muscus terrestris et hortensis\".",
      source: "drobnik",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Two old European plant books, from 1651 and 1731, describe a \"ground and garden moss\" that healers used to stop bleeding. They said people learned this from bears, which pressed it on their wounds. A 2018 study matched the description to this moss: the most common moss of all, creeping on damp ground and invading gardens and wet meadows. This would mean moss wound dressings were in use more than 230 years before sphagnum dressings were developed in Germany in 1882. In the Himalayas, ash of this and other burnt mosses is mixed with fat and honey as an ointment for cuts, burns and wounds.\n\nTechnical detail: described by Johann Bauhin (Historia Plantarum Universalis, 1651) and Boecler (Cynosura Materiae Medicae, 1731). The identification is well supported but not proven, as no herbarium specimens survive.",
      source: "drobnik2018",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In a lab test, 1 g of the dried moss soaked up about 16 g of water, more than two related mosses and about three-quarters as much as sphagnum. The researchers think this absorbency explains its old use to stop bleeding. Lab studies they cite found its extracts killed some bacteria and fungi, killed human cancer cells and acted as an antioxidant. None of this has been tested in people, and the researchers say more studies are needed.\n\nTechnical detail: absorption 16.1 g water per g dry moss versus Rhytidiadelphus triquetrus 10.8 g and Homalothecium sericeum 11.7 g; extracts active against Bacillus subtilis, Escherichia coli, Staphylococcus aureus, Aspergillus flavus, Candida albicans and Trichophyton rubrum (Singh et al. 2007).",
      source: "drobnik2018",
    },
  ],
  symptoms: [
    { slug: "wounds-and-burns", notes: "Historically used as a wound dressing to stop bleeding; very absorbent in lab tests but not tested in people." },
  ],
});
