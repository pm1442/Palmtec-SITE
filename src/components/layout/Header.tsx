"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-ink/10 bg-cream/85 backdrop-blur-md shadow-[0_1px_0_rgba(27,23,18,0.04)]"
          : "border-transparent bg-cream"
      }`}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <Link href="#top" className="focus-gold flex items-center gap-2 text-lg font-serif font-medium">
          <span aria-hidden="true">🌴</span>
          <span>
            Palm<span className="text-gold-ink">Tec</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-gold text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#audit">Get your free ad audit</Button>
        </div>

        <button
          type="button"
          className="focus-gold inline-flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
            {menuOpen ? (
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                d="M6 6l12 12M18 6L6 18"
              />
            ) : (
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </Container>

      {menuOpen && (
        <div id="mobile-nav" className="border-t border-ink/10 bg-cream md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="focus-gold rounded-lg px-2 py-2.5 text-sm font-medium text-ink-muted hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Button href="#audit" className="mt-2 justify-center">
              Get your free ad audit
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
