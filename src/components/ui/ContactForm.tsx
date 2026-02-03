import * as React from 'react';
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
    }
  };

  // Shared Tailwind classes for inputs to keep the code clean
  const inputClasses = `
    mt-2 block w-full bg-[#F9F2D6]/30 border-2 border-[#122C21]/10 
    rounded-2xl p-4 text-[#122C21] font-medium transition-all duration-300
    placeholder:text-[#122C21]/30
    focus:border-[#308667] focus:ring-0 focus:bg-white focus:shadow-lg focus:outline-none
  `;

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-[#122C21] ml-2">
            Full Name <span className="text-[#308667]">*</span>
          </label>
          <input
            type="text" name="name" id="name" required
            placeholder="John Doe"
            value={formData.name} onChange={handleChange}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-[#122C21] ml-2">
            Phone Number
          </label>
          <input
            type="tel" name="phone" id="phone"
            placeholder="+251 ..."
            value={formData.phone} onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-[#122C21] ml-2">
          Email Address <span className="text-[#308667]">*</span>
        </label>
        <input
          type="email" name="email" id="email" required
          placeholder="contact@sabolla.com"
          value={formData.email} onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-[#122C21] ml-2">
          Inquiry Details <span className="text-[#308667]">*</span>
        </label>
        <textarea
          name="message" id="message" rows={5} required
          placeholder="How can Sabolla assist your strategic objectives?"
          value={formData.message} onChange={handleChange}
          className={`${inputClasses} resize-none`}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`
          w-full py-5 rounded-2xl text-sm font-black uppercase tracking-[0.3em] 
          transition-all duration-500 flex items-center justify-center gap-3 shadow-xl
          ${status === 'submitting'
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-[#122C21] text-[#F9F2D6] hover:bg-[#308667] hover:shadow-[0_15px_30px_rgba(48,134,103,0.3)] hover:-translate-y-1'}
        `}
      >
        {status === 'submitting' ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-current" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing...
          </span>
        ) : (
          <>Dispatch Inquiry <FaPaperPlane className="text-[10px]" /></>
        )}
      </button>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-3 p-4 bg-[#308667]/10 rounded-2xl border border-[#308667]/20 text-[#308667] font-bold"
          >
            <FaCheckCircle /> Inquiry transmitted successfully.
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-3 p-4 bg-red-50 rounded-2xl border border-red-100 text-red-600 font-bold"
          >
            <FaExclamationTriangle /> Connection error. Please try again.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
};

export default ContactForm;