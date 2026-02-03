import * as React from 'react';
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaChevronRight
} from "react-icons/fa";
import { CONTACT_INFO } from "../../data/mockData";
import SabollaLogo from "../../assets/logo/sabolla_logo.png";

const Footer: React.FC = () => {
  // Navigation mapping from your original logic to ensure 404s are fixed
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Partners', path: '/partners' }
  ];

  // const supportLinks = [
  //   { name: 'Contact Us', path: '/contact' },
  //   { name: 'Privacy Policy', path: '/privacy-terms/privacy' },
  //   { name: 'Terms of Service', path: '/privacy-terms/terms' },
  //   { name: 'FAQ', path: '/faq' }
  // ];

  return (
    <footer className="bg-[#0B1A13] text-[#F9F2D6]/80 pt-16 pb-8 border-t border-white/5 font-['Montserrat']">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 mb-16">

          {/* Column 1: Brand & Social */}
          <div className="space-y-8">
            <Link to="/" className="inline-block transform transition-transform hover:scale-105">
              <img
                src={SabollaLogo}
                alt="Sabolla"
                className="h-24 w-auto object-contain origin-left"
                style={{ filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.3))" }}
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-[#F9F2D6]/70">
              SABOLLA INTERNATIONAL TRADING PLC connects international businesses with
              Ethiopia's growing market through expert trade representation and logistics.
            </p>
            <div className="flex gap-4">
              {[FaLinkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#308667] transition-all text-white border border-white/10 hover:border-[#308667] group">
                  <Icon size={16} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-12">
            <h4 className="text-[#308667] font-bold uppercase tracking-widest text-xs mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[...quickLinks, { name: 'Contact Us', path: '/contact' }].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-[#308667] transition-colors flex items-center gap-2 group"
                  >
                    <FaChevronRight className="text-[10px] text-[#308667] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    <span className="transform transition-transform group-hover:translate-x-1">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div>
            <h4 className="text-[#308667] font-bold uppercase tracking-widest text-xs mb-8">Contact Information</h4>
            <div className="space-y-6 text-sm">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-[#308667]/10 flex items-center justify-center shrink-0 text-[#308667]">
                  <FaMapMarkerAlt size={14} />
                </div>
                <div>

                  <p className="leading-relaxed text-[#F9F2D6]/90">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex gap-4 items-center group">
                <div className="w-8 h-8 rounded-lg bg-[#308667]/10 flex items-center justify-center shrink-0 text-[#308667] group-hover:bg-[#308667] group-hover:text-white transition-colors">
                  <FaEnvelope size={14} />
                </div>
                <div>

                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#F9F2D6]/90 hover:text-[#308667] transition-colors block">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center group">
                <div className="w-8 h-8 rounded-lg bg-[#308667]/10 flex items-center justify-center shrink-0 text-[#308667] group-hover:bg-[#308667] group-hover:text-white transition-colors">
                  <FaPhoneAlt size={14} />
                </div>
                <div>

                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-[#F9F2D6]/90 hover:text-[#308667] transition-colors block">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Correct Legal Routes from your previous code */}
        <div className="pt-8 border-t border-white/5 flex justify-center flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-medium uppercase tracking-wider text-[#F9F2D6]/40">
          <p>© {new Date().getFullYear()} Sabolla International Trading PLC. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;