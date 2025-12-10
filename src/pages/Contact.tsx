// src/pages/Contact.tsx
import React from 'react';
import { CONTACT_INFO } from '../data/mockData';
import ContactForm from '../components/ui/ContactForm';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-[#0A1F44] mb-16 text-center"
      >
        Get In Touch
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 p-10 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
        >
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-6 border-b pb-2">
            Contact SABOLLA
          </h2>
          
          {/* Address */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="space-y-1"
          >
            <h3 className="text-xl font-semibold text-corporate-blue">Address</h3>
            <p className="text-gray-700 text-lg">{CONTACT_INFO.address}</p>
          </motion.div>
          
          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="space-y-1"
          >
            <h3 className="text-xl font-semibold text-corporate-blue">Email</h3>
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="text-lg text-blue-600 hover:underline"
            >
              {CONTACT_INFO.email}
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="space-y-1"
          >
            <h3 className="text-xl font-semibold text-corporate-blue">Phone</h3>
            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className="text-lg text-blue-600 hover:underline"
            >
              {CONTACT_INFO.phone}
            </a>
          </motion.div>
          
          {/* Map Embed */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 overflow-hidden rounded-xl shadow-inner"
          >
            <iframe
              title="SABOLLA Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019590456102!2d-122.41941508468186!3d37.77492927975948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c1f1b9b45%3A0x1234567890abcdef!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1698870702130!5m2!1sen!2sus"
              width="100%"
              height="250"
              className="border-0 w-full"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </motion.div>
        
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-10 bg-white shadow-lg rounded-2xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
        >
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-6">Send Us an Inquiry</h2>
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
