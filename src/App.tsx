import * as React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate, 
  Link // <--- Make sure this is here!
} from 'react-router-dom';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from "./components/layout/ScrollToTop";

// ... rest of your imports

import Home from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProductsIndex from './pages/ProductsIndex';
import ProductDetail from './pages/ProductDetail'; 
import ServicesIndex from './pages/ServicesIndex';
import ServiceDetail from './pages/ServiceDetail';
import PartnersPage from './pages/Partners';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> 
        <ScrollToTop />
        <Header /> 

        <main className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<ProductsIndex />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/privacy-terms" element={<Navigate to="/privacy-terms/terms" replace />} />
            
            {/* Catch-all route to handle 404s within React */}
            <Route path="*" element={
              <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-6xl font-bold text-[#122C21] mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-[#308667] mb-6">Page Not Found</h2>
                <p className="text-gray-600 mb-8 max-w-md">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Link to="/" className="bg-[#122C21] text-[#F9F2D6] px-8 py-3 rounded-full font-bold hover:bg-[#308667] transition-colors">
                  Return Home
                </Link>
              </div>
            } />
          </Routes>
        </main>
        
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;