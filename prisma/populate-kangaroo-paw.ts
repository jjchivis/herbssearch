import { run } from "./lib/populate-herb";

// Kangaroo Paw (Anigozanthos species), from a 2017 study of the pigments in two
// species (Hendra and Keller), two 2008 nectar studies (Hölscher et al.; Wenzler et
// al.) and a 2016 silver nanoparticle study (Shah et al.). No published medicinal or
// traditional uses were found. Family per GBIF.

run({
  name: "Kangaroo Paw",
  profile: { family: "Haemodoraceae", genus: "Anigozanthos", species: "spp.", nativeRange: "Southwest Western Australia", partsUsed: "The flowers and leaves" },
  sources: {
    hendra: {
      title: "Phytochemical Studies on Two Australian Anigozanthos Plant Species",
      author: "Hendra R, Keller PA",
      journal: "Journal of Natural Products",
      publicationDate: "2017-07-28",
      doi: "10.1021/acs.jnatprod.7b00063",
      pmid: "28682615",
      url: "https://doi.org/10.1021/acs.jnatprod.7b00063",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    holscher: {
      title: "NMR-based metabolic profiling of Anigozanthos floral nectar",
      author: "Hölscher D, Brand S, Wenzler M, Schneider B",
      journal: "Journal of Natural Products",
      publicationDate: "2008-02-01",
      doi: "10.1021/np0705514",
      pmid: "18197602",
      url: "https://doi.org/10.1021/np0705514",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    wenzler: {
      title: "Nectar formation and floral nectary anatomy of Anigozanthos flavidus: a combined magnetic resonance imaging and spectroscopy study",
      author: "Wenzler M, Hölscher D, Oerther T, Schneider B",
      journal: "Journal of Experimental Botany",
      publicationDate: "2008-07-24",
      doi: "10.1093/jxb/ern191",
      pmid: "18653689",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2529244/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    shah: {
      title: "Biogenic synthesis of silver nanoparticles via indigenous Anigozanthos manglesii, (red and green kangaroo paw) leaf extract and its potential antibacterial activity",
      author: "Shah M, Poinern GEJ, Fawcett D",
      journal: "International Journal of Research in Medical Sciences",
      publicationDate: "2016-08-01",
      doi: "10.18203/2320-6012.ijrms20162306",
      url: "https://doi.org/10.18203/2320-6012.ijrms20162306",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "Western Australian plants with fuzzy, claw-shaped flowers that look like a kangaroo's paw. The red-and-green kangaroo paw (Anigozanthos manglesii) is one well-known species. They're bird-pollinated and rich in nectar.",
      source: "shah",
    },
    {
      category: "PRECLINICAL",
      summary: "The nectar is mostly glucose and fructose, with small amounts of the amino acid tyrosine and other amino acids.",
      source: "holscher",
    },
    {
      category: "PRECLINICAL",
      summary: "The flowers contain flavonoids and red anthocyanin pigments. A few compounds had weak activity against one bacterium in lab tests.",
      source: "hendra",
    },
    {
      category: "PRECLINICAL",
      summary: "A leaf extract on its own had no effect against bacteria in lab tests; only silver particles made with it did.",
      source: "shah",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No published medicinal or traditional uses, or human safety studies, were found.",
      source: "hendra",
    },
  ],
});
