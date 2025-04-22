// components/CustomCursor.jsx
"use client"; // Required for Next.js

import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor() {
  // Track cursor position directly (no spring smoothing)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const scale = useMotionValue(1);

  useEffect(() => {
    // Update cursor position raw (no smoothing)
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 12); // Adjust for centering
      cursorY.set(e.clientY - 12);
    };

    // Scale effect for hover
    const onHoverStart = () => scale.set(1.5);
    const onHoverEnd = () => scale.set(1);

    // Track mouse
    window.addEventListener("mousemove", moveCursor);

    // Optional: Add hover effects to interactive elements
    const interactiveEls = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", onHoverStart);
      el.addEventListener("mouseleave", onHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverStart);
        el.removeEventListener("mouseleave", onHoverEnd);
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed w-6 h-6 bg-purple-500/80 rounded-full pointer-events-none z-[9999] backdrop-blur-sm border border-purple-400"
      style={{
        x: cursorX, // Directly use motion values (no spring)
        y: cursorY,
        scale: scale,
      }}
      transition={{ type: "tween", ease: "linear", duration: 0.001 }} // Disables spring physics
    />
  );
}