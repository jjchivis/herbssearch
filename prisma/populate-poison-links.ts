import { run } from "./lib/populate-herb";

// Adds the poisonous plants topic to herbs whose pages already carry a sourced
// poisoning warning. Each note names the dangerous part.

run(
  {
    name: "Abrus Precatorius",
    sources: {},
    symptoms: [{ slug: "poisonous-plants", notes: "The seeds contain abrin, one of the deadliest poisons known." }],
  },
  {
    name: "Foxglove",
    sources: {},
    symptoms: [{ slug: "poisonous-plants", notes: "All parts are poisonous and affect the heart." }],
  },
  {
    name: "Belladonna",
    sources: {},
    symptoms: [{ slug: "poisonous-plants", notes: "All parts are poisonous; it can cause seizures, coma and death." }],
  },
  {
    name: "Pokeberry",
    sources: {},
    symptoms: [{ slug: "poisonous-plants", notes: "The whole plant is poisonous, especially the root; even cooked leaves have made people ill." }],
  },
  {
    name: "Ackee Leaf",
    sources: {},
    symptoms: [{ slug: "poisonous-plants", notes: "Unripe ackee fruit contains hypoglycin A, a poison that has killed children." }],
  },
  {
    name: "Castor Oil",
    sources: {},
    symptoms: [{ slug: "poisonous-plants", notes: "Raw castor seeds contain ricin and are the main danger; processed oil is generally regarded as safe." }],
  },
  {
    name: "Penny Royal",
    sources: {},
    symptoms: [{ slug: "poisonous-plants", notes: "The essential oil has caused moderate to severe poisoning." }],
  },
  {
    name: "Mistletoe",
    sources: {},
    symptoms: [{ slug: "poisonous-plants", notes: "The berries and leaves can cause serious harm if eaten." }],
  },
  {
    name: "Elderberry",
    sources: {},
    symptoms: [{ slug: "poisonous-plants", notes: "Raw or unripe berries, and the leaves and stems, contain substances that produce cyanide." }],
  },
);
