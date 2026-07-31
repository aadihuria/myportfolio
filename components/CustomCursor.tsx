"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}

export default function CustomCursor() {
  const pointerFine = useMediaQuery("(pointer: fine)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const enabled = pointerFine && !reduceMotion;

  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 26, stiffness: 260, mass: 0.5 });
  const ringY = useSpring(y, { damping: 26, stiffness: 260, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [role='button']"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* precise center dot, tracks the raw pointer position */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full bg-[#2C5AA0]"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 5 : 4,
          height: hovering ? 5 : 4,
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />

      {/* trailing reticle, springs toward the pointer with a slow tick-mark rotation */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 44 : 28,
          height: hovering ? 44 : 28,
          transition: "width 0.3s cubic-bezier(0.16,1,0.3,1), height 0.3s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          className="w-full h-full text-[#2C5AA0]"
          style={{
            animation: `cursor-spin ${hovering ? 4 : 18}s linear infinite`,
            opacity: hovering ? 0.9 : 0.5,
            transition: "opacity 0.25s ease",
          }}
        >
          <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" />
            <line x1="12" y1="0.5" x2="12" y2="3.5" stroke="currentColor" strokeWidth="1.2" />
            <line x1="12" y1="20.5" x2="12" y2="23.5" stroke="currentColor" strokeWidth="1.2" />
            <line x1="0.5" y1="12" x2="3.5" y2="12" stroke="currentColor" strokeWidth="1.2" />
            <line x1="20.5" y1="12" x2="23.5" y2="12" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </div>
      </motion.div>
    </>
  );
}
