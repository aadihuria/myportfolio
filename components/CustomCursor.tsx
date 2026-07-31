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
  const springX = useSpring(x, { damping: 30, stiffness: 300, mass: 0.4 });
  const springY = useSpring(y, { damping: 30, stiffness: 300, mass: 0.4 });

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
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-[#2C5AA0]"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: hovering ? 34 : 18,
        height: hovering ? 34 : 18,
        backgroundColor: hovering ? "rgba(44, 90, 160, 0.1)" : "transparent",
        transition: "width 0.25s cubic-bezier(0.16,1,0.3,1), height 0.25s cubic-bezier(0.16,1,0.3,1), background-color 0.25s ease",
      }}
    />
  );
}
