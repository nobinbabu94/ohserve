import type { Metadata } from "next";
import { ShieldCheck, Handshake, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | OhServe Solutions",
  description: "How OhServe Solutions started and what it stands for.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    body: "Every visit is scheduled, confirmed, and shown up for — no chasing required.",
  },
  {
    icon: Award,
    title: "Professionalism",
    body: "Technicians are trained, background-verified, and equipped for the job.",
  },
  {
    icon: Handshake,
    title: "Customer satisfaction",
    body: "If something's not right, we come back and fix it — that's the standard.",
  },
];

export default function AboutPage() {
  return (
    <section className="max-w-content mx-auto px-6 py-16">
      <div className="max-w-2xl">
        <h1 className="font-display font-bold text-4xl">Our story</h1>
        <div className="text-ink/70 mt-5 space-y-4 leading-relaxed">
          <p>
            OhServe Solutions was founded with a simple vision: make home
            maintenance stress-free, reliable, and accessible for everyone.
            Homeowners in Kochi often struggled to find trusted professionals
            for plumbing, electrical work, cleaning, and general repairs —
            that gap is where OhServe started.
          </p>
          <p>
            We built a team of certified experts and invested in a simple
            booking experience, so getting help at home is as easy as picking
            a service and a time.
          </p>
          <p>
            Our mission hasn&apos;t changed since day one: dependable service,
            for every home, whenever it&apos;s needed.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3 mt-14">
        {values.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-2xl border border-line bg-white p-6">
            <Icon size={22} className="text-orange-dark" />
            <p className="font-display font-bold text-lg mt-4">{title}</p>
            <p className="text-sm text-ink/65 mt-2 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
