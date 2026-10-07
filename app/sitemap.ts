import type { MetadataRoute } from "next";
import { categories } from "@/lib/data";

const siteUrl = "https://www.ohserve.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/maid-services",
    "/membership",
    "/services",
    "/services/cleaning/home-cleaning",
    "/services/cleaning/office-cleaning",
  ];

  const categoryRoutes = categories.map(
    (category) => `/services/${category.slug}`
  );
  const serviceRoutes = categories.flatMap((category) =>
    category.services.map(
      (service) => `/services/${category.slug}/${service.slug}`
    )
  );

  return [...staticRoutes, ...categoryRoutes, ...serviceRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
  }));
}
