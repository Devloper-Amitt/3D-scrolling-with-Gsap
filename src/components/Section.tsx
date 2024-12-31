import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'rotate' | 'zoom' | 'fade' | 'slide';
}

export const Section: React.FC<SectionProps> = ({ children, className = '', animation = 'fade' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    switch (animation) {
      case 'rotate':
        tl.fromTo(
          section,
          { rotateY: -30, opacity: 0 },
          { rotateY: 0, opacity: 1, duration: 1 }
        );
        break;
      case 'zoom':
        tl.fromTo(
          section,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1 }
        );
        break;
      case 'slide':
        tl.fromTo(
          section,
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 }
        );
        break;
      default:
        tl.fromTo(
          section,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 }
        );
    }

    return () => {
      tl.kill();
    };
  }, [animation]);

  return (
    <div
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center perspective-1000 ${className}`}
    >
      {children}
    </div>
  );
}