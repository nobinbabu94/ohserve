import {
  Sparkles,
  Droplet,
  Droplets,
  Zap,
  Hammer,
  Wrench,
  Bug,
  Tv,
  Flame,
  Sofa,
  Baby,
  ShowerHead,
  Lightbulb,
  Plug,
  Ruler,
  Refrigerator,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  description: string;
  priceFrom: number;
  duration: string;
  icon: LucideIcon;
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  services: Service[];
};

export const categories: Category[] = [
  {
    slug: "cleaning",
    name: "Home & Office Cleaning",
    tagline: "Deep cleaning that actually holds up",
    description:
      "Kitchens, bathrooms, sofas, and full homes — cleaned by trained crews with their own equipment, not a mop borrowed from your kitchen.",
    icon: Sparkles,
    services: [
      {
        slug: "deep-cleaning",
        name: "Deep Cleaning",
        description:
          "Full-home deep clean covering floors, kitchen, bathrooms, and all touchpoints.",
        priceFrom: 2499,
        duration: "3-4 hrs",
        icon: Sparkles,
      },
      {
        slug: "kitchen-cleaning",
        name: "Kitchen Cleaning",
        description:
          "Degreasing, chimney exterior, cabinets, countertops, and sink descaling.",
        priceFrom: 1299,
        duration: "1.5-2 hrs",
        icon: Flame,
      },
      {
        slug: "bathroom-cleaning",
        name: "Bathroom Cleaning",
        description:
          "Tile descaling, fittings polish, and drain care for up to two bathrooms.",
        priceFrom: 999,
        duration: "1-1.5 hrs",
        icon: Droplet,
      },
      {
        slug: "water-tank-cleaning",
        name: "Water Tank Cleaning",
        description:
          "Sludge removal, scrubbing, and disinfection for overhead and sump tanks.",
        priceFrom: 1499,
        duration: "1-2 hrs",
        icon: Droplets,
      },
      {
        slug: "sofa-cleaning",
        name: "Sofa & Upholstery Cleaning",
        description: "Shampoo wash and vacuum extraction, fabric-safe.",
        priceFrom: 899,
        duration: "45-60 min",
        icon: Sofa,
      },
      {
        slug: "newborn-home-cleaning",
        name: "New-born Baby Home Cleaning",
        description:
          "Chemical-light sanitisation designed for homes with infants.",
        priceFrom: 1799,
        duration: "2-3 hrs",
        icon: Baby,
      },
    ],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    tagline: "Leaks, fittings, and installs — fixed once",
    description:
      "Licensed plumbers for everything from a dripping tap to a full bathroom fitting job.",
    icon: Droplet,
    services: [
      {
        slug: "leak-repair",
        name: "Leak & Pipe Repair",
        description: "Diagnosis and fix for visible or suspected leaks.",
        priceFrom: 399,
        duration: "30-60 min",
        icon: Droplet,
      },
      {
        slug: "faucet-installation",
        name: "Tap & Faucet Installation",
        description: "Supply and fit, or fit your own fixture.",
        priceFrom: 349,
        duration: "30-45 min",
        icon: Wrench,
      },
      {
        slug: "bathroom-fittings",
        name: "Bathroom Fittings",
        description: "Showers, health faucets, and washbasin fittings.",
        priceFrom: 599,
        duration: "1-2 hrs",
        icon: ShowerHead,
      },
    ],
  },
  {
    slug: "electrical",
    name: "Electrical Services",
    tagline: "Safe wiring, done by certified electricians",
    description:
      "Installations, repairs, and troubleshooting — every job signed off by a certified electrician.",
    icon: Zap,
    services: [
      {
        slug: "wiring-repair",
        name: "Wiring Repair & Troubleshooting",
        description: "Fault-finding for switches, sockets, and circuits.",
        priceFrom: 349,
        duration: "30-60 min",
        icon: Zap,
      },
      {
        slug: "appliance-installation",
        name: "Fan, Light & Appliance Installation",
        description: "Ceiling fans, light fixtures, and small appliances.",
        priceFrom: 299,
        duration: "20-40 min",
        icon: Lightbulb,
      },
      {
        slug: "switchboard-upgrade",
        name: "Switchboard & MCB Upgrade",
        description: "Board replacement and load-safe upgrades.",
        priceFrom: 899,
        duration: "1-2 hrs",
        icon: Plug,
      },
    ],
  },
  {
    slug: "carpentry",
    name: "Carpentry",
    tagline: "Furniture and woodwork that fits your home",
    description:
      "Repairs, custom fittings, and woodwork matched to your home's existing style.",
    icon: Hammer,
    services: [
      {
        slug: "furniture-repair",
        name: "Furniture Repair",
        description: "Hinges, drawers, laminate, and structural fixes.",
        priceFrom: 349,
        duration: "30-60 min",
        icon: Hammer,
      },
      {
        slug: "custom-fittings",
        name: "Custom Fittings",
        description: "Shelves, wardrobes, and fitted storage.",
        priceFrom: 1499,
        duration: "Varies",
        icon: Ruler,
      },
    ],
  },
  {
    slug: "handyman",
    name: "Handyman & Appliance Repair",
    tagline: "The small jobs, sorted in one visit",
    description:
      "One technician for the odd jobs that pile up — mounting, fixing, assembling.",
    icon: Wrench,
    services: [
      {
        slug: "appliance-repair",
        name: "Home Appliance Repair",
        description: "Washing machines, refrigerators, and water purifiers.",
        priceFrom: 399,
        duration: "30-90 min",
        icon: Refrigerator,
      },
      {
        slug: "tv-wall-mounting",
        name: "TV & Wall Mounting",
        description: "Mounting, wall drilling, and cable dressing.",
        priceFrom: 499,
        duration: "45-60 min",
        icon: Tv,
      },
      {
        slug: "pest-control",
        name: "Pest Control",
        description: "General pest treatment for kitchens and common areas.",
        priceFrom: 999,
        duration: "1-1.5 hrs",
        icon: Bug,
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getService(categorySlug: string, serviceSlug: string) {
  const category = getCategory(categorySlug);
  const service = category?.services.find((s) => s.slug === serviceSlug);
  return service && category ? { service, category } : null;
}

export type MembershipPlan = {
  slug: string;
  name: string;
  frequency: string;
  audience: string;
  price: number;
  tags: string[];
  includes: string[];
  popular?: boolean;
};

export const membershipPlans: MembershipPlan[] = [
  {
    slug: "essentials",
    name: "Essentials",
    frequency: "Monthly once",
    audience:
      "NRIs or homeowners who visit occasionally and want their property monitored and functional.",
    price: 4999,
    tags: ["Photo Reports", "Utility Checks", "Plant Care"],
    includes: [
      "Monthly visit up to 3BHK (10 rooms)",
      "Photos & videos every visit",
      "Air out doors & windows monthly",
      "Electricity, water, gas, telecom checks",
      "Leak & tank level inspection",
      "Lights, fans, TV, AC, refrigerator check",
      "Dish TV, cable, landline check",
      "Indoor plant watering once a month",
    ],
  },
  {
    slug: "premium",
    name: "Premium",
    frequency: "Every two weeks",
    audience:
      "For frequent visitors who expect seamless arrival and departure readiness at all times.",
    price: 4499,
    tags: ["Bi-weekly Reports", "AC Service", "Network Check"],
    popular: true,
    includes: [
      "Bi-weekly visits up to 3BHK",
      "Photos & videos every visit",
      "Air out doors & windows every 2 weeks",
      "Additional device-specific checks",
      "Motors, pumps, irrigation checks",
      "Washing machine & water purifier check",
      "1 AC serviced per month",
      "Router & modem check",
      "Indoor & outdoor plant watering monthly",
      "Inverter & battery maintenance (quarterly)",
    ],
  },
  {
    slug: "elite",
    name: "Elite",
    frequency: "Once every week",
    audience:
      "High-touch property care with full-spectrum upkeep — ideal for actively used homes or VIP clients.",
    price: 3999,
    tags: ["Solar Cleaning", "Tank Cleaning", "Full Diagnostics"],
    includes: [
      "Weekly visits up to 3BHK",
      "Weekly photos & videos",
      "Weekly air-out doors & windows",
      "Full system load & storm readiness",
      "Monsoon preventive cleaning",
      "Full appliance performance check",
      "All ACs serviced monthly",
      "Full system diagnostics",
      "Indoor & outdoor plants weekly",
      "Inverter & batteries quarterly",
      "Solar panel cleaning monthly",
      "Water tank cleaning monthly",
      "Drainage & roof cleaning quarterly",
      "Terrace & compound cleaning quarterly",
    ],
  },
];

export const companyInfo = {
  name: "OhServe Solutions",
  legalName: "OhServe Solutions Private Limited",
  phone: "+91 9074205288",
  email: "info@ohserve.com",
  address:
    "1st Floor, opposite Municipal Townhall, Thirunilath Housing Colony, South Kalamassery, Kalamassery, Ernakulam, Kerala 682033",
  city: "Kochi",
  facebook: "https://www.facebook.com/profile.php?id=61585169570013",
  instagram: "https://www.instagram.com/ohserve",
};
