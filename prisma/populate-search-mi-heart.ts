import { run } from "./lib/populate-herb";

// Search Mi Heart (Rhytidophyllum tomentosum), from verified sources: a review
// of Jamaican medicinal plants (Lowe et al. 2021, source of the cold-and-flu
// use, preparation and native range), the Natural History Museum of Jamaica's
// common name database, and Jarvis (2007) on its original description from
// Jamaica. Further traditional uses, preparation and cautions come from a
// Jamaican herb seller's article (Herbhearts 2025), which cites no research.
// No lab, animal or human research on it was found.

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
    herbhearts: {
      title: "Search Mi Heart Tea",
      author: "Chris",
      organization: "Herbhearts (Westmoreland, Jamaica)",
      publicationDate: "2025-03-28",
      url: "https://herbhearts.com/2025/03/28/search-mi-heart-tea/",
      sourceType: "secondary",
      tier: "TIER_5_SECONDARY",
    },
  },
  synonyms: [
    { name: "Search-me-heart", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Search Me Heart", type: "COMMON_NAME" },
    { name: "Search My Heart", type: "COMMON_NAME" },
    { name: "Heart Bush", type: "REGIONAL_NAME", region: "Jamaica" },
    { name: "Heart Leaf", type: "REGIONAL_NAME", region: "Jamaica" },
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
    {
      category: "TRADITIONAL",
      summary:
        "A Jamaican herb seller's website says search mi heart has been used for centuries in Jamaican folk medicine, including by the Maroons. It says many Jamaican adults remember being given the tea as children for colds.\nThe site lists these traditional uses:\n- The heart: steadying the heartbeat and improving circulation\n- Breathing problems: asthma, bronchitis and chest congestion\n- High blood pressure\n- Indigestion, bloating and stomach discomfort\n- Energy and stamina\nThe site doesn't cite any research for these uses.",
      source: "herbhearts",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The same site describes steeping 1 to 2 dried leaves in 2 cups of boiling water for 5 to 10 minutes, or 15 to 20 minutes for a stronger tea. Honey, ginger or lime may be added. It also mentions herbal baths, tinctures and compresses made from the plant.",
      source: "herbhearts",
    },
  ],
  safety: [
    {
      category: "CONTRAINDICATION",
      description:
        "No research has tested its safety. A Jamaican herb seller advises talking to a doctor before using it if you:\n- Are pregnant or breastfeeding\n- Have heart disease or high blood pressure\n- Take heart or blood pressure medicines",
      source: "herbhearts",
    },
  ],
  symptoms: [
    { slug: "colds-and-congestion", notes: "An anecdotal Jamaican remedy for colds." },
    { slug: "seasonal-immune-support", notes: "An anecdotal Jamaican remedy for colds and flu." },
    { slug: "heart-palpitations", notes: "Traditionally used in Jamaica to steady the heartbeat." },
    { slug: "poor-circulation", notes: "Traditionally used in Jamaica for circulation." },
    { slug: "high-blood-pressure", notes: "Traditionally used in Jamaica for high blood pressure." },
    { slug: "asthma-and-wheezing", notes: "Traditionally used in Jamaica for asthma." },
    { slug: "chest-congestion", notes: "Traditionally used in Jamaica for bronchitis and chest congestion." },
    { slug: "indigestion", notes: "Traditionally used in Jamaica for indigestion." },
    { slug: "bloating", notes: "Traditionally used in Jamaica for bloating." },
    { slug: "fatigue", notes: "Traditionally used in Jamaica for energy and stamina." },
  ],
});
