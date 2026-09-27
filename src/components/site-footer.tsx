import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/section";
import { site } from "@/lib/site";

const links = [
  { href: site.github, label: "GitHub", brand: "github" },
  { href: site.linkedin, label: "LinkedIn", brand: null },
  { href: `mailto:${site.email}`, label: "Email", brand: null },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{site.role}</p>
        </div>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-3">
          {links.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : undefined)}
                >
                  {link.brand ? (
                    <BrandMark id={link.brand} className="size-4" />
                  ) : null}
                  {link.label}
                  {external ? (
                    <span className="sr-only"> (opens in a new tab)</span>
                  ) : null}
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </footer>
  );
}
