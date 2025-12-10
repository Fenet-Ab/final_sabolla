// src/components/layout/Header.tsx
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';
import React, { useState, useEffect, useRef } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Partners', path: '/partners' },
  { name: 'Contact', path: '/contact', isPrimary: true },
];

const Header: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Update animated underline position on route change
  useEffect(() => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector<HTMLAnchorElement>(
        `a[href='${location.pathname}']`
      );
      if (activeLink) {
        const { offsetLeft, offsetWidth } = activeLink;
        setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
      } else {
        setUnderlineStyle({ left: 0, width: 0 });
      }
    }
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 
          bg-linear-to-r from-[#0f172a] via-[#0b1f3a] to-[#0f172a]
          ${hasScrolled ? 'shadow-2xl py-2 backdrop-blur-md' : 'py-4'}`}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          <Logo />

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex space-x-10 items-center relative" ref={navRef}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              if (item.isPrimary) {
                return (
                  <motion.div key={item.name} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to={item.path}
                      className={`relative px-7 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide
                        ${isActive
                          ? 'bg-white text-[#D4AF37] shadow-lg ring-2 ring-[#D4AF37]'
                          : 'bg-corporate-gold text-white shadow-xl'}
                        hover:shadow-[0_0_25px_rgba(212,175,55,0.65)]
                        transition-all duration-300`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              }

              return (
                <motion.div key={item.name} whileHover={{ y: -2 }} className="relative">
                  <Link
                    to={item.path}
                    className={`relative font-medium transition
                      ${isActive ? 'text-[#D4AF37] font-semibold' : 'text-gray-200 hover:text-[#D4AF37]'}`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}

            {/* Animated underline */}
            <motion.span
              layout
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="absolute  bg-[#D4AF37]"
              style={{ left: underlineStyle.left, width: underlineStyle.width }}
            />
          </nav>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white text-3xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE NAV DRAWER ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0A1F44]/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 text-white text-xl"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to={item.path}
                    className={`font-bold transition
                      ${item.isPrimary
                        ? 'px-10 py-4 bg-corporate-gold text-[#0A1F44] rounded-full shadow-lg'
                        : isActive
                          ? 'text-[#D4AF37] underline decoration-2 underline-offset-4'
                          : 'text-white hover:text-[#D4AF37]'}
                    `}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
