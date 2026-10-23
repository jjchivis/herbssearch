import { run } from "./lib/populate-herb";

// Adds the acne topic. Neem and Burdock get new studies (Rajaiah Yogesh et al.
// 2022; Miazga-Karska et al. 2020); every other link rests on a sourced entry
// already on the herb's page. Herbs suggested for acne without a source we
// could verify (calendula, dandelion, reishi, chaga) aren't linked.

run(
  {
    name: "Neem",
    sources: {
      yogesh: {
        title: "Clinical study to assess efficacy and safety of Purifying Neem Face Wash in prevention and reduction of acne in healthy adults",
        author: "Rajaiah Yogesh H, Gajjar T, Patel N, Kumawat R",
        journal: "Journal of Cosmetic Dermatology",
        organization: "Journal of Cosmetic Dermatology",
        publicationDate: "2021-09-30",
        doi: "10.1111/jocd.14486",
        pmid: "34590784",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10286658/",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
    },
    evidence: [
      {
        category: "HUMAN_RESEARCH",
        summary:
          "In a 4-week study in India, 120 adults with mild to moderate acne or oily skin used a face wash containing neem and turmeric. About 79% had fewer or no new red, swollen pimples, and 72% had fewer or no new blackheads and whiteheads. Their skin was also less oily. There was no comparison group, everyone knew what they were using, and one author worked for the company that makes the face wash.\n\nTechnical detail: open-label, single-center, single-arm; Himalaya Purifying Neem Face Wash; sebum decreased and hydration increased (p < 0.001) at visits 3 and 4.",
        source: "yogesh",
      },
    ],
    symptoms: [
      {
        slug: "acne",
        notes:
          "In one small 4-week study with no comparison group, most people using a neem and turmeric face wash had fewer pimples. The maker's staff took part.",
      },
    ],
  },
  {
    name: "Burdock",
    sources: {
      miazga: {
        title: "Anti-Acne Action of Peptides Isolated from Burdock Root-Preliminary Studies and Pilot Testing",
        author: "Miazga-Karska M, Michalak K, Ginalska G",
        journal: "Molecules",
        organization: "Molecules",
        publicationDate: "2020-04-27",
        doi: "10.3390/molecules25092027",
        pmid: "32349230",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7248785/",
        sourceType: "peer_reviewed",
        tier: "TIER_3_PEER_REVIEWED",
      },
    },
    evidence: [
      {
        category: "PRECLINICAL",
        summary:
          "In lab tests, small proteins (peptides) taken from burdock root stopped the growth of bacteria linked to acne, and didn't harm skin cells at the amounts tested. Researchers made them into an experimental skin dressing. This hasn't been tested on people's skin.\n\nTechnical detail: low-molecular-weight peptide fraction (<5,000 Da) active against Gram-positive Propionibacterium (Cutibacterium) acnes strains; fibroblast CC50 10 mg/mL; selectivity index 160–320; chitosan/alginate/genipin dressing.",
        source: "miazga",
      },
    ],
    symptoms: [
      {
        slug: "acne",
        notes:
          "Burdock fruit is used on the skin for acne in traditional Chinese medicine. In lab tests, peptides from the root stopped the growth of acne bacteria. Not tested in people.",
      },
    ],
  },
  {
    // Aloe: NCCIH entry on its page.
    name: "Aloe",
    sources: {},
    symptoms: [
      {
        slug: "acne",
        notes: "Aloe gel is promoted for acne. Two small studies suggest it may help when used on the skin along with other acne treatments.",
      },
    ],
  },
  {
    // Rehmannia Root: Srivastava trial on its page (populate-pmc-batch5.ts).
    name: "Rehmannia Root",
    sources: {},
    symptoms: [
      {
        slug: "acne",
        notes:
          "In a very small 8-week trial in 22 women, acne improved somewhat more with a rehmannia leaf extract taken by mouth than with a dummy capsule. It used the leaf, not the root.",
      },
    ],
  },
  {
    // Rosehips: Oargă lab and animal review on its page.
    name: "Rosehips",
    sources: {},
    symptoms: [
      { slug: "acne", notes: "In lab tests, rosehip extracts slowed the growth of bacteria linked to acne. Not tested for acne in people." },
    ],
  },
  {
    // Bai Zhi: Zhao review on its page.
    name: "Bai Zhi",
    sources: {},
    symptoms: [{ slug: "acne", notes: "Used in Japan for acne and skin rashes. A traditional use, not tested in trials." }],
  },
  {
    // Chasteberry: EMA side-effect entry on its page.
    name: "Chasteberry",
    sources: {},
    symptoms: [
      {
        slug: "acne",
        notes:
          "European guidance lists acne as a possible side effect of chasteberry. Our sources don't support using it to treat acne.",
      },
    ],
  },
);
