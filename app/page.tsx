import Link from "next/link";
import { ShieldCheck, BadgeCheck } from "lucide-react";
import IconTile from "@/components/IconTile";
import HeroSlider from "@/components/HeroSlider";
import { categories } from "@/lib/data";

// Flatten a curated set of popular services across categories for the
// "Most booked services" grid, the way Urban Company mixes categories together.
const mostBooked = [
  { categorySlug: "cleaning", serviceSlug: "deep-cleaning" },
  { categorySlug: "plumbing", serviceSlug: "leak-repair" },
  { categorySlug: "electrical", serviceSlug: "appliance-installation" },
  { categorySlug: "cleaning", serviceSlug: "water-tank-cleaning" },
  { categorySlug: "handyman", serviceSlug: "appliance-repair" },
];

function findService(categorySlug: string, serviceSlug: string) {
  const category = categories.find((c) => c.slug === categorySlug)!;
  const service = category.services.find((s) => s.slug === serviceSlug)!;
  return { category, service };
}

export default function HomePage() {
  return (
    <>
      {/* Quick category grid — mirrors the icon-grid pattern from both references */}
      <section className="max-w-content mx-auto px-6 pt-12 pb-10">
        <h1 className="font-display font-bold text-3xl sm:text-4xl">
          Home services at your doorstep
        </h1>
        <p className="text-ink/60 mt-2">Serving Kochi. Pick what you need done.</p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-8 mt-10">
          {categories.map((category) => (
            <IconTile
              key={category.slug}
              href={`/services/${category.slug}`}
              icon={category.icon}
              label={category.name}
            />
          ))}
          <IconTile
            href="/membership"
            icon={ShieldCheck}
            label="Property Care"
            badge="Popular"
          />
        </div>
      </section>

      {/* Hero banner — auto-playing slider, no search bar */}
      <HeroSlider />

      {/* Trust stats */}
      <section className="max-w-content mx-auto px-6 pt-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Stat value="500+" label="Properties managed" />
          <Stat value="98%" label="Client satisfaction" />
          <Stat value="24h" label="Response time" />
          <Stat value="6" label="Service categories" />
        </div>
      </section>

      {/* Most booked services */}
      <section className="max-w-content mx-auto px-6 py-20">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl">
              Most booked services
            </h2>
            <p className="text-ink/60 mt-2">What people in Kochi book most often.</p>
          </div>
          <Link href="/services" className="text-sm font-medium text-orange-dark underline shrink-0 focus-ring rounded-sm">
            View all services
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-8">
          {mostBooked.map(({ categorySlug, serviceSlug }) => {
            const { category, service } = findService(categorySlug, serviceSlug);
            return (
              <IconTile
                key={service.slug}
                href={`/services/${category.slug}/${service.slug}`}
                icon={service.icon}
                label={service.name}
                caption={`from ₹${service.priceFrom}`}
              />
            );
          })}
        </div>
      </section>

      {/* Categories, in full */}
      <section className="bg-mist border-y border-line">
        <div className="max-w-content mx-auto px-6 py-20">
          <h2 className="font-display font-bold text-2xl sm:text-3xl">Browse by category</h2>
          <p className="text-ink/60 mt-2 mb-10">
            Every category lists individual services with duration and starting price.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryPreview key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Property care teaser */}
      <section className="max-w-content mx-auto px-6 py-20">
        <div className="rounded-3xl border border-line px-8 py-14 sm:px-14 text-center">
          <BadgeCheck size={28} className="mx-auto text-orange-dark" />
          <h2 className="font-display font-bold text-3xl mt-4">
            Not home often? Let us keep watch.
          </h2>
          <p className="text-ink/65 mt-3 max-w-lg mx-auto">
            Our Property Care plans send someone round on a schedule — photo
            reports, appliance checks, and seasonal upkeep included.
          </p>
          <Link
            href="/membership"
            className="inline-flex items-center justify-center rounded-full bg-orange text-paper px-7 py-3.5 text-sm font-semibold hover:bg-orange-dark transition-colors mt-6 focus-ring"
          >
            See Property Care plans
          </Link>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-line bg-mist px-5 py-4 text-center">
      <p className="font-display font-bold text-2xl text-ink">{value}</p>
      <p className="text-xs text-ink/55 mt-1">{label}</p>
    </div>
  );
}

function CategoryPreview({ category }: { category: (typeof categories)[number] }) {
  const Icon = category.icon;
  return (
    <Link
      href={`/services/${category.slug}`}
      className="group flex items-center gap-4 rounded-2xl border border-line bg-paper p-5 hover:border-orange transition-colors focus-ring"
    >
      <div className="h-12 w-12 shrink-0 rounded-xl bg-mist group-hover:bg-orange-light flex items-center justify-center transition-colors">
        <Icon size={22} strokeWidth={1.6} className="text-ink/80 group-hover:text-orange-dark transition-colors" />
      </div>
      <div>
        <p className="font-semibold text-ink">{category.name}</p>
        <p className="text-xs text-ink/50 mt-0.5">
          {category.services.length} services · from ₹
          {Math.min(...category.services.map((s) => s.priceFrom))}
        </p>
      </div>
    </Link>
  );
}
