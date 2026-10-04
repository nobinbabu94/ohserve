import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronLeft, Clock, Image as ImageIcon, IndianRupee } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import { categories, getService } from "@/lib/data";

export function generateStaticParams() {
  return categories.flatMap((c) =>
    c.services.map((s) => ({ category: c.slug, service: s.slug }))
  );
}

export function generateMetadata({
  params,
}: {
  params: { category: string; service: string };
}): Metadata {
  const result = getService(params.category, params.service);
  if (!result) return {};
  return {
    title:
      result.service.slug === "deep-cleaning"
        ? "Deep Cleaning Services in Kochi | OhServe Solutions"
        : result.service.slug === "kitchen-cleaning"
          ? "Kitchen Cleaning Services in Kochi | OhServe Solutions"
        : result.service.slug === "water-tank-cleaning"
          ? "Water Tank Cleaning Services in Kochi | OhServe Solutions"
        : result.service.slug === "sofa-cleaning"
          ? "Sofa Cleaning in Kochi | OhServe Solutions"
        : result.service.slug === "newborn-home-cleaning"
          ? "Newborn Home Cleaning in Kochi | OhServe Solutions"
        : `${result.service.name} in Kochi | OhServe Solutions`,
    description:
      result.service.slug === "deep-cleaning"
        ? "Professional home deep cleaning in Kochi for apartments, independent houses, and villas. Book detailed room-by-room cleaning with Ohserve Solutions."
        : result.service.slug === "kitchen-cleaning"
          ? "Professional kitchen cleaning in Kochi for apartments, houses, and villas. Get help with grease, food residue, appliances, and hard-to-reach areas."
        : result.service.slug === "water-tank-cleaning"
          ? "Book water tank cleaning in Kochi for overhead tanks and sumps. Ohserve Solutions provides sludge removal, scrubbing, and tank disinfection across Kochi."
        : result.service.slug === "sofa-cleaning"
          ? "Book sofa and upholstery cleaning in Kochi with shampoo washing and vacuum extraction. Fabric suitability and service scope are confirmed before cleaning."
        : result.service.slug === "newborn-home-cleaning"
          ? "Explore chemical-light newborn home cleaning in Kochi. Discuss priority rooms, surfaces, products, and appointment guidance with Ohserve Solutions."
        : result.service.description,
  };
}

function ImagePlaceholder({
  label,
  path,
}: {
  label: string;
  path: string;
}) {
  return (
    <figure className="min-w-0">
      <div
        role="img"
        aria-label={`${label} image placeholder`}
        data-image-path={path}
        className="aspect-[4/3] rounded-xl border border-dashed border-orange/40 bg-orange-light/50 flex flex-col items-center justify-center gap-3 text-orange-dark"
      >
        <ImageIcon size={28} strokeWidth={1.5} aria-hidden="true" />
        <span className="text-sm font-medium">{label} photo</span>
      </div>
      <figcaption className="mt-2 text-sm text-ink/60">{label}</figcaption>
    </figure>
  );
}

function DeepCleaningContent() {
  return (
    <article className="mt-20 border-t border-line pt-14">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
          Home cleaning in Kochi
        </p>
        <h2 className="font-display text-3xl font-bold mt-3">
          Deep Cleaning Services in Kochi
        </h2>
        <p className="mt-5 text-ink/70 leading-relaxed">
          Looking for professional deep cleaning services in Kochi? Ohserve
          Solutions provides reliable and detailed home deep cleaning for
          apartments, independent houses, villas, and residential spaces.
        </p>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Our professional cleaning team focuses on the areas that are often
          missed during regular cleaning. From kitchens and bathrooms to
          bedrooms, living rooms, windows, floors, fixtures, and hard-to-reach
          spaces, we help give your home a complete and refreshing clean.
        </p>
        <p className="mt-4 font-semibold leading-relaxed">
          Book your deep cleaning service in Kochi with Ohserve Solutions today.
        </p>
      </div>

      <div className="grid gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-4">
        <ImagePlaceholder
          label="Deep-cleaned home"
          path="/images/deep-cleaning/home.jpg"
        />
        <ImagePlaceholder
          label="Living room"
          path="/images/deep-cleaning/living-room.jpg"
        />
        <ImagePlaceholder
          label="Kitchen"
          path="/images/deep-cleaning/kitchen.jpg"
        />
        <ImagePlaceholder
          label="Bathroom"
          path="/images/deep-cleaning/bathroom.jpg"
        />
      </div>

      <section className="mt-16 max-w-3xl">
        <h2 className="font-display text-2xl font-bold">
          Professional Home Deep Cleaning Services in Kochi
        </h2>
        <p className="mt-4 text-ink/70 leading-relaxed">
          A regular cleaning routine helps keep your home tidy, but some areas
          require more detailed attention. Dust, dirt, grease, stains, and
          buildup can accumulate in corners, under furniture, around appliances,
          and in other difficult-to-reach areas.
        </p>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Our deep cleaning service in Kochi is designed to give your home a
          more thorough clean from room to room. Whether you live in an
          apartment, villa, or independent house, our team works systematically
          through your home to clean visible surfaces as well as commonly
          overlooked areas.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold">
          What Does Our Deep Cleaning Service Include?
        </h2>
        <div className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-2">
          <div className="border-t border-line pt-5">
            <h3 className="font-display text-xl font-bold">
              Living Room Deep Cleaning in Kochi
            </h3>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Your living room is one of the most frequently used areas of your
              home. Our team carefully cleans and dusts:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-ink/70">
              <li>Floors and corners</li>
              <li>Windows and window areas</li>
              <li>Fans and light fixtures</li>
              <li>Lampshades</li>
              <li>Furniture surfaces</li>
              <li>Doors and other fixtures</li>
              <li>Hard-to-reach areas</li>
              <li>Dust and cobweb-prone areas</li>
            </ul>
            <p className="mt-3 text-ink/70 leading-relaxed">
              We focus on details that regular cleaning can often miss, leaving
              your living room cleaner and more comfortable.
            </p>
          </div>

          <div className="border-t border-line pt-5">
            <h3 className="font-display text-xl font-bold">
              Kitchen Deep Cleaning in Kochi
            </h3>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Kitchen cleaning requires special attention because grease, food
              residue, dust, and dirt can build up over time. Our kitchen deep
              cleaning service in Kochi can include cleaning of:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-ink/70">
              <li>Kitchen countertops and sinks</li>
              <li>Cabinets and cabinet surfaces</li>
              <li>Cooking areas and accessible wall surfaces</li>
              <li>Areas around and underneath appliances</li>
              <li>Hard-to-reach corners</li>
              <li>Grease and dirt buildup</li>
            </ul>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Ovens, refrigerators, and dishwashers can also be cleaned based on
              your selected service requirements.
            </p>
          </div>

          <div className="border-t border-line pt-5">
            <h3 className="font-display text-xl font-bold">
              Bathroom Deep Cleaning in Kochi
            </h3>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Bathrooms need regular and detailed cleaning to maintain a fresh
              and hygienic environment. Our bathroom deep cleaning includes
              detailed cleaning of:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-ink/70">
              <li>Toilets, washbasins, and showers</li>
              <li>Bathtubs and bathroom floors</li>
              <li>Tiles, mirrors, and fixtures</li>
              <li>Corners and edges</li>
              <li>Soap and dirt buildup</li>
            </ul>
            <p className="mt-3 text-ink/70 leading-relaxed">
              We give particular attention to areas that are difficult to clean
              during routine household cleaning.
            </p>
          </div>

          <div className="border-t border-line pt-5">
            <h3 className="font-display text-xl font-bold">
              Bedroom Deep Cleaning in Kochi
            </h3>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Our bedroom cleaning service covers surfaces and fixtures that
              collect dust during everyday use. We clean:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-ink/70">
              <li>Bedroom floors and windows</li>
              <li>Mirrors, fans, and light fixtures</li>
              <li>Switchboards and doors</li>
              <li>Accessible surfaces, corners, and hard-to-reach areas</li>
            </ul>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Our aim is to leave your bedroom feeling clean, fresh, and
              comfortable.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="font-display text-2xl font-bold">
          Deep Cleaning for Apartments, Flats &amp; Villas
        </h2>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Ohserve Solutions provides home deep cleaning in Kochi for different
          types of residential properties.
        </p>
        <div className="mt-7 space-y-7">
          <div>
            <h3 className="font-display text-lg font-bold">
              Apartment Deep Cleaning in Kochi
            </h3>
            <p className="mt-2 text-ink/70 leading-relaxed">
              Moving into a new apartment or simply looking to refresh your
              existing home? Our apartment deep cleaning service covers the
              major areas of your property with detailed room-by-room cleaning.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold">
              Villa Deep Cleaning in Kochi
            </h3>
            <p className="mt-2 text-ink/70 leading-relaxed">
              Larger homes require more time and attention. Our villa cleaning
              service can be tailored according to the size, condition, and
              cleaning requirements of your property.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold">
              Independent House Cleaning in Kochi
            </h3>
            <p className="mt-2 text-ink/70 leading-relaxed">
              We also provide deep cleaning solutions for independent houses,
              helping homeowners clean areas that may be difficult to manage as
              part of their regular routine.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold">
          Why Choose Ohserve Solutions?
        </h2>
        <p className="mt-4 max-w-3xl text-ink/70 leading-relaxed">
          Choosing a cleaning company means trusting someone with your home. At
          Ohserve Solutions, we focus on providing a professional and dependable
          cleaning experience.
        </p>
        <ul className="mt-5 grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          <li>Professional cleaning team</li>
          <li>Detailed room-by-room cleaning</li>
          <li>Attention to hard-to-reach areas</li>
          <li>Home, apartment, and villa cleaning</li>
          <li>Kitchen and bathroom deep cleaning</li>
          <li>Flexible cleaning solutions</li>
          <li>Convenient booking</li>
          <li>Quality-focused service</li>
          <li>Residential cleaning expertise</li>
        </ul>
      </section>

      <section className="mt-16 border-y border-line py-10">
        <h2 className="font-display text-2xl font-bold">
          Areas We Serve in Kochi
        </h2>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Ohserve Solutions provides cleaning services across Kochi and
          surrounding areas.
        </p>
        <p className="mt-4 leading-relaxed">
          Kakkanad · Edappally · Vyttila · Palarivattom · Kaloor · Kadavanthra ·
          Panampilly Nagar · Kalamassery · Aluva · Thrikkakara · Tripunithura ·
          Maradu · Fort Kochi · Mattancherry · Ernakulam · Thevara · Marine
          Drive · Chottanikkara
        </p>
        <p className="mt-3 text-sm text-ink/60">
          If your location is not listed, contact Ohserve Solutions to check
          service availability in your area.
        </p>
      </section>

      <section className="mt-14 rounded-2xl bg-orange-light p-7 sm:p-10">
        <h2 className="font-display text-2xl font-bold">
          Looking for a Deep Cleaning Service Near You?
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-ink/75">
          Searching for “deep cleaning service near me”, “home cleaning near
          me”, or “cleaning services in Kochi”? Ohserve Solutions is here to
          make professional home cleaning simple and convenient.
        </p>
        <p className="mt-3 max-w-3xl leading-relaxed text-ink/75">
          Whether you need a complete home deep clean, apartment cleaning, villa
          cleaning, kitchen cleaning, bathroom cleaning, or a one-time cleaning
          service, our team can help.
        </p>
        <a
          href="#booking"
          className="focus-ring mt-6 inline-flex rounded-lg bg-orange px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-dark"
        >
          Contact Ohserve Solutions to book
        </a>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold">Other Cleaning Services</h2>
        <ul className="mt-5 grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3 text-ink/70">
          <li>House Cleaning Services</li>
          <li>Apartment Cleaning</li>
          <li>Villa Cleaning</li>
          <li>Kitchen Deep Cleaning</li>
          <li>Bathroom Cleaning</li>
          <li>Sofa Cleaning</li>
          <li>Carpet Cleaning</li>
          <li>Mattress Cleaning</li>
          <li>Floor Cleaning</li>
          <li>Window Cleaning</li>
          <li>Office Cleaning</li>
          <li>Commercial Cleaning</li>
          <li>Move-In Cleaning</li>
          <li>Move-Out Cleaning</li>
          <li>Post-Construction Cleaning</li>
          <li>Furniture Cleaning</li>
          <li>Curtain Cleaning</li>
          <li>AC Cleaning</li>
          <li>Sanitization Services</li>
        </ul>
      </section>

      <section className="mt-16 max-w-4xl">
        <h2 className="font-display text-2xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="mt-5 divide-y divide-line border-y border-line">
          <details className="group py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              How much does deep cleaning cost in Kochi?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              The cost depends on factors such as the size of the property,
              number of rooms, condition of the home, and services required.
              Contact Ohserve Solutions for a customized quotation.
            </p>
          </details>
          <details className="group py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              What is included in home deep cleaning?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Home deep cleaning generally involves detailed cleaning of living
              areas, bedrooms, kitchens, bathrooms, floors, windows, fixtures,
              and other accessible areas. The exact scope can vary depending on
              the selected package.
            </p>
          </details>
          <details className="group py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              Do you provide apartment deep cleaning in Kochi?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Yes. Ohserve Solutions provides deep cleaning services for
              apartments and flats in Kochi.
            </p>
          </details>
          <details className="group py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              Do you provide villa cleaning services?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Yes. Our cleaning services can be arranged for villas and larger
              residential properties based on their size and cleaning
              requirements.
            </p>
          </details>
          <details className="group py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              Do you provide kitchen deep cleaning?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Yes. Kitchen deep cleaning can include countertops, sinks,
              cabinets, cooking areas, appliance exteriors, corners, and other
              areas where grease and dirt accumulate.
            </p>
          </details>
          <details className="group py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              Do you provide bathroom deep cleaning?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Yes. Our bathroom cleaning service covers toilets, washbasins,
              showers, floors, mirrors, fixtures, tiles, and other accessible
              bathroom surfaces.
            </p>
          </details>
          <details className="group py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              Can I book a one-time deep cleaning service?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Yes. Whether you need a one-time deep clean before guests arrive,
              after a busy period, before moving into a property, or simply to
              refresh your home, contact Ohserve Solutions to arrange the
              service.
            </p>
          </details>
          <details className="group py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              Which areas in Kochi do you cover?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Ohserve Solutions serves major areas across Kochi and surrounding
              locations, including Kakkanad, Edappally, Vyttila, Palarivattom,
              Kaloor, Kalamassery, Aluva, Kadavanthra, Tripunithura, Fort Kochi,
              and nearby areas.
            </p>
          </details>
          <details className="group py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              How can I book deep cleaning services in Kochi?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Contact Ohserve Solutions through the available phone, WhatsApp,
              or booking option on our website. Share your location, property
              type, and cleaning requirements, and our team can help you choose
              the appropriate service.
            </p>
          </details>
        </div>
      </section>
    </article>
  );
}

function KitchenCleaningContent() {
  return (
    <article className="mt-20 border-t border-line pt-14">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
          Home cleaning in Kochi
        </p>
        <h2 className="font-display text-3xl font-bold mt-3">
          Professional Kitchen Cleaning Services in Kochi
        </h2>
        <p className="mt-5 text-ink/70 leading-relaxed">
          A clean kitchen makes everyday life easier. But with regular cooking,
          oil splashes, food particles, steam, dust, and moisture can leave
          behind buildup that isn&apos;t always easy to remove.
        </p>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Ohserve Solutions provides professional kitchen cleaning services in
          Kochi, helping homeowners maintain cleaner and more comfortable
          cooking spaces. Our team focuses on the surfaces, corners, fixtures,
          and areas that are often missed during routine household cleaning.
        </p>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Whether you need a one-time kitchen deep clean or want to bring your
          kitchen back to a fresh condition, we can tailor the cleaning
          according to your requirements.
        </p>
        <p className="mt-4 font-semibold leading-relaxed">
          Need your kitchen professionally cleaned? Get in touch with Ohserve
          Solutions today.
        </p>
      </div>

      <div className="grid gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-4">
        <ImagePlaceholder
          label="Clean kitchen"
          path="/images/kitchen-cleaning/kitchen.jpg"
        />
        <ImagePlaceholder
          label="Countertops and sink"
          path="/images/kitchen-cleaning/countertops-sink.jpg"
        />
        <ImagePlaceholder
          label="Cooking area"
          path="/images/kitchen-cleaning/cooking-area.jpg"
        />
        <ImagePlaceholder
          label="Kitchen appliances"
          path="/images/kitchen-cleaning/appliances.jpg"
        />
      </div>

      <section className="mt-16 max-w-3xl">
        <h2 className="font-display text-2xl font-bold">
          A Cleaner Kitchen Starts With the Details
        </h2>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Kitchen cleaning isn&apos;t simply about wiping a countertop and
          sweeping the floor. Grease can settle around cooking areas, dust can
          collect on cabinet surfaces, and food residue can remain around sinks
          and appliances. Over time, these small deposits can make the entire
          kitchen look untidy.
        </p>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Our approach is to work through the kitchen systematically, focusing
          on frequently used surfaces as well as areas that are less convenient
          to clean yourself.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold">
          Our Kitchen Cleaning Service
        </h2>
        <p className="mt-4 text-ink/70 leading-relaxed">
          We can help clean a variety of kitchen areas, including:
        </p>
        <div className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-2">
          <div className="border-t border-line pt-5">
            <h3 className="font-display text-xl font-bold">
              Worktops &amp; Counter Surfaces
            </h3>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Countertops are constantly exposed to food preparation, spills,
              grease, and everyday use. We clean accessible work surfaces to
              remove accumulated dirt and residue.
            </p>
          </div>
          <div className="border-t border-line pt-5">
            <h3 className="font-display text-xl font-bold">
              Sink &amp; Washing Area
            </h3>
            <p className="mt-3 text-ink/70 leading-relaxed">
              The sink area can quickly become a collection point for food
              particles, water marks, and grime. We clean the sink and
              surrounding accessible surfaces for a fresher finish.
            </p>
          </div>
          <div className="border-t border-line pt-5">
            <h3 className="font-display text-xl font-bold">Cooking Area</h3>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Cooking often leaves grease and food splashes around the stove and
              nearby surfaces. We give these areas detailed attention as part
              of the selected cleaning service.
            </p>
          </div>
          <div className="border-t border-line pt-5">
            <h3 className="font-display text-xl font-bold">
              Cabinets &amp; Storage Areas
            </h3>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Cabinet doors, handles, and accessible surfaces can collect dust
              and grease over time. We clean these areas carefully to improve
              the overall appearance of the kitchen.
            </p>
          </div>
          <div className="border-t border-line pt-5">
            <h3 className="font-display text-xl font-bold">Appliances</h3>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Appliances are an important part of any kitchen but can be
              difficult to clean thoroughly. Depending on your selected
              service, we can clean accessible surfaces and areas of:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-ink/70">
              <li>Ovens and microwaves</li>
              <li>Refrigerators</li>
              <li>Dishwashers</li>
              <li>Other kitchen appliances</li>
            </ul>
            <p className="mt-3 text-ink/70 leading-relaxed">
              The exact cleaning process depends on the appliance type,
              condition, and service requirements.
            </p>
          </div>
          <div className="border-t border-line pt-5">
            <h3 className="font-display text-xl font-bold">Kitchen Floors</h3>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Food particles, dust, grease, and everyday foot traffic can leave
              kitchen floors looking dull. Our team cleans accessible flooring
              and pays attention to corners and edges where dirt can
              accumulate.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="font-display text-2xl font-bold">
          When Should You Consider a Kitchen Deep Clean?
        </h2>
        <p className="mt-4 text-ink/70 leading-relaxed">
          A professional kitchen deep cleaning can be useful when your kitchen
          needs more attention than your regular cleaning routine provides. You
          may consider booking a deep clean:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink/70">
          <li>After moving into a new home or before moving out</li>
          <li>Before or after a special occasion</li>
          <li>After renovation or maintenance work</li>
          <li>When grease buildup has become noticeable</li>
          <li>When the kitchen has not received a detailed clean for some time</li>
          <li>As part of a larger home deep-cleaning service</li>
        </ul>
        <p className="mt-4 text-ink/70 leading-relaxed">
          A detailed cleaning can help refresh the space and make regular
          maintenance easier afterward.
        </p>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="font-display text-2xl font-bold">
          Kitchen Cleaning for Homes Across Kochi
        </h2>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Every kitchen has its own layout and cleaning requirements. A compact
          apartment kitchen may need a different approach from a large villa
          kitchen. Ohserve Solutions provides kitchen cleaning for different
          types of homes across Kochi.
        </p>
        <div className="mt-7 space-y-6">
          <div>
            <h3 className="font-display text-lg font-bold">Apartments &amp; Flats</h3>
            <p className="mt-2 text-ink/70 leading-relaxed">
              Suitable for homeowners and tenants who want their kitchen
              professionally cleaned without spending hours doing it
              themselves.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold">Independent Houses</h3>
            <p className="mt-2 text-ink/70 leading-relaxed">
              We can work around the layout and requirements of individual
              homes.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold">Villas</h3>
            <p className="mt-2 text-ink/70 leading-relaxed">
              Larger kitchens and multiple cooking areas can be handled
              according to the property&apos;s cleaning requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold">
          Why Choose Ohserve Solutions?
        </h2>
        <p className="mt-4 max-w-3xl text-ink/70 leading-relaxed">
          At Ohserve Solutions, we aim to make professional cleaning
          straightforward and convenient. Our service is focused on:
        </p>
        <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="font-semibold">Detailed Cleaning</h3>
            <p className="mt-1 text-sm text-ink/70">
              Attention to areas commonly overlooked during everyday cleaning.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Professional Service</h3>
            <p className="mt-1 text-sm text-ink/70">
              A systematic approach rather than simply cleaning visible
              surfaces.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Flexible Requirements</h3>
            <p className="mt-1 text-sm text-ink/70">
              Cleaning requirements can vary to suit each kitchen and property.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Convenient Booking</h3>
            <p className="mt-1 text-sm text-ink/70">
              Tell us what needs attention and we can help arrange a suitable
              service.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Local Service</h3>
            <p className="mt-1 text-sm text-ink/70">
              Serving customers across Kochi and selected surrounding areas.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 border-y border-line py-10">
        <h2 className="font-display text-2xl font-bold">
          Areas We Serve in Kochi
        </h2>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Our kitchen cleaning services are available across several parts of
          Kochi, including:
        </p>
        <p className="mt-4 leading-relaxed">
          Kakkanad, Edappally, Vyttila, Palarivattom, Kaloor, Kadavanthra,
          Thrikkakara, Kalamassery, Aluva, Tripunithura, Maradu, Thevara,
          Panampilly Nagar, Fort Kochi, Mattancherry, Ernakulam, and nearby
          areas.
        </p>
        <p className="mt-3 text-sm text-ink/60">
          If you don&apos;t see your location above, contact us to check whether
          we can provide the service at your property.
        </p>
      </section>

      <section className="mt-14 rounded-2xl bg-orange-light p-7 sm:p-10">
        <h2 className="font-display text-2xl font-bold">
          Make Your Kitchen Easier to Maintain
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-ink/75">
          A kitchen doesn&apos;t need to look dirty before it needs professional
          attention. Regular professional cleaning can help manage the buildup
          that is difficult to deal with during a busy daily routine.
        </p>
        <p className="mt-3 max-w-3xl leading-relaxed text-ink/75">
          Instead of spending your weekend scrubbing grease, stains, corners,
          and difficult areas, let Ohserve Solutions take care of your kitchen
          cleaning in Kochi.
        </p>
        <p className="mt-3 max-w-3xl font-semibold leading-relaxed">
          Contact us today to enquire about our kitchen cleaning and deep
          cleaning services.
        </p>
        <a
          href="#booking"
          className="focus-ring mt-6 inline-flex rounded-lg bg-orange px-5 py-3 font-semibold text-white transition-colors hover:bg-orange-dark"
        >
          Request kitchen cleaning
        </a>
      </section>

      <section className="mt-16 max-w-4xl">
        <h2 className="font-display text-2xl font-bold">
          Frequently Asked Questions About Kitchen Cleaning
        </h2>
        <div className="mt-5 divide-y divide-line border-y border-line">
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              What is the difference between regular kitchen cleaning and deep
              cleaning?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Regular cleaning generally focuses on everyday dirt and commonly
              used surfaces. Deep cleaning involves more detailed attention to
              buildup, corners, fixtures, accessible appliance areas, and other
              parts of the kitchen that may not be cleaned frequently.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              Can I book kitchen cleaning without booking whole-house cleaning?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Yes. You can enquire about a standalone kitchen cleaning service
              based on your requirements.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              Do you clean kitchens in apartments?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Yes. We provide kitchen cleaning services for apartments, flats,
              houses, and villas.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              Can you clean a kitchen with heavy grease buildup?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Our team can assess the condition of the kitchen and provide the
              appropriate cleaning service. The result can depend on the type
              and extent of the buildup and the condition of the surfaces.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              Do you provide kitchen cleaning in Kakkanad?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Yes. Kakkanad is among the areas we serve in Kochi. Contact
              Ohserve Solutions to confirm availability for your exact
              location.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              How do I book a kitchen cleaning service in Kochi?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Contact Ohserve Solutions through our available phone, WhatsApp,
              or online booking channel. Share your location and requirements,
              and our team will assist you with the booking.
            </p>
          </details>
        </div>
      </section>
    </article>
  );
}

function WaterTankCleaningContent() {
  return (
    <article className="mt-20 border-t border-line pt-14">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
          Water tank cleaning in Kochi
        </p>
        <h2 className="font-display text-3xl font-bold mt-3">
          Professional Water Tank Cleaning Services in Kochi
        </h2>
        <p className="mt-5 text-ink/70 leading-relaxed">
          Looking for water tank cleaning in Kochi? Ohserve Solutions cleans
          residential overhead water tanks and sumps, removing settled sludge
          and residue before scrubbing and disinfecting accessible tank
          surfaces. Regular tank cleaning helps keep stored water systems
          cleaner for everyday household use.
        </p>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Our team can help with water tank cleaning for apartments,
          independent houses, and villas. The time and quote depend on the tank
          type, capacity, access, and condition, so share those details when
          requesting a booking.
        </p>
      </div>

      <section className="mt-16 max-w-3xl">
        <h2 className="font-display text-2xl font-bold">
          What Is Included in Water Tank Cleaning?
        </h2>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Water tank cleaning in Kochi typically includes draining the tank
          where required, removing settled sludge, scrubbing accessible
          surfaces, and disinfecting the tank. The exact process is confirmed
          based on the tank setup and safe access at your property.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink/70">
          <li>Cleaning for overhead tanks and underground sumps</li>
          <li>Removal of settled dirt, sediment, and residue</li>
          <li>Scrubbing of accessible tank walls and floor</li>
          <li>Disinfection as part of the agreed cleaning service</li>
          <li>Service planning based on tank capacity and access</li>
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-bold">
          Overhead Tank and Sump Cleaning in Kochi
        </h2>
        <div className="mt-8 grid gap-x-12 gap-y-10 md:grid-cols-2">
          <div className="border-t border-line pt-5">
            <h3 className="font-display text-xl font-bold">
              Overhead Water Tank Cleaning
            </h3>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Overhead tanks can collect sediment over time. We clean
              accessible residential tanks after checking the tank location,
              capacity, and access arrangements.
            </p>
          </div>
          <div className="border-t border-line pt-5">
            <h3 className="font-display text-xl font-bold">Sump Cleaning</h3>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Underground sumps also need periodic attention. Tell us the sump
              size and access details so we can confirm the cleaning scope and
              availability for your property.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 border-y border-line py-10">
        <h2 className="font-display text-2xl font-bold">
          Water Tank Cleaning Across Kochi
        </h2>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Request water tank cleaning in Kakkanad, Edappally, Vyttila,
          Palarivattom, Kaloor, Kadavanthra, Kalamassery, Aluva, Thrikkakara,
          Tripunithura, Maradu, Fort Kochi, or nearby parts of Kochi. Contact
          Ohserve Solutions to confirm service availability for your exact
          location.
        </p>
      </section>

      <section className="mt-16 max-w-4xl">
        <h2 className="font-display text-2xl font-bold">
          Water Tank Cleaning FAQs
        </h2>
        <div className="mt-5 divide-y divide-line border-y border-line">
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              How often should a water tank be cleaned?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Cleaning frequency depends on the tank, water source, and visible
              sediment. Check your tank periodically and arrange cleaning when
              residue or buildup is present.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              Do you clean both overhead tanks and underground sumps?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Yes, you can enquire about cleaning for overhead water tanks and
              underground sumps in Kochi. Share the tank type, approximate
              capacity, and access details so we can confirm the service.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              How much does water tank cleaning cost in Kochi?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              The quote depends on tank capacity, type, condition, and access.
              Send these details through the booking form to check the price
              for your property.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              Which areas in Kochi do you serve?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              We accept enquiries from Kakkanad, Edappally, Vyttila,
              Palarivattom, Kaloor, Kadavanthra, Kalamassery, Aluva,
              Thrikkakara, Tripunithura, and other nearby areas. Contact us to
              confirm availability for your location.
            </p>
          </details>
        </div>
      </section>
    </article>
  );
}

function SofaCleaningContent() {
  return (
    <article className="mt-20 border-t border-line pt-14">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
          Sofa and upholstery cleaning in Kochi
        </p>
        <h2 className="font-display text-3xl font-bold mt-3">
          Professional Sofa Cleaning Services in Kochi
        </h2>
        <p className="mt-5 text-ink/70 leading-relaxed">
          Looking for sofa cleaning in Kochi? Ohserve Solutions offers
          upholstery cleaning using shampoo washing and vacuum extraction,
          with a fabric-conscious approach. A professional sofa clean can help
          refresh regularly used seating and remove everyday dust and surface
          soil, depending on the fabric and its condition.
        </p>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Sofa materials respond differently to moisture and cleaning
          solutions. Share the upholstery type and any stains or care
          instructions when you enquire so the team can confirm suitability
          and the service scope before cleaning.
        </p>
      </div>

      <section className="mt-16 max-w-3xl">
        <h2 className="font-display text-2xl font-bold">
          Sofa Shampoo Cleaning and Vacuum Extraction
        </h2>
        <p className="mt-4 text-ink/70 leading-relaxed">
          The sofa cleaning service combines shampoo washing with vacuum
          extraction for suitable upholstery. The method and expected results
          depend on the fabric, existing care instructions, and the kind of
          marks present. Please point out delicate areas or previous damage
          before the appointment.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink/70">
          <li>Cleaning for eligible upholstered sofas and seating</li>
          <li>Shampoo washing followed by vacuum extraction</li>
          <li>Fabric suitability checked before the cleaning begins</li>
          <li>Scope confirmed for the sofa size and condition</li>
        </ul>
      </section>

      <section className="mt-16 border-y border-line py-10">
        <h2 className="font-display text-2xl font-bold">
          Sofa Cleaning Across Kochi
        </h2>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Request sofa or upholstery cleaning in Kakkanad, Edappally, Vyttila,
          Palarivattom, Kaloor, Kadavanthra, Kalamassery, Aluva, Thrikkakara,
          Tripunithura, Maradu, Fort Kochi, or nearby areas. Contact Ohserve
          Solutions to confirm service availability for your address.
        </p>
      </section>

      <section className="mt-16 max-w-4xl">
        <h2 className="font-display text-2xl font-bold">
          Sofa Cleaning FAQs
        </h2>
        <div className="mt-5 divide-y divide-line border-y border-line">
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              What is included in sofa cleaning?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              The service uses shampoo washing and vacuum extraction for
              suitable upholstery. The team confirms the applicable method
              after considering the fabric and the sofa&apos;s condition.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              Can every sofa fabric be shampoo cleaned?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Not every upholstery material has the same care requirements.
              Share the material and any manufacturer instructions so
              suitability can be checked before booking the cleaning method.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              How much does sofa cleaning cost in Kochi?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Pricing depends on the sofa size, upholstery, and cleaning
              requirements. The listed starting price is a guide; share the
              number of seats and sofa details to confirm your quote.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              Which areas in Kochi can I book sofa cleaning in?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              You can enquire from areas including Kakkanad, Edappally,
              Vyttila, Palarivattom, Kaloor, Kadavanthra, and nearby parts of
              Kochi. Contact us to check availability for your location.
            </p>
          </details>
        </div>
      </section>
    </article>
  );
}

function NewbornHomeCleaningContent() {
  return (
    <article className="mt-20 border-t border-line pt-14">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
          Newborn home cleaning in Kochi
        </p>
        <h2 className="font-display text-3xl font-bold mt-3">
          Newborn Baby Home Cleaning Services in Kochi
        </h2>
        <p className="mt-5 text-ink/70 leading-relaxed">
          Preparing your home for a new baby? Ohserve Solutions provides
          newborn home cleaning in Kochi with a chemical-light approach for
          homes with infants. Discuss the rooms and surfaces you want
          prioritized so the cleaning plan can be agreed before the visit.
        </p>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Every household has different needs. Let the team know about the
          nursery setup, sensitive surfaces, product preferences, and your
          appointment timing when you enquire. We can confirm the available
          cleaning scope and guidance for your home.
        </p>
      </div>

      <section className="mt-16 max-w-3xl">
        <h2 className="font-display text-2xl font-bold">
          A Thoughtful Cleaning Plan for Homes With Infants
        </h2>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Before booking, make a short list of the areas that need attention,
          such as the nursery, frequently used rooms, and shared household
          spaces. Confirm the included tasks, products, and any preparation
          needed with the team so expectations are clear for the appointment.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-ink/70">
          <li>Cleaning planned around your home and priority areas</li>
          <li>A chemical-light approach, as described for this service</li>
          <li>Cleaning requirements discussed before the appointment</li>
          <li>Product and room-use guidance confirmed with the team</li>
        </ul>
        <p className="mt-4 text-sm text-ink/60 leading-relaxed">
          This is a home cleaning service, not medical-grade sterilization.
          Discuss any health-related or product-specific requirements with
          your healthcare professional and the service team before booking.
        </p>
      </section>

      <section className="mt-16 border-y border-line py-10">
        <h2 className="font-display text-2xl font-bold">
          Newborn Home Cleaning Across Kochi
        </h2>
        <p className="mt-4 text-ink/70 leading-relaxed">
          Enquire about newborn home cleaning in Kakkanad, Edappally, Vyttila,
          Palarivattom, Kaloor, Kadavanthra, Kalamassery, Aluva, Thrikkakara,
          Tripunithura, Maradu, Fort Kochi, and nearby areas. Contact Ohserve
          Solutions to confirm availability for your address and preferred
          appointment time.
        </p>
      </section>

      <section className="mt-16 max-w-4xl">
        <h2 className="font-display text-2xl font-bold">
          Newborn Home Cleaning FAQs
        </h2>
        <div className="mt-5 divide-y divide-line border-y border-line">
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              What does newborn home cleaning include?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              The service is planned around your home and agreed priorities.
              Confirm which rooms, surfaces, and tasks are included with
              Ohserve Solutions before the appointment.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              What does chemical-light cleaning mean?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              The service is described as chemical-light, but product details
              can depend on the cleaning task. Ask the team which products are
              planned and share any sensitivities or preferences in advance.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              Can I request cleaning before bringing my baby home?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Yes, you can enquire about scheduling a home clean before your
              expected arrival date. Share your preferred date and priority
              rooms so the team can confirm availability and preparation
              guidance.
            </p>
          </details>
          <details className="py-5">
            <summary className="cursor-pointer list-none font-semibold focus-ring rounded-sm">
              How do I book newborn home cleaning in Kochi?
            </summary>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Use the booking form to share your location, preferred date,
              home details, and cleaning priorities. Ohserve Solutions can
              follow up to confirm the service scope and availability.
            </p>
          </details>
        </div>
      </section>
    </article>
  );
}

export default function ServiceDetailPage({
  params,
}: {
  params: { category: string; service: string };
}) {
  const result = getService(params.category, params.service);
  if (!result) notFound();
  const { service, category } = result;

  return (
    <section className="max-w-content mx-auto px-6 py-16">
      <Link
        href={`/services/${category.slug}`}
        className="inline-flex items-center gap-1.5 text-sm text-ink/60 hover:text-ink focus-ring rounded-sm"
      >
        <ChevronLeft size={16} />
        {category.name}
      </Link>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] mt-6">
        <div>
          <div className="h-16 w-16 rounded-2xl bg-mist flex items-center justify-center mb-5">
            <Image src={service.icon} alt={service.name} width={28} height={28} className="text-orange-dark" />
          </div>
          <h1 className="font-display font-bold text-4xl">
            {service.slug === "deep-cleaning"
              ? "Deep Cleaning Services in Kochi"
              : service.slug === "kitchen-cleaning"
                ? "Professional Kitchen Cleaning Services in Kochi"
              : service.slug === "water-tank-cleaning"
                ? "Water Tank Cleaning Services in Kochi"
              : service.slug === "sofa-cleaning"
                ? "Sofa Cleaning Services in Kochi"
              : service.slug === "newborn-home-cleaning"
                ? "Newborn Home Cleaning Services in Kochi"
              : service.name}
          </h1>
          <p className="text-ink/70 mt-4 text-lg leading-relaxed max-w-lg">
            {service.slug === "sofa-cleaning"
              ? "Professional sofa and upholstery cleaning in Kochi with shampoo washing and vacuum extraction for suitable fabrics."
              : service.slug === "newborn-home-cleaning"
                ? "Chemical-light home cleaning in Kochi for families preparing for a newborn. Discuss priority rooms, products, and appointment guidance with our team."
                : service.description}
          </p>

          <div className="flex gap-6 mt-6">
            <div className="flex items-center gap-2 text-sm text-ink/70">
              <Clock size={16} className="text-orange-dark" />
              {service.duration}
            </div>
            <div className="flex items-center gap-2 text-sm text-ink/70">
              <IndianRupee size={16} className="text-orange-dark" />
              from ₹{service.priceFrom}
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-white p-6 mt-10">
            <p className="font-display font-bold text-lg">Other {category.name.toLowerCase()} services</p>
            <ul className="mt-4 space-y-3">
              {category.services
                .filter((s) => s.slug !== service.slug)
                .map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${category.slug}/${s.slug}`}
                      className="text-sm text-ink/75 hover:text-orange-dark focus-ring rounded-sm"
                    >
                      {s.name} — from ₹{s.priceFrom}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div
          id="booking"
          className="rounded-2xl border border-line bg-white p-8 h-fit lg:sticky lg:top-28"
        >
          <p className="font-display font-bold text-xl mb-1">Request this service</p>
          <p className="text-sm text-ink/60 mb-6">
            We&apos;ll confirm your slot by phone or WhatsApp.
          </p>
          <BookingForm defaultService={service.name} />
        </div>
      </div>

      {service.slug === "deep-cleaning" && <DeepCleaningContent />}
      {service.slug === "kitchen-cleaning" && <KitchenCleaningContent />}
      {service.slug === "water-tank-cleaning" && <WaterTankCleaningContent />}
      {service.slug === "sofa-cleaning" && <SofaCleaningContent />}
      {service.slug === "newborn-home-cleaning" && (
        <NewbornHomeCleaningContent />
      )}
    </section>
  );
}
