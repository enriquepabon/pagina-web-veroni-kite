import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Veroni Kite School | Escuela de Kitesurf en Salinas del Rey, Colombia',
    template: '%s | Veroni Kite School',
  },
  description:
    'Aprende kitesurf en Salinas del Rey, Colombia con los mejores instructores certificados. Cursos para principiantes y avanzados, alquiler de equipos y experiencias únicas en la costa caribeña.',
  keywords: [
    'kitesurf',
    'kiteboarding',
    'Salinas del Rey',
    'Colombia',
    'escuela de kitesurf',
    'clases de kitesurf',
    'alquiler equipos kitesurf',
    'kite school',
    'caribbean kitesurf',
  ],
  authors: [{ name: 'Veroni Kite School' }],
  creator: 'Veroni Kite School',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://veronikite.com',
    siteName: 'Veroni Kite School',
    title: 'Veroni Kite School | Escuela de Kitesurf en Salinas del Rey, Colombia',
    description:
      'Aprende kitesurf en Salinas del Rey, Colombia con los mejores instructores certificados.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veroni Kite School',
    description:
      'Aprende kitesurf en Salinas del Rey, Colombia con los mejores instructores certificados.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
