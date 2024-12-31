import React from 'react';
import { Instagram, Github, ExternalLink } from 'lucide-react';
import { SocialLink } from './SocialLink';

export const Footer = () => (
  <footer className="bg-black/50 backdrop-blur-lg border-t border-purple-900/30">
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-purple-300 text-sm">Join Me here </p>
          <div className="flex gap-4">
            <SocialLink
              href="https://instagram.com/frontend.amit"
              icon={Instagram}
              label="@frontend.amit"
            />
            <SocialLink
              href="https://github.com/Devloper-Amitt"
              icon={Github}
              label="@Devloper-Amitt"
            />
          </div>
        </div>
        
        <a
          href="https://myportfolio-cb124.web.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/20 transition-all hover:scale-105"
        >
          View Portfolio
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      
      <div className="mt-8 text-center">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm text-purple-400 hover:text-white transition-colors"
        >
          Back to Top ↑
        </button>
      </div>
    </div>
  </footer>
);