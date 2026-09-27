import { Reveal } from "@/components/motion";
import { Section, SectionHeading } from "@/components/section";
import { education } from "@/lib/site";

export function Education() {
  return (
    <Section id="education">
      <Reveal>
        <SectionHeading id="education" index="06" title="Education" />
        <ol className="grid list-none gap-4 md:grid-cols-2">
          {education.map((item) => (
            <li key={item.short} className="border border-border p-6">
              <p className="font-mono text-xs text-muted-foreground">
                {item.dates}
              </p>
              <h3 className="mt-4 text-lg font-medium tracking-tight">
                {item.degree}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.school}
              </p>
              <p className="mt-5 font-mono text-xs text-brass">{item.short}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
