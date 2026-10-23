import type { Metadata } from "next";
import Link from "next/link";
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
        aria-label={`${label} image`}
        data-image-path={path}
        className="aspect-[16/10] overflow-hidden rounded-xl border border-orange/20 bg-orange-light/50"
      >
        <img
          src={path}
          alt={`${label} photo`}
          className="h-full w-full object-cover"
        />
      </div>

      <figcaption className="mt-2 text-base text-ink/60">
        {label}
      </figcaption>
    </figure>
  );
}

export default function MembershipPage() {
  return (
    <section className="max-w-content mx-auto px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-base font-semibold uppercase tracking-wide text-orange-dark">
          Property management in Kochi, Kerala
        </p>
        <h1 className="font-display font-bold text-4xl mt-3">
          Property Care You Can Trust. Service You Can See.
        </h1>
        <p className="text-base text-ink/65 mt-4 leading-relaxed">
          At Ohserve Solutions, we believe property ownership should bring you
          peace of mind, not a list of things to worry about. Whether you live
          nearby or manage your property from miles away, we combine attentive
          property care, clear communication, and accountable service to help
          you stay in control.
        </p>
        <Link
          href="/contact"
          className="focus-ring mt-6 inline-flex rounded-lg bg-orange px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-orange-dark"
        >
          Request a Property Consultation
        </Link>
      </div>
      <article className="mt-20 border-t border-line pt-14">
        <div className="max-w-3xl">
          <p className="text-base font-semibold uppercase tracking-wide text-orange-dark">
            Property management in Kochi, Kerala
          </p>
          <h2 className="font-display text-3xl font-bold mt-3">
            Smart. Reliable. Complete Property Care.
          </h2>
          <p className="mt-5 text-base text-ink/70 leading-relaxed">
            At Ohserve, we provide professional property management services in
            Kochi, Kerala, helping property owners and businesses keep their
            properties safe, efficient, well-maintained, and operational.
          </p>
          <p className="mt-4 text-base text-ink/70 leading-relaxed">
            From preventive maintenance and day-to-day operations to safety,
            compliance, tenant support, and vendor coordination, our team takes
            care of the essential aspects of property management so you can
            focus on what matters most.
          </p>
          <p className="mt-4 text-base text-ink/70 leading-relaxed">
            Whether it is a commercial building, office, apartment, residential
            property, retail space, or managed facility, we provide solutions
            tailored to your property&apos;s needs.
          </p>
        </div>

        <div className="grid gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          <PropertyImageSlot
            label="Commercial property management"
            path="/propertymanagement-kochi-ohserve.webp"
          />
          <PropertyImageSlot
            label="Residential property care"
            path="/propertycare-kochi-ohserve.webp"
          />
          <PropertyImageSlot
            label="Property maintenance team"
            path="/propertymanagement-for-nri-ohserve-kochi.webp"
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
              <p className="mt-3 text-base text-ink/70 leading-relaxed">
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
              <p className="mt-3 text-base text-ink/70 leading-relaxed">
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
              <p className="mt-3 text-base text-ink/70 leading-relaxed">
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
              <p className="mt-3 text-base text-ink/70 leading-relaxed">
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
              <p className="mt-3 text-base text-ink/70 leading-relaxed">
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
          <p className="mt-4 text-base text-ink/70 leading-relaxed">
            Ohserve provides tailored property management solutions in Kochi
            and the surrounding Ernakulam region for:
          </p>
          <ul className="mt-4 grid gap-x-10 gap-y-2 text-base text-ink/70 sm:grid-cols-2">
            <li>Commercial properties</li>
            <li>Office buildings</li>
            <li>Residential properties</li>
            <li>Apartments and communities</li>
            <li>Retail spaces</li>
            <li>Corporate facilities</li>
            <li>Mixed-use properties</li>
          </ul>
          <p className="mt-4 text-base text-ink/70 leading-relaxed">
            Every property is different. Our approach is designed around your
            property&apos;s size, requirements, operational needs, and
            priorities.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold">
            Why Property Owners Choose Ohserve Solutions
          </h2>
          <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold">Your Property. Clearly Accounted For.</h3>
              <p className="mt-2 text-base text-ink/70 leading-relaxed">
                Documented visits, detailed updates, and visual reports help you
                understand your property&apos;s condition and make informed
                decisions even when you are away.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Clear Communication, Without the Follow-Ups.</h3>
              <p className="mt-2 text-base text-ink/70 leading-relaxed">
                Stay updated on inspections, maintenance, and important
                developments, including what needs attention and what happens next.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Small Concerns. Timely Action.</h3>
              <p className="mt-2 text-base text-ink/70 leading-relaxed">
                We work to identify issues early, coordinate appropriate
                maintenance, and keep you informed so small concerns do not
                become bigger surprises.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Local Attention. Professional Accountability.</h3>
              <p className="mt-2 text-base text-ink/70 leading-relaxed">
                For owners living elsewhere, we provide a dependable local point
                of contact to coordinate property needs and provide visibility
                over agreed activities.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold">Your Journey With Ohserve Solutions</h2>
          <p className="mt-3 max-w-3xl text-base text-ink/70 leading-relaxed">
            We start by understanding your property, expectations, and the level
            of support you need. You get clarity on service and pricing before
            deciding how to proceed.
          </p>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "Tell us about your property", "Share its location, current circumstances, and the services you are interested in."],
              ["02", "Connect with our team", "We review your enquiry and get in touch to understand your needs and answer initial questions."],
              ["03", "Discuss your requirements", "Tell us about your expectations, concerns, and current maintenance or management challenges."],
              ["04", "Share the property details", "Photographs, location information, property features, and specific concerns help us understand the property."],
              ["05", "Review service and pricing", "We explain the recommended scope, applicable charges, and relevant terms before arranging the next step."],
              ["06", "Receive a tailored recommendation", "If an assessment is appropriate, we coordinate it with you and outline priorities and next steps."],
            ].map(([number, title, description]) => (
              <li key={number} className="border-t border-line pt-5">
                <p className="text-sm font-semibold text-orange-dark">{number}</p>
                <h3 className="mt-2 font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-base text-ink/70 leading-relaxed">{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 rounded-2xl border border-line p-7 sm:p-10">
          <h2 className="font-display text-2xl font-bold">Before We Get Started</h2>
          <p className="mt-3 text-base text-ink/70 leading-relaxed">
            Please share the property location, recent photographs where
            available, key amenities, and known maintenance or management
            concerns. We will discuss service options, scope, and charges before
            proceeding with any agreed assessment or service.
          </p>
          <p className="mt-3 text-base font-semibold text-ink">
            An initial discussion is an opportunity to explore your options,
            with no obligation to sign up.
          </p>
        </section>

        <section className="mt-16 max-w-3xl">
          <h2 className="font-display text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-5 divide-y divide-line border-y border-line">
            {[
              ["What types of properties can Ohserve Solutions support?", "Our services can be tailored to the property type and level of assistance required. Contact our team with your property details so we can discuss suitable options."],
              ["Do I need to commit before discussing my property?", "No. An initial enquiry lets us understand your requirements and explain available options. Any paid service, assessment, or site visit should be agreed in advance."],
              ["What information should I provide?", "The property location, photographs, basic details, amenities, and known issues are helpful. We may request more information depending on the service."],
              ["Can I manage my property while living outside India?", "We can discuss support options for owners who live elsewhere, including property-related coordination and communication. Available services depend on your requirements and agreed scope."],
              ["How will I stay informed about my property?", "We agree on communication and reporting based on the service selected, with updates about relevant inspections, maintenance, outstanding concerns, and developments."],
              ["What happens if an urgent maintenance issue arises?", "We can agree how urgent issues are reported, assessed, and coordinated, including escalation steps. Response arrangements and additional costs should be clarified before service begins."],
            ].map(([question, answer]) => (
              <details key={question} className="py-5">
                <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
                  {question}
                </summary>
                <p className="mt-3 text-base text-ink/70 leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-line pt-14">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-bold">
              Property Care Plans for Homes That Need Regular Attention
            </h2>
            <p className="mt-3 text-base text-ink/70 leading-relaxed">
              Choose a visit frequency that suits your property. Each visit is
              documented, and the plan details below outline the included checks
              and care.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3 mt-8">
            {membershipPlans.map((plan) => (
              <PricingCard key={plan.slug} plan={plan} />
            ))}
          </div>
        </section>
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold">
            Why Choose Ohserve?
          </h2>
          <div className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="font-semibold">Proactive &amp; Reliable</h3>
              <p className="mt-2 text-base text-ink/70 leading-relaxed">
                We focus on identifying and addressing issues before they
                become larger problems.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Experienced Team</h3>
              <p className="mt-2 text-base text-ink/70 leading-relaxed">
                Our team brings a practical and service-focused approach to
                property maintenance and operations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Safety &amp; Quality Focus</h3>
              <p className="mt-2 text-base text-ink/70 leading-relaxed">
                We prioritize safe practices, quality standards, regular
                inspections, and responsible property management.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Transparent Communication</h3>
              <p className="mt-2 text-base text-ink/70 leading-relaxed">
                Clear coordination and reporting help property owners stay
                informed about their property&apos;s condition and requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Tailored Solutions</h3>
              <p className="mt-2 text-base text-ink/70 leading-relaxed">
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
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/75">
            At Ohserve, we believe property management is about more than
            simply maintaining a building. It is about protecting your asset,
            improving operational efficiency, reducing risks, and creating a
            better environment for the people who use it.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink/75">
            If you&apos;re looking for a reliable property management company in
            Kochi, Ohserve is ready to help you manage your property with
            confidence.
          </p>
          <p className="mt-3 text-base font-semibold">Let&apos;s take better care of your property.</p>
          <Link
            href="/contact"
            className="focus-ring mt-6 inline-flex rounded-lg bg-orange px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-orange-dark"
          >
            Contact Ohserve
          </Link>
        </section>
      </article>
    </section>
  );
}
