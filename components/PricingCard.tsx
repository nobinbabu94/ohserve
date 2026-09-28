import { Check } from "lucide-react";
import type { MembershipPlan } from "@/lib/data";
import { companyInfo } from "@/lib/data";

export default function PricingCard({ plan }: { plan: MembershipPlan }) {
  return (
    <div
      className={`relative rounded-2xl border p-8 flex flex-col ${
        plan.popular
          ? "border-ink bg-ink text-paper"
          : "border-line bg-paper text-ink"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-8 rounded-full bg-orange text-paper text-xs font-semibold px-3 py-1">
          Most popular
        </span>
      )}

      <p className={`text-xs font-medium ${plan.popular ? "text-paper/60" : "text-ink/50"}`}>
        {plan.frequency}
      </p>
      <p className="font-display font-bold text-2xl mt-2">{plan.name}</p>
      <p className={`text-sm mt-2 leading-relaxed ${plan.popular ? "text-paper/75" : "text-ink/65"}`}>
        {plan.audience}
      </p>

      <p className="mt-6">
        <span className="font-display font-bold text-3xl">₹{plan.price.toLocaleString("en-IN")}</span>
        <span className={`text-sm ${plan.popular ? "text-paper/60" : "text-ink/50"}`}> / visit</span>
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {plan.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs rounded-full px-3 py-1 ${
              plan.popular ? "bg-paper/10 text-paper" : "bg-mist text-ink/70"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      <ul className="mt-6 space-y-2.5 text-sm flex-1">
        {plan.includes.map((item) => (
          <li key={item} className="flex gap-2.5">
            <Check
              size={16}
              className={`mt-0.5 shrink-0 ${plan.popular ? "text-orange" : "text-orange-dark"}`}
            />
            <span className={plan.popular ? "text-paper/90" : "text-ink/80"}>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
        className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-ring ${
          plan.popular
            ? "bg-orange hover:bg-orange-dark text-paper"
            : "bg-ink hover:bg-orange-dark text-paper"
        }`}
      >
        Call to subscribe
      </a>
    </div>
  );
}
