import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";

const googleReviews = [
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
  {
    name: "Aswathy RAJAN",
    quote:
      "Everything was cleaned thoroughly and to a very high standard. I really appreciate your hard work, attention to detail, and professionalism.",
  },
];

const googleReviewsUrl = "https://share.google/KpO4I5wFwguV57Y7L";

export default function GoogleReviews() {
  return (
    <section
      aria-labelledby="google-reviews-heading"
      className="max-w-content mx-auto px-6 py-16 sm:py-20"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
            From our Google Business Profile
          </p>
          <h2
            id="google-reviews-heading"
            className="mt-2 font-display text-2xl font-bold sm:text-3xl"
          >
            Loved by customers across Kochi
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-display text-3xl font-bold">5.0</span>
          <div>
            <div
              role="img"
              aria-label="5 out of 5 stars"
              className="flex gap-0.5 text-orange"
            >
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  aria-hidden="true"
                  size={17}
                  fill="currentColor"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <p className="mt-1 text-xs text-ink/60">161 Google reviews</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {googleReviews.map((review) => (
          <figure
            key={review.name}
            className="flex h-full flex-col rounded-2xl border border-line bg-white p-6"
          >
            <div
              role="img"
              aria-label="5 out of 5 stars"
              className="flex gap-0.5 text-orange"
            >
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  aria-hidden="true"
                  size={16}
                  fill="currentColor"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">
              “{review.quote}”
            </blockquote>
            <figcaption className="mt-6 border-t border-line pt-4">
              <cite className="not-italic font-semibold text-ink">
                {review.name}
              </cite>
              <p className="mt-1 text-xs text-ink/55">Google review</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-7 text-center">
        <Link
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-orange hover:bg-orange-light focus-ring"
        >
          Read all 161 reviews on Google
          <ExternalLink aria-hidden="true" size={16} />
        </Link>
      </div>
    </section>
  );
}
