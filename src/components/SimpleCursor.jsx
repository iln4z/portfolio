"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

export default function SimpleCursor() {
  const cursorRef = useRef(null);

  const isMobile = () =>
    window.innerWidth <= 768 || "ontouchstart" in window;

  const handleMouseMove = useCallback((e) => {
    if (isMobile() || !cursorRef.current) return;
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.7,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    if (isMobile()) return;

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  if (isMobile()) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "35px",
        height: "35px",
        border: "2px solid #808080",
        borderRadius: "50%",
        backgroundColor: "transparent",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
      }}
    />
  );
}