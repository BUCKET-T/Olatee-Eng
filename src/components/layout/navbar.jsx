import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Company logo import
import companyLogo from '../../assets/images/logo.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Projects', href: '/projects' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-brand-navy transition-all duration-300 ${
        isScrolled ? 'shadow-2xl border-b border-white/10' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Company Logo Image + OlateeEng Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={companyLogo}
                alt="OlateeEng Logo"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Olatee's<span className="text-brand-orange">Eng</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 bg-transparent">
            {navLinks.map((link) => {
              const isPageLink = link.href.startsWith('/');

              // Page routes (/projects, /about)
              if (isPageLink) {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="relative py-2 text-sm lg:text-base font-medium text-slate-200 hover:text-white transition-colors duration-200 group"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-brand-orange rounded-full transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </Link>
                );
              }

              // Section anchor links (#services, #why-us, #contact)
              const anchorTarget = location.pathname === '/' ? link.href : `/${link.href}`;
              
              return (
                <a
                  key={link.name}
                  href={anchorTarget}
                  className="relative py-2 text-sm lg:text-base font-medium text-slate-200 hover:text-white transition-colors duration-200 group"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-brand-orange rounded-full transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href={location.pathname === '/' ? '#contact' : '/#contact'}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-brand-orange hover:bg-brand-orangeHover shadow-md hover:shadow-brand-orange/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-200 hover:text-brand-orange hover:bg-white/10 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X size={26} className="text-brand-orange" />
              ) : (
                <Menu size={26} />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-80 opacity-100 border-b border-white/10'
            : 'max-h-0 opacity-0 pointer-events-none'
        } bg-brand-navy px-4 pt-2 pb-6 space-y-2`}
      >
        {navLinks.map((link) => {
          const isPageLink = link.href.startsWith('/');

          if (isPageLink) {
            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all"
              >
                {link.name}
              </Link>
            );
          }

          const anchorTarget = location.pathname === '/' ? link.href : `/${link.href}`;

          return (
            <a
              key={link.name}
              href={anchorTarget}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-all"
            >
              {link.name}
            </a>
          );
        })}
        
        <div className="pt-3 px-2">
          <a
            href={location.pathname === '/' ? '#contact' : '/#contact'}
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-brand-orange hover:bg-brand-orangeHover transition-colors shadow-md"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}