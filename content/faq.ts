export interface Faq {
  id: string;
  question: string;
  answer: string;
  category: "Working together" | "Cheque bounce & recovery" | "Consumer & civil" | "Fees & process";
}

export const faqs: Faq[] = [
  {
    id: "f1",
    category: "Working together",
    question: "How do I start?",
    answer:
      "Send a short message through the Book a Consult form, or call or WhatsApp directly. Tell me briefly what has happened and which documents you hold. I will reply to arrange a time to speak.",
  },
  {
    id: "f2",
    category: "Working together",
    question: "Can we speak before I decide to hire you?",
    answer:
      "Yes. An initial consultation is the point where I understand your matter, tell you honestly what the law says and what the options are, and explain how fees would work. You decide afterwards.",
  },
  {
    id: "f3",
    category: "Working together",
    question: "Which courts do you appear in?",
    answer:
      "District Courts, Consumer Commissions, the Delhi High Court, and tribunals including the NGT, the CAT, the NCLT and the NCLAT, as well as the Supreme Court of India. The Locations page lists them.",
  },
  {
    id: "f4",
    category: "Working together",
    question: "Will you tell me the likely outcome of my case?",
    answer:
      "I will tell you how strong or weak I think your case is and why. I will not promise a result. No honest advocate can, and the Bar Council rules do not allow it.",
  },
  {
    id: "f5",
    category: "Cheque bounce & recovery",
    question: "My cheque bounced. What is the deadline for a legal notice?",
    answer:
      "Under Section 138 of the Negotiable Instruments Act, the demand notice must be sent within 30 days of receiving information of the dishonour from the bank. Do not wait. Read the article on this under News, and speak to an advocate quickly.",
  },
  {
    id: "f6",
    category: "Cheque bounce & recovery",
    question: "Is a cheque-bounce case a criminal or a civil matter?",
    answer:
      "A Section 138 complaint is a criminal proceeding, but it is aimed mainly at securing payment. A civil suit for recovery can also be filed on the same debt. Which route, or both, suits you depends on the facts.",
  },
  {
    id: "f7",
    category: "Cheque bounce & recovery",
    question: "I received a cheque-bounce notice. What should I do?",
    answer:
      "Do not ignore it. Note the date you received it, because the 15-day payment window runs from then. Gather your records, and get advice on a reply before the window closes.",
  },
  {
    id: "f8",
    category: "Cheque bounce & recovery",
    question: "I won a decree. How do I actually get the money?",
    answer:
      "Through execution proceedings. The court can attach bank accounts, salary or property. It takes patience, and good records of the other side's assets help considerably.",
  },
  {
    id: "f9",
    category: "Consumer & civil",
    question: "What disputes can go to a Consumer Commission?",
    answer:
      "Defective goods, deficiency in service, unfair trade practices and overcharging. Typical cases involve builders, banks, insurers, telecom and e-commerce providers.",
  },
  {
    id: "f10",
    category: "Consumer & civil",
    question: "Do I always need a lawyer for a consumer complaint?",
    answer:
      "No. You can file yourself. A well-drafted complaint and a properly argued case still make a real difference, especially in larger or contested matters.",
  },
  {
    id: "f11",
    category: "Consumer & civil",
    question: "How long will my case take?",
    answer:
      "It depends on the forum, the other side's conduct and the court's calendar. I will give you a realistic range at the start, rather than an optimistic one, and update you as it moves.",
  },
  {
    id: "f12",
    category: "Fees & process",
    question: "How do you charge?",
    answer:
      "Depending on the matter: a fee for the consultation, a fee per appearance, a fixed fee for defined work such as a notice or reply, or a retainer for ongoing work. I explain the structure before you commit. See the Fees page.",
  },
  {
    id: "f13",
    category: "Fees & process",
    question: "Which documents should I bring to the first meeting?",
    answer:
      "Anything in writing about the dispute: agreements, cheques and bank memos, invoices, notices, emails, messages and earlier court orders. A short timeline of events is very helpful.",
  },
  {
    id: "f14",
    category: "Fees & process",
    question: "Is my conversation confidential?",
    answer:
      "Yes. What you tell an advocate for the purpose of seeking advice is protected by professional confidentiality.",
  },
];
