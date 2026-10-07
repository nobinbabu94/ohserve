"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/Logo";
import { companyInfo } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/maid-services", label: "Maid Services" },
  { href: "/membership", label: "Property Care" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function isActive(href: string) {
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="border-b border-line bg-paper sticky top-0 z-40">
      <div className="max-w-content mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4 sm:gap-6">
        <Link href="/" className="focus-ring rounded-sm shrink-0">
          <Logo className="h-12 sm:h-14 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors focus-ring rounded-sm ${
                  isActive(link.href)
                    ? "text-orange"
                    : "text-ink/70 hover:text-ink"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
          className="hidden sm:inline-flex items-center rounded-full bg-ink text-paper px-5 py-2.5 text-base font-semibold hover:bg-orange-dark transition-colors focus-ring"
        >
          Book Now
        </a>

        {/* <Link
          href="/contact"
          className="sm:hidden inline-flex items-center rounded-full bg-ink text-paper px-4 py-2 text-sm font-semibold focus-ring"
        >
          Book
        </Link> */}

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-mist focus-ring"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!mobileMenuOpen}
        className="md:hidden border-t border-line bg-paper px-4 py-3 sm:px-6"
      >
        <ul className="mx-auto max-w-content">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors focus-ring ${
                  isActive(link.href)
                    ? "bg-orange-light text-orange-dark"
                    : "text-ink/75 hover:bg-mist hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
