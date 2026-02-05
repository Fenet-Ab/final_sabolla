import * as React from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHandshake,
  FaFileContract,
  FaHistory,
  FaTruckLoading,
  FaArrowRight
} from "react-icons/fa";

import GlobalFootprint from "../components/sections/GlobalFootprint";
import PartnersShowcase from "../components/partners/PartnersShowcase";
import { PARTNERS } from "../data/partners";
import { LOCAL_PARTNERS } from "../data/localPartners";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import Topfooter from '../components/layout/Topfooter';
import { award, sabollaLogo, worldMap } from '../assets/asset'; // Importing your asset


const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalFrames = duration * 60;
      const increment = end / totalFrames;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);
  return <span ref={ref}>{count}</span>;
};

const useScrollParallax = (speed: number) => {
  const { scrollY } = useScroll();
  return useTransform(scrollY, [0, 500], [0, 500 * speed]);
};

const Home: React.FC = () => {
  const dynamicTexts = ["Gateway ", "Trade Representation ", "Market Entry ", "Trade Facilitation Pathway "];
  const [textIndex, setTextIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => setTextIndex((prev) => (prev + 1) % dynamicTexts.length), 3500);
    return () => clearInterval(timer);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), springConfig);

  const spotlightX = useSpring(useTransform(mouseX, [-300, 300], ["0%", "100%"]), springConfig);
  const spotlightY = useSpring(useTransform(mouseY, [-300, 300], ["0%", "100%"]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="w-full overflow-x-hidden font-['Montserrat'] bg-white text-[#0B1A13]">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-32 md:pt-40 bg-white overflow-hidden">
        <motion.div
          style={{ y: useScrollParallax(0.2) }}
          className="absolute top-24 left-4 md:left-10 text-[5rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-black text-gray-100/80 select-none z-0 tracking-tighter opacity-100"
        >
          SABOLLA
        </motion.div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#308667]/5 blur-[100px] rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 40, 0],
              x: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0B1A13]/5 blur-[120px] rounded-full"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-[55%]">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                {/* Responsive text sizes adjusted via standard breakpoints without changing content */}
                <h1 className="flex flex-col gap-y-2 text-2xl sm:text-3xl md:text-4xl font-black leading-none tracking-tighter uppercase mb-8">
                  <span className="block">Your</span>

                  <div className="relative inline-block py-1">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={dynamicTexts[textIndex]}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="text-[#308667] text-left leading-[1.1] break-words max-w-full"
                      >
                        {dynamicTexts[textIndex]}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <span className="block">to Ethiopia’s Market.</span>
                </h1>
                <p className="text-lg md:text-xl text-[#0B1A13]/70 max-w-xl font-medium leading-relaxed mb-8">
                  Navigating Ethiopia’s market with confidence. We connect international businesses to local opportunities, compliance, and sustainable growth.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
                  <Link to="/services" className="group flex items-center justify-center gap-4 bg-[#0B1A13] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-[#308667] transition-all duration-300 shadow-xl">
                    Our Services <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link to="/contact" className="group flex items-center justify-center gap-4 border-2 border-[#0B1A13] text-[#0B1A13] px-8 md:px-10 py-4 md:py-5 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-[#0B1A13] hover:text-white transition-all duration-300">
                    Get in Touch
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Globe responsiveness: ensure height and width scale appropriately on tablet/mobile */}
            <div
              className="w-full lg:w-[45%] relative flex justify-center items-center h-[350px] md:h-[500px] lg:h-[min(700px,80vh)]"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ rotateX, rotateY, perspective: 1000 }}
                transition={{ duration: 1.2 }}
                className="relative w-full h-full flex items-center justify-center lg:justify-end lg:translate-x-12"
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[min(420px,60vh)] lg:h-[min(420px,60vh)] flex items-center justify-center">

                  <div className="absolute inset-0 bg-gradient-to-br from-white/100 to-white/60 backdrop-blur-3xl rounded-full shadow-[0_50px_100px_rgba(48,134,103,0.1)] border border-gray-100 z-0 overflow-hidden">
                    <motion.div
                      style={{
                        left: spotlightX,
                        top: spotlightY,
                        translateX: "-50%",
                        translateY: "-50%"
                      }}
                      className="absolute w-64 h-64 bg-white/40 blur-[60px] rounded-full pointer-events-none z-10"
                    />
                  </div>

                  <div
                    className="absolute inset-0 opacity-[0.08] bg-center bg-no-repeat bg-contain rounded-full"
                    style={{ backgroundImage: `url(${worldMap})` }}
                  />

                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                      filter: "drop-shadow(0 0 30px rgba(48,134,103,0.5))"
                    }}
                    animate={{
                      opacity: [0.7, 1, 0.7],
                      filter: [
                        "brightness(1) drop-shadow(0 0 10px rgba(48,134,103,0.2))",
                        "brightness(1.2) drop-shadow(0 0 25px rgba(48,134,103,0.4))",
                        "brightness(1) drop-shadow(0 0 10px rgba(48,134,103,0.2))"
                      ]
                    }}
                    transition={{
                      scale: { type: "spring", stiffness: 400, damping: 10 },
                      rotate: { type: "spring", stiffness: 200 },
                      opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      filter: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative z-20 w-1/2 h-1/2 flex items-center justify-center cursor-default"
                  >
                    <img
                      src={sabollaLogo}
                      alt="Sabolla Logo Icon"
                      className="w-full h-full object-contain select-none"
                      draggable="false"
                    />
                  </motion.div>

                  <div className="absolute inset-0 z-0">
                    <motion.div
                      animate={{ rotate: 360 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                        scale: { type: "spring", stiffness: 300, damping: 20 }
                      }}
                      className="absolute inset-0"
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                        <motion.circle
                          cx="50" cy="50" r="48"
                          fill="none"
                          animate={{
                            stroke: ["rgba(48, 134, 103, 0.4)", "rgba(48, 134, 103, 1)"],
                            strokeWidth: [2.5, 5, 2.5]
                          }}
                          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                          strokeDasharray="180 120"
                          strokeLinecap="round"
                          className="drop-shadow-[0_0_8px_rgba(48,134,103,0.2)]"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MILESTONES ================= */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">

            {/* Award Card - Responsive adjust for mobile stacking */}
            <div className="md:col-span-7 bg-[#05110B] rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden shadow-lg border border-white/5 group flex flex-col md:flex-row items-center gap-8">
              <div className="relative z-10 flex-1 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-2xl bg-[#308667] flex items-center justify-center mb-10 shadow-[0_0_20px_rgba(48,134,103,0.4)]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 16H6V4h12zM8 7h8v2H8zm0 4h8v2H8zm0 4h5v2H8z" /></svg>
                </div>
                <h4 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight uppercase tracking-tight mb-6">
                  Winner of <br />
                  <span className="text-[#308667]">Kalmar's 2016</span> <br />
                  Global Award
                </h4>
                <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                  Recognized for unparalleled operational excellence and strategic market growth within the East African heavy machinery sector.
                </p>
              </div>

              <div className="relative z-10 w-full md:w-1/3 flex justify-center">
                <div className="absolute inset-0 bg-[#308667]/20 blur-[40px] rounded-full scale-75" />
                <motion.img
                  src={award}
                  alt="Kalmar Award"
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="h-48 md:h-56 lg:h-64 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] relative z-10"
                />
              </div>
            </div>

            <div className="md:col-span-5 bg-[#308667] rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg group">
              <div className="absolute top-10 opacity-20"><FaHandshake size={80} className="text-white" /></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl md:text-8xl font-black text-white tracking-tighter">
                    <Counter value={100} duration={3} />
                  </span>
                  <span className="text-4xl md:text-6xl font-black text-white/40">+</span>
                </div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-white mt-4">Global Industrial Partners</p>
                <div className="w-full h-[1px] bg-white/20 my-8" />
                <p className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Forging Links Worldwide</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-white rounded-[2rem] p-10 flex flex-col items-center justify-center shadow-sm border border-gray-100 group">
              <FaFileContract size={32} className="text-[#0B1A13] mb-6 opacity-80" />
              <div className="flex items-center gap-1">
                <span className="text-5xl font-black text-[#0B1A13] tracking-tighter">
                  <Counter value={500} duration={3} />
                </span>
                <span className="text-4xl font-black text-[#308667]">+</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mt-4">Active Tenders</p>
            </div>

            <div className="md:col-span-4 bg-[#F9F6E5] rounded-[2rem] p-10 flex flex-col items-center justify-center shadow-sm group">
              <FaHistory size={32} className="text-[#0B1A13] mb-6 opacity-80" />
              <div className="flex items-center gap-1">
                <span className="text-5xl font-black text-[#0B1A13] tracking-tighter">
                  <Counter value={20} duration={3} />
                </span>
                <span className="text-4xl font-black text-[#308667]">+</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mt-4">Years Experience</p>
            </div>

            <div className="md:col-span-4 bg-[#0B1A13] rounded-[2rem] p-10 flex flex-col items-center justify-center shadow-lg group border border-white/5">
              <FaTruckLoading size={32} className="text-[#308667] mb-6" />
              <div className="flex items-center gap-1">
                <span className="text-5xl font-black text-white tracking-tighter">
                  <Counter value={150} duration={3} />
                </span>
                <span className="text-4xl font-black text-[#308667]">+</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mt-4">Shipments Logged</p>
            </div>
          </div>
        </div>
      </section>

      <GlobalFootprint />
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#122C21] uppercase tracking-tighter mb-6">
              Trusted <span className="text-[#308667]">Partners</span>
            </h2>
          </div>
          <div className="space-y-32">
            <div className="relative">
              <h3 className="relative z-10 text-sm font-black text-[#308667] uppercase tracking-[0.5em] mb-12 text-center lg:text-left">
                International Partners
              </h3>
              <PartnersShowcase partners={PARTNERS} />
            </div>
            <div className="relative">
              <h3 className="relative z-10 text-xs font-black text-[#308667] uppercase tracking-[0.5em] mb-12 text-center lg:text-right">
                Local & Government Partners
              </h3>
              <PartnersShowcase partners={LOCAL_PARTNERS} />
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <Topfooter />
    </div>
  );
};

export default Home;