import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { ArtBlock } from "@/components/ui/ArtBlock";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { cn } from "@/lib/utils";

interface EditorialSplitProps {
  eyebrow: string;
  title: ReactNode;
  body: string;
  linkHref: string;
  linkLabel: string;
  glyph?: string;
  variant?: "wine" | "ink" | "magenta";
  reverse?: boolean;
  tone?: "ink" | "parchment";
  imageLabel: string;
}

export function EditorialSplit({
  eyebrow,
  title,
  body,
  linkHref,
  linkLabel,
  glyph = "§",
  variant = "wine",
  reverse,
  tone = "ink",
  imageLabel,
}: EditorialSplitProps) {
  const light = tone === "parchment";
  return (
    <Section tone={tone}>
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ClipReveal
            className={cn(
              "aspect-[4/5] rounded-2xl",
              reverse && "lg:order-2",
            )}
          >
            <ParallaxImage className="h-full w-full">
              <ArtBlock glyph={glyph} variant={variant} label={imageLabel} />
            </ParallaxImage>
          </ClipReveal>

          <RevealOnScroll className={cn(reverse && "lg:order-1")}>
            <Eyebrow className={light ? "text-wine" : undefined}>{eyebrow}</Eyebrow>
            <Heading
              size="display-m"
              className={cn("mt-5", light && "[&_em]:text-wine")}
            >
              {title}
            </Heading>
            <p
              className={cn(
                "mt-6 max-w-xl text-body-l",
                light ? "text-black/70" : "text-parchment/70",
              )}
            >
              {body}
            </p>
            <div className="mt-10">
              <Button
                href={linkHref}
                variant="tertiary"
                className={light ? "text-wine" : undefined}
              >
                {linkLabel}
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </Section>
  );
}
