import { run } from "./lib/populate-herb";

// Adds a 2023 study of authentic blue lotus extracts and commercial products
// (Dosoky et al., Molecules), found via a skincare blog the site owner shared,
// to the existing Blue Lotus page.

run({
  name: "Blue Lotus",
  sources: {
    dosoky: {
      title: "Chemical Composition, Market Survey, and Safety Assessment of Blue Lotus (Nymphaea caerulea Savigny) Extracts",
      author: "Dosoky NS, Shah SA, Dawson JT, et al.",
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
        "A 2023 study tested six authentic blue lotus flower extracts and 11 commercial products. The authentic extracts used in fragrance contained almost none of apomorphine and nuciferine, the compounds behind blue lotus's mind-altering effects.",
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
  ],
});
