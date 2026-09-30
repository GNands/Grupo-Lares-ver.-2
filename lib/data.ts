export interface ProjectDossier {
  id: string;
  code: string;
  division: string;
  divisionTag: 'winaypaq' | 'cinemapro' | 'hybrid';
  title: string;
  subtitle: string;
  client: string;
  location: string;
  year: string;
  categories: string[];
  image: string;
  imageAlt: string;
  metrics: {
    label: string;
    value: string;
  };
  objectives: string;
  solution: string;
  role: string;
  deliverables: string[];
  impact: string;
  specs: {
    format: string;
    audio: string;
    crew: string;
  };
}

export const PROJECTS_DATA: ProjectDossier[] = [
  {
    id: 'chimango',
    code: 'REF: WPAQ-GTN-01',
    division: 'Wiñaypaq Live Experience & Gran Formato',
    divisionTag: 'winaypaq',
    title: 'Bodas de Oro: Andrés Chimango Lares',
    subtitle: 'Producción integral del espectáculo escénico más trascendente del violín andino',
    client: 'Juan Andrés Lares León & Asociación Cultural',
    location: 'Gran Teatro Nacional (Lima)',
    year: 'Mayo 2025',
    categories: ['winaypaq', 'cultura', 'escena'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCniqPO8AeGJJaGkvs0mAazPh4Oa1m5WY_7mTiC09vFLG072RwZtFOyb6GeL1FJCwSslj3WEjt4mUJic-U8JMejiJj_cguQUkXI4LgbzB4XniJjGZIoHZsHHM-q3cJTY6-c19FcG478trWNnQzvUS2l9ku2pC_yaLoq53bfGsJ-6Nsbzgo4EDmGVS6Ar9mfA9NtELigMk7U_kSQTUhO3BXFbQ0svjLtCyjZPqwO9RlhSKeO5F9ij435',
    imageAlt: 'Grand stage at Gran Teatro Nacional, monumental theatrical stage design with warm tungsten theatrical lighting, dramatic haze, classical and folk Andean instruments, professional symphonic orchestra arrangement under high contrast spotlight',
    metrics: {
      label: 'ESPECTADORES SALA',
      value: '1,400 SOLD OUT',
    },
    objectives: 'Conmemorar 50 años de trayectoria artística del maestro del violín andino en el escenario de mayor exigencia técnica del país, integrando tradición vernácula con una orquesta sinfónica y lenguaje escénico contemporáneo.',
    solution: 'Diseño y montaje de rider acústico multicanal con microfonía DPA 4099 para 32 cuerdas tradicionales, escenografía cinética de tres niveles, visuales reactivas y sincronización lumínica timecode para 24 cuadros musicales.',
    role: 'Producción ejecutiva e integral, stage management militar, dirección técnica audiovisual, diseño escenográfico, coordinación de aforos de prensa y protocolo de Estado.',
    deliverables: [
      'Rider técnico y planos de escenario certificados por el Gran Teatro Nacional',
      'Dirección de escena y regiduría con timecode en tiempo real',
      'Registro multicámara 4K en vivo (6 cámaras cine) para archivo patrimonial nacional',
      'Escenografía modular monumental construida y desmontada en tiempo récord (4 horas)',
      'Master de audio 5.1 surround y estéreo para lanzamiento discográfico conmemorativo'
    ],
    impact: 'Aforo agotado al 100% en las dos funciones oficiales. Cobertura televisiva en cadena nacional (TV Perú) y estreno de largometraje documental en festivales internacionales.',
    specs: {
      format: 'Live Stage + Multicam 4K RAW',
      audio: 'DPA 4099 + L-Acoustics K2 5.1',
      crew: '48 técnicos y 85 artistas en escena',
    },
  },
  {
    id: 'festiafro',
    code: 'REF: MINCUL-AFRO-02',
    division: 'Wiñaypaq • Logística y Espacio Público',
    divisionTag: 'winaypaq',
    title: 'FestiAfro 2025 — Nicomedes Santa Cruz',
    subtitle: 'Infraestructuras y logística técnica integral para congregación masiva en espacio urbano',
    client: 'Dirección de Políticas para Población Afroperuana – Ministerio de Cultura',
    location: 'Plaza Manco Cápac (La Victoria, Lima)',
    year: 'Julio 2025',
    categories: ['winaypaq', 'institucional', 'cultura'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS4ko9KrnDuJKi_NMk2bUuPE0R47gQ1eWFxwDfn2ok6Olz538JLHjIRvn7G2GVsie0yLfJOqgnqNcm3aQtks2gXXFYidgCJ1b9l6l_YkDz0YqMSLimdABWpD5Oj3g0tkAJp4oVlirXoFOij7tNpPW_90OmrKiCS8xV9QvbEfM3zLoTtpiJ1zRdEmLAGZJwUji-PpbRVkVeiqzOobNe3l60tPeZ2xooa8BCuTw-B-IVvpDLuKNd7X1-',
    imageAlt: 'Massive public festival stage at Plaza Manco Capac Lima, energetic Afro-Peruvian musical ensemble with cajones, heavy concert truss structures, large LED screens, warm sunlight transitioning to evening stage spotlights, vibrant crowd view',
    metrics: {
      label: 'CONCURRENCIA TOTAL',
      value: '14,500 ASISTENTES',
    },
    objectives: 'Reunir a más de 10,000 personas en espacio público urbano garantizando cero incidentes de seguridad ciudadana, sonido line-array uniforme en 360 grados y transmisión federal ininterrumpida.',
    solution: 'Instalación de escenario techado heavy-duty de 18x14m, torres de relevo acústico retardadas con cálculo EASE, pantallas LED P3 de alto brillo (6,500 nits) y unidad móvil broadcast con fibra óptica directa.',
    role: 'Infraestructuras masivas de tarimas y truss, intendencia logística, planes de contingencia INDECI aprobados y dirección de cobertura audiovisual en tiempo real.',
    deliverables: [
      'Escenario estructural de 250 m² certificado con memorias de cálculo estructural',
      'Plan integral de seguridad, rutas de evacuación y ambulancias aprobado por Defensa Civil',
      'Transmisión streaming multicanal sin latencia con 5 cámaras por fibra óptica',
      'Cápsula audiovisual resumen institucional de 3 minutos para el despacho ministerial',
      'Reporte de aforo auditado con analítica de flujo de asistentes'
    ],
    impact: 'Concurrencia calculada de 14,500 personas sin incidentes operativos ni retrasos en la escaleta. Alcance orgánico del streaming superior a 80,000 reproducciones simultáneas en plataformas públicas.',
    specs: {
      format: 'Outdoor Stage 18x14m + Broadcast Live',
      audio: 'Line Array D&B Audiotechnik + Torres Relevo',
      crew: '36 especialistas de campo + 14 ingenieros de broadcast',
    },
  },
  {
    id: 'huaycoloro',
    code: 'REF: CWE-HUAY-03',
    division: 'Cinema Pro • Corporativo & Obra Mayor',
    divisionTag: 'cinemapro',
    title: 'Un río para el futuro: Huaycoloro',
    subtitle: 'Video corporativo cinematográfico de entrega de obra para corporación china estatal',
    client: 'CWE (China International Water & Electric Corp.)',
    location: 'Lurigancho-Chosica (Lima Este)',
    year: 'Octubre 2024',
    categories: ['cinemapro', 'institucional', 'corporativo'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO2Xmo0DlpRBBXulMsudAhK_EfddeDUEJVxwcveKUol7yIOUHLywlCUOtd4-m2f4iASmVk60-dYqLOam6iNtyxDvhT2_8trADnk0AxgHB59N8zlfCYvym1KzZEg-wpb3gIbqBCgBCAHKuWrPseAgsnrk6bDXSq7by4iMWixocBDr0wgfTxpxkX8-9N8CZdDgUqCEf988z6n59FRxi-8_U9N5WmLEfVu0hIY7WR9Hp6UHQQriPc1mMg',
    imageAlt: 'High-end cinematic industrial documentary frame, large concrete hydro-engineering water channel project in Lurigancho Chosica Peru, professional 4k aerial drone view with dramatic morning sunlight, technical grading, international civil engineering scale',
    metrics: {
      label: 'ESTÁNDAR DE ENTREGA',
      value: '4K BILINGÜE / 3 IDIOMAS',
    },
    objectives: 'Documentar con rigor técnico y narrativa visual épica la culminación de la solución integral de la Quebrada Huaycoloro para su entrega formal al Estado Peruano y la junta directiva en Pekín.',
    solution: 'Producción audiovisual con sensores full-frame (RED V-Raptor 8K), escaneo volumétrico con drones certificados DGAC, animación 3D de hidrodinámica del caudal y guión locutado en español, inglés y mandarín.',
    role: 'Conceptualización narrativa, diseño de guión técnico, filmación de campo con protocolos minero-civiles de alto riesgo, edición offline/online, colorimetría en DaVinci Resolve.',
    deliverables: [
      'Video institucional master de 7 minutos en 4K UHD ProRes 4444',
      'Versiones subtituladas y locutadas profesionalmente en español, inglés y mandarín',
      '3 cápsulas sintéticas de 60 segundos optimizadas para LinkedIn corporativo y prensa',
      'Banco de fotografía aérea en 50MP para la memoria anual institucional y reportes a accionistas',
      'Infografía animada 3D del funcionamiento de las compuertas desarenadoras'
    ],
    impact: 'Aprobación unánime sin observaciones por la directiva internacional en Pekín; proyectado en la ceremonia de inauguración ante ministros de Estado y transmitido en foros binacionales.',
    specs: {
      format: 'RED V-Raptor 8K + Dron DJI Inspire 3 RAW',
      audio: 'Diseño Sonoro 5.1 + Foley Industrial + Locución Trilingüe',
      crew: 'Unidad móvil de rodaje industrial (12 operadores certificados SCTR)',
    },
  },
  {
    id: 'sinfonia',
    code: 'REF: WPAQ-EXP-04',
    division: 'Wiñaypaq • Acústica & Artes Escénicas',
    divisionTag: 'winaypaq',
    title: 'Sinfonía Andina Contemporánea',
    subtitle: 'Dirección luminotécnica, rider técnico especializado y stage management para ensamble internacional',
    client: 'Alianza Francesa & Embajada de Francia en el Perú',
    location: 'Auditorio Principal AF (Miraflores, Lima)',
    year: 'Noviembre 2024',
    categories: ['winaypaq', 'cultura', 'diplomatico'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh73zFhIzKcGDKuO0bYUkSdbeiWijl5aAMipJ88ke4ot-uFRm2kr_kLMkK-OwHGs5c-6DYibXewAeB5jJp5aRsjk6eCWAx7Ku3ntlZyDiCD6ok4w9cJZeLge7xjMMkur1-acB5Y4pm8MOtl2oILJos0cTpvD_RzUQ8hwV67_qLqdwXgrMx3VjhBh4yEyAj2mBNwq2RzdJLhIbiwwb3PqIBwhnvpeW5A0QhRO4yKyr7VTykNnG7tcmH',
    imageAlt: 'Chamber orchestra concert lighting rig, deep theatrical blue and crimson backlight highlighting solo violinists and native Andean instruments, elegant architectural acoustics hall, minimal contemporary stage setup',
    metrics: {
      label: 'CALIFICACIÓN TÉCNICA',
      value: '100% CONFORMIDAD DIPLOMÁTICA',
    },
    objectives: 'Lograr una experiencia de inmersión sensorial equilibrando instrumentos orquestales europeos (violonchelos, maderas) con instrumentos aerófonos andinos de afinación tradicional no temperada.',
    solution: 'Configuración acústica electroacústica de ultra-alta fidelidad, microfonía de condensador miniatura no invasiva y diseño luminotécnico dinámico en paleta ocre-añil sincronizado con los movimientos de la partitura.',
    role: 'Ingeniería de sala (FOH), cálculo de dispersión acústica, diseño luminotécnico teatral y coordinación de stage management para 28 músicos en escena.',
    deliverables: [
      'Plot luminotécnico en 3D aprobado por la dirección cultural francesa',
      'Grabación multipista de 32 canales a 96kHz / 24bit para archivo discográfico',
      'Master de audio estéreo y Dolby Atmos para plataformas digitales internacionales',
      'Memoria fotográfica editorial de alta gama para dossier diplomático bilateral'
    ],
    impact: 'Calificación de excelencia técnica por la delegación cultural europea y firma de convenio para réplica de la gira en las ciudades de Arequipa y Cusco.',
    specs: {
      format: 'Chamber Concert + High Resolution Multi-track',
      audio: 'Neumann & Schoeps Mics + SSL Live Console',
      crew: 'Equipo de acústica y stage management (14 técnicos)',
    },
  },
  {
    id: 'sostenibilidad',
    code: 'REF: CINE-SUST-05',
    division: 'Cinema Pro • Docu-Narrativa & ODS',
    divisionTag: 'cinemapro',
    title: 'Campaña Sostenibilidad Hidroenergética',
    subtitle: 'Serie documental institucional y spots de alto impacto para distribución en canales corporativos globales',
    client: 'Corporación Energética Internacional / Fondo de Conservación',
    location: 'Cuenca Central del Mantaro (4,200 msnm)',
    year: 'Agosto 2024',
    categories: ['cinemapro', 'institucional', 'ongs'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk--WD1RL2rwA5XopwWloiQFmgx8PPe7omdgNQX-5eCnGNY6A7subOjMUjdSdau5tk_ah1Vd0RujIZENr-lG8EnfiOV0wcK0dXFw6uAmBwZp0oco3LmXom6Q6v9muiy8MFzIfAD2AW7H3DicfFu9Eph6K0t3cP0TUqeHYmbz7PHQ3zGmwLIWYf3A4ESGiZ_aubk70p6Z6AAShGm79U6pRjLML4B2VWFGJk0iT-y517-N6A01NdzYfI',
    imageAlt: 'High-contrast cinematography film shoot, camera crew operating cinema camera with matte box in front of roaring hydroelectric dam reservoir spillway, crisp morning mist, authentic cinematic color grade with bold teal and amber tones',
    metrics: {
      label: 'ENGAGEMENT AUDIENCIA',
      value: '+320% RETENCIÓN EN REDES',
    },
    objectives: 'Visibilizar el programa de remediación ambiental y convivencia armónica con comunidades campesinas altoandinas mediante historias humanas reales con óptica cinematográfica.',
    solution: 'Unidad ligera de filmación documental con baterías solares para autonomía en alta montaña, óptica anamórfica, sonido directo para testimonios bilingües (quechua y español) y etalonaje orgánico de cine.',
    role: 'Investigación periodística y antropológica de campo, scouting de personajes comunitarios, rodaje en alta montaña, montaje narrativo y diseño sonoro envolvente.',
    deliverables: [
      'Mini-documental central de 12 minutos en resolución 4K HDR',
      '6 micro-historias de 60 segundos optimizadas para formatos 9:16 (Reels/TikTok) y 16:9 (Web)',
      'Guía de estilo visual y banco de recursos para uso corporativo internacional',
      'Carpeta legal completa de cesión de derechos de imagen y consentimientos informados'
    ],
    impact: 'Superó los objetivos de la corporación con un incremento del 320% en engagement digital frente a campañas previas. Premio regional a la comunicación de sostenibilidad.',
    specs: {
      format: 'Sony FX9 + Ópticas Anamórficas Atlas Orion',
      audio: 'Sound Devices Direct Sound + Micrófonos Sennheiser MKH 416',
      crew: 'Unidad de rodaje de altura con médico y guía local (8 personas)',
    },
  },
  {
    id: 'gala-cooperacion',
    code: 'REF: WPAQ-CINE-06',
    division: 'Solución Híbrida • Wiñaypaq & Cinema Pro',
    divisionTag: 'hybrid',
    title: 'Gala Binacional de Cooperación & Desarrollo',
    subtitle: 'Acontecimiento escénico de gala diplomática y cobertura cinematográfica en tiempo real',
    client: 'Organismo Internacional de Cooperación & Embajadas Aliadas',
    location: 'Casona Patrimonial & Centro de Convenciones de Lima',
    year: 'Diciembre 2024',
    categories: ['winaypaq', 'cinemapro', 'institucional', 'diplomatico', 'ongs'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2cX4H2XHv6Ew6X11DLoBMBVHdpTglSk-jV1asVjHdpXQMXldzdW6xR3zorwJhZnjRsZ1fAPILrGp8uey2Rw6C7qF6LT7LX9cSQLj1RItciAEge4HqIxIgBFWCc-LsA3UKTlmWl-tnVXCwPVwNSHXKN2ezRVJvCE5AZsED_KbyJf4FjXaUs3o5-2gyF94yffPmXUcylOtckzbePwiAweZqduPILX58e11ByKsOB4Owgs66k-40HE-R',
    imageAlt: 'Diplomatic gala stage design in historic Peruvian mansion with architectural illumination, state flags, executive podium, cinematic camera rig on crane, high contrast warm lighting',
    metrics: {
      label: 'DELEGACIONES PRESENTES',
      value: '18 PAÍSES Y ONGs',
    },
    objectives: 'Celebrar el cierre del ciclo de cooperación bilateral para 450 dignatarios, embajadores y directores de ONGs, integrando protocolo diplomático estricto, arte escénico y registro cinematográfico confidencial.',
    solution: 'Despliegue unificado de Wiñaypaq (iluminación patrimonial no invasiva que protege muros históricos, tarimas de cristal y música de cámara) y Cinema Pro (grabación en 4K sin cables visibles, microfonía inalámbrica encriptada y entrega del aftermovie en menos de 12 horas).',
    role: 'Coordinación general de producción, enlace con seguridad diplomática, dirección artística escénica y entrega de piezas audiovisuales para cancillerías.',
    deliverables: [
      'Iluminación arquitectónica de bajo consumo sin perforación de muros históricos',
      'Transmisión cerrada y encriptada para cancillerías participantes en el exterior',
      'Aftermovie cinematográfico de 90 segundos entregado la misma noche a las 06:00 AM',
      'Álbum fotográfico diplomático impreso en papel libre de ácido para embajadores',
      'Auditoría técnica de consumo energético neutro en carbono'
    ],
    impact: 'Felicitación formal emitida por las delegaciones internacionales; modelo replicado para la cumbre regional de desarrollo 2025.',
    specs: {
      format: 'Dual Hybrid Pipeline: Architectural Stage + Cinema 4K',
      audio: 'Encriptación Shure Axient Digital + Monitoreo Discreto',
      crew: '24 especialistas con credenciales de seguridad internacional',
    },
  },
];

export interface ClientPartner {
  id: string;
  name: string;
  category: string;
  role: string;
  location: string;
  highlight: string;
}

export const CLIENTS_LIST: ClientPartner[] = [
  {
    id: 'mincul',
    name: 'MINISTERIO DE CULTURA',
    category: 'Gobierno / Estado Peruano',
    role: 'Producción masiva y transmisiones oficiales',
    location: 'Lima / Todo el país',
    highlight: 'FestiAfro y eventos de patrimonio inmaterial',
  },
  {
    id: 'cwe',
    name: 'CWE CORP (CHINA)',
    category: 'Ingeniería & Corporación Global',
    role: 'Videos corporativos de alta ingeniería e infraestructura',
    location: 'China / Latinoamérica',
    highlight: 'Obra monumental Quebrada Huaycoloro',
  },
  {
    id: 'gtn',
    name: 'GRAN TEATRO NACIONAL',
    category: 'Teatro de Ópera & Auditorio Mayor',
    role: 'Producción residente y conciertos sinfónicos',
    location: 'San Borja, Lima',
    highlight: 'Bodas de Oro y eventos de gala nacional',
  },
  {
    id: 'alianza',
    name: 'ALIANZA FRANCESA & EMBAJADAS',
    category: 'Diplomacia & Cooperación Cultural',
    role: 'Acústica, conciertos de cámara y diseño lumínico',
    location: 'Europa / Perú',
    highlight: 'Sinfonía Andina Contemporánea',
  },
  {
    id: 'munilima',
    name: 'MUNICIPALIDAD DE LIMA',
    category: 'Gestión Pública y Espacio Abierto',
    role: 'Eventos cívicos y festivales metropolitanos',
    location: 'Centro Histórico de Lima',
    highlight: 'Seguridad civil INDECI y aforos masivos',
  },
  {
    id: 'ongs',
    name: 'ORGANISMOS INTERNACIONALES & ONGs',
    category: 'Desarrollo, ODS y Sostenibilidad',
    role: 'Campañas documentales y galas binacionales',
    location: 'América Latina',
    highlight: 'Campaña Mantaro y Galas de Cooperación',
  },
];

export const TECHNICAL_VAULT = [
  {
    category: 'CÁMARAS & ÓPTICAS',
    division: 'CINEMA PRO',
    items: [
      { name: 'RED V-Raptor 8K VV', spec: 'Sensor Full Frame 8192 x 4320, 120fps en 8K RAW, 17+ stops rango dinámico.' },
      { name: 'Sony FX9 & FX6 Cinema Line', spec: 'Sensor Dual Base ISO, filtros ND electrónicos variables, autofoco híbrido veloz.' },
      { name: 'Set Ópticas Anamórficas Atlas Orion', spec: 'Look cinematográfico vintage con flares controlados y bokeh ovalado.' },
      { name: 'Dron DJI Inspire 3 X9-8K Air', spec: 'Cine aéreo full-frame en ProRes RAW y CinemaDNG, control dual piloto/operador.' },
    ],
  },
  {
    category: 'SONIDO & ACÚSTICA',
    division: 'WIÑAYPAQ / CINEMA',
    items: [
      { name: 'Microfonía Instrumental DPA 4099', spec: 'El estándar mundial para instrumentos de cuerda y viento tradicionales sin coloración.' },
      { name: 'Consola Digital DiGiCo SD12 / SSL Live', spec: 'Procesamiento a 96kHz, preamplificadores de grado broadcast y redundancia óptica.' },
      { name: 'Sistema Line Array L-Acoustics K2 & Kara', spec: 'Dispersión sonora precisa, control de fase y cobertura uniforme en salas y estadios.' },
      { name: 'Grabadores Sound Devices 888', spec: '16 pistas de grabación flotante de 32-bit para rodajes extremos en alta montaña.' },
    ],
  },
  {
    category: 'ESCENOGRAFÍA & ILUMINACIÓN',
    division: 'WIÑAYPAQ',
    items: [
      { name: 'Consola GrandMA3 Light & Command Wing', spec: 'Control de protocolos DMX512, Art-Net y sACN con sincronización timecode SMPTE.' },
      { name: 'Cabezas Móviles Robe & Ayrton Profile', spec: 'Óptica de alta precisión, cuchillas de recorte y temperaturas de color de 3200K a 6500K.' },
      { name: 'Estructuras de Truss Prolyte Heavy Duty', spec: 'Aluminio estructural europeo certificado TUV con memorias de cálculo firmadas.' },
      { name: 'Pantallas LED Unilumin P2.6 / P3.9 Outdoor', spec: 'Frecuencia de refresco a 3840Hz aptas para cámaras de cine sin efecto moiré.' },
    ],
  },
  {
    category: 'LOGÍSTICA & SEGURIDAD',
    division: 'ESTÁNDAR LARES',
    items: [
      { name: 'Pólizas de Responsabilidad Civil hasta $1,000,000', spec: 'Cobertura integral para locaciones patrimoniales protegidas y recintos masivos.' },
      { name: 'Grupos Electrógenos Insonorizados Duales', spec: 'Generación eléctrica autónoma con transferencia automática para cero cortes.' },
      { name: 'Protocolos de Evacuación y Defensa Civil INDECI', spec: 'Ingenieros de seguridad colegiados y supervisión médica presencial en todo evento.' },
      { name: 'Almacenamiento RAID In-House & Respaldo LTO', spec: 'Doble copia de seguridad en rodaje con verificación bit a bit MD5/SHA.' },
    ],
  },
];
