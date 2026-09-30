'use client';

import React, { useState, useEffect } from 'react';
import { Sidebar, SectionKey } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { InicioSection } from '@/components/sections/InicioSection';
import { NosotrosSection } from '@/components/sections/NosotrosSection';
import { CapacidadesSection } from '@/components/sections/CapacidadesSection';
import { PortafolioSection } from '@/components/sections/PortafolioSection';
import { ClientesSection } from '@/components/sections/ClientesSection';
import { ContactoSection } from '@/components/sections/ContactoSection';
import { QuickDossierModal } from '@/components/QuickDossierModal';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionKey>('inicio');
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuickDossierOpen, setIsQuickDossierOpen] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);

  // Portfolio filter state
  const [portfolioFilter, setPortfolioFilter] = useState<string>('all');

  // Brief prefill data
  const [briefPrefill, setBriefPrefill] = useState<{
    category?: string;
    description?: string;
    tier?: string;
  }>({});

  // Web Audio subtle synthesizer for feedback when clicking or changing state
  const playSubtleSound = React.useCallback((frequency = 440, duration = 0.08) => {
    if (!isAudioOn || typeof window === 'undefined') return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch {
      // Audio context might be restricted before user gesture
    }
  }, [isAudioOn]);

  // Keyboard navigation shortcuts (1-6, B, Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in input or textarea
      const target = e.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
        return;
      }

      if (e.key === '1') {
        setActiveSection('inicio');
        playSubtleSound(300);
      } else if (e.key === '2') {
        setActiveSection('nosotros');
        playSubtleSound(350);
      } else if (e.key === '3') {
        setActiveSection('capacidades');
        playSubtleSound(400);
      } else if (e.key === '4') {
        setActiveSection('portafolio');
        playSubtleSound(450);
      } else if (e.key === '5') {
        setActiveSection('clientes');
        playSubtleSound(500);
      } else if (e.key === '6' || e.key.toLowerCase() === 'b') {
        setActiveSection('contacto');
        playSubtleSound(600);
      } else if (e.key === 'Escape') {
        setIsQuickDossierOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playSubtleSound]);

  const handleNavigate = (section: SectionKey) => {
    setActiveSection(section);
    playSubtleSound(520, 0.06);
    // Smooth scroll to top of main content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreFillBrief = (data: { category: string; description: string; tier: string }) => {
    setBriefPrefill(data);
    setActiveSection('contacto');
    playSubtleSound(660, 0.1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePortfolioFilterSelection = (filter: string) => {
    setPortfolioFilter(filter);
    setActiveSection('portafolio');
    playSubtleSound(480, 0.08);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#1a1a1a] flex">
      {/* Sidebar Navigation */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={setLang}
        isOpenMobile={isMobileMenuOpen}
        onToggleMobile={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onOpenQuickDossier={() => setIsQuickDossierOpen(true)}
      />

      {/* Main Content Area */}
      <div className="w-full lg:pl-80 flex flex-col min-h-screen">
        {/* Top Technical Header */}
        <Header
          activeSection={activeSection}
          lang={lang}
          onNavigate={handleNavigate}
          onOpenQuickDossier={() => setIsQuickDossierOpen(true)}
          isAudioOn={isAudioOn}
          onToggleAudio={() => {
            const nextAudio = !isAudioOn;
            setIsAudioOn(nextAudio);
            if (nextAudio) playSubtleSound(880, 0.1);
          }}
        />

        {/* Dynamic Section Switcher with Discovery Transitions */}
        <main className="flex-1 pt-16 flex flex-col w-full">
          {activeSection === 'inicio' && (
            <InicioSection
              onNavigate={handleNavigate}
              onSelectPortfolioFilter={handlePortfolioFilterSelection}
              lang={lang}
            />
          )}

          {activeSection === 'nosotros' && (
            <NosotrosSection
              onNavigate={handleNavigate}
              lang={lang}
            />
          )}

          {activeSection === 'capacidades' && (
            <CapacidadesSection
              onNavigate={handleNavigate}
              onPreFillBrief={handlePreFillBrief}
              lang={lang}
            />
          )}

          {activeSection === 'portafolio' && (
            <PortafolioSection
              onNavigate={handleNavigate}
              activeFilter={portfolioFilter}
              onFilterChange={setPortfolioFilter}
              onPreFillBrief={handlePreFillBrief}
              lang={lang}
            />
          )}

          {activeSection === 'clientes' && (
            <ClientesSection
              onNavigate={handleNavigate}
              lang={lang}
            />
          )}

          {activeSection === 'contacto' && (
            <ContactoSection
              key={briefPrefill.description || briefPrefill.category || 'brief-default'}
              initialData={briefPrefill}
              onClearInitialData={() => setBriefPrefill({})}
              lang={lang}
            />
          )}
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} lang={lang} />
      </div>

      {/* Quick Dossier Modal */}
      <QuickDossierModal
        isOpen={isQuickDossierOpen}
        onClose={() => setIsQuickDossierOpen(false)}
        lang={lang}
      />
    </div>
  );
}
