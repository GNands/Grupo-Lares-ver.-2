'use client';

import React, { useState } from 'react';
import { SectionKey } from '../Sidebar';
import { CLIENTS_LIST } from '@/lib/data';
import {
  ShieldCheck,
  CheckCircle2,
  Building2,
  ArrowRight,
  FileCheck,
  Quote,
  Award,
  Globe2,
  Lock,
  Download,
} from 'lucide-react';

interface ClientesSectionProps {
  onNavigate: (section: SectionKey) => void;
  lang: 'es' | 'en';
}

export function ClientesSection({ onNavigate, lang }: ClientesSectionProps) {
  const isEs = lang === 'es';
  const [selectedClient, setSelectedClient] = useState<string>('cwe');

  const testimonials = {
    cwe: {
      client: 'CWE CORP (CHINA INTERNATIONAL WATER & ELECTRIC)',
      quote: isEs
        ? 'Grupo Lares demostró un estándar cinematográfico extraordinario en el registro de la obra de Huaycoloro. La directiva en Pekín y las autoridades ministeriales en Lima quedaron plenamente conformes con la entrega técnica trilingüe y los tiempos récord de postproducción.'
        : 'Grupo Lares delivered an exceptional cinematographic standard for the Huaycoloro infrastructure project. Both the board in Beijing and ministerial authorities in Lima were fully satisfied with the trilingual technical delivery and prompt timeline.',
      author: 'Dirección de Comunicaciones Corporativas • Región Sudamérica',
      tag: 'Infraestructura & Obra Monumental',
    },
    gtn: {
      client: 'GRAN TEATRO NACIONAL DEL PERÚ',
      quote: isEs
        ? 'La producción de las Bodas de Oro de Andrés Chimango Lares en nuestra sala principal fue impecable. Cumplieron con toda la normativa de carga de escenario, rider acústico sinfónico y tiempos estrictos de regiduría sin una sola fisura.'
        : 'The production of Andrés Chimango Lares’ Golden Jubilee in our main hall was flawless. They complied with every stage load protocol, symphonic rider, and strict regie timing without a single hitch.',
      author: 'Jefatura Técnica de Producción Escénica',
      tag: 'Gala & Auditorio Mayor',
    },
    mincul: {
      client: 'MINISTERIO DE CULTURA (VICEMINISTERIO DE INTERCULTURALIDAD)',
      quote: isEs
        ? 'Operar un festival masivo en espacio abierto como FestiAfro para más de 14,000 personas conllevaba altísimos retos de seguridad ciudadana e INDECI. Grupo Lares cumplió con holgura cada partida logística y la transmisión streaming fue impecable.'
        : 'Operating a mass public festival like FestiAfro for over 14,000 attendees posed significant civil defense and safety challenges. Grupo Lares exceeded expectations in every logistical area, including flawless live broadcasting.',
      author: 'Coordinación General de Eventos Culturales',
      tag: 'Gestión Pública & Masiva',
    },
  };

  const currentTestimonial = testimonials[selectedClient as keyof typeof testimonials] || testimonials.cwe;

  return (
    <div className="w-full flex flex-col">
      {/* Top Header Strip */}
      <div className="w-full bg-[#eee9e0] brutal-border-b px-6 lg:px-12 py-3 flex items-center justify-between font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#0055ff]"></span>
          <span className="font-bold text-[#1a1a1a] uppercase">
            {isEs ? 'CONFIANZA & COMPLIANCE // CAP. 05' : 'TRUST & COMPLIANCE // CH. 05'}
          </span>
        </div>
        <span className="text-neutral-500 uppercase">
          {isEs ? 'CLIENTES GLOBALES & ESTADO' : 'GLOBAL CLIENTS & STATE'}
        </span>
      </div>

      <section className="px-6 sm:px-10 lg:px-16 py-12 lg:py-20 flex flex-col gap-12">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#ffcc00] px-3 py-1 font-bold text-xs uppercase tracking-widest text-[#1a1a1a] brutal-border mb-4">
            <ShieldCheck size={14} />
            <span>{isEs ? 'CONFIANZA COMPROBADA' : 'PROVEN TRACK RECORD'}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tighter text-[#1a1a1a] leading-none mb-6">
            {isEs ? 'Conoce a nuestros amigos.' : 'Our Valued Partners.'}
          </h1>

          <p className="text-base sm:text-xl text-neutral-700 leading-relaxed">
            {isEs
              ? 'Una comunidad que le da valor y propósito a lo que hacemos. Instituciones del Estado, multinacionales de ingeniería, fondos internacionales de cooperación, embajadas y artistas de primer orden.'
              : 'A distinguished community that gives purpose to our craft. State ministries, engineering conglomerates, international cooperation funds, diplomatic missions, and premier artists.'}
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLIENTS_LIST.map((c) => {
            const isSelected = selectedClient === c.id;
            return (
              <div
                key={c.id}
                onClick={() => setSelectedClient(c.id in testimonials ? c.id : 'cwe')}
                className={`p-6 brutal-border cursor-pointer transition-all duration-200 flex flex-col justify-between h-48 ${
                  isSelected
                    ? 'bg-[#1a1a1a] text-white shadow-[6px_6px_0px_0px_#ffcc00] -translate-y-1'
                    : 'bg-[#f5f0e8] hover:bg-[#e8e3da] text-[#1a1a1a] brutal-shadow'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400 mb-2">
                    <span className="uppercase">{c.category}</span>
                    <span className={isSelected ? 'text-[#ffcc00]' : 'text-neutral-600'}>
                      {c.location}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg uppercase tracking-tight mb-2 leading-tight">
                    {c.name}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      isSelected ? 'text-neutral-300' : 'text-neutral-700'
                    }`}
                  >
                    {c.role}
                  </p>
                </div>

                <div
                  className={`pt-2 border-t text-[11px] font-mono flex items-center justify-between ${
                    isSelected ? 'border-neutral-700 text-[#ffcc00]' : 'border-neutral-300 text-neutral-600'
                  }`}
                >
                  <span className="truncate">{c.highlight}</span>
                  <span className="font-bold shrink-0">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Testimonial Explorer */}
        <div className="bg-[#e8e3da] p-8 lg:p-12 brutal-border brutal-shadow-lg">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2">
                <Quote size={28} className="text-[#e63b2e]" />
                <span className="font-mono text-xs uppercase font-bold text-neutral-600">
                  TESTIMONIO OFICIAL VERIFICADO • {currentTestimonial.tag}
                </span>
              </div>
              <p className="text-lg sm:text-2xl font-bold uppercase tracking-tight text-[#1a1a1a] leading-snug">
                “{currentTestimonial.quote}”
              </p>
              <div className="pt-2 font-mono text-xs">
                <span className="font-bold text-[#1a1a1a] block uppercase text-sm">
                  {currentTestimonial.client}
                </span>
                <span className="text-neutral-600 block mt-0.5">
                  {currentTestimonial.author}
                </span>
              </div>
            </div>

            {/* Testimonial Switchers */}
            <div className="flex flex-col gap-2 w-full lg:w-64">
              <span className="font-mono text-[10px] uppercase font-bold text-neutral-600">
                CAMBIAR TESTIMONIO:
              </span>
              <button
                onClick={() => setSelectedClient('cwe')}
                className={`p-3 text-left font-mono text-xs uppercase font-bold brutal-border transition-colors ${
                  selectedClient === 'cwe'
                    ? 'bg-[#1a1a1a] text-[#ffcc00]'
                    : 'bg-white text-[#1a1a1a] hover:bg-[#ffcc00]'
                }`}
              >
                • CWE (China Corp)
              </button>
              <button
                onClick={() => setSelectedClient('gtn')}
                className={`p-3 text-left font-mono text-xs uppercase font-bold brutal-border transition-colors ${
                  selectedClient === 'gtn'
                    ? 'bg-[#1a1a1a] text-[#ffcc00]'
                    : 'bg-white text-[#1a1a1a] hover:bg-[#ffcc00]'
                }`}
              >
                • Gran Teatro Nacional
              </button>
              <button
                onClick={() => setSelectedClient('mincul')}
                className={`p-3 text-left font-mono text-xs uppercase font-bold brutal-border transition-colors ${
                  selectedClient === 'mincul'
                    ? 'bg-[#1a1a1a] text-[#ffcc00]'
                    : 'bg-white text-[#1a1a1a] hover:bg-[#ffcc00]'
                }`}
              >
                • Ministerio de Cultura
              </button>
            </div>
          </div>
        </div>

        {/* Executive Compliance & Security Grid */}
        <div className="bg-[#1a1a1a] text-white p-8 lg:p-12 brutal-border brutal-shadow">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-8 border-b border-neutral-700 pb-6">
            <div>
              <span className="font-mono text-xs text-[#ffcc00] uppercase font-bold tracking-widest block mb-1">
                COMPLIANCE & RESPETO INSTITUCIONAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                {isEs ? 'El Estándar Legal y Operativo' : 'Legal & Operational Standard'}
              </h2>
            </div>
            <span className="font-mono text-xs text-neutral-400">
              AUDITABLE PARA FONDOS PÚBLICOS Y PRIVADOS
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="bg-neutral-900 p-5 border border-neutral-700 flex flex-col gap-2">
              <span className="text-[#ffcc00] font-bold text-sm">01 / RUC & RNP ACTIVO</span>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Habilitados para contratar con el Estado Peruano y corporaciones internacionales con facturación electrónica y bancarización transparente.
              </p>
            </div>

            <div className="bg-neutral-900 p-5 border border-neutral-700 flex flex-col gap-2">
              <span className="text-[#ffcc00] font-bold text-sm">02 / ACUERDOS NDA</span>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Protocolos estrictos de confidencialidad para megaobras, lanzamientos comerciales y delegaciones diplomáticas de alta investidura.
              </p>
            </div>

            <div className="bg-neutral-900 p-5 border border-neutral-700 flex flex-col gap-2">
              <span className="text-[#ffcc00] font-bold text-sm">03 / SCTR & SEGUROS</span>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Todo el personal técnico y artístico cuenta con Seguro Complementario de Trabajo de Riesgo (SCTR Salud y Pensión) y EPPs normados.
              </p>
            </div>

            <div className="bg-neutral-900 p-5 border border-neutral-700 flex flex-col gap-2">
              <span className="text-[#ffcc00] font-bold text-sm">04 / DEFENSA CIVIL INDECI</span>
              <p className="text-neutral-400 text-[11px] leading-relaxed">
                Memorias de cálculo estructural, planos de evacuación y coordinación directa con bomberos y Policía Nacional en todo evento masivo.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-300">
              {isEs
                ? '¿Necesitas homologarnos como proveedores antes de lanzar tu TDR / Licitación?'
                : 'Need to approve us as a vendor before publishing your RFP / Tender?'}
            </span>
            <button
              onClick={() => onNavigate('contacto')}
              className="px-6 py-3 bg-[#ffcc00] text-[#1a1a1a] font-bold text-xs uppercase tracking-widest brutal-border hover:bg-white transition-all whitespace-nowrap"
            >
              {isEs ? 'Iniciar Homologación' : 'Start Vendor Approval'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
