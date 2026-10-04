import Image, { type StaticImageData } from "next/image";

type LogoProps = {
  src?: string | StaticImageData;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  variant?: "dark" | "light";
};

export default function Logo({
  src = "/ohserve-logo.png",
  alt = "OhServe Solutions",
  className = "h-8 w-auto",
  width = 300,
  height = 70,
  priority = false,
  variant = "dark",
}: LogoProps) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      priority={priority}
      data-variant={variant}
    />
  );
}

type LogoMarkProps = {
  className?: string;
  ariaLabel?: string;
};

export function LogoMark({
  className = "h-8 w-8",
  ariaLabel = "OhServe",
}: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 56 56"
      className={className}
      role="img"
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="12" fill="#F47421" />
      <circle cx="42" cy="14" r="12" fill="#F47421" />
      <circle cx="14" cy="42" r="12" fill="#F47421" />
      <circle cx="42" cy="42" r="12" fill="#F47421" />
    </svg>
  );
}