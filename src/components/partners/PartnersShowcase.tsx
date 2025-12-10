// src/components/ui/PartnersShowcase.tsx
import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { PARTNERS, type Partner } from "../../data/partners";

const PartnersShowcase = () => {
  const [activePartner, setActivePartner] = useState<Partner | null>(null);

  // Duplicate array to make seamless infinite scroll
  const loopedPartners = [...PARTNERS, ...PARTNERS];

  return (
    <>
      {/* ===== INFINITE SCROLLER ===== */}
      <div className="relative overflow-hidden w-full py-10">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
          }}
        >
          {loopedPartners.map((partner: Partner, i: number) => (
            <div
              key={i}
              onClick={() => setActivePartner(partner)}
              className="min-w-[200px] shrink-0 bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center text-center border border-slate-200 hover:border-corporate-gold transition-all cursor-pointer group"
            >
              <div className="text-4xl mb-4">
                {(partner.icon as ReactNode) ?? "🤝"}
              </div>

              <h3 className="font-extrabold text-[#0A1F44] text-sm mb-2">
                {partner.name}
              </h3>

              <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
                Click to view details
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ================= MODAL ================= */}
      {activePartner && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-6">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white max-w-lg w-full rounded-2xl p-10 relative text-center shadow-2xl"
          >
            <button
              onClick={() => setActivePartner(null)}
              className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-red-500"
            >
              ✕
            </button>

            <div className="text-5xl mb-4">{activePartner.icon ?? "🤝"}</div>

            <h3 className="text-2xl font-extrabold text-[#0A1F44] mb-4">
              {activePartner.name}
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              {activePartner.description}
            </p>

            {activePartner.website && (
              <a
                href={activePartner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mb-6 text-corporate-blue font-bold hover:underline"
              >
                Visit Website →
              </a>
            )}

            <div>
              <button
                onClick={() => setActivePartner(null)}
                className="px-8 py-3 bg-[#0A1F44] text-white rounded-full hover:bg-corporate-gold hover:text-[#0A1F44] transition shadow"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PartnersShowcase;
