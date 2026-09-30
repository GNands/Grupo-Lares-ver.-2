'use client';

import React from 'react';
import { SectionKey } from './Sidebar';

interface FooterProps {
  onNavigate: (section: SectionKey) => void;
  lang: 'es' | 'en';
}

export function Footer({ onNavigate, lang }: FooterProps) {
  const isEs = lang === 'es';

  return (
    <footer className="w-full brutal-border-t bg-[#eee9e0] py-8 px-6 sm:px-10 lg:px-16">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-600">
        <p className="text-center md:text-left">
          © 2025 GRUPO LARES • WIÑAYPAQ & CINEMA PRO. TODOS LOS DERECHOS RESERVADOS.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 font-bold text-xs uppercase tracking-wider text-[#1a1a1a]">
          <button
            onClick={() => onNavigate('nosotros')}
            className="hover:text-[#e63b2e] transition-colors"
          >
            {isEs ? 'MANIFIESTO' : 'MANIFESTO'}
          </button>
          <button
            onClick={() => onNavigate('capacidades')}
            className="hover:text-[#0055ff] transition-colors"
          >
            {isEs ? 'CAPACIDADES' : 'CAPABILITIES'}
          </button>
          <button
            onClick={() => onNavigate('clientes')}
            className="hover:text-[#1a1a1a] transition-colors"
          >
            COMPLIANCE
          </button>
          <span className="text-neutral-500">LIMA • MADRID • CDMX</span>
        </div>
      </div>
    </footer>
  );
}
