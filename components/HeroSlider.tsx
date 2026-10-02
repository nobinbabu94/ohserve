"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles, ShieldCheck, Droplets, type LucideIcon } from "lucide-react";

type Slide = {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  icon: LucideIcon;
  bg: string;
  text: string;
  subText: string;
  iconColor: string;
  button: string;
};

// Edit titles, offers, and links here.
const slides: Slide[] = [
  {
    title: "Home services at your doorstep",
    subtitle: "Certified pros for cleaning, repairs, electrical & more in Kochi.",
    cta: "Browse services",
    href: "/services",
    icon: Sparkles,
    bg: "bg-gradient-to-br from-orange to-orange-dark",
    text: "text-paper",
    subText: "text-paper/85",
    iconColor: "text-paper/20",
    button: "bg-paper text-ink hover:bg-orange-light",
  },
  {
    title: "Not home often? We've got it covered",
    subtitle: "Scheduled Property Care visits with photo reports, every time.",
    cta: "See plans",
    href: "/membership",
    icon: ShieldCheck,
    bg: "bg-ink",
    text: "text-paper",
    subText: "text-paper/70",
    iconColor: "text-paper/10",
    button: "bg-orange text-paper hover:bg-orange-dark",
  },
  {
    title: "Water tank cleaning, done right",
    subtitle: "Sludge removal & disinfection, starting at ₹1,499.",
    cta: "Book now",
    href: "/services/cleaning/water-tank-cleaning",
    icon: Droplets,
    bg: "bg-mist",
    text: "text-ink",
    subText: "text-ink/60",
    iconColor: "text-ink/10",
    button: "bg-ink text-paper hover:bg-orange-dark",
  },
];

const AUTOPLAY_MS = 5000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  function goTo(i: number) {
    setIndex((i + slides.length) % slides.length);
    resetTimer();
  }

  function resetTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
  }

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(delta > 0 ? index - 1 : index + 1);
    }
    touchStartX.current = null;
  }

  return (
    <section className="max-w-content mx-auto px-6">
      <div
        className="relative overflow-hidden rounded-3xl"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            width: `${slides.length * 100}%`,
            transform: `translateX(-${(100 / slides.length) * index}%)`,
          }}
        >
          {slides.map((slide) => {
            const Icon = slide.icon;
            return (
              <div
                key={slide.title}
                className={`relative shrink-0 px-8 py-14 sm:px-14 sm:py-20 flex items-center ${slide.bg}`}
                style={{ width: `${100 / slides.length}%` }}
              >
                <Icon
                  aria-hidden
                  strokeWidth={1}
                  className={`absolute -right-6 -bottom-10 h-64 w-64 sm:h-80 sm:w-80 ${slide.iconColor}`}
                />
                <div className="relative max-w-md">
                  <h1 className={`font-display font-bold text-3xl sm:text-4xl leading-[1.15] ${slide.text}`}>
                    {slide.title}
                  </h1>
                  <p className={`mt-3 text-sm sm:text-base ${slide.subText}`}>{slide.subtitle}</p>
                  <Link
                    href={slide.href}
                    className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors mt-6 focus-ring ${slide.button}`}
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* arrows — desktop only */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => goTo(index - 1)}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-paper/90 hover:bg-paper shadow transition focus-ring"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => goTo(index + 1)}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-paper/90 hover:bg-paper shadow transition focus-ring"
        >
          <ChevronRight size={18} />
        </button>

        {/* dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-paper" : "w-1.5 bg-paper/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
