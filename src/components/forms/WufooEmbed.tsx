"use client";

import { useEffect, useRef, useState } from "react";
import { thankYouHref } from "@/data/site";

type Props = {
  formHash: string;
  height?: number;
  header?: "show" | "hide";
  className?: string;
};

const WUFOO_USER = "gttacademy";
const WUFOO_HOST = "wufoo.com";
const WUFOO_ORIGIN = `https://${WUFOO_USER}.${WUFOO_HOST}`;
/** No allow-top-navigation / popups-escape — blocks old PHP confirmation redirects. */
const SAFE_SANDBOX = "allow-scripts allow-forms allow-same-origin";

let openPatchCount = 0;
let originalOpen: typeof window.open | null = null;
let keepOpenPatch = false;

function isLegacyConfirmationUrl(url: string) {
  return /thank-you\.php|download-brochure\.php|globalteachersacademy\.com\/(?:thank-you|download-brochure)/i.test(
    url,
  );
}

function goToThankYouPage() {
  window.location.replace(thankYouHref);
}

function installConfirmationOpenPatch() {
  if (openPatchCount === 0) {
    originalOpen = window.open.bind(window);
    window.open = ((url?: string | URL, target?: string, features?: string) => {
      const href = typeof url === "string" ? url : url?.toString?.() ?? "";
      if (href && isLegacyConfirmationUrl(href)) {
        goToThankYouPage();
        return null;
      }
      return originalOpen?.(url as string, target, features) ?? null;
    }) as typeof window.open;
  }
  openPatchCount += 1;

  return () => {
    if (keepOpenPatch) return;
    openPatchCount = Math.max(0, openPatchCount - 1);
    if (openPatchCount === 0 && originalOpen) {
      window.open = originalOpen;
      originalOpen = null;
    }
  };
}

function buildEmbedSrc(formHash: string, header: "show" | "hide") {
  const embedKey = `${formHash}${Math.floor(1e6 * Math.random())}`;
  let referrer = document.referrer || window.location.href;
  referrer = referrer.replace(/\//g, "wuslash").replace(/\+/g, "wube");

  const params = new URLSearchParams({
    embedKey,
    referrer,
  });
  if (header === "hide") params.set("header", "hide");

  return `${WUFOO_ORIGIN}/embed/${formHash}/?${params.toString()}`;
}

export default function WufooEmbed({ formHash, height = 617, header = "show", className }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [src, setSrc] = useState("");
  const [frameHeight, setFrameHeight] = useState(height);

  useEffect(() => {
    setSrc(buildEmbedSrc(formHash, header));
  }, [formHash, header]);

  useEffect(() => {
    let cancelled = false;
    let redirected = false;

    const redirectOnce = () => {
      if (cancelled || redirected) return;
      redirected = true;
      keepOpenPatch = true;

      // Kill iframe first so Wufoo cannot top-navigate after we reach /thank-you.
      const frame = iframeRef.current;
      if (frame) {
        frame.src = "about:blank";
        frame.remove();
      }

      goToThankYouPage();
    };

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== WUFOO_ORIGIN && event.origin !== `http://${WUFOO_USER}.${WUFOO_HOST}`) return;

      if (event.data === "formSubmitted") {
        redirectOnce();
        return;
      }

      if (typeof event.data === "string" && event.data.includes("|")) {
        const [rawHeight, key = ""] = event.data.split("|");
        const nextHeight = Number.parseInt(rawHeight, 10);
        if (!Number.isNaN(nextHeight) && key.startsWith(formHash)) {
          setFrameHeight(nextHeight);
        }
      }
    };

    window.addEventListener("message", onMessage);
    const removeOpenPatch = installConfirmationOpenPatch();

    return () => {
      cancelled = true;
      window.removeEventListener("message", onMessage);
      removeOpenPatch();
    };
  }, [formHash]);

  return (
    <div className={className}>
      {src ? (
        <iframe
          ref={iframeRef}
          id={`wufooForm${formHash}`}
          title="Online form"
          src={src}
          height={frameHeight}
          sandbox={SAFE_SANDBOX}
          className="wufoo-form-container w-full border-0"
          style={{ width: "100%", border: "none" }}
        />
      ) : (
        <p className="text-sm text-slate-500">
          Fill out my{" "}
          <a href={`${WUFOO_ORIGIN}/forms/${formHash}`} className="text-[#0045bc] underline">
            online form
          </a>
          .
        </p>
      )}
    </div>
  );
}
