import { run } from "./lib/populate-herb";

// Adds findings on eczema and inflamed skin from a 2013 review of medicinal plants
// for inflammatory skin diseases (Dawid-Pać, Postępy Dermatologii i Alergologii)
// to herbs that already have full profiles, and links the eczema topic.

const dawid = {
  title: "Medicinal plants used in treatment of inflammatory skin diseases",
  author: "Dawid-Pać R",
  journal: "Postępy Dermatologii i Alergologii",
  organization: "Postępy Dermatologii i Alergologii",
  publicationDate: "2013-06-20",
  doi: "10.5114/pdia.2013.35620",
  pmid: "24278070",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3834722/",
  sourceType: "peer_reviewed" as const,
  tier: "TIER_3_PEER_REVIEWED" as const,
};

run(
  {
    name: "Witch Hazel",
    sources: { dawid },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "A 2013 review describes clinical studies of witch hazel creams for eczema, with mixed results:\n- Creams with witch hazel leaf extract were reported effective for atopic eczema in children and other eczemas\n- In 72 people with severe atopic eczema, a cream with witch hazel distillate worked about as well as a non-steroid anti-itch cream (bufexamac)\n- But a mild steroid cream (0.5% hydrocortisone) worked better than a witch hazel distillate cream for moderately severe atopic eczema\nIn people, a lotion with 10% witch hazel water also reduced sunburn redness.",
        source: "dawid",
      },
    ],
    symptoms: [{ slug: "eczema", notes: "Witch hazel creams helped atopic eczema in some trials, but a mild hydrocortisone cream worked better in another." }],
  },
  {
    name: "St. John's Wort",
    sources: { dawid },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "Used on the skin, a St. John's wort cream standardised to 1.5% hyperforin improved the skin and reduced Staphylococcus aureus bacteria on it in people with mild to moderate atopic dermatitis (eczema), clearly better than a dummy cream, according to a 2013 review. An oil made by soaking the flowering tops in vegetable oil is traditionally used on minor cuts, burns and skin ulcers.",
        source: "dawid",
      },
    ],
    symptoms: [{ slug: "eczema", notes: "A hyperforin cream improved mild to moderate atopic dermatitis better than a dummy cream." }],
  },
  {
    name: "Marshmallow Root",
    sources: { dawid },
    evidence: [
      {
        category: "TRADITIONAL",
        summary:
          "Marshmallow root is used on the skin for boils, eczema and dermatitis. In people, an ointment with 20% marshmallow root extract reduced skin irritation from UV light or a chemical irritant, though less than a steroid ointment (dexamethasone); combining the two worked best.",
        source: "dawid",
      },
    ],
    symptoms: [{ slug: "eczema", notes: "Used on the skin for eczema and dermatitis; an ointment eased irritated skin, though less than a steroid." }],
  },
  {
    name: "Chamomile",
    sources: { dawid },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "A 2013 review reports that chamomile flower ointments and creams:\n- Reduced chemically caused skin inflammation better than 0.1% hydrocortisone in a study in people\n- Worked about as well as 0.25% hydrocortisone for inflamed skin on the hands, forearms and lower legs\n- Reduced redness from UV light\nChamomile flower is used on the skin for inflammation and irritation, nappy rash, cradle cap, eczema, wounds and insect bites.",
        source: "dawid",
      },
    ],
  },
  {
    name: "Calendula",
    sources: { dawid },
    evidence: [
      {
        category: "TRADITIONAL",
        summary: "Calendula flower is used in compresses for slow-healing wounds, bruises, rashes, boils and dermatitis. Its use in children under 6 isn't recommended.",
        source: "dawid",
      },
    ],
  },
);
