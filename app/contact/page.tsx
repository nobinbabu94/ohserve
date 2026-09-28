import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Book | OhServe Solutions",
  description: "Get in touch or book a service with OhServe Solutions, Kochi.",
};

export default function ContactPage() {
  return (
    <section className="max-w-content mx-auto px-6 py-16">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h1 className="font-display font-bold text-4xl">Get in touch</h1>
          <p className="text-ink/65 mt-4 leading-relaxed max-w-sm">
            Call us directly for urgent jobs, or send a request below and
            we&apos;ll confirm a slot.
          </p>

          <ul className="space-y-5 mt-8">
            <li className="flex gap-3">
              <Phone size={18} className="text-orange-dark mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-ink/50">Phone</p>
                <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`} className="text-ink focus-ring rounded-sm">
                  {companyInfo.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-orange-dark mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-ink/50">Email</p>
                <a href={`mailto:${companyInfo.email}`} className="text-ink focus-ring rounded-sm">
                  {companyInfo.email}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <MapPin size={18} className="text-orange-dark mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-ink/50">Address</p>
                <p className="text-ink">{companyInfo.address}</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-line bg-white p-8">
          <p className="font-display font-bold text-xl mb-1">Request a booking</p>
          <p className="text-sm text-ink/60 mb-6">
            Tell us what you need — we&apos;ll call or WhatsApp to confirm.
          </p>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
