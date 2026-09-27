import { run } from "./lib/populate-herb";

// Adds digestive topics to herbs that already have full profiles. Each link
// rests on a sourced entry already on the herb's page.

run(
  {
  // Peppermint: NCCIH and the IBS, nausea and indigestion reviews on its page.
  name: "Peppermint",
  sources: {},
  symptoms: [
    {
      slug: "ibs",
      notes: "Research suggests enteric-coated peppermint oil capsules may improve IBS symptoms in adults.",
    },
    {
      slug: "occasional-nausea",
      notes: "Peppermint by mouth, or breathing in the oil, may help nausea and vomiting during chemotherapy.",
    },
    {
      slug: "indigestion",
      notes: "Evidence covers only combination products (such as with caraway oil); peppermint oil alone may make indigestion worse.",
    },
  ],
},
  {
    name: "Dandelion",
    sources: {},
    symptoms: [{ slug: "loss-of-appetite", notes: "Recognized in Europe as a traditional medicine for short-term loss of appetite." }],
  },
  {
    name: "Horehound",
    sources: {},
    symptoms: [{ slug: "loss-of-appetite", notes: "Recognized in Europe as a traditional medicine for temporary loss of appetite." }],
  },
  {
    name: "Burdock",
    sources: {},
    symptoms: [{ slug: "loss-of-appetite", notes: "Recognized in Europe as a traditional medicine for short-term loss of appetite." }],
  },
);
