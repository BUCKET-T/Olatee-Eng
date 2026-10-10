import React, { useState, useEffect } from 'react';
import { HelpCircle, ChevronDown, Search, ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_ITEMS = [
  {
    category: 'Electrical Wiring',
    question: 'How much does house wiring cost?',
    answer: 'The cost of house wiring depends on the property size, number of rooms, conduit layout, and the grade of materials specified. We provide transparent, itemized bills after conducting a preliminary site assessment or reviewing your architectural floor plan. Contact us for a free estimate.'
  },
  {
    category: 'Solar Systems',
    question: 'Do you install solar systems?',
    answer: 'Yes! We specialize in custom hybrid and off-grid rooftop solar installations, ranging from residential backup systems (5kVA–10kVA) to commercial-grade solar arrays (50kVA+) equipped with high-efficiency lithium storage battery banks.'
  },
  {
    category: 'Maintenance & Support',
    question: 'Do you provide maintenance and post-installation support?',
    answer: 'Absolutely. All our installations come with warranty coverage and scheduled maintenance checks. We also offer diagnostic and repair services for existing electrical panels, industrial transformers, and inverters.'
  },
  {
    category: 'Project Timeline',
    question: 'How long does an installation take?',
    answer: 'Timelines vary by project scope. Standard residential wiring typically takes between 3 to 7 working days depending on building size. Solar system setups and commercial inverter integrations are usually completed within 1 to 3 days after equipment delivery.'
  },
  {
    category: 'Commercial & Industrial',
    question: 'Do you work on commercial and industrial projects?',
    answer: 'Yes, our team handles commercial office complexes, multi-story residential buildings, and industrial facilities. We manage heavy-duty load balancing, transformer commissioning, and safety compliance audits.'
  },
  {
    category: 'Safety & Compliance',
    question: 'Are your engineers certified?',
    answer: 'Yes, our operations are led by registered professionals who adhere strictly to COREN (Council for the Regulation of Engineering in Nigeria) and NEMSA safety standards, ensuring zero compromise on electrical safety.'
  },
  {
    category: 'Service Coverage',
    question: 'What areas do you cover for site visits and installations?',
    answer: 'We primarily operate across Lagos, Ogun, and Oyo State, and are available for major industrial or solar projects nationwide across Nigeria.'
  }
];

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function FAQs() {

    //Title
      useEffect(() => {
      document.title = "Frequently Asked Questions | OlateeEng";
    }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-slate-100">
      <div className="max-w-4xl mx-auto space-y-12 pb-24">
        
        {/* Page Header (Animated Entry) */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-semibold">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            Got Questions? We Have Answers.
          </h1>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Find clarity on our electrical wiring processes, solar installation packages, safety protocols, and project timelines.
          </p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-4 max-w-lg mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 mt-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g., solar, wiring, cost)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-brand-navy border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all text-sm shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* FAQ Accordion List with Staggered Entrance */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-brand-navy rounded-2xl border border-slate-700/60 overflow-hidden shadow-lg hover:border-brand-orange/40 transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none group"
                  >
                    <div className="space-y-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-brand-orange/90 transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    
                    {/* Animated Arrow Toggle */}
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className={`p-2 rounded-xl text-slate-300 shrink-0 ${
                        isOpen ? 'bg-brand-orange text-white' : 'bg-slate-800/80'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  {/* Smooth Collapsible Answer Container */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-700/40 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-slate-800/40 rounded-2xl border border-slate-700/40"
            >
              <p className="text-slate-400 text-sm">No matching questions found for "{searchQuery}".</p>
            </motion.div>
          )}
        </motion.div>

        {/* Still Have Questions CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-navy rounded-3xl p-8 sm:p-10 border border-slate-700/60 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-brand-orange text-sm font-semibold">
              <MessageSquare className="w-4 h-4" />
              Need Custom Engineering Advice?
            </div>
            <h3 className="text-2xl font-bold text-white">
              Have a specific question not listed here?
            </h3>
            <p className="text-slate-400 text-sm">
              Reach out directly to our engineering team or request a site visit.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-orange-500 text-white font-semibold text-sm transition-all duration-300 shadow-md shrink-0"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}