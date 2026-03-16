"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 5670, suffix: "+", label: "Cars Sold", format: true },
  { value: 670, suffix: "+", label: "Happy Customers", format: false },
  { value: 10, suffix: "+", label: "Years of experience", format: false },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({
  value,
  suffix,
  label,
  format,
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  format: boolean;
  started: boolean;
}) {
  const count = useCountUp(value, 2000, started);
  const display = format ? count.toLocaleString() : count;

  return (
    <div className="flex flex-col items-center px-10 py-12">
      <span className="text-7xl md:text-8xl font-bold text-black tracking-tight leading-none">
        {display}
        {suffix}
      </span>
      <span className="mt-4 text-sm text-gray-400 tracking-wide">{label}</span>
    </div>
  );
}

export default function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full   grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 md:mt-40 mt-[600px] px-30 "
    >
      {stats.map((stat) => (
        <StatItem key={stat.label} {...stat} started={started} />
      ))}
    </section>
  );
}