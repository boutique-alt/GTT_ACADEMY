"use client";

import { useEffect, useRef, useState } from "react";
import { thankYouHref } from "@/data/site";

type WufooFormInstance = {
  initialize: (options: Record<string, unknown>) => void;
  display: () => void;
};

type WufooFormConstructor = new () => WufooFormInstance;

declare global {
  interface Window {
    WufooForm?: WufooFormConstructor;
  }
}

type Props = {
  formHash: string;
  height?: number;
  header?: "show" | "hide";
  className?: string;
};

const FORM_JS = "https://secure.wufoo.com/scripts/embed/form.js";
const WUFOO_USER = "gttacademy";
const WUFOO_HOST = "wufoo.com";
const WUFOO_ORIGIN = `https://${WUFOO_USER}.${WUFOO_HOST}`;
const SUBMIT_REDIRECT_DELAY_MS = 2000;

let wufooScriptPromise: Promise<void> | null = null;

function loadWufooScript() {
  if (window.WufooForm) return Promise.resolve();
  if (wufooScriptPromise) return wufooScriptPromise;

  wufooScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${FORM_JS}"]`);
    if (existing) {
      if (window.WufooForm) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener(
        "error",
        () => {
          wufooScriptPromise = null;
          reject(new Error("Wufoo script failed"));
        },
        { once: true },
      );
      return;
    }

    const script = document.createElement("script");
    script.src = FORM_JS;
    script.async = true;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener(
      "error",
      () => {
        wufooScriptPromise = null;
        reject(new Error("Wufoo script failed"));
      },
      { once: true },
    );
    document.body.appendChild(script);
  });

  return wufooScriptPromise;
}

export default function WufooEmbed({ formHash, height = 617, header = "show", className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    let redirected = false;
    let timer: number | undefined;

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== WUFOO_ORIGIN && event.origin !== `http://${WUFOO_USER}.${WUFOO_HOST}`) return;
      if (event.data !== "formSubmitted") return;
      if (cancelled || redirected) return;
      redirected = true;
      timer = window.setTimeout(() => {
        if (!cancelled) window.location.replace(thankYouHref);
      }, SUBMIT_REDIRECT_DELAY_MS);
    };

    window.addEventListener("message", onMessage);
    return () => {
      cancelled = true;
      window.removeEventListener("message", onMessage);
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    let cancelled = false;
    let displayed = false;

    function tryDisplay() {
      if (cancelled || displayed || !window.WufooForm) return false;
      if (!document.getElementById(`wufoo-${formHash}`)) return false;
      displayed = true;
      const form = new window.WufooForm();
      form.initialize({
        userName: WUFOO_USER,
        formHash,
        autoResize: true,
        height: String(height),
        async: true,
        host: WUFOO_HOST,
        header,
        ssl: true,
      });
      form.display();
      return true;
    }

    void loadWufooScript()
      .then(() => {
        if (!cancelled) tryDisplay();
      })
      .catch(() => undefined);

    const interval = window.setInterval(() => {
      if (tryDisplay()) window.clearInterval(interval);
    }, 100);
    const timeout = window.setTimeout(() => window.clearInterval(interval), 10000);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [visible, formHash, height, header]);

  return (
    <div ref={containerRef} className={className}>
      {visible ? (
        <div id={`wufoo-${formHash}`}>
          <a href={`${WUFOO_ORIGIN}/forms/${formHash}/`}>Fill out my online form</a>
        </div>
      ) : (
        <div className="w-full animate-pulse rounded-xl bg-slate-100" style={{ minHeight: height }} />
      )}
    </div>
  );
}
