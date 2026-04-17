import { HEARTLAND_NETWORK, HEARTLAND_EXTERNAL_LINKS } from '@heartland/ui';

const MODULES = [
  {
    number: '01',
    title: 'Risk Stratification',
    blurb:
      'Identify high-risk patients using a score that incorporates distance-to-cardiology and social support — variables absent from existing instruments.',
    href: 'https://app.heartlandprotocol.org/risk-calculator',
  },
  {
    number: '02',
    title: 'GDMT Optimization',
    blurb:
      'Initiate and optimize the four evidence-based pillars (ARNI, beta-blocker, MRA, SGLT2i) with a Generic Bridge pathway so no patient is untreated due to cost.',
    href: 'https://app.heartlandprotocol.org/gdmt-pathway',
  },
  {
    number: '03',
    title: 'Telephone Titration',
    blurb:
      'Run medication titration by voice call or digital track — both validated by the Hozhó Trial in rural Navajo Nation — following identical clinical algorithms.',
    href: 'https://app.heartlandprotocol.org/titration-checklist',
  },
  {
    number: '04',
    title: 'Discharge Transitions',
    blurb:
      'Structured discharge bundles with teach-back education, bedside medications, and a 48–72 hour follow-up contact to prevent readmission.',
    href: 'https://app.heartlandprotocol.org/discharge',
  },
  {
    number: '05',
    title: 'Remote Monitoring',
    blurb:
      'Deploy basic monitoring hardware and human-filtered alert protocols with RPM and RTM billing codes to sustain the program financially.',
    href: 'https://app.heartlandprotocol.org/remote-monitoring',
  },
  {
    number: '06',
    title: 'Comorbidity Management',
    blurb:
      'Integrate evidence-based management for AFib, OSA, iron deficiency, diabetes, CKD, COPD, and depression without harmful drug combinations.',
    href: 'https://app.heartlandprotocol.org/comorbidity-manager',
  },
  {
    number: '07',
    title: 'Primary Care Coordination',
    blurb:
      'Standardize care transitions with SBAR handoffs, referral criteria, and shared medical appointments that multiply provider capacity.',
    href: 'https://app.heartlandprotocol.org',
  },
  {
    number: '08',
    title: 'Implementation Guidance',
    blurb:
      'Pick Tier 1 (Critical Access Hospital), Tier 2 (FQHC), or Tier 3 (Regional Center) and follow a customized rollout matched to your resources.',
    href: 'https://app.heartlandprotocol.org/tier-selector',
  },
] as const;

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Modules />
      <Ecosystem />
      <Research />
      <Author />
      <Disclaimer />
      <ClosingCta />
    </>
  );
}

function Hero() {
  return (
    <section className="border-b border-[color:var(--color-grid)] bg-[color:var(--color-terminal)]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:gap-16 md:py-28">
        <div className="md:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-grid)] bg-[color:var(--color-panel)] px-3 py-1 text-[12px] text-[color:var(--color-stone)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-signal)]" />
            Peer-reviewed · v3.2 · February 2026
          </span>

          <h1 className="mt-6 text-[clamp(2.6rem,6vw,5rem)] leading-[1.04] tracking-tight text-[color:var(--color-cool)]">
            Heart failure care{' '}
            <span className="font-[var(--font-display)] italic text-[color:var(--color-alert)]">
              where there's no
            </span>{' '}
            cardiologist.
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[color:var(--color-cool)]/75 md:text-[18px]">
            HEARTLAND is an evidence-based implementation framework and open-source toolkit for
            primary care teams managing heart failure in rural and resource-limited settings across
            the United States. Eight modules, one shared workflow — from the first risk score to the
            last post-discharge call.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={HEARTLAND_EXTERNAL_LINKS.zenodo}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--color-cool)] px-6 py-3 text-[14px] font-medium text-[color:var(--color-terminal)] transition-colors hover:bg-[color:var(--color-alert)] hover:text-[color:var(--color-cool)]"
            >
              Read the protocol
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="https://app.heartlandprotocol.org"
              className="inline-flex items-center gap-2 text-[14px] text-[color:var(--color-cool)]/80 transition-colors hover:text-[color:var(--color-alert)]"
            >
              Explore the clinical app
              <span>→</span>
            </a>
          </div>

          <p className="mt-10 max-w-md text-[12.5px] leading-relaxed text-[color:var(--color-stone)]">
            Built for licensed clinicians. Not a medical device. Not for direct patient care.
            Synthetic data only — no PHI is ever collected.
          </p>
        </div>

        <div className="relative md:col-span-5">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-[color:var(--color-panel-hi)] via-[color:var(--color-terminal-deep)] to-[color:var(--color-panel)] p-8 ring-1 ring-[color:var(--color-grid)]">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-stone)]">
                  Median distance to cardiologist
                </p>
                <p className="mt-3 text-[clamp(3rem,8vw,5rem)] font-medium leading-none text-[color:var(--color-cool)]">
                  87 <span className="text-[color:var(--color-alert)]">mi</span>
                </p>
                <p className="mt-2 text-[12.5px] text-[color:var(--color-stone)]">
                  Rural counties. Urban counties: 16 miles.
                </p>
              </div>

              <div className="rounded-2xl bg-[color:var(--color-panel)] p-5 ring-1 ring-[color:var(--color-grid)]">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-stone)]">
                  Rural GDMT adherence
                </p>
                <p className="mt-2 text-[32px] font-medium leading-none text-[color:var(--color-cool)]">
                  &lt; 25<span className="text-[color:var(--color-alert)]">%</span>
                </p>
                <p className="mt-2 text-[12px] text-[color:var(--color-stone)]">
                  on all four evidence-based classes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="border-b border-[color:var(--color-grid)] bg-[color:var(--color-panel)]">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-stone)]">
              The gap
            </p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-[color:var(--color-cool)]">
              Why HEARTLAND exists.
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="text-[16.5px] leading-relaxed text-[color:var(--color-cool)]/80">
              Heart failure affects millions of Americans and is projected to nearly double in
              prevalence by 2050. Yet rural populations carry a disproportionate burden: higher HF
              incidence, higher mortality, and a median 87 miles to the nearest cardiologist
              compared with 16 miles in urban counties. Fewer than one in four eligible rural
              patients receive all four guideline-directed medication classes, and fewer than 1%
              reach target doses.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-[color:var(--color-cool)]">
              <span className="font-medium">No published implementation protocol</span> provides
              operational guidance for primary-care-led heart failure management in rural and
              resource-limited U.S. settings. GWTG-HF is a quality registry. ESC-HF-LT is
              European. Existing risk scores omit distance-to-care and social support despite
              robust prognostic evidence. HEARTLAND is the first to fill that gap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section className="border-b border-[color:var(--color-grid)] bg-[color:var(--color-terminal)]">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-stone)]">
              How it works
            </p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-[color:var(--color-cool)]">
              Eight modules, one workflow.
            </h2>
          </div>
          <p className="max-w-md text-[14.5px] text-[color:var(--color-cool)]/70">
            Each module is published in the protocol and operational in the clinical app.
            Adopt one at a time, or follow the full pathway end to end.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m) => (
            <a
              key={m.number}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-[color:var(--color-grid)] bg-[color:var(--color-panel)] p-6 transition-transform hover:-translate-y-0.5 hover:border-[color:var(--color-alert)]"
            >
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-alert)]">
                  Module {m.number}
                </p>
                <h3 className="mt-3 text-[17px] font-medium text-[color:var(--color-cool)]">
                  {m.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[color:var(--color-cool)]/70">
                  {m.blurb}
                </p>
              </div>
              <p className="mt-6 text-[12.5px] text-[color:var(--color-stone)] transition-colors group-hover:text-[color:var(--color-alert)]">
                Open in app →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="border-b border-[color:var(--color-grid)] bg-[color:var(--color-panel)]">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-stone)]">
              The ecosystem
            </p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-[color:var(--color-cool)]">
              Open-source tools for every use case.
            </h2>
          </div>
          <p className="max-w-md text-[14.5px] text-[color:var(--color-cool)]/70">
            HEARTLAND is not a single product. It's a coordinated set of seven properties,
            each solving a distinct integration problem.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HEARTLAND_NETWORK.filter((s) => s.id !== 'home').map((site) => (
            <a
              key={site.id}
              href={site.url}
              className="group flex flex-col justify-between rounded-2xl border border-[color:var(--color-grid)] bg-[color:var(--color-terminal)] p-6 transition-transform hover:-translate-y-0.5 hover:border-[color:var(--color-alert)]"
            >
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[color:var(--color-alert)]">
                  {site.shortLabel}
                </p>
                <h3 className="mt-3 text-[17px] font-medium text-[color:var(--color-cool)]">
                  {site.label}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[color:var(--color-cool)]/70">
                  {site.tagline}
                </p>
              </div>
              <p className="mt-6 text-[12.5px] text-[color:var(--color-stone)] transition-colors group-hover:text-[color:var(--color-alert)]">
                {site.url.replace('https://', '')} →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Research() {
  return (
    <section className="border-b border-[color:var(--color-grid)] bg-[color:var(--color-terminal)]">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-stone)]">
              Published
            </p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-[color:var(--color-cool)]">
              Peer-reviewed &amp; archived.
            </h2>
            <p className="mt-5 text-[14.5px] leading-relaxed text-[color:var(--color-cool)]/70">
              HEARTLAND v3.2 is deposited under permanent DOIs with full audit history —
              synthesis of more than 60 clinical trials and implementation studies.
            </p>
          </div>

          <div className="md:col-span-8">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ResearchCard
                title="Cureus"
                subtitle="Peer-reviewed manuscript"
                href={HEARTLAND_EXTERNAL_LINKS.cureus}
                doi="Published on Cureus"
              />
              <ResearchCard
                title="Zenodo"
                subtitle="Permanent archive — protocol, figures, references"
                href={HEARTLAND_EXTERNAL_LINKS.zenodo}
                doi="DOI 10.5281/zenodo.18566403"
              />
              <ResearchCard
                title="OSF"
                subtitle="Open Science Framework collaboration space"
                href={HEARTLAND_EXTERNAL_LINKS.osf}
                doi="DOI 10.17605/OSF.IO/YUSGH"
              />
              <ResearchCard
                title="medRxiv"
                subtitle="Preprint supplements (validation studies)"
                href={HEARTLAND_EXTERNAL_LINKS.medrxiv}
                doi="Linked from Zenodo"
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchCard({
  title,
  subtitle,
  href,
  doi,
}: {
  title: string;
  subtitle: string;
  href: string;
  doi: string;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col rounded-2xl border border-[color:var(--color-grid)] bg-[color:var(--color-panel)] p-6 transition-transform hover:-translate-y-0.5 hover:border-[color:var(--color-alert)]"
      >
        <p className="text-[12px] uppercase tracking-[0.2em] text-[color:var(--color-alert)]">
          {title}
        </p>
        <p className="mt-2 text-[16px] font-medium text-[color:var(--color-cool)]">
          {subtitle}
        </p>
        <p className="mt-4 text-[12.5px] text-[color:var(--color-stone)]">{doi}</p>
      </a>
    </li>
  );
}

function Author() {
  return (
    <section className="border-b border-[color:var(--color-grid)] bg-[color:var(--color-panel)]">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-stone)]">
              Author
            </p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-[color:var(--color-cool)]">
              Vicky Muller Ferreira, <span className="text-[color:var(--color-stone)]">MD</span>
            </h2>
            <p className="mt-5 text-[14.5px] leading-relaxed text-[color:var(--color-cool)]/70">
              Independent clinical researcher. Sole author and architect of the HEARTLAND
              Protocol. Dedicated to extending evidence-based heart failure care to
              underserved rural communities across the United States.
            </p>
          </div>

          <div className="md:col-span-7">
            <ul className="space-y-4 text-[14.5px] text-[color:var(--color-cool)]/85">
              <li className="flex items-baseline gap-3">
                <span className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-stone)]">
                  ORCID
                </span>
                <a
                  href={HEARTLAND_EXTERNAL_LINKS.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[color:var(--color-alert)]"
                >
                  0009-0009-1099-5690 ↗
                </a>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-stone)]">
                  Email
                </span>
                <a
                  href={HEARTLAND_EXTERNAL_LINKS.email}
                  className="hover:text-[color:var(--color-alert)]"
                >
                  vickymuller@heartlandprotocol.org
                </a>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-[12px] uppercase tracking-[0.18em] text-[color:var(--color-stone)]">
                  Source
                </span>
                <a
                  href={HEARTLAND_EXTERNAL_LINKS.githubOrg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[color:var(--color-alert)]"
                >
                  github.com/vickymuller-md ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Disclaimer() {
  return (
    <section className="border-b border-[color:var(--color-grid)] bg-[color:var(--color-terminal)]">
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <aside className="rounded-2xl border border-[color:var(--color-grid)] bg-[color:var(--color-panel)] p-7">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-alert)]">
              Clinical decision support
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--color-cool)]/80">
              This protocol and its companion tools are designed for healthcare professionals
              as clinical decision-support resources. They do not provide medical diagnoses,
              substitute for clinical judgment, treat individual patients, or replace licensed
              providers. Professional use only. Not for direct patient care.
            </p>
          </aside>

          <aside className="rounded-2xl border border-[color:var(--color-grid)] bg-[color:var(--color-panel)] p-7">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-alert)]">
              Framework validation status
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-[color:var(--color-cool)]/80">
              The HEARTLAND Risk Stratification Framework is a proposed pragmatic heuristic
              designed to supplement — not replace — validated prognostic instruments such as
              MAGGIC. It has not yet been prospectively validated against clinical outcomes
              data. Formal registry-based validation is a defined research objective.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  const citation =
    'Ferreira VM. HEARTLAND Protocol: Heart failure Evidence-based Access in Rural Treatment, Linking Advanced Network Delivery. Zenodo. https://doi.org/10.5281/zenodo.18566403 (v3.2, February 2026).';

  return (
    <section className="bg-[color:var(--color-cool)] text-[color:var(--color-terminal)]">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <ClosingCard
            title="Read"
            body="The authoritative 8-module clinical text, peer-reviewed and archived on Zenodo."
            ctaLabel="Access on Zenodo"
            ctaHref={HEARTLAND_EXTERNAL_LINKS.zenodo}
          />
          <ClosingCard
            title="Adopt"
            body="Pick a tier, launch the clinical app, download the pocket guide, and start tomorrow."
            ctaLabel="Open the clinical app"
            ctaHref="https://app.heartlandprotocol.org"
          />
          <div className="rounded-2xl bg-[color:var(--color-terminal)]/5 p-7 ring-1 ring-[color:var(--color-terminal)]/20">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-terminal)]/60">
              Cite this work
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-[color:var(--color-terminal)]/90">
              {citation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingCard({
  title,
  body,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="rounded-2xl bg-[color:var(--color-terminal)]/5 p-7 ring-1 ring-[color:var(--color-terminal)]/20">
      <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-terminal)]/60">
        {title}
      </p>
      <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--color-terminal)]/90">
        {body}
      </p>
      <a
        href={ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--color-alert)] px-5 py-2.5 text-[13.5px] font-medium text-[color:var(--color-cool)] transition-colors hover:bg-[color:var(--color-terminal)]"
      >
        {ctaLabel}
        <span>→</span>
      </a>
    </div>
  );
}
