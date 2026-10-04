"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { Phone, LayoutGrid, MessageSquare, X, Send, Loader2, CheckCircle2 } from "lucide-react";
import { companyInfo } from "@/lib/data";
import { pushDataLayer } from "@/lib/analytics";

const waLink = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(
  "Hi OhServe, I'd like to ask about a service."
)}`;
const telLink = `tel:${companyInfo.phone.replace(/\s/g, "")}`;

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.33 4.99L2 22l5.14-1.35c1.45.79 3.08 1.21 4.9 1.21 5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.18c-1.6 0-3.17-.43-4.54-1.24l-.33-.19-3.05.8.81-2.97-.21-.31A8.17 8.17 0 0 1 3.82 12c0-4.53 3.68-8.21 8.21-8.21S20.24 7.47 20.24 12s-3.68 8.18-8.2 8.18z" />
    </svg>
  );
}

export default function ContactDock() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      {/* Mobile bottom tab bar */}
      <nav
        className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-paper border-t border-line flex items-stretch"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium text-ink/70 focus-ring">
          <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
          WhatsApp
        </a>
        <a href={telLink} className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium text-ink/70 focus-ring">
          <Phone size={20} className="text-ink/70" />
          Call
        </a>
        <Link href="/services" className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium text-ink/70 focus-ring">
          <LayoutGrid size={20} className="text-ink/70" />
          Services
        </Link>
        <button
          type="button"
          onClick={() => setChatOpen(true)}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-medium text-orange-dark focus-ring"
        >
          <MessageSquare size={20} className="text-orange" />
          Chat
        </button>
      </nav>

      {/* Desktop floating buttons */}
      <div className="hidden md:flex flex-col gap-3 fixed right-6 bottom-6 z-40">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:brightness-95 transition focus-ring"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </a>
        <a
          href={telLink}
          aria-label="Call OhServe"
          className="h-14 w-14 rounded-full bg-ink text-paper flex items-center justify-center shadow-lg hover:bg-orange-dark transition focus-ring"
        >
          <Phone size={22} />
        </a>
        <button
          type="button"
          onClick={() => setChatOpen(true)}
          aria-label="Open chat"
          className="h-14 w-14 rounded-full bg-orange text-paper flex items-center justify-center shadow-lg hover:bg-orange-dark transition focus-ring"
        >
          <MessageSquare size={22} />
        </button>
      </div>

      {chatOpen && <ChatModal onClose={() => setChatOpen(false)} />}
    </>
  );
}

type Status = "idle" | "submitting" | "success" | "error";

function ChatModal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const quickReplies = [
    "I'd like to book a service",
    "What are your prices?",
    "Do you serve my area?",
  ];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("success");
      pushDataLayer("contact_message_success", {
        lead_source: "contact_chat",
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
      {/* backdrop */}
      <button
        aria-label="Close chat"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40"
      />

      {/* panel: bottom sheet on mobile, centered card on desktop */}
      <div className="relative w-full md:max-w-sm bg-paper rounded-t-3xl md:rounded-2xl border border-line shadow-xl p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] md:pb-6 max-h-[85vh] overflow-y-auto">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="font-display font-bold text-lg">Chat with OhServe</p>
            <p className="text-sm text-ink/55 mt-0.5">Usually replies within a few hours.</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="text-ink/40 hover:text-ink focus-ring rounded-sm">
            <X size={20} />
          </button>
        </div>

        {status === "success" ? (
          <div className="text-center py-6">
            <CheckCircle2 className="mx-auto mb-3 text-orange-dark" size={32} />
            <p className="font-medium">Message sent</p>
            <p className="text-sm text-ink/60 mt-1">We&apos;ll get back to you shortly.</p>
            <button onClick={onClose} className="mt-5 text-sm underline text-orange-dark focus-ring rounded-sm">
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap gap-2 mb-4">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => setMessage(q)}
                  className="text-xs rounded-full border border-line px-3 py-1.5 hover:border-orange hover:text-orange-dark transition-colors focus-ring"
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              id="contact-message-form"
              data-gtm-form="contact_message"
              onSubmit={handleSubmit}
              className="grid gap-3"
            >
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="name"
                  placeholder="Your name (optional)"
                  className="rounded-lg border border-line px-3.5 py-2.5 text-sm focus-ring"
                />
                <input
                  name="phone"
                  placeholder="Phone (optional)"
                  className="rounded-lg border border-line px-3.5 py-2.5 text-sm focus-ring"
                />
              </div>
              <textarea
                name="message"
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message…"
                className="rounded-lg border border-line px-3.5 py-2.5 text-sm focus-ring"
              />
              {status === "error" && <p className="text-xs text-orange-dark">{errorMessage}</p>}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange text-paper px-5 py-2.5 text-sm font-semibold hover:bg-orange-dark transition-colors disabled:opacity-60 focus-ring"
              >
                {status === "submitting" ? <Loader2 size={16} className="animate-spin" /> : <Send size={15} />}
                {status === "submitting" ? "Sending…" : "Send message"}
              </button>
            </form>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full border border-line py-2.5 text-sm font-medium hover:border-[#25D366] hover:text-[#1da851] transition-colors focus-ring"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              Or continue on WhatsApp
            </a>
          </>
        )}
      </div>
    </div>
  );
}
