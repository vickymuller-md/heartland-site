import type { Metadata } from 'next';
import { Sora, Instrument_Serif, Geist } from 'next/font/google';
import { Masthead, HeartLineMark, HEARTLAND_NETWORK } from '@heartland/ui';
import { WebAnalytics } from './web-analytics';
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
  alternates: { canonical: '/' },
  title: {
    default: 'HEARTLAND Protocol — Heart failure care for rural America',
    template: '%s · HEARTLAND Protocol',
  },
  description:
    'Explore the HEARTLAND article, Toolkit V3.3 and App v1.9.0: synthetic workflows, bounded AI, human review and clearly labeled local candidates for rural heart failure implementation research.',
  openGraph: {
    title: 'HEARTLAND Protocol',
    description:
      'Heart failure Evidence-based Access in Rural Treatment, Linking Advanced Network Delivery.',
    url: 'https://heartlandprotocol.org',
    siteName: 'HEARTLAND Protocol',
    type: 'website',
  },
  twitter: {
    card: 'summary',
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
      <body className="min-h-screen flex flex-col bg-terminal font-editorial text-cool antialiased [overflow-wrap:anywhere] selection:bg-alert/40 selection:text-cool [&_header>div]:flex-wrap [&_header>div]:gap-4 [&_header_a]:min-h-11 [&_header_nav_a]:inline-flex">
        <Masthead
          currentSite="home"
          navItems={[
            { label: 'Evidence Lab', href: '#evidence-lab' },
            { label: 'Modules', href: '#modules' },
            { label: 'Tiers', href: '#tiers' },
            { label: 'Evidence', href: '#evidence' },
          ]}
          secondaryCta={{
            label: 'App',
            href: 'https://app.heartlandprotocol.org?utm_source=heartlandprotocol.org&utm_medium=referral&utm_campaign=ecosystem_navigation',
            external: true,
          }}
          cta={{
            label: 'Toolkit V3.3',
            href: 'https://doi.org/10.5281/zenodo.19101219',
            external: true,
          }}
        />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-grid bg-terminal">
          <div className="mx-auto max-w-[1200px] px-6 py-16">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-6">
                <a href="https://heartlandprotocol.org" className="inline-flex min-h-11 items-center gap-3 text-lg font-semibold"><HeartLineMark className="h-7 w-7 text-alert" />Heartland</a>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-cool/80">A published implementation framework, a versioned toolkit and an open-source companion App. Article review, software testing and clinical validation are distinct.</p>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-cool/80">For licensed professionals. This release does not establish FDA clearance or authorization, resolve medical-device classification, or replace clinical judgment or institutional policy. Public interactions are synthetic; authenticated workspaces remain controlled evaluation only. Real patient data and unsupervised clinical use are not authorized.</p>
              </div>
              <nav aria-label="Publication records" className="md:col-span-3">
                <h2 className="text-sm font-semibold uppercase tracking-widest">Research</h2>
                <ul className="mt-4 space-y-1 text-base text-cool/80">
                  <li><a className="inline-flex min-h-11 items-center underline underline-offset-4" href="https://doi.org/10.7759/cureus.104817">HEARTLAND article</a></li>
                  <li><a className="inline-flex min-h-11 items-center underline underline-offset-4" href="https://doi.org/10.5281/zenodo.19101219">Toolkit V3.3</a></li>
                  <li><a className="inline-flex min-h-11 items-center underline underline-offset-4" href="https://doi.org/10.5281/zenodo.22233054">App v1.9.0 archive</a></li>
                  <li><a className="inline-flex min-h-11 items-center underline underline-offset-4" href="https://doi.org/10.17605/OSF.IO/YUSGH">OSF project</a></li>
                  <li><a className="inline-flex min-h-11 items-center underline underline-offset-4" href="https://orcid.org/0009-0009-1099-5690">ORCID profile</a></li>
                </ul>
              </nav>
              <nav aria-label="HEARTLAND network" className="md:col-span-3">
                <h2 className="text-sm font-semibold uppercase tracking-widest">Network</h2>
                <ul className="mt-4 space-y-1 text-base text-cool/80">{HEARTLAND_NETWORK.map(site => <li key={site.id}><a href={site.url} aria-current={site.id === 'home' ? 'page' : undefined} className="inline-flex min-h-11 items-center underline underline-offset-4">{site.shortLabel}</a></li>)}</ul>
              </nav>
            </div>
            <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-grid pt-6 text-sm text-cool/80"><p>© {new Date().getFullYear()} Vicky Muller Ferreira, MD · Site source under MIT</p><p>Toolkit V3.3 · App v1.9.0 · Local candidate not deployed</p></div>
          </div>
        </footer>
        <WebAnalytics />
      </body>
    </html>
  );
}
