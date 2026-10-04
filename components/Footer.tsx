import Link from "next/link";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/components/Logo";
import { companyInfo, categories } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="max-w-content mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="mb-4">
            {/* <Logo className="h-8 w-auto" variant="light" /> */}
            <Logo
              src="/ohserve-logo-white.png"
              alt="OhServe Solutions"
            />
          </div>
          <p className="text-sm text-paper/60 leading-relaxed">
            Home and office maintenance in {companyInfo.city}, done by
            trained, background-verified professionals.
          </p>
          <div className="flex gap-4 mt-5">
            <a
              href={companyInfo.facebook}
              className="text-paper/60 hover:text-orange focus-ring rounded-sm"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href={companyInfo.instagram}
              className="text-paper/60 hover:text-orange focus-ring rounded-sm"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-paper/50 mb-4">Services</p>
          <ul className="space-y-2.5 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/services/${c.slug}`}
                  className="text-paper/80 hover:text-orange focus-ring rounded-sm"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-paper/50 mb-4">Company</p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/about" className="text-paper/80 hover:text-orange focus-ring rounded-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/membership" className="text-paper/80 hover:text-orange focus-ring rounded-sm">
                Property Care Plans
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-paper/80 hover:text-orange focus-ring rounded-sm">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-paper/50 mb-4">Get in touch</p>
          <ul className="space-y-3 text-sm text-paper/80">
            <li className="flex gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0" />
              <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`} className="focus-ring rounded-sm">
                {companyInfo.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0" />
              <a href={`mailto:${companyInfo.email}`} className="focus-ring rounded-sm">
                {companyInfo.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>{companyInfo.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="max-w-content mx-auto px-6 py-5 text-xs text-paper/50">
          © {new Date().getFullYear()} {companyInfo.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
