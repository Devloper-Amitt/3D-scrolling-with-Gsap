import React from 'react';
import { Rocket } from 'lucide-react';
import { Section } from './Section';

export const HeroSection = () => (
  <Section animation="fade" className="bg-gradient-to-b from-purple-900 to-black text-white">
    <div className="text-center max-w-4xl mx-auto px-4">
      <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Welcome to the Future of Web Design
      </h1>
      <p className="text-xl mb-8 text-purple-200">
        Scroll to explore our interactive 3D universe
      </p>
      <Rocket className="w-16 h-16 mx-auto animate-bounce text-purple-400" />
    </div>
  </Section>
);