import { run } from "./lib/populate-herb";

// Pelargonium (Pelargonium sidoides), a South African medicinal plant whose root
// extract is sold for colds and bronchitis. Sources: the EMA public summary
// (traditional use), a Cochrane review, a 2026 randomized trial (PHYTOBRONCH),
// a 2026 liver safety study and a 2026 systematic review of its history.
// Family per GBIF. Not the same plant as African Geranium (P. graveolens).

run({
  name: "Pelargonium",
  profile: {
    family: "Geraniaceae",
    genus: "Pelargonium",
    species: "sidoides",
    partsUsed: "The root, taken as a liquid or dried extract",
  },
  sources: {
    emaSummary: {
      title: "Pelargonium root: summary for the public (EMA/421085/2018)",
      organization: "European Medicines Agency, Committee on Herbal Medicinal Products (HMPC)",
      publicationDate: "2018-07-24",
      url: "https://www.ema.europa.eu/en/documents/herbal-summary/pelargonium-root-summary-public_en.pdf",
      sourceType: "government",
      tier: "TIER_1_GOVERNMENT",
    },
    cochrane: {
      title: "Pelargonium sidoides extract for treating acute respiratory tract infections",
      author: "Timmer A, Günther J, Motschall E, Rücker G, Antes G, Kern WV",
      journal: "Cochrane Database of Systematic Reviews",
      organization: "Cochrane",
      publicationDate: "2013-10-22",
      doi: "10.1002/14651858.CD006323.pub3",
      pmid: "24146345",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11835051/",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
    phytobronch: {
      title:
        "Pelargonium sidoides extract (EPs 7630) versus usual care for acute bronchitis in Swiss primary care (PHYTOBRONCH): a pragmatic, open-label, randomised controlled trial",
      author: "Bourqui A, Corpataux O, Bonofiglio F, et al.",
      journal: "NPJ Primary Care Respiratory Medicine",
      publicationDate: "2026-04-21",
      doi: "10.1038/s41533-026-00499-1",
      pmid: "42014704",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13284306/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    liverSafety: {
      title:
        "Short-term Liver Safety of Pelargonium sidoides DC. Root (PELARGO) 20 mg Capsule: A Non-interventional Post-authorization Safety Study",
      author: "Alvero RGY, Balmadrid AS, Aquino RCC, Balaccua GP",
      journal: "Acta Medica Philippina",
      publicationDate: "2026-02-27",
      doi: "10.47895/amp.vi0.12322",
      pmid: "41890334",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13013544/",
      sourceType: "peer_reviewed",
      tier: "TIER_3_PEER_REVIEWED",
    },
    honchar: {
      title: "Pelargonium sidoides - from ethnopharmacology to evidence-based medicine: a systematic review",
      author: "Honchar O, Mykhailenko O, Holovchenko O, Georgiyants V",
      journal: "Phytomedicine",
      publicationDate: "2026-01-23",
      doi: "10.1016/j.phymed.2026.157880",
      pmid: "41653615",
      url: "https://doi.org/10.1016/j.phymed.2026.157880",
      sourceType: "systematic_review",
      tier: "TIER_2_SYSTEMATIC_REVIEW",
    },
  },
  synonyms: [
    { name: "Pelargonium Root", type: "COMMON_NAME" },
    { name: "Umckaloabo", type: "COMMON_NAME" },
  ],
  traditions: [
    {
      slug: "african-traditional-medicine",
      notes: "Used by Indigenous peoples of southern Africa for breathing and digestive complaints.",
    },
    {
      slug: "european-folk-medicine",
      notes: "Recognized in the European Union as a traditional herbal medicine for the symptoms of the common cold.",
    },
  ],
  evidence: [
    {
      category: "TRADITIONAL",
      summary:
        "Indigenous peoples of southern Africa have traditionally used pelargonium for breathing and digestive complaints. A root extract is now sold widely, including under the name Umckaloabo.\n\nTechnical detail: the extract is known as EPs 7630.",
      source: "honchar",
    },
    {
      category: "TRADITIONAL",
      summary:
        "The European Medicines Agency recognizes pelargonium root extracts as a traditional herbal medicine for the symptoms of the common cold, for people aged 6 and older. This is based on long-standing safe use, not on proof from clinical trials. The agency also looked at 3 trials in people with acute bronchitis (a chest infection). They hinted that it might ease symptoms such as cough, but the trials had weaknesses, so no firm conclusion could be drawn.",
      source: "emaSummary",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2013 Cochrane review of trials found:\n- It may ease the symptoms of acute bronchitis in adults and children, but the evidence was low quality.\n- For sinus infections and the common cold, the evidence was very low quality.\n- People taking it had more side effects than with placebo, but none were serious.\n\nTechnical detail: Timmer et al. 2013, Cochrane CD006323; outcomes for acute bronchitis rated low quality; sinusitis and common cold rated very low quality.",
      source: "cochrane",
    },
    {
      category: "HUMAN_RESEARCH",
      summary:
        "A 2026 trial in Switzerland gave 332 adults with acute bronchitis either pelargonium extract or usual care. Pelargonium did not clearly help them recover faster. Fewer people in the pelargonium group used antibiotics, but the difference could have been due to chance. Mild side effects were more common with pelargonium.\n\nTechnical detail: PHYTOBRONCH, pragmatic open-label RCT; antibiotic use 17.4% vs 25.2% (not significant); mild adverse events 32.3% vs 21.5%.",
      source: "phytobronch",
    },
  ],
  safety: [
    {
      category: "ADVERSE_EFFECT",
      description:
        "Side effects are very rare (fewer than 1 in 10,000 people). They include mild stomach upset, such as diarrhea, stomach discomfort, nausea or vomiting, trouble swallowing, mild nose or gum bleeding, and allergic reactions.",
      source: "emaSummary",
    },
    {
      category: "TOXICITY",
      description:
        "Liver problems have been reported with pelargonium root medicines, but how often they happen is not known.",
      source: "emaSummary",
    },
    {
      category: "TOXICITY",
      description:
        "A 2026 study in the Philippines checked liver blood tests in 300 adults who took a pelargonium capsule for 7 days and found no liver damage. It only looked at short-term use.",
      source: "liverSafety",
    },
    {
      category: "DOSAGE",
      description:
        "For people aged 6 and older only. If symptoms last longer than 1 week or get worse, see a doctor or qualified health care practitioner.",
      source: "emaSummary",
    },
  ],
  symptoms: [
    {
      slug: "colds-and-congestion",
      notes: "Recognized in Europe as a traditional medicine for common cold symptoms; trial evidence for colds is very weak.",
    },
    {
      slug: "cough",
      notes: "May ease acute bronchitis symptoms such as cough (low-quality evidence); a 2026 trial found no clear benefit.",
    },
  ],
});
