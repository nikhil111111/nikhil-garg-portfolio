import { Reveal } from "@/components/motion";
import { Section, SectionHeading } from "@/components/section";
import { experience } from "@/lib/site";

export function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionHeading
          id="experience"
          index="03"
          title="Experience"
          lede="Production systems for an AI hiring platform, and the backend of a School ERP."
        />
        <ol className="relative list-none space-y-12 border-l border-border">
          {experience.map((job) => (
            <li key={job.company} className="relative pl-6 sm:pl-8">
              <span
                aria-hidden="true"
                className="absolute top-2 left-0 size-2 -translate-x-1/2 rounded-full border border-brass bg-background"
              />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-medium tracking-tight">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{job.role}</p>
                </div>
                <div className="font-mono text-xs leading-5 text-muted-foreground sm:text-right">
                  <p>{job.dates}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              <ul className="mt-4 max-w-3xl space-y-2.5">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="relative pl-3.5 text-[15px] leading-7 text-muted-foreground before:absolute before:top-[0.7em] before:left-0 before:size-1 before:bg-brass/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
