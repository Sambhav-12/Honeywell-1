import React from 'react';
import { Mail } from 'lucide-react';
import { MAIN_SITE_URL, SUPPORT_EMAIL } from '../constants/links';

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#151611] text-[#F3F4F6]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-10 sm:h-11 flex items-center justify-between">
        <a
          href={MAIN_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit Honeywell Future Skills Edge (${SUPPORT_EMAIL})`}
          className="inline-flex items-center gap-2 text-[13px] sm:text-sm font-normal text-[#F3F4F6] hover:text-white transition-colors duration-150 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#151611] py-1 whitespace-nowrap"
        >
          <Mail className="w-4 h-4 shrink-0 stroke-[1.75]" aria-hidden="true" />
          <span>{SUPPORT_EMAIL}</span>
        </a>
      </div>
    </div>
  );
};
