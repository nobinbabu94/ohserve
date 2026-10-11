import type { Metadata } from "next";
import Link from "next/link";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | OhServe Solutions",
  description:
    "Learn how OhServe Solutions collects, uses, and protects personal information when you contact us or request a service.",
};

const sections = [
  {
    title: "Information we collect",
    body: (
      <>
        <p>When you submit a lead, booking, or contact form, we may collect your name, phone number, email address, service requested, preferred date, service address, and any message you choose to send. If you contact us by phone, email, or WhatsApp, we may also keep the information you provide in that conversation.</p>
      </>
    ),
  },
  {
    title: "How we use information",
    body: (
      <ul className="list-disc space-y-2 pl-5">
        <li>To respond to enquiries, contact you about your request, and arrange or provide services.</li>
        <li>To communicate service updates, answer questions, and provide customer support.</li>
        <li>To operate, secure, and improve our website and services.</li>
        <li>To meet legal obligations and protect our rights, customers, and business.</li>
      </ul>
    ),
  },
  {
    title: "Sharing and service providers",
    body: (
      <p>We do not sell your personal information. We share it only as needed with people who help us run our business and respond to you, such as our email delivery and website hosting providers. They may process information under their own privacy terms. We may also disclose information when required by law or to address security, fraud, or legal claims.</p>
    ),
  },
  {
    title: "Retention and security",
    body: (
      <p>We keep enquiry and service information for as long as reasonably needed to respond to you, provide services, maintain business records, resolve disputes, and meet legal requirements. We use reasonable safeguards to protect information, but no method of online transmission or storage can be guaranteed completely secure.</p>
    ),
  },
  {
    title: "Your choices and rights",
    body: (
      <p>You may ask us to access, correct, or delete personal information you have shared with us, or raise a concern about how it is handled. We may need to retain some information where the law or legitimate business records require it. To make a request, contact us using the details below.</p>
    ),
  },
  {
    title: "Children and policy updates",
    body: (
      <p>Our services and website are intended for adults arranging home or business services; please do not submit children&apos;s personal information. We may update this policy from time to time. The latest version will be posted on this page with its effective date.</p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <article className="max-w-content mx-auto px-6 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-dark">OhServe Solutions</p>
        <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-ink/55">Effective date: October 11, 2026</p>
        <p className="mt-6 text-base leading-relaxed text-ink/70">
          This policy explains how {companyInfo.legalName} (“OhServe”, “we”, “us”, or “our”) handles information when you visit our website, submit a lead or booking request, or contact us. By submitting a form, you ask us to use the information you provide to respond to and manage your enquiry.
        </p>
      </header>

      <div className="mt-10 max-w-3xl divide-y divide-line rounded-2xl border border-line bg-white px-6 sm:px-9">
        {sections.map(({ title, body }) => (
          <section key={title} className="py-7">
            <h2 className="font-display text-xl font-bold">{title}</h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink/70">{body}</div>
          </section>
        ))}
        <section className="py-7">
          <h2 className="font-display text-xl font-bold">Contact us</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">
            For privacy questions or requests, contact {companyInfo.legalName} at{" "}
            <a className="text-orange-dark underline" href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>,{" "}
            <a className="text-orange-dark underline" href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}>{companyInfo.phone}</a>, or write to {companyInfo.address}.
          </p>
        </section>
      </div>

      <p className="mt-8 text-sm text-ink/60">Questions about a service? <Link className="text-orange-dark underline" href="/contact">Contact OhServe</Link>.</p>
    </article>
  );
}
