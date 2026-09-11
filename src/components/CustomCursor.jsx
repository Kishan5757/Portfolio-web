import React, { useEffect, useRef, useCallback } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  const animate = useCallback(() => {
    ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.13;
    ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.13;
    if (dotRef.current)
      dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
    if (ringRef.current)
      ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
    raf.current = requestAnimationFrame(animate);
  }, []);

  const spawnRipple = useCallback((e) => {
    const ripple = document.createElement("span");
    ripple.className = "cursor-ripple";
    ripple.style.left = e.clientX + "px";
    ripple.style.top = e.clientY + "px";
    document.body.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }, []);

  const onDown = useCallback(() => {
    dotRef.current?.classList.add("cursor-dot--pressed");
    ringRef.current?.classList.add("cursor-ring--pressed");
  }, []);

  const onUp = useCallback(() => {
    dotRef.current?.classList.remove("cursor-dot--pressed");
    ringRef.current?.classList.remove("cursor-ring--pressed");
  }, []);

  useEffect(() => {
    const move = (e) => { pos.current.x = e.clientX; pos.current.y = e.clientY; };
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("click", spawnRipple);
    raf.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("click", spawnRipple);
      cancelAnimationFrame(raf.current);
    };
  }, [animate, onDown, onUp, spawnRipple]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
