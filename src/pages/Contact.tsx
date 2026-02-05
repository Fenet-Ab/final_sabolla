import * as React from 'react';
import { CONTACT_INFO } from '../data/mockData';
import ContactForm from '../components/ui/ContactForm';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaExternalLinkAlt } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  // Replace this with your actual coordinates or address string
  const mapQuery = encodeURIComponent("Sabolla International Trading Plc, Marathon Motors Mall, Megenagna, Addis Ababa, Ethiopia");
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const googleMapsRedirect = `https://maps.app.goo.gl/rQAHga39ZAK4Y2HTA`;

  return (
    <div className="bg-[#F9F2D6] min-h-screen font-['Montserrat'] selection:bg-[#308667] selection:text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#cff4e4] pt-48 pb-40 overflow-hidden">
        {/* Decorative Background Pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: `url('/pattern.png')`, backgroundSize: '450px' }}
        />
        {/* Animated Radial Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#308667] rounded-full blur-[120px] opacity-20" />

        <div className="container mx-auto px-6 relative z-10 max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-[#122C21] uppercase tracking-tighter leading-[0.85] mb-8">
              Get In <span className="text-[#308667] italic">Touch</span>
            </h1>
            <p className="text-[#122C21]/60 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Partner with Ethiopia's leading industrial intelligence firm.
              Our experts are ready to facilitate your next strategic move.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container mx-auto px-6 max-w-7xl -mt-24 relative z-30 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white shadow-[0_40px_100px_-20px_rgba(18,44,33,0.2)] rounded-[3rem] overflow-hidden border border-white/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* CONTACT INFORMATION PANEL (LEFT - 5 Cols) */}
            <div className="lg:col-span-5 p-10 md:p-16 bg-[#122C21] text-[#F9F2D6] space-y-12">


              <div className="space-y-8">
                {/* Contact Items */}
                {[
                  { icon: FaMapMarkerAlt, label: 'Location', value: CONTACT_INFO.address, link: googleMapsRedirect },
                  { icon: FaEnvelope, label: 'Email', value: CONTACT_INFO.email, link: `mailto:${CONTACT_INFO.email}` },
                  { icon: FaPhoneAlt, label: 'Phone', value: CONTACT_INFO.phone, link: `tel:${CONTACT_INFO.phone}` },
                  { icon: FaClock, label: 'Business Hours', value: 'Mon — Fri: 8:30 AM - 5:30 PM', link: null },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="flex gap-6 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-[#308667]/20 rounded-xl flex items-center justify-center text-[#308667] group-hover:bg-[#308667] group-hover:text-white transition-all duration-300">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#308667] mb-1">{item.label}</h4>
                      {item.link ? (
                        <a href={item.link} target={item.label === 'Location' ? "_blank" : "_self"} className="text-lg font-bold hover:text-[#308667] transition-colors break-words">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-bold">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Map Embed */}
              <div className="relative mt-12 group overflow-hidden rounded-[2rem] border-2 border-[#308667]/30">
                <div className="absolute inset-0 bg-[#308667]/10 z-10 pointer-events-none transition-opacity group-hover:opacity-0" />
                <iframe
                  title="SABOLLA Location"
                  src={mapEmbedUrl}
                  width="100%"
                  height="250"
                  className="border-0 transition-all duration-700"
                  allowFullScreen
                  loading="lazy"
                />
                <a
                  href={googleMapsRedirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 z-20 bg-white text-[#122C21] p-3 rounded-full shadow-xl hover:bg-[#308667] hover:text-white transition-all group"
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              </div>
            </div>

            {/* CONTACT FORM PANEL (RIGHT - 7 Cols) */}
            <div className="lg:col-span-7 p-10 md:p-16 bg-[#FDFBF2]">
              <div className="max-w-2xl">
                <h2 className="text-xs font-black text-[#308667] uppercase tracking-[0.5em] mb-4">Direct Inquiry</h2>
                <h3 className="text-4xl font-black text-[#122C21] uppercase tracking-tighter mb-4">Request Intelligence</h3>
                <p className="text-[#122C21]/60 font-medium mb-10">
                  Fill out the form below and a sector specialist will reach out within 24 hours.
                </p>

                <div className="relative">
                  {/* Decorative element for the form area */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#308667]/5 rounded-full blur-3xl" />
                  <ContactForm />
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Subtle Footer Note */}

      </div>
    </div>
  );
};

export default ContactPage;