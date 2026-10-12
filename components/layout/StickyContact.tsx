import { MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site";

/** Mobile-only call + WhatsApp bar. */
export function StickyContact() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-parchment/10 bg-ink/95 backdrop-blur-md lg:hidden">
      <a
        href={siteConfig.phoneHref}
        className="flex items-center justify-center gap-2 py-4 text-sm text-parchment transition-colors hover:text-magenta"
      >
        <Phone className="h-4 w-4" aria-hidden /> Call
      </a>
      <a
        href={whatsappLink("Hello, I would like to book a consultation.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 border-l border-parchment/10 bg-magenta py-4 text-sm font-normal text-black transition-colors hover:bg-magenta-deep"
      >
        <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
      </a>
    </div>
  );
}
