"use client";

import { useEffect } from "react";

export function RegisterServiceWorker() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return;
    }

    const register = async () => {
      try {
        await navigator.serviceWorker.register("/sw.js");
      } catch {
        // silent fail: PWA sigue funcionando en web normal
      }
    };

    window.addEventListener("load", register);

    return () => {
      window.removeEventListener("load", register);
    };
  }, []);

  return null;
}
