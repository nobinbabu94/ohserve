import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/data";

export default function ServiceRow({
  categorySlug,
  service,
}: {
  categorySlug: string;
  service: Service;
}) {
  return (
    <Link
      href={`/services/${categorySlug}/${service.slug}`}
      className="group rounded-2xl border border-line bg-paper p-5 hover:border-orange transition-colors focus-ring"
    >
      <div className="h-14 w-14 rounded-2xl bg-mist group-hover:bg-orange-light flex items-center justify-center transition-colors">
        <Image
          src={service.icon}
          alt={service.name}
          width={26}
          height={26}
          className="transition-transform group-hover:scale-105"
        />
      </div>
      <p className="font-semibold text-ink mt-4">{service.name}</p>
      <p className="text-sm text-ink/60 mt-1.5 leading-relaxed line-clamp-2">
        {service.description}
      </p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-xs text-ink/45">{service.duration}</span>
        <span className="text-sm font-semibold text-orange-dark">
          from ₹{service.priceFrom}
        </span>
      </div>
    </Link>
  );
}
