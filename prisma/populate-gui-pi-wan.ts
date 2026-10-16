import { run } from "./lib/populate-herb";

// Gui Pi Wan (Guipi Decoction / Gui Pi Tang, "Restore the Spleen"), a classical
// 12-herb Chinese formula, from a 2023 systematic review in chronic heart failure
// (Rong et al.) and a 2025 systematic review in anaemia (Lv et al.).

run({
  name: "Gui Pi Wan",
  profile: {
    family: "A formula of 12 herbs from several plant families",
    genus: "Panax / Astragalus / Angelica / Ziziphus and others",
    species: "ginseng / membranaceus / sinensis / jujuba and others",
    partsUsed: "Ginseng, longan fruit, atractylodes, astragalus, dang gui, poria, polygala, ziziphus seed, aucklandia, licorice, fresh ginger and jujube dates, as pills or decoctions",
  },
  sources: {
    rong: {
      title: "Efficacy and safety of Guipi Decoction in the treatment of chronic heart failure: A systematic review and meta-analysis",
      author: "Rong Y, Wu D, Li M, Teng J",
      journal: "Medicine",
      publicationDate: "2023-03-01",
      doi: "10.1097/MD.0000000000033181",
      pmid: "36862873",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9981397/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    lv: {
      title: "Systematic review and meta-analysis of Guipi Decoction in the treatment of anemia",
      author: "Lv X, Wang D, Zou X",
      journal: "Medicine",
      publicationDate: "2025-07-01",
      doi: "10.1097/MD.0000000000043625",
      pmid: "40725883",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12303479/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Gui Pi Tang", type: "TRADITIONAL_NAME" },
    { name: "Guipi Decoction", type: "COMMON_NAME" },
    { name: "Guipi", type: "TRADITIONAL_NAME" },
    { name: "Restore the Spleen", type: "COMMON_NAME" },
  ],
  traditions: [
    { slug: "traditional-chinese-medicine", notes: "A classical formula that tonifies qi and blood and strengthens the spleen and heart; used for palpitations, forgetfulness, insomnia, poor appetite and tiredness." },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Gui pi is a classical Chinese formula of 12 ingredients: ginseng, longan fruit, atractylodes, astragalus, dang gui, poria, polygala, ziziphus seed, aucklandia root, licorice, fresh ginger and jujube dates. It's used to \"tonify qi and blood\" and strengthen the spleen and heart, mainly for:\n- Palpitations\n- Forgetfulness\n- Insomnia\n- Poor appetite\n- Tiredness",
      source: "rong",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "A 2023 review combined 17 Chinese trials with 1,806 people with chronic heart failure. Adding gui pi to standard treatment was linked to better heart function, with few side effects. The trials were small, and the reviewers say more rigorous trials are needed.",
      source: "rong",
    },
    {
      category: "HUMAN_RESEARCH",
      summary: "A 2025 review of 13 Chinese trials with 954 people with anaemia found that adding gui pi to standard treatment, such as iron tablets, improved haemoglobin, red blood cells and iron levels more than standard treatment alone.",
      source: "lv",
    },
  ],
  symptoms: [
    { slug: "occasional-sleeplessness", notes: "A classical Chinese formula for insomnia with palpitations and forgetfulness. Not tested on its own for sleep in these reviews." },
    { slug: "heart-palpitations", notes: "Traditionally used for palpitations; small Chinese trials in heart failure suggest it may help heart function." },
    { slug: "fatigue", notes: "Traditionally used for tiredness and poor appetite; Chinese trials in anaemia suggest it may help alongside iron." },
  ],
});
