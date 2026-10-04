"use client";

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { pushDataLayer } from "@/lib/analytics";

type Props = {
  defaultService?: string;
  compact?: boolean;
};

type Status = "idle" | "submitting" | "success" | "error";

export default function BookingForm({ defaultService, compact }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      pushDataLayer("booking_request_success", {
        service_name: String(data.service || defaultService || "unspecified"),
        lead_source: "booking_form",
      });
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-orange/30 bg-orange-light px-6 py-8 text-center">
        <CheckCircle2 className="mx-auto mb-3 text-orange-dark" size={32} />
        <p className="font-display text-xl text-orange-dark">Request received</p>
        <p className="text-sm text-ink/70 mt-2">
          We&apos;ll call you shortly to confirm your slot.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm underline text-orange-dark focus-ring rounded-sm"
        >
          Book another service
        </button>
      </div>
    );
  }

  return (
    <form
      id="booking-request-form"
      data-gtm-form="booking_request"
      onSubmit={handleSubmit}
      className="grid gap-4"
    >
      {defaultService && (
        <input type="hidden" name="service" value={defaultService} />
      )}

      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field
          label="Phone number"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
        />
      </div>

      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="Email" name="email" type="email" autoComplete="email" />
        <Field label="Preferred date" name="preferredDate" type="date" />
      </div>

      {!defaultService && (
        <Field label="Service needed" name="service" required />
      )}

      <Field label="Address in Kochi" name="address" required />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink/80 mb-1.5">
          Anything we should know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm focus-ring"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-orange-dark">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-orange text-paper px-6 py-3 text-sm font-medium hover:bg-orange-dark transition-colors disabled:opacity-60 focus-ring"
      >
        {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
        {status === "submitting" ? "Sending request…" : "Request this booking"}
      </button>
      <p className="text-xs text-ink/50">
        We&apos;ll call or WhatsApp you to confirm — no payment is taken here.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink/80 mb-1.5">
        {label}
        {required && <span className="text-orange"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm focus-ring"
      />
    </div>
  );
}
