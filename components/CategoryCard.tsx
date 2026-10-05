import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Category } from "@/lib/data";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/services/${category.slug}`}
      className="group relative flex min-h-64 flex-col justify-between overflow-hidden rounded-2xl border border-line p-6 transition-colors focus-ring"
    >
      <Image
        src={category.icon}
        alt=""
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/10 transition-colors group-hover:from-ink/95" />
      <div className="relative flex justify-end">
        <ArrowUpRight
          size={20}
          className="text-white/80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
      <div className="relative mt-8">
        <p className="font-display font-bold text-xl text-white">{category.name}</p>
        <p className="text-sm text-white/85 mt-1.5 leading-relaxed">
          {category.tagline}
        </p>
        <p className="text-xs text-white/75 mt-4">
          {category.services.length} services · from ₹
          {Math.min(...category.services.map((s) => s.priceFrom))}
        </p>
      </div>
    </Link>
  );
}
