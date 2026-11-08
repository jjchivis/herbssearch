import { run } from "./lib/populate-herb";

// Adds a 2023 study of authentic blue lotus extracts and commercial products
// (Dosoky et al., Molecules), found via a skincare blog the site owner shared,
// to the existing Blue Lotus page.

run({
  name: "Blue Lotus",
  sources: {
    dosoky: {
      title: "Chemical Composition, Market Survey, and Safety Assessment of Blue Lotus (Nymphaea caerulea Savigny) Extracts",
      author: "Dosoky NS, Shah SA, Dawson JT, Banjara SS, Poudel A, Bascoul C, Satyal P",
      organization: "doTERRA International (authors' employer)",
      journal: "Molecules",
      publicationDate: "2023-10-10",
      doi: "10.3390/molecules28207014",
      url: "https://doi.org/10.3390/molecules28207014",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  evidence: [
    {
      category: "PRECLINICAL",
      summary:
        "A 2023 study by scientists at the essential oil company doTERRA tested six authentic blue lotus flower extracts and 11 commercial products. The authentic extracts used in fragrance contained almost none of apomorphine and nuciferine, the compounds behind blue lotus's mind-altering effects.\n\nTechnical detail: apomorphine was not detected; nuciferine was present only in traces (10–72 ppb) in the concrete and absolute.",
      source: "dosoky",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "Safety data on blue lotus is limited. A 2023 study concluded that authentic blue lotus flower extracts (concrete or absolute) don't raise major safety concerns when diluted and used on the skin as a fragrance ingredient. This doesn't apply to teas, vapes, gummies or other products that are swallowed or inhaled.",
      source: "dosoky",
    },
    {
      category: "CONTAMINATION",
      description:
        "In the same study, all 11 \"blue lotus\" oils bought on Amazon and Etsy contained synthetic fragrance chemicals, and none matched authentic blue lotus in scent or makeup. Some had other oils, such as citrus, lavender or geranium, added. Products sold as blue lotus may not contain it at all.",
      source: "dosoky",
    },
    {
      category: "PREPARATION_SPECIFIC",
      description:
        "Safety data could not be found for 10 of the 28 main compounds in authentic blue lotus extracts, and some compounds couldn't be identified at all, so their safety is unknown.",
      source: "dosoky",
    },
  ],
});
