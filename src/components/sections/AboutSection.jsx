import {React, useEffect} from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Compass, 
  GraduationCap, 
  ShieldCheck, 
  Zap, 
  Award, 
  Users, 
  CheckCircle2,
  Mail,
  ShieldAlert
} from 'lucide-react';

// Local Image Import
import founderPhoto from '../../assets/images/founder.jpeg';

const CORE_VALUES = [
  {
    title: 'Safety Without Compromise',
    description: 'Every conduit laid and transformer commissioned adheres to international safety protocols and rigorous quality verification.',
    icon: ShieldCheck,
  },
  {
    title: 'Engineered Precision',
    description: 'We rely on accurate electrical calculations, premium load balancing, and high-grade materials to guarantee longevity.',
    icon: Zap,
  },
  {
    title: 'Certified Excellence',
    description: 'Our operations maintain strict adherence to COREN and NEMSA engineering standards across all field projects.',
    icon: Award,
  },
];

// Reusable Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    }
  }
};

const cardChild = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeOut' } 
  }
};


export default function AboutSection() {
//Title
      useEffect(() => {
      document.title = "About Us | OlateeEng";
    }, []);

  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-semibold mb-4">
            <Users className="w-4 h-4" />
            Who We Are
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">
            Pioneering Safe, Smart & Sustainable Energy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            From our humble university beginnings to executing complex power and solar infrastructure, OlateeEng delivers uncompromised engineering quality across Nigeria.
          </p>
        </motion.div>

        {/* Founder's University Origin Story */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="relative bg-brand-navy rounded-3xl p-8 sm:p-12 border border-slate-700/60 shadow-2xl overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-4 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center text-brand-orange">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Forged in the University Lab
              </h2>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
                Our Origin Story
              </span>
            </div>

            <div className="lg:col-span-8 text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                OlateeEng was born in the bustling corridors of a university engineering faculty. What started as late-night laboratory experiments and fixing complex electrical faults around campus dorms quickly evolved into a passionate mission to solve real-world power challenges.
              </p>
              <p>
                During his final year as an Electrical Engineering student, our founder recognized a critical gap between academic electrical theory and the unsafe, substandard electrical wiring commonly seen on field sites. Determined to raise the bar, he assembled a small team of top classmates to offer certified, safety-first wiring and custom hybrid solar prototypes.
              </p>
              <p>
                What began as a student-led initiative in a university workshop grew organically through word-of-mouth, technical excellence, and relentless dedication. Today, that same student drive for precision forms the bedrock of OlateeEng—a modern engineering firm trusted for residential rewiring, high-efficiency solar farms, and industrial transformer installations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Mission Card */}
          <motion.div 
            variants={cardChild}
            className="bg-brand-navy rounded-3xl p-8 border border-slate-700/60 shadow-xl hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-navy border border-sky-500/20 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                "To provide reliable, innovative, and high-quality engineering solutions that make homes, businesses, and industries safer, smarter, and more energy-efficient, while delivering excellent service and lasting value to every client."
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-700/50 flex items-center gap-2 text-xs font-semibold text-sky-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>Reliable • Smart • Efficient</span>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div 
            variants={cardChild}
            className="bg-brand-navy rounded-3xl p-8 border border-slate-700/60 shadow-xl hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-navy border border-brand-orange/20 flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                "To become a leading and trusted engineering company in Nigeria and beyond, recognized for excellence, innovation, professionalism, and dependable solutions in electrical, solar, power, and engineering services."
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-700/50 flex items-center gap-2 text-xs font-semibold text-brand-orange">
              <CheckCircle2 className="w-4 h-4" />
              <span>Excellence • Innovation • Leadership</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Principles */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div variants={cardChild} className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900">Driven By Principles</h2>
            <p className="text-slate-400 text-sm mt-2">The engineering core standards behind every project we deliver.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <motion.div 
                  key={idx} 
                  variants={cardChild}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-brand-navy p-6 rounded-2xl border border-slate-700/40 hover:border-brand-orange/40 transition-colors shadow-lg"
                >
                  <IconComp className="w-8 h-8 text-brand-orange mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">{val.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{val.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Single Member Spotlight Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="space-y-12 pt-8 border-t border-slate-800"
        >
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange bg-brand-orange/10 px-3.5 py-1 rounded-full border border-brand-orange/20">
              Technical Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4">
              Lead Engineer & Founder
            </h2>
            <p className="text-slate-400 text-base mt-2">
              Guiding technical strategy, high-voltage safety standards, and project execution.
            </p>
          </div>

          {/* Single Member Card Container */}
          <motion.div 
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto bg-brand-navy rounded-3xl border border-slate-700/60 shadow-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              
              {/* Single Member Photo */}
              <div className="md:col-span-5 h-80 md:h-full relative overflow-hidden bg-slate-950">
                <img
                  src={founderPhoto}
                  alt="Engr. Olaofe Taiwo — Founder & Lead Engineer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:hidden" />
              </div>

              {/* Single Member Details */}
              <div className="md:col-span-7 p-8 sm:p-10 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-orange/10 text-brand-orange border border-brand-orange/20 mb-3">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    COREN Registered • NEMSA Certified
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Engr. Olaofe Taiwo
                  </h3>
                  <p className="text-sm font-semibold text-brand-orange mt-1">
                    Founder & Principal Electrical Engineer
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  "Engineering isn't just about making connections work; it's about making them safe for generations. Every transformer station, solar array, and residential panel we install carries our standard of uncompromised safety."
                </p>

                <div className="pt-4 border-t border-slate-700/60 flex items-center gap-4">
                  <a
                    href="mailto:Olaofeoguntundetaiwo@gmail.com"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-orange text-white text-sm font-semibold hover:bg-brand-orangeHover transition-colors shadow-md"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Lead Engineer
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}