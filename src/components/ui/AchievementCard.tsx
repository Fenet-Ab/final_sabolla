// src/components/ui/AchievementCard.tsx
import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface AchievementProps {
  value: string;
  label: string;
  delay: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 90 }
  },
};

const AchievementCard: React.FC<AchievementProps> = ({ value, label, delay }) => {
  return (
    <motion.div
      className="relative text-center p-8 rounded-xl bg-white/90 backdrop-blur shadow-xl border border-gray-200 hover:-translate-y-2 transition-transform"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ delay }}
    >
      {/* Accent Glow */}
      <div className="absolute inset-x-0 -top-1 h-1 bg-gradient-to-r from-corporate-gold to-corporate-blue rounded-full" />

      <h3 className="text-5xl font-extrabold text-corporate-blue mb-3">
        {value}
      </h3>

      <p className="text-gray-700 font-semibold uppercase tracking-wider text-sm">
        {label}
      </p>
    </motion.div>
  );
};

export default AchievementCard;
