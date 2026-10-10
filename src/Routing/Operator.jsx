import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

// Persistent Layout Components
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';

// Home Page Landing Sections
import Herosection from '../components/sections/Herosection';
import ServicesSection from '../components/sections/Services/ServicesSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUs/WhyChooseUsSection';
import ContactSection from '../components/sections/Contact/ContactSection';
import VoltMascot from '../components/mascot/VoltMascot';

// Dedicated Route Sections / Pages
import ProjectsPage from '../components/sections/ProjectGallery/ProjectsPage';
import AboutSection from '../components/sections/AboutSection';
import FAQs from '../components/sections/FAQs';

// Main Home Page View
const HomePage = () => (
  <>
    <Herosection />
    <ServicesSection />
    <WhyChooseUsSection />
    <ContactSection />
    <VoltMascot />
  </>
);

const Operator = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide the floating button when already on the FAQs route
  const isFaqPage = location.pathname === '/faqs';

  return (
    <div className="flex flex-col min-h-screen bg-brand-navy relative">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </main>

      {/* Floating FAQ Trigger Button */}
      {!isFaqPage && (
        <button
          onClick={() => navigate('/faqs')}
          type="button"
          aria-label="Frequently Asked Questions"
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-brand-orange hover:bg-orange-500 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/20 flex items-center justify-center cursor-pointer group"
        >
          <HelpCircle className="w-6 h-6" />
          <span className="absolute right-full mr-3 px-3 py-1 rounded-lg bg-slate-800 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl border border-slate-700">
            Have Questions?
          </span>
        </button>
      )}

      <Footer />
    </div>
  );
};

export default Operator;