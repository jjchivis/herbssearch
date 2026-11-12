import { run } from "./lib/populate-herb";

// Dropwort (Filipendula vulgaris), from a 2018 anti-inflammatory study (Katanić
// et al.), a 2016 rat pain study (Samardžić et al.) and a 2015 mouse study
// (Shilova and Suslov). Common name per USDA PLANTS; family per GBIF.

run({
  name: "Dropwort",
  profile: { family: "Rosaceae", genus: "Filipendula", species: "vulgaris", partsUsed: "The flowers, above-ground parts and root" },
  sources: {
    katanic: {
      title: "Phytochemical analysis and anti-inflammatory effects of Filipendula vulgaris Moench extracts",
      author: "Katanić J, Pferschy-Wenzig EM, Mihailović V, et al.",
      journal: "Food and Chemical Toxicology",
      publicationDate: "2018-10-03",
      doi: "10.1016/j.fct.2018.10.001",
      pmid: "30291943",
      url: "https://doi.org/10.1016/j.fct.2018.10.001",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    samardzic: {
      title: "Antihyperalgesic activity of Filipendula ulmaria (L.) Maxim. and Filipendula vulgaris Moench in a rat model of inflammation",
      author: "Samardžić S, Tomić M, Pecikoza U, et al.",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2016-10-07",
      doi: "10.1016/j.jep.2016.10.024",
      pmid: "27725238",
      url: "https://doi.org/10.1016/j.jep.2016.10.024",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    shilova: {
      title: "Nootropic effect of meadowsweet (Filipendula vulgaris) extracts",
      author: "Shilova IV, Suslov NI",
      journal: "Bulletin of Experimental Biology and Medicine",
      publicationDate: "2015-03-17",
      doi: "10.1007/s10517-015-2841-9",
      pmid: "25778665",
      url: "https://doi.org/10.1007/s10517-015-2841-9",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A relative of meadowsweet. It's used in traditional medicine for inflammation-related problems. It contains gaultherin, a natural salicylate.",
      source: "katanic",
    },
    {
      category: "PRECLINICAL",
      summary: "In rats, extracts reduced swelling and pain from inflammation. In lab tests they blocked COX enzymes, the same targets as common pain relievers.",
      source: "katanic",
    },
    {
      category: "PRECLINICAL",
      summary: "A flower tea extract eased pain in rats with inflammation, about as well as meadowsweet. It didn't reduce swelling in that study.",
      source: "samardzic",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, extracts improved memory and resistance to low oxygen, similar to the drug piracetam.",
      source: "shilova",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "Flower tea extracts showed no toxic effects in mice. There are no human safety studies.",
      source: "samardzic",
    },
  ],
});
