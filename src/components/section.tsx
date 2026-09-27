import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "scroll-mt-20 border-t border-border py-20 sm:py-28",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  id,
  index,
  title,
  lede,
  className,
}: {
  id: string;
  index: string;
  title: string;
  lede?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10 max-w-2xl sm:mb-14", className)}>
      <p className="mb-3 font-mono text-xs tracking-[0.08em] text-brass">
        {index}
      </p>
      <h2
        id={`${id}-heading`}
        className="text-[1.65rem] font-medium tracking-[-0.03em] text-balance sm:text-[1.9rem]"
      >
        {title}
      </h2>
      {lede ? (
        <p className="mt-3 max-w-xl text-[15px] leading-7 text-muted-foreground sm:text-base">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
