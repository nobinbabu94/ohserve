"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Percent, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";

type Card = {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  icon: LucideIcon;
  // Tailwind classes for the card look
  bg: string;
  text: string;
  subText: string;
  iconColor: string;
  button: string;
};

// Edit the text/links here. Change the offer wording to whatever you actually run.
const cards: Card[] = [
  {
    title: "10% off on your first booking",
    subtitle: "T&Cs apply*",
    cta: "Book now",
    href: "/contact",
    icon: Percent,
    bg: "bg-gradient-to-br from-orange to-orange-dark",
    text: "text-paper",
    subText: "text-paper/80",
    iconColor: "text-paper/25",
    button: "bg-paper text-ink hover:bg-orange-light",
  },
  {
    title: "Keep your property in safe hands",
    subtitle: "Property Care plans",
    cta: "Explore",
    href: "/membership",
    icon: ShieldCheck,
    bg: "bg-orange-light",
    text: "text-ink",
    subText: "text-ink/60",
    iconColor: "text-orange/30",
    button: "bg-paper text-ink hover:bg-mist",
  },
  {
    title: "A cleaner home, without any hassle",
    subtitle: "Full home deep cleaning",
    cta: "Book now",
    href: "/services/cleaning/deep-cleaning",
    icon: Sparkles,
    bg: "bg-mist",
    text: "text-ink",
    subText: "text-ink/60",
    iconColor: "text-ink/10",
    button: "bg-ink text-paper hover:bg-orange-dark",
  },
];

export default function SpotlightSection() {
  const scroller = useRef<HTMLDivElement>(null);

  function scrollNext() {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <section className="max-w-content mx-auto px-6 py-14">
      <h2 className="font-display font-bold text-2xl sm:text-3xl">In the spotlight</h2>

      <div className="relative mt-8">
        <div
          ref={scroller}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`relative snap-start shrink-0 w-[85%] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] h-56 overflow-hidden rounded-2xl p-7 flex flex-col justify-between ${card.bg}`}
              >
                <Icon
                  aria-hidden
                  strokeWidth={1.2}
                  className={`absolute -right-4 -bottom-4 h-44 w-44 ${card.iconColor}`}
                />

                <div className="relative max-w-[65%]">
                  <p className={`font-display font-bold text-xl leading-snug ${card.text}`}>
                    {card.title}
                  </p>
                  <p className={`text-sm mt-1.5 ${card.subText}`}>{card.subtitle}</p>
                </div>

                <Link
                  href={card.href}
                  className={`relative self-start rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-ring ${card.button}`}
                >
                  {card.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next"
          className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full border border-line bg-paper shadow-sm hover:bg-mist transition-colors focus-ring"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}