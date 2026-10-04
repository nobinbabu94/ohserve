import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/lib/data";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/services/${category.slug}`}
      className="group block rounded-2xl border border-line bg-paper p-6 hover:border-orange transition-colors focus-ring"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="h-14 w-14 rounded-2xl bg-mist group-hover:bg-orange-light flex items-center justify-center transition-colors">
          <Image
            src={category.icon}
            alt={category.name}
            width={26}
            height={26}
            className="transition-transform group-hover:scale-105"
          />
        </div>
        <ArrowUpRight
          size={20}
          className="text-ink/30 group-hover:text-orange shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
      <p className="font-display font-bold text-lg text-ink mt-4">{category.name}</p>
      <p className="text-sm text-ink/60 mt-1.5 leading-relaxed">
        {category.tagline}
      </p>
      <p className="text-xs text-ink/45 mt-4">
        {category.services.length} services · from ₹
        {Math.min(...category.services.map((s) => s.priceFrom))}
      </p>
    </Link>
  );
}
