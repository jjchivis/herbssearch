import { run } from "./lib/populate-herb";

// Kangaroo Paw (Anigozanthos species), from a 2017 study of the pigments in two
// species (Hendra and Keller), two 2008 nectar studies (Hölscher et al.; Wenzler et
// al.), a 2016 silver nanoparticle study (Shah et al.), a 2022 ABC News report on
// its use in skin care and the University of Oxford Plants 400 profile (Marner),
// which records Noongar use of the roots as food. No published medicinal uses were
// found. Family per GBIF.

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
    abc: {
      title: "Kangaroo paws used to fight wrinkles as demand booms for vegan cosmetics",
      author: "Nichols J",
      organization: "ABC News (Australian Broadcasting Corporation)",
      publicationDate: "2022-10-08",
      url: "https://www.abc.net.au/news/rural/2022-10-09/flower-cosmetics-kangaroo-native-australian-anti-wrinkle/101510580",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    oxford: {
      title: "Plant 333: Anigozanthos species (Kangaroo paws)",
      author: "Marner S",
      organization: "University of Oxford, Department of Biology (Plants 400)",
      url: "https://herbaria.plants.ox.ac.uk/bol/plants400/Profiles/AB/Angiozanthos",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
  },
  synonyms: [{ name: "Nollamara", type: "REGIONAL_NAME", region: "Western Australia (Noongar)" }, { name: "Catspaw", type: "COMMON_NAME" }],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "The Noongar people of southwest Western Australia eat the starchy, tuber-like roots of the red-and-green kangaroo paw, which they call nollamara.",
      source: "oxford",
    },
    {
      category: "TRADITIONAL",
      summary:
        "All 11 species grow only in southwest Western Australia, and the red-and-green kangaroo paw is the state's floral emblem. Honeyeaters and the tiny honey possum feed on the nectar and pollinate the flowers.",
      source: "oxford",
    },
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
      summary: "The flowers contain flavonoids and red anthocyanin pigments. Tested against seven germs, including MRSA and Candida yeast, a few compounds had only weak activity against one bacterium, Acinetobacter baumannii.",
      source: "hendra",
    },
    {
      category: "PRECLINICAL",
      summary: "A leaf extract on its own had no effect against bacteria in lab tests; only silver particles made with it did.",
      source: "shah",
    },
    {
      category: "TRADITIONAL",
      summary:
        "Extracts of the big red kangaroo paw are used in anti-wrinkle creams by more than 30 skin care brands. The company that makes the ingredient says it boosts collagen and elastin in skin, but no independent studies have been published.",
      source: "abc",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No published medicinal uses or human safety studies were found.",
      source: "hendra",
    },
  ],
});
