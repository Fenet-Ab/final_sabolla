import * as React from 'react'; 
import { Link } from "react-router-dom";
import { 
  FaLinkedin, 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt 
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

  const supportLinks = [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-terms/privacy' },
    { name: 'Terms of Service', path: '/privacy-terms/terms' },
    { name: 'FAQ', path: '/faq' }
  ];

  return (
    <footer className="bg-[#0B1A13] text-[#F9F2D6]/80 pt-16 pb-8 border-t border-white/5 font-['Montserrat']">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Social - Logo Made Bigger */}
          <div className="space-y-8">
            <Link to="/" className="inline-block transform transition-transform hover:scale-105">
              <img 
                src={SabollaLogo} 
                alt="Sabolla" 
                className="h-20 md:h-24 w-auto object-contain origin-left" 
                style={{ filter: "drop-shadow(0px 10px 20px rgba(0,0,0,0.3))" }}
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-[#F9F2D6]/70">
              SABOLLA INTERNATIONAL TRADING PLC connects international businesses with 
              Ethiopia's growing market through expert trade representation and logistics.
            </p>
            <div className="flex gap-3">
              {[FaLinkedin, FaTwitter, FaFacebookF, FaInstagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#308667] transition-all text-white border border-white/10 hover:border-[#308667]">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links - With your original Hover Effect */}
          <div>
            <h4 className="text-[#308667] font-bold uppercase tracking-widest text-xs mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm hover:text-[#308667] transition-colors flex items-center gap-3 group"
                  >
                    <span className="w-0 h-0.5 bg-[#308667] transition-all group-hover:w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support - With your original Hover Effect */}
          <div>
            <h4 className="text-[#308667] font-bold uppercase tracking-widest text-xs mb-8">Support</h4>
            <ul className="space-y-4">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-sm hover:text-[#308667] transition-colors flex items-center gap-3 group"
                  >
                    <span className="w-0 h-0.5 bg-[#308667] transition-all group-hover:w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div>
            <h4 className="text-[#308667] font-bold uppercase tracking-widest text-xs mb-8">Get In Touch</h4>
            <div className="space-y-5 text-sm">
              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-[#308667] mt-1 shrink-0" />
                <p className="leading-relaxed">{CONTACT_INFO.address}</p>
              </div>
              <div className="flex gap-4 items-center group">
                <FaEnvelope className="text-[#308667] shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-[#308667] transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex gap-4 items-center group">
                <FaPhoneAlt className="text-[#308667] shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-[#308667] transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Correct Legal Routes from your previous code */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-medium uppercase tracking-wider text-[#F9F2D6]/40">
          <p>© {new Date().getFullYear()} Sabolla International Trading PLC. All rights reserved.</p>
          <div className="flex gap-8">
            {/* <Link to="/privacy-terms/privacy" className="hover:text-[#308667] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/privacy-terms/terms" className="hover:text-[#308667] transition-colors">
              Terms & Conditions
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;