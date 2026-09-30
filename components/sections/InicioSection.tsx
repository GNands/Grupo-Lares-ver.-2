'use client';

import React, { useState, useEffect } from 'react';
import { SectionKey } from '../Sidebar';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  ArrowRight,
  Sparkles,
  Layers,
  Video,
  Award,
  ShieldCheck,
  CheckCircle2,
  Compass,
} from 'lucide-react';

interface InicioSectionProps {
  onNavigate: (section: SectionKey) => void;
  onSelectPortfolioFilter: (filter: string) => void;
  lang: 'es' | 'en';
}

export function InicioSection({ onNavigate, onSelectPortfolioFilter, lang }: InicioSectionProps) {
  const isEs = lang === 'es';
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeReelIdx, setActiveReelIdx] = useState(0);
  const [timecode, setTimecode] = useState('01:24:19:08');
  const [progress, setProgress] = useState(38);

  const reels = [
    {
      id: 'cinema',
      title: 'SHOWREEL 2025 // CINEMA PRO & WIÑAYPAQ',
      spec: 'ARRI RAW 4K • L-ACOUSTICS • DMX RIG',
      aspect: '21:9',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2cX4H2XHv6Ew6X11DLoBMBVHdpTglSk-jV1asVjHdpXQMXldzdW6xR3zorwJhZnjRsZ1fAPILrGp8uey2Rw6C7qF6LT7LX9cSQLj1RItciAEge4HqIxIgBFWCc-LsA3UKTlmWl-tnVXCwPVwNSHXKN2ezRVJvCE5AZsED_KbyJf4FjXaUs3o5-2gyF94yffPmXUcylOtckzbePwiAweZqduPILX58e11ByKsOB4Owgs66k-40HE-R',
      location: 'GRAN TEATRO NACIONAL & LIMA',
      alt: 'Cinematic production still of monumental Peruvian concert stage illuminated by architectural lighting with 4K camera rig in foreground',
    },
    {
      id: 'live',
      title: 'WIÑAYPAQ LIVE ESCÉNICO // FESTIVALES Y GALAS',
      spec: 'TRUSS HEAVY DUTY • 14,500 ASISTENTES • TIME-CODE',
      aspect: '16:9',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS4ko9KrnDuJKi_NMk2bUuPE0R47gQ1eWFxwDfn2ok6Olz538JLHjIRvn7G2GVsie0yLfJOqgnqNcm3aQtks2gXXFYidgCJ1b9l6l_YkDz0YqMSLimdABWpD5Oj3g0tkAJp4oVlirXoFOij7tNpPW_90OmrKiCS8xV9QvbEfM3zLoTtpiJ1zRdEmLAGZJwUji-PpbRVkVeiqzOobNe3l60tPeZ2xooa8BCuTw-B-IVvpDLuKNd7X1-',
      location: 'PLAZA MANCO CÁPAC // MINCUL',
      alt: 'Massive public festival stage at Plaza Manco Capac Lima with vibrant crowd view',
    },
    {
      id: 'corp',
      title: 'CINEMA PRO CORP // INFRAESTRUCTURA & DRON 8K',
      spec: 'RED V-RAPTOR • INSPIRED 3 RAW • MULTI-IDIOMA',
      aspect: '2.39:1',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO2Xmo0DlpRBBXulMsudAhK_EfddeDUEJVxwcveKUol7yIOUHLywlCUOtd4-m2f4iASmVk60-dYqLOam6iNtyxDvhT2_8trADnk0AxgHB59N8zlfCYvym1KzZEg-wpb3gIbqBCgBCAHKuWrPseAgsnrk6bDXSq7by4iMWixocBDr0wgfTxpxkX8-9N8CZdDgUqCEf988z6n59FRxi-8_U9N5WmLEfVu0hIY7WR9Hp6UHQQriPc1mMg',
      location: 'OBRA MAYOR CWE HUAYCOLORO',
      alt: 'Cinematic industrial documentary frame of large concrete hydro-engineering water channel project in Lurigancho Chosica',
    },
  ];

  // Timecode animation when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
        const frames = Math.floor(Math.random() * 24).toString().padStart(2, '0');
        const seconds = Math.floor((Date.now() / 1000) % 60).toString().padStart(2, '0');
        setTimecode(`01:24:${seconds}:${frames}`);
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentReel = reels[activeReelIdx];

  return (
    <div className="w-full flex flex-col">
      {/* 01. META UTILITY RIBBON */}
      <div className="w-full bg-[#eee9e0] brutal-border-b px-6 lg:px-12 py-3 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2.5 h-2.5 bg-[#e63b2e]"></span>
          <span className="font-bold uppercase tracking-wider text-[#1a1a1a]">
            REC STATUS: ACTIVE
          </span>
          <span className="text-neutral-400">/</span>
          <span className="tracking-widest text-neutral-700">DOSSIER 2025 // 2026</span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 text-[11px] uppercase tracking-widest text-neutral-600">
          <span>FPS: 24.00</span>
          <span>FORMAT: ARRI & RED 8K</span>
          <span className="hidden sm:inline">HUBS: LIMA • MADRID • CDMX</span>
        </div>
      </div>

      {/* 02. MAIN HERO BODY */}
      <section className="px-6 sm:px-10 lg:px-16 py-12 lg:py-20 flex flex-col gap-10">
        <div className="max-w-6xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a1a1a] text-white text-[11px] font-bold uppercase tracking-widest mb-6 brutal-border shadow-[2px_2px_0px_0px_#ffcc00]">
            <span className="w-1.5 h-1.5 bg-[#ffcc00]"></span>
            <span>GRUPO LARES • MANIFIESTO EJECUTIVO</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.93] font-bold tracking-tighter uppercase text-[#1a1a1a] mb-8">
            {isEs ? (
              <>
                Donde los demás ven <br className="hidden sm:inline" />
                <span className="bg-[#ffcc00] px-2 py-0.5 text-[#1a1a1a]">imposibles,</span>{' '}
                nosotros vemos caminos.
              </>
            ) : (
              <>
                Where others see <br className="hidden sm:inline" />
                <span className="bg-[#ffcc00] px-2 py-0.5 text-[#1a1a1a]">impossible,</span> we
                see paths.
              </>
            )}
          </h1>

          <p className="text-lg sm:text-2xl text-neutral-700 max-w-3xl leading-snug">
            {isEs
              ? 'Producción artística y audiovisual para crear experiencias memorables. Diseñamos hitos culturales y corporativos con precisión cinematográfica y disciplina de ingeniería.'
              : 'Artistic and audiovisual production to craft memorable experiences. We design cultural and corporate milestones with cinematic precision and engineering discipline.'}
          </p>
        </div>

        {/* Action Row */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('contacto')}
            className="px-8 py-4 bg-[#1a1a1a] text-white font-bold text-sm uppercase tracking-widest brutal-border brutal-shadow hover:bg-[#ffcc00] hover:text-[#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#1a1a1a] transition-all flex items-center gap-3"
          >
            <span>{isEs ? 'Hagámoslo posible' : 'Make It Happen'}</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={() => onNavigate('capacidades')}
            className="px-6 py-4 bg-[#e8e3da] font-bold text-xs uppercase tracking-widest text-[#1a1a1a] hover:bg-[#ffcc00] brutal-border transition-colors flex items-center gap-2"
          >
            <span>{isEs ? 'Ver Capacidades' : 'Explore Capabilities'}</span>
            <Compass size={14} />
          </button>

          <button
            onClick={() => onNavigate('portafolio')}
            className="px-6 py-4 bg-white font-bold text-xs uppercase tracking-widest text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white brutal-border transition-colors flex items-center gap-2"
          >
            <span>{isEs ? 'Ver Portafolio [06]' : 'View Portfolio [06]'}</span>
          </button>

          {/* Dual Pill Indicators */}
          <div className="ml-auto hidden xl:flex items-center gap-4 text-xs font-mono text-neutral-700 bg-[#eee9e0] p-2 brutal-border">
            <span className="flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#e63b2e]"></span>
              WIÑAYPAQ ESCENA
            </span>
            <span>+</span>
            <span className="flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#0055ff]"></span>
              CINEMA PRO FILM
            </span>
          </div>
        </div>

        {/* Discovery Filter Radar for High-Level Clients */}
        <div className="bg-[#e8e3da] p-4 brutal-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#e63b2e]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1a1a1a]">
              {isEs ? 'Exploración Rápida para Clientes & ONGs:' : 'Quick Discovery for Clients & NGOs:'}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                onSelectPortfolioFilter('institucional');
                onNavigate('portafolio');
              }}
              className="px-3 py-1.5 bg-white hover:bg-[#ffcc00] font-mono text-[11px] font-bold uppercase text-[#1a1a1a] brutal-border transition-colors"
            >
              {isEs ? '• Gobiernos & MinCul' : '• Governments & MinCul'}
            </button>
            <button
              onClick={() => {
                onSelectPortfolioFilter('corporativo');
                onNavigate('portafolio');
              }}
              className="px-3 py-1.5 bg-white hover:bg-[#ffcc00] font-mono text-[11px] font-bold uppercase text-[#1a1a1a] brutal-border transition-colors"
            >
              {isEs ? '• Corporativo CWE' : '• Corporate CWE'}
            </button>
            <button
              onClick={() => {
                onSelectPortfolioFilter('ongs');
                onNavigate('portafolio');
              }}
              className="px-3 py-1.5 bg-white hover:bg-[#ffcc00] font-mono text-[11px] font-bold uppercase text-[#1a1a1a] brutal-border transition-colors"
            >
              {isEs ? '• ONGs & ODS Sostenibilidad' : '• NGOs & Sustainability'}
            </button>
            <button
              onClick={() => {
                onSelectPortfolioFilter('cultura');
                onNavigate('portafolio');
              }}
              className="px-3 py-1.5 bg-white hover:bg-[#ffcc00] font-mono text-[11px] font-bold uppercase text-[#1a1a1a] brutal-border transition-colors"
            >
              {isEs ? '• Alta Cultura & Embajadas' : '• Culture & Embassies'}
            </button>
          </div>
        </div>

        {/* 03. INTERACTIVE HERO VIEWFINDER PLAYER */}
        <div className="relative w-full bg-[#1a1a1a] text-white overflow-hidden brutal-border brutal-shadow-lg mt-2">
          {/* Reel Switcher Bar */}
          <div className="bg-[#111111] p-3 brutal-border-b flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-neutral-400 uppercase">{isEs ? 'CARRETE ACTIVO:' : 'ACTIVE REEL:'}</span>
              <div className="flex items-center gap-1.5">
                {reels.map((r, idx) => (
                  <button
                    key={r.id}
                    onClick={() => {
                      setActiveReelIdx(idx);
                      setProgress(idx * 25);
                    }}
                    className={`px-2.5 py-1 text-[10px] font-bold uppercase brutal-border transition-colors ${
                      activeReelIdx === idx
                        ? 'bg-[#ffcc00] text-[#1a1a1a]'
                        : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                    }`}
                  >
                    0{idx + 1}. {r.id.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-neutral-400">
              <span className="hidden md:inline">{currentReel.spec}</span>
              <span className="text-[#ffcc00] font-bold">{currentReel.location}</span>
            </div>
          </div>

          {/* Film Viewfinder Frame */}
          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] bg-black flex items-center justify-center overflow-hidden">
            <img
              src={currentReel.image}
              alt={currentReel.alt}
              className={`w-full h-full object-cover transition-all duration-700 ${
                isPlaying ? 'scale-105 opacity-90' : 'opacity-75'
              }`}
            />

            {/* Viewfinder Overlay HUD */}
            <div className="absolute inset-0 pointer-events-none p-4 sm:p-8 flex flex-col justify-between">
              {/* Top Viewfinder Row */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="bg-[#1a1a1a]/85 px-3 py-1 border border-neutral-700 text-[#ffcc00] font-bold">
                  TC: {timecode}
                </span>

                <div className="flex items-center gap-2">
                  <span className="bg-[#1a1a1a]/85 px-3 py-1 border border-neutral-700 text-white flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        isPlaying ? 'bg-[#e63b2e] animate-ping' : 'bg-[#e63b2e]'
                      }`}
                    ></span>
                    <span className="font-bold text-[#e63b2e]">
                      {isPlaying ? 'RECORDING' : 'READY TO PLAY'}
                    </span>
                  </span>
                </div>
              </div>

              {/* Center Play Trigger */}
              <div className="flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? 'Pausar video' : 'Reproducir showreel'}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-none bg-[#ffcc00] text-[#1a1a1a] flex items-center justify-center brutal-border brutal-shadow hover:scale-105 hover:bg-white transition-transform pointer-events-auto"
                >
                  {isPlaying ? <Pause size={38} /> : <Play size={38} className="translate-x-1" />}
                </button>
              </div>

              {/* Bottom Viewfinder Row */}
              <div className="flex flex-wrap items-end justify-between gap-3 text-xs font-mono">
                <div className="bg-[#1a1a1a]/85 px-3 py-1.5 border border-neutral-700 text-neutral-300">
                  <span className="text-white font-bold">SENSOR:</span> 8K FULL FRAME • 3200K •
                  1/48s • ISO 800
                </div>

                <div className="bg-[#1a1a1a]/85 px-3 py-1.5 border border-neutral-700 text-neutral-300 flex items-center gap-3">
                  <span>AUDIO 48kHz / 24bit</span>
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-3 bg-emerald-500"></div>
                    <div className="w-1.5 h-4 bg-emerald-500"></div>
                    <div className="w-1.5 h-5 bg-amber-400"></div>
                    <div
                      className={`w-1.5 h-3 ${isPlaying ? 'bg-[#e63b2e]' : 'bg-neutral-600'}`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Scrubber Bar */}
          <div className="w-full bg-[#111111] px-6 py-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-white">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-3 py-1 bg-[#ffcc00] text-[#1a1a1a] font-bold text-[11px] uppercase tracking-wider brutal-border hover:bg-white"
              >
                {isPlaying ? (isEs ? 'PAUSAR' : 'PAUSE') : isEs ? 'REPRODUCIR' : 'PLAY'}
              </button>
              <span className="text-neutral-400">
                00:{Math.floor(progress * 1.5).toString().padStart(2, '0')} / 02:30
              </span>
            </div>

            {/* Clickable Progress Slider */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newPct = Math.round((clickX / rect.width) * 100);
                setProgress(newPct);
              }}
              className="flex-1 max-w-lg h-2 bg-neutral-800 relative mx-2 sm:mx-6 cursor-pointer brutal-border"
            >
              <div
                className="absolute left-0 top-0 bottom-0 bg-[#ffcc00]"
                style={{ width: `${progress}%` }}
              ></div>
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#e63b2e] brutal-border"
                style={{ left: `calc(${progress}% - 8px)` }}
              ></div>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-bold text-[11px] text-[#ffcc00] uppercase tracking-wider hidden sm:inline">
                {currentReel.title}
              </span>
              <button
                onClick={() => {
                  onSelectPortfolioFilter('all');
                  onNavigate('portafolio');
                }}
                className="p-1 hover:text-[#ffcc00] transition-colors"
                title="Ver casos completos"
              >
                <Maximize2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 04. EXECUTIVE SUMMARY BENTO (THE THREE PILLARS) */}
      <section className="w-full bg-[#eee9e0] py-14 px-6 sm:px-10 lg:px-16 brutal-border-t">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#e63b2e] font-bold uppercase tracking-widest block mb-1">
                {isEs ? 'ARQUITECTURA DE VALOR' : 'VALUE ARCHITECTURE'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#1a1a1a]">
                {isEs ? 'Los 3 Pilares de Grupo Lares' : 'The 3 Pillars of Grupo Lares'}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('nosotros')}
              className="font-mono text-xs font-bold uppercase text-[#1a1a1a] hover:text-[#e63b2e] flex items-center gap-1 self-start"
            >
              <span>{isEs ? 'Conocer metodología a fondo' : 'Learn full methodology'}</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-[#f5f0e8] p-6 brutal-border brutal-shadow flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-neutral-600">
                  <span className="font-bold">01. WIÑAYPAQ</span>
                  <span className="text-[#e63b2e] font-bold">LIVE STAGE</span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-[#1a1a1a]">
                  {isEs ? 'Producción Escénica & Aforos Masivos' : 'Scenic Production & Mass Crowds'}
                </h3>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {isEs
                    ? 'Dirección artística, cálculo estructural de escenarios, sistemas acústicos line-array y planes de contingencia INDECI para galas de Estado y festivales de más de 15,000 personas.'
                    : 'Artistic direction, structural stage calculation, line-array acoustic systems, and civil defense contingency plans for state galas and festivals exceeding 15,000 attendees.'}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-300 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-neutral-800">
                  {isEs ? '42 PRODUCCIONES' : '42 PRODUCTIONS'}
                </span>
                <button
                  onClick={() => onNavigate('capacidades')}
                  className="text-xs font-bold uppercase text-[#1a1a1a] hover:text-[#e63b2e] flex items-center gap-1"
                >
                  <span>{isEs ? 'Explorar' : 'Explore'}</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f5f0e8] p-6 brutal-border brutal-shadow flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-neutral-600">
                  <span className="font-bold">02. CINEMA PRO</span>
                  <span className="text-[#0055ff] font-bold">FILM & 8K</span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-[#1a1a1a]">
                  {isEs ? 'Cinematografía & Piezas Documentales' : 'Cinematography & Documentary Films'}
                </h3>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {isEs
                    ? 'Del brief al DCP. Filmación con cámaras de cine digital (RED / ARRI), óptica anamórfica, drones certificados y narrativa trilingüe para multinacionales, ministerios y ONGs globales.'
                    : 'From brief to DCP. Filming with digital cinema cameras (RED / ARRI), anamorphic lenses, certified drones, and trilingual narrative for multinationals, ministries, and global NGOs.'}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-300 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-neutral-800">
                  {isEs ? '68 DOCUMENTALES & SPOTS' : '68 DOCS & SPOTS'}
                </span>
                <button
                  onClick={() => onNavigate('capacidades')}
                  className="text-xs font-bold uppercase text-[#1a1a1a] hover:text-[#0055ff] flex items-center gap-1"
                >
                  <span>{isEs ? 'Explorar' : 'Explore'}</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#1a1a1a] text-white p-6 brutal-border brutal-shadow flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-[#ffcc00]">
                  <span className="font-bold">03. COMPLIANCE</span>
                  <span>ZERO FAIL</span>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white">
                  {isEs ? 'Seguridad Civil, NDAs & SLA <24H' : 'Civil Safety, NDAs & SLA <24H'}
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {isEs
                    ? 'Pólizas de seguro de responsabilidad civil hasta $1M USD, acuerdos de confidencialidad estrictos para obras estratégicas y respuesta técnica en menos de 24 horas.'
                    : 'Civil liability insurance up to $1M USD, strict non-disclosure agreements for strategic infrastructure, and formal technical response within 24 hours.'}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-700 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold text-[#ffcc00]">
                  {isEs ? '100% CUMPLIMIENTO' : '100% SLA COMPLIANCE'}
                </span>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="text-xs font-bold uppercase text-[#ffcc00] hover:text-white flex items-center gap-1"
                >
                  <span>{isEs ? 'Iniciar Brief' : 'Start Brief'}</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="bg-[#f5f0e8] p-5 brutal-border">
              <span className="font-mono text-xs text-neutral-500 block uppercase">
                {isEs ? 'Acontecimientos' : 'Produced Events'}
              </span>
              <span className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] block mt-1">120+</span>
              <span className="text-[10px] font-mono text-neutral-600 block mt-1">
                {isEs ? 'CONCIERTOS & GALAS' : 'CONCERTS & GALAS'}
              </span>
            </div>

            <div className="bg-[#f5f0e8] p-5 brutal-border">
              <span className="font-mono text-xs text-neutral-500 block uppercase">
                {isEs ? 'Horas de Rodaje 4K' : '4K Footage Hours'}
              </span>
              <span className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] block mt-1">350+</span>
              <span className="text-[10px] font-mono text-neutral-600 block mt-1">
                {isEs ? 'MASTER PRORES 4444' : 'PRORES 4444 MASTERS'}
              </span>
            </div>

            <div className="bg-[#f5f0e8] p-5 brutal-border">
              <span className="font-mono text-xs text-neutral-500 block uppercase">
                {isEs ? 'Retrasos en Entregas' : 'Delivery Delays'}
              </span>
              <span className="text-3xl sm:text-4xl font-bold text-[#e63b2e] block mt-1">00</span>
              <span className="text-[10px] font-mono text-neutral-600 block mt-1">
                {isEs ? 'CERO INCIDENTES' : 'ZERO INCIDENTS'}
              </span>
            </div>

            <div className="bg-[#f5f0e8] p-5 brutal-border">
              <span className="font-mono text-xs text-neutral-500 block uppercase">
                {isEs ? 'Respuesta a Brief' : 'RFP Response'}
              </span>
              <span className="text-3xl sm:text-4xl font-bold text-[#0055ff] block mt-1">&lt; 24h</span>
              <span className="text-[10px] font-mono text-neutral-600 block mt-1">
                {isEs ? 'PRESUPUESTO PRELIMINAR' : 'PRELIMINARY QUOTE'}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
