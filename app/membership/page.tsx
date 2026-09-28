import type { Metadata } from "next";
import PricingCard from "@/components/PricingCard";
import { membershipPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Property Care Plans | OhServe Solutions",
  description:
    "Scheduled property care for homeowners and NRIs in Kochi — Essentials, Premium, and Elite plans.",
};

export default function MembershipPage() {
  return (
    <section className="max-w-content mx-auto px-6 py-16">
      <div className="max-w-xl">
        <h1 className="font-display font-bold text-4xl">Property Care Plans</h1>
        <p className="text-ink/65 mt-4 leading-relaxed">
          Flexible plans built around how often your property needs
          attention — every visit is documented, professional, and thorough.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 mt-12">
        {membershipPlans.map((plan) => (
          <PricingCard key={plan.slug} plan={plan} />
        ))}
      </div>
    </section>
  );
}
