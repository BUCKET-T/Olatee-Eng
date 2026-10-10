import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Tag } from 'lucide-react';

export default function ImageModal({ project, onClose, onPrev, onNext, totalProjects, currentIndex }) {
  // Handle keyboard shortcuts (Escape key and Left/Right Arrow navigation)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrev, onNext]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-950/85 backdrop-blur-md transition-opacity duration-300">
      
      {/* Click outside backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Top Controls: Close Button */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-3">
        <span className="hidden sm:inline-block text-xs font-medium text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700/50">
          {currentIndex + 1} of {totalProjects}
        </span>
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-slate-800/80 text-slate-200 hover:text-white hover:bg-brand-orange transition-colors border border-slate-700/50 shadow-lg focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Navigation Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-slate-800/80 text-slate-200 hover:text-white hover:bg-brand-orange transition-colors border border-slate-700/50 shadow-xl focus:outline-none"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Navigation Button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-slate-800/80 text-slate-200 hover:text-white hover:bg-brand-orange transition-colors border border-slate-700/50 shadow-xl focus:outline-none"
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Modal Card */}
      <div className="relative z-10 w-full max-w-5xl bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh]">
        
        {/* Project Image Display */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px] lg:min-h-[500px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover max-h-[65vh] lg:max-h-[80vh]"
          />
        </div>

        {/* Project Details Sidebar */}
        <div className="w-full lg:w-80 p-6 sm:p-8 bg-brand-navy flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800 overflow-y-auto">
          <div>
            {/* Category Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-orange/10 text-brand-orange border border-brand-orange/20 mb-4 uppercase tracking-wider">
              <Tag className="w-3.5 h-3.5" />
              {project.categoryLabel}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Metadata Badges */}
            <div className="space-y-3 pt-4 border-t border-slate-800 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                <span>{project.location || 'Location upon request'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Completed: {project.date || 'Recent Project'}</span>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-8 pt-4 border-t border-slate-800">
            <a
              href="/#contact"
              onClick={onClose}
              className="block w-full py-3 px-4 text-center text-sm font-semibold text-white bg-brand-orange hover:bg-brand-orangeHover rounded-xl shadow-md transition-all"
            >
              Request Similar Project
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}