import React from 'react';
import { Section } from './Section';
import { Card3D } from './Card3D';

export const FeaturesSection = () => (
  <Section animation="rotate" className="bg-black text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Key Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card3D
          title="3D Animations"
          description="Experience smooth GSAP-powered animations with ScrollTrigger integration, making your scroll feel like magic"
          imageUrl="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800"
          className="hover:scale-105 transition-transform"
        />
        <Card3D
          title="Interactive Elements"
          description="Watch dynamic components come to life with every scroll and click. Each interaction unlocks new layers of depth"
          imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800"
          className="hover:scale-105 transition-transform"
        />
        <Card3D
          title="Responsive Design"
          description="Enjoy an optimized experience on any device—desktop, tablet, or mobile—with smooth transitions that adapt to your screen"
          imageUrl="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800"
          className="hover:scale-105 transition-transform"
        />
      </div>
    </div>
  </Section>
);