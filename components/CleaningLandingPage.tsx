import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import BookingForm from "@/components/BookingForm";

type CleaningLandingPageProps = {
  serviceName: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: {
    title: string;
    description: string;
    items: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export default function CleaningLandingPage({
  serviceName,
  title,
  description,
  image,
  imageAlt,
  intro,
  sections,
  faqs,
}: CleaningLandingPageProps) {
  const serviceStructuredData = {
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@type": "Organization",
      name: "OhServe Solutions",
      url: "https://www.ohserve.com",
      telephone: "+91 9074205288",
    },
    areaServed: {
      "@type": "City",
      name: "Kochi",
    },
  };
  const faqStructuredData = {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <article className="max-w-content mx-auto px-6 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [serviceStructuredData, faqStructuredData],
          }),
        }}
      />

      <Link
        href="/services/cleaning"
        className="inline-flex items-center gap-1.5 text-sm text-ink/60 hover:text-ink focus-ring rounded-sm"
      >
        <ChevronLeft size={16} />
        All cleaning services
      </Link>

      <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
            Cleaning services in Kochi
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl leading-relaxed text-ink/70">{intro}</p>
          <Link
            href="#booking"
            className="mt-7 inline-flex rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-dark focus-ring"
          >
            Request a cleaning quote
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)]">
        <div>
          {sections.map((section) => (
            <section key={section.title} className="mb-10">
              <h2 className="font-display text-2xl font-bold">
                {section.title}
              </h2>
              <p className="mt-3 leading-relaxed text-ink/70">
                {section.description}
              </p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="border-t border-line pt-8">
            <h2 className="font-display text-2xl font-bold">
              Cleaning service areas in Kochi
            </h2>
            <p className="mt-3 leading-relaxed text-ink/70">
              OhServe Solutions serves Kochi and nearby parts of Ernakulam,
              including Kakkanad, Edappally, Vyttila, Palarivattom, Kaloor,
              Kalamassery, Aluva, and Tripunithura. Share your address when
              requesting a booking so we can confirm service availability.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-2xl font-bold">
              Frequently asked questions
            </h2>
            <div className="mt-5 divide-y divide-line border-y border-line">
              {faqs.map(({ question, answer }) => (
                <details key={question} className="py-4">
                  <summary className="cursor-pointer font-semibold focus-ring rounded-sm">
                    {question}
                  </summary>
                  <p className="mt-3 leading-relaxed text-ink/70">{answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <section
          id="booking"
          className="h-fit scroll-mt-24 rounded-2xl border border-line bg-white p-6 sm:p-8 lg:sticky lg:top-28"
        >
          <h2 className="font-display text-xl font-bold">
            Request {serviceName.toLowerCase()} in Kochi
          </h2>
          <p className="mb-6 mt-2 text-sm leading-relaxed text-ink/60">
            Tell us about your space and preferred date. Our team will contact
            you to confirm the requirements, availability, and quote.
          </p>
          <BookingForm defaultService={serviceName} />
        </section>
      </div>

      <div className="mt-12 rounded-2xl bg-mist p-6 sm:p-8">
        <h2 className="font-display text-xl font-bold">
          Looking for another cleaning service?
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink/65">
          Browse the full list of home and office cleaning services available
          from OhServe Solutions in Kochi.
        </p>
        <Link
          href="/services/cleaning"
          className="mt-4 inline-flex text-sm font-semibold text-orange-dark underline underline-offset-4 focus-ring rounded-sm"
        >
          View all cleaning services
        </Link>
      </div>
    </article>
  );
}
