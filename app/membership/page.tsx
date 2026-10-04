import type { Metadata } from "next";
import Link from "next/link";
import { Image as ImageIcon } from "lucide-react";
import PricingCard from "@/components/PricingCard";
import { membershipPlans } from "@/lib/data";

export const metadata: Metadata = {
  title: "Property Management in Kochi | OhServe Solutions",
  description:
    "Professional property management in Kochi, Kerala, for commercial and residential properties. Explore Ohserve property care plans and services.",
};

function PropertyImageSlot({
  label,
  path,
}: {
  label: string;
  path: string;
}) {
  return (
    <figure>
      <div
        role="img"
        aria-label={`${label} image placeholder`}
        data-image-path={path}
        className="aspect-[16/10] rounded-xl border border-dashed border-orange/40 bg-orange-light/50 flex flex-col items-center justify-center gap-3 text-orange-dark"
      >
        <ImageIcon size={28} strokeWidth={1.5} aria-hidden="true" />
        <span className="text-sm font-medium">Add {label.toLowerCase()} photo</span>
      </div>
      <figcaption className="mt-2 text-sm text-ink/60">{label}</figcaption>
    </figure>
  );
}

export default function MembershipPage() {
  return (
    <section className="max-w-content mx-auto px-6 py-16">
      <div className="max-w-xl">
        <h1 className="font-display font-bold text-4xl">Property Care Plans</h1>
        <p className="text-ink/65 mt-4 leading-relaxed">
          Flexible plans built around how often your property needs
          attention — every visit is documented, professional, and thorough.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3 mt-12">
        {membershipPlans.map((plan) => (
          <PricingCard key={plan.slug} plan={plan} />
        ))}
      </div>

      <article className="mt-20 border-t border-line pt-14">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
            Property management in Kochi, Kerala
          </p>
          <h2 className="font-display text-3xl font-bold mt-3">
            Smart. Reliable. Complete Property Care.
          </h2>
          <p className="mt-5 text-ink/70 leading-relaxed">
            At Ohserve, we provide professional property management services in
            Kochi, Kerala, helping property owners and businesses keep their
            properties safe, efficient, well-maintained, and operational.
          </p>
          <p className="mt-4 text-ink/70 leading-relaxed">
            From preventive maintenance and day-to-day operations to safety,
            compliance, tenant support, and vendor coordination, our team takes
            care of the essential aspects of property management so you can
            focus on what matters most.
          </p>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Whether it is a commercial building, office, apartment, residential
            property, retail space, or managed facility, we provide solutions
            tailored to your property&apos;s needs.
          </p>
        </div>

        <div className="grid gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          <PropertyImageSlot
            label="Commercial property management"
            path="/images/property-management/commercial-property.jpg"
          />
          <PropertyImageSlot
            label="Residential property care"
            path="/images/property-management/residential-property.jpg"
          />
          <PropertyImageSlot
            label="Property maintenance team"
            path="/images/property-management/maintenance-team.jpg"
          />
        </div>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold">
            Our Property Management Services
          </h2>
          <div className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-2">
            <div className="border-t border-line pt-5">
              <h3 className="font-display text-xl font-bold">
                Maintenance &amp; Operations
              </h3>
              <p className="mt-3 text-ink/70 leading-relaxed">
                Keep your property running smoothly with proactive and reliable
                maintenance. We manage preventive maintenance, routine
                inspections, repairs, breakdown response, and day-to-day
                property operations to help reduce disruptions and keep your
                property in excellent condition.
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <h3 className="font-display text-xl font-bold">
                Safety &amp; Compliance
              </h3>
              <p className="mt-3 text-ink/70 leading-relaxed">
                A well-managed property must be a safe property. Our team
                supports regular inspections, safety practices, compliance
                monitoring, and corrective actions to help maintain the
                required standards across your property.
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <h3 className="font-display text-xl font-bold">
                Tenant &amp; Occupant Support
              </h3>
              <p className="mt-3 text-ink/70 leading-relaxed">
                A positive occupant experience starts with a well-maintained
                property. We coordinate maintenance requests, service
                requirements, and day-to-day concerns to create a comfortable,
                safe, and responsive environment for tenants, employees, and
                visitors.
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <h3 className="font-display text-xl font-bold">
                Vendor &amp; Service Coordination
              </h3>
              <p className="mt-3 text-ink/70 leading-relaxed">
                Managing multiple contractors and service providers can be
                time-consuming. Ohserve coordinates vendors, maintenance teams,
                and service partners to ensure work is scheduled, monitored, and
                followed through efficiently.
              </p>
            </div>
            <div className="border-t border-line pt-5 md:col-span-2">
              <h3 className="font-display text-xl font-bold">
                Asset Optimization
              </h3>
              <p className="mt-3 text-ink/70 leading-relaxed">
                Effective property management is also about protecting
                long-term property value. Through planned maintenance,
                performance monitoring, and continuous improvement, we help
                reduce avoidable costs, improve efficiency, and extend the life
                of your property&apos;s assets.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 max-w-3xl">
          <h2 className="font-display text-2xl font-bold">
            Property Management for Commercial &amp; Residential Properties
          </h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Ohserve provides tailored property management solutions in Kochi
            and the surrounding Ernakulam region for:
          </p>
          <ul className="mt-4 grid gap-x-10 gap-y-2 sm:grid-cols-2 text-ink/70">
            <li>Commercial properties</li>
            <li>Office buildings</li>
            <li>Residential properties</li>
            <li>Apartments and communities</li>
            <li>Retail spaces</li>
            <li>Corporate facilities</li>
            <li>Mixed-use properties</li>
          </ul>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Every property is different. Our approach is designed around your
            property&apos;s size, requirements, operational needs, and
            priorities.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold">
            Why Choose Ohserve?
          </h2>
          <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="font-semibold">Proactive &amp; Reliable</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                We focus on identifying and addressing issues before they
                become larger problems.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Experienced Team</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                Our team brings a practical and service-focused approach to
                property maintenance and operations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Safety &amp; Quality Focus</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                We prioritize safe practices, quality standards, regular
                inspections, and responsible property management.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Transparent Communication</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                Clear coordination and reporting help property owners stay
                informed about their property&apos;s condition and requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Tailored Solutions</h3>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                We customize our services to suit each property rather than
                taking a one-size-fits-all approach.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-orange-light p-7 sm:p-10">
          <h2 className="font-display text-2xl font-bold">
            Property Management in Kochi You Can Rely On
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-ink/75">
            At Ohserve, we believe property management is about more than
            simply maintaining a building. It is about protecting your asset,
            improving operational efficiency, reducing risks, and creating a
            better environment for the people who use it.
          </p>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink/75">
            If you&apos;re looking for a reliable property management company in
            Kochi, Ohserve is ready to help you manage your property with
            confidence.
          </p>
          <p className="mt-3 font-semibold">Let&apos;s take better care of your property.</p>
          <Link
            href="/contact"
            className="focus-ring mt-6 inline-flex rounded-lg bg-orange px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-dark"
          >
            Contact Ohserve
          </Link>
        </section>
      </article>
    </section>
  );
}
