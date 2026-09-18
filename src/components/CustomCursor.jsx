import React, { useEffect, useRef, useCallback, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const spawnRipple = useCallback((e) => {
    const ripple = document.createElement("span");
    ripple.className = "cursor-ripple";
    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";
    document.body.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }, []);

  const onDown = useCallback(() => {
    cursorRef.current?.classList.add("cursor-arrow--pressed");
  }, []);

  const onUp = useCallback(() => {
    cursorRef.current?.classList.remove("cursor-arrow--pressed");
  }, []);

  useEffect(() => {
    const move = (e) => {
      if (!isVisible) setIsVisible(true);
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onLeave = () => {
      setIsVisible(false);
    };

    const onEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("click", spawnRipple);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("click", spawnRipple);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [isVisible, onDown, onUp, spawnRipple]);

  return (
    <div
      ref={cursorRef}
      className={`cursor-arrow ${isVisible ? "cursor-arrow--visible" : ""}`}
      aria-hidden="true"
    >
      <svg
        className="cursor-arrow-svg"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cursor-orange-gradient" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="60%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <filter id="cursor-shadow" x="-2" y="-2" width="28" height="28" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0.5" dy="1.5" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.45" />
          </filter>
        </defs>
        <path
          d="M0 0 L0 19 L4.8 14.5 L8.6 22.5 L11.8 21 L8 13.2 L15 13.2 Z"
          fill="url(#cursor-orange-gradient)"
          stroke="#ffffff"
          strokeWidth="1.25"
          strokeLinejoin="round"
          strokeLinecap="round"
          filter="url(#cursor-shadow)"
        />
      </svg>
    </div>
  );
}

