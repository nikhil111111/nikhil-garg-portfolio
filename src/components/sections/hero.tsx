"use client";

import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import { useRef, type PointerEvent } from "react";
import { BrandMark } from "@/components/brand-mark";
import { PORTRAIT_ALT, PORTRAIT_SRC } from "@/components/sections/portrait";
import { LinkButton } from "@/components/ui/link-button";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const proof = [
  "2 years experience",
  "Production APIs",
  "AI integrations",
  "Async processing",
];

const particles = [
  { left: "14%", top: "24%", size: 2, delay: 0 },
  { left: "28%", top: "68%", size: 1.5, delay: 0.6 },
  { left: "62%", top: "18%", size: 2, delay: 0.2 },
  { left: "78%", top: "58%", size: 1.5, delay: 0.9 },
  { left: "48%", top: "12%", size: 1, delay: 0.4 },
  { left: "88%", top: "32%", size: 1.5, delay: 0.3 },
  { left: "36%", top: "42%", size: 1, delay: 1.1 },
  { left: "70%", top: "78%", size: 2, delay: 0.7 },
];

const rise = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const spring = { stiffness: 70, damping: 18, mass: 0.6 };
  const sx = useSpring(pointerX, spring);
  const sy = useSpring(pointerY, spring);
  const glowX = useTransform(sx, [-0.5, 0.5], ["60%", "84%"]);
  const glowY = useTransform(sy, [-0.5, 0.5], ["30%", "58%"]);

  function onPointerMove(event: PointerEvent<HTMLElement>) {
    if (reduce || event.pointerType !== "mouse") return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="top"
      ref={sectionRef}
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      className="relative overflow-hidden"
    >
      <HeroAtmosphere reduce={!!reduce} glowX={glowX} glowY={glowY} />

      <div className="relative mx-auto grid max-w-[90rem] lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div className="order-1 flex flex-col justify-center px-5 pt-16 pb-8 sm:px-8 sm:pt-20 lg:col-start-1 lg:row-start-1 lg:py-12 lg:pr-4 lg:pb-4 lg:pl-[max(2rem,calc((100vw-72rem)/2+2rem))]">
          <HeroCopy reduce={!!reduce} />
        </div>

        <PortraitStage reduce={!!reduce} />

        <div className="order-3 px-5 pb-14 sm:px-8 lg:col-start-1 lg:row-start-2 lg:pt-0 lg:pr-8 lg:pb-12 lg:pl-[max(2rem,calc((100vw-72rem)/2+2rem))]">
          <div className="max-w-md">
            <SpecCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroAtmosphere({
  reduce,
  glowX,
  glowY,
}: {
  reduce: boolean;
  glowX: MotionValue<string>;
  glowY: MotionValue<string>;
}) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-grid opacity-80 [mask-image:radial-gradient(ellipse_at_72%_42%,black,transparent_74%)]" />
      <motion.div
        className="absolute size-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          left: reduce ? "72%" : glowX,
          top: reduce ? "42%" : glowY,
          background:
            "radial-gradient(circle, oklch(0.8 0.055 78 / 0.22), transparent 68%)",
        }}
      />
      <div className="absolute top-[12%] right-[-6%] size-[24rem] rounded-full bg-white/[0.035] blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      {reduce
        ? null
        : particles.map((particle) => (
            <motion.span
              key={`${particle.left}-${particle.top}`}
              className="absolute rounded-full bg-brass/70"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
              }}
              animate={{ y: [0, -12, 0], opacity: [0.15, 0.55, 0.15] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
            />
          ))}
    </div>
  );
}

function HeroCopy({ reduce }: { reduce: boolean }) {
  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
      }}
    >
      <motion.p
        variants={rise}
        className="font-mono text-sm tracking-wide text-brass"
      >
        {site.name}
      </motion.p>
      <motion.div
        variants={rise}
        className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px] text-muted-foreground sm:text-xs"
      >
        <span className="whitespace-nowrap">
          Full-Stack Developer{" "}
          <span aria-hidden="true" className="text-foreground/25">
            /
          </span>
        </span>
        <span className="whitespace-nowrap">
          Backend Engineer{" "}
          <span aria-hidden="true" className="text-foreground/25">
            /
          </span>
        </span>
        <span>AI Systems</span>
      </motion.div>
      <motion.h1
        variants={rise}
        className="mt-5 max-w-xl text-[2.05rem] leading-[1.04] font-medium tracking-[-0.04em] hyphens-none sm:text-5xl lg:text-[3.25rem]"
      >
        <span className="block">Full-Stack Developer</span>
        <span className="block">& Backend Engineer</span>
        <span className="mt-3 block text-[0.58em] font-normal tracking-[-0.03em] text-muted-foreground">
          building AI{"\u2011"}powered systems.
        </span>
      </motion.h1>
      <motion.p
        variants={rise}
        className="mt-5 max-w-md text-[15px] leading-7 text-muted-foreground sm:text-base"
      >
        Two years of real-world engineering across scalable backend systems,
        AI integrations, and production APIs — services that have to hold up
        after they ship.
      </motion.p>
      <motion.div
        variants={rise}
        className="mt-8 flex flex-wrap items-center gap-3"
      >
        <LinkButton href="#projects">View Projects</LinkButton>
        <LinkButton href="#contact" variant="outline">
          Contact Me
        </LinkButton>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center gap-2 px-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <BrandMark id="github" className="size-4" />
          GitHub
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center gap-2 px-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          LinkedIn
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </motion.div>
      <motion.ul
        variants={rise}
        className="mt-8 flex flex-wrap font-mono text-xs text-muted-foreground"
      >
        {proof.map((item) => (
          <li
            key={item}
            className="whitespace-nowrap after:mx-3 after:text-foreground/25 after:content-['/'] last:after:mx-0 last:after:content-none"
          >
            {item}
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

function PortraitStage({ reduce }: { reduce: boolean }) {
  return (
    <div className="order-2 flex justify-center px-5 pb-6 sm:px-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:justify-end lg:px-6 lg:py-10 xl:pr-14">
      <motion.div
        className="flex w-full max-w-md items-stretch gap-3.5 sm:gap-5 lg:w-auto lg:max-w-none"
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease }}
      >
        <div className="flex w-4 shrink-0 flex-col items-center pt-1 sm:w-5">
          <span className="font-mono text-[10px] tracking-[0.22em] text-brass [writing-mode:vertical-rl]">
            AI SYSTEMS
          </span>
          <span
            aria-hidden="true"
            className="mt-4 w-px flex-1 bg-gradient-to-b from-brass/75 via-white/20 to-transparent"
          />
        </div>
        <div className="relative min-w-0">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(ellipse_at_center,oklch(0.8_0.055_78/0.13),transparent_68%)]"
          />
          <Image
            src={PORTRAIT_SRC}
            alt={PORTRAIT_ALT}
            width={584}
            height={730}
            priority
            sizes="(min-width: 1280px) 32rem, (min-width: 1024px) 40vw, (min-width: 640px) 24rem, 86vw"
            className="h-auto w-full shadow-[0_32px_70px_-42px_rgba(0,0,0,0.9)] lg:h-auto lg:max-h-[min(76svh,42rem)] lg:w-auto lg:max-w-[min(40vw,32rem)]"
          />
        </div>
      </motion.div>
    </div>
  );
}

function SpecCard() {
  return (
    <aside
      aria-label="Engineering profile"
      className="border border-white/12 bg-background/55 p-4 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-5"
    >
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <span className="font-mono text-[11px] text-muted-foreground">
          profile.ts
        </span>
        <span className="font-mono text-[11px] text-brass">production</span>
      </div>
      <dl className="mt-3 grid grid-cols-1 gap-2 font-mono text-[12px] leading-5 min-[420px]:grid-cols-2 min-[420px]:gap-x-5">
        <SpecItem term="experience" value="2 years · production" />
        <SpecItem term="focus" value="backend · full-stack · AI" />
        <SpecItem term="stack" value="NestJS · PostgreSQL" />
        <SpecItem term="voice AI" value="OpenAI · Gemini" />
        <SpecItem term="recent" value="LyteHire AI" />
        <SpecItem term="deploy" value="Docker · Cloud Run" />
      </dl>
    </aside>
  );
}

function SpecItem({ term, value }: { term: string; value: string }) {
  return (
    <div className="grid grid-cols-[5rem_1fr] gap-2">
      <dt className="text-muted-foreground">{term}</dt>
      <dd>{value}</dd>
    </div>
  );
}
