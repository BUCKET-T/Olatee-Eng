import React, { useEffect, useState, useRef } from 'react';
import EyeTracker from './EyeTracker';

export default function VoltMascot() {
  const mascotRef = useRef(null);
  const [bodyTransform, setBodyTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    translateX: 0,
    translateY: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Disable calculations on mobile/tablet screens
      if (window.innerWidth < 768 || !mascotRef.current) return;

      const rect = mascotRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate distance from mascot center
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const maxRangeX = window.innerWidth / 2;
      const maxRangeY = window.innerHeight / 2;

      // Calculate subtle 3D tilt degrees (max +-12 deg)
      const rotateY = Math.min(Math.max((deltaX / maxRangeX) * 12, -12), 12);
      const rotateX = Math.min(Math.max((-deltaY / maxRangeY) * 12, -12), 12);

      // Calculate subtle body shift (max +-15px)
      const translateX = Math.min(Math.max((deltaX / maxRangeX) * 15, -15), 15);
      const translateY = Math.min(Math.max((deltaY / maxRangeY) * 15, -15), 15);

      setBodyTransform({ rotateX, rotateY, translateX, translateY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    /* Hidden on mobile (<768px), visible as flex column on desktop (md+) */
    <section className="hidden md:flex w-full bg-white py-24 overflow-hidden flex-col items-center">
      
      {/* Top Badge */}
      <div className="bg-sky-50 text-brand-navy text-sm font-semibold px-6 py-2.5 rounded-full mb-8 border border-sky-100">
        Meet <span className="text-brand-orange">Volt</span> — Your Smart Engineering Assistant
      </div>

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-navy mb-16 tracking-tight text-center">
        Looking Out For Your Safety
      </h2>

      {/* Mascot Container with 3D Perspective */}
      <div 
        ref={mascotRef}
        className="relative flex flex-col items-center group [perspective:1000px]"
      >
        {/* Animated 3D Wrapper (Antenna + Body) */}
        <div
          className="flex flex-col items-center transition-transform duration-150 ease-out will-change-transform"
          style={{
            transform: `perspective(1000px) rotateX(${bodyTransform.rotateX}deg) rotateY(${bodyTransform.rotateY}deg) translate3d(${bodyTransform.translateX}px, ${bodyTransform.translateY}px, 0px)`,
          }}
        >
          {/* Antenna */}
          <div className="relative flex flex-col items-center mb-[-8px] z-0 transition-transform duration-500 group-hover:-translate-y-2">
            {/* Glowing Orange Dot */}
            <div className="w-5 h-5 bg-brand-orange rounded-full shadow-[0_0_15px_rgba(206,142,20,0.8)] animate-pulse"></div>
            {/* Stem */}
            <div className="w-2.5 h-10 bg-brand-navy"></div>
          </div>

          {/* Mascot Body */}
          <div className="relative w-64 h-64 bg-brand-navy rounded-[2.5rem] shadow-2xl flex flex-col items-center border-b-[10px] border-r-[6px] border-slate-900/60 transform -rotate-2 group-hover:rotate-0 transition-all duration-300">
            
            {/* Subtle Dot Grid Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1.5px,transparent_1.5px)] bg-[size:24px_24px] rounded-[2.5rem] pointer-events-none"></div>

            {/* Eyes component tracks mouse */}
            <EyeTracker />

            {/* Mouth */}
            <div className="mt-12 w-16 h-2 bg-brand-orange rounded-full shadow-[0_0_10px_rgba(206,142,20,0.4)]"></div>
          </div>
        </div>

        {/* Dynamic Floor Shadow */}
        <div 
          className="w-48 h-6 bg-slate-200 rounded-full blur-xl mt-6 transition-transform duration-150 ease-out"
          style={{
            transform: `translateX(${bodyTransform.translateX * 0.6}px) scale(${1 - Math.abs(bodyTransform.translateY) * 0.01})`,
          }}
        ></div>
      </div>

      {/* Footer Text */}
      <p className="mt-12 text-slate-500 max-w-sm text-center text-sm font-medium leading-relaxed">
        Volt uses smart tracking to ensure every connection in your home is monitored and safe.
      </p>
      
    </section>
  );
}