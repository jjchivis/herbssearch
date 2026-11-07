import { run } from "./lib/populate-herb";

// Tanacetum microphyllum (GBIF lists it as a synonym of
// Vogtia microphylla). Sources: lab and mouse studies by Abad, Silván and
// Guerra (1994–2006), the 1994 paper also describing its folk use. Family per
// GBIF. No source covering human safety was found, so none is stated.

run({
  name: "Tanacetum Microphyllum",
  profile: {
    family: "Asteraceae",
    genus: "Tanacetum",
    species: "microphyllum",
    partsUsed: "The above-ground parts",
  },
  sources: {
    abad1994: {
      title: "Anti-inflammatory activity of hydroxyachillin, a sesquiterpene lactone from Tanacetum microphyllum",
      author: "Abad MJ, Bermejo P, Valverde S, Villar A",
      journal: "Planta Medica",
      publicationDate: "1994-06-01",
      doi: "10.1055/s-2006-959464",
      pmid: "8073088",
      url: "https://doi.org/10.1055/s-2006-959464",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    abad2004: {
      title:
        "Flavonoids and a sesquiterpene lactone from Tanacetum microphyllum inhibit anti-inflammatory mediators in LPS-stimulated mouse peritoneal macrophages",
      author: "Abad MJ, Bermejo P, Alvarez M, Guerra JA, Silván AM, Villar AM",
      journal: "Planta Medica",
      publicationDate: "2004-01-01",
      doi: "10.1055/s-2004-815452",
      pmid: "14765290",
      url: "https://doi.org/10.1055/s-2004-815452",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    guerra2006: {
      title: "Inhibition of inducible nitric oxide synthase and cyclooxygenase-2 expression by flavonoids isolated from Tanacetum microphyllum",
      author: "Guerra JA, Molina M, Abad MJ, Villar AM, Paulina B",
      journal: "International Immunopharmacology",
      publicationDate: "2006-08-10",
      doi: "10.1016/j.intimp.2006.07.012",
      pmid: "16979127",
      url: "https://doi.org/10.1016/j.intimp.2006.07.012",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [{ name: "Vogtia microphylla", type: "SCIENTIFIC_SYNONYM" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "The above-ground parts of this plant have been used in folk medicine for inflammation and ulcers.",
      source: "abad1994",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In mice, hydroxyachillin, a compound from the plant, reduced paw swelling caused by an irritant. In lab tests it blocked two enzymes involved in inflammation.\n\nTechnical detail: carrageenan-induced paw edema; dual cyclooxygenase and lipoxygenase inhibitor.",
      source: "abad1994",
    },
    {
      category: "PRECLINICAL",
      summary:
        "In lab studies on immune cells, flavonoids and hydroxyachillin from the plant lowered several signals the body uses to drive inflammation. None of this has been tested in people.\n\nTechnical detail: santin, ermanin, centaureidin and hydroxyachillin inhibited LPS-induced NO, PGE2 and (for some) TNF-α, and suppressed iNOS and COX-2 expression.",
      source: "abad2004",
    },
    {
      category: "PRECLINICAL",
      summary:
        "A 2006 lab study found the plant's flavonoids switched off two inflammation enzymes in immune cells.\n\nTechnical detail: suppressed LPS-induced iNOS and COX-2 expression in RAW 264.7 cells; ermanin most potent.",
      source: "guerra2006",
    },
  ],
});
