import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import ServiceRow from "@/components/ServiceRow";
import { categories, getCategory } from "@/lib/data";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const category = getCategory(params.category);
  if (!category) return {};
  return {
    title: `${category.name} in Kochi | OhServe Solutions`,
    description: category.description,
  };
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = getCategory(params.category);
  if (!category) notFound();

  return (
    <section className="max-w-content mx-auto px-6 py-16">
      <Link
        href="/services"
        className="inline-flex items-center gap-1.5 text-sm text-ink/60 hover:text-ink focus-ring rounded-sm"
      >
        <ChevronLeft size={16} />
        All services
      </Link>

      <h1 className="font-display text-4xl mt-4">{category.name}</h1>
      <p className="text-ink/65 mt-3 max-w-xl">{category.description}</p>

      {category.slug === "cleaning" && (
        <section className="mt-10" aria-labelledby="cleaning-types-heading">
          <h2
            id="cleaning-types-heading"
            className="font-display text-2xl font-bold"
          >
            Home and office cleaning in Kochi
          </h2>
          <p className="mt-2 max-w-2xl text-ink/65">
            Choose the cleaning service that fits your space. Explore home
            cleaning or office cleaning in Kochi, then tell us what you need.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <CleaningTypeCard
              href="/services/cleaning/home-cleaning"
              image="/home-cleaning-ohserve-kochi.webp"
              imageAlt="Home cleaning service in Kochi"
              title="Home Cleaning"
              description="Cleaning for apartments, independent houses, and villas across Kochi."
            />
            <CleaningTypeCard
              href="/services/cleaning/office-cleaning"
              image="/Home and office cleaning service.jpg"
              imageAlt="Home and office cleaning service"
              title="Office Cleaning"
              description="Cleaning for offices and workspaces, with scope arranged for your needs."
            />
          </div>
        </section>
      )}

      {category.slug === "cleaning" && (
        <h2 className="font-display text-2xl font-bold mt-12">
          Cleaning services
        </h2>
      )}
      <div
        className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-3 ${
          category.slug === "cleaning" ? "mt-6" : "mt-10"
        }`}
      >
        {category.services.map((service) => (
          <ServiceRow
            key={service.slug}
            categorySlug={category.slug}
            service={service}
          />
        ))}
      </div>
    </section>
  );
}

function CleaningTypeCard({
  href,
  image,
  imageAlt,
  title,
  description,
}: {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border border-line bg-white transition-colors hover:border-orange focus-ring"
    >
      <div className="relative aspect-[16/8] overflow-hidden bg-mist">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/65">
          {description}
        </p>
        <span className="mt-4 inline-flex text-sm font-semibold text-orange-dark">
          Explore {title.toLowerCase()} in Kochi
        </span>
      </div>
    </Link>
  );
}
