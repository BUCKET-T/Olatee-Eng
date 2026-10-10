import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="w-full bg-slate-50 py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Content - Flows in from the Left */}
        <div
          className={`max-w-3xl mx-auto text-center space-y-3 transition-all duration-1000 ease-out transform ${
            isVisible
              ? 'translate-x-0 opacity-100'
              : '-translate-x-24 opacity-0'
          }`}
        >
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-orange">
            WHAT WE DO
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Complete Electrical Solutions
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto pt-1">
            From initial design to final commissioning, Olatee Engineering handles every aspect of your power infrastructure.
          </p>
        </div>

        {/* Service Cards Container - Slides in smoothly from the RIGHT */}
        <div
          className={`mt-12 sm:mt-16 transition-all duration-1000 delay-700 ease-out transform ${
            isVisible
              ? 'translate-x-0 opacity-100'
              : 'translate-x-24 opacity-0'
          }`}
        >
          <ServiceCard />
        </div>

      </div>
    </section>
  );
}