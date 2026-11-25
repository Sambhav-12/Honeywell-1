import React from 'react';
import {
  MAIN_SITE_URL,
  SIGN_IN_URL,
  SIGN_UP_URL,
} from '../constants/links';
import {
  BharatCaresLogo,
  HoneywellTechnologiesLogo,
  StylizedMenuIcon,
} from './BrandLogos';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-slate-100">
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 lg:px-8 h-[68px] sm:h-[78px] flex items-center justify-between gap-2 sm:gap-6">
        {/* Partner Logo Lockups */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <a
            href={MAIN_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Honeywell Technologies CSR initiative — Visit Honeywell Future Skills Edge"
            className="rounded-md py-1 px-0.5 sm:px-1 transition-opacity duration-150 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A74C0] focus-visible:ring-offset-2 shrink-0"
          >
            <HoneywellTechnologiesLogo />
          </a>

          <div
            className="h-8 sm:h-10 w-px bg-slate-200 shrink-0"
            aria-hidden="true"
          />

          <a
            href={MAIN_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Implemented by BharatCares — Visit Honeywell Future Skills Edge"
            className="rounded-md py-1 px-0.5 sm:px-1 transition-opacity duration-150 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A74C0] focus-visible:ring-offset-2 shrink-0"
          >
            <BharatCaresLogo />
          </a>
        </div>

        {/* Action Buttons & Menu Icon */}
        <nav
          aria-label="Portal access"
          className="flex items-center gap-1.5 sm:gap-3 shrink-0"
        >
          <a
            href={SIGN_IN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[34px] sm:min-h-[40px] px-2.5 sm:px-5 py-1.5 sm:py-2 rounded-md border-[1.5px] border-[#0A74C0] text-[#0A74C0] hover:bg-[#0A74C0] hover:text-white text-[11px] sm:text-sm font-medium tracking-wide uppercase whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A74C0] focus-visible:ring-offset-2"
          >
            SIGN IN
          </a>

          <a
            href={SIGN_UP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[34px] sm:min-h-[40px] px-2.5 sm:px-5 py-1.5 sm:py-2 rounded-md border-[1.5px] border-[#0A74C0] text-[#0A74C0] hover:bg-[#0A74C0] hover:text-white text-[11px] sm:text-sm font-medium tracking-wide uppercase whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A74C0] focus-visible:ring-offset-2"
          >
            SIGN UP
          </a>

          <a
            href={MAIN_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Honeywell Future Skills Edge main portal"
            className="inline-flex items-center justify-center min-w-[36px] min-h-[36px] sm:min-w-[44px] sm:min-h-[44px] p-1.5 sm:p-2 rounded-md hover:bg-orange-50 active:scale-95 transition-all duration-150 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D94B18] focus-visible:ring-offset-2"
          >
            <StylizedMenuIcon />
          </a>
        </nav>
      </div>
    </header>
  );
};
