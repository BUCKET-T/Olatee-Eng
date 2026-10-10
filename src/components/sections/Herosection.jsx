import React from 'react';

// Hero image import from assets
import heroImage from '../../assets/images/hero-photo.jpg'; 

export default function HeroSection() {
  return (
    <section className="relative w-full bg-brand-navy overflow-hidden py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Content & Dual CTAs */}
          <div className="space-y-6 sm:space-y-8 text-left z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Powering Your Home With{' '}
              <span className="text-brand-orange block sm:inline">Precision</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Expert full house wiring, solar installations, and transformer solutions delivered with quality workmanship you can trust.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-brand-orange hover:bg-brand-orangeHover shadow-lg hover:shadow-brand-orange/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Start Your Project
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-semibold text-white border border-white/20 hover:bg-white/10 transition-all duration-300 text-center"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Right Column: Hero Feature Image */}
          <div className="relative flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                src={heroImage}
                alt="Professional electrical panel installation and maintenance"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}