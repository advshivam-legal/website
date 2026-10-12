export interface Forum {
  id: string;
  name: string;
  kind: "Supreme Court" | "High Court" | "Courts" | "Tribunal";
  note: string;
}

/** Courts and forums where the advocate practises (the "locations" of a solo practice). */
export const forums: Forum[] = [
  { id: "sc", name: "Supreme Court of India", kind: "Supreme Court", note: "Appeals and special leave matters" },
  { id: "dhc", name: "Delhi High Court", kind: "High Court", note: "Writs, civil and commercial matters" },
  { id: "dc", name: "District Courts, Delhi NCR", kind: "Courts", note: "Recovery, cheque-bounce and civil suits" },
  { id: "cc", name: "Consumer Commissions", kind: "Tribunal", note: "District, State and National" },
  { id: "ngt", name: "National Green Tribunal", kind: "Tribunal", note: "Environmental compliance and appeals" },
  { id: "cat", name: "Central Administrative Tribunal", kind: "Tribunal", note: "Service and administrative matters" },
  { id: "nclt", name: "NCLT", kind: "Tribunal", note: "Insolvency and company matters" },
  { id: "nclat", name: "NCLAT", kind: "Tribunal", note: "Appeals from the NCLT" },
];

export interface Chamber {
  id: string;
  city: string;
  address: string[]; // TODO(owner): add chamber address
  phone: string;
  email: string;
  hours: string;
  mapEmbedUrl: string | null; // TODO(owner): add a Google Maps embed URL once the address is known
}

export const chambers: Chamber[] = [
  {
    id: "delhi-ncr",
    city: "Delhi NCR",
    address: [],
    phone: "+91 78387 80658",
    email: "advshivamsingh98@gmail.com",
    hours: "By appointment",
    mapEmbedUrl: null,
  },
];
