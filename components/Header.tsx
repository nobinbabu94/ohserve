"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <header className="border-b border-line bg-paper sticky top-0 z-40">
      <div className="max-w-content mx-auto px-6 h-20 flex items-center justify-between gap-6">
        <Link href="/" className="focus-ring rounded-sm shrink-0">
          <Logo className="h-14 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            // Home should only be active on "/".
            // Other navigation items should also be active
            // on their nested pages, e.g. /services/deep-clean.
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors focus-ring rounded-sm ${
                  isActive
                    ? "text-orange"
                    : "text-ink/70 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
          className="hidden sm:inline-flex items-center rounded-full bg-ink text-paper px-5 py-2.5 text-sm font-semibold hover:bg-orange-dark transition-colors focus-ring"
        >
          Book Now
        </a>

        <Link
          href="/contact"
          className="sm:hidden inline-flex items-center rounded-full bg-ink text-paper px-4 py-2 text-sm font-semibold focus-ring"
        >
          Book
        </Link>
      </div>
    </header>
  );
}
