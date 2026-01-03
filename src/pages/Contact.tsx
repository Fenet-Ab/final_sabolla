import * as React from 'react';
import { CONTACT_INFO } from '../data/mockData';
import ContactForm from '../components/ui/ContactForm';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#F9F2D6] min-h-screen font-['Montserrat']">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#122C21] pt-48 pb-32 overflow-hidden shadow-2xl">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: `url('/pattern.png')`, backgroundSize: '450px' }}
        />
        <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-[#F9F2D6] uppercase tracking-tighter leading-[0.85] mb-8"
          >
            Get In <span className="text-[#308667]">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#F9F2D6]/70 text-lg md:text-xl max-w-3xl mx-auto font-medium"
          >
            Whether you are a global manufacturer looking to enter the Ethiopian market
            or a local entity seeking premium solutions, our experts are ready to assist.
          </motion.p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container mx-auto px-6 max-w-7xl -mt-20 relative z-30 pb-32">
        <div className="container mx-auto px-6 max-w-7xl -mt-20 relative z-30 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-[0_20px_60px_-15px_rgba(18,44,33,0.15)] rounded-[3rem] border border-[#122C21]/5 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* CONTACT INFORMATION PANEL (LEFT) */}
              <div className="p-12 md:p-16 space-y-10 border-b lg:border-b-0 lg:border-r border-[#122C21]/5">
                <div>
                  <h2 className="text-xs font-black text-[#308667] uppercase tracking-[0.5em] mb-4">Intelligence</h2>
                  <h3 className="text-4xl font-black text-[#122C21] uppercase tracking-tighter mb-10">Our Headquarters</h3>
                </div>

                <div className="space-y-10">
                  {/* Address */}
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-[#F9F2D6] rounded-2xl flex items-center justify-center text-[#122C21] shrink-0 group-hover:bg-[#308667] group-hover:text-white transition-all">
                      <FaMapMarkerAlt size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-[#308667] mb-2">Location</h4>
                      <p className="text-[#09140F] text-lg font-bold leading-tight">{CONTACT_INFO.address}</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-[#F9F2D6] rounded-2xl flex items-center justify-center text-[#122C21] shrink-0 group-hover:bg-[#308667] group-hover:text-white transition-all">
                      <FaEnvelope size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-[#308667] mb-2">Email</h4>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#09140F] text-xl font-bold hover:text-[#308667] transition-colors">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-[#F9F2D6] rounded-2xl flex items-center justify-center text-[#122C21] shrink-0 group-hover:bg-[#308667] group-hover:text-white transition-all">
                      <FaPhoneAlt size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-[#308667] mb-2">Phone</h4>
                      <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#09140F] text-xl font-bold hover:text-[#308667] transition-colors">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-[#F9F2D6] rounded-2xl flex items-center justify-center text-[#122C21] shrink-0 group-hover:bg-[#308667] group-hover:text-white transition-all">
                      <FaClock size={24} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-[#308667] mb-2">Hours</h4>
                      <p className="text-[#09140F] text-lg font-bold">Mon — Fri: 8:30 AM - 5:30 PM</p>
                    </div>
                  </div>
                </div>

                {/* Map Embed Container */}
                <div className="mt-12 overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700">
                  <iframe
                    title="SABOLLA Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5401880486016!2d38.7490!3d9.0080!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMjguOCJOIDM4wrA0NScwMC4wIkU!5e0!3m2!1sen!2set!4v1620000000000"
                    width="100%"
                    height="300"
                    className="border-0"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              {/* CONTACT FORM PANEL (RIGHT) */}
              <div className="p-12 md:p-16 bg-[#F9F2D6]/10">
                <h2 className="text-xs font-black text-[#308667] uppercase tracking-[0.5em] mb-4">Direct Inquiry</h2>
                <h3 className="text-4xl font-black text-[#122C21] uppercase tracking-tighter mb-10">Request Intelligence</h3>
                <ContactForm />
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;