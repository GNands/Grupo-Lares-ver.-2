'use client';

import React, { useEffect, useState } from 'react';
import { SectionKey } from './Sidebar';
import { ShieldCheck, Volume2, VolumeX, Sparkles, Download, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeSection: SectionKey;
  lang: 'es' | 'en';
  onNavigate: (section: SectionKey) => void;
  onOpenQuickDossier: () => void;
  isAudioOn: boolean;
  onToggleAudio: () => void;
}

export function Header({
  activeSection,
  lang,
  onNavigate,
  onOpenQuickDossier,
  isAudioOn,
  onToggleAudio,
}: HeaderProps) {
  const isEs = lang === 'es';
  const [timeStr, setTimeStr] = useState<string>('12:00:00');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('es-PE', {
          timeZone: 'America/Lima',
          hour12: false,
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const sectionTitles: Record<SectionKey, { title: string; ref: string }> = {
    inicio: { title: isEs ? 'REEL Y MANIFIESTO' : 'REEL & MANIFESTO', ref: 'SEC // 01' },
    nosotros: { title: isEs ? 'IDENTIDAD Y MÉTODO' : 'IDENTITY & METHOD', ref: 'SEC // 02' },
    capacidades: { title: isEs ? 'CAPACIDADES EJECUTIVAS' : 'CAPABILITIES & LAB', ref: 'SEC // 03' },
    portafolio: { title: isEs ? 'DOSSIER DE PROYECTOS' : 'PROJECT DOSSIER', ref: 'SEC // 04' },
    clientes: { title: isEs ? 'CONFIANZA & COMPLIANCE' : 'TRUST & COMPLIANCE', ref: 'SEC // 05' },
    contacto: { title: isEs ? 'BRIEF COMERCIAL' : 'EXECUTIVE BRIEF', ref: 'SEC // 06' },
  };

  return (
    <header className="fixed top-0 left-0 lg:left-80 right-0 h-16 bg-[#f5f0e8]/95 backdrop-blur-sm brutal-border-b z-30 flex items-center justify-between px-4 sm:px-8">
      {/* Left side: Technical division indicator */}
      <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-[#e63b2e]"></span>
          <span className="font-bold text-xs uppercase tracking-widest text-[#1a1a1a] truncate">
            {isEs ? 'PRODUCCIÓN CINEMATOGRÁFICA & ARTÍSTICA' : 'CINEMATOGRAPHIC & ARTISTIC PRODUCTION'}
          </span>
        </div>
        <span className="hidden sm:inline text-neutral-400">|</span>
        <span className="hidden sm:inline text-xs font-mono text-neutral-600 uppercase">
          WIÑAYPAQ • CINEMA PRO
        </span>
      </div>

      {/* Right side: Live Archive Clock & Action shortcuts */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Sound toggle simulator for discovery experience */}
        <button
          onClick={onToggleAudio}
          title={isAudioOn ? 'Desactivar audio de ambientación' : 'Activar audio de ambientación cinematográfica'}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-bold brutal-border transition-colors ${
            isAudioOn ? 'bg-[#ffcc00] text-[#1a1a1a]' : 'bg-[#e8e3da] text-neutral-700 hover:bg-[#ffcc00]'
          }`}
        >
          {isAudioOn ? <Volume2 size={13} /> : <VolumeX size={13} />}
          <span className="hidden md:inline">{isAudioOn ? 'FX ON' : 'FX OFF'}</span>
        </button>

        {/* Live time indicator */}
        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 bg-[#e8e3da] brutal-border font-mono text-xs text-neutral-800">
          <span className="text-[10px] text-neutral-500">LIMA</span>
          <span className="font-bold text-[#1a1a1a]">{timeStr}</span>
        </div>

        {/* Quick Dossier PDF Button */}
        <button
          onClick={onOpenQuickDossier}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-[#1a1a1a] text-white hover:bg-[#ffcc00] hover:text-[#1a1a1a] font-mono text-xs font-bold uppercase tracking-wider brutal-border transition-colors"
        >
          <Download size={13} />
          <span>{isEs ? 'Dossier PDF' : 'Dossier PDF'}</span>
        </button>

        {/* Fast Brief Trigger */}
        <button
          onClick={() => onNavigate('contacto')}
          className="flex items-center gap-1 px-3 py-1.5 bg-[#ffcc00] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#ffcc00] font-bold text-xs uppercase tracking-wider brutal-border transition-colors shadow-[2px_2px_0px_0px_#1a1a1a]"
        >
          <span>{isEs ? 'Cotizar' : 'Quote'}</span>
          <ArrowUpRight size={13} />
        </button>
      </div>
    </header>
  );
}
