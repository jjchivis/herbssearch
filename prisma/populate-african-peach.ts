import { run } from "./lib/populate-herb";

// African Peach (Nauclea latifolia), from Cameroonian, Nigerian and sheep
// studies (Taïwe et al. 2011; Gidado et al. 2008; Ademola et al. 2006) and a
// 2026 review of Benin medicinal plants (Hounsa et al.). Family per GBIF.

run({
  name: "African Peach",
  profile: { family: "Rubiaceae", genus: "Nauclea", species: "latifolia", nativeRange: "Tropical Africa", partsUsed: "The roots, leaves and fruit" },
  sources: {
    taiwe: {
      title: "Antipyretic and antinociceptive effects of Nauclea latifolia root decoction and possible mechanisms of action",
      author: "Taïwe GS, Bum EN, Talla E, et al.",
      journal: "Pharmaceutical Biology",
      publicationDate: "2011-01-01",
      doi: "10.3109/13880209.2010.492479",
      pmid: "20822326",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3317381/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    gidado: {
      title: "Hypoglycaemic activity of Nauclea latifolia Sm. (Rubiaceae) in experimental animals",
      author: "Gidado A, Ameh DA, Atawodi SE, Ibrahim S",
      journal: "African Journal of Traditional, Complementary and Alternative Medicines",
      publicationDate: "2008-01-22",
      doi: "10.4314/ajtcam.v5i2.31274",
      pmid: "20161938",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2816545/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    ademola: {
      title: "Anthelmintic efficacy of Nauclea latifolia extract against gastrointestinal nematodes of sheep: in vitro and in vivo studies",
      author: "Ademola IO, Fagbemi BO, Idowu SO",
      journal: "African Journal of Traditional, Complementary and Alternative Medicines",
      publicationDate: "2006-11-13",
      pmid: "20162086",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2816450/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    hounsa: {
      title: "Traditional medicinal knowledge and diversity of medicinal plants in Benin: a systematic review (2014-2023)",
      author: "Hounsa E, Reigada I, Assogba P, et al.",
      journal: "BMC Complementary Medicine and Therapies",
      publicationDate: "2026-06-25",
      doi: "10.1186/s12906-026-05440-0",
      pmid: "42351099",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13556067/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  evidence: [
    {
      category: "TRADITIONAL",
      summary: "A small tropical African tree used in traditional medicine for malaria, epilepsy, anxiety, pain and fever.",
      source: "taiwe",
    },
    {
      category: "TRADITIONAL",
      summary: "In Benin it's among the plants used for snakebite, though few studies have looked at that use.",
      source: "hounsa",
    },
    {
      category: "PRECLINICAL",
      summary: "In mice, a root decoction reduced fever and pain.",
      source: "taiwe",
    },
    {
      category: "PRECLINICAL",
      summary: "In diabetic rats, leaf extracts lowered blood sugar by about a third, about as much as the diabetes drug glibenclamide.",
      source: "gidado",
    },
    {
      category: "PRECLINICAL",
      summary: "In sheep, a leaf extract reduced gut worms.",
      source: "ademola",
    },
  ],
  safety: [
    {
      category: "PREPARATION_SPECIFIC",
      description: "No human medical or safety studies were found.",
      source: "taiwe",
    },
  ],
  symptoms: [
    { slug: "fever", notes: "A traditional fever and malaria remedy; a root decoction reduced fever in mice. Not tested in people." },
    { slug: "high-blood-sugar", notes: "Leaf extracts lowered blood sugar in diabetic rats. Not tested in people." },
  ],
});
