import type { Metadata } from "next";
import Link from "next/link";
import { Heart, ShieldCheck, Sparkles, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Ohserve Solutions",
  description:
    "Learn about Ohserve Solutions, our mission, vision, and values. We provide professional deep cleaning services with care in Kochi, Kerala.",
};

const values = [
  {
    icon: Heart,
    title: "Customer First",
    body: "Every customer matters to us. We listen, understand, and do our best to meet your expectations.",
  },
  {
    icon: ShieldCheck,
    title: "Quality and Professionalism",
    body: "Our trained team approaches every job with discipline, attention to detail, and a commitment to doing things right.",
  },
  {
    icon: Sparkles,
    title: "Honesty and Transparency",
    body: "We believe in clear communication, fair value, and building trust through honest service.",
  },
  {
    icon: Heart,
    title: "Care and Hospitality",
    body: "We treat our customers and their spaces with respect, kindness, and consideration.",
  },
  {
    icon: Target,
    title: "Value for Money",
    body: "We understand that every rupee matters. We work hard to provide a service that makes you feel your money is well spent.",
  },
];

export default function AboutPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">
          About Ohserve Solutions
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
          We Care for Your Space, Just as You Do.
        </h1>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/70">
          <p>
            Welcome to <strong>Ohserve Solutions</strong>, your trusted partner
            for professional deep cleaning services in Kochi, Kerala.
          </p>
          <p>
            At Ohserve Solutions, we believe every customer deserves quality
            service, genuine care, and the best value for their money. We
            understand how important your home and space are to you, and we
            treat every service with care, respect, and attention to detail.
          </p>
          <p>
            Our team of well-trained and professional staff is committed to
            providing reliable services with discipline, kindness, and a
            welcoming attitude. We always strive to make your experience with
            us comfortable, smooth, and satisfying.
          </p>
        </div>
      </header>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-line bg-mist p-7 sm:p-8">
          <h2 className="font-display text-2xl font-bold">Our Mission</h2>
          <p className="mt-4 leading-relaxed text-ink/70">
            Our mission is to provide reliable, high-quality cleaning services
            with care, honesty, and professionalism. We aim to understand each
            customer&apos;s needs, offer good value for their money, and make
            every interaction a pleasant experience.
          </p>
        </section>
        <section className="rounded-2xl border border-line bg-orange-light/50 p-7 sm:p-8">
          <h2 className="font-display text-2xl font-bold">Our Vision</h2>
          <p className="mt-4 leading-relaxed text-ink/70">
            Our vision is to become a trusted and preferred cleaning service
            provider in Kochi and beyond by building lasting relationships with
            our customers through quality service, transparency, and genuine
            care.
          </p>
          <p className="mt-4 leading-relaxed text-ink/70">
            We aspire to set a standard where customers feel confident,
            respected, and happy to choose us every time they need professional
            cleaning services.
          </p>
        </section>
      </div>

      <section className="mt-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold">Our Values</h2>
          <p className="mt-3 leading-relaxed text-ink/65">
            The care we bring to every service starts with the values we share
            as a team.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-line bg-white p-6"
            >
              <Icon aria-hidden="true" size={22} className="text-orange-dark" />
              <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl bg-ink px-7 py-9 text-paper sm:px-10 sm:py-11">
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            We Are Here to Listen
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-paper/75">
            <p>
              At Ohserve Solutions, we believe good service begins with a
              conversation. Every customer has different needs, and we are
              always happy to hear yours.
            </p>
            <p>
              If you have any questions, concerns, or special requirements,
              please feel free to contact us without hesitation. We will listen
              with care and do our best to find the right solution for you.
            </p>
            <p>
              Currently serving <strong className="text-paper">Kochi, Kerala</strong>,
              we are here to help you enjoy cleaner, fresher, and more
              comfortable spaces through professional deep cleaning services.
            </p>
            <p>
              For us, it is not just about cleaning. It is about making every
              customer feel valued, respected, and satisfied.
            </p>
          </div>
          <p className="mt-6 font-display font-semibold leading-relaxed text-paper">
            Your comfort is our concern. Your trust is our responsibility. Your
            satisfaction is our priority.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-orange-light focus-ring"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <p className="mt-10 text-center font-display text-xl font-bold text-orange-dark">
        Ohserve Solutions – We Care. We Serve. You Matter.
      </p>
    </article>
  );
}
