// src/pages/ProductDetail.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCT_CATEGORIES } from '../data/mockData';

const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the product based on the URL slug (Mock Data Fetch)
  const product = PRODUCT_CATEGORIES.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl text-red-600 mb-4">Product Not Found</h1>
        <p>The product category you are looking for does not exist.</p>
        <Link to="/products" className="text-corporate-blue underline mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-5xl font-extrabold text-corporate-blue mb-4">
        {product.name}
      </h1>
      <p className="text-2xl text-corporate-gold mb-8">{product.description}</p>
      
      <div className="bg-neutral-gray p-8 rounded-lg shadow-inner">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Detailed Offering</h2>
        
        {/* PLACEHOLDER for richer, CMS-driven content */}
        <p className="text-lg text-gray-700 leading-relaxed">
          SABOLLA facilitates the import and delivery of **{product.name}** systems and spare parts, ensuring they meet all Ethiopian Civil Aviation Authority (ECAA) or relevant military/fire safety standards. We manage the entire supply chain, from sourcing high-quality international suppliers to final installation and regulatory compliance within Ethiopia.
        </p>
        
        <ul className="list-disc list-inside mt-6 space-y-2 text-gray-700">
            <li>Regulatory Compliance and Licensing.</li>
            <li>Logistics and Secure Transportation.</li>
            <li>Customs Clearance and Duty Facilitation.</li>
            <li>Post-Sale Support and Maintenance Contracts.</li>
        </ul>

      </div>

      <Link to="/products" className="mt-12 inline-block text-corporate-blue font-semibold hover:underline">
        ← Back to All Product Categories
      </Link>
    </div>
  );
};

export default ProductDetail;