"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/section";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    firstLinkRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color] duration-200",
        scrolled || open
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background/50 backdrop-blur-sm",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="text-sm font-medium tracking-tight text-foreground"
        >
          {site.name}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-x-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "size-11 cursor-pointer md:hidden",
          )}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </Container>

      {open ? (
        <nav id={menuId} aria-label="Mobile" className="border-t border-border md:hidden">
          <Container className="py-3">
            <ul className="flex flex-col">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    className="block py-3 text-base text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
