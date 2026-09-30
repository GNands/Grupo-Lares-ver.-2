import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Grupo Lares • Producción Cinematográfica & Artística | Wiñaypaq & Cinema Pro',
  description: 'Dossier y portafolio de producción para empresas de alto nivel, organismos internacionales, ministerios y ONGs. Dirección escénica, eventos masivos y cinematografía 4K.',
  openGraph: {
    title: 'Grupo Lares • Producción Cinematográfica & Artística',
    description: 'Donde los demás ven imposibles, nosotros vemos caminos. Producción artística y audiovisual para crear experiencias memorables.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grupo Lares • Producción Cinematográfica & Artística',
    description: 'Donde los demás ven imposibles, nosotros vemos caminos. Producción artística y audiovisual para crear experiencias memorables.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body suppressHydrationWarning className="bg-[#f5f0e8] text-[#1a1a1a] antialiased selection:bg-[#ffcc00] selection:text-[#1a1a1a]">
        {children}
      </body>
    </html>
  );
}
