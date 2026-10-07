import type { Metadata } from "next";
import CleaningLandingPage from "@/components/CleaningLandingPage";

const SITE_URL = "https://www.ohserve.com";
const PAGE_PATH = "/services/cleaning/home-cleaning";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const OG_IMAGE = `${SITE_URL}/home-cleaning-ohserve-kochi.webp`;

const title = "Home Cleaning Services in Kochi | OhServe Solutions";
const description =
  "Professional home cleaning in Kochi for apartments, independent houses, and villas. Trained, background-verified staff. Serving Kakkanad, Edappally, Vyttila, Kaloor, Kalamassery & more. Request a free quote today.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "home cleaning Kochi",
    "house cleaning services Kochi",
    "apartment cleaning Kochi",
    "villa cleaning Kochi",
    "home deep cleaning Kochi",
    "home cleaning services Kakkanad",
    "house cleaning Edappally",
    "cleaning services near me Kochi",
    "best home cleaning company Kochi",
    "flat cleaning services Ernakulam",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title,
    description,
    url: PAGE_URL,
    siteName: "OhServe Solutions",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Home cleaning service by OhServe Solutions in Kochi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [OG_IMAGE],
  },
};

// Structured data: helps Google understand this is a local service page for
// Kochi specifically, and can surface the FAQs as rich results in search.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Cleaning Services",
  serviceType: "Home Cleaning",
  provider: {
    "@type": "LocalBusiness",
    name: "OhServe Solutions",
    url: SITE_URL,
    telephone: "+91-9074205288",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  },
  areaServed: [
    { "@type": "City", name: "Kochi" },
    { "@type": "Place", name: "Kakkanad" },
    { "@type": "Place", name: "Edappally" },
    { "@type": "Place", name: "Vyttila" },
    { "@type": "Place", name: "Kaloor" },
    { "@type": "Place", name: "Kalamassery" },
    { "@type": "Place", name: "Tripunithura" },
  ],
  url: PAGE_URL,
};

const faqs = [
  {
    question: "Which homes can you clean in Kochi?",
    answer:
      "You can request cleaning for apartments, independent houses, and villas in Kochi. Share your address and requirements so our team can check availability and confirm the scope.",
  },
  {
    question: "What does home cleaning include?",
    answer:
      "The cleaning checklist depends on the rooms and tasks you request. Tell us whether you need help with areas such as the kitchen, bathrooms, bedrooms, or living room, and we will confirm what can be covered in your booking.",
  },
  {
    question: "How do I book home cleaning in Kochi?",
    answer:
      "Use the request form on this page with your contact details, address, preferred date, and cleaning requirements. OhServe Solutions will contact you to confirm availability and the quote before the visit.",
  },
  {
    question: "Which areas in Kochi do you serve?",
    answer:
      "We cover Kakkanad, Edappally, Vyttila, Kaloor, Kalamassery, Tripunithura, and surrounding parts of Kochi and Ernakulam. If your location isn't listed, contact us to check availability in your area.",
  },
  {
    question: "Do you offer same-day or urgent cleaning?",
    answer:
      "Same-day slots are sometimes available depending on your area and our team's schedule. Mention your preferred timing in the request form and we'll confirm the earliest slot we can offer.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function HomeCleaningPage() {
  return (
    <>
      {/* Structured data for search engines — invisible to visitors */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <CleaningLandingPage
        serviceName="Home Cleaning"
        title="Home Cleaning Services in Kochi"
        description={description}
        image="/home-cleaning-ohserve-kochi.webp"
        imageAlt="Home cleaning service by OhServe Solutions in Kochi"
        intro="Looking for reliable home cleaning in Kochi? OhServe Solutions helps homeowners across Kochi and Ernakulam arrange cleaning for apartments, independent houses, and villas. Tell us about your home and the areas you want cleaned, and we'll get in touch to confirm the scope, availability, and quote — usually within a few hours."
        sections={[
          {
            title: "Professional house cleaning for your home",
            description:
              "From a focused clean of key rooms to a more detailed home refresh, let us know what your property needs. We can discuss the work before confirming your appointment.",
            items: [
              "Apartment and flat cleaning",
              "Independent house cleaning",
              "Villa cleaning",
              "Kitchen and bathroom cleaning",
              "Living room and bedroom cleaning",
              "Home deep cleaning enquiries",
            ],
          },
          {
            title: "Cleaning planned around your space",
            description:
              "Every home is different. When you request home cleaning in Kochi, share your property type, the rooms or areas to prioritise, and your preferred date. We will confirm the service details with you before booking.",
            items: [
              "One-time cleaning requests",
              "Room-by-room cleaning requirements",
              "Move-in or move-out cleaning enquiries",
              "Cleaning for homes of different sizes",
            ],
          },
          {
            title: "Areas we serve in Kochi",
            description:
              "OhServe Solutions provides home cleaning across Kochi and the surrounding Ernakulam district, including:",
            items: [
              "Kakkanad",
              "Edappally",
              "Vyttila",
              "Kaloor",
              "Kalamassery",
              "Tripunithura",
              "Palarivattom",
              "Fort Kochi",
            ],
          },
        ]}
        faqs={faqs}
      />
    </>
  );
}