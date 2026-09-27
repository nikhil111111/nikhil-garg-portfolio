import {
  AudioLines,
  Cloud,
  CreditCard,
  Database,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Stagger } from "@/components/motion";
import { Section, SectionHeading } from "@/components/section";
import { highlights } from "@/lib/site";

const icons: Record<(typeof highlights)[number]["icon"], LucideIcon> = {
  server: Server,
  audio: AudioLines,
  workflow: Workflow,
  shield: ShieldCheck,
  card: CreditCard,
  database: Database,
  cloud: Cloud,
};

export function Highlights() {
  return (
    <Section id="engineering">
      <SectionHeading
        id="engineering"
        index="05"
        title="Engineering"
        lede="The work I take through to production — capabilities, not a scorecard."
      />
      <Stagger className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {highlights.map((item) => {
          const Icon = icons[item.icon];
          return (
            <article key={item.title} className="h-full border border-border p-5 sm:p-6">
              <Icon className="size-4 text-brass" aria-hidden="true" />
              <h3 className="mt-4 text-base font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.body}
              </p>
            </article>
          );
        })}
      </Stagger>
    </Section>
  );
}
