import React, { useEffect, useRef, useState } from 'react';
import ValueProps from './ValueProps';
import StatsCounter from './StatsCounter';

import img1 from '../../../assets/images/wiring.png';
import img2 from '../../../assets/images/work.jpeg'; 
import img3 from '../../../assets/images/logoo.jpeg'

export default function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const sectionRef = useRef(null);

  const images = [img1, img2, img3];

  // Cycles front/back image index with a timed shuffle animation
  const handleNextImage = () => {
    if (isShuffling) return;
    setIsShuffling(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsShuffling(false);
    }, 300); // Matches the CSS transition duration
  };

  const nextIndex = (currentIndex + 1) % images.length;

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
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} id="why-us" className="w-full bg-white pt-16 sm:pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Layered Stacked Image Deck (Slides in from Left) */}
          <div
            className={`transition-all duration-1000 ease-out transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-24 opacity-0'
            }`}
          >
            <div
              onClick={handleNextImage}
              className="relative w-full max-w-lg mx-auto aspect-[4/3] cursor-pointer group select-none py-4 px-6"
              title="Click to shuffle photo"
            >
              {/* BACK CARD (Rotated & Offset Behind) */}
              <div className="absolute inset-x-6 top-2 bottom-6 bg-white rounded-3xl p-1.5 shadow-lg border border-slate-200/80 transform -rotate-6 -translate-x-4 transition-all duration-500 group-hover:-rotate-8 group-hover:-translate-x-6">
                <img
                  src={images[nextIndex]}
                  alt="Secondary project preview"
                  className="w-full h-full object-cover rounded-2xl opacity-90"
                />
              </div>

              {/* FRONT CARD (Active Focus Card with Shuffle Animation) */}
              <div
                className={`relative w-full h-full bg-white rounded-3xl p-1.5 shadow-2xl border border-slate-200 transition-all duration-300 transform ${
                  isShuffling
                    ? '-translate-x-32 rotate-12 opacity-0'
                    : 'translate-x-0 rotate-0 opacity-100 group-hover:scale-[1.02]'
                }`}
              >
                <img
                  src={images[currentIndex]}
                  alt="Primary project preview"
                  className="w-full h-full object-cover rounded-2xl"
                />

                {/* Subtle Hover Badge */}
                <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to shuffle  Shuffle
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Text & Value Props (Slides in from Right) */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ease-out transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-24 opacity-0'
            }`}
          >
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-orange">
              WHY VOLTIC
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Built on Trust, Driven by Expertise
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We combine years of field experience with modern engineering practices to deliver power systems that last a lifetime.
            </p>

            <ValueProps />
          </div>

        </div>
      </div>

      {/* Stats Counter Section */}
      <StatsCounter />
    </section>
  );
}