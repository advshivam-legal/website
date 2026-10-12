export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string | null; // TODO(owner): add headshot, e.g. "/images/shivam-singh.jpg"
  bio: string[];
  email: string;
  linkedin: string | null;
}

/** A solo practice: the "team" is one advocate. */
export const team: TeamMember[] = [
  {
    id: "shivam-singh",
    name: "Shivam Singh",
    role: "Advocate · Partner, Justice Craft Attorneys & Consultant LLP",
    image: null,
    bio: [
      "I am an advocate with practical litigation experience in recovery matters, cheque-bounce cases, civil and commercial disputes, and allied areas of administrative, environmental and insolvency law.",
      "I regularly appear before District Courts, Consumer Commissions, the High Court and other tribunals. I have represented NBFCs in personal loan recovery, and handled government and regulatory litigation, which has given me strong drafting skills and a clear understanding of procedural requirements.",
      "I follow a focused, solution-oriented approach: clear advice, careful filings, and no surprises about where your matter stands.",
    ],
    email: "advshivamsingh98@gmail.com",
    linkedin: null,
  },
];

export const skills: string[] = [
  "Litigation strategy & case management",
  "Effective oral & written advocacy",
  "Legal drafting & documentation",
  "Cheque-bounce & recovery practice",
  "Environmental & regulatory litigation",
  "Insolvency practice (NCLT/NCLAT)",
  "Contract review & negotiation",
  "Client relationship management",
];
