import { Reveal } from "@/components/motion";
import { Section, SectionHeading } from "@/components/section";
import { focusAreas } from "@/lib/site";

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading id="about" index="01" title="About" />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(240px,0.7fr)] lg:gap-16">
          <div className="max-w-2xl space-y-4 text-[15px] leading-7 text-muted-foreground sm:text-base">
            <p>
              I&apos;m a full-stack developer with two years of hands-on
              experience, focused on backend engineering and AI-powered
              applications. I build the services products depend on: APIs,
              authentication, data access, payments, background jobs, and the
              integrations that connect those systems to language models and
              voice AI.
            </p>
            <p>
              At LyteHire AI I architected the backend for a hiring platform —
              recruiter onboarding, organizations, jobs, candidate pipelines,
              AI interviews, subscriptions, billing, and payments — including a
              real-time voice interview engine with OpenAI, Gemini, Deepgram,
              and ElevenLabs.
            </p>
            <p>
              At Shaurya Soft I developed the backend for a School ERP covering
              visitor management, CRM, HR and payroll, and student management,
              and optimized SQL and schema design, reducing average API
              response time by 30%. Day to day I work in TypeScript with
              Node.js and NestJS, PostgreSQL, Redis, and Docker.
            </p>
          </div>
          <aside className="h-fit border border-border bg-card p-5 sm:p-6">
            <h3 className="font-mono text-xs tracking-[0.08em] text-brass">
              Focus
            </h3>
            <ul className="mt-4 space-y-3">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="border-l border-brass/50 pl-3 text-sm leading-6 text-foreground"
                >
                  {area}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Reveal>
    </Section>
  );
}
