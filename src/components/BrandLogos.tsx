import React from 'react';

export const HoneywellTechnologiesLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-center shrink-0">
      <span className="text-[8.5px] sm:text-[10.5px] leading-none text-[#4B5563] font-normal mb-1 sm:mb-1.5 whitespace-nowrap">
        CSR initiative by
      </span>
      <div className="flex items-center gap-1 sm:gap-1.5">
        {/* Stylized geometric red Honeywell H mark */}
        <svg
          className="w-[18px] h-[16px] sm:w-[23px] sm:h-[20px] shrink-0"
          viewBox="0 0 24 20"
          fill="none"
          aria-hidden="true"
        >
          {/* Left top & bottom pillars */}
          <rect x="0" y="0" width="7.2" height="8.6" fill="#E1251B" />
          <rect x="0" y="11.4" width="7.2" height="8.6" fill="#E1251B" />
          {/* Center bridge */}
          <rect x="7.2" y="6.2" width="9.6" height="7.6" fill="#E1251B" />
          {/* Right top & bottom pillars */}
          <rect x="16.8" y="0" width="7.2" height="8.6" fill="#E1251B" />
          <rect x="16.8" y="11.4" width="7.2" height="8.6" fill="#E1251B" />
        </svg>
        <div className="flex flex-col leading-none">
          <span
            className="text-[10.5px] sm:text-[14.5px] font-extrabold tracking-tight text-[#E1251B] leading-[1.02] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Honeywell
          </span>
          <span
            className="text-[9.5px] sm:text-[12.5px] font-bold tracking-tight text-[#E1251B] leading-[1.04] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Technologies
          </span>
        </div>
      </div>
    </div>
  );
};

export const BharatCaresLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-center shrink-0">
      <span className="text-[8.5px] sm:text-[10.5px] leading-none text-[#4B5563] font-normal mb-1 sm:mb-1.5 whitespace-nowrap">
        Implemented by
      </span>
      <div className="flex items-center gap-1 sm:gap-1.5">
        <div className="flex flex-col items-end leading-none">
          <span
            className="text-[10px] sm:text-[13px] font-bold text-[#0095D9] leading-[1.02] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Bharat
          </span>
          <span
            className="text-[10px] sm:text-[13px] font-bold text-[#0095D9] leading-[1.02] whitespace-nowrap"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Cares
          </span>
          <span className="text-[5px] sm:text-[6.5px] font-semibold text-[#1E293B] leading-tight mt-0.5 whitespace-nowrap">
            by SMEC Trust
          </span>
        </div>
        {/* Interlocking green and orange BharatCares emblem */}
        <svg
          className="w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] shrink-0"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
        >
          {/* Orange interlocking hook (top-left & bottom-left) */}
          <path
            d="M4 13.5V4H20V9.5H9.5V16.5H15.5V22H4V13.5Z"
            fill="#F37021"
          />
          <rect x="4" y="23.5" width="11.5" height="4.5" fill="#F37021" />
          {/* Green interlocking hook (top-right & bottom-right) */}
          <path
            d="M28 18.5V28H12V22.5H22.5V15.5H16.5V10H28V18.5Z"
            fill="#3FA535"
          />
          <rect x="16.5" y="4" width="11.5" height="4.5" fill="#3FA535" />
        </svg>
      </div>
    </div>
  );
};

export const StylizedMenuIcon: React.FC = () => {
  return (
    <svg
      className="w-[20px] h-[18px] sm:w-[24px] sm:h-[20px]"
      viewBox="0 0 26 22"
      fill="none"
      aria-hidden="true"
    >
      <rect x="7" y="2" width="17" height="2.6" rx="1.3" fill="#D94B18" />
      <rect x="2" y="9.7" width="22" height="2.6" rx="1.3" fill="#D94B18" />
      <rect x="9" y="17.4" width="15" height="2.6" rx="1.3" fill="#D94B18" />
    </svg>
  );
};

export const VerifiedCheckIcon: React.FC = () => {
  return (
    <svg
      className="w-[68px] h-[68px] sm:w-[76px] sm:h-[76px]"
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="40"
        cy="40"
        r="33.5"
        stroke="#0A74C0"
        strokeWidth="5.2"
      />
      <path
        d="M25.5 41.2L35.4 51.2L55 29.8"
        stroke="#0A74C0"
        strokeWidth="5.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
