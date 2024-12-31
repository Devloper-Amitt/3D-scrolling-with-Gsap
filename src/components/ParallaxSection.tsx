import React from 'react';
import { Star, Sparkles } from 'lucide-react';
import { Section } from './Section';
import { ParallaxLayer } from './ParallaxLayer';

export const ParallaxSection = () => (
  <Section className="relative h-screen overflow-hidden bg-gradient-to-b from-black to-purple-900">
    <ParallaxLayer speed={0.2} className="flex items-center justify-center">
      <Star className="w-8 h-8 text-yellow-300 opacity-75" />
    </ParallaxLayer>
    <ParallaxLayer speed={0.5} className="flex items-center justify-center">
      <Sparkles className="w-12 h-12 text-purple-400 opacity-75" />
    </ParallaxLayer>
    <div className="relative z-10 text-center text-white">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Infinite Possibilities
      </h2>
      <p className="text-xl text-purple-200">Scroll to discover more</p>
    </div>
  </Section>
);