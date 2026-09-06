"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
};

export default function Counter({ to, prefix = "", suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const start = performance.now();
          const duration = 1100;
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(to * eased));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
