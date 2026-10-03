import { run } from "./lib/populate-herb";

// Search Mi Heart (Rhytidophyllum tomentosum), from verified sources: a review
// of Jamaican medicinal plants (Lowe et al. 2021, source of the cold-and-flu
// use, preparation and native range), the Natural History Museum of Jamaica's
// common name database, and Jarvis (2007) on its original description from
// Jamaica. No lab, animal or human research on it was found, and no sources on
// its safety, so the page leaves those sections empty rather than filling them.

run({
  name: "Search Mi Heart",
  profile: {
    family: "Gesneriaceae",
    genus: "Rhytidophyllum",
    species: "tomentosum",
    nativeRange: "Native to the Caribbean and South America; first described from riverbanks in Jamaica",
    partsUsed: "The leaves, mostly dried, made into a tea",
  },
  sources: {
    lowe: {
      title: "Antiviral Activity of Jamaican Medicinal Plants and Isolated Bioactive Compounds",
      author: "Lowe H, Steele B, Bryant J, Fouad E, Toyang N, Ngwa W",
      journal: "Molecules",
      organization: "Molecules",
      publicationDate: "2021-01-01",
      doi: "10.3390/molecules26030607",
      pmid: "33503834",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7865499/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    nhmj: {
      title: "Common Name Database",
      organization: "Natural History Museum of Jamaica, Institute of Jamaica",
      url: "https://nhmj-ioj.org.jm/?p=11574",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
    jarvis: {
      title: "Order out of Chaos: Linnaean Plant Names and their Types (Rhytidophyllum tomentosum)",
      author: "Jarvis C",
      organization: "Linnean Society of London and Natural History Museum, London",
      publicationDate: "2007-12-31",
      doi: "10.5281/zenodo.4368578",
      url: "https://zenodo.org/records/4368578",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
  },
  synonyms: [
    { name: "Search-me-heart", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Search Me Heart", type: "COMMON_NAME" },
    { name: "Search My Heart", type: "COMMON_NAME" },
    { name: "Gesneria tomentosa", type: "SCIENTIFIC_SYNONYM" },
  ],
  traditions: [
    {
      slug: "caribbean-folk-medicine",
      notes: "A Jamaican bush tea used as an anecdotal remedy for colds and flu.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "In Jamaica, search-mi-heart tea is an anecdotal remedy for colds and flu. 1 to 2 teaspoons of dried leaves are brewed in a cup of water, left to steep for about 10 minutes, and sweetened as desired. A 2021 review of Jamaican medicinal plants listed no research testing this use.",
      source: "lowe",
    },
    {
      category: "TRADITIONAL",
      summary: "Listed by the Natural History Museum of Jamaica under the common name search-me-heart.",
      source: "nhmj",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "An anecdotal Jamaican remedy for colds. It hasn't been studied in research." },
    { slug: "seasonal-immune-support", notes: "An anecdotal Jamaican remedy for colds and flu. It hasn't been studied in research." },
  ],
});
