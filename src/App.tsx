/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo } from 'react';
import { VerifiedCheckIcon } from './components/BrandLogos';
import { Header } from './components/Header';
import { TopBar } from './components/TopBar';
import { DEFAULT_CERTIFICATE, MAIN_SITE_URL } from './constants/links';

export default function App() {
  const { recipientName, issuedDate } = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get('name')?.trim();
    const dateParam = params.get('date')?.trim();
    return {
      recipientName: nameParam || DEFAULT_CERTIFICATE.recipientName,
      issuedDate: dateParam || DEFAULT_CERTIFICATE.issuedDate,
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111315]">
      <TopBar />
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 sm:py-24">
        <div className="w-full max-w-lg flex flex-col items-center text-center">
          <a
            href={MAIN_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Certificate verified on Honeywell Future Skills Edge — visit main site"
            className="inline-flex items-center justify-center p-2 rounded-full transition-transform duration-150 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A74C0] focus-visible:ring-offset-4"
          >
            <VerifiedCheckIcon />
          </a>

          <h1
            className="mt-6 text-[26px] sm:text-[32px] font-bold tracking-tight text-[#111315] leading-tight text-balance"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Certificate Verified
          </h1>

          <p className="mt-3 text-[16px] sm:text-[18px] font-normal text-[#374151] leading-relaxed">
            This certificate is valid and issued to
          </p>

          <p
            className="mt-6 text-[22px] sm:text-[25px] font-bold text-[#111315] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {recipientName}
          </p>

          <p className="mt-3.5 text-[15px] sm:text-[17px] font-normal text-[#6B7280] tabular-nums">
            Issued on: {issuedDate}
          </p>
        </div>
      </main>

      <footer className="w-full py-5 px-4 text-center">
        <a
          href={MAIN_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-400 hover:text-[#0A74C0] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A74C0] rounded px-1 py-0.5"
        >
          Honeywell Future Skills Edge · Implemented by BharatCares
        </a>
      </footer>
    </div>
  );
}
