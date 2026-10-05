import type { Metadata } from "next";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | OhServe Solutions",
  description: "Explore home services in Kochi, including cleaning, repairs, and maid services from OhServe Solutions.",
};

export default function ServicesPage() {
  return (
    <section className="max-w-content mx-auto px-6 py-16">
      <h1 className="font-display font-bold text-4xl">All services</h1>
      <p className="text-ink/65 mt-3 max-w-xl">
        Every category below lists individual services with duration and
        starting price. Pick one to book.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </section>
  );
}
