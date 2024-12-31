import React from 'react';
import { Code, Layers, Zap } from 'lucide-react';
import { Section } from './Section';

const ComponentCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="text-center group">
    <div className="bg-purple-800 p-6 rounded-full w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg hover:shadow-purple-500/50">
      <Icon className="w-12 h-12" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export const ComponentsSection = () => (
  <Section animation="slide" className="bg-gradient-to-b from-black via-purple-900 to-black text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        Key Components
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        <ComponentCard
          icon={Code}
          title="Section Component"
          description="Create unique scroll-based animations with reusable sections that respond to user behavior"
        />
        <ComponentCard
          icon={Layers}
          title="ParallaxLayer"
          description="Add depth and dimension to your project with parallax scrolling effects that bring static elements to life"
        />
        <ComponentCard
          icon={Zap}
          title="Card3D"
          description="Interact with 3D cards that react to your mouse movements, enhancing the visual experience"
        />
      </div>
    </div>
  </Section>
);