"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useRef } from "react";

type ZeFn = ((...args: unknown[]) => unknown) & {
  activate?: (opts?: { hideOnClose?: boolean }) => void;
};

function getZE(): ZeFn | undefined {
  const w = window as Window & { zE?: ZeFn; zEmbed?: ZeFn };
  if (typeof w.zE === "function") return w.zE;
  if (typeof w.zEmbed === "function") return w.zEmbed;
  return undefined;
}

function callZE(...args: unknown[]) {
  const ze = getZE();
  if (!ze) return false;
  try {
    ze(...args);
    return true;
  } catch {
    return false;
  }
}

export default function FloatingChatButton() {
  const pendingOpen = useRef(false);
  const chatOpen = useRef(false);
  const listenersBound = useRef(false);
  const openWidget = useRef<() => boolean>(() => false);

  useEffect(() => {
    function hideLauncher() {
      if (chatOpen.current) return;
      callZE("messenger", "hide");
      callZE("webWidget", "hide");
    }

    function bindCloseListeners() {
      if (listenersBound.current || !getZE()) return;
      listenersBound.current = true;
      callZE("webWidget:on", "close", () => {
        chatOpen.current = false;
        callZE("webWidget", "hide");
      });
      callZE("messenger:on", "close", () => {
        chatOpen.current = false;
        callZE("messenger", "hide");
      });
    }

    openWidget.current = () => {
      const ze = getZE();
      if (!ze) return false;
      chatOpen.current = true;
      callZE("messenger", "open");
      callZE("webWidget", "show");
      callZE("webWidget", "open");
      try {
        ze.activate?.({ hideOnClose: true });
      } catch {
        /* ignore */
      }
      return true;
    };

    hideLauncher();
    bindCloseListeners();

    const id = window.setInterval(() => {
      bindCloseListeners();
      if (pendingOpen.current && openWidget.current()) {
        pendingOpen.current = false;
        return;
      }
      hideLauncher();
    }, 500);

    return () => window.clearInterval(id);
  }, []);

  function openChat() {
    if (openWidget.current()) return;
    pendingOpen.current = true;
  }

  return (
    <button
      type="button"
      onClick={openChat}
      aria-label="Chat with us"
      className="group relative grid size-12 place-items-center overflow-hidden rounded-full bg-brand-gradient text-white shadow-[0_12px_28px_-8px_rgba(0,69,188,0.55)] transition hover:-translate-y-0.5 hover:brightness-110 sm:inline-flex sm:size-auto sm:gap-2.5 sm:py-2 sm:pl-2 sm:pr-4"
    >
      <span className="relative grid size-9 place-items-center rounded-full bg-white/20 max-sm:size-full max-sm:bg-transparent">
        <MessageCircle size={18} />
        <span className="absolute right-0.5 top-0.5 size-2.5 rounded-full bg-[#30ad22] ring-2 ring-white max-sm:right-1 max-sm:top-1">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#30ad22]" />
        </span>
      </span>
      <span className="hidden text-left leading-tight sm:block">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-white/80">Live support</span>
        <span className="block text-sm font-extrabold tracking-wide">Chat with us</span>
      </span>
    </button>
  );
}
