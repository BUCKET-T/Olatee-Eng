import React, { useEffect, useRef, useState } from 'react';
import { Home, Sun, Zap, Check } from 'lucide-react';

export default function ServiceCard() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const serviceData = [
    {
      id: 'wiring',
      title: 'Full House Wiring',
      description:
        'End-to-end residential wiring designed for safety, efficiency, and future expansion. Certified and code-compliant.',
      icon: Home,
      features: [
        'New construction builds',
        'Complete rewiring',
        'Smart home integration',
      ],
    },
    {
      id: 'solar',
      title: 'Solar Installation',
      description:
        'Harness clean energy with our premium solar panel systems, reducing your bills and your carbon footprint.',
      icon: Sun,
      features: [
        'Rooftop arrays',
        'Battery storage',
        'Grid tie systems',
      ],
    },
    {
      id: 'transformers',
      title: 'Transformers',
      description:
        'Industrial and commercial transformer supply, installation, and maintenance for reliable voltage conversion.',
      icon: Zap,
      features: [
        'Step-up / step-down',
        'Dry-type units',
        'Preventive maintenance',
      ],
    },
  ];

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {serviceData.map((card, index) => {
        const IconComponent = card.icon;

        return (
          <div
            key={card.id}
            style={{ transitionDelay: `${index * 150}ms` }}
            className={`group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-brand-orange/10 hover:border-brand-orange/30 transition-all duration-700 ease-out transform ${
              isVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-20 opacity-0'
            } hover:-translate-y-2 flex flex-col justify-between`}
          >
            <div>
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-brand-navy mb-6 group-hover:scale-110 group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-all duration-300">
                <IconComponent className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-orange transition-colors duration-200">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {card.description}
              </p>

              {/* Bullet Features with Orange Checkmarks */}
              <ul className="space-y-3">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-brand-orange stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Glow Line Accent on Hover */}
            <div className="absolute bottom-0 left-8 right-8 h-[3px] bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </div>
        );
      })}
    </div>
  );
}