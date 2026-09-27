import {
  Braces,
  Database,
  GitBranch,
  Layers,
  Waypoints,
  type LucideIcon,
} from "lucide-react";
import type { CSSProperties } from "react";
import { BrandMark, brandHex } from "@/components/brand-mark";
import { Reveal } from "@/components/motion";
import { Section, SectionHeading } from "@/components/section";
import { techGroups, type TechItem } from "@/lib/site";

const lucideIcons: Record<NonNullable<TechItem["lucide"]>, LucideIcon> = {
  database: Database,
  braces: Braces,
  layers: Layers,
  waypoints: Waypoints,
  "git-branch": GitBranch,
};

export function TechStack() {
  return (
    <Section id="stack">
      <Reveal>
        <SectionHeading
          id="stack"
          index="02"
          title="Tech Stack"
          lede="The tools I use to design APIs, move work off the request path, and ship services."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {techGroups.map((group) => (
            <article
              key={group.label}
              className={`border border-border bg-card/40 p-5 sm:p-6 ${
                group.label === "Tools" ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="font-mono text-xs tracking-[0.08em] text-brass">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <TechChip item={item} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

function TechChip({ item }: { item: TechItem }) {
  const hex = item.brand ? brandHex(item.brand) : undefined;
  const Lucide = item.lucide ? lucideIcons[item.lucide] : null;

  return (
    <span
      className="tech-chip inline-flex items-center gap-2 rounded-md border border-border bg-background px-2.5 py-1.5 text-sm text-foreground"
      style={hex ? ({ "--mark": `#${hex}` } as CSSProperties) : undefined}
    >
      {item.brand ? (
        <span className="tech-mark">
          <BrandMark id={item.brand} className="size-3.5" />
        </span>
      ) : null}
      {Lucide ? (
        <Lucide className="size-3.5 text-muted-foreground" aria-hidden="true" />
      ) : null}
      {item.mark ? (
        <span
          aria-hidden="true"
          className="grid h-4 min-w-4 place-items-center px-0.5 font-mono text-[8px] leading-none tracking-tight text-muted-foreground"
        >
          {item.mark}
        </span>
      ) : null}
      {item.name}
    </span>
  );
}
