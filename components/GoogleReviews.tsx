import Link from "next/link";

type Review = {
  name: string;
  quote: string;
  // Optional — only shown when filled in.
  service?: string; // e.g. "Shop deep cleaning"
  price?: string; // what the customer said they paid, as shown on Google
  localGuide?: boolean;
};

// Only real reviews from your Google Business Profile belong here.
// Wording is kept exactly as the customers wrote it.
const googleReviews: Review[] = [
  {
    name: "Aiswarya Nambiar",
    quote:
      "Excellent deep cleaning service for my shop. The team was professional, punctual, and very thorough. They cleaned every corner, including areas that are usually hard to reach. Floors, shelves and wash areas were left spotless. My shop feels fresh & hygienic. I really appreciate their attention to detail and hardworking attitude. Highly recommended for anyone looking for quality deep cleaning service.",
    service: "Shop deep cleaning",
    localGuide: true,
  },
  {
    name: "Aswathy RAJAN",
    quote:
      "Thank you so much for the excellent cleaning service! Everything was cleaned thoroughly and to a very high standard. I really appreciate your hard work, attention to detail, and professionalism. The place looks amazing—thank you again. Will be contacting them again in the future and will recommend to everyone..",
    price: "Great price · ₹5,000–6,000",
  },
  {
    name: "A J",
    quote:
      "Never expected this much great work from Ohserve Solutions Team. I’m really Impressed with their team work. Everythings done was so neat and clean. Thank you so much OhServe Solutions.",
    price: "Reasonable price · ₹8,000–9,000",
  },
  {
    name: "George Jacob",
    quote:
      "The team was professional, thorough and paid great attention to detail. Very happy with the quality of work and would definitely recommend their service.",
  },
  {
    name: "Krish Hei",
    quote:
      "Ohserve was professional and paid attention to the details. The apartment looked fresh and spotless afterward.",
  },
];

const RATING = "5.0";
const REVIEW_COUNT = 161;
const googleReviewsUrl = "https://share.google/KpO4I5wFwguV57Y7L";

// Themes taken straight from the reviews shown below.
const themes = [
  "Professional team",
  "Attention to detail",
  "Thorough cleaning",
  "Punctual",
  "Spotless results",
];

function StarIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ExternalLinkIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7.17 6A4.17 4.17 0 0 0 3 10.17V18h7v-7H6.5a.5.5 0 0 1-.5-.5v-.33A1.17 1.17 0 0 1 7.17 8H8V6h-.83Zm9 0A4.17 4.17 0 0 0 12 10.17V18h7v-7h-3.5a.5.5 0 0 1-.5-.5v-.33A1.17 1.17 0 0 1 16.17 8H17V6h-.83Z" />
    </svg>
  );
}

function Stars({ size }: { size: number }) {
  return (
    <div
      role="img"
      aria-label="5 out of 5 stars"
      className="flex gap-0.5 text-orange"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <StarIcon key={i} size={size} />
      ))}
    </div>
  );
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function GoogleReviews() {
  return (
    <section
      aria-labelledby="google-reviews-heading"
      className="max-w-content mx-auto px-6 py-16 sm:py-20"
    >
      {/* Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
            Google reviews
          </p>
          <h2
            id="google-reviews-heading"
            className="mt-2 font-display text-2xl font-bold leading-tight sm:text-3xl"
          >
            What Kochi customers say about OhServe
          </h2>
          <p className="mt-3 text-ink/65 leading-relaxed">
            Real feedback from homes and shops we&apos;ve cleaned across
            Kochi — shared on our Google Business Profile.
          </p>
        </div>

        <div className="flex items-center gap-4 self-start rounded-2xl border border-line bg-mist px-5 py-4 sm:self-auto">
          <span className="font-display text-4xl font-bold leading-none">
            {RATING}
          </span>
          <div>
            <Stars size={18} />
            <p className="mt-1.5 text-xs text-ink/60">
              Based on {REVIEW_COUNT} Google reviews
            </p>
          </div>
        </div>
      </div>

      {/* Review cards — swipeable on mobile, masonry columns on desktop
          (so long and short reviews sit together without big gaps) */}
      <div className="mt-8 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:block md:columns-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:columns-3">
        {googleReviews.map((review) => (
          <figure
            key={review.name}
            className="relative flex w-[85%] shrink-0 snap-center flex-col rounded-2xl border border-line bg-white p-6 md:mb-5 md:w-auto md:break-inside-avoid"
          >
            <span className="absolute right-5 top-5 text-orange-light">
              <QuoteIcon />
            </span>

            <Stars size={16} />

            {review.service && (
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-orange-dark">
                {review.service}
              </p>
            )}

            <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/80">
              “{review.quote}”
            </blockquote>

            {review.price && (
              <p className="mt-4 inline-flex self-start rounded-full bg-mist px-3 py-1 text-xs font-medium text-ink/70">
                {review.price}
              </p>
            )}

            <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-light text-sm font-bold text-orange-dark"
              >
                {initials(review.name)}
              </span>
              <div className="min-w-0">
                <cite className="block truncate not-italic font-semibold text-ink">
                  {review.name}
                </cite>
                <p className="mt-0.5 text-xs text-ink/55">
                  Google review
                  {review.localGuide ? " · Local Guide" : ""}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Common themes */}
      <div className="mt-8 flex flex-wrap items-center gap-2.5">
        <span className="text-xs font-medium text-ink/50">
          Common themes in these reviews:
        </span>
        {themes.map((theme) => (
          <span
            key={theme}
            className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-xs font-medium text-ink/70"
          >
            {theme}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="inline-flex w-full items-center justify-center rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-orange-dark focus-ring sm:w-auto"
        >
          Get a free quote
        </Link>
        <Link
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-orange hover:bg-orange-light focus-ring sm:w-auto"
        >
          Read all {REVIEW_COUNT} reviews on Google
          <ExternalLinkIcon size={15} />
        </Link>
      </div>
    </section>
  );
}