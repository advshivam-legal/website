export interface Service {
  id: string;
  number: string;
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  icon: "FileWarning" | "Scale" | "Home" | "Landmark" | "Leaf" | "Gavel";
  forums: string[];
  typicalMatters: string[];
}

export const services: Service[] = [
  {
    id: "cheque-bounce",
    number: "01",
    title: "Cheque Bounce & Money Recovery",
    slug: "cheque-bounce-recovery",
    icon: "FileWarning",
    excerpt:
      "Legal notices, Section 138 complaints, summary suits and execution, from the first demand to the final recovery.",
    description:
      "A dishonoured cheque starts a clock. The notice, the waiting period and the complaint each have a deadline, and missing one can end the case. I handle complaints under Section 138 of the Negotiable Instruments Act, money recovery suits, and the execution and attachment proceedings that follow a decree.",
    forums: ["Magistrate Courts", "District Courts", "Delhi High Court"],
    typicalMatters: [
      "Legal demand notices and replies",
      "Section 138 NI Act complaints and defence",
      "Money recovery and summary suits",
      "Execution, attachment and settlement",
    ],
  },
  {
    id: "consumer",
    number: "02",
    title: "Consumer Disputes",
    slug: "consumer-disputes",
    icon: "Scale",
    excerpt:
      "Complaints against builders, banks, insurers and service providers before the Consumer Commissions.",
    description:
      "When a product fails or a service falls short, the Consumer Protection Act gives you a quicker, cheaper route than a civil suit. I prepare and argue complaints for deficiency of service, unfair trade practices and defective goods, and defend them where needed.",
    forums: ["District Consumer Commissions", "State Commission", "NCDRC"],
    typicalMatters: [
      "Deficiency in service",
      "Delayed possession and builder disputes",
      "Insurance and banking claims",
      "Defective goods and refunds",
    ],
  },
  {
    id: "civil-property",
    number: "03",
    title: "Civil & Property Disputes",
    slug: "civil-property-disputes",
    icon: "Home",
    excerpt:
      "Title, possession, tenancy and contract disputes, with careful pleadings and steady follow-through.",
    description:
      "Civil cases are won on documents and procedure. I draft pleadings, written statements and applications with care, build the record patiently, and keep you informed at every hearing.",
    forums: ["District Courts", "Delhi High Court"],
    typicalMatters: [
      "Property and possession disputes",
      "Tenancy and eviction",
      "Contract and commercial claims",
      "Injunctions and declarations",
    ],
  },
  {
    id: "service-admin",
    number: "04",
    title: "Service & Administrative Matters",
    slug: "service-administrative-matters",
    icon: "Landmark",
    excerpt:
      "Writ petitions and service disputes involving public authorities and government departments.",
    description:
      "Disputes with a public body turn on statute, policy and procedure. I draft and argue writ petitions and service matters, and have worked on government-side compliance and policy-based submissions, so I know how departments record and respond.",
    forums: ["Central Administrative Tribunal", "High Court", "Supreme Court"],
    typicalMatters: [
      "Service and promotion disputes",
      "Writ petitions against public authorities",
      "Policy and statutory interpretation",
      "Departmental and compliance submissions",
    ],
  },
  {
    id: "environmental",
    number: "05",
    title: "Environmental & Regulatory",
    slug: "environmental-regulatory",
    icon: "Leaf",
    excerpt:
      "Environmental compliance, pollution-control matters and regulatory proceedings before the NGT.",
    description:
      "Environmental cases combine technical records with strict statutory duties. I have prepared compliance reports, status reports and pleadings in matters before the National Green Tribunal, including those involving pollution control boards and district administrations.",
    forums: ["National Green Tribunal", "High Court", "Supreme Court"],
    typicalMatters: [
      "Pollution-control compliance",
      "NGT applications and appeals",
      "Compliance and status reports",
      "Regulatory notices and responses",
    ],
  },
  {
    id: "insolvency",
    number: "06",
    title: "Insolvency & Bankruptcy",
    slug: "insolvency-bankruptcy",
    icon: "Gavel",
    excerpt:
      "Proceedings under the Insolvency and Bankruptcy Code before the NCLT and NCLAT.",
    description:
      "Insolvency proceedings run on tight timelines and exact filings. I have appeared and filed reports before the NCLT and NCLAT, including on behalf of Resolution Professionals, and drafted applications under the Insolvency and Bankruptcy Code.",
    forums: ["NCLT", "NCLAT"],
    typicalMatters: [
      "IBC applications and replies",
      "Reports for Resolution Professionals",
      "Appeals before the NCLAT",
      "Creditor and debtor strategy",
    ],
  },
];
