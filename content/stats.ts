import { siteConfig } from "@/lib/site";

export interface Stat {
  id: string;
  value: number;
  suffix?: string;
  caption: string;
}

function yearsAtTheBar() {
  const start = new Date(siteConfig.enrolledSince);
  const years = (Date.now() - start.getTime()) / (365.25 * 24 * 3600 * 1000);
  return Math.max(1, Math.floor(years));
}

/** Facts drawn only from the CV: no outcomes, no client counts. */
export const stats: Stat[] = [
  { id: "s1", value: yearsAtTheBar(), suffix: "+", caption: "Years at the Bar" },
  { id: "s2", value: 8, caption: "Courts & tribunals" },
  { id: "s3", value: 6, caption: "Areas of practice" },
  { id: "s4", value: 3, caption: "Senior chambers trained under" },
];

export const marqueeItems: string[] = [
  "Cheque Bounce",
  "Money Recovery",
  "Consumer Disputes",
  "Civil & Property",
  "Service Matters",
  "Environmental",
  "Insolvency",
];
