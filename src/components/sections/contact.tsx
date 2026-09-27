import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { Section, SectionHeading } from "@/components/section";
import { LinkButton } from "@/components/ui/link-button";
import { site } from "@/lib/site";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nikhil-garg-6539911a3",
    href: site.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/nikhil111111",
    href: site.github,
    external: true,
  },
  {
    label: "Phone",
    value: site.phoneDisplay,
    href: site.phoneHref,
    external: false,
  },
] as const;

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <SectionHeading
              id="contact"
              index="07"
              title="Contact"
              className="mb-4 sm:mb-5"
            />
            <p className="max-w-sm text-xl leading-snug tracking-tight text-balance sm:text-2xl">
              Have a project or opportunity? Let&apos;s talk.
            </p>
            <div className="mt-8">
              <LinkButton href={`mailto:${site.email}`}>Contact Me</LinkButton>
            </div>
          </div>
          <ul className="border-t border-border">
            {channels.map((channel) => (
              <li key={channel.label} className="border-b border-border">
                <a
                  href={channel.href}
                  className="group flex items-center justify-between gap-4 py-4"
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : undefined)}
                >
                  <span>
                    <span className="block font-mono text-xs text-brass">
                      {channel.label}
                    </span>
                    <span className="mt-1 block text-sm text-foreground sm:text-base">
                      {channel.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                  {channel.external ? (
                    <span className="sr-only"> (opens in a new tab)</span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
