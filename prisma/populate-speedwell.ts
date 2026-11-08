import { run } from "./lib/populate-herb";

// Speedwell card: germander speedwell (Veronica chamaedrys). Sources: a 2007
// comparative study and a 2017 DNA study showing it is the most common
// substitute for the medicinal common speedwell (V. officinalis), a 2003
// chemistry study, and a 2019 review of the Veronica genus. Family per GBIF.
// No source covering safety was found, so none is stated.

run({
  name: "Speedwell",
  profile: {
    family: "Plantaginaceae",
    genus: "Veronica",
    species: "chamaedrys",
    partsUsed: "The above-ground parts",
  },
  sources: {
    crisan: {
      title: "A comparative study of some Veronica species",
      author: "Crişan G, Tămaş M, Miclăuş V, et al.",
      journal: "Revista Medico-Chirurgicala a Societatii de Medici si Naturalisti din Iasi",
      publicationDate: "2007-01-01",
      pmid: "17595882",
      url: "https://pubmed.ncbi.nlm.nih.gov/17595882/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    raclariu: {
      title: "Veronica officinalis Product Authentication Using DNA Metabarcoding and HPLC-MS Reveals Widespread Adulteration with Veronica chamaedrys",
      author: "Raclariu AC, Mocan A, Popa MO, et al.",
      journal: "Frontiers in Pharmacology",
      publicationDate: "2017-06-19",
      doi: "10.3389/fphar.2017.00378",
      pmid: "28674497",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5474480/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nikolova: {
      title: "External flavonoid aglycones from Veronica chamaedrys L. (Scrophulariaceae)",
      author: "Nikolova M, Gevrenova R, Ivancheva S",
      journal: "Acta Pharmaceutica",
      publicationDate: "2003-01-01",
      pmid: "14764249",
      url: "https://pubmed.ncbi.nlm.nih.gov/14764249/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    xue: {
      title: "Review of the Ethnopharmacology, Phytochemistry, and Pharmacology of the Genus Veronica",
      author: "Xue H, Chen KX, Zhang LQ, et al.",
      journal: "American Journal of Chinese Medicine",
      publicationDate: "2019-01-01",
      doi: "10.1142/S0192415X19500617",
      pmid: "31488038",
      url: "https://doi.org/10.1142/S0192415X19500617",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Germander Speedwell", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "This plant is germander speedwell. The speedwell traditionally used as medicine is a different species, common speedwell (Veronica officinalis), which has a long history of use in European folk medicine, mainly in central and eastern Europe and the Balkans.",
      source: "raclariu",
    },
    {
      category: "TRADITIONAL",
      summary: "Some plants in the speedwell family have been used in traditional medicine for flu, breathing problems, coughs, sore throat, swelling and wounds.",
      source: "xue",
    },
    {
      category: "TRADITIONAL",
      summary:
        "A 2007 study described germander speedwell as widespread but having no medicinal effect, and set out ways to tell it apart from common speedwell so it isn't sold in its place.",
      source: "crisan",
    },
    {
      category: "PRECLINICAL",
      summary: "The above-ground parts contain flavonoids, including luteolin and apigenin.",
      source: "nikolova",
    },
  ],
  safety: [
    {
      category: "CONTAMINATION",
      description:
        "Germander speedwell is the most common substitute for common speedwell in herbal products. A 2017 DNA test of 16 products labeled as common speedwell found the right species in only 15% of them, and germander speedwell in 62%. None contained exactly what the label said.",
      source: "raclariu",
    },
  ],
});
