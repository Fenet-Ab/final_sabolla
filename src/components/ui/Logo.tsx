// src/components/ui/Logo.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-3 group">

      {/* Logo Emblem */}
      <div className="w-10 h-10 bg-gradient-to-br from-corporate-blue to-blue-900 border-2 border-corporate-gold rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition">
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="leading-tight">
        <div className="text-2xl font-extrabold text-white tracking-wide">
          SABOLLA
        </div>
        <div className="text-xs font-semibold text-white uppercase tracking-[0.25em] group-hover:text-corporate-gold transition">
          International Trading PLC
        </div>
      </div>

    </Link>
  );
};

export default Logo;
