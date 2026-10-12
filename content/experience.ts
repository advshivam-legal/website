export interface Experience {
  id: string;
  period: string;
  role: string;
  organisation: string;
  note?: string;
  points: string[];
}

/** Work history, most recent first. Sourced from the CV. */
export const experience: Experience[] = [
  {
    id: "justice-craft",
    period: "Sept 2024 – Present",
    role: "Partner",
    organisation: "Justice Craft Attorneys & Consultant LLP",
    points: [
      "Advice and representation on regulatory compliance, statutory interpretation and public-authority matters.",
      "Cross-examination and final arguments in trial and appellate courts.",
      "Disputes involving public bodies, regulators, cheque dishonour, recovery and property.",
      "Supervises drafting of affidavits, compliance reports and written submissions.",
    ],
  },
  {
    id: "swami",
    period: "Sept 2024 – Aug 2025",
    role: "Senior Associate",
    organisation: "Chambers of Adv. Priyanka Swami",
    note: "Standing Counsel, State of U.P. & Senior Panel Counsel, Government of India. NGT · CAT · Supreme Court.",
    points: [
      "Counter-affidavits, compliance reports and policy-based responses for the State of Uttar Pradesh.",
      "Matters before the National Green Tribunal, the Central Administrative Tribunal and the Supreme Court.",
      "Compliance and status reports under the New Mission for Clean Ganga.",
    ],
  },
  {
    id: "gupta",
    period: "Sept 2023 – Aug 2024",
    role: "Associate",
    organisation: "Chambers of Adv. Bharat Gupta",
    note: "DDA Panel Lawyer. Delhi High Court, District Courts & Tribunals.",
    points: [
      "Appearances before trial courts, consumer forums, NCLT, NCLAT, the Delhi High Court and the Supreme Court.",
      "NBFC personal loan recovery: money suits, Section 138 NI Act complaints, execution and attachment.",
      "Reports for Resolution Professionals before the NCLAT in insolvency proceedings.",
    ],
  },
  {
    id: "dhiman",
    period: "Apr 2023 – Aug 2023",
    role: "Associate",
    organisation: "Chambers of Adv. Arun Dhiman",
    note: "Central Government Standing Counsel. High Court, District Courts & Tribunals.",
    points: [
      "Civil and commercial litigation before High Courts, NCLT, NCLAT and trial courts.",
      "Pleadings under the Insolvency and Bankruptcy Code, writ petitions and statutory applications.",
      "Legal notices, arbitration pleadings and miscellaneous applications.",
    ],
  },
];
