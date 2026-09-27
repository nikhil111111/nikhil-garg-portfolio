"use client";

import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type LinkButtonProps = VariantProps<typeof buttonVariants> & {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

export function LinkButton({
  href,
  children,
  external = false,
  className,
  variant = "default",
  size = "lg",
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        buttonVariants({ variant, size }),
        "h-11 cursor-pointer rounded-md px-4",
        className,
      )}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}
