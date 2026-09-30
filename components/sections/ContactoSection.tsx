'use client';

import React, { useState, useEffect } from 'react';
import { SectionKey } from '../Sidebar';
import {
  Send,
  Upload,
  CheckCircle2,
  PhoneCall,
  Mail,
  Clock,
  MapPin,
  ShieldCheck,
  FileText,
  Trash2,
  Sparkles,
  Info,
  Calendar,
  Film,
  Building2,
  Theater,
  Radio,
  HelpCircle,
  PlusCircle,
  ExternalLink,
} from 'lucide-react';

interface ContactoSectionProps {
  initialData?: {
    category?: string;
    description?: string;
    tier?: string;
  };
  onClearInitialData?: () => void;
  lang: 'es' | 'en';
}

export function ContactoSection({ initialData, onClearInitialData, lang }: ContactoSectionProps) {
  const isEs = lang === 'es';

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState<string>(initialData?.category || 'audiovisual');
  const [vision, setVision] = useState(initialData?.description || '');
  const [currency, setCurrency] = useState<'USD' | 'PEN'>('USD');
  const [budgetTier, setBudgetTier] = useState<string>(initialData?.tier || 'tier2');
  const [files, setFiles] = useState<{ name: string; size: string }[]>([]);

  // Subpanel dynamic details
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventCapacity, setEventCapacity] = useState('100 a 500 personas');
  const [filmType, setFilmType] = useState('Video Institucional / Corporativo');
  const [filmDeliverables, setFilmDeliverables] = useState('1 Master 4K + 3 Cortes para Redes');

  // Submit Feedback
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploaded: { name: string; size: string }[] = [];
      for (let i = 0; i < e.target.files.length; i++) {
        const f = e.target.files[i];
        uploaded.push({
          name: f.name,
          size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`,
        });
      }
      setFiles((prev) => [...prev, ...uploaded]);
    }
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `GL-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmissionId(id);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setVision('');
    setFiles([]);
    if (onClearInitialData) onClearInitialData();
  };

  const serviceCategories = [
    { id: 'evento', label: isEs ? 'Producción de Evento' : 'Event Production', icon: Theater },
    { id: 'audiovisual', label: isEs ? 'Producción Audiovisual' : 'Audiovisual / Film', icon: Film },
    { id: 'btl', label: isEs ? 'Activación / BTL' : 'Activation / BTL', icon: Sparkles },
    { id: 'institucional', label: isEs ? 'Com. Institucional' : 'Institutional Comms', icon: Building2 },
    { id: 'artistica', label: isEs ? 'Producción Artística' : 'Artistic Staging', icon: Theater },
    { id: 'streaming', label: isEs ? 'Cobertura / Streaming' : 'Coverage / Streaming', icon: Radio },
    { id: 'hibrido', label: isEs ? 'Solución Híbrida (Ambos)' : 'Hybrid (Both)', icon: Sparkles },
    { id: 'otro', label: isEs ? 'No estoy seguro aún' : 'Uncertain / Custom', icon: HelpCircle },
  ];

  return (
    <div className="w-full flex flex-col">
      {/* Top Banner Header */}
      <div className="w-full bg-[#e8e3da] px-6 sm:px-10 lg:px-16 py-10 lg:py-14 brutal-border-b">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-3 h-3 bg-[#e63b2e]"></span>
              <span className="font-bold text-xs uppercase tracking-widest text-[#1a1a1a]">
                {isEs ? 'FICHA DE PRODUCCIÓN // BRIEF V25' : 'PRODUCTION TICKET // BRIEF V25'}
              </span>
              <span className="text-xs font-mono uppercase px-2 py-0.5 bg-white text-[#1a1a1a] font-bold brutal-border">
                {isEs ? 'ESTADO: RECEPCIÓN ACTIVA' : 'STATUS: ACTIVE RECEPTION'}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tighter text-[#1a1a1a] leading-[0.95]">
              {isEs ? 'Contacto & Brief Comercial' : 'Contact & Executive Brief'}
            </h1>

            <p className="text-base md:text-lg text-neutral-700 mt-6 leading-relaxed max-w-2xl">
              {isEs
                ? 'Conversemos tu proyecto. Cuéntanos el objetivo, el tipo de pieza o evento y el plazo estimado. Te responderemos con una ruta clara de producción y tiempos realistas. Si prefieres, escríbenos directo por WhatsApp o correo y coordinamos una llamada corta.'
                : 'Let’s discuss your project. Outline your objective, project type, and tentative timeline. We will respond with a defined production roadmap and audited costs. Alternatively, reach out via WhatsApp or email for a direct call.'}
            </p>
          </div>

          <div className="p-6 bg-white max-w-sm w-full brutal-border brutal-shadow">
            <div className="flex items-center gap-2 mb-2 text-[#e63b2e]">
              <Info size={18} />
              <span className="font-bold text-xs uppercase tracking-wider text-[#1a1a1a]">
                {isEs ? 'Guía de Ingreso para ONGs & Empresas' : 'Intake Guide for NGOs & Corps'}
              </span>
            </div>
            <p className="text-xs text-neutral-700 leading-relaxed">
              {isEs
                ? 'Completa los campos requeridos. Mientras más contexto compartas sobre aforos, fechas o TDRs, mayor precisión tendrá la propuesta preliminar.'
                : 'Complete the required fields. Sharing detailed capacity requirements, dates, or RFPs allows us to deliver a highly accurate preliminary breakdown.'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid: Form + Sidebar */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Brief Form (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            {isSubmitted ? (
              <div className="p-8 sm:p-10 bg-[#1a1a1a] text-white brutal-border brutal-shadow-lg flex flex-col gap-6 animate-fadeIn">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ffcc00] text-[#1a1a1a] flex items-center justify-center font-bold text-xl brutal-border shrink-0">
                    ✓
                  </div>
                  <div className="space-y-2">
                    <span className="font-mono text-xs text-[#ffcc00] font-bold uppercase tracking-wider">
                      EXPEDIENTE GENERADO: {submissionId}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
                      {isEs ? '¡Requerimiento Recibido con Éxito!' : 'Requirement Successfully Received!'}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {isEs
                        ? `El brief ha sido asignado a nuestro productor ejecutivo. Te enviaremos una ruta técnica y desglose preliminar en menos de 24 horas hábiles al correo ${email || 'indicado'}.`
                        : `Your brief has been routed to our executive producer. We will issue a technical roadmap and preliminary breakdown within 24 business hours.`}
                    </p>
                  </div>
                </div>

                {/* Summary Card */}
                <div className="bg-neutral-900 p-6 brutal-border font-mono text-xs space-y-3">
                  <div className="flex justify-between border-b border-neutral-800 pb-2">
                    <span className="text-neutral-400">ORGANIZACIÓN / CLIENTE:</span>
                    <span className="text-white font-bold">{company || fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800 pb-2">
                    <span className="text-neutral-400">CATEGORÍA:</span>
                    <span className="text-[#ffcc00] font-bold uppercase">{category}</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-800 pb-2">
                    <span className="text-neutral-400">PRESUPUESTO SELECCIONADO:</span>
                    <span className="text-white font-bold">{budgetTier.toUpperCase()} ({currency})</span>
                  </div>
                  {files.length > 0 && (
                    <div className="flex justify-between border-b border-neutral-800 pb-2">
                      <span className="text-neutral-400">ARCHIVOS ADJUNTOS:</span>
                      <span className="text-white">{files.map((f) => f.name).join(', ')}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={`https://wa.me/51989342110?text=Hola%20Grupo%20Lares,%20acabo%20de%20enviar%20el%20brief%20${submissionId}%20a%20nombre%20de%20${encodeURIComponent(company || fullName)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-[#ffcc00] text-[#1a1a1a] font-bold text-xs uppercase tracking-wider brutal-border hover:bg-white transition-colors flex items-center gap-2"
                  >
                    <PhoneCall size={14} />
                    <span>{isEs ? 'Confirmar vía WhatsApp Directo' : 'Confirm via Direct WhatsApp'}</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="px-6 py-3.5 bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider brutal-border hover:bg-neutral-700 transition-colors"
                  >
                    {isEs ? 'Enviar otro requerimiento' : 'Submit Another Request'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                {/* 01. Quién eres */}
                <section className="bg-white p-6 sm:p-8 brutal-border brutal-shadow">
                  <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#1a1a1a] -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 p-6 bg-[#eee9e0]">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 bg-[#1a1a1a] text-white font-bold text-xs flex items-center justify-center">
                        01
                      </span>
                      <h2 className="font-bold text-lg uppercase tracking-tight text-[#1a1a1a]">
                        {isEs ? 'Quién eres' : 'Who You Are'}
                      </h2>
                    </div>
                    <span className="font-mono text-xs text-neutral-500 font-bold">REQUERIDO</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1">
                      <label className="font-bold text-xs uppercase tracking-wider text-[#1a1a1a]">
                        {isEs ? 'Nombre Completo *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Ej. Camila Morales"
                        className="bg-[#f2ede5] p-3 text-sm text-[#1a1a1a] brutal-border focus:bg-white focus:outline-none placeholder:text-neutral-500"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-bold text-xs uppercase tracking-wider text-[#1a1a1a]">
                        {isEs ? 'Empresa / ONG / Institución *' : 'Company / NGO / Institution *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Ej. Ministerio de Cultura / WWF / CWE Corp"
                        className="bg-[#f2ede5] p-3 text-sm text-[#1a1a1a] brutal-border focus:bg-white focus:outline-none placeholder:text-neutral-500"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-bold text-xs uppercase tracking-wider text-[#1a1a1a]">
                        {isEs ? 'Correo Corporativo / Institucional *' : 'Corporate Email *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="camila@empresa.com"
                        className="bg-[#f2ede5] p-3 text-sm text-[#1a1a1a] brutal-border focus:bg-white focus:outline-none placeholder:text-neutral-500"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-bold text-xs uppercase tracking-wider text-[#1a1a1a]">
                        {isEs ? 'Teléfono / WhatsApp *' : 'Phone / WhatsApp *'}
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+51 987 654 321"
                        className="bg-[#f2ede5] p-3 text-sm text-[#1a1a1a] brutal-border focus:bg-white focus:outline-none placeholder:text-neutral-500"
                      />
                    </div>
                  </div>
                </section>

                {/* 02. Qué necesitas */}
                <section className="bg-white p-6 sm:p-8 brutal-border brutal-shadow">
                  <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#1a1a1a] -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 p-6 bg-[#eee9e0]">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 bg-[#1a1a1a] text-white font-bold text-xs flex items-center justify-center">
                        02
                      </span>
                      <h2 className="font-bold text-lg uppercase tracking-tight text-[#1a1a1a]">
                        {isEs ? 'Qué necesitas' : 'What You Need'}
                      </h2>
                    </div>
                    <span className="font-mono text-xs text-neutral-500 font-bold">CATEGORÍA</span>
                  </div>

                  <p className="text-xs text-neutral-600 mb-5">
                    {isEs
                      ? 'Elige el tipo de requerimiento principal para desplegar los detalles técnicos específicos:'
                      : 'Choose your core requirement type to expand technical specifics:'}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {serviceCategories.map((item) => {
                      const IconComp = item.icon;
                      const isSelected = category === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setCategory(item.id)}
                          className={`p-3 text-left brutal-border transition-all flex flex-col justify-between h-24 ${
                            isSelected
                              ? 'bg-[#1a1a1a] text-white shadow-[4px_4px_0px_0px_#ffcc00]'
                              : 'bg-[#f2ede5] text-[#1a1a1a] hover:bg-[#e8e3da]'
                          }`}
                        >
                          <span className="font-bold text-xs uppercase tracking-wider leading-tight">
                            {item.label}
                          </span>
                          <IconComp
                            size={20}
                            className={isSelected ? 'text-[#ffcc00]' : 'text-neutral-600'}
                          />
                        </button>
                      );
                    })}
                  </div>

                  {/* Dynamic Subpanel: Evento */}
                  {(category === 'evento' || category === 'artistica' || category === 'hibrido') && (
                    <div className="mt-8 p-6 bg-[#eee9e0] brutal-border animate-fadeIn">
                      <div className="flex items-center gap-2 mb-4 font-bold text-sm uppercase tracking-wide text-[#1a1a1a]">
                        <Calendar size={18} className="text-[#e63b2e]" />
                        <span>Detalles de Producción de Evento & Escenario</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                          <label className="font-bold text-xs uppercase text-[#1a1a1a]">
                            Fecha Tentativa
                          </label>
                          <input
                            type="date"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                            className="bg-white p-3 text-xs text-[#1a1a1a] brutal-border focus:outline-none"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-bold text-xs uppercase text-[#1a1a1a]">
                            Ciudad / Locación Prevista
                          </label>
                          <input
                            type="text"
                            value={eventLocation}
                            onChange={(e) => setEventLocation(e.target.value)}
                            placeholder="Ej. Lima - Gran Teatro Nacional o Plaza Pública"
                            className="bg-white p-3 text-xs text-[#1a1a1a] brutal-border focus:outline-none"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-bold text-xs uppercase text-[#1a1a1a]">
                            Aforo Aproximado
                          </label>
                          <select
                            value={eventCapacity}
                            onChange={(e) => setEventCapacity(e.target.value)}
                            className="bg-white p-3 text-xs text-[#1a1a1a] brutal-border focus:outline-none"
                          >
                            <option>Menos de 100 personas</option>
                            <option>100 a 500 personas</option>
                            <option>500 a 2,000 personas</option>
                            <option>Más de 2,000 personas (Masivo con INDECI)</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-bold text-xs uppercase text-[#1a1a1a]">
                            Tipo de Montaje
                          </label>
                          <select className="bg-white p-3 text-xs text-[#1a1a1a] brutal-border focus:outline-none">
                            <option>Gala Institucional / Protocolar</option>
                            <option>Festival Artístico Masivo</option>
                            <option>Concierto Sinfónico / Teatral</option>
                            <option>Cumbre Binacional / Diplomática</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Dynamic Subpanel: Audiovisual */}
                  {(category === 'audiovisual' || category === 'institucional' || category === 'hibrido') && (
                    <div className="mt-8 p-6 bg-[#eee9e0] brutal-border animate-fadeIn">
                      <div className="flex items-center gap-2 mb-4 font-bold text-sm uppercase tracking-wide text-[#1a1a1a]">
                        <Film size={18} className="text-[#0055ff]" />
                        <span>Especificaciones Técnicas Audiovisuales</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1">
                          <label className="font-bold text-xs uppercase text-[#1a1a1a]">
                            Tipo de Pieza Audiovisual
                          </label>
                          <select
                            value={filmType}
                            onChange={(e) => setFilmType(e.target.value)}
                            className="bg-white p-3 text-xs text-[#1a1a1a] brutal-border focus:outline-none"
                          >
                            <option>Video Institucional / Obra de Ingeniería</option>
                            <option>Spot Comercial TV / Cine 4K</option>
                            <option>Documental de Impacto Social / ODS</option>
                            <option>Cápsulas para Redes (9:16 + 1:1)</option>
                            <option>Registro Multicámara en Vivo</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="font-bold text-xs uppercase text-[#1a1a1a]">
                            Entregables Estimados
                          </label>
                          <input
                            type="text"
                            value={filmDeliverables}
                            onChange={(e) => setFilmDeliverables(e.target.value)}
                            placeholder="Ej. 1 Master 4K 5min + 3 versiones redes"
                            className="bg-white p-3 text-xs text-[#1a1a1a] brutal-border focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </section>

                {/* 03. Cuéntanos brevemente */}
                <section className="bg-white p-6 sm:p-8 brutal-border brutal-shadow">
                  <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#1a1a1a] -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 p-6 bg-[#eee9e0]">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 bg-[#1a1a1a] text-white font-bold text-xs flex items-center justify-center">
                        03
                      </span>
                      <h2 className="font-bold text-lg uppercase tracking-tight text-[#1a1a1a]">
                        {isEs ? 'Cuéntanos Brevemente' : 'Project Vision'}
                      </h2>
                    </div>
                    <span className="font-mono text-xs text-neutral-500 font-bold">VISIÓN</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-xs uppercase tracking-wider text-[#1a1a1a]">
                      {isEs
                        ? 'Objetivos, Retos o Concepto General *'
                        : 'Objectives, Challenges, or Core Concept *'}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={vision}
                      onChange={(e) => setVision(e.target.value)}
                      placeholder={
                        isEs
                          ? 'Explícanos tu proyecto, objetivos institucionales, visión artística o retos logísticos. Si ya cuentas con un TDR, guion o escaleta, menciónalo aquí...'
                          : 'Describe your project objectives, institutional scope, or technical constraints. If you have an RFP or script draft, mention it here...'
                      }
                      className="bg-[#f2ede5] p-4 text-sm text-[#1a1a1a] brutal-border focus:bg-white focus:outline-none resize-none placeholder:text-neutral-500"
                    ></textarea>
                    <div className="flex justify-between items-center mt-1 text-xs font-mono text-neutral-500">
                      <span>Sé tan descriptivo o sintético como gustes.</span>
                      <span>{vision.length} caracteres</span>
                    </div>
                  </div>
                </section>

                {/* 04. Datos útiles y adjuntos */}
                <section className="bg-white p-6 sm:p-8 brutal-border brutal-shadow">
                  <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#1a1a1a] -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 p-6 bg-[#eee9e0]">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 bg-[#1a1a1a] text-white font-bold text-xs flex items-center justify-center">
                        04
                      </span>
                      <h2 className="font-bold text-lg uppercase tracking-tight text-[#1a1a1a]">
                        {isEs ? 'Presupuesto & Archivos' : 'Budget & Files'}
                      </h2>
                    </div>
                    <span className="font-mono text-xs text-neutral-500 font-bold">PRESUPUESTO</span>
                  </div>

                  <div className="flex flex-col gap-8">
                    {/* Currency and Tiers */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="font-bold text-xs uppercase tracking-wider text-[#1a1a1a]">
                          Rango de Presupuesto Estimado
                        </label>
                        <div className="inline-flex bg-[#eee9e0] p-1 brutal-border text-xs font-mono">
                          <button
                            type="button"
                            onClick={() => setCurrency('USD')}
                            className={`px-3 py-1 font-bold ${
                              currency === 'USD'
                                ? 'bg-[#1a1a1a] text-white'
                                : 'text-[#1a1a1a] hover:bg-neutral-200'
                            }`}
                          >
                            USD ($)
                          </button>
                          <button
                            type="button"
                            onClick={() => setCurrency('PEN')}
                            className={`px-3 py-1 font-bold ${
                              currency === 'PEN'
                                ? 'bg-[#1a1a1a] text-white'
                                : 'text-[#1a1a1a] hover:bg-neutral-200'
                            }`}
                          >
                            PEN (S/.)
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { id: 'tier1', label: 'TIER 01', usd: '< $5,000', pen: '< S/. 18,000' },
                          { id: 'tier2', label: 'TIER 02', usd: '$5k - $15k', pen: 'S/. 18k - 55k' },
                          { id: 'tier3', label: 'TIER 03', usd: '$15k - $40k', pen: 'S/. 55k - 150k' },
                          { id: 'tier4', label: 'TIER 04', usd: '> $40,000', pen: '> S/. 150,000' },
                        ].map((t) => (
                          <label
                            key={t.id}
                            className={`p-3 brutal-border cursor-pointer flex flex-col justify-between text-left transition-colors ${
                              budgetTier === t.id
                                ? 'bg-[#1a1a1a] text-white shadow-[3px_3px_0px_0px_#ffcc00]'
                                : 'bg-[#f2ede5] text-[#1a1a1a] hover:bg-[#e8e3da]'
                            }`}
                          >
                            <input
                              type="radio"
                              name="tier"
                              checked={budgetTier === t.id}
                              onChange={() => setBudgetTier(t.id)}
                              className="sr-only"
                            />
                            <span className="font-mono text-xs font-bold opacity-80">{t.label}</span>
                            <span className="font-bold text-sm mt-2">
                              {currency === 'USD' ? t.usd : t.pen}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* File Attachment Dropzone */}
                    <div>
                      <label className="font-bold text-xs uppercase tracking-wider text-[#1a1a1a] block mb-2">
                        {isEs
                          ? 'Adjuntar Archivos / Brief / TDR / Moodboard (Opcional)'
                          : 'Attach RFP / TDR / Moodboard (Optional)'}
                      </label>
                      <div className="border-2 border-dashed border-[#1a1a1a] bg-[#f2ede5] p-8 text-center flex flex-col items-center justify-center hover:bg-[#eee9e0] transition-colors group">
                        <Upload size={32} className="text-neutral-500 group-hover:text-[#1a1a1a] mb-2" />
                        <p className="font-bold text-sm uppercase tracking-wide text-[#1a1a1a]">
                          {isEs ? 'Arrastra tus archivos aquí o haz clic' : 'Drop your files here or click to browse'}
                        </p>
                        <p className="text-xs text-neutral-500 mt-1 font-mono">
                          Formatos: PDF, DOCX, ZIP, MP4, Keynote (Hasta 50MB)
                        </p>
                        <input
                          type="file"
                          multiple
                          onChange={handleFileUpload}
                          className="hidden"
                          id="file-upload-input"
                        />
                        <button
                          type="button"
                          onClick={() => document.getElementById('file-upload-input')?.click()}
                          className="mt-4 px-4 py-2 bg-white text-[#1a1a1a] font-bold text-xs uppercase tracking-wider brutal-border hover:bg-[#ffcc00]"
                        >
                          {isEs ? 'Seleccionar Documentos' : 'Select Files'}
                        </button>
                      </div>

                      {/* File List */}
                      {files.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2 font-mono text-xs">
                          {files.map((f, i) => (
                            <div
                              key={i}
                              className="px-3 py-1.5 bg-white brutal-border flex items-center gap-2"
                            >
                              <FileText size={14} className="text-[#e63b2e]" />
                              <span className="text-[#1a1a1a] font-bold">{f.name}</span>
                              <span className="text-neutral-500">({f.size})</span>
                              <button
                                type="button"
                                onClick={() => removeFile(i)}
                                className="text-neutral-400 hover:text-[#e63b2e]"
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </section>

                {/* Submit Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={28} className="text-[#e63b2e] shrink-0" />
                    <span className="text-xs text-neutral-600 leading-tight max-w-sm">
                      Información estrictamente confidencial bajo política de producción y compliance de Grupo Lares.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-5 bg-[#1a1a1a] text-white font-bold text-sm uppercase tracking-widest brutal-border brutal-shadow-yellow hover:bg-[#ffcc00] hover:text-[#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#1a1a1a] transition-all flex items-center justify-center gap-3"
                  >
                    <span>{isEs ? 'Hagámoslo posible' : 'Submit Technical Brief'}</span>
                    <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar Channels & Operations Base (4 Cols) */}
          <aside className="lg:col-span-4 flex flex-col gap-8">
            {/* Direct Channels */}
            <div className="bg-white p-6 sm:p-8 brutal-border brutal-shadow flex flex-col gap-6">
              <div className="border-b-2 border-[#1a1a1a] pb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#e63b2e] block mb-1">
                  {isEs ? 'RUTA INMEDIATA' : 'DIRECT DESK'}
                </span>
                <h3 className="font-bold text-xl uppercase tracking-tight text-[#1a1a1a]">
                  {isEs ? 'Canales Directos' : 'Direct Channels'}
                </h3>
              </div>

              <p className="text-xs text-neutral-600 leading-relaxed">
                {isEs
                  ? '¿Requieres asistencia urgente, scouting veloz o contratación directa de equipamiento? Comunícate por nuestras líneas dedicadas:'
                  : 'Require urgent assistance, swift location scouting, or direct equipment booking? Contact our dedicated lines:'}
              </p>

              <div className="flex flex-col gap-3 font-mono">
                <a
                  href="mailto:contacto@grupolares.pe"
                  className="p-4 bg-[#f2ede5] brutal-border hover:bg-[#1a1a1a] hover:text-white transition-all group flex items-start gap-3"
                >
                  <Mail size={20} className="text-[#1a1a1a] group-hover:text-[#ffcc00] mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-500 group-hover:text-white block">
                      Correo Institucional
                    </span>
                    <span className="text-xs font-bold text-[#1a1a1a] group-hover:text-white">
                      contacto@grupolares.pe
                    </span>
                  </div>
                </a>

                <a
                  href="https://wa.me/51989342110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#f2ede5] brutal-border hover:bg-[#1a1a1a] hover:text-white transition-all group flex items-start gap-3"
                >
                  <PhoneCall size={20} className="text-[#1a1a1a] group-hover:text-[#ffcc00] mt-0.5" />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-neutral-500 group-hover:text-white block">
                      WhatsApp Producción
                    </span>
                    <span className="text-xs font-bold text-[#1a1a1a] group-hover:text-white">
                      +51 989 342 110
                    </span>
                  </div>
                </a>
              </div>

              <div className="p-4 bg-[#eee9e0] brutal-border flex flex-col gap-1 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#1a1a1a] font-bold">
                  <Clock size={13} />
                  <span className="uppercase text-[11px]">Horario de Atención</span>
                </div>
                <p className="text-neutral-600 text-[11px]">
                  Lunes a Viernes<br />
                  09:00 — 18:00 (GMT-5, Lima, PE)
                </p>
              </div>
            </div>

            {/* Studio Central Hub */}
            <div className="bg-white p-6 sm:p-8 brutal-border brutal-shadow flex flex-col gap-6">
              <div className="border-b-2 border-[#1a1a1a] pb-4 flex justify-between items-end">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500 block mb-1">
                    HUB CENTRAL
                  </span>
                  <h3 className="font-bold text-xl uppercase tracking-tight text-[#1a1a1a]">
                    Estudios Lares
                  </h3>
                </div>
                <span className="font-mono text-xs text-neutral-500 font-bold">LIMA 04</span>
              </div>

              <div className="w-full h-40 bg-[#eee9e0] brutal-border flex items-center justify-center relative overflow-hidden">
                <div className="relative z-10 bg-white p-3 text-center brutal-border brutal-shadow">
                  <span className="font-bold text-xs uppercase tracking-wider block text-[#1a1a1a]">
                    Av. Pedro de Osma 301
                  </span>
                  <span className="font-mono text-[10px] text-neutral-600">
                    Barranco, Lima — Perú
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-neutral-600 border-t border-neutral-300 pt-3">
                <span>UNIDAD MÓVIL DISPONIBLE:</span>
                <span className="text-[#e63b2e] font-bold uppercase">24/7 EN RODAJE</span>
              </div>
            </div>

            {/* 24h SLA Indicator */}
            <div className="bg-[#ffcc00] p-6 brutal-border brutal-shadow text-[#1a1a1a] flex flex-col gap-2">
              <div className="flex items-baseline justify-between">
                <span className="font-bold text-3xl">&lt; 24h</span>
                <span className="font-mono text-xs font-bold uppercase">SLA RESPUESTA</span>
              </div>
              <p className="font-bold text-xs uppercase tracking-wider">
                Tiempo Promedio de Cotización
              </p>
              <p className="text-xs text-neutral-800 leading-relaxed">
                Entregamos desglose por partidas presupuestarias y hoja de ruta en el primer contacto.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
