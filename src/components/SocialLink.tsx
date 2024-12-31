import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors group"
  >
    <div className="p-2 rounded-full bg-purple-900/50 group-hover:bg-purple-800 transition-colors">
      <Icon className="w-5 h-5" />
    </div>
    <span className="text-sm">{label}</span>
  </a>
);