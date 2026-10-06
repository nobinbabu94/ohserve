import type { Metadata } from "next";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Maid Services Across Kerala | OhServe Solutions",
  description:
    "Looking for maid services? Enquire with OhServe about a house maid or household help. Share your needs, location, and preferred timing.",
};

export default function MaidServicesPage() {
  return (
    <>
      <section className="max-w-content mx-auto md:px-6 py-12 sm:py-16">
        <div className="grid overflow-hidden md:rounded-3xl bg-ink md:min-h-[420px] md:grid-cols-2">
          <div className="flex flex-col justify-center p-7 text-white sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-light">
              Home maid and household help
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Maid Services for Your Home
            </h1>
            <p className="mt-5 max-w-lg leading-relaxed text-white/75">
              Looking for a house maid or domestic help? Tell us about
              the household tasks you need help with, your location, and your
              preferred schedule. We will follow up to discuss your request and
              confirm current availability.
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
              alt="Housemaid providing household help in a home"
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

      <section className="max-w-content mx-auto px-6 pb-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
            Home maid services
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold">
            Find household help for your home
          </h2>
          <p className="mt-4 leading-relaxed text-ink/70">
            OhServe accepts enquiries from people looking for maid services
            across Kerala. If you need help with regular
            home cleaning, kitchen tasks, or other household chores, describe
            what you have in mind in the enquiry form. We will discuss the
            requested work and let you know what can be arranged.
          </p>
          <p className="mt-4 leading-relaxed text-ink/70">
            Every home and schedule is different. When you contact us about a
            house maid, include the type of help you need, your
            preferred days or timing, and any important details about the home.
            We will confirm the service scope, schedule, and availability with
            you before a booking is finalised.
          </p>
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 pb-16">
        <div className="rounded-2xl bg-mist p-6 sm:p-8">
          <h2 className="font-display text-2xl font-bold">
            Maid services in Kochi, Calicut, Thrissur, and Malappuram
          </h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-ink/70">
            OhServe provides maid services in Kochi, Calicut (Kozhikode),
            Thrissur, and Malappuram. Share your city and exact area or address
            in the enquiry form so our team can discuss the service and
            schedule you need.
          </p>
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 pb-20">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold">
            Maid services: frequently asked questions
          </h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            <details className="group py-5">
              <summary className="cursor-pointer list-none font-semibold marker:hidden">
                How do I enquire about maid services?
              </summary>
              <p className="mt-3 leading-relaxed text-ink/70">
                Complete the form with your name, phone number, address, and
                preferred timing. Use the message field to describe the
                household help you need. Our team will contact you to discuss
                the request and availability.
              </p>
            </details>
            <details className="group py-5">
              <summary className="cursor-pointer list-none font-semibold marker:hidden">
                What household tasks can I ask about?
              </summary>
              <p className="mt-3 leading-relaxed text-ink/70">
                Include the tasks you need help with, such as routine home
                cleaning, kitchen work, or other household chores. We will
                review your requirements and confirm which services and scope
                can be arranged.
              </p>
            </details>
            <details className="group py-5">
              <summary className="cursor-pointer list-none font-semibold marker:hidden">
                Can I request a daily, part-time, or full-time house maid?
              </summary>
              <p className="mt-3 leading-relaxed text-ink/70">
                Share your preferred schedule in the enquiry form. Daily,
                part-time, or full-time arrangements depend on current
                availability and the requirements of your home, so our team
                will confirm the options with you.
              </p>
            </details>
            <details className="group py-5">
              <summary className="cursor-pointer list-none font-semibold marker:hidden">
                Do you provide maid services in my city?
              </summary>
              <p className="mt-3 leading-relaxed text-ink/70">
                We provide maid services in Kochi, Calicut (Kozhikode),
                Thrissur, and Malappuram. Share your exact locality or address
                so our team can discuss arrangements for your home.
              </p>
            </details>
            <details className="group py-5">
              <summary className="cursor-pointer list-none font-semibold marker:hidden">
                How much do maid services cost?
              </summary>
              <p className="mt-3 leading-relaxed text-ink/70">
                The cost depends on the work, schedule, and service scope. Share
                those details in your enquiry and our team will discuss the
                applicable price before you confirm a booking.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
