import React from 'react';
import { Section } from './Section';

interface CTASectionProps {
  onGetStarted: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onGetStarted }) => (
  <Section animation="zoom" className="bg-gradient-to-t from-purple-900 to-black text-white">
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Ready to Begin?
      </h2>
      <button 
        onClick={onGetStarted}
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-purple-500/50"
      >
        Get Started
      </button>
      <p className="mt-8 text-sm text-purple-300">Made with ❤️ by Axmitt</p>
    </div>
  </Section>
);