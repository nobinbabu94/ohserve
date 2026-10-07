import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
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
  if (category.slug === "cleaning") {
    return {
      title: "Home & Office Cleaning Services in Kochi | OhServe Solutions",
      description:
        "Explore home cleaning and office cleaning services in Kochi, including deep cleaning, kitchen, bathroom, sofa, and water tank cleaning. Request a booking with OhServe Solutions.",
      alternates: {
        canonical: "https://www.ohserve.com/services/cleaning",
      },
      openGraph: {
        title: "Home & Office Cleaning Services in Kochi | OhServe Solutions",
        description:
          "Book home or office cleaning in Kochi, or explore specialist cleaning services with OhServe Solutions.",
        url: "https://www.ohserve.com/services/cleaning",
        type: "website",
      },
    };
  }
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

      {category.slug === "cleaning" ? (
        <>
          <h2 className="mt-10 font-display text-2xl font-bold">
            Home, office, and specialist cleaning in Kochi
          </h2>
          <p className="mt-2 max-w-2xl text-ink/65">
            Choose a service to see details, coverage, and booking information.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <CleaningTypeCard
              href="/services/cleaning/home-cleaning"
              image="/home-cleaning-ohserve-kochi-1.webp"
              imageAlt="Home cleaning service in Kochi"
              title="Home Cleaning"
              description="Cleaning for apartments, independent houses, and villas across Kochi."
            />
            <CleaningTypeCard
              href="/services/cleaning/office-cleaning"
              image="/office-cleaning-kochi-ohserve.webp"
              imageAlt="Office cleaning service in Kochi"
              title="Office Cleaning"
              description="Cleaning for offices and workspaces, arranged around your requirements."
            />
            {category.services.map((service) => (
              <CleaningTypeCard
                key={service.slug}
                href={`/services/${category.slug}/${service.slug}`}
                image={service.img}
                imageAlt={`${service.name} service`}
                title={service.name}
                description={service.description}
                detail={`${service.duration} · from ₹${service.priceFrom}`}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {category.services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${category.slug}/${service.slug}`}
              className="group rounded-2xl border border-line bg-paper p-5 transition-colors hover:border-orange focus-ring"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist transition-colors group-hover:bg-orange-light">
                <Image
                  src={service.icon}
                  alt=""
                  width={26}
                  height={26}
                  className="transition-transform group-hover:scale-105"
                />
              </div>
              <p className="mt-4 font-semibold text-ink">{service.name}</p>
              <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink/60">
                {service.description}
              </p>
              <p className="mt-4 text-xs text-ink/45">
                {service.duration} · from ₹{service.priceFrom}
              </p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

function CleaningTypeCard({
  href,
  image,
  imageAlt,
  title,
  description,
  detail,
  icon = false,
}: {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  detail?: string;
  icon?: boolean;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-colors hover:border-orange focus-ring"
    >
      <div
        className={`relative flex h-40 items-center justify-center overflow-hidden ${
          icon ? "bg-mist p-12" : "bg-mist"
        }`}
      >
        {icon ? (
          <Image src={image} alt={imageAlt} width={56} height={56} />
        ) : (
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-bold">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
          {description}
        </p>
        {detail && <p className="mt-4 text-xs text-ink/50">{detail}</p>}
        <span className="mt-4 inline-flex text-sm font-semibold text-orange-dark group-hover:underline">
          Explore {title.toLowerCase()}
        </span>
      </div>
    </Link>
  );
}
