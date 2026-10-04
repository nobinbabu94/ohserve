"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { pushDataLayer } from "@/lib/analytics";

function trackClick(target: Element) {
  const element = target.closest("a, button");
  if (!element || (element instanceof HTMLButtonElement && element.disabled)) {
    return;
  }

  const href = element instanceof HTMLAnchorElement ? element.href : "";
  const label =
    element.getAttribute("aria-label") ||
    element.textContent?.replace(/\s+/g, " ").trim() ||
    element.getAttribute("title") ||
    "unlabeled";
  let event = "button_click";

  if (href.startsWith("tel:")) event = "phone_click";
  else if (href.startsWith("mailto:")) event = "email_click";
  else if (href.includes("wa.me") || href.includes("whatsapp.com")) {
    event = "whatsapp_click";
  } else if (element.getAttribute("href") === "#booking") {
    event = "booking_cta_click";
  } else if (element instanceof HTMLAnchorElement) {
    event = href.startsWith(window.location.origin)
      ? "internal_link_click"
      : "outbound_link_click";
  }

  pushDataLayer(event, {
    click_text: label.slice(0, 100),
    click_url: href || undefined,
    page_path: window.location.pathname,
  });
}

export default function SiteAnalytics() {
  const pathname = usePathname();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.target instanceof Element) trackClick(event.target);
    };
    const onSubmit = (event: SubmitEvent) => {
      if (!(event.target instanceof HTMLFormElement)) return;

      pushDataLayer("form_submit", {
        form_name:
          event.target.dataset.gtmForm || event.target.id || "unspecified",
        page_path: window.location.pathname,
      });
    };
    const onFocusIn = (event: FocusEvent) => {
      if (
        !(event.target instanceof HTMLInputElement ||
          event.target instanceof HTMLTextAreaElement)
      ) {
        return;
      }

      const form = event.target.form;
      if (!form || form.dataset.gtmStarted) return;
      form.dataset.gtmStarted = "true";

      pushDataLayer("form_start", {
        form_name: form.dataset.gtmForm || form.id || "unspecified",
        page_path: window.location.pathname,
      });
    };

    document.addEventListener("click", onClick);
    document.addEventListener("submit", onSubmit, true);
    document.addEventListener("focusin", onFocusIn);

    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("submit", onSubmit, true);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, []);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    pushDataLayer("virtual_page_view", {
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
