// src/components/ui/ContactForm.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // --- MOCK API SUBMISSION LOGIC ---
    // In a real application, this would call an API endpoint:
    // 1. Validate inputs (ensure email is valid, required fields are present)
    // 2. Send data to the backend endpoint (e.g., /api/contact)
    // 3. The backend stores in Sanity CMS AND sends the notification email.

    console.log('Form Data Submitted (Mock):', formData);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="space-y-6 bg-white p-8 rounded-lg shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-corporate-blue focus:border-corporate-blue"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-corporate-blue focus:border-corporate-blue"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-corporate-blue focus:border-corporate-blue"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Inquiry *</label>
        <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-corporate-blue focus:border-corporate-blue"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#D4AF37] transition duration-300 ${
          status === 'submitting' 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-corporate-gold hover:bg-corporate-gold/90 text-corporate-blue'
        }`}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 font-semibold text-center mt-4">Thank you! Your message has been sent successfully.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 font-semibold text-center mt-4">Error submitting form. Please try again later.</p>
      )}
    </motion.form>
  );
};

export default ContactForm;