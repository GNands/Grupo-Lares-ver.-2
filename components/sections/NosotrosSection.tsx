'use client';

import React, { useState } from 'react';
import { SectionKey } from '../Sidebar';
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Flame,
  Cpu,
  Layers,
  Award,
  Users,
  Compass,
  FileCheck,
} from 'lucide-react';

interface NosotrosSectionProps {
  onNavigate: (section: SectionKey) => void;
  lang: 'es' | 'en';
}

export function NosotrosSection({ onNavigate, lang }: NosotrosSectionProps) {
  const isEs = lang === 'es';
  const [activeDna, setActiveDna] = useState<'arte' | 'metodo'>('arte');

  return (
    <div className="w-full flex flex-col">
      {/* Top Header Strip */}
      <div className="w-full bg-[#eee9e0] brutal-border-b px-6 lg:px-12 py-3 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#ffcc00]"></span>
          <span className="font-bold text-[#1a1a1a] uppercase">
            {isEs ? 'IDENTIDAD INSTITUCIONAL // CAP. 02' : 'INSTITUTIONAL IDENTITY // CH. 02'}
          </span>
        </div>
        <span className="text-neutral-500 uppercase">
          {isEs ? 'ORIGEN: ARTE TRADICIONAL & INGENIERÍA' : 'ORIGIN: TRADITION & ENGINEERING'}
        </span>
      </div>

      {/* Main Narrative Hero */}
      <section className="px-6 sm:px-10 lg:px-16 py-12 lg:py-20 flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-mono text-xs text-[#e63b2e] font-bold uppercase tracking-widest">
              • {isEs ? 'MANIFIESTO FUNDACIONAL' : 'FOUNDING MANIFESTO'}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#1a1a1a] leading-[0.98]">
              {isEs ? (
                <>
                  Una familia <br />
                  nacida del <br />
                  <span className="bg-[#ffcc00] px-2 py-0.5 text-[#1a1a1a]">arte de crear.</span>
                </>
              ) : (
                <>
                  A family <br />
                  born from the <br />
                  <span className="bg-[#ffcc00] px-2 py-0.5 text-[#1a1a1a]">art of creating.</span>
                </>
              )}
            </h1>

            <div className="mt-4 p-5 bg-[#e8e3da] brutal-border">
              <span className="font-mono text-xs uppercase font-bold text-neutral-600 block mb-2">
                {isEs ? 'EL COMPROMISO LARES:' : 'THE LARES PLEDGE:'}
              </span>
              <p className="text-sm font-semibold text-[#1a1a1a] uppercase tracking-wide">
                {isEs
                  ? '“Lo extraordinario está a un «SÍ» de distancia.”'
                  : '“The extraordinary is only one «YES» away.”'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6 text-neutral-800 text-base sm:text-lg leading-relaxed">
            <p>
              {isEs ? (
                <>
                  Creemos que el ingenio y la voluntad son poderosas herramientas para imprimir una
                  vívida huella en la realidad. Somos artesanos de vivencias memorables: tomamos la
                  esencia de tus ideas y damos forma a acontecimientos artísticos y audiovisuales,
                  diseñados para despertar ese algo profundo que mueve a la comunidad.
                </>
              ) : (
                <>
                  We believe that ingenuity and determination are powerful instruments for leaving a
                  lasting imprint on reality. We are craftsmen of memorable experiences: taking the
                  core of your vision and shaping live artistic events and cinematic works designed
                  to awaken profound resonance within society.
                </>
              )}
            </p>

            <p className="text-sm text-neutral-600">
              {isEs
                ? 'Con más de 50 años de linaje artístico iniciado por el maestro del violín andino Andrés Chimango Lares y complementado con la ingeniería audiovisual de vanguardia de Cinema Pro, nuestra labor integra el respeto sagrado por el contenido con la disciplina operativa más estricta del mercado.'
                : 'With over 50 years of artistic lineage inaugurated by Andean violin master Andrés Chimango Lares and complemented by Cinema Pro’s state-of-the-art audiovisual engineering, our work blends reverence for cultural essence with the industry’s most rigorous operational discipline.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('capacidades')}
                className="px-6 py-3.5 bg-[#1a1a1a] text-white hover:bg-[#ffcc00] hover:text-[#1a1a1a] font-bold text-xs uppercase tracking-widest brutal-border brutal-shadow transition-all flex items-center gap-2"
              >
                <span>{isEs ? 'Ver Nuestras Capacidades' : 'View Capabilities'}</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={() => onNavigate('portafolio')}
                className="px-6 py-3.5 bg-[#e8e3da] text-[#1a1a1a] hover:bg-white font-bold text-xs uppercase tracking-widest brutal-border transition-colors"
              >
                {isEs ? 'Explorar Casos Reales' : 'Explore Real Cases'}
              </button>
            </div>
          </div>
        </div>

        {/* INTERACTIVE DUAL DNA EXPLORER */}
        <div className="mt-8 bg-[#eee9e0] p-6 lg:p-10 brutal-border brutal-shadow-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-neutral-300 pb-6">
            <div>
              <span className="font-mono text-xs text-[#0055ff] font-bold uppercase tracking-widest block mb-1">
                {isEs ? 'DESCUBRIMIENTO INTERACTIVO' : 'INTERACTIVE DISCOVERY'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1a1a1a]">
                {isEs ? 'El Doble ADN de Grupo Lares' : 'The Dual DNA of Grupo Lares'}
              </h2>
            </div>

            {/* Switcher Tabs */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveDna('arte')}
                className={`px-4 py-2 font-mono text-xs font-bold uppercase brutal-border transition-all flex items-center gap-1.5 ${
                  activeDna === 'arte'
                    ? 'bg-[#e63b2e] text-white shadow-[3px_3px_0px_0px_#1a1a1a]'
                    : 'bg-white text-[#1a1a1a] hover:bg-[#ffcc00]'
                }`}
              >
                <Flame size={14} />
                <span>{isEs ? 'El Sentimiento (Arte)' : 'The Soul (Art)'}</span>
              </button>

              <button
                onClick={() => setActiveDna('metodo')}
                className={`px-4 py-2 font-mono text-xs font-bold uppercase brutal-border transition-all flex items-center gap-1.5 ${
                  activeDna === 'metodo'
                    ? 'bg-[#1a1a1a] text-white shadow-[3px_3px_0px_0px_#ffcc00]'
                    : 'bg-white text-[#1a1a1a] hover:bg-[#ffcc00]'
                }`}
              >
                <Cpu size={14} />
                <span>{isEs ? 'El Método (Ingeniería)' : 'The Method (Engineering)'}</span>
              </button>
            </div>
          </div>

          {activeDna === 'arte' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
              <div className="bg-[#f5f0e8] p-6 brutal-border">
                <span className="font-mono text-xs text-[#e63b2e] font-bold block mb-2">01 / RAÍZ</span>
                <h4 className="font-bold text-lg uppercase text-[#1a1a1a] mb-2">
                  {isEs ? 'Tradición Viva & Maestría' : 'Living Heritage & Mastery'}
                </h4>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {isEs
                    ? '50 años en los escenarios más solemnes del país. No producimos espectáculos cosméticos: entendemos la raíz musical, la mística y el diálogo con la comunidad.'
                    : '50 years on the country’s most solemn stages. We do not manufacture cosmetic shows: we understand harmonic heritage and intimate community dialogue.'}
                </p>
              </div>

              <div className="bg-[#f5f0e8] p-6 brutal-border">
                <span className="font-mono text-xs text-[#e63b2e] font-bold block mb-2">02 / CURADURÍA</span>
                <h4 className="font-bold text-lg uppercase text-[#1a1a1a] mb-2">
                  {isEs ? 'Dirección Artística de Alto Nivel' : 'High-Level Artistic Direction'}
                </h4>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {isEs
                    ? 'Traducción de ideas abstractas en partituras, coreografías, dramaturgia y visuales cinematográficas con identidad latinoamericana reconocible en festivales del mundo.'
                    : 'Translating abstract notions into orchestral scores, choreography, stage dramaturgy, and cinematic visuals with distinct global resonance.'}
                </p>
              </div>

              <div className="bg-[#f5f0e8] p-6 brutal-border">
                <span className="font-mono text-xs text-[#e63b2e] font-bold block mb-2">03 / CONEXIÓN</span>
                <h4 className="font-bold text-lg uppercase text-[#1a1a1a] mb-2">
                  {isEs ? 'Emoción que Trasciende' : 'Emotion That Transcends'}
                </h4>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {isEs
                    ? 'Logramos que salas de 1,400 personas o plazas de 15,000 sientan un latido unánime. El arte como catalizador de cohesión social y prestigio institucional.'
                    : 'Uniting 1,400-seat opera halls or 15,000-person public squares in a single heartbeat. Art as an engine for social cohesion and institutional prestige.'}
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
              <div className="bg-[#f5f0e8] p-6 brutal-border">
                <span className="font-mono text-xs text-[#0055ff] font-bold block mb-2">01 / CALIDAD</span>
                <h4 className="font-bold text-lg uppercase text-[#1a1a1a] mb-2">
                  {isEs ? 'Cámaras 8K & Drones DGAC' : '8K Cinema & Certified Drones'}
                </h4>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {isEs
                    ? 'Flujos de trabajo en ARRI Log-C y RED RAW, calibración de color en DaVinci Resolve Studio y masterización acústica estandarizada en EBU R128 para broadcast.'
                    : 'ARRI Log-C and RED RAW workflows, DaVinci Resolve color calibration, and standardized acoustic mastering conforming to EBU R128 broadcast specs.'}
                </p>
              </div>

              <div className="bg-[#f5f0e8] p-6 brutal-border">
                <span className="font-mono text-xs text-[#0055ff] font-bold block mb-2">02 / REDUNDANCIA</span>
                <h4 className="font-bold text-lg uppercase text-[#1a1a1a] mb-2">
                  {isEs ? 'Tolerancia Cero a Fallas' : 'Zero-Fault Tolerance'}
                </h4>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {isEs
                    ? 'Doble línea de suministro eléctrico con grupos electrógenos sincronizados, cableado de fibra óptica redundante y respaldo en caliente durante todo el rodaje o show.'
                    : 'Dual power lines with synchronized generators, redundant optical fiber cabling, and hot-swap live backups throughout filming and live execution.'}
                </p>
              </div>

              <div className="bg-[#f5f0e8] p-6 brutal-border">
                <span className="font-mono text-xs text-[#0055ff] font-bold block mb-2">03 / COMPLIANCE</span>
                <h4 className="font-bold text-lg uppercase text-[#1a1a1a] mb-2">
                  {isEs ? 'Pólizas de Seguro $1M USD' : 'Liability Coverage $1M USD'}
                </h4>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {isEs
                    ? 'Pólizas completas de responsabilidad civil ante terceros para locaciones patrimoniales protegidas por el Estado y acuerdos de confidencialidad estrictos.'
                    : 'Comprehensive third-party civil liability policies for heritage-protected sites and formal non-disclosure contracts for strategic projects.'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 03. EL ESTÁNDAR TÉCNICO DE GRUPO LARES (METODOLOGÍA DE 4 PASOS) */}
        <div className="mt-8 flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-[#e63b2e] font-bold uppercase tracking-widest block mb-1">
                {isEs ? 'METODOLOGÍA DE DESPLIEGUE OPERATIVO' : 'DEPLOYMENT METHODOLOGY'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-[#1a1a1a]">
                {isEs ? 'El Estándar Técnico de Grupo Lares' : 'Grupo Lares Technical Standard'}
              </h2>
            </div>
            <p className="text-xs text-neutral-600 max-w-md">
              {isEs
                ? 'Cada hito de producción cuenta con supervisores de disciplina titulados y seguros de contingencia civil para locaciones patrimoniales y zonas agrestes.'
                : 'Each production milestone is overseen by certified department leads and insured with civil contingency policies for heritage and remote terrains.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#eee9e0] p-6 brutal-border brutal-shadow flex flex-col justify-between">
              <span className="font-mono text-3xl font-bold text-[#1a1a1a] mb-4">01/</span>
              <div className="space-y-2">
                <h4 className="font-bold text-base uppercase text-[#1a1a1a]">
                  {isEs ? 'Inspección & Rider' : 'Survey & Technical Rider'}
                </h4>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {isEs
                    ? 'Levantamiento acústico, cubicación lumínica y scouting de locación mediante telemetría satelital y drones de mapeo fotogramétrico.'
                    : 'Acoustic survey, photometric study, and location scouting via satellite telemetry and photogrammetric drone mapping.'}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-neutral-300 font-mono text-[10px] text-neutral-500 uppercase">
                FASE PRE-PRODUCCIÓN
              </div>
            </div>

            <div className="bg-[#eee9e0] p-6 brutal-border brutal-shadow flex flex-col justify-between">
              <span className="font-mono text-3xl font-bold text-[#1a1a1a] mb-4">02/</span>
              <div className="space-y-2">
                <h4 className="font-bold text-base uppercase text-[#1a1a1a]">
                  {isEs ? 'Gestión de Permisos' : 'Permits & Compliance'}
                </h4>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {isEs
                    ? 'Tramitación ante ministerios, municipios y gerencias de patrimonio cultural con pólizas de responsabilidad civil total e INDECI.'
                    : 'Filings before ministries, municipalities, and cultural heritage boards with comprehensive civil liability coverage and safety clearance.'}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-neutral-300 font-mono text-[10px] text-neutral-500 uppercase">
                FASE LEGAL & SEGURIDAD
              </div>
            </div>

            <div className="bg-[#eee9e0] p-6 brutal-border brutal-shadow flex flex-col justify-between">
              <span className="font-mono text-3xl font-bold text-[#1a1a1a] mb-4">03/</span>
              <div className="space-y-2">
                <h4 className="font-bold text-base uppercase text-[#1a1a1a]">
                  {isEs ? 'Ejecución Redundante' : 'Redundant Execution'}
                </h4>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {isEs
                    ? 'Doble línea de generadores, canales de señal de audio duales y grabación multicámara con respaldo instantáneo en SSD RAID in-house.'
                    : 'Dual generator power grid, isolated audio lines, and multicamera recording with instantaneous checksum-verified SSD RAID backups.'}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-neutral-300 font-mono text-[10px] text-neutral-500 uppercase">
                FASE OPERACIÓN EN VIVO
              </div>
            </div>

            <div className="bg-[#eee9e0] p-6 brutal-border brutal-shadow flex flex-col justify-between">
              <span className="font-mono text-3xl font-bold text-[#1a1a1a] mb-4">04/</span>
              <div className="space-y-2">
                <h4 className="font-bold text-base uppercase text-[#1a1a1a]">
                  {isEs ? 'Entrega de Master & Data' : 'Master Delivery & Archive'}
                </h4>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {isEs
                    ? 'Reporte de aforo certificado, masters ProRes 4444 para cine y paquetes segmentados para difusión inmediata en redes y medios.'
                    : 'Certified audience reports, cinematic ProRes 4444 masters, and multi-format cutdowns for instant broadcast and social dissemination.'}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-neutral-300 font-mono text-[10px] text-neutral-500 uppercase">
                FASE POST & ENTREGA
              </div>
            </div>
          </div>
        </div>

        {/* ASSURANCE STRIP FOR HIGH LEVEL CLIENTS & ONGs */}
        <div className="mt-8 bg-[#1a1a1a] text-white p-8 lg:p-12 brutal-border brutal-shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#ffcc00] font-bold uppercase">
              <ShieldCheck size={16} />
              <span>GARANTÍA PARA ONGs, EMBAJADAS & MULTINACIONALES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
              {isEs
                ? '¿Tu licitación o proyecto exige compliance estricto?'
                : 'Does your tender or project require strict compliance?'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {isEs
                ? 'Contamos con RUC activo, Registro Nacional de Proveedores (RNP) para el Estado Peruano, homologación para corporaciones internacionales y acuerdos de confidencialidad estándar internacional (NDA).'
                : 'We operate with registered government supplier status (RNP), international corporate compliance certifications, and institutional-grade Non-Disclosure Agreements (NDAs).'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              onClick={() => onNavigate('contacto')}
              className="px-8 py-4 bg-[#ffcc00] text-[#1a1a1a] font-bold text-xs uppercase tracking-widest brutal-border hover:bg-white transition-all text-center whitespace-nowrap"
            >
              {isEs ? 'Solicitar Ficha de Proveedor' : 'Request Vendor File'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
