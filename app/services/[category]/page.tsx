import type { Metadata } from "next";
import Link from "next/link";
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

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10">
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
