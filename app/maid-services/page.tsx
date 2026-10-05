import type { Metadata } from "next";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Maid Services in Kochi | OhServe Solutions",
  description:
    "Enquire about maid services in Kochi. Tell OhServe what household help you need and we will follow up about requirements and availability.",
};

export default function MaidServicesPage() {
  return (
    <>
      <section className="max-w-content mx-auto md:px-6 py-12 sm:py-16">
        <div className="grid overflow-hidden md:rounded-3xl bg-ink md:min-h-[420px] md:grid-cols-2">
          <div className="flex flex-col justify-center p-7 text-white sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-light">
              Household help in Kochi
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Maid services for your home
            </h1>
            <p className="mt-5 max-w-lg leading-relaxed text-white/75">
              Tell us what kind of household help you are looking for and your
              preferred schedule. Our team will follow up to discuss your
              requirements and current availability.
            </p>
            <a
              href="#request"
              className="mt-8 inline-flex w-fit rounded-full bg-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-dark focus-ring"
            >
              Enquire about maid services
            </a>
          </div>
          <div className="relative min-h-64 md:min-h-full">
            <Image
              src="/Housemaid-kochi-ohserve.webp"
              alt="OhServe home cleaning professional working in a home"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent md:bg-gradient-to-r md:from-ink/25 md:to-transparent" />
          </div>
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 pb-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="max-w-lg">
            <h2 className="font-display text-3xl font-bold">
              Tell us what you need
            </h2>
            <p className="mt-3 leading-relaxed text-ink/65">
              Share the type of household help you are looking for, along with
              your location and preferred timing. We will contact you to confirm
              the details and availability.
            </p>
            <p className="mt-4 text-sm text-ink/55">
              Service scope, schedule, and availability are confirmed with you
              before booking.
            </p>
          </div>

          <div id="request" className="scroll-mt-28 rounded-2xl border border-line bg-white p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold">
              Enquire about maid services
            </h2>
            <p className="mt-1 mb-6 text-sm text-ink/60">
              Use the message field to describe the household help and schedule
              you need.
            </p>
            <BookingForm defaultService="Maid Services" />
          </div>
        </div>
      </section>
    </>
  );
}
