import React, { useEffect, useState, useRef } from 'react';

export default function StatsCounter() {
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef(null);

  const stats = [
    { id: 1, target: 75, suffix: '+', label: 'Homes Wired' },
    { id: 2, target: 2, suffix: '+', label: 'Years Experience' },
    { id: 3, target: 5, suffix: '+', label: 'Solar Installations' },
    { id: 4, target: 100, suffix: '%', label: 'Client Satisfaction' },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000; // 2 seconds counting speed
    const steps = 50;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts(
        stats.map((stat) => Math.min(Math.floor(stat.target * progress), stat.target))
      );

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasStarted]);

  return (
    <div
      ref={containerRef}
      className={`w-full bg-brand-navy py-12 px-4 sm:px-6 lg:px-8 mt-16 transition-all duration-1000 ease-out transform ${
        hasStarted ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={stat.id} className="space-y-2">
            <h3 className="text-4xl sm:text-5xl font-black text-brand-orange tracking-tight">
              {counts[idx]}
              {stat.suffix}
            </h3>
            <p className="text-sm sm:text-base font-medium text-slate-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}