export interface FeeModel {
  id: string;
  title: string;
  summary: string;
  bestFor: string;
  includes: string[];
}

/** Qualitative only: no rupee amounts, per the owner's decision. */
export const feeModels: FeeModel[] = [
  {
    id: "consult",
    title: "Initial consultation",
    summary:
      "A focused conversation about your matter, your documents and your options.",
    bestFor: "Anyone unsure whether, or how, to proceed.",
    includes: [
      "Review of the key documents",
      "Candid view on strengths and risks",
      "Outline of next steps and timelines",
      "Clear explanation of how fees would work",
    ],
  },
  {
    id: "fixed",
    title: "Fixed-scope work",
    summary:
      "A fee agreed up front for a defined piece of work, so you know the cost before we begin.",
    bestFor: "Legal notices, replies, drafting and opinions.",
    includes: [
      "Legal notices and replies",
      "Agreements and affidavits",
      "Written opinions",
      "One round of revisions",
    ],
  },
  {
    id: "appearance",
    title: "Appearance-based",
    summary:
      "Fees tied to the stages and appearances of a case in court or before a tribunal.",
    bestFor: "Litigation with a defined forum and a likely number of hearings.",
    includes: [
      "Pleadings and filings",
      "Appearances at hearings",
      "Regular status updates",
      "Costs explained at each stage",
    ],
  },
  {
    id: "retainer",
    title: "Retainer",
    summary:
      "An ongoing arrangement for clients with recurring legal needs, such as recovery portfolios.",
    bestFor: "NBFCs, small businesses and repeat matters.",
    includes: [
      "Priority access",
      "Batch handling of similar matters",
      "Periodic case reports",
      "A fee structure agreed in writing",
    ],
  },
];

export const feePrinciples: string[] = [
  "Fees depend on the matter. I will tell you the structure before you commit.",
  "No hidden charges: court fees, stamp duty and out-of-pocket costs are explained separately.",
  "No promises of results, and no fee arrangements that depend on a case outcome, in line with Bar Council rules.",
  "Everything agreed is confirmed in writing.",
];
