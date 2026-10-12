export interface Principle {
  id: string;
  quote: string;
  label: string;
  detail: string;
}

/**
 * Replaces the template's testimonials. Bar Council rules discourage client
 * testimonials, so these are the advocate's own practice principles.
 */
export const principles: Principle[] = [
  {
    id: "p1",
    quote: "A matter is won or lost on procedure long before the final argument.",
    label: "On procedure",
    detail: "Timely filings, careful drafting, and a clear grip on what the court requires.",
  },
  {
    id: "p2",
    quote: "You should always know where your case stands, and what happens next.",
    label: "On communication",
    detail: "Plain-English updates after every hearing, without legal fog.",
  },
  {
    id: "p3",
    quote: "I will tell you what the law says, even when it is not what you hoped to hear.",
    label: "On honesty",
    detail: "Candid advice on strengths and risks, with no promises of outcomes.",
  },
];
