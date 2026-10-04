import Link from "next/link";
import Image from "next/image";

type Props = {
  href: string;
  icon: string;
  label: string;
  caption?: string;
  badge?: string;
  size?: "sm" | "md";
};

export default function IconTile({
  href,
  icon,
  label,
  caption,
  badge,
  size = "md",
}: Props) {
  const isSmall = size === "sm";

  return (
    <Link
      href={href}
      className="group relative flex flex-col items-center text-center focus-ring rounded-2xl"
    >
      {badge && (
        <span className="absolute -top-2 z-10 rounded-full bg-ink text-paper text-[10px] font-semibold tracking-wide px-2.5 py-1">
          {badge}
        </span>
      )}

      <div
        className={`relative overflow-hidden rounded-2xl border border-line bg-mist transition-colors
          group-hover:border-orange group-hover:bg-orange-light
          ${isSmall ? "h-16 w-16" : "h-20 w-20 sm:h-24 sm:w-24"}
        `}
      >
        <Image
          src={icon}
          alt={label}
          fill
          sizes={isSmall ? "64px" : "(min-width: 640px) 96px, 80px"}
          className="object-cover transition-transform duration-200 group-hover:scale-105"
        />
      </div>

      <p
        className={`mt-2.5 font-medium leading-tight ${
          isSmall ? "text-xs" : "text-sm"
        }`}
      >
        {label}
      </p>

      {caption && (
        <p className="mt-0.5 text-xs text-ink/50">
          {caption}
        </p>
      )}
    </Link>
  );
}