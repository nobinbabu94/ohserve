import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type Props = {
  href: string;
  icon: LucideIcon;
  label: string;
  caption?: string;
  badge?: string;
  size?: "sm" | "md";
};

export default function IconTile({
  href,
  icon: Icon,
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
        className={`flex items-center justify-center rounded-2xl border border-line bg-mist group-hover:border-orange group-hover:bg-orange-light transition-colors ${
          isSmall ? "h-16 w-16" : "h-20 w-20 sm:h-24 sm:w-24"
        }`}
      >
        <Icon
          size={isSmall ? 24 : 30}
          strokeWidth={1.6}
          className="text-ink/80 group-hover:text-orange-dark transition-colors"
        />
      </div>
      <p className={`mt-2.5 font-medium leading-tight ${isSmall ? "text-xs" : "text-sm"}`}>
        {label}
      </p>
      {caption && <p className="text-xs text-ink/50 mt-0.5">{caption}</p>}
    </Link>
  );
}
