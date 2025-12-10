// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Layout Components (must be imported and used)
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Core Pages
import Home from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

// Dynamic Content Pages
import ProductsIndex from './pages/ProductsIndex';
import ProductDetail from './pages/ProductDetail'; 
import ServicesIndex from './pages/ServicesIndex';
import ServiceDetail from './pages/ServiceDetail';
import PartnersPage from './pages/Partners';

// Legal Pages
import LegalPage from './pages/LegalPage'; 

/**
 * The main application component, setting up routing and global layout.
 * * NOTE: The Testimonials and Key Achievements sections are typically integrated
 * as components on the Home and About pages for maximum visibility, 
 * but routes are defined if dedicated pages are necessary.
 */
const App: React.FC = () => {
  return (
    <Router>
      {/* This container ensures the footer is always at the bottom */}
      <div className="flex flex-col min-h-screen"> 
        <Header /> 

        {/* The main content area, which expands to fill available space */}
        <main className="flex-grow"> 
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Product Routes (Index and Detail) */}
            <Route path="/products" element={<ProductsIndex />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            
            {/* Service Routes (Index and Detail) */}
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            
            {/* Partner Routes */}
            <Route path="/partners" element={<PartnersPage />} />
            
            {/* Legal Routes (Dynamic) */}
            <Route path="/privacy-terms/:type" element={<LegalPage />} />
            
            {/* Redirect for the base legal link */}
            <Route path="/privacy-terms" element={<Navigate to="/privacy-terms/terms" replace />} />
            
            {/* Catch-all for 404 Not Found (Optional but recommended) */}
            <Route path="*" element={
              <div className="text-center py-20">
                <h1 className="text-4xl text-red-600">404 - Page Not Found</h1>
                <p className="text-lg mt-4">The path you requested does not exist.</p>
              </div>
            } />
          </Routes>
        </main>
        
        {/* The Footer component */}
        <Footer /> 
      </div>
    </Router>
  );
};

export default App;