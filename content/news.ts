export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  author: string;
  glyph: string;
  body: string[]; // paragraphs; "## " prefix = subheading, "- " prefix = bullet
}

/**
 * General-information explainers. DRAFTS for the advocate's review before
 * publishing: verify every statute reference and threshold against current law.
 */
export const news: Article[] = [
  {
    id: "n1",
    slug: "cheque-bounced-what-to-do",
    title: "Your cheque bounced: the first 30 days",
    excerpt:
      "A dishonoured cheque starts a strict timeline. Here is what the Negotiable Instruments Act expects, and when.",
    category: "Cheque Bounce",
    date: "2026-09-18",
    author: "Shivam Singh",
    glyph: "§",
    body: [
      "When a cheque is returned unpaid, most people's first instinct is to call the other side. That is fine, but the law runs on its own clock, and the clock has already started.",
      "## The notice",
      "Under Section 138 of the Negotiable Instruments Act, 1881, the payee must send a written demand notice to the drawer within 30 days of receiving information from the bank that the cheque was returned. The notice should state the cheque details and demand payment of the amount.",
      "## The waiting period",
      "The drawer then has 15 days from receiving the notice to pay. If payment is made in that window, the offence is not made out.",
      "## The complaint",
      "If the drawer does not pay, the payee has one month after the 15 days expire to file a criminal complaint before the court of competent jurisdiction. Courts can condone delay in some circumstances, but that is never something to plan on.",
      "## Why paperwork matters",
      "Keep the original cheque, the bank's return memo, the notice, and the postal or courier proof of delivery. These are the backbone of the case.",
      "This is general information and not legal advice. Every matter turns on its own facts, so speak to an advocate before acting.",
    ],
  },
  {
    id: "n2",
    slug: "filing-a-consumer-complaint",
    title: "How to file a consumer complaint, step by step",
    excerpt:
      "Defective product, delayed flat or a refused insurance claim? A plain-English guide to the Consumer Commissions.",
    category: "Consumer",
    date: "2026-08-27",
    author: "Shivam Singh",
    glyph: "¶",
    body: [
      "The Consumer Protection Act, 2019 was designed so that an ordinary person can seek a remedy without a heavy legal process. It is still worth doing carefully.",
      "## Before you file",
      "- Write to the seller or service provider first, and keep a copy.",
      "- Collect invoices, receipts, agreements, emails and photographs.",
      "- Note the date the problem arose, since complaints must be filed within a limitation period from the cause of action.",
      "## Where to file",
      "Complaints go to the District, State or National Commission, depending on the value of the goods or services paid as consideration. The thresholds are set by government rules and have changed before, so check the current figures.",
      "## What to ask for",
      "A complaint can seek a refund, replacement, removal of the defect, compensation for loss and mental agony, and costs. Be specific, since vague relief is harder to grant.",
      "This is general information and not legal advice.",
    ],
  },
  {
    id: "n3",
    slug: "recovering-money-through-courts",
    title: "Recovering money through the courts: suit, decree, execution",
    excerpt:
      "Winning a decree is only half the journey. How recovery suits and execution proceedings actually work.",
    category: "Recovery",
    date: "2026-07-30",
    author: "Shivam Singh",
    glyph: "₹",
    body: [
      "Money owed under a loan, a written promise or an unpaid invoice can usually be recovered through a civil suit. In suitable cases, a summary procedure under Order XXXVII of the Code of Civil Procedure lets the court move faster.",
      "## Limitation",
      "A suit for recovery of money generally has to be filed within three years of the cause of action. Acknowledgements in writing can extend this, but it is risky to rely on that.",
      "## After the decree",
      "A decree is an order, not a payment. To turn it into money you file execution proceedings, which can include attachment of bank accounts, salary or property.",
      "## Settlement",
      "Many recovery matters settle once the other side sees a credible, well-documented case. Settlement terms should always be recorded in writing, and ideally before the court.",
      "This is general information and not legal advice.",
    ],
  },
  {
    id: "n4",
    slug: "approaching-the-ngt",
    title: "Approaching the National Green Tribunal: what to know",
    excerpt:
      "Pollution, illegal construction or damage to a water body? A short primer on how the NGT works.",
    category: "Environmental",
    date: "2026-06-12",
    author: "Shivam Singh",
    glyph: "◊",
    body: [
      "The National Green Tribunal, set up under the National Green Tribunal Act, 2010, hears civil cases about environmental protection and the enforcement of environmental legal rights.",
      "## What it can hear",
      "The NGT deals with substantial questions relating to the environment under the statutes listed in the Act's schedule, such as the Water, Air and Environment Protection Acts.",
      "## Limitation",
      "The Act sets short limitation periods, which can be extended only within limits. If you are considering an application or appeal, move early.",
      "## Evidence",
      "Environmental matters are record-driven. Photographs with dates, inspection reports, authority correspondence and earlier orders all carry weight.",
      "This is general information and not legal advice.",
    ],
  },
];
