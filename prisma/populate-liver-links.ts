import { run } from "./lib/populate-herb";

// Adds liver and gallbladder topics to herbs that already have full profiles.
// Each link rests on a sourced entry already on the herb's page: its liver
// warning, or (for Turmeric) NCCIH's note on traditional use for liver disease
// and (for Rosemary) the EMA contraindication for gallstones.

run(
  {
    name: "Turmeric",
    sources: {},
    symptoms: [
      {
        slug: "liver-safety-warnings",
        notes: "Liver injury has been reported with turmeric, especially curcumin products made to be absorbed better.",
      },
      { slug: "liver-disease", notes: "Traditionally used in Chinese, Indian, Islamic and Thai medicine for liver disease." },
    ],
  },
  {
    name: "Ashwagandha",
    sources: {},
    symptoms: [
      {
        slug: "liver-safety-warnings",
        notes: "Rarely, ashwagandha products have caused liver damage, usually 2 to 12 weeks after starting.",
      },
    ],
  },
  {
    name: "Black Cohosh",
    sources: {},
    symptoms: [
      {
        slug: "liver-safety-warnings",
        notes: "Cases of liver damage have been reported, though it's not certain black cohosh caused them. Stop and see a doctor if you notice dark urine or yellow skin or eyes.",
      },
    ],
  },
  {
    name: "Reishi",
    sources: {},
    symptoms: [{ slug: "liver-safety-warnings", notes: "Case reports describe liver damage from reishi, including one death." }],
  },
  {
    name: "Valerian",
    sources: {},
    symptoms: [{ slug: "liver-safety-warnings", notes: "In very rare cases, liver damage has been reported with valerian." }],
  },
  {
    name: "Ginseng",
    sources: {},
    symptoms: [{ slug: "liver-safety-warnings", notes: "Liver damage has been reported with Asian ginseng." }],
  },
  {
    name: "Cinnamon",
    sources: {},
    symptoms: [
      {
        slug: "liver-safety-warnings",
        notes: "Cassia cinnamon, the most common kind in North America, contains coumarin, which has been linked to liver problems.",
      },
    ],
  },
  {
    name: "Rosemary",
    sources: {},
    symptoms: [
      {
        slug: "gallstones-and-bile-flow",
        notes: "Rosemary medicines aren't recommended for people with gallstones, a blocked bile duct, an inflamed gallbladder or liver disease.",
      },
    ],
  },
);
