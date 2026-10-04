import Link from "next/link";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import IconTile from "@/components/IconTile";
import HeroSlider from "@/components/HeroSlider";
import { categories } from "@/lib/data";

// Curated cleaning services for the "Most booked services" grid.
const mostBooked = [
  {
    categorySlug: "cleaning",
    serviceSlug: "deep-cleaning",
    img: "/Professional-Living Room-Deep-Clean-kochi-ohserve.webp",
  },
  {
    categorySlug: "cleaning",
    serviceSlug: "kitchen-cleaning",
    img: "/kitchen_cleaning_kochi-ohserve.webp",
  },
  {
    categorySlug: "cleaning",
    serviceSlug: "sofa-cleaning",
    img: "/sofa_upholstery_cleaning-kochi-ohserve.webp",
  },
  {
    categorySlug: "cleaning",
    serviceSlug: "bathroom-cleaning",
    img: "/bathroom_cleaning_kochi-ohserve.webp",
  },
  {
    categorySlug: "cleaning",
    serviceSlug: "water-tank-cleaning",
    img: "/water_tank_cleaning_kochi-ohserve.webp",
  },
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
      <section className="max-w-content mx-auto md:px-6 pt-12 pb-10">
        <h1 className="font-display font-bold text-3xl sm:text-4xl">
          Trusted Home Services at Your Doorstep in Kochi
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
            icon="/property-care-clean.webp"
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
              Most booked cleaning services
            </h2>
            <p className="text-ink/60 mt-2">What people in Kochi book most often.</p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm font-medium text-orange-dark hover:text-orange-dark/80 transition-colors shrink-0 focus-ring rounded-sm"
          >
            View all services
            {/* plain inline SVG arrow — no icon library */}
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-8">
          {mostBooked.map(({ categorySlug, serviceSlug, img }) => {
            const { category, service } = findService(categorySlug, serviceSlug);
            return (
              <Link
                key={service.slug}
                href={`/services/${category.slug}/${service.slug}`}
                className="group flex flex-col items-center text-center focus-ring rounded-2xl"
              >
                <div className="relative h-20 w-20 sm:h-36 sm:w-36 overflow-hidden rounded-2xl bg-mist group-hover:border-orange transition-colors">
                  <Image
                    src={img}
                    alt={service.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-2.5 text-sm font-medium leading-tight">{service.name}</p>
                <p className="text-xs text-ink/50 mt-0.5">from ₹{service.priceFrom}</p>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-line bg-mist px-6 py-6 sm:px-8">
          <p className="text-sm leading-relaxed text-ink/70 max-w-3xl">
            OhServe Solutions is a trusted choice among cleaning companies in Kochi
            for home, deep, kitchen, bathroom, sofa, and water tank cleaning — and
            we also serve Ernakulam and Kakkanad. Not sure if we cover your area?{" "}
            <Link
              href="/contact"
              className="font-medium text-orange-dark underline underline-offset-2 hover:text-orange-dark/80"
            >
              Contact us to check availability
            </Link>
            .
          </p>
        </div>
      </section>



      <section className="max-w-content mx-auto px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Left: copy + stats */}
          <div>
            <h2 className="font-display text-3xl sm:text-4xl leading-[1.15]">
              The team behind every visit
            </h2>
            <p className="text-ink/65 mt-5 max-w-md leading-relaxed">
              Every OhServe professional is trained, background-verified, and
              equipped with their own tools — so whoever shows up at your door
              already knows the job. No guesswork, no borrowed equipment, no
              learning on your time.
            </p>

            <div className="flex flex-wrap gap-8 mt-10">
              <div className="flex items-center gap-3">
                {/* star icon — plain inline SVG */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-ink/70 shrink-0"
                  aria-hidden="true"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <div>
                  <p className="font-display font-bold text-xl leading-none">4.8</p>
                  <p className="text-xs text-ink/55 mt-1">Service Rating*</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* people icon — plain inline SVG */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-ink/70 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <div>
                  <p className="font-display font-bold text-xl leading-none">500+</p>
                  <p className="text-xs text-ink/55 mt-1">Jobs Completed in Kochi*</p>
                </div>
              </div>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-7 py-3.5 text-sm font-semibold hover:bg-orange-dark transition-colors mt-10 focus-ring"
            >
              Book a service
            </Link>
          </div>

          {/* Right: staff photo collage */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[420px] sm:h-[500px]">
            <div className="relative row-span-2 rounded-2xl overflow-hidden bg-mist">
              <Image
                src="/home-cleaning-ohserve-kochi.webp"
                alt="OhServe staff member cleaning a home in Kochi"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-mist">
              <Image
                src="/Professional-Outdoor-Tile -Cleaning-kochi.webp"
                alt="OhServe technician servicing an air conditioner"
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden bg-mist">
                <Image
                  src="/Professional-Window-Cleaning-kochi-ohserve.webp"
                  alt="OhServe staff member repairing a kitchen fixture"
                  fill
                  sizes="(min-width: 768px) 12vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden bg-mist">
                <Image
                  src="/home-deep-cleaning-kochi-ohserve.webp"
                  alt="OhServe electrician at work"
                  fill
                  sizes="(min-width: 768px) 12vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
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
  return (
    <Link
      href={`/services/${category.slug}`}
      className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 hover:border-orange transition-colors focus-ring"
    >
      <div className="h-12 w-12 shrink-0 rounded-xl bg-mist group-hover:bg-orange-light flex items-center justify-center transition-colors">
        <Image
          src={category.icon}
          alt={category.name}
          width={22}
          height={22}
          className="transition-transform group-hover:scale-105"
        />
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
