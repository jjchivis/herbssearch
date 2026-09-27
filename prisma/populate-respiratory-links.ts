import { run } from "./lib/populate-herb";

// Adds respiratory topics to herbs that already have full profiles. Each link
// rests on a sourced entry already on the herb's page.

run(
  {
    name: "Thyme",
    sources: {},
    symptoms: [
      { slug: "cough", notes: "Traditionally used for bronchitis and whooping cough. In a trial, thyme with primrose root reduced coughing fits in acute bronchitis." },
      {
        slug: "chest-congestion",
        notes: "In a trial of 361 adults with acute bronchitis, thyme combined with primrose root reduced coughing fits more than placebo.",
      },
    ],
  },
  {
    name: "Echinacea",
    sources: {},
    symptoms: [
      {
        slug: "colds-and-congestion",
        notes: "It may slightly lower the chance of catching a cold, but a Cochrane review found no meaningful benefit for treating colds.",
      },
    ],
  },
  {
    name: "Garlic",
    sources: {},
    symptoms: [{ slug: "colds-and-congestion", notes: "Recognized in Europe as a traditional medicine to relieve cold symptoms." }],
  },
  {
    name: "Andrographis",
    sources: {},
    symptoms: [
      { slug: "colds-and-congestion", notes: "Mostly studied for colds and flu; it may shorten symptoms and make them less severe." },
      { slug: "cough", notes: "Reviews suggest it may reduce coughing with colds and flu." },
    ],
  },
  {
    name: "Linden",
    sources: {},
    symptoms: [{ slug: "colds-and-congestion", notes: "Recognized in Europe as a traditional medicine to relieve cold symptoms." }],
  },
  {
    name: "Sage",
    sources: {},
    symptoms: [{ slug: "sore-throat", notes: "Long used in European folk medicine for inflammation of the mouth and throat." }],
  },
  {
    name: "Peppermint",
    sources: {},
    symptoms: [
      { slug: "colds-and-congestion", notes: "Traditionally used for colds and fever." },
      { slug: "sore-throat", notes: "Traditionally used for a sore or inflamed mouth and throat." },
    ],
  },
  {
    name: "Goldenseal",
    sources: {},
    symptoms: [
      { slug: "colds-and-congestion", notes: "Promoted for colds and upper respiratory infections, but there's no evidence it helps the common cold." },
    ],
  },
);
