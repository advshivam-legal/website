import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Counter } from "@/components/motion/Counter";
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren";
import { stats } from "@/content/stats";

export function StatsBand() {
  return (
    <Section tone="wine-deep" aria-labelledby="stats-title" className="!py-24 lg:!py-32">
      <Container>
        <h2 id="stats-title" className="sr-only">
          Practice at a glance
        </h2>
        <StaggerChildren className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.id}>
              <Counter
                value={s.value}
                suffix={s.suffix}
                className="block text-display-xl font-light text-magenta"
              />
              <p className="mt-3 text-caption uppercase text-parchment/70">
                {s.caption}
              </p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
