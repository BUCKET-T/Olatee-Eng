import React, { useEffect, useRef, useState } from 'react';
import ContactForm from './ContactForm';

export default function ContactSection() {
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
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full bg-slate-50 py-20 sm:py-28 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Contact Card */}
        <div
          className={`bg-white rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl shadow-slate-200/50 border border-slate-100 transition-all duration-1000 ease-out transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`}
        >
          
          {/* Header Content */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ready to Power Up?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours with a free estimate.
            </p>
          </div>
          
          {/* Form Component */}
          <ContactForm />
          
        </div>
      </div>
    </section>
  );
}