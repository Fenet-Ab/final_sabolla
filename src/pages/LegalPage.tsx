// src/pages/LegalPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const mockContent = {
  privacy: {
    title: "Privacy Policy",
    body: "SABOLLA INTERNATIONAL TRADING PLC is committed to protecting your privacy. This policy outlines how we handle your personal data, including information collected via our contact forms. We do not share your information with third parties without your explicit consent, except as required by Ethiopian law. Data submitted via the contact form is stored securely in our CMS (Sanity) and used only for client communication and service fulfillment."
  },
  terms: {
    title: "Terms and Conditions",
    body: "These Terms and Conditions govern the use of the SABOLLA INTERNATIONAL TRADING PLC website. By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. All content, including mock data, imagery, and code, is for illustrative purposes only. All commercial arrangements are governed by separate, legally binding contracts."
  }
};

const LegalPage: React.FC = () => {
  const { type } = useParams<{ type: 'privacy' | 'terms' }>();
  const pageType = type === 'privacy' ? 'privacy' : 'terms';
  const data = mockContent[pageType];

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-extrabold text-corporate-blue mb-6 border-b pb-3">
        {data.title}
      </h1>
      
      <div className="prose lg:prose-lg max-w-none text-gray-700">
        <p>{data.body}</p>
        
        <h2 className='text-3xl font-bold text-corporate-gold mt-10'>Data Security</h2>
        <p>We implement a variety of security measures to maintain the safety of your personal information when you submit a request or enter, submit, or access your personal information.</p>
        
        <h2 className='text-3xl font-bold text-corporate-gold mt-10'>Contact Information</h2>
        <p>If you have questions about this policy, please contact us at: info@sabolla-trading.com</p>
      </div>
    </div>
  );
};

export default LegalPage;