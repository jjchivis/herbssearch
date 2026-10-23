import { run } from "./lib/populate-herb";

// Jewelweed (Impatiens capensis), from three studies of jewelweed and poison ivy
// rash: Long et al. 1997, Abrams Motz et al. 2012 and Motz et al. 2015.
// No safety sources, so none are listed.

run({
  name: "Jewelweed",
  profile: {
    family: "Balsaminaceae",
    genus: "Impatiens",
    species: "capensis",
    nativeRange: "Eastern and Midwestern United States and Canada",
    partsUsed: "The fresh leaves and stems, crushed into a mash",
  },
  sources: {
    long: {
      title: "Treatment of poison ivy/oak allergic contact dermatitis with an extract of jewelweed",
      author: "Long D, Ballentine NH, Marks JG",
      journal: "American Journal of Contact Dermatitis",
      publicationDate: "1997-09-01",
      doi: "10.1016/S1046-199X(97)90095-6",
      pmid: "9249283",
      url: "https://pubmed.ncbi.nlm.nih.gov/9249283/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    motz2012: {
      title: "The effectiveness of jewelweed, Impatiens capensis, the related cultivar I. balsamina and the component, lawsone in preventing post poison ivy exposure contact dermatitis",
      author: "Abrams Motz V, Bowers CP, Mull Young L, Kinder DH",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2012-07-03",
      doi: "10.1016/j.jep.2012.06.038",
      pmid: "22766473",
      url: "https://pubmed.ncbi.nlm.nih.gov/22766473/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    motz2015: {
      title: "Efficacy of the saponin component of Impatiens capensis Meerb. in preventing urushiol-induced contact dermatitis",
      author: "Motz VA, Bowers CP, Kneubehl AR, Lendrum EC, Young LM, Kinder DH",
      journal: "Journal of Ethnopharmacology",
      publicationDate: "2014-12-24",
      doi: "10.1016/j.jep.2014.12.024",
      pmid: "25543019",
      url: "https://pubmed.ncbi.nlm.nih.gov/25543019/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
  },
  synonyms: [
    { name: "Spotted Touch-me-not", type: "COMMON_NAME" },
    { name: "Impatiens capensis", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "native-american-ethnobotany", notes: "Many Native American tribes used crushed jewelweed to treat or prevent rashes from poison ivy and stinging nettle." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Jewelweed grows in the eastern and midwestern US and Canada. Many Native American tribes crushed it into a mash to treat or prevent rashes from plants such as poison ivy and stinging nettle.",
      source: "motz2012",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a small 1997 trial, 10 volunteers had poison ivy resin applied to their skin. An extract of fresh jewelweed stems didn't reduce the rash any more than water.",
      source: "long",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "In a 2012 study, poison ivy was brushed onto volunteers' forearms. Fresh jewelweed mash rubbed on afterwards reduced the rash that developed, but ordinary soap worked better. Jewelweed extracts didn't work.",
      source: "motz2012",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2015 study of 23 volunteers found that saponins, natural soap-like compounds in jewelweed, reduced poison ivy rash. Soaps with or without jewelweed also worked.",
      source: "motz2015",
    },
  ],
  symptoms: [
    { slug: "skin-irritation", notes: "Fresh jewelweed mash reduced poison ivy rash after contact in one study, but soap worked better." },
  ],
});
