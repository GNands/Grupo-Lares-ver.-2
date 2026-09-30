'use client';

import React from 'react';
import {
  Sparkles,
  PhoneCall,
  Mail,
  Menu,
  X,
  FileText,
  Clock,
  ShieldCheck,
  Globe2,
} from 'lucide-react';

export type SectionKey = 'inicio' | 'nosotros' | 'capacidades' | 'portafolio' | 'clientes' | 'contacto';

interface SidebarProps {
  activeSection: SectionKey;
  onNavigate: (section: SectionKey) => void;
  lang: 'es' | 'en';
  onToggleLang: (lang: 'es' | 'en') => void;
  isOpenMobile: boolean;
  onToggleMobile: () => void;
  onOpenQuickDossier: () => void;
}

export function Sidebar({
  activeSection,
  onNavigate,
  lang,
  onToggleLang,
  isOpenMobile,
  onToggleMobile,
  onOpenQuickDossier,
}: SidebarProps) {
  const isEs = lang === 'es';

  const navItems: { key: SectionKey; number: string; label: string; badge?: string }[] = [
    { key: 'inicio', number: '/01', label: isEs ? '01. INICIO' : '01. HOME' },
    { key: 'nosotros', number: '/02', label: isEs ? '02. NOSOTROS' : '02. ABOUT US' },
    { key: 'capacidades', number: '/03', label: isEs ? '03. CAPACIDADES' : '03. CAPABILITIES', badge: 'PRO' },
    { key: 'portafolio', number: '/04', label: isEs ? '04. PORTAFOLIO' : '04. PORTFOLIO' },
    { key: 'clientes', number: '/05', label: isEs ? '05. CLIENTES' : '05. CLIENTS' },
    { key: 'contacto', number: '/06', label: isEs ? '06. CONTACTO / BRIEF' : '06. CONTACT / BRIEF' },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#f5f0e8] brutal-border-b z-50 px-4 flex items-center justify-between">
        <button
          onClick={() => onNavigate('inicio')}
          className="flex items-center gap-2 text-left"
        >
          <div className="w-7 h-7 bg-[#1a1a1a] text-[#ffcc00] flex items-center justify-center font-bold text-xs tracking-tighter">
            GL
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight uppercase block text-[#1a1a1a] leading-none">
              GRUPO LARES
            </span>
            <span className="text-[9px] font-mono text-neutral-600 block uppercase">
              WIÑAYPAQ • CINEMA PRO
            </span>
          </div>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('contacto')}
            className="px-3 py-1.5 bg-[#ffcc00] text-[#1a1a1a] text-[11px] font-bold uppercase tracking-wider brutal-border"
          >
            {isEs ? 'Brief' : 'Quote'}
          </button>
          <button
            onClick={onToggleMobile}
            aria-label="Abrir menú de navegación"
            className="w-10 h-10 bg-[#1a1a1a] text-white flex items-center justify-center brutal-border hover:bg-[#ffcc00] hover:text-[#1a1a1a] transition-colors"
          >
            {isOpenMobile ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          onClick={onToggleMobile}
          className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-xs"
        />
      )}

      {/* Sidebar Aside */}
      <aside
        className={`fixed left-0 top-0 h-screen w-80 bg-[#f2ede5] brutal-border-r z-50 flex flex-col justify-between overflow-y-auto transition-transform duration-300 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col">
          {/* Header & Logo */}
          <div className="p-6 brutal-border-b flex items-center justify-between bg-[#eee9e0]">
            <button
              onClick={() => {
                onNavigate('inicio');
                if (isOpenMobile) onToggleMobile();
              }}
              className="flex items-center gap-3 text-left group"
            >
              <div className="w-9 h-9 bg-[#1a1a1a] text-[#ffcc00] flex items-center justify-center font-bold text-sm tracking-tighter group-hover:bg-[#ffcc00] group-hover:text-[#1a1a1a] transition-colors">
                GL
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tighter uppercase text-[#1a1a1a] leading-none">
                  GRUPO LARES
                </span>
                <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest mt-1">
                  FILM & STAGE LAB
                </span>
              </div>
            </button>
            <div
              title="Cuenta Auditada"
              className="w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center cursor-pointer hover:bg-[#ffcc00] hover:text-[#1a1a1a] transition-colors"
            >
              <ShieldCheck size={16} />
            </div>
          </div>

          {/* Operational Status Strip */}
          <div className="px-6 py-3.5 brutal-border-b bg-[#e8e3da]">
            <div className="flex items-center justify-between text-xs font-mono tracking-wider text-neutral-600 mb-1.5">
              <span className="font-semibold">LIMA, PE</span>
              <span className="flex items-center gap-1">
                <Clock size={11} /> GMT-5
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e63b2e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e63b2e]"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a]">
                {isEs ? 'DISPONIBLE PARA PRODUCCIÓN' : 'AVAILABLE FOR PRODUCTION'}
              </span>
            </div>
          </div>

          {/* Client Persona / NGO Assurance Tag */}
          <div className="px-6 py-2 bg-[#ffcc00]/20 brutal-border-b flex items-center justify-between text-[10px] font-mono text-[#1a1a1a]">
            <span className="uppercase font-bold tracking-wider">
              {isEs ? 'AUDITORÍA ONGs & CORPS' : 'NGOs & CORPS COMPLIANCE'}
            </span>
            <span className="bg-[#1a1a1a] text-white px-1.5 py-0.2 font-bold text-[9px]">
              SLA 24H
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col py-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => {
                    onNavigate(item.key);
                    if (isOpenMobile) onToggleMobile();
                  }}
                  className={`px-6 py-3.5 text-left text-xs uppercase tracking-wider transition-all flex items-center justify-between border-b border-neutral-300 font-bold ${
                    isActive
                      ? 'bg-[#1a1a1a] text-white border-l-4 border-l-[#ffcc00] pl-5'
                      : 'text-neutral-700 hover:bg-[#e2ddd4] hover:text-[#1a1a1a]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {item.badge && (
                      <span className="text-[9px] bg-[#0055ff] text-white px-1.5 py-0.5 font-bold">
                        {item.badge}
                      </span>
                    )}
                    <span className={`text-[10px] ${isActive ? 'text-[#ffcc00]' : 'opacity-40'}`}>
                      {item.number}
                    </span>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Interactive Discovery Shortcuts */}
          <div className="p-4 mx-4 my-2 bg-[#eee9e0] brutal-border text-[11px] font-mono flex flex-col gap-1.5 text-neutral-700">
            <div className="flex items-center justify-between text-[#1a1a1a] font-bold">
              <span className="flex items-center gap-1 text-[10px] uppercase">
                <Sparkles size={12} className="text-[#e63b2e]" />
                {isEs ? 'Acceso Rápido' : 'Quick Access'}
              </span>
              <span className="text-[9px] bg-[#1a1a1a] text-white px-1">1-6</span>
            </div>
            <p className="text-[10px] leading-tight text-neutral-600">
              {isEs
                ? 'Navega con teclas 1 a 6 o pulsa B para iniciar el Brief Ejecutivo.'
                : 'Navigate with keys 1-6 or press B for Executive Brief.'}
            </p>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="p-6 brutal-border-t flex flex-col gap-3 bg-[#e8e3da]">
          <button
            onClick={() => {
              onNavigate('contacto');
              if (isOpenMobile) onToggleMobile();
            }}
            className="w-full py-3.5 px-4 bg-[#1a1a1a] text-white font-bold text-xs uppercase tracking-widest text-center brutal-border brutal-shadow hover:bg-[#ffcc00] hover:text-[#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#1a1a1a] transition-all flex items-center justify-center gap-2"
          >
            <span>{isEs ? 'Hagámoslo posible' : 'Make It Happen'}</span>
            <span className="text-[#ffcc00]">→</span>
          </button>

          <button
            onClick={onOpenQuickDossier}
            className="w-full py-2 px-3 bg-white text-[#1a1a1a] font-mono font-bold text-[10px] uppercase tracking-wider text-center brutal-border hover:bg-[#ffcc00] transition-colors flex items-center justify-center gap-1.5"
          >
            <FileText size={12} />
            <span>{isEs ? 'Descargar Dossier PDF' : 'Download Executive PDF'}</span>
          </button>

          {/* Lang and Quick Connect */}
          <div className="flex items-center justify-between pt-2 border-t border-neutral-300">
            <div className="flex items-center gap-1 text-xs font-bold">
              <button
                onClick={() => onToggleLang('es')}
                className={`transition-colors ${
                  isEs ? 'text-[#1a1a1a] underline decoration-2 decoration-[#ffcc00]' : 'text-neutral-500 hover:text-[#1a1a1a]'
                }`}
              >
                ES
              </button>
              <span className="text-neutral-400">/</span>
              <button
                onClick={() => onToggleLang('en')}
                className={`transition-colors ${
                  !isEs ? 'text-[#1a1a1a] underline decoration-2 decoration-[#ffcc00]' : 'text-neutral-500 hover:text-[#1a1a1a]'
                }`}
              >
                EN
              </button>
              <Globe2 size={12} className="ml-1 text-neutral-500" />
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <a
                href="https://wa.me/51989342110"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-[#1a1a1a] font-bold uppercase tracking-wider transition-colors flex items-center gap-0.5"
              >
                <PhoneCall size={10} />
                WSP
              </a>
              <span className="text-neutral-300">•</span>
              <a
                href="mailto:contacto@grupolares.pe"
                className="text-neutral-600 hover:text-[#1a1a1a] font-bold uppercase tracking-wider transition-colors flex items-center gap-0.5"
              >
                <Mail size={10} />
                MAIL
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
