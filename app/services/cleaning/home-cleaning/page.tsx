import type { Metadata } from "next";
import CleaningLandingPage from "@/components/CleaningLandingPage";

const title = "Home Cleaning Services in Kochi | OhServe Solutions";
const description =
  "Book home cleaning in Kochi for apartments, houses, and villas. Explore professional home cleaning services from OhServe Solutions and request a quote.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "home cleaning Kochi",
    "house cleaning services Kochi",
    "apartment cleaning Kochi",
    "villa cleaning Kochi",
    "home deep cleaning Kochi",
  ],
  alternates: {
    canonical: "https://www.ohserve.com/services/cleaning/home-cleaning",
  },
  openGraph: {
    title,
    description,
    url: "https://www.ohserve.com/services/cleaning/home-cleaning",
    type: "website",
  },
};

export default function HomeCleaningPage() {
  return (
    <CleaningLandingPage
      serviceName="Home Cleaning"
      title="Home Cleaning Services in Kochi"
      description={description}
      image="/home-cleaning-ohserve-kochi.webp"
      imageAlt="Home cleaning service by OhServe Solutions in Kochi"
      intro="Looking for reliable home cleaning in Kochi? OhServe Solutions helps homeowners arrange cleaning for apartments, independent houses, and villas. Tell us about your home and the areas you want cleaned, and we will get in touch to confirm the scope, availability, and quote."
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
      ]}
      faqs={[
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
      ]}
    />
  );
}
