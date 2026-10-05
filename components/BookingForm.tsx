"use client";

import { useId, useState, type FormEvent } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { pushDataLayer } from "@/lib/analytics";

type Props = {
  defaultService?: string;
  compact?: boolean;
};

type Status = "idle" | "submitting" | "success" | "error";

const GENERIC_ERROR = "Something went wrong. Please try again or call us.";
const TIMEOUT_MS = 20_000;

export default function BookingForm({ defaultService, compact }: Props) {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setErrorMessage("");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setErrorMessage(
          typeof body?.error === "string" ? body.error : GENERIC_ERROR
        );
        setStatus("error");
        return;
      }
    } catch {
      setErrorMessage(
        controller.signal.aborted
          ? "The request timed out. Please try again or call us."
          : "Couldn't reach the server. Check your connection or call us."
      );
      setStatus("error");
      return;
    } finally {
      clearTimeout(timer);
    }

    setStatus("success");

    // Analytics must never affect the outcome of a successful booking.
    try {
      pushDataLayer("booking_request_success", {
        service_name: String(data.service || defaultService || "unspecified"),
        lead_source: "booking_form",
      });
    } catch {
      /* ignore */
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-orange/30 bg-orange-light px-6 py-8 text-center"
      >
        <CheckCircle2 className="mx-auto mb-3 text-orange-dark" size={32} />
        <p className="font-display text-xl text-orange-dark">Request received</p>
        <p className="text-sm text-ink/70 mt-2">
          We&apos;ll call you shortly to confirm your slot.
        </p>
        <button
          type="button"
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
      data-gtm-form="booking_request"
      onSubmit={handleSubmit}
      className="grid gap-4"
    >
      {/* Honeypot: real users never see or fill this */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {defaultService && (
        <input type="hidden" name="service" value={defaultService} />
      )}

      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field
          id={`${uid}-name`}
          label="Full name"
          name="name"
          required
          autoComplete="name"
          maxLength={100}
        />
        <Field
          id={`${uid}-phone`}
          label="Phone number"
          name="phone"
          type="tel"
          inputMode="tel"
          required
          autoComplete="tel"
          maxLength={30}
        />
      </div>

      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field
          id={`${uid}-email`}
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
        />
        <Field
          id={`${uid}-date`}
          label="Preferred date"
          name="preferredDate"
          type="date"
        />
      </div>

      {!defaultService && (
        <Field
          id={`${uid}-service`}
          label="Service needed"
          name="service"
          required
          maxLength={100}
        />
      )}

      <Field
        id={`${uid}-address`}
        label="Address in Kochi"
        name="address"
        required
        autoComplete="street-address"
        maxLength={300}
      />

      <div>
        <label
          htmlFor={`${uid}-message`}
          className="block text-sm font-medium text-ink/80 mb-1.5"
        >
          Anything we should know?
        </label>
        <textarea
          id={`${uid}-message`}
          name="message"
          rows={3}
          maxLength={2000}
          className="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm focus-ring"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-orange-dark">
          {errorMessage}
        </p>
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
  id,
  label,
  name,
  type = "text",
  required,
  autoComplete,
  inputMode,
  maxLength,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-ink/80 mb-1.5">
        {label}
        {required && (
          <span className="text-orange" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        maxLength={maxLength}
        className="w-full rounded-lg border border-line bg-white px-4 py-2.5 text-sm focus-ring"
      />
    </div>
  );
}