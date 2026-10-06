import type { Metadata } from "next";
import CleaningLandingPage from "@/components/CleaningLandingPage";

const title = "Office Cleaning Services in Kochi | OhServe Solutions";
const description =
  "Looking for office cleaning in Kochi? Request cleaning for offices and workspaces from OhServe Solutions. Share your requirements to confirm scope and availability.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "office cleaning Kochi",
    "office cleaning services Kochi",
    "commercial cleaning Kochi",
    "workplace cleaning Kochi",
    "office cleaners in Kochi",
  ],
  alternates: {
    canonical: "https://www.ohserve.com/services/cleaning/office-cleaning",
  },
  openGraph: {
    title,
    description,
    url: "https://www.ohserve.com/services/cleaning/office-cleaning",
    type: "website",
  },
};

export default function OfficeCleaningPage() {
  return (
    <CleaningLandingPage
      serviceName="Office Cleaning"
      title="Office Cleaning Services in Kochi"
      description={description}
      image="/Home and office cleaning service.jpg"
      imageAlt="Office cleaning service in Kochi"
      intro="Need office cleaning in Kochi? OhServe Solutions helps businesses arrange cleaning for offices and workspaces. Tell us about your premises, priority areas, and preferred schedule so we can discuss a suitable cleaning plan and confirm availability."
      sections={[
        {
          title: "Cleaning for offices and workspaces",
          description:
            "A clean workplace makes shared spaces more comfortable for employees and visitors. Let us know which parts of your office need attention so we can confirm the tasks and service scope with you.",
          items: [
            "Workstations and desk areas",
            "Reception and waiting areas",
            "Meeting and conference rooms",
            "Office floors and common areas",
            "Pantry or break areas",
            "Office washrooms",
          ],
        },
        {
          title: "Office cleaning arranged around your needs",
          description:
            "Office size, access, and preferred timing can affect the cleaning plan. Share these details in your request and our team will contact you to discuss one-time or ongoing office cleaning requirements in Kochi.",
          items: [
            "Small office cleaning enquiries",
            "Shared workspace cleaning enquiries",
            "Priority-area cleaning",
            "Preferred-day and timing requests",
          ],
        },
      ]}
      faqs={[
        {
          question: "Do you provide office cleaning in Kochi?",
          answer:
            "You can request office and workspace cleaning in Kochi through OhServe Solutions. Share your location and requirements so our team can confirm the service scope and availability.",
        },
        {
          question: "Can I request regular office cleaning?",
          answer:
            "Yes, include your preferred days and frequency in the request. The team will discuss the schedule and confirm whether it can be accommodated for your location.",
        },
        {
          question: "How is an office cleaning quote confirmed?",
          answer:
            "Send your address, office size or type, priority areas, and preferred schedule using the form on this page. Our team will contact you to discuss the requirements and confirm the quote before booking.",
        },
      ]}
    />
  );
}
