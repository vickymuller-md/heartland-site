import type { Metadata } from 'next';
import { Sora, Instrument_Serif, Geist } from 'next/font/google';
import { Masthead, Colophon } from '@heartland/ui';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-editorial',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const soraMono = Sora({
  subsets: ['latin'],
  variable: '--font-mono-editorial',
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://heartlandprotocol.org'),
  title: {
    default: 'HEARTLAND Protocol — Heart failure care for rural America',
    template: '%s · HEARTLAND Protocol',
  },
  description:
    'An evidence-based, peer-reviewed implementation framework and open-source toolkit for primary care-led heart failure management in rural and resource-limited U.S. settings.',
  openGraph: {
    title: 'HEARTLAND Protocol',
    description:
      'Heart failure Evidence-based Access in Rural Treatment, Linking Advanced Network Delivery.',
    url: 'https://heartlandprotocol.org',
    siteName: 'HEARTLAND Protocol',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEARTLAND Protocol',
    description: 'Heart failure care where there is no cardiologist.',
  },
  authors: [
    { name: 'Vicky Muller Ferreira, MD', url: 'https://orcid.org/0009-0009-1099-5690' },
  ],
  creator: 'Vicky Muller Ferreira, MD',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${instrumentSerif.variable} ${geist.variable} ${soraMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-terminal font-editorial text-cool antialiased selection:bg-alert/40 selection:text-cool">
        <Masthead
          currentSite="home"
          navItems={[
            { label: 'Protocol', href: '#the-gap' },
            { label: 'Modules', href: '#modules' },
            { label: 'Tiers', href: '#tiers' },
            { label: 'Evidence', href: '#evidence' },
          ]}
          secondaryCta={{
            label: 'App',
            href: 'https://app.heartlandprotocol.org',
            external: true,
          }}
          cta={{
            label: 'Read the protocol',
            href: 'https://doi.org/10.5281/zenodo.18566403',
            external: true,
          }}
        />
        <main className="flex-1">{children}</main>
        <Colophon
          currentSite="home"
          version="v3.2"
          description="Heart failure Evidence-based Access in Rural Treatment, Linking Advanced Network Delivery — a peer-reviewed implementation framework for primary care-led heart failure care in rural and resource-limited U.S. settings."
        />
      </body>
    </html>
  );
}
