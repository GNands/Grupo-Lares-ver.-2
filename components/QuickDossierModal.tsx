'use client';

import React from 'react';
import { X, Printer, Download, CheckCircle2, ShieldCheck, Building2, PhoneCall, Mail } from 'lucide-react';
import { PROJECTS_DATA, CLIENTS_LIST } from '@/lib/data';

interface QuickDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'es' | 'en';
}

export function QuickDossierModal({ isOpen, onClose, lang }: QuickDossierModalProps) {
  if (!isOpen) return null;
  const isEs = lang === 'es';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#f5f0e8] brutal-border brutal-shadow-lg max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#1a1a1a] text-white p-5 flex items-center justify-between brutal-border-b">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-[#ffcc00]"></span>
            <div>
              <span className="font-bold text-sm tracking-wider uppercase block">
                DOSSIER EJECUTIVO GRUPO LARES
              </span>
              <span className="text-[10px] font-mono text-neutral-400">
                REF: DOC-EXEC-2025 // WIÑAYPAQ & CINEMA PRO
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-[#ffcc00] text-[#1a1a1a] font-mono text-xs font-bold uppercase brutal-border hover:bg-white flex items-center gap-1.5"
            >
              <Printer size={13} />
              <span>{isEs ? 'Imprimir / PDF' : 'Print / PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-neutral-800 text-white hover:bg-[#e63b2e] flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Printable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-6 text-[#1a1a1a]">
          {/* Summary Strip */}
          <div className="border-b-2 border-[#1a1a1a] pb-4 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-[#e63b2e]">
                FICHA DE HOMOLOGACIÓN & PRESENTACIÓN
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1a1a1a]">
                Grupo Lares: Arte con Método
              </h2>
            </div>
            <div className="text-right font-mono text-xs text-neutral-600">
              <p>RUC: ACTIVO & HABILITADO</p>
              <p>SEDE: BARRANCO, LIMA — PERÚ</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            Grupo Lares es una productora cultural y cinematográfica constituida por dos divisiones
            complementarias: <strong>Wiñaypaq</strong> (diseño y operación de acontecimientos escénicos
            y masivos) y <strong>Cinema Pro</strong> (producción cinematográfica 8K, documentales
            institucionales y publicidad). Diseñado para atender a organismos internacionales,
            ministerios y corporaciones con estándares de redundancia y auditoría total.
          </p>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
            <div className="p-4 bg-[#eee9e0] brutal-border">
              <span className="font-bold text-[#e63b2e] block mb-1">WIÑAYPAQ ESCENA</span>
              <ul className="space-y-1 text-neutral-700 text-[11px]">
                <li>• Festivales masivos (&gt;15,000 asistentes)</li>
                <li>• Galas sinfónicas en Gran Teatro Nacional</li>
                <li>• Dirección de arte, trussing y DMX timecode</li>
                <li>• Planes de contingencia INDECI aprobados</li>
              </ul>
            </div>

            <div className="p-4 bg-[#eee9e0] brutal-border">
              <span className="font-bold text-[#0055ff] block mb-1">CINEMA PRO FILM</span>
              <ul className="space-y-1 text-neutral-700 text-[11px]">
                <li>• Cámaras RED V-Raptor 8K y ARRI Log-C</li>
                <li>• Drones certificados DGAC y mapeo aéreo</li>
                <li>• Videos corporativos bilingües y trilingües</li>
                <li>• Postproducción DaVinci Resolve & Sonido 5.1</li>
              </ul>
            </div>
          </div>

          {/* Compliance & Safeguards */}
          <div className="p-4 bg-[#1a1a1a] text-white brutal-border font-mono text-xs flex flex-col gap-2">
            <span className="text-[#ffcc00] font-bold uppercase flex items-center gap-1.5">
              <ShieldCheck size={14} />
              GARANTÍAS & COMPLIANCE
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px] text-neutral-300">
              <div>
                <span className="text-white font-bold block">PÓLIZA CIVIL:</span>
                Hasta $1,000,000 USD ante terceros.
              </div>
              <div>
                <span className="text-white font-bold block">SCTR Y PERSONAL:</span>
                100% cubierto con seguro de riesgo.
              </div>
              <div>
                <span className="text-white font-bold block">CONFIDENCIALIDAD:</span>
                Protocolo estricto NDA garantizado.
              </div>
            </div>
          </div>

          {/* Key Reference Projects */}
          <div>
            <span className="font-bold text-xs uppercase tracking-wider block mb-3 font-mono">
              CASOS DE ÉXITO AUDITADOS
            </span>
            <div className="space-y-2 font-mono text-xs">
              {PROJECTS_DATA.slice(0, 4).map((p) => (
                <div key={p.id} className="p-3 bg-white brutal-border flex justify-between items-center">
                  <div>
                    <span className="font-bold text-[#1a1a1a] block">{p.title}</span>
                    <span className="text-[10px] text-neutral-500">{p.client} — {p.location}</span>
                  </div>
                  <span className="text-[10px] bg-[#eee9e0] px-2 py-0.5 text-neutral-700 font-bold shrink-0">
                    {p.metrics.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contacts in Modal */}
          <div className="border-t border-neutral-300 pt-4 flex flex-wrap justify-between items-center text-xs font-mono text-neutral-600">
            <span>CONTACTO EJECUTIVO: contacto@grupolares.pe</span>
            <span>WHATSAPP PRODUCCIÓN: +51 989 342 110</span>
          </div>
        </div>
      </div>
    </div>
  );
}
