import React, { useState, useEffect } from 'react';
import { Maximize2, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ImageModal from './ImageModal';


// Mock engineering projects data
const PROJECTS_DATA = [
  {
    id: 'proj-1',
    title: '50kVA Commercial Solar Installation',
    category: 'solar',
    categoryLabel: 'Solar Installation',
    description: 'Off-grid rooftop solar array with 48kWh lithium storage battery bank powering a multi-story office building.',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80',
    location: 'Ikeja, Lagos State',
    date: 'August 2026',
  },
  {
    id: 'proj-2',
    title: 'Luxury Duplex Full House Wiring',
    category: 'wiring',
    categoryLabel: 'Full House Wiring',
    description: 'Complete conduit surface & hidden wiring, smart distribution panel configuration, and earthing protection.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    location: 'Lekki Phase 1, Lagos',
    date: 'July 2025',
  },
  {
    id: 'proj-3',
    title: 'Smart Home Automated Control Panel',
    category: 'wiring',
    categoryLabel: 'Full House Wiring',
    description: 'Custom changeover switch board and automated circuit breaker protection installation.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    location: 'Victoria Island, Lagos',
    date: 'January 2026',
  },
  {
    id: 'proj-4',
    title: 'Commercial Dry-Type Transformer Setup',
    category: 'transformers',
    categoryLabel: 'Transformers',
    description: 'Indoor dry-type transformer unit installation for sound-sensitive healthcare facility.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    location: 'Abeokuta, Ogun State',
    date: 'April 2026',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'wiring', label: 'House Wiring' },
  { id: 'solar', label: 'Solar Systems' },
  { id: 'transformers', label: 'Transformers' },
];


export default function GallerySection() {

  //Title
  useEffect(() => {
  document.title = "Projects Showcase | OlateeEng";
}, []);


  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  // Filter projects by selected tab category
  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  // Modal navigation handlers
  const handleOpenModal = (index) => setSelectedProjectIndex(index);
  const handleCloseModal = () => setSelectedProjectIndex(null);
  
  const handlePrevProject = () => {
    setSelectedProjectIndex((prev) => 
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
  };

  const handleNextProject = () => {
    setSelectedProjectIndex((prev) => 
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-semibold mb-4">
            <Layers className="w-4 h-4" />
            Engineered Excellence
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Project Showcase
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
            Explore our portfolio of certified residential rewiring, high-efficiency solar panel installations, and industrial transformer deployments.
          </p>
        </motion.div>

        {/* Filter Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'bg-brand-navy text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand-orange rounded-full shadow-lg shadow-brand-orange/25"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Project Image Cards Grid with Smooth Filtering Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                whileHover={{ y: -8 }}
                onClick={() => handleOpenModal(index)}
                className="group relative bg-brand-navy rounded-3xl overflow-hidden border border-slate-700/60 shadow-xl cursor-pointer hover:border-brand-orange/50 hover:shadow-2xl hover:shadow-brand-orange/10"
              >
                {/* Image Container with Zoom hover effect */}
                <div className="relative h-64 overflow-hidden bg-brand-navy">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                  {/* Floating Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-brand-navy backdrop-blur-md text-brand-orange border border-brand-orange/30">
                    {project.categoryLabel}
                  </span>

                  {/* Expand / Lightbox Hover Button */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-brand-navy backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                    <Maximize2 className="w-4 h-4 text-brand-orange" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-orange transition-colors duration-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center justify-between text-xs font-medium text-slate-400">
                    <span>{project.location}</span>
                    <span className="text-brand-orange font-semibold">View Details →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Preview Modal */}
      {selectedProjectIndex !== null && (
        <ImageModal
          project={filteredProjects[selectedProjectIndex]}
          onClose={handleCloseModal}
          onPrev={handlePrevProject}
          onNext={handleNextProject}
          totalProjects={filteredProjects.length}
          currentIndex={selectedProjectIndex}
        />
      )}
    </section>
  );
}