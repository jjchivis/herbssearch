import { run } from "./lib/populate-herb";

// Adds the eczema topic to herbs whose pages already carry a sourced eczema
// finding or traditional eczema use. Notes give the strength of the evidence.

run(
  {
    name: "Chamomile",
    sources: {},
    symptoms: [{ slug: "eczema", notes: "In a small trial, chamomile cream did slightly better than mild hydrocortisone but only marginally better than plain cream for atopic eczema." }],
  },
  {
    name: "Calendula",
    sources: {},
    symptoms: [{ slug: "eczema", notes: "A cream with calendula helped irritated skin stay hydrated and recover faster in healthy volunteers; not tested in people with eczema." }],
  },
  {
    name: "Licorice",
    sources: {},
    symptoms: [{ slug: "eczema", notes: "Limited evidence suggests licorice may possibly help eczema." }],
  },
  {
    name: "Burdock",
    sources: {},
    symptoms: [{ slug: "eczema", notes: "Used on the skin for eczema in traditional Chinese medicine. Not tested for eczema in trials." }],
  },
  {
    name: "Marigold",
    sources: {},
    symptoms: [{ slug: "eczema", notes: "In India the flowers are used on eczema as a traditional remedy. Not tested in trials." }],
  },
  {
    name: "Rosehips",
    sources: {},
    symptoms: [{ slug: "eczema", notes: "In animals, a related rose species eased signs of eczema. Not tested in people." }],
  },
  {
    name: "Aloe",
    sources: {},
    symptoms: [{ slug: "eczema", notes: "There isn't enough reliable information to say whether aloe helps eczema, and aloe gel has occasionally caused eczema-like rashes." }],
  },
);
