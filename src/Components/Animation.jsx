import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Props (all optional):
 * - count: total boxes
 * - prelit: first N boxes always on
 * - from, to: animation range for active box index
 * - duration: ms for one sweep
 * - loop: loop forever
 */
export default function Animation({
  count = 20,
  prelit = 7,
  from = 0,
  to = 8,
  duration = 1600,
  loop = true,
}) {
  const [val, setVal] = useState(from);
  const [inView, setInView] = useState(true);
  const startRef = useRef(null);
  const rafRef = useRef(null);
  const containerRef = useRef(null);

  // Clamp/normalize bounds
  const min = Math.max(0, Math.min(from, to));
  const max = Math.min(count - 1, Math.max(from, to));
  const range = max - min;

  // Intersection Observer: pause when not visible
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Animation with requestAnimationFrame
  useEffect(() => {
    if (!inView) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      startRef.current = null;
      return;
    }

    const easeOutCubic = (p) => 1 - Math.pow(1 - p, 3);

    const tick = (ts) => {
      if (startRef.current === null) startRef.current = ts;
      const p = Math.min((ts - startRef.current) / duration, 1);
      const eased = easeOutCubic(p);
      const current = min + range * eased;
      setVal(current);

      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else if (loop) {
        // restart
        startRef.current = null;
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      startRef.current = null;
    };
  }, [inView, min, range, duration, loop]);

  const activeBox = useMemo(() => Math.round(val), [val]);

  // Blink zone indices (7..9 like your code)
  const blinkStart = 7;
  const blinkEnd = 9;

  return (
    <>
      {/* Keyframes for blink (component-scoped) */}
      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0.3; }
        }
      `}</style>

      <div
        ref={containerRef}
        className="mt-3 sm:mt-4 flex gap-[2px] sm:gap-2 justify-center pb-8"
      >
        {Array.from({ length: count }).map((_, i) => {
          const on = i < prelit || i === activeBox;
          const isBlinkZone = i >= blinkStart && i <= blinkEnd;

          return (
            <div
              key={i}
              className={`h-3 w-3 md:h-5 md:w-3 rounded-sm transition-opacity duration-300 ${
                on ? "bg-blue-600" : "bg-gray-300 opacity-60"
              }`}
              style={
                inView && isBlinkZone
                  ? {
                      animation: `blink 1.1s ${((i - blinkStart) * 0.25).toFixed(
                        2
                      )}s infinite`,
                    }
                  : undefined
              }
            />
          );
        })}
      </div>
    </>
  );
}
