import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { ComponentsSection } from './components/ComponentsSection';
import { ParallaxSection } from './components/ParallaxSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    gsap.to('body', {
      backgroundColor: '#000',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: '+=1000',
        scrub: true,
      },
    });
  }, []);

  const handleGetStarted = () => {
    const featuresSection = document.querySelector('#features');
    featuresSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-hidden">
      <HeroSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <ComponentsSection />
      <ParallaxSection />
      <CTASection onGetStarted={handleGetStarted} />
      <Footer />
    </div>
  );
}