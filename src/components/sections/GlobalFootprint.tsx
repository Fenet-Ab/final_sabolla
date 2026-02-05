import * as React from 'react';
import { motion } from "framer-motion";
import { map as mapAsset } from '../../assets/asset';

const locations = [
  { name: "Ethiopia", top: "50%", left: "59%" },
  { name: "Germany", top: "29%", left: "50%" },
  { name: "France", top: "31%", left: "48%" },
  { name: "England", top: "27%", left: "47%" },
  { name: "Poland", top: "28%", left: "53%" },
  { name: "Spain", top: "34%", left: "47%" },
  { name: "Austria", top: "33%", left: "51%" },
  { name: "UAE", top: "43%", left: "60.5%" },
  { name: "India", top: "45%", left: "70%" },
  { name: "China", top: "35%", left: "72%" },
  { name: "USA", top: "34%", left: "18%" },
  { name: "Nigeria", top: "51%", left: "50%" },
];

const ethiopia = locations.find(l => l.name === "Ethiopia")!;

const routes = locations
  .filter(l => l.name !== "Ethiopia")
  .map(l => ({
    from: { x: parseFloat(ethiopia.left), y: parseFloat(ethiopia.top) },
    to: { x: parseFloat(l.left), y: parseFloat(l.top) },
  }));

const GlobalFootprint: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#F9F2D6] overflow-hidden border-t border-black/5 font-['Montserrat']">

      {/* Background Watermark - Matching other sections */}
      <div className="absolute top-10 left-0 text-[12rem] font-black text-[#0B1A13]/[0.02] select-none pointer-events-none tracking-tighter leading-none">
        WORLD
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* NEW HEADING STYLE (Left-Aligned) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[1px] w-10 bg-[#308667]" />
              <span className="text-[10px] font-black text-[#308667] uppercase tracking-[0.4em]">Global Presence</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-[#122C21] uppercase tracking-tighter leading-[0.95]">
              Our Global <br /> <span className="text-[#308667]">Footprint</span>
            </h2>
          </div>
          <div className="lg:pb-2">
            <p className="text-sm text-[#122C21]/60 max-w-md font-medium leading-relaxed">
              Bridging continents through established trade corridors and representative networks that ensure seamless international commerce.
            </p>
          </div>
        </div>

        {/* ORIGINAL MAP & SVG LOGIC (Untouched) */}
        <div className="relative w-full">
          <motion.img
            src={mapAsset}
            alt="World Map"
            className="w-full h-auto select-none opacity-30 block"
            style={{
              filter: "invert(47%) sepia(18%) saturate(1512%) hue-rotate(113deg) brightness(93%) contrast(88%)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
          />

          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
          >
            {routes.map((r, i) => (
              <motion.path
                key={i}
                d={`
                  M ${r.from.x} ${r.from.y}
                  Q ${(r.from.x + r.to.x) / 2}
                    ${Math.min(r.from.y, r.to.y) - 10}
                    ${r.to.x} ${r.to.y}
                `}
                fill="none"
                stroke="#308667"
                strokeWidth="0.7"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 2, delay: i * 0.1 }}
              />
            ))}
          </svg>

          {locations.map(loc => (
            <div
              key={loc.name}
              className="absolute group z-30"
              style={{
                top: loc.top,
                left: loc.left,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="flex flex-col items-center justify-center relative">
                <div className="absolute w-8 h-8 bg-[#308667]/30 rounded-full animate-ping pointer-events-none" />

                <div className={`rounded-full border-2 border-white shadow-xl transition-transform duration-300 group-hover:scale-150
                  ${loc.name === "Ethiopia" ? "bg-[#308667] w-5 h-5" : "bg-[#122C21] w-3.5 h-3.5"}`}
                />

                <div className="absolute top-full mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#F9F2D6] bg-[#122C21] px-3 py-1.5 rounded-sm shadow-2xl whitespace-nowrap">
                    {loc.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* REFINED BOTTOM TAGLINE */}
        <div className="mt-20 flex items-center justify-center gap-6">
          <div className="h-px w-12 bg-[#122C21]/10" />
          <p className="text-[10px] uppercase tracking-[0.5em] font-black text-[#308667]">
            Verified Trade Corridors
          </p>
          <div className="h-px w-12 bg-[#122C21]/10" />
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;