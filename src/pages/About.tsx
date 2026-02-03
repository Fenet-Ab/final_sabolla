import * as React from 'react';
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

import { FaFingerprint, FaCompass, FaLightbulb, FaChevronRight } from "react-icons/fa";
import Topfooter from '../components/layout/Topfooter';
import { Business } from '../assets/asset';

const VISION_MISSION_VALUES = [
  {
    key: 'mission',
    title: 'Our Mission',
    icon: <FaFingerprint />,
    content: "Enable international businesses to enter, operate, and expand successfully in Ethiopia and the wider East African region by delivering strategic advisory services, actionable market intelligence, and end-to-end trade, sourcing, and supply-chain solutions. We combine deep local expertise with global best practices to help partners navigate regulatory, commercial, and logistical complexities, reduce risk, and achieve sustainable long-term growth.",
  },
  {
    key: 'vision',
    title: 'Our Vision',
    icon: <FaCompass />,
    content: "Become the leading gateway and most trusted trade platform connecting global businesses with Ethiopia and East Africa’s emerging markets. We aim to transcend traditional trade facilitation by serving as a dynamic hub for collaboration, investment, and innovation that strengthens regional value chains and drives inclusive, sustainable economic development.",
  },
  {
    key: 'approach',
    title: 'Our Approach',
    icon: <FaLightbulb />,
    content: "Leverage a combination of deep local knowledge, global expertise, and hands-on operational support to guide international businesses through Ethiopia and East Africa’s complex markets. We proactively identify investment opportunities, emerging sectors, and reliable partners while managing end-to-end processes including market assessment, sourcing, regulatory compliance, logistics, supply chain management, and after-sales support. By integrating actionable insights with practical solutions, we ensure seamless operations, mitigate risks, and empower our partners to expand sustainably and confidently in the region.",
  },
];

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(VISION_MISSION_VALUES[0].key);
  const activeContent = VISION_MISSION_VALUES.find(item => item.key === activeTab);

  return (
    // Main background set to a bright "Bone" color (#F4F5F0) 
    // This is bright but allows white nav-links to remain visible
    <div className="w-full min-h-screen bg-[#cff4e4] font-['Montserrat'] text-[#0B1A13] pt-48 overflow-x-hidden selection:bg-[#308667] selection:text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative pb-24 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[#308667]" />
                <span className="text-[10px] font-black text-[#308667] uppercase tracking-[0.5em]">
                  Corporate Heritage
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#0B1A13] leading-[1.1] uppercase tracking-tighter mb-8">
                Who <span className="text-[#308667]"> We </span>
                Are
              </h1>

              <p className="text-lg md:text-xl text-[#0B1A13] max-w-2xl font-bold leading-snug">
                Sabolla International Trading plc is a leading foreign trade agency with over two decades
                of experience connecting global businesses to Ethiopian markets.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-5 relative flex justify-center items-center"
            >
              <div className="relative w-full max-w-[420px] h-[420px]">
                {/* Decorative accent behind the image */}
                <div className="absolute inset-0 bg-[#308667] rounded-[3rem] translate-x-3 translate-y-3" />
                <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl">
                  <img
                    src={Business}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    alt="Sabolla Professional Partnership"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= THE FOUNDATION ================= */}
      {/* Using a slightly darker "Sand" tone here for section separation */}
      <section className="py-24 bg-[#EBE9E0] border-y border-[#0B1A13]/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left: Tab Selectors */}
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-4xl font-black text-[#0B1A13] mb-10 uppercase tracking-tighter">
                Core <span className="text-[#308667]">Foundations</span>
              </h2>

              <div className="flex flex-col gap-3">
                {VISION_MISSION_VALUES.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setActiveTab(item.key)}
                    className={`flex items-center justify-between p-6 rounded-2xl transition-all duration-300 text-left
                      ${activeTab === item.key
                        ? 'bg-[#0B1A13] text-white shadow-xl translate-x-2'
                        : 'bg-[#cff4e4] text-[#0B1A13] hover:bg-[#308667]/10'}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`${activeTab === item.key ? 'text-[#308667]' : 'text-[#0B1A13]/20'}`}>
                        {item.icon}
                      </span>
                      <span className="text-xs font-black uppercase tracking-widest">{item.title}</span>
                    </div>
                    <FaChevronRight className={`text-[10px] transition-transform ${activeTab === item.key ? 'rotate-0 text-[#308667]' : 'rotate-90 opacity-20'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Active Content Display */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="bg-[#F4F5F0] p-10 md:p-16 rounded-[2.5rem] border-l-8 border-[#308667] shadow-lg min-h-[380px] flex flex-col justify-center"
                >
                  <span className="text-[10px] font-black text-[#308667] uppercase tracking-widest mb-4">
                    Deep Dive
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-[#0B1A13] mb-6 uppercase tracking-tight">
                    {activeContent?.title}
                  </h3>
                  <p className="text-base md:text-lg text-[#0B1A13] leading-relaxed font-medium">
                    {activeContent?.content}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CALL TO ACTION ================= */}
      <Topfooter />
    </div>
  );
};

export default AboutPage;