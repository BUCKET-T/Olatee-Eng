import React, { useState } from 'react';

export default function ContactForm() {
  // Replace with your 8-character Formspree ID (e.g., 'xabcdefg')
  const FORMSPREE_FORM_ID = 'xgaokjjv';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="w-full">
      {/* Success Notification */}
      {status === 'success' && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium">
          Thank you! Your request has been sent successfully. We will get back to you shortly.
        </div>
      )}

      {/* Error Notification */}
      {status === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm font-medium">
          Something went wrong while sending your request. Please try again or email us directly.
        </div>
      )}

      <form 
        className="w-full space-y-6"
        onSubmit={handleSubmit}
      >
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors text-slate-900 placeholder-slate-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors text-slate-900 placeholder-slate-400"
          />
        </div>
        
        {/* Row 2: Phone Number & Service Dropdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors text-slate-900 placeholder-slate-400"
          />
          <div className="relative w-full">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors text-slate-600 appearance-none"
            >
              <option value="" disabled>Service Needed...</option>
              <option value="wiring">Full House Wiring</option>
              <option value="solar">Solar Installation</option>
              <option value="transformers">Transformers</option>
              <option value="other">Other Electrical Services</option>
            </select>
            {/* Custom Dropdown Arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 3: Project Details Textarea */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Project Details"
          required
          rows="4"
          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors resize-y text-slate-900 placeholder-slate-400"
        ></textarea>

        {/* Row 4: Submit Button */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-4 px-6 rounded-xl bg-brand-orange text-white font-bold text-lg hover:bg-orange-400 transition-all duration-300 shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/40 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {status === 'submitting' ? 'Sending Request...' : 'Send Request'}
        </button>
      </form>
    </div>
  );
}