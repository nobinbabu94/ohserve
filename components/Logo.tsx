export default function Logo({
  className = "h-8 w-auto",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const textColor = variant === "light" ? "#FFFFFF" : "#1F1B1A";

  return (
    <svg
      viewBox="0 0 300 70"
      className={className}
      role="img"
      aria-label="OhServe Solutions"
    >
      {/* four-dot mark */}
      <circle cx="12" cy="16" r="11" fill="#F47421" />
      <circle cx="40" cy="16" r="11" fill="#F47421" />
      <circle cx="12" cy="44" r="11" fill="#F47421" />
      <circle cx="40" cy="44" r="11" fill="#F47421" />

      {/* wordmark */}
      <text
        x="62"
        y="42"
        fontFamily="var(--font-sora), sans-serif"
        fontWeight="700"
        fontSize="34"
        letterSpacing="-0.5"
      >
        <tspan fill={textColor}>OHS</tspan>
        <tspan fill="#F47421">E</tspan>
        <tspan fill={textColor}>RVE</tspan>
      </text>
      <text
        x="63"
        y="58"
        fontFamily="var(--font-inter), sans-serif"
        fontWeight="600"
        fontSize="10"
        letterSpacing="4"
        fill={textColor}
      >
        SOLUTIONS
      </text>
    </svg>
  );
}

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" className={className} role="img" aria-label="OhServe">
      <circle cx="14" cy="14" r="12" fill="#F47421" />
      <circle cx="42" cy="14" r="12" fill="#F47421" />
      <circle cx="14" cy="42" r="12" fill="#F47421" />
      <circle cx="42" cy="42" r="12" fill="#F47421" />
    </svg>
  );
}
