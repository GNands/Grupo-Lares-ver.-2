'use client';

import React, { useState } from 'react';
import { SectionKey } from '../Sidebar';
import { PROJECTS_DATA, ProjectDossier } from '@/lib/data';
import {
  ArrowRight,
  Sparkles,
  X,
  CheckCircle2,
  FileText,
  Calendar,
  MapPin,
  Building,
  Layers,
  ShieldAlert,
  Send,
  SlidersHorizontal,
} from 'lucide-react';

interface PortafolioSectionProps {
  onNavigate: (section: SectionKey) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  onPreFillBrief: (data: { category: string; description: string; tier: string }) => void;
  lang: 'es' | 'en';
}

export function PortafolioSection({
  onNavigate,
  activeFilter,
  onFilterChange,
  onPreFillBrief,
  lang,
}: PortafolioSectionProps) {
  const isEs = lang === 'es';
  const [selectedProject, setSelectedProject] = useState<ProjectDossier | null>(null);

  const filterTabs = [
    { key: 'all', label: isEs ? 'Todos los proyectos [06]' : 'All Projects [06]' },
    { key: 'winaypaq', label: isEs ? 'Wiñaypaq (Eventos & Escena)' : 'Wiñaypaq (Stage & Live)' },
    { key: 'cinemapro', label: isEs ? 'Cinema Pro (Audiovisual & Film)' : 'Cinema Pro (Film & 8K)' },
    { key: 'institucional', label: isEs ? 'Institucional & Gobiernos' : 'Institutional & Gov' },
    { key: 'cultura', label: isEs ? 'Cultura & Música' : 'Culture & Arts' },
    { key: 'ongs', label: isEs ? 'Sostenibilidad & ONGs' : 'Sustainability & NGOs' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.categories.includes(activeFilter) || p.divisionTag === activeFilter;
  });

  return (
    <div className="w-full flex flex-col">
      {/* Top Technical Header Strip */}
      <section className="w-full bg-[#f5f0e8] px-6 sm:px-10 lg:px-16 py-10 brutal-border-b">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-[#e63b2e]"></span>
              <span className="font-bold text-xs uppercase tracking-widest text-[#1a1a1a]">
                {isEs ? 'DOSSIER DE PRODUCCIÓN • CASOS REALES' : 'PRODUCTION DOSSIER • VERIFIED CASES'}
              </span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 font-mono text-xs text-neutral-600">
              <span>REGISTRO: 2024–2025</span>
              <span className="hidden sm:inline">ESTADO: AUDITADO / COMPLETADO</span>
              <span className="px-2 py-0.5 bg-[#1a1a1a] text-white font-bold text-[10px] tracking-wider uppercase">
                ARCHIVE PRO
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tighter text-[#1a1a1a] leading-none">
                {isEs ? (
                  <>
                    Portafolio de <br className="hidden sm:inline" />
                    <span className="bg-[#ffcc00] px-3 text-[#1a1a1a]">Proyectos</span>
                  </>
                ) : (
                  <>
                    Project <br className="hidden sm:inline" />
                    <span className="bg-[#ffcc00] px-3 text-[#1a1a1a]">Portfolio</span>
                  </>
                )}
              </h1>
              <p className="text-base md:text-lg text-neutral-700 max-w-2xl leading-relaxed">
                {isEs
                  ? 'Mostramos cómo llevamos ideas a escena y a pantalla: concepto, ejecución y medición. Explora casos de Wiñaypaq y Cinema Pro para ver soluciones aplicadas en contextos reales. Si tu necesidad encaja con alguno, lo adaptamos; si no, diseñamos una ruta a tu medida.'
                  : 'Demonstrating how we materialize vision on stage and screen: concept, technical execution, and verified impact. Explore real cases from Wiñaypaq and Cinema Pro. If your objective matches a past case, we adapt it; if not, we design a custom roadmap.'}
              </p>
            </div>

            {/* Metrics Widget */}
            <div className="lg:col-span-4 flex flex-col justify-end bg-[#e8e3da] p-6 brutal-border brutal-shadow">
              <div className="flex items-center justify-between mb-3 font-mono text-xs text-neutral-600">
                <span>RESUMEN MÉTRICAS</span>
                <span className="text-[#e63b2e] font-bold">+150K ASISTENTES</span>
              </div>
              <div className="w-full bg-neutral-300 h-2 mb-4 overflow-hidden">
                <div className="bg-[#1a1a1a] h-full w-[88%]"></div>
              </div>
              <div className="flex justify-between items-center text-xs font-bold uppercase text-[#1a1a1a]">
                <span>Escénicas: 42</span>
                <span>Audiovisuales: 68</span>
              </div>
            </div>
          </div>

          {/* Filter Tabs System */}
          <div className="pt-4">
            <div className="flex flex-wrap items-center gap-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => onFilterChange(tab.key)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider brutal-border transition-all ${
                    activeFilter === tab.key
                      ? 'bg-[#1a1a1a] text-white shadow-[2px_2px_0px_0px_#ffcc00]'
                      : 'bg-[#eee9e0] text-[#1a1a1a] hover:bg-[#e8e3da]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="w-full px-6 sm:px-10 lg:px-16 py-12 bg-[#eee9e0] flex-1">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col bg-[#f5f0e8] brutal-border brutal-shadow hover:shadow-[6px_6px_0px_0px_#1a1a1a] transition-all duration-300 group"
              >
                {/* Image Frame */}
                <div className="relative overflow-hidden bg-[#1a1a1a] aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                  />
                  <div className="absolute top-4 left-4 bg-[#1a1a1a] text-white font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 brutal-border shadow-xs">
                    {project.code}
                  </div>
                  <div
                    className={`absolute bottom-4 right-4 font-bold text-xs px-3 py-1 uppercase tracking-wider brutal-border ${
                      project.divisionTag === 'cinemapro'
                        ? 'bg-[#0055ff] text-white'
                        : project.divisionTag === 'hybrid'
                        ? 'bg-[#ffcc00] text-[#1a1a1a]'
                        : 'bg-[#ffcc00] text-[#1a1a1a]'
                    }`}
                  >
                    {project.divisionTag === 'cinemapro'
                      ? 'Cinema Pro Film'
                      : project.divisionTag === 'hybrid'
                      ? 'Solución Híbrida'
                      : 'Wiñaypaq Live'}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between font-mono text-xs text-neutral-600">
                      <span className="truncate pr-2">{project.location}</span>
                      <span className="text-[#e63b2e] font-bold shrink-0">{project.year}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#1a1a1a] group-hover:text-[#e63b2e] transition-colors leading-tight">
                      {project.title}
                    </h2>

                    <p className="text-xs text-neutral-700 line-clamp-2 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Card Bottom Meta & Actions */}
                  <div className="flex flex-col gap-4 pt-4 border-t border-neutral-300 -mx-6 -mb-6 p-6 bg-[#e8e3da]">
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[10px] font-mono uppercase bg-white px-2 py-0.5 text-[#1a1a1a] brutal-border">
                        {project.metrics.label}: {project.metrics.value}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a] hover:text-[#e63b2e] flex items-center gap-1 group/btn"
                      >
                        <span>{isEs ? 'Ver Expediente' : 'View Dossier'}</span>
                        <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <button
                        onClick={() => {
                          onPreFillBrief({
                            category: project.divisionTag === 'cinemapro' ? 'audiovisual' : project.divisionTag === 'winaypaq' ? 'evento' : 'hibrido',
                            description: `Referencia seleccionada: Quiero algo parecido a "${project.title}" (${project.code}).`,
                            tier: 'tier3',
                          });
                          onNavigate('contacto');
                        }}
                        className="px-3 py-1.5 bg-[#1a1a1a] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#ffcc00] hover:text-[#1a1a1a] transition-colors brutal-border"
                      >
                        {isEs ? 'Quiero algo parecido' : 'I Want Similar'}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* Custom Roadmap CTA Card */}
            <article className="flex flex-col bg-[#1a1a1a] text-white brutal-border brutal-shadow p-8 justify-between relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-36 h-36 bg-[#ffcc00] opacity-20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex flex-col gap-4">
                <span className="font-mono text-xs text-[#ffcc00] uppercase font-bold tracking-widest">
                  [ RUTA PERSONALIZADA ]
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white leading-tight">
                  {isEs
                    ? '¿Tu proyecto exige un estándar no catalogado?'
                    : 'Does your project require an unlisted custom standard?'}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {isEs
                    ? 'Desplegamos equipos técnicos combinados (escénicos + cinematográficos) para requerimientos mixtos, festivales híbridos o coberturas confidenciales en cualquier punto del territorio nacional e internacional.'
                    : 'We mobilize combined technical units (scenic + cinema) for hybrid requirements, major multi-city tours, or confidential state missions throughout the territory.'}
                </p>
              </div>

              <div className="pt-6 flex flex-col gap-3">
                <div className="font-mono text-xs text-neutral-300 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-[#e63b2e]"></span>
                  <span>RESPUESTA TÉCNICA EN MENOS DE 24 HORAS</span>
                </div>
                <button
                  onClick={() => {
                    onPreFillBrief({
                      category: 'hibrido',
                      description: 'Cotización especial de ruta personalizada para proyecto de alta exigencia.',
                      tier: 'tier4',
                    });
                    onNavigate('contacto');
                  }}
                  className="w-full py-4 bg-[#ffcc00] text-[#1a1a1a] text-center font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors brutal-border"
                >
                  {isEs ? 'Iniciar Brief Técnico' : 'Launch Technical Brief'}
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FULL TECHNICAL DOSSIER DRAWER / MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex justify-end transition-opacity duration-300 animate-fadeIn">
          {/* Backdrop close click */}
          <div
            className="absolute inset-0"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Slide-in Drawer */}
          <div className="relative w-full max-w-2xl bg-[#f5f0e8] h-full shadow-2xl overflow-y-auto flex flex-col z-10 brutal-border-l">
            {/* Header Bar */}
            <div className="sticky top-0 bg-[#e8e3da] px-6 sm:px-8 py-5 flex items-center justify-between z-20 brutal-border-b">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 bg-[#e63b2e]"></span>
                <span className="font-mono text-xs uppercase font-bold text-[#1a1a1a] tracking-wider">
                  EXPEDIENTE: {selectedProject.code}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar expediente"
                className="w-9 h-9 bg-white text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white brutal-border transition-colors flex items-center justify-center"
              >
                <X size={18} />
              </button>
            </div>

            {/* Dossier Content */}
            <div className="p-6 sm:p-8 flex flex-col gap-8 flex-1">
              <div>
                <div className="font-mono text-xs text-[#e63b2e] font-bold uppercase tracking-wider mb-2">
                  {selectedProject.division}
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold uppercase text-[#1a1a1a] tracking-tight leading-tight">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 mt-3 font-mono text-xs text-neutral-600">
                  <span>CLIENTE: {selectedProject.client}</span>
                  <span>•</span>
                  <span>LOCACIÓN: {selectedProject.location}</span>
                </div>
              </div>

              {/* Media Picture */}
              <div className="w-full bg-[#1a1a1a] overflow-hidden brutal-border brutal-shadow">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  className="w-full h-64 sm:h-72 object-cover"
                />
              </div>

              {/* Technical Specs Banner */}
              <div className="bg-[#1a1a1a] text-white p-4 brutal-border flex flex-wrap justify-between gap-4 font-mono text-xs">
                <div>
                  <span className="text-neutral-400 block text-[10px]">FORMATO / SENSOR:</span>
                  <span className="text-[#ffcc00] font-bold">{selectedProject.specs.format}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px]">CADENA DE AUDIO:</span>
                  <span className="text-white font-bold">{selectedProject.specs.audio}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block text-[10px]">EQUIPO DESPLEGADO:</span>
                  <span className="text-white font-bold">{selectedProject.specs.crew}</span>
                </div>
              </div>

              {/* Objectives & Solution Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#eee9e0] p-5 brutal-border flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase font-bold text-[#1a1a1a] flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[#e63b2e]"></span>
                    01. OBJETIVOS
                  </span>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    {selectedProject.objectives}
                  </p>
                </div>

                <div className="bg-[#eee9e0] p-5 brutal-border flex flex-col gap-2">
                  <span className="font-mono text-xs uppercase font-bold text-[#1a1a1a] flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[#0055ff]"></span>
                    02. SOLUCIÓN DESPLEGADA
                  </span>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Grupo Lares Role */}
              <div className="bg-[#eee9e0] p-5 brutal-border flex flex-col gap-2">
                <span className="font-mono text-xs uppercase font-bold text-[#1a1a1a] flex items-center gap-1.5">
                  03. ROL DE GRUPO LARES
                </span>
                <p className="text-xs text-neutral-800 leading-relaxed">
                  {selectedProject.role}
                </p>
              </div>

              {/* Technical Deliverables */}
              <div className="bg-[#eee9e0] p-5 brutal-border flex flex-col gap-2">
                <span className="font-mono text-xs uppercase font-bold text-[#1a1a1a]">
                  04. ENTREGABLES TÉCNICOS AUDITADOS
                </span>
                <ul className="text-xs text-neutral-700 flex flex-col gap-2 list-none pl-0 mt-2">
                  {selectedProject.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#e63b2e] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Impact */}
              <div className="bg-[#1a1a1a] text-white p-6 brutal-border brutal-shadow flex flex-col gap-2">
                <span className="font-mono text-xs uppercase font-bold text-[#ffcc00] flex items-center gap-1.5">
                  <Sparkles size={14} />
                  05. RESULTADOS E IMPACTO VERIFICADO
                </span>
                <p className="text-sm text-neutral-100 leading-relaxed">
                  {selectedProject.impact}
                </p>
              </div>

              {/* Commercial Drawer Action */}
              <div className="pt-2 pb-6 flex flex-col gap-3">
                <button
                  onClick={() => {
                    const title = selectedProject.title;
                    setSelectedProject(null);
                    onPreFillBrief({
                      category: selectedProject.divisionTag === 'cinemapro' ? 'audiovisual' : 'evento',
                      description: `Quiero algo parecido a: "${title}" (${selectedProject.code})`,
                      tier: 'tier3',
                    });
                    onNavigate('contacto');
                  }}
                  className="w-full py-4 bg-[#ffcc00] text-[#1a1a1a] text-center font-bold text-xs uppercase tracking-widest brutal-border brutal-shadow hover:bg-white transition-all flex items-center justify-center gap-2"
                >
                  <span>{isEs ? 'Quiero algo parecido a este proyecto' : 'I Want a Similar Production'}</span>
                  <ArrowRight size={14} />
                </button>
                <span className="text-center font-mono text-[10px] text-neutral-500 uppercase">
                  TIEMPO PROMEDIO DE PRESUPUESTO PRELIMINAR: 24 A 48 HORAS
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
