import { run } from "./lib/populate-herb";

// Adds the dry skin topic. Calendula gets a 2025 randomized trial of a
// calendula emollient (Crnčević et al.), Aloe a 2014 skin-hydration study in
// volunteers (Fox et al.), and Chamomile and Lavender a 2025 review of essential
// oils for itch (Diogo Gonçalves). Neither chamomile nor lavender has a
// dry-skin trial of its own, and their notes say so.

const GONCALVES = {
  title: "Pruritus in Palliative Care: A Narrative Review of Essential Oil-Based Strategies to Alleviate Cutaneous Discomfort",
  author: "Diogo Gonçalves S",
  journal: "Diseases",
  publicationDate: "2025-07-23",
  doi: "10.3390/diseases13080232",
  pmid: "40863207",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12386068/",
  sourceType: "peer_reviewed" as const,
  tier: "TIER_3_PEER_REVIEWED" as const,
};

run(
  {
    name: "Calendula",
    sources: {
      crncevic: {
        title: "Double-blind randomised controlled trial of an emollient cream with and without 1 % supercritical CO2 extract of Calendula officinalis in contact dermatitis",
        author: "Crnčević MŠ, Durdov T, Rušić D, et al.",
        journal: "Acta Pharmaceutica",
        publicationDate: "2025-12-01",
        doi: "10.2478/acph-2025-0035",
        pmid: "41527980",
        url: "https://doi.org/10.2478/acph-2025-0035",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a small double-blind trial, 20 healthy volunteers had patches of forearm skin irritated on purpose. A moisturizing cream with 1% calendula extract kept the skin more hydrated than the same cream without calendula or no cream, and helped the skin barrier recover faster. There were no side effects.",
        source: "crncevic",
      },
    ],
    symptoms: [
      {
        slug: "dry-skin",
        notes: "In a small trial, a moisturizing cream with calendula extract kept irritated skin more hydrated than the same cream without it.",
      },
    ],
  },
  {
    name: "Aloe",
    sources: {
      fox: {
        title: "In Vivo skin hydration and anti-erythema effects of Aloe vera, Aloe ferox and Aloe marlothii gel materials after single and multiple applications",
        author: "Fox LT, du Plessis J, Gerber M, van Zyl S, Boneschans B, Hamman JH",
        journal: "Pharmacognosy Magazine",
        publicationDate: "2014-04-01",
        doi: "10.4103/0973-1296.133291",
        pmid: "24991119",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4078333/",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a study in women volunteers, a single application of aloe vera gel hydrated the skin, but repeated applications dried it out. Over 6 days, aloe vera reduced redness on irritated skin about as well as hydrocortisone gel.",
        source: "fox",
      },
    ],
    symptoms: [
      {
        slug: "dry-skin",
        notes: "Aloe gel hydrated the skin after one use but dried it out with repeated use in one study, so it may not help ongoing dry skin.",
      },
    ],
  },
  {
    name: "Chamomile",
    sources: { goncalves: GONCALVES },
    evidence: [
      {
        category: "TRADITIONAL",
        summary:
          "Chamomile essential oil is used in massage and bath oils to soothe dry or damaged skin and relieve itching, including for people in palliative care.",
        source: "goncalves",
      },
    ],
    symptoms: [
      {
        slug: "dry-skin",
        notes: "Used in oils to soothe dry, itchy skin. No trials of chamomile for dry skin were found.",
      },
    ],
  },
  {
    name: "Lavender",
    sources: { goncalves: GONCALVES },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary: "In a small pilot study, hand massage with lavender and bergamot oils reduced itching in older people in long-term care.",
        source: "goncalves",
      },
    ],
    symptoms: [
      {
        slug: "dry-skin",
        notes: "A small pilot study found a lavender and bergamot oil massage reduced itching. No trials of lavender for dry skin were found.",
      },
    ],
  },
);
