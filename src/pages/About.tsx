// src/pages/About.tsx
import React, { useState } from 'react';
import { ACHIEVEMENTS } from '../data/mockData';
import AchievementCard from '../components/ui/AchievementCard';
import { motion } from 'framer-motion';
// Icons for the tabbed interface (assuming you use a library like 'lucide-react')
// import { Zap, Target, ScrollText, ChevronRight } from 'lucide-react'; 

// --- Dummy Icons for placeholder ---
const Zap = ({ className }: { className: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
const Target = ({ className }: { className: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
const ScrollText = ({ className }: { className: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 22h-8a4 4 0 0 1-4-4V7a4 4 0 0 0-4-4h16v18a2 2 0 0 1-2 2Z" /><path d="M10 8h4" /><path d="M10 12h4" /><path d="M10 16h4" /></svg>;
// --- End Dummy Icons ---


const VISION_MISSION_VALUES = [
  {
    key: 'mission',
    title: 'Our Mission',
    icon: Target,
    content: "To be the leading facilitator of Sino-Ethiopian trade, delivering expert services grounded in professionalism, integrity, and thorough knowledge of Ethiopia’s commercial and logistical environment. We are committed to simplifying complex trade processes for our partners.",
  },
  {
    key: 'vision',
    title: 'Our Vision',
    icon: Zap,
    content: "To create a seamless, efficient, and highly compliant trade corridor, establishing Sabolla International as the indispensable partner for global manufacturers seeking sustainable growth and deep market penetration within the rapidly developing Ethiopian economy.",
  },
  {
    key: 'values',
    title: 'Core Values',
    icon: ScrollText,
    content: "Integrity (Uncompromising ethics in all dealings), Reliability (Consistent and timely delivery), Expertise (Deep regulatory and market knowledge), and Partnership (Long-term, mutually beneficial relationships).",
  },
];


const AboutPage: React.FC = () => {
  // State for the interactive Vision/Mission/Values section
  const [activeTab, setActiveTab] = useState(VISION_MISSION_VALUES[0].key);
  const activeContent = VISION_MISSION_VALUES.find(item => item.key === activeTab);

  return (
    <div className=" bg-white overflow-hidden">

   {/* ================= HERO - IMAGE BACKGROUND ================= */}
<section
  className="relative py-32 md:py-40 overflow-hidden shadow-2xl bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80")',
  }}
>
  {/* Optional overlay for better text contrast */}
  <div className="absolute inset-0 bg-[#0A1F44]/60 "></div>

  {/* Soft Glow */}
  <div className="absolute top-10 left-10 w-60 h-60 bg-corporate-gold/30  rounded-full pointer-events-none"></div>
  <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full pointer-events-none"></div>

  <div className="relative z-10 container mx-auto px-6 text-center">
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight"
      style={{
        // Metallic/chrome effect on text
        textShadow: '0 0 20px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.1)',
        backgroundImage: 'linear-gradient(120deg, #FFFFFF 30%, #F5D783 50%, #B8A76B 70%, #FFFFFF 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      A Legacy of Trust in International Trade
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-xl md:text-2xl text-gray-200 font-light max-w-4xl mx-auto"
    >
      Two decades of connecting global manufacturers with Ethiopian markets through{' '}
      <span className="font-semibold text-white">
        precision, compliance, and undeniable reliability.
      </span>
    </motion.p>
  </div>
</section>


      {/* ================= ABOUT CONTENT – INTERACTIVE VMV & SERVICES ================= */}
      <section className="relative py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT CONTENT - INTERACTIVE TABS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-semibold text-corporate-gold uppercase mb-2 tracking-widest">
                Our Foundation
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A1F44] mb-8 leading-tight">
              SABOLLA International: <br className="hidden lg:inline"/>Defining <span className="text-corporate-blue">Global Trade</span>
            </h2>

            {/* TAB BUTTONS */}
            <div className="flex space-x-4 border-b border-slate-200 mb-8">
              {VISION_MISSION_VALUES.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  className={`py-3 px-4 text-lg font-semibold transition-all duration-300 relative group
                    ${activeTab === item.key 
                      ? 'text-corporate-blue' 
                      : 'text-gray-500 hover:text-corporate-gold'}
                  `}
                >
                  {item.title}
                  <div 
                    className={`absolute bottom-0 left-0 h-1 rounded-t-lg transition-all duration-300
                      ${activeTab === item.key 
                        ? 'w-full bg-corporate-gold' 
                        : 'w-0 bg-corporate-blue group-hover:w-full'}
                    `}
                  />
                </button>
              ))}
            </div>

            {/* TAB CONTENT AREA */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-50 border border-slate-200 rounded-xl p-8 shadow-inner"
            >
              {activeContent && (
                <>
                  <div className="flex items-center text-corporate-blue mb-4">
                    <activeContent.icon className="w-8 h-8 mr-3 fill-corporate-gold/20 stroke-corporate-blue"/>
                    <h3 className="text-2xl font-bold text-[#0A1F44]">{activeContent.title}</h3>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    {activeContent.content}
                  </p>
                </>
              )}
            </motion.div>
          </motion.div>

          {/* RIGHT FEATURE CARDS - GRID WITH DEPTH */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-20 lg:pt-0"
          >
            {[
              {
                title: "Advisory Services",
                desc: "Strategic market entry guidance and regulatory navigation. We clear the path to success.",
                iconColor: "corporate-blue"
              },
              {
                title: "Global Sourcing",
                desc: "Direct access to trusted international manufacturers and premium product lines.",
                iconColor: "corporate-gold"
              },
              {
                title: "Supply Chain Mastery",
                desc: "End-to-end logistics, coordination, and compliance management for efficiency.",
                iconColor: "corporate-gold"
              },
              {
                title: "Import Facilitation",
                desc: "Smooth cross-border trade with full regulatory alignment and risk mitigation.",
                iconColor: "corporate-blue"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                whileHover={{ y: -8, scale: 1.05, boxShadow: '0 20px 25px -5px rgba(10, 31, 68, 0.1), 0 10px 10px -5px rgba(10, 31, 68, 0.04)' }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 150, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 group transition-all duration-300 cursor-pointer hover:ring-4 hover:ring-corporate-gold/50"
              >
                <div className={`w-14 h-14 rounded-xl bg-${item.iconColor}/10 text-${item.iconColor} flex items-center justify-center mb-5 text-xl font-extrabold transition-all duration-300 group-hover:bg-${item.iconColor} group-hover:text-white`}>
                  {i + 1}
                </div>

                <h4 className="text-xl font-bold text-[#0A1F44] mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ================= ACHIEVEMENTS - STATS COUNTER EFFECT ================= */}
      <section className="relative py-28 bg-linear-to-b from-slate-50 to-white overflow-hidden border-t border-slate-100">

        <div className="relative container mx-auto px-6 max-w-7xl">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-4xl md:text-5xl font-extrabold text-[#0A1F44] mb-16"
          >
            Key Metrics of Our <span className="text-corporate-gold">Success</span>
          </motion.h3>

          {/* AchievementCard will handle the 'motion' and counter effect */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ACHIEVEMENTS.map((achievement, index) => (
              <AchievementCard 
                key={index}
                value={achievement.value}
                label={achievement.label}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION - PREMIUM ================= */}
<section>
  {/* Decorative blurred shapes */}
  <div className="absolute -top-32 -left-32 w-72 h-72 bg-corporate-gold/20 blur-3xl rounded-full pointer-events-none"></div>
  <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-corporate-blue/20 blur-3xl rounded-full pointer-events-none"></div>

  <div className="relative container mx-auto px-6 max-w-4xl text-center">
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-extrabold text-[#0A1F44] mb-6 leading-tight"
    >
      Ready to Expand into the <span className="text-corporate-gold">Ethiopian Market?</span>
    </motion.h3>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-lg md:text-xl text-[#0A1F44] mb-10 leading-relaxed"
    >
      Partner with Sabolla International for compliant, efficient, and profitable trade solutions. 
      Our experienced team ensures seamless market entry and sustained growth.
    </motion.p>

         <motion.a
                 href="/contact"
                 whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212,175,55,0.8)' }}
                 whileTap={{ scale: 0.95 }}
                 className="inline-block px-12 py-5 text-lg md:text-xl font-bold bg-corporate-gold text-[#D4AF37] rounded-full transition-all duration-300 uppercase tracking-wider shadow-lg hover:brightness-110 hover:shadow-2xl"
               >
                Start Trading Today
               </motion.a>
  </div>
</section>


    </div>
  );
};

export default AboutPage;