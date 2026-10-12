import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of use, disclaimer and privacy information for the website of Shivam Singh, Advocate.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        titleLines={["Terms of", "Service"]}
        intro="Last updated 12 October 2026."
      />
      <section className="bg-ink pb-24 md:pb-32">
        <Container>
          <RevealOnScroll className="prose-editorial mx-auto max-w-3xl">
            <h2>1. About this website</h2>
            <p>
              This website is operated by {siteConfig.name}, Advocate
              (“I”, “me”). By using it you agree to these terms. If you do not
              agree, please do not use the site.
            </p>

            <h2>2. Bar Council of India notice</h2>
            <p>
              The Bar Council of India does not permit advocates to solicit
              work or advertise. This website is provided only to share
              information about my practice at your request. It is not an
              advertisement or solicitation. By proceeding you confirm that you
              are seeking this information of your own accord.
            </p>

            <h2>3. No legal advice, no advocate–client relationship</h2>
            <p>
              Content here, including articles under News, is general
              information about the law. It is not legal advice, and it may be
              out of date or incomplete. Reading the site, sending a message,
              or calling does not create an advocate–client relationship. That
              arises only when I agree to act in writing.
            </p>

            <h2>4. No guarantees</h2>
            <p>
              Nothing on this site promises or predicts the outcome of any
              matter. Past experience described here does not guarantee any
              result.
            </p>

            <h2>5. Enquiries</h2>
            <p>
              Please do not send confidential documents or sensitive details
              through the enquiry form. Messages sent through the site are not
              privileged until an engagement is in place.
            </p>

            <h2>6. Intellectual property</h2>
            <p>
              The text, design and original content of this site belong to me
              unless stated otherwise. You may share links and quote short
              extracts with attribution, but may not copy the site wholesale.
            </p>

            <h2>7. External links</h2>
            <p>
              The site may link to third-party services such as WhatsApp. I am
              not responsible for their content or privacy practices.
            </p>

            <h2>8. Limitation of liability</h2>
            <p>
              To the extent permitted by law, I am not liable for any loss
              arising from reliance on the information on this site.
            </p>

            <h2 id="privacy" className="scroll-mt-28">9. Privacy</h2>
            <p>
              This site does not use analytics or advertising cookies. A small
              note is stored in your browser to remember that you have seen the
              disclaimer.
            </p>
            <p>
              The consultation form does not store your details on a server.
              When you submit it, your details are placed in a pre-filled
              WhatsApp message to my number, and the message is sent only if you
              press send. WhatsApp&apos;s own privacy policy then applies. If
              you email me, I use your details only to respond to you and
              handle your matter, and I do not sell or share them.
            </p>

            <h2>10. Governing law</h2>
            <p>
              These terms are governed by the laws of India. Courts in Delhi
              have exclusive jurisdiction over any dispute arising from the use
              of this site.
            </p>

            <h2>11. Changes</h2>
            <p>
              I may update these terms from time to time. The date at the top
              shows when they last changed.
            </p>

            <h2>12. Contact</h2>
            <p>
              Questions about these terms:{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
