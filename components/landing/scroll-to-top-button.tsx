"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const SHOW_AT_PX = 520;

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > SHOW_AT_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    // Main window scroll
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Fallbacks for mobile browsers (iOS/Android) where the documentElement 
    // or body might be the actual scroll container due to CSS overflow rules
    try {
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
      document.body.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      // Ignore errors in older browsers
    }
  };

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          type="button"
          aria-label="Volver arriba"
          title="Volver arriba"
          onClick={handleScrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-4 right-4 z-40 inline-flex size-11 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white shadow-[0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur-sm transition hover:bg-black/85 sm:bottom-6 sm:right-6"
        >
          <ArrowUp className="size-4" />
          <span className="sr-only">Volver arriba</span>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

