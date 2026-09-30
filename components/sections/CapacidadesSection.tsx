'use client';

import React, { useState } from 'react';
import { SectionKey } from '../Sidebar';
import { TECHNICAL_VAULT } from '@/lib/data';
import {
  Film,
  Sparkles,
  Calendar,
  Layers,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Cpu,
  Tv,
  Music,
  Sliders,
  Radio,
  Building2,
  Globe,
  Landmark,
  HeartHandshake,
  Shield,
  Zap,
} from 'lucide-react';

interface CapacidadesSectionProps {
  onNavigate: (section: SectionKey) => void;
  onPreFillBrief: (data: { category: string; description: string; tier: string }) => void;
  lang: 'es' | 'en';
}

export function CapacidadesSection({ onNavigate, onPreFillBrief, lang }: CapacidadesSectionProps) {
  const isEs = lang === 'es';
  const [activeTab, setActiveTab] = useState<'all' | 'cinemapro' | 'winaypaq' | 'hibrido'>('all');
  const [vaultIdx, setVaultIdx] = useState(0);

  // Mini-FAQ expand states
  const [openFaq, setOpenFaq] = useState<string | null>('q1-cine');

  // Interactive Scope Simulator State for NGOs & Enterprises
  const [simOrgType, setSimOrgType] = useState<'ngo' | 'corp' | 'gov' | 'cultural'>('corp');
  const [simReqType, setSimReqType] = useState<'film' | 'stage' | 'hybrid'>('hybrid');
  const [simScale, setSimScale] = useState<'medium' | 'large' | 'massive'>('large');

  // Computed recommendation from simulator
  const getRecommendation = () => {
    if (simReqType === 'film') {
      return {
        title: isEs ? 'Pack Cinematográfico Cinema Pro' : 'Cinema Pro Film Package',
        camera: 'RED V-Raptor 8K + Dron DJI Inspire 3 RAW',
        sound: 'Direct Sound 32-bit float + Microfonía Sennheiser MKH',
        crew: '12 a 16 profesionales de rodaje',
        time: '3 a 5 semanas (Pre, Rodaje y DaVinci Resolve Post)',
        tier: 'Tier 02 ($5k - $15k)',
        tierKey: 'tier2',
        summary: isEs
          ? 'Ideal para spots de marca, memoria anual documental o campaña audiovisual internacional.'
          : 'Ideal for brand commercials, annual documentary reports, or global campaigns.',
      };
    } else if (simReqType === 'stage') {
      return {
        title: isEs ? 'Operación Escénica Wiñaypaq Live' : 'Wiñaypaq Live Scenic Operation',
        camera: 'Registro Multicámara 4K ISO',
        sound: 'L-Acoustics K2 / Kara + Consola DiGiCo SD12',
        crew: '24 a 38 especialistas de escenario y regiduría',
        time: '4 a 8 semanas de preproducción y montaje',
        tier: 'Tier 03 ($15k - $40k)',
        tierKey: 'tier3',
        summary: isEs
          ? 'Para festivales masivos, galas de Estado o eventos de alto aforo con planes INDECI.'
          : 'For mass festivals, state galas, or high-capacity events with complete civil defense clearance.',
      };
    } else {
      return {
        title: isEs ? 'Solución Integral Híbrida (Lares Dual Engine)' : 'Hybrid Integrated Solution',
        camera: 'RED 8K + ARRI Cine + Dron + Switcher Multicámara en Vivo',
        sound: 'FOH L-Acoustics + Grabación Multipista 96kHz + Mics DPA',
        crew: '45 especialistas combinados (Cine + Escena + Protocolo)',
        time: '6 a 10 semanas de producción end-to-end',
        tier: 'Tier 04 (> $40,000)',
        tierKey: 'tier4',
        summary: isEs
          ? 'El estándar máximo para organismos internacionales y multinacionales: escenografía diseñada para cámara y streaming sin fisuras.'
          : 'Maximum standard for international agencies and multinationals: staging designed for cinema and flawless live broadcasting.',
      };
    }
  };

  const rec = getRecommendation();

  return (
    <div className="w-full flex flex-col">
      {/* Technical Matrix Marquee */}
      <div className="w-full bg-[#1a1a1a] text-white py-2.5 px-6 lg:px-12 flex items-center justify-between overflow-hidden shadow-sm">
        <div className="flex items-center gap-4 sm:gap-6 font-mono text-[11px] uppercase tracking-wider">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ffcc00] animate-pulse"></span>
            SISTEMA DE PRODUCCIÓN DUAL V.25
          </span>
          <span className="text-neutral-500 hidden sm:inline">/</span>
          <span className="hidden md:inline">DEP 01: CINEMA PRO [FILM]</span>
          <span className="hidden md:inline text-neutral-500">/</span>
          <span className="hidden md:inline">DEP 02: WIÑAYPAQ [STAGE & ART]</span>
        </div>
        <div className="flex items-center gap-4 font-mono text-[11px]">
          <span className="text-[#ffcc00] font-bold">SPECS: 8K RAW • DPA • DMX RIG</span>
          <span className="text-neutral-400 hidden sm:inline">COBERTURA: PE / LATAM</span>
        </div>
      </div>

      {/* Hero Dossier Header */}
      <section className="p-6 sm:p-10 lg:p-16 bg-[#f5f0e8] flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-[#e8e3da] px-3 py-1.5 brutal-border mb-6">
              <span className="w-2 h-2 bg-[#e63b2e]"></span>
              <span className="font-bold text-xs uppercase tracking-widest text-[#1a1a1a]">
                DOCUMENTO TÉCNICO • REF. 03-CAP
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-none text-[#1a1a1a] mb-6">
              CAPACIDADES <br />
              <span className="text-neutral-500">& SERVICIOS</span>
            </h1>

            <p className="text-base lg:text-xl text-neutral-800 leading-relaxed max-w-3xl">
              {isEs ? (
                <>
                  En Grupo Lares ponemos a trabajar la creatividad con método. Operamos en dos
                  líneas complementarias:{' '}
                  <strong className="font-bold text-[#1a1a1a] underline decoration-[#ffcc00] decoration-4">
                    Grupo Lares Wiñaypaq
                  </strong>{' '}
                  para producción artística y{' '}
                  <strong className="font-bold text-[#1a1a1a] underline decoration-[#ffcc00] decoration-4">
                    Grupo Lares Cinema Pro
                  </strong>{' '}
                  para producción audiovisual. Esta doble labor nos permite entender el proyecto
                  desde múltiples dimensiones, enriqueciendo el resultado sin sobrecostos.
                </>
              ) : (
                <>
                  At Grupo Lares, we direct creativity through method. We operate through two
                  complementary divisions:{' '}
                  <strong className="font-bold text-[#1a1a1a] underline decoration-[#ffcc00] decoration-4">
                    Grupo Lares Wiñaypaq
                  </strong>{' '}
                  for artistic production and{' '}
                  <strong className="font-bold text-[#1a1a1a] underline decoration-[#ffcc00] decoration-4">
                    Grupo Lares Cinema Pro
                  </strong>{' '}
                  for audiovisual production. This dual mastery allows us to grasp any project
                  multidimensionally.
                </>
              )}
            </p>
          </div>

          {/* Quick Division Jump Card */}
          <div className="bg-[#e8e3da] p-6 w-full lg:w-80 flex flex-col gap-4 brutal-border brutal-shadow">
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 font-bold">
              {isEs ? 'SELECCIÓN RÁPIDA DE UNIDAD' : 'QUICK UNIT SELECTION'}
            </span>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="#cinema-pro"
                className="bg-[#1a1a1a] text-white py-3 text-center font-bold text-xs uppercase tracking-wider brutal-border hover:bg-[#ffcc00] hover:text-[#1a1a1a] transition-all"
              >
                CINEMA PRO
              </a>
              <a
                href="#winaypaq"
                className="bg-white text-[#1a1a1a] py-3 text-center font-bold text-xs uppercase tracking-wider brutal-border hover:bg-[#e63b2e] hover:text-white transition-all"
              >
                WIÑAYPAQ
              </a>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-600 pt-1">
              <span>SLA ONGs & CORPS</span>
              <span className="text-[#0055ff] font-bold">ACTIVO 24H</span>
            </div>
          </div>
        </div>

        {/* Key Metrics / System Architecture Band */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#eee9e0] p-5 brutal-border flex flex-col justify-between h-32">
            <span className="font-mono text-xs uppercase text-neutral-600">FLUIDEZ OPERATIVA</span>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl lg:text-4xl font-bold text-[#1a1a1a]">100%</span>
              <span className="font-mono text-[10px] text-neutral-600">END-TO-END</span>
            </div>
            <div className="w-full bg-neutral-300 h-1.5">
              <div className="bg-[#1a1a1a] h-full w-full"></div>
            </div>
          </div>

          <div className="bg-[#eee9e0] p-5 brutal-border flex flex-col justify-between h-32">
            <span className="font-mono text-xs uppercase text-neutral-600">PIEZAS ENTREGADAS</span>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl lg:text-4xl font-bold text-[#1a1a1a]">+240</span>
              <span className="font-mono text-[10px] text-[#e63b2e] font-bold">BROADCAST</span>
            </div>
            <div className="w-full bg-neutral-300 h-1.5">
              <div className="bg-[#e63b2e] h-full w-4/5"></div>
            </div>
          </div>

          <div className="bg-[#eee9e0] p-5 brutal-border flex flex-col justify-between h-32">
            <span className="font-mono text-xs uppercase text-neutral-600">SAFETY SCORE</span>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl lg:text-4xl font-bold text-[#1a1a1a]">ZERO</span>
              <span className="font-mono text-[10px] text-[#0055ff] font-bold">INCIDENTES</span>
            </div>
            <div className="w-full bg-neutral-300 h-1.5">
              <div className="bg-[#0055ff] h-full w-full"></div>
            </div>
          </div>

          <div className="bg-[#eee9e0] p-5 brutal-border flex flex-col justify-between h-32">
            <span className="font-mono text-xs uppercase text-neutral-600">RESPUESTA A BRIEF</span>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl lg:text-4xl font-bold text-[#1a1a1a]">24h</span>
              <span className="font-mono text-[10px] text-neutral-600 font-bold">COTIZACIÓN</span>
            </div>
            <div className="w-full bg-neutral-300 h-1.5">
              <div className="bg-[#ffcc00] h-full w-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCOVERY TOOL: SCOPE & EQUIPMENT CALCULATOR FOR ONGs & ENTERPRISES */}
      <section className="bg-[#eee9e0] p-6 sm:p-10 lg:p-16 brutal-border-t">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#0055ff] font-bold uppercase tracking-widest block mb-1">
                {isEs ? 'HERRAMIENTA EJECUTIVA INTERACTIVA' : 'INTERACTIVE EXECUTIVE TOOL'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#1a1a1a]">
                {isEs
                  ? 'Simulador de Requerimiento Técnico'
                  : 'Technical Requirement Simulator'}
              </h2>
            </div>
            <span className="font-mono text-xs text-neutral-600">
              {isEs ? 'Configuración en tiempo real' : 'Real-time configuration'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Selectors (7 Cols) */}
            <div className="lg:col-span-7 bg-[#f5f0e8] p-6 lg:p-8 brutal-border brutal-shadow flex flex-col gap-6">
              {/* Step 1: Organization Type */}
              <div>
                <label className="font-bold text-xs uppercase tracking-wider text-[#1a1a1a] block mb-3 font-mono">
                  01. {isEs ? 'Tipo de Organización / Cliente' : 'Organization / Client Type'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    onClick={() => setSimOrgType('corp')}
                    className={`p-3 text-left font-mono text-xs font-bold uppercase brutal-border transition-colors ${
                      simOrgType === 'corp'
                        ? 'bg-[#1a1a1a] text-[#ffcc00]'
                        : 'bg-white text-[#1a1a1a] hover:bg-[#e8e3da]'
                    }`}
                  >
                    <Building2 size={16} className="mb-2" />
                    <span>Corporativo</span>
                  </button>
                  <button
                    onClick={() => setSimOrgType('ngo')}
                    className={`p-3 text-left font-mono text-xs font-bold uppercase brutal-border transition-colors ${
                      simOrgType === 'ngo'
                        ? 'bg-[#1a1a1a] text-[#ffcc00]'
                        : 'bg-white text-[#1a1a1a] hover:bg-[#e8e3da]'
                    }`}
                  >
                    <HeartHandshake size={16} className="mb-2" />
                    <span>ONG / ODS</span>
                  </button>
                  <button
                    onClick={() => setSimOrgType('gov')}
                    className={`p-3 text-left font-mono text-xs font-bold uppercase brutal-border transition-colors ${
                      simOrgType === 'gov'
                        ? 'bg-[#1a1a1a] text-[#ffcc00]'
                        : 'bg-white text-[#1a1a1a] hover:bg-[#e8e3da]'
                    }`}
                  >
                    <Landmark size={16} className="mb-2" />
                    <span>Gobierno</span>
                  </button>
                  <button
                    onClick={() => setSimOrgType('cultural')}
                    className={`p-3 text-left font-mono text-xs font-bold uppercase brutal-border transition-colors ${
                      simOrgType === 'cultural'
                        ? 'bg-[#1a1a1a] text-[#ffcc00]'
                        : 'bg-white text-[#1a1a1a] hover:bg-[#e8e3da]'
                    }`}
                  >
                    <Globe size={16} className="mb-2" />
                    <span>Embajada</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Need Type */}
              <div>
                <label className="font-bold text-xs uppercase tracking-wider text-[#1a1a1a] block mb-3 font-mono">
                  02. {isEs ? 'Línea de Despliegue Principal' : 'Primary Deployment Line'}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    onClick={() => setSimReqType('film')}
                    className={`p-3 text-left font-bold text-xs uppercase brutal-border transition-colors ${
                      simReqType === 'film'
                        ? 'bg-[#0055ff] text-white'
                        : 'bg-white text-[#1a1a1a] hover:bg-[#e8e3da]'
                    }`}
                  >
                    <Film size={16} className="mb-1" />
                    <span className="block">Cinema Pro</span>
                    <span className="text-[10px] font-mono opacity-80 font-normal">Film & 8K Docu</span>
                  </button>
                  <button
                    onClick={() => setSimReqType('stage')}
                    className={`p-3 text-left font-bold text-xs uppercase brutal-border transition-colors ${
                      simReqType === 'stage'
                        ? 'bg-[#e63b2e] text-white'
                        : 'bg-white text-[#1a1a1a] hover:bg-[#e8e3da]'
                    }`}
                  >
                    <Radio size={16} className="mb-1" />
                    <span className="block">Wiñaypaq Live</span>
                    <span className="text-[10px] font-mono opacity-80 font-normal">Escena & Aforos</span>
                  </button>
                  <button
                    onClick={() => setSimReqType('hybrid')}
                    className={`p-3 text-left font-bold text-xs uppercase brutal-border transition-colors ${
                      simReqType === 'hybrid'
                        ? 'bg-[#ffcc00] text-[#1a1a1a]'
                        : 'bg-white text-[#1a1a1a] hover:bg-[#e8e3da]'
                    }`}
                  >
                    <Zap size={16} className="mb-1" />
                    <span className="block">Dual Engine</span>
                    <span className="text-[10px] font-mono opacity-80 font-normal">Híbrido Integral</span>
                  </button>
                </div>
              </div>

              {/* Step 3: Scale */}
              <div>
                <label className="font-bold text-xs uppercase tracking-wider text-[#1a1a1a] block mb-3 font-mono">
                  03. {isEs ? 'Escala & Alcance del Proyecto' : 'Scale & Scope'}
                </label>
                <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                  <button
                    onClick={() => setSimScale('medium')}
                    className={`p-2.5 text-center font-bold uppercase brutal-border ${
                      simScale === 'medium'
                        ? 'bg-[#1a1a1a] text-white'
                        : 'bg-white text-[#1a1a1a] hover:bg-[#e8e3da]'
                    }`}
                  >
                    Mediano (&lt;500 pax / Spot)
                  </button>
                  <button
                    onClick={() => setSimScale('large')}
                    className={`p-2.5 text-center font-bold uppercase brutal-border ${
                      simScale === 'large'
                        ? 'bg-[#1a1a1a] text-white'
                        : 'bg-white text-[#1a1a1a] hover:bg-[#e8e3da]'
                    }`}
                  >
                    Mayor (Gala / Campaña)
                  </button>
                  <button
                    onClick={() => setSimScale('massive')}
                    className={`p-2.5 text-center font-bold uppercase brutal-border ${
                      simScale === 'massive'
                        ? 'bg-[#1a1a1a] text-white'
                        : 'bg-white text-[#1a1a1a] hover:bg-[#e8e3da]'
                    }`}
                  >
                    Masivo (&gt;2,000 pax / Master)
                  </button>
                </div>
              </div>
            </div>

            {/* Generated Specification Card (5 Cols) */}
            <div className="lg:col-span-5 bg-[#1a1a1a] text-white p-6 lg:p-8 brutal-border brutal-shadow flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center justify-between border-b border-neutral-700 pb-3 mb-4">
                  <span className="font-mono text-xs text-[#ffcc00] font-bold uppercase">
                    ESTRUCTURA TÉCNICA SUGERIDA
                  </span>
                  <span className="text-[10px] font-mono bg-white text-[#1a1a1a] px-2 py-0.5 font-bold">
                    RECOMENDACIÓN
                  </span>
                </div>

                <h3 className="text-2xl font-bold uppercase text-white mb-2">{rec.title}</h3>
                <p className="text-xs text-neutral-300 mb-6 leading-relaxed">{rec.summary}</p>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-neutral-900 border border-neutral-700">
                    <span className="text-neutral-400 block text-[10px] uppercase">
                      EQUIPAMIENTO ÓPTICO / CÁMARA:
                    </span>
                    <span className="text-[#ffcc00] font-bold">{rec.camera}</span>
                  </div>

                  <div className="p-3 bg-neutral-900 border border-neutral-700">
                    <span className="text-neutral-400 block text-[10px] uppercase">
                      SISTEMA DE AUDIO & MICROFONÍA:
                    </span>
                    <span className="text-white font-bold">{rec.sound}</span>
                  </div>

                  <div className="p-3 bg-neutral-900 border border-neutral-700 flex justify-between">
                    <div>
                      <span className="text-neutral-400 block text-[10px] uppercase">CREW TÉCNICO:</span>
                      <span className="text-white font-bold">{rec.crew}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-neutral-400 block text-[10px] uppercase">TIEMPO ESTIMADO:</span>
                      <span className="text-white font-bold">{rec.time}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#ffcc00] text-[#1a1a1a] font-bold flex items-center justify-between">
                    <span className="uppercase text-[11px]">RANGO PRESUPUESTAL SUGERIDO:</span>
                    <span className="text-sm">{rec.tier}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  onPreFillBrief({
                    category: simReqType === 'film' ? 'audiovisual' : simReqType === 'stage' ? 'evento' : 'hibrido',
                    description: `Requerimiento configurado en Simulador: ${rec.title}. Escala: ${simScale}. Equipamiento sugerido: ${rec.camera} / ${rec.sound}.`,
                    tier: rec.tierKey,
                  });
                  onNavigate('contacto');
                }}
                className="w-full py-4 bg-[#ffcc00] text-[#1a1a1a] font-bold text-xs uppercase tracking-widest brutal-border hover:bg-white transition-all flex items-center justify-center gap-2"
              >
                <span>{isEs ? 'Transferir a Brief y Cotizar' : 'Apply to Brief & Request Quote'}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DIVISION 01: CINEMA PRO */}
      <section className="bg-[#1a1a1a] text-white p-6 sm:p-10 lg:p-16 brutal-border-t" id="cinema-pro">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-[#ffcc00] text-[#1a1a1a] font-mono text-xs font-bold uppercase">
                DIVISIÓN 01
              </span>
              <span className="text-neutral-400 font-mono text-xs">AUDIOVISUAL LAB</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold uppercase tracking-tighter text-white">
              CINEMA PRO
            </h2>
            <p className="text-lg sm:text-xl text-[#ffcc00] font-bold uppercase tracking-wide">
              {isEs
                ? 'Producción audiovisual de principio a fin'
                : 'Audiovisual production from concept to delivery'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('contacto')}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ffcc00] text-[#1a1a1a] font-bold text-sm uppercase tracking-widest hover:bg-white transition-all brutal-border brutal-shadow self-start lg:self-auto"
          >
            <span>{isEs ? 'Cotiza tu producción' : 'Quote Production'}</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* 6 Scopes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          <div className="bg-[#f5f0e8] text-[#1a1a1a] p-6 brutal-border brutal-shadow flex flex-col justify-between hover:bg-[#ffcc00] transition-colors group">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-neutral-600 mb-2">
                <span className="font-bold">01. B2B / CORP</span>
                <Building2 size={16} />
              </div>
              <h4 className="font-bold text-lg uppercase mb-2">Videos Corporativos e Institucionales</h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Identidad de marca, reportes anuales con narrativa documental, inducciones y cultura corporativa de alto impacto visual.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-300 flex justify-between text-[10px] font-mono">
              <span>FORMATO: 16:9 / 4K</span>
              <span className="font-bold">DOC • NARRATIVO</span>
            </div>
          </div>

          <div className="bg-[#f5f0e8] text-[#1a1a1a] p-6 brutal-border brutal-shadow flex flex-col justify-between hover:bg-[#ffcc00] transition-colors group">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-neutral-600 mb-2">
                <span className="font-bold">02. SOCIAL PERFORMANCE</span>
                <Tv size={16} />
              </div>
              <h4 className="font-bold text-lg uppercase mb-2">Spots y Contenido para Redes</h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Optimizado nativamente para Meta, TikTok y YouTube. Hooks de retención en primeros 3 segundos y ratios 9:16 / 1:1.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-300 flex justify-between text-[10px] font-mono">
              <span>RATIOS: 9:16 / 1:1</span>
              <span className="font-bold">HIGH CONVERSION</span>
            </div>
          </div>

          <div className="bg-[#f5f0e8] text-[#1a1a1a] p-6 brutal-border brutal-shadow flex flex-col justify-between hover:bg-[#ffcc00] transition-colors group">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-neutral-600 mb-2">
                <span className="font-bold">03. MUSIC LAB</span>
                <Music size={16} />
              </div>
              <h4 className="font-bold text-lg uppercase mb-2">Videoclips Musicales & Sesiones</h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Exploración estética radical, dirección de fotografía estilizada, sincronización de ritmo y puesta visual conceptual.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-300 flex justify-between text-[10px] font-mono">
              <span>CINEMA SCOPE 2.39</span>
              <span className="font-bold">COLOR LAB</span>
            </div>
          </div>

          <div className="bg-[#f5f0e8] text-[#1a1a1a] p-6 brutal-border brutal-shadow flex flex-col justify-between hover:bg-[#ffcc00] transition-colors group">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-neutral-600 mb-2">
                <span className="font-bold">04. VFX & 3D</span>
                <Cpu size={16} />
              </div>
              <h4 className="font-bold text-lg uppercase mb-2">Animación / Motion Graphics</h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Animación 2D, modelado 3D, títulos tipográficos cinemáticos e infografías explicativas de procesos complejos.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-300 flex justify-between text-[10px] font-mono">
              <span>AFTER EFFECTS / CINEMA 4D</span>
              <span className="font-bold">INFOGRAFÍAS 3D</span>
            </div>
          </div>

          <div className="bg-[#f5f0e8] text-[#1a1a1a] p-6 brutal-border brutal-shadow flex flex-col justify-between hover:bg-[#ffcc00] transition-colors group">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-neutral-600 mb-2">
                <span className="font-bold">05. BROADCAST LIVE</span>
                <Radio size={16} />
              </div>
              <h4 className="font-bold text-lg uppercase mb-2">Cobertura y Streaming Multicámara</h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Transmisión sin latencia para conferencias masivas y festivales. Switcher dedicado, repeticiones en vivo y grabación ISO.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-300 flex justify-between text-[10px] font-mono">
              <span>SDI MULTI-CAM</span>
              <span className="font-bold">ZERO PACKET LOSS</span>
            </div>
          </div>

          <div className="bg-[#f5f0e8] text-[#1a1a1a] p-6 brutal-border brutal-shadow flex flex-col justify-between hover:bg-[#ffcc00] transition-colors group">
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-neutral-600 mb-2">
                <span className="font-bold">06. POST & COLOR</span>
                <Sliders size={16} />
              </div>
              <h4 className="font-bold text-lg uppercase mb-2">Postproducción, Color & Audio 5.1</h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Color grading profesional en DaVinci Resolve Studio calibrado, diseño sonoro envolvente, foley y masterización para salas.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-300 flex justify-between text-[10px] font-mono">
              <span>DAVINCI + PROTOOLS</span>
              <span className="font-bold">LUFS BROADCAST</span>
            </div>
          </div>
        </div>

        {/* Mini FAQ Cinema Pro */}
        <div className="bg-[#242424] p-6 sm:p-8 brutal-border mt-8">
          <div className="flex items-center justify-between border-b border-neutral-700 pb-3 mb-4">
            <span className="font-mono text-xs text-[#ffcc00] font-bold uppercase flex items-center gap-2">
              <HelpCircle size={15} />
              MINI-FAQ // CINEMA PRO
            </span>
            <span className="text-[10px] font-mono text-neutral-400">CONDICIONES GENERALES</span>
          </div>

          <div className="space-y-3">
            <div className="bg-[#1a1a1a] p-4 brutal-border">
              <button
                onClick={() => setOpenFaq(openFaq === 'q1-cine' ? null : 'q1-cine')}
                className="w-full flex items-center justify-between text-left font-bold text-sm text-white uppercase"
              >
                <span>Q1: ¿Cuánto tarda un video desde el brief?</span>
                {openFaq === 'q1-cine' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openFaq === 'q1-cine' && (
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  Piezas sociales y contenido rápido: <strong>1 a 2 semanas</strong>. Spots
                  publicitarios, comerciales y videos corporativos complejos: <strong>3 a 6 semanas</strong> según
                  nivel de render, locaciones y animación 3D.
                </p>
              )}
            </div>

            <div className="bg-[#1a1a1a] p-4 brutal-border">
              <button
                onClick={() => setOpenFaq(openFaq === 'q2-cine' ? null : 'q2-cine')}
                className="w-full flex items-center justify-between text-left font-bold text-sm text-white uppercase"
              >
                <span>Q2: ¿Qué incluye el presupuesto cerrado?</span>
                {openFaq === 'q2-cine' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {openFaq === 'q2-cine' && (
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  Servicio integral: Etapa de Preproducción (guión, escaleta y scouting técnico),
                  Rodaje con equipo calificado y asegurado con SCTR, Postproducción completa y{' '}
                  <strong>2 rondas de cambios</strong> incluidas en el alcance base.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* DIVISION 02: WIÑAYPAQ */}
      <section className="bg-[#f2ede5] text-[#1a1a1a] p-6 sm:p-10 lg:p-16 brutal-border-t" id="winaypaq">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between pb-10 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-[#e63b2e] text-white font-mono text-xs font-bold uppercase">
                DIVISIÓN 02
              </span>
              <span className="text-neutral-600 font-mono text-xs">STAGE & ART LAB</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold uppercase tracking-tighter text-[#1a1a1a]">
              WIÑAYPAQ
            </h2>
            <p className="text-lg sm:text-xl text-[#e63b2e] font-bold uppercase tracking-wide">
              {isEs
                ? 'Producción artística y operación de eventos'
                : 'Artistic production & live event operations'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('contacto')}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#e63b2e] transition-all brutal-border brutal-shadow self-start lg:self-auto"
          >
            <span>{isEs ? 'Programemos tu evento' : 'Schedule Event'}</span>
            <Calendar size={18} />
          </button>
        </div>

        {/* Operating Model Box */}
        <div className="bg-[#1a1a1a] text-white p-6 sm:p-8 brutal-border brutal-shadow mb-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-[#ffcc00] uppercase font-bold tracking-widest block mb-1">
                MODELO OPERATIVO WIÑAYPAQ • METODOLOGÍA HÍBRIDA
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-2">
                Núcleo de producción propio y red curada de especialistas pre-validados.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Eliminamos la improvisación en vivo. Combinamos un núcleo directivo permanente con un
                pool verificado de ingenieros de sala (FOH/Monitores), iluminadores certificados en
                GrandMA, riggers y coordinadores de hospitality con protocolos de emergencia auditados.
              </p>
            </div>

            <div className="bg-[#e8e3da] text-[#1a1a1a] p-4 w-full lg:w-72 brutal-border font-mono text-xs">
              <span className="font-bold uppercase text-[10px] text-neutral-600 block mb-2">
                RIGOR TÉCNICO COMPROBADO
              </span>
              <ul className="space-y-1.5 text-[11px]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#e63b2e]" />
                  <span>Riders técnicos auditados</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#e63b2e]" />
                  <span>Planes INDECI y pólizas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={13} className="text-[#e63b2e]" />
                  <span>Run-down al milímetro</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Scopes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 brutal-border brutal-shadow flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#e63b2e] font-bold block mb-2">
                01. ART & CONCEPT
              </span>
              <h4 className="font-bold text-base uppercase text-[#1a1a1a] mb-2">
                Dirección de Arte y Concepto
              </h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Traducción de identidad visual en ambientes físicos tangibles: texturas, paleta lumínica, vestuario y ambientación inmersiva.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-300 text-[10px] font-mono text-neutral-600 flex justify-between">
              <span>MOODBOARDS 3D</span>
              <span className="font-bold">SPATIAL BRANDING</span>
            </div>
          </div>

          <div className="bg-white p-6 brutal-border brutal-shadow flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#e63b2e] font-bold block mb-2">
                02. SCENIC & LIGHT
              </span>
              <h4 className="font-bold text-base uppercase text-[#1a1a1a] mb-2">
                Escenografía & DMX
              </h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Cálculo de cargas de truss, tarimas modulares certificadas, iluminación arquitectónica y escénica DMX con timecode seguro.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-300 text-[10px] font-mono text-neutral-600 flex justify-between">
              <span>SEGURIDAD ESTRUCTURAL</span>
              <span className="font-bold">DMX / LED BARS</span>
            </div>
          </div>

          <div className="bg-white p-6 brutal-border brutal-shadow flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#e63b2e] font-bold block mb-2">
                03. STAGE MANAGEMENT
              </span>
              <h4 className="font-bold text-base uppercase text-[#1a1a1a] mb-2">
                Gestión & Operación
              </h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Stage management militar: cronogramas reales, pruebas de sonido sincronizadas, coordinación técnica y cero sorpresas en vivo.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-300 text-[10px] font-mono text-neutral-600 flex justify-between">
              <span>RUN-DOWN EXACTO</span>
              <span className="font-bold">0% IMPROVISACIÓN</span>
            </div>
          </div>

          <div className="bg-white p-6 brutal-border brutal-shadow flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-[#e63b2e] font-bold block mb-2">
                04. TALENT & RIDERS
              </span>
              <h4 className="font-bold text-base uppercase text-[#1a1a1a] mb-2">
                Booking & Talento
              </h4>
              <p className="text-xs text-neutral-700 leading-relaxed">
                Gestión contractual con artistas nacionales e internacionales, cumplimiento de hospitality riders y backline auditado.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-neutral-300 text-[10px] font-mono text-neutral-600 flex justify-between">
              <span>BACKLINE AUDITADO</span>
              <span className="font-bold">HOSPITALITY CARE</span>
            </div>
          </div>
        </div>
      </section>

      {/* CROSS-DISCIPLINARY SYNERGY: THE HYBRID ADVANTAGE */}
      <section className="bg-[#f5f0e8] p-6 sm:p-10 lg:p-16 brutal-border-t">
        <div className="bg-[#e8e3da] p-8 lg:p-12 brutal-border brutal-shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-3 py-1 font-mono text-xs uppercase font-bold">
                VENTAJA INTEGRADA • LARES HYBRID ENGINE
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#1a1a1a]">
                {isEs
                  ? '¿Por qué contratar ambas líneas en un solo interlocutor?'
                  : 'Why contract both lines under a single producer?'}
              </h3>
              <p className="text-sm sm:text-base text-neutral-800 leading-relaxed max-w-2xl">
                {isEs
                  ? 'Cuando la producción artística de Wiñaypaq diseña el escenario pensando desde el primer minuto en los ángulos de cámara de Cinema Pro, el resultado visual se multiplica exponencialmente. Evitas disputas técnicas entre proveedores, unificas presupuestos y aseguras coherencia artística total.'
                  : 'When Wiñaypaq’s stage production designs the set factoring in Cinema Pro’s camera angles from day one, visual impact multiplies. You eliminate inter-agency friction, merge overhead budgets, and ensure 100% aesthetic coherence.'}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 font-mono text-xs">
              <div className="bg-white p-4 brutal-border flex items-start gap-3">
                <span className="w-6 h-6 bg-[#ffcc00] text-[#1a1a1a] font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <p className="font-bold uppercase text-[#1a1a1a]">1 Solo Punto de Contacto</p>
                  <p className="text-neutral-600 text-[11px]">Un único productor general responde por todo el proyecto.</p>
                </div>
              </div>

              <div className="bg-white p-4 brutal-border flex items-start gap-3">
                <span className="w-6 h-6 bg-[#ffcc00] text-[#1a1a1a] font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <p className="font-bold uppercase text-[#1a1a1a]">Optimización Presupuestal</p>
                  <p className="text-neutral-600 text-[11px]">Ahorro de hasta 35% en logística compartida y scouting conjunto.</p>
                </div>
              </div>

              <div className="bg-white p-4 brutal-border flex items-start gap-3">
                <span className="w-6 h-6 bg-[#ffcc00] text-[#1a1a1a] font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <p className="font-bold uppercase text-[#1a1a1a]">Masterclass Visual</p>
                  <p className="text-neutral-600 text-[11px]">Lo que vive el público en sala brilla idéntico en el master 4K.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL VAULT INSPECTOR */}
      <section className="bg-[#eee9e0] p-6 sm:p-10 lg:p-16 brutal-border-t">
        <div className="max-w-6xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#1a1a1a] font-bold uppercase tracking-widest block mb-1">
                EQUIPAMIENTO PROPIO & HOMOLOGADO
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1a1a1a]">
                El Inventario Técnico de Grupo Lares
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {TECHNICAL_VAULT.map((cat, idx) => (
                <button
                  key={cat.category}
                  onClick={() => setVaultIdx(idx)}
                  className={`px-3 py-1.5 font-mono text-xs font-bold uppercase brutal-border transition-colors ${
                    vaultIdx === idx
                      ? 'bg-[#1a1a1a] text-[#ffcc00]'
                      : 'bg-white text-[#1a1a1a] hover:bg-[#ffcc00]'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TECHNICAL_VAULT[vaultIdx].items.map((it) => (
              <div key={it.name} className="bg-white p-5 brutal-border brutal-shadow flex flex-col justify-between">
                <div>
                  <span className="font-bold text-sm uppercase text-[#1a1a1a] block mb-1">
                    {it.name}
                  </span>
                  <p className="text-xs text-neutral-700 leading-relaxed font-mono">{it.spec}</p>
                </div>
                <div className="mt-4 pt-2 border-t border-neutral-200 flex justify-between text-[10px] font-mono text-neutral-500">
                  <span>DISPONIBILIDAD INMEDIATA</span>
                  <span className="text-[#0055ff] font-bold">100% HOMOLOGADO</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
