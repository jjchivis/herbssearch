import { run } from "./lib/populate-herb";

// Adds nervous-system topics to herbs that already have full profiles. Each link
// rests on a sourced entry already on the herb's page (NCCIH and the review
// sources cited there).

run(
  {
    name: "Valerian",
    sources: {},
    symptoms: [
      {
        slug: "occasional-sleeplessness",
        notes: "Traditionally used for sleep. A review of 60 studies found a modest, inconsistent improvement; US sleep experts advise against it for long-term insomnia.",
      },
      { slug: "anxiety", notes: "Traditionally used in Europe for anxiety and restlessness. A review found a modest, inconsistent effect." },
    ],
  },
  {
    name: "Chamomile",
    sources: {},
    symptoms: [
      {
        slug: "occasional-sleeplessness",
        notes: "Traditionally used for relaxation and known as a sleep aid, but a 2019 review found little research support for insomnia.",
      },
      { slug: "anxiety", notes: "Early studies suggest it may help generalized anxiety disorder." },
    ],
  },
  {
    name: "Lemon Balm",
    sources: {},
    symptoms: [
      { slug: "anxiety", notes: "A review of trials found it reduced anxiety in several age groups." },
      { slug: "occasional-sleeplessness", notes: "Traditionally used to help sleep. In one study, sleep improved after 6 weeks in adults with moderate sleep problems." },
      { slug: "stress", notes: "Traditionally used to help people relax." },
      { slug: "memory-and-thinking", notes: "Results for memory and thinking have been mixed." },
    ],
  },
  {
    name: "Ashwagandha",
    sources: {},
    symptoms: [
      {
        slug: "stress",
        notes: "A review of 9 trials found it lowered stress, anxiety and the stress hormone cortisol more than placebo.",
      },
      { slug: "anxiety", notes: "A review of trials found less anxiety than with placebo, though NCCIH says its effect on anxiety specifically is unclear." },
      { slug: "occasional-sleeplessness", notes: "Traditionally used to bring on sleep; research suggests some products may help insomnia." },
    ],
  },
  {
    name: "Lavender",
    sources: {},
    symptoms: [
      {
        slug: "anxiety",
        notes: "Research suggests lavender oil taken by mouth might help anxiety, but the studies have limitations.",
      },
    ],
  },
);
