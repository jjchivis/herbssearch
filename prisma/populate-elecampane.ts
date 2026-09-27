import { run } from "./lib/populate-herb";

// Elecampane (Inula helenium), from verified sources: a study of its traditional
// use in Ireland and its regulatory history (Kenny et al. 2022) and a lab study
// on respiratory cells (Gierlikowska et al. 2020). Family per GBIF / Catalogue of
// Life. No clinical studies were found.

run({
  name: "Elecampane",
  profile: {
    family: "Asteraceae",
    genus: "Inula",
    species: "helenium",
    partsUsed: "The root",
  },
  sources: {
    kenny: {
      title: "From Monographs to Chromatograms: The Antimicrobial Potential of Inula helenium L. (Elecampane) Naturalised in Ireland",
      author: "Kenny CR, Stojakowska A, Furey A, Lucey B",
      journal: "Molecules",
      organization: "Molecules",
      publicationDate: "2022-02-18",
      doi: "10.3390/molecules27041406",
      pmid: "35209195",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8874828/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gierlikowska: {
      title: "Inula helenium and Grindelia squarrosa as a source of compounds with anti-inflammatory activity in human neutrophils and cultured human respiratory epithelium",
      author: "Gierlikowska B, Gierlikowski W, Bekier K, Skalicka-Woźniak K, Czerwińska ME, Kiss AK",
      journal: "Journal of Ethnopharmacology",
      organization: "Journal of Ethnopharmacology",
      publicationDate: "2019-10-20",
      doi: "10.1016/j.jep.2019.112311",
      pmid: "31644941",
      url: "https://pubmed.ncbi.nlm.nih.gov/31644941/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Elecampane Root", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "european-folk-medicine", notes: "Used in Irish and wider European medicine for coughs, lung problems and skin ailments." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Irish folk medicine, elecampane is often used for breathing and skin problems. A medieval Irish medical text (around 1415) describes it for the lungs, coughs and tuberculosis, boiled with barley water, licorice, cinnamon and sugar.",
      source: "kenny",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The British Herbal Pharmacopoeia lists elecampane root for chest and throat mucus, cough, bronchitis, and whooping cough in children. It is traditionally taken as a decoction (the root boiled in water).",
      source: "kenny",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab tests on human immune cells and airway cells, elecampane root compounds reduced signals that drive inflammation in the airways. Other lab tests found root compounds (such as alantolactone) slowed the growth of Staphylococcus bacteria.",
      source: "gierlikowska",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In the 1980s, Germany's Commission E rejected elecampane root as a medicine because there wasn't enough evidence it works and because of the risk of side effects. It has since been left out of major official herbal references.",
      source: "kenny",
    },
  ],
  safety: [
    {
      category: "ALLERGY",
      description:
        "Elecampane contains compounds (sesquiterpene lactones) linked to skin allergies in daisy-family plants, and is suspected of causing them, though there's no data on how often this happens.",
      source: "kenny",
    },
  ],
  symptoms: [
    { slug: "cough", notes: "Traditionally used for coughs; Germany's Commission E rejected it for lack of evidence and possible side effects." },
    { slug: "chest-congestion", notes: "Listed in the British Herbal Pharmacopoeia for chest mucus and bronchitis. It hasn't been tested in people." },
  ],
});
