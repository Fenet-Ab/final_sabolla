// src/components/layout/Footer.tsx
import { CONTACT_INFO } from '../../data/mockData';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] via-[#0b1f3a] to-[#0f172a] 
    text-white border-t-4 border-corporate-gold">

      <div className="container mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div>
            <h4 className="text-2xl font-extrabold text-corporate-gold mb-4">
              SABOLLA
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Expert Support. Seamless Operations. Global Connections.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Company</h5>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/about" className="hover:text-corporate-gold">About Us</Link></li>
              <li><Link to="/services" className="hover:text-corporate-gold">Services</Link></li>
              <li><Link to="/products" className="hover:text-corporate-gold">Products</Link></li>
              <li><Link to="/partners" className="hover:text-corporate-gold">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Legal</h5>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/privacy-terms/privacy" className="hover:text-corporate-gold">Privacy Policy</Link></li>
              <li><Link to="/privacy-terms/terms" className="hover:text-corporate-gold">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Contact</h5>
            <p className="text-sm text-gray-300">{CONTACT_INFO.address}</p>
            <p className="text-sm text-gray-300 mt-1">Email: {CONTACT_INFO.email}</p>
            <p className="text-sm text-gray-300">Phone: {CONTACT_INFO.phone}</p>
          </div>

        </div>

        <div className="border-t border-white/10 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Sabolla International Trading PLC. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
