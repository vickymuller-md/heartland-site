import { HEARTLAND_NETWORK, HEARTLAND_EXTERNAL_LINKS } from '@heartland/ui';

const APP_CAMPAIGN = 'utm_source=heartlandprotocol.org&utm_medium=referral&utm_campaign=ecosystem_navigation';

function appHref(path = ''): string {
  return `https://app.heartlandprotocol.org${path}?${APP_CAMPAIGN}`;
}

// ---------------------------------------------------------------------------
// Content tables
// ---------------------------------------------------------------------------

type EvidenceLabel = 'Established' | 'Emerging' | 'Pragmatic';

interface ModuleSpec {
  number: string;
  slug: string;
  title: string;
  problem: string;
  points: { label: string; detail: string }[];
  artifact: { label: string; href: string };
  callout: string;
  label: EvidenceLabel;
}

const MODULES: ModuleSpec[] = [
  {
    number: '01',
    slug: 'module-01',
    title: 'Risk Stratification',
    problem:
      'Existing risk scores omit rural-specific variables that independently predict HF mortality.',
    points: [
      {
        label: 'HEARTLAND Risk Score (0–18)',
        detail:
          'Ten variables including distance to cardiology (>50 mi) and social support (isolation). Low 0–6 / Moderate 7–12 / High 13–18.',
      },
      {
        label: 'CKM staging',
        detail:
          'Cardiovascular-Kidney-Metabolic Stage 0–4; Stage 4 associates with substantial reduction in life expectancy.',
      },
      {
        label: 'Clinical use',
        detail:
          'Supplements — does not replace — MAGGIC or SHFM. Matches monitoring intensity to individual risk.',
      },
    ],
    artifact: { label: 'Open risk calculator', href: appHref('/risk-calculator') },
    callout:
      'Social isolation is associated with a 3.74× increase in heart-failure mortality. Distance >50 miles to cardiology predicts readmission. HEARTLAND captures both.',
    label: 'Pragmatic',
  },
  {
    number: '02',
    slug: 'module-02',
    title: 'GDMT Optimization',
    problem:
      'Fewer than 1% of rural HFrEF patients reach target doses of all four guideline-directed classes. Cost is the largest barrier.',
    points: [
      {
        label: 'Four pillars',
        detail:
          'ARNI (or ACE-I/ARB) + beta-blocker + MRA + SGLT2i — Class I for HFrEF per AHA/ACC/HFSA 2022.',
      },
      {
        label: 'Generic Bridge pathway',
        detail:
          'Lisinopril + metoprolol + spironolactone + dapagliflozin ≈ $15/month. No patient untreated while paperwork is pending.',
      },
      {
        label: 'Safety thresholds',
        detail:
          'K+ > 5.5 → hold MRA and ARNI. eGFR < 30 → avoid SGLT2i. ACEi→ARNI requires 36-hour washout (PARADIGM-HF).',
      },
    ],
    artifact: { label: 'Open GDMT pathway', href: appHref('/gdmt-pathway') },
    callout:
      '"Generic therapy is superior to no therapy." Never delay treatment waiting for paperwork — an eligible patient on $15/month generics outlives one untreated.',
    label: 'Established',
  },
  {
    number: '03',
    slug: 'module-03',
    title: 'Telephone-Based Titration',
    problem:
      'Digital health assumes broadband and tech literacy. Rural communities often lack both. Titration still requires weekly contact.',
    points: [
      {
        label: 'Dual-track protocol',
        detail:
          'Track A (digital, Bluetooth, app) and Track B (voice, paper diary). Identical clinical algorithm — broadband failure never blocks care.',
      },
      {
        label: 'Cadence',
        detail:
          'Week 1 baseline call, Day 7 uptitration check, Day 14 second class introduction, then quarterly escalation over 3–6 months to target.',
      },
      {
        label: 'Hozhó Trial',
        detail:
          'Rural Navajo Nation RCT: voice telephone was the driver of GDMT success — not the app.',
      },
    ],
    artifact: { label: 'Open titration checklist', href: appHref('/titration-checklist') },
    callout:
      '"Broadband failure is not a care failure." The Hozhó Trial proved a dumbphone call reaches the same clinical endpoint as a smart-home sensor.',
    label: 'Established',
  },
  {
    number: '04',
    slug: 'module-04',
    title: 'Discharge Transitions',
    problem:
      'Heart-failure readmission is common; structured bundles cut it — but rural patients often lack transportation to their 7-day follow-up visit.',
    points: [
      {
        label: 'Teach-back by tier',
        detail:
          'Tier 1: 3 core domains (daily weight, meds, warning signs). Tier 2/3: 8 domains adding sodium, fluid, activity, substances.',
      },
      {
        label: 'Bedside med delivery',
        detail:
          'Pre-packaged 7-day supply, labeled by time of day. Patient leaves the hospital with medications in hand, not a paper prescription.',
      },
      {
        label: '48–72h call',
        detail:
          'Structured nurse call: weight delta, symptom check, adherence confirmation, any ED visit. Titrate diuretic by phone if needed.',
      },
    ],
    artifact: { label: 'Open discharge bundle', href: appHref('/discharge') },
    callout:
      'A 68-year-old on new ARNI + beta-blocker needs three things: written + verbal teaching, a 7-day pill pack, and a Day-2 phone call asking "how many pounds?"',
    label: 'Established',
  },
  {
    number: '05',
    slug: 'module-05',
    title: 'Remote Monitoring',
    problem:
      'Passive monitoring causes alarm fatigue. Active, clinician-reviewed monitoring with billing-code support is sustainable.',
    points: [
      {
        label: 'Human-filter principle',
        detail:
          'Every non-emergency alert passes through a licensed clinician before ED referral. Patients never self-triage to the ER on a 2-lb gain.',
      },
      {
        label: 'Basic kit ($50–150)',
        detail:
          'Scale + cuff + pulse ox + paper or app diary. Blue-tooth optional — paper logs work for Track B.',
      },
      {
        label: 'Billing',
        detail:
          'CPT 99453–99458 (RPM) and 98975–98981 (RTM). Tier 2/3 facility × 20 high-risk patients ≈ $3,000–4,000/month net revenue, which offsets kit + staff.',
      },
    ],
    artifact: { label: 'Open remote monitoring', href: appHref('/remote-monitoring') },
    callout:
      'TIM-HF2 showed the greatest mortality benefit in patients living farthest from cardiology. Human oversight beats algorithm alerts.',
    label: 'Established',
  },
  {
    number: '06',
    slug: 'module-06',
    title: 'Comorbidity Management',
    problem:
      'Heart-failure patients carry 5+ comorbidities on average. AFib, sleep apnea, iron deficiency, diabetes, CKD, COPD, and depression are near-universal.',
    points: [
      {
        label: 'Atrial fibrillation',
        detail:
          'CHA2DS2-VASc ≥ 2 → anticoagulate. Rate control via BB; choose a cardioselective agent compatible with GDMT titration.',
      },
      {
        label: 'Sleep apnea',
        detail:
          'STOP-BANG ≥ 3 → sleep study → CPAP. Untreated OSA sabotages GDMT; CPAP improves LVEF.',
      },
      {
        label: 'Iron deficiency',
        detail:
          'Ferritin < 100 or TSAT < 20 % with Hgb < 12 → IV ferric carboxymaltose. Oral iron is poorly absorbed in splanchnic congestion.',
      },
    ],
    artifact: { label: 'Open comorbidity manager', href: appHref('/comorbidity-manager') },
    callout:
      'Untreated OSA sabotages GDMT. A patient on optimal ARNI/BB/MRA/SGLT2i but with undiagnosed apnea stays symptomatic. STOP-BANG takes 2 minutes.',
    label: 'Established',
  },
  {
    number: '07',
    slug: 'module-07',
    title: 'Primary Care Coordination',
    problem:
      'Communication breakdowns between hospital and PCP delay care transitions. Fuzzy referral criteria bottleneck cardiology or orphan the patient.',
    points: [
      {
        label: 'SBAR handoff',
        detail:
          'One template for every discharge. Situation → Background → Assessment → Recommendation, with specific next-dose instructions.',
      },
      {
        label: 'Referral criteria',
        detail:
          'Cardiology required for EF ≤ 35 % after 3 mo optimal GDMT, recurrent hospitalization, arrhythmia, advanced-therapy consideration. Otherwise PCP-led.',
      },
      {
        label: 'Shared medical appointments',
        detail:
          '6–8 stable HF patients + 1 provider + 1 nurse educator for 90 min. 3× throughput vs individual 30-min visits; peer accountability improves adherence.',
      },
    ],
    artifact: { label: 'Open SBAR generator', href: appHref() },
    callout:
      'A clear SBAR tells the PCP exactly what to do next. Without one, everyone defaults to "call cardiology" — and care stalls.',
    label: 'Established',
  },
  {
    number: '08',
    slug: 'module-08',
    title: 'Implementation Guidance',
    problem:
      'A 20-bed Critical Access Hospital with two nurses cannot run the same protocol as a 300-bed HF centre. Success must be tier-specific.',
    points: [
      {
        label: 'Tier 1 — Critical Access Hospital',
        detail:
          '2 RNs, paper workflows. Day-1 goals: HEARTLAND score + 2 GDMT classes at discharge + 48h call. Analog titration.',
      },
      {
        label: 'Tier 2 — FQHC / community hospital',
        detail:
          '4–6 RNs, part-time cardiology. Full 4-pillar GDMT, digital + analog tracks, RPM kit rollout by month 3.',
      },
      {
        label: 'Tier 3 — Regional HF centre',
        detail:
          '8–12 team members with pharmacist + social worker. Rapid-sequence GDMT; serves as hub for 3–4 satellites on the HEARTLAND framework.',
      },
    ],
    artifact: { label: 'Open tier selector', href: appHref('/tier-selector') },
    callout:
      '"Perfect is not the enemy of good." A Tier 1 CAH starting HEARTLAND tomorrow and measuring "more patients on GDMT than yesterday" is already winning.',
    label: 'Pragmatic',
  },
];

interface TierSpec {
  tier: string;
  setting: string;
  staffing: string;
  day1: string;
  month3: string;
  month12: string;
  metric: string;
}

const TIERS: TierSpec[] = [
  {
    tier: 'Tier 1',
    setting: 'Critical Access Hospital',
    staffing: '1–2 RNs, 1 MD, no cardiologist on staff',
    day1: 'Risk score + ≥2 GDMT classes at discharge + 48h call',
    month3: 'Analog phone titration running weekly',
    month12: 'Remote monitoring with paper diary + first billing cycle',
    metric: '70% of HF discharges on ≥2 GDMT classes',
  },
  {
    tier: 'Tier 2',
    setting: 'FQHC / Community Hospital',
    staffing: '4–6 RNs, 1–2 MDs, part-time cardiology clinic',
    day1: 'Full 4-pillar GDMT + dual-track titration + 8-domain teach-back',
    month3: 'RPM kits distributed, CPT 99454 billing live',
    month12: 'First shared-medical-appointment cohort graduates',
    metric: '85% on all 4 GDMT classes; 50% at target doses',
  },
  {
    tier: 'Tier 3',
    setting: 'Regional HF Center',
    staffing: '8–12 team w/ pharmacist + social worker + research coord',
    day1: 'Rapid-sequence GDMT (days) + device evaluation ready',
    month3: 'Hub-and-spoke: trains 3–4 satellite primary care clinics',
    month12: 'Regional quality registry + outcomes publication',
    metric: '95% on all 4 classes; 80% at target; <15% 30-day readmission',
  },
];

interface DayRow {
  day: string;
  task: string;
  owner: string;
  time: string;
}

const FOURTEEN_DAYS: DayRow[] = [
  { day: 'Day 1', task: 'Read the protocol summary (this page + Cureus abstract).', owner: 'Clinical lead', time: '20 min' },
  { day: 'Day 2', task: 'Assign a protocol champion (nurse or physician).', owner: 'Leadership', time: '5 min' },
  { day: 'Day 3', task: 'Download & laminate the HEARTLAND Risk Calculator + GDMT Quick Reference.', owner: 'Nurse lead', time: '30 min' },
  { day: 'Day 5', task: 'Train all RNs on the HEARTLAND Risk Score (15 min micro-session).', owner: 'Protocol champion', time: '1 hr' },
  { day: 'Day 7', task: 'Identify the first 3 HF patients at discharge. Calculate scores. Initiate ≥2 GDMT classes.', owner: 'Clinical team', time: '2 hr' },
  { day: 'Day 9', task: 'Make the first 48h post-discharge phone calls. Document adherence + weight.', owner: 'Assigned RN', time: '1 hr' },
  { day: 'Day 12', task: 'Debrief: how many on ≥2 classes? Any drug-cost issues? Engage the Generic Bridge pathway.', owner: 'Leadership + team', time: '30 min' },
  { day: 'Day 14', task: 'Schedule the next 3 patients for risk stratification + GDMT initiation. Plan first titration calls.', owner: 'All staff', time: '30 min' },
];

const EVIDENCE_STYLES: Record<EvidenceLabel, string> = {
  Established: 'bg-signal/15 text-signal-deep',
  Emerging: 'bg-alert/15 text-alert-deep',
  Pragmatic: 'bg-stone/15 text-stone',
};

const SANDBOX_JOURNEY = [
  {
    step: '01',
    title: 'Run the day',
    body: 'Replay 500, 2,500, or 5,000 fictional check-ins across five simulated clinic days.',
  },
  {
    step: '02',
    title: 'Find the exceptions',
    body: 'Registered rules and monitoring-gap policies build the review queue; the model does not set priority.',
  },
  {
    step: '03',
    title: 'Work one case',
    body: 'Open the source-aware brief, inspect trends, place a simulated call, and compare a draft before accepting it.',
  },
  {
    step: '04',
    title: 'Close the loop',
    body: 'Document the fictional outcome, assign the next owner, and inspect the key fields in a decision receipt.',
  },
];

const SANDBOX_CAPABILITIES = [
  {
    label: 'Command Center + Copilot',
    title: 'A reviewable morning round',
    body: 'Run three simulated calls, follow progress, hear a text-and-voice morning brief, ask the queue, and inspect the read-only tool trace behind each answer.',
  },
  {
    label: 'Outreach + Daily Loop',
    title: 'Displayed exceptions keep their source context',
    body: 'Source transcript, structured extraction, unknowns, rule ID, owner, and fictional outcome stay together. Compare proposed Situation and Background wording with accept, reject, and undo; Assessment and Recommendation remain provider-owned.',
  },
  {
    label: 'Patient 360 + Pathways + Coordination',
    title: 'One case, end to end',
    body: 'Review a 60-second brief, source freshness, trends, safety data, protocol context, ownership, deadline, and the next handoff in the fictional workflow.',
  },
  {
    label: 'Patient Today + Impact',
    title: 'Bilingual check-ins with visible limits',
    body: 'Try English or Spanish by tap, text, or optional voice. Missing answers route to review; Impact reports tour behavior, not clinical efficacy.',
  },
  {
    label: 'Protocol Guide + Public Tools',
    title: 'Ask and explain without changing the result',
    body: 'Ask a bounded assistant about published protocol content with references, or request a plain-language explanation of a deterministic tool result. The AI layer does not recalculate the score or threshold.',
  },
];

const RESPONSIBILITY_LAYERS = [
  ['Synthetic input', 'Fictional values only'],
  ['AI language', 'Converses, extracts, drafts, narrates'],
  ['Registered rules', 'Rules and gap policies set simulated routing'],
  ['Optional voice', 'Microphone off until visitor opt-in'],
  ['Human review', 'Verifies evidence and authorizes the next action'],
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <ModuleIndex />
      <EvidenceLab />
      <ModuleDeepDives />
      <Tiers />
      <FourteenDayPlan />
      <Ecosystem />
      <Research />
      <Audience />
      <Author />
      <Disclaimer />
      <ClosingCta />
    </>
  );
}

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function Hero() {
  return (
    <section className="border-b border-grid bg-terminal">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:gap-16 md:py-28">
        <div className="md:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-grid bg-panel px-3 py-1 text-[12px] text-stone">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            Peer-reviewed · v3.2 · February 2026
          </span>

          <h1 className="mt-6 text-[clamp(2.6rem,6vw,5rem)] leading-[1.04] tracking-tight text-cool">
            Heart failure care{' '}
            <span className="font-display italic text-alert">where there's no</span>{' '}
            cardiologist.
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-cool/75 md:text-[18px]">
            HEARTLAND is an evidence-based implementation framework and open-source toolkit
            for primary care teams managing heart failure in rural and resource-limited
            settings across the United States. Eight modules, one shared workflow — from
            the first risk score to the last post-discharge call.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={HEARTLAND_EXTERNAL_LINKS.zenodo}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-cool px-6 py-3 text-[14px] font-medium text-terminal transition-colors hover:bg-alert hover:text-cool"
            >
              Read the protocol
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href={appHref('/sandbox')}
              className="inline-flex items-center gap-2 text-[14px] text-cool/80 transition-colors hover:text-alert"
            >
              Explore the synthetic sandbox
              <span>→</span>
            </a>
          </div>

          <p className="mt-10 max-w-md text-[12.5px] leading-relaxed text-stone">
            Public synthetic demonstration only. Do not enter real patient,
            personal, or health information. Privacy-minimized interaction
            metadata may be recorded. This release does not establish regulatory
            authorization or replace clinical judgment.
          </p>
        </div>

        <div className="relative md:col-span-5">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-panel-hi via-terminal-deep to-panel p-8 ring-1 ring-grid">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone">
                  Median distance to cardiologist
                </p>
                <p className="mt-3 text-[clamp(3rem,8vw,5rem)] font-medium leading-none text-cool">
                  87 <span className="text-alert">mi</span>
                </p>
                <p className="mt-2 text-[12.5px] text-stone">
                  Rural counties. Urban counties: 16 miles.
                </p>
              </div>

              <div className="rounded-2xl bg-panel p-5 ring-1 ring-grid">
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone">
                  Rural GDMT adherence
                </p>
                <p className="mt-2 text-[32px] font-medium leading-none text-cool">
                  &lt; 25<span className="text-alert">%</span>
                </p>
                <p className="mt-2 text-[12px] text-stone">
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
    <section id="the-gap" className="border-b border-grid bg-panel">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone">The gap</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-cool">
              The 87-mile problem.
            </h2>
          </div>

          <div className="md:col-span-8">
            <p className="text-[16.5px] leading-relaxed text-cool/80">
              Heart failure affects millions of Americans and is projected to nearly
              double in prevalence by 2050. Yet rural populations carry a
              disproportionate burden: higher HF incidence, higher mortality, and a
              median 87 miles to the nearest cardiologist versus 16 miles in urban
              counties. Fewer than one in four eligible rural patients receive all four
              guideline-directed medication classes; fewer than one percent reach
              target doses.
            </p>
            <p className="mt-6 text-[17px] leading-relaxed text-cool">
              <span className="font-medium">
                No published implementation protocol
              </span>{' '}
              provides operational guidance for primary-care-led heart failure
              management in rural and resource-limited U.S. settings. GWTG-HF is a
              quality registry. ESC-HF-LT is European. Existing risk scores omit
              distance-to-care and social support despite robust prognostic evidence.
              HEARTLAND is the first to fill that gap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModuleIndex() {
  return (
    <section id="modules" className="border-b border-grid bg-terminal">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Protocol architecture</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-cool">
              Eight modules, one workflow.
            </h2>
          </div>
          <p className="max-w-md text-[14.5px] text-cool/70">
            Each module is published in the peer-reviewed protocol and operational in
            the clinical app. Start with one module. Add the next when you're ready.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m) => (
            <a
              key={m.number}
              href={`#${m.slug}`}
              className="group flex flex-col rounded-2xl border border-grid bg-panel p-5 transition-transform hover:-translate-y-0.5 hover:border-alert"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-alert">
                Module {m.number}
              </p>
              <h3 className="mt-2 text-[16px] font-medium text-cool">{m.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-cool/70">
                {m.problem}
              </p>
              <p className="mt-4 text-[11.5px] text-stone transition-colors group-hover:text-alert">
                Jump to detail ↓
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function EvidenceLab() {
  const layerDots = ['bg-stone', 'bg-violet-400', 'bg-signal', 'bg-blue-400', 'bg-alert'];

  return (
    <section id="evidence-lab" className="scroll-mt-20 border-b border-grid bg-panel">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-alert">
              Public synthetic Evidence Lab
            </p>
            <h2 className="mt-4 max-w-4xl text-[clamp(2rem,4.4vw,3.7rem)] leading-[1.06] tracking-tight text-cool">
              Watch one clinic day move from{' '}
              <span className="font-display italic text-alert">population signal</span>{' '}
              to human action.
            </h2>
            <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-cool/75">
              Explore a full fictional workflow: population replay, simulated outreach,
              bilingual check-ins, a reviewable morning brief, Patient 360, protocol
              pathways, coordination, assisted SBAR wording, and closed-loop documentation.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a
              href={appHref('/sandbox')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-alert px-6 text-[14px] font-medium text-cool transition-colors hover:bg-cool hover:text-terminal"
            >
              Explore the full synthetic sandbox →
            </a>
            <p className="mt-3 text-[11.5px] leading-relaxed text-stone">
              No account · fictional data · no real calls or clinical records
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-4">
          {SANDBOX_JOURNEY.map((item) => (
            <article key={item.step} className="rounded-2xl border border-grid bg-terminal p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-alert">
                  {item.title}
                </p>
                <span className="font-mono-editorial text-[11px] text-stone">{item.step}</span>
              </div>
              <p className="mt-4 text-[13.5px] leading-relaxed text-cool/70">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="rounded-3xl border border-grid bg-terminal-deep p-6 md:p-8 lg:col-span-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-stone">
                  Default reference run
                </p>
                <h3 className="mt-2 text-[22px] font-medium text-cool">
                  A reproducible synthetic workflow funnel.
                </h3>
              </div>
              <p className="max-w-sm text-[11.5px] leading-relaxed text-stone sm:text-right">
                Illustrative deterministic replay — not clinical performance,
                observed productivity, or a staffing claim.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <LabMetric value="2,500" label="synthetic check-ins" />
              <LabMetric value="98.1%" label="did not enter review" accent />
              <LabMetric value="47" label="review items" />
            </div>

            <div className="mt-8 border-t border-grid pt-7">
              <p className="text-[11px] uppercase tracking-[0.2em] text-stone">
                Responsibility stays visible
              </p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
                {RESPONSIBILITY_LAYERS.map(([label, detail], index) => (
                  <div key={label} className="rounded-xl border border-grid bg-panel p-4">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${layerDots[index]}`} aria-hidden="true" />
                      <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-cool">
                        {label}
                      </p>
                    </div>
                    <p className="mt-2 text-[11.5px] leading-relaxed text-cool/60">{detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[13px] leading-relaxed text-cool/75">
                AI handles language. Registered rules set simulated dispositions. Voice
                is optional. A person verifies the evidence and authorizes the next action.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-alert/40 bg-alert/10 p-6 md:p-8 lg:col-span-4" aria-labelledby="receipt-title">
            <p className="text-[11px] uppercase tracking-[0.2em] text-alert">Decision Receipt</p>
            <h3 id="receipt-title" className="mt-2 text-[22px] font-medium text-cool">
              One answer. Key handoffs visible.
            </h3>
            <dl className="mt-6 space-y-4">
              <ReceiptRow label="Synthetic source" value="Weight 179.5 lb; swelling worse; breathing answer missing." />
              <ReceiptRow label="AI extraction" value="Weight 179.5 lb · edema 2 · dyspnea unknown." />
              <ReceiptRow label="Registered rule" value="+3 lb in 2 days → weight_gain_3lb_2d → simulated escalation." />
              <ReceiptRow label="Human next action" value="Verify source data and review follow-up today." />
            </dl>
            <p className="mt-6 border-t border-alert/30 pt-5 text-[11.5px] leading-relaxed text-cool/65">
              AI structures the source; it does not make the final disposition.
              Unknown stays unknown, and missing required answers route to review.
            </p>
          </aside>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {SANDBOX_CAPABILITIES.map((capability) => (
            <article key={capability.label} className="rounded-2xl border border-grid bg-terminal p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-alert">
                {capability.label}
              </p>
              <h3 className="mt-3 text-[18px] font-medium text-cool">{capability.title}</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-cool/70">{capability.body}</p>
            </article>
          ))}
        </div>

        <aside className="mt-8 rounded-2xl border border-grid bg-terminal px-6 py-5" role="note">
          <p className="text-[12.5px] leading-relaxed text-cool/70">
            <span className="font-medium text-cool">Safety boundary:</span>{' '}
            selected emergency phrases and obvious identifier patterns screen visitor input;
            supported generated-language paths check selected prescriptive wording;
            missing required answers fail toward human review. Demonstration only — do not
            enter real patient, personal, or health information.
          </p>
        </aside>
      </div>
    </section>
  );
}

function LabMetric({ value, label, accent = false }: { value: string; label: string; accent?: boolean }) {
  return (
    <div className="rounded-xl border border-grid bg-panel p-4 text-center">
      <p className={`text-[clamp(1.55rem,3vw,2.35rem)] font-medium leading-none ${accent ? 'text-alert' : 'text-cool'}`}>
        {value}
      </p>
      <p className="mt-2 text-[10px] uppercase tracking-[0.12em] text-stone">{label}</p>
    </div>
  );
}

function ReceiptRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-alert/20 bg-terminal/70 p-4">
      <dt className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-alert">{label}</dt>
      <dd className="mt-2 text-[12.5px] leading-relaxed text-cool/75">{value}</dd>
    </div>
  );
}

function ModuleDeepDives() {
  return (
    <section className="border-b border-grid bg-panel">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="mb-16">
          <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Deep dive</p>
          <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-cool">
            The protocol, module by module.
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-cool/70">
            Each module opens with the clinical problem, then surfaces the two or three
            decisions that move the patient forward. Thresholds are clinical; links take
            you directly to the operational tool in the app.
          </p>
        </div>

        <div className="space-y-16">
          {MODULES.map((m) => (
            <article
              key={m.number}
              id={m.slug}
              className="grid scroll-mt-24 grid-cols-1 gap-10 md:grid-cols-12"
            >
              <header className="md:col-span-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-alert">
                  Module {m.number}
                </p>
                <h3 className="mt-3 text-[clamp(1.4rem,2.6vw,2rem)] leading-[1.15] tracking-tight text-cool">
                  {m.title}
                </h3>
                <span
                  className={`mt-4 inline-flex rounded-full px-3 py-1 text-[11.5px] font-medium tracking-wide uppercase ${EVIDENCE_STYLES[m.label]}`}
                >
                  {m.label}
                </span>
                <p className="mt-5 text-[14px] leading-relaxed text-cool/70">
                  {m.problem}
                </p>
              </header>

              <div className="md:col-span-8">
                <dl className="space-y-4">
                  {m.points.map((p) => (
                    <div
                      key={p.label}
                      className="rounded-xl border border-grid bg-terminal p-5"
                    >
                      <dt className="text-[13px] font-medium uppercase tracking-[0.12em] text-cool">
                        {p.label}
                      </dt>
                      <dd className="mt-2 text-[14.5px] leading-relaxed text-cool/80">
                        {p.detail}
                      </dd>
                    </div>
                  ))}
                </dl>

                <blockquote className="mt-6 rounded-xl border-l-4 border-alert bg-terminal-deep px-6 py-5">
                  <p className="text-[15px] italic leading-relaxed text-cool/85">
                    {m.callout}
                  </p>
                </blockquote>

                <a
                  href={m.artifact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-medium text-alert-deep transition-colors hover:text-cool"
                >
                  {m.artifact.label}
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tiers() {
  return (
    <section id="tiers" className="border-b border-grid bg-terminal">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Scale</p>
          <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-cool">
            Three tiers for three realities.
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-cool/70">
            The same protocol, calibrated to local resource. Tier 1 is "do the minimum,
            measure from today forward." Tier 3 trains other facilities to adopt.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.tier}
              className="flex flex-col rounded-2xl border border-grid bg-panel p-6"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-alert">
                {t.tier}
              </p>
              <h3 className="mt-2 text-[18px] font-semibold text-cool">{t.setting}</h3>
              <p className="mt-3 text-[12.5px] text-stone">{t.staffing}</p>

              <dl className="mt-6 space-y-4 text-[13.5px] text-cool/80">
                <TierRow label="Day 1">{t.day1}</TierRow>
                <TierRow label="Month 3">{t.month3}</TierRow>
                <TierRow label="Month 12">{t.month12}</TierRow>
              </dl>

              <div className="mt-6 rounded-lg bg-terminal p-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone">
                  Success metric
                </p>
                <p className="mt-1 text-[13px] text-cool">{t.metric}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TierRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-stone">
        {label}
      </dt>
      <dd className="mt-1 leading-relaxed">{children}</dd>
    </div>
  );
}

function FourteenDayPlan() {
  return (
    <section className="border-b border-grid bg-panel">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone">
              Adoption
            </p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-cool">
              From decision to first titration in 14 days.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] text-cool/70">
            Pick your tier. Follow the checklist. Measure from today forward.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-grid">
          <table className="w-full text-left text-[14px]">
            <thead className="bg-terminal text-[11px] uppercase tracking-[0.15em] text-stone">
              <tr>
                <th className="px-5 py-4">Day</th>
                <th className="px-5 py-4">Task</th>
                <th className="hidden px-5 py-4 md:table-cell">Owner</th>
                <th className="hidden px-5 py-4 md:table-cell">Time</th>
              </tr>
            </thead>
            <tbody>
              {FOURTEEN_DAYS.map((d) => (
                <tr
                  key={d.day}
                  className="border-t border-grid transition-colors hover:bg-terminal-deep"
                >
                  <td className="px-5 py-4 font-medium text-cool whitespace-nowrap">
                    {d.day}
                  </td>
                  <td className="px-5 py-4 text-cool/80">{d.task}</td>
                  <td className="hidden px-5 py-4 text-stone md:table-cell">
                    {d.owner}
                  </td>
                  <td className="hidden px-5 py-4 text-stone md:table-cell whitespace-nowrap">
                    {d.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-[13.5px] text-cool/70">
          After Day 14: continue weekly titration calls. At Day 30, plan your next
          module (Remote Monitoring or Comorbidities). At Month 3, review
          % on GDMT and readmission rate, and add the next module only if the last
          one is running cleanly.
        </p>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="border-b border-grid bg-terminal">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone">
              The ecosystem
            </p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-cool">
              Seven open tools for real-world use.
            </h2>
          </div>
          <p className="max-w-md text-[14.5px] text-cool/70">
            HEARTLAND is a coordinated set of properties, not one product. Adopt the
            ones that fit your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HEARTLAND_NETWORK.filter((s) => s.id !== 'home').map((site) => (
            <a
              key={site.id}
              href={site.url}
              className="group flex flex-col rounded-2xl border border-grid bg-panel p-6 transition-transform hover:-translate-y-0.5 hover:border-alert"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-alert">
                {site.shortLabel}
              </p>
              <h3 className="mt-3 text-[17px] font-medium text-cool">{site.label}</h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-cool/70">
                {site.tagline}
              </p>
              <p className="mt-6 text-[12.5px] text-stone transition-colors group-hover:text-alert">
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
  const citation =
    'Ferreira VM. HEARTLAND Protocol: Heart failure evidence-based access in rural treatment, linking advanced network delivery. Zenodo. https://doi.org/10.5281/zenodo.18566403 (v3.2, February 2026).';

  return (
    <section id="evidence" className="border-b border-grid bg-panel">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Published</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-cool">
              Peer-reviewed &amp; permanently archived.
            </h2>
            <p className="mt-5 text-[14.5px] leading-relaxed text-cool/70">
              HEARTLAND v3.2 is published in Cureus (a Springer Nature journal),
              indexed in PubMed — PMID 41948265 — and deposited under permanent
              DOIs, synthesizing more than 60 clinical trials and implementation
              studies (2018–2025). Two companion systematic reviews are now
              published and PubMed-indexed as well.
            </p>
          </div>

          <div className="md:col-span-8 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ResearchCard
                title="Cureus"
                subtitle="PubMed-indexed · PMID 41948265"
                href={HEARTLAND_EXTERNAL_LINKS.cureus}
                note="The HEARTLAND Protocol — full methods, results, discussion."
              />
              <ResearchCard
                title="GLP-1 RA · Systematic Review"
                subtitle="Cureus · PMID 42292722"
                href="https://doi.org/10.7759/cureus.110621"
                note="Meta-analysis across the heart failure spectrum (Jun 2026)."
              />
              <ResearchCard
                title="Remote Monitoring · Systematic Review"
                subtitle="Cureus · PMID 42164012"
                href="https://doi.org/10.7759/cureus.109198"
                note="Meta-analysis with trial sequential analysis (May 2026)."
              />
              <ResearchCard
                title="Zenodo"
                subtitle="DOI 10.5281/zenodo.18566403"
                href={HEARTLAND_EXTERNAL_LINKS.zenodo}
                note="Protocol, figures, references — permanent archive."
              />
              <ResearchCard
                title="OSF"
                subtitle="DOI 10.17605/OSF.IO/YUSGH"
                href={HEARTLAND_EXTERNAL_LINKS.osf}
                note="Collaboration, preprints, supplementary data."
              />
              <ResearchCard
                title="medRxiv"
                subtitle="Preprint supplements"
                href={HEARTLAND_EXTERNAL_LINKS.medrxiv}
                note="Validation studies linked from Zenodo."
              />
              <ResearchCard
                title="Software Heritage"
                subtitle="Permanent source snapshot"
                href="https://archive.softwareheritage.org/swh:1:snp:b7570a1570f1c42c8282ad5a72b62d3a54f2baa8/"
                note="Immutable snapshot of this public site repository."
              />
            </div>

            <div className="rounded-2xl border border-grid bg-terminal p-6">
              <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone">
                How to cite (APA)
              </p>
              <p className="mt-3 text-[13.5px] leading-relaxed text-cool/85">
                {citation}
              </p>
            </div>
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
  note,
}: {
  title: string;
  subtitle: string;
  href: string;
  note: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl border border-grid bg-terminal p-6 transition-transform hover:-translate-y-0.5 hover:border-alert"
    >
      <p className="text-[12px] uppercase tracking-[0.2em] text-alert">{title}</p>
      <p className="mt-2 text-[15px] font-medium text-cool">{subtitle}</p>
      <p className="mt-3 text-[12.5px] text-stone">{note}</p>
    </a>
  );
}

function Audience() {
  return (
    <section className="border-b border-grid bg-terminal">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.2em] text-stone">
            Next step by role
          </p>
          <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-cool">
            Where do you come in?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <AudienceCard
            role="Primary Care Provider"
            body="MD, DO, NP, or PA caring for heart failure patients in a rural or underserved setting."
            read="The protocol (60 min) + Module 2 (GDMT) quick-reference."
            doLabel="Initiate ARNI + beta-blocker before your next discharge."
            href={appHref('/gdmt-pathway')}
            hrefLabel="Open GDMT pathway"
          />
          <AudienceCard
            role="Health-System Admin"
            body="Hospital leadership, nurse informatics, or implementation science lead."
            read="Module 8 (Implementation) + the Tier Selector quiz."
            doLabel="Pick your tier. Assign a champion. Schedule a 15-min RN training."
            href={appHref('/tier-selector')}
            hrefLabel="Open tier selector"
          />
          <AudienceCard
            role="Researcher"
            body="Epidemiologist, implementation scientist, biostatistician, or trainee."
            read="The full protocol in Zenodo + the REDCap instrument template."
            doLabel="Propose a validation study. The risk score awaits prospective cohort data."
            href={HEARTLAND_EXTERNAL_LINKS.osf}
            hrefLabel="Open OSF collaboration"
          />
        </div>
      </div>
    </section>
  );
}

function AudienceCard({
  role,
  body,
  read,
  doLabel,
  href,
  hrefLabel,
}: {
  role: string;
  body: string;
  read: string;
  doLabel: string;
  href: string;
  hrefLabel: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-grid bg-panel p-6">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-alert">
        {role}
      </p>
      <p className="mt-3 text-[14px] text-cool/70 leading-relaxed">{body}</p>

      <dl className="mt-6 space-y-4 text-[13.5px]">
        <div>
          <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-stone">
            Read
          </dt>
          <dd className="mt-1 text-cool/80 leading-relaxed">{read}</dd>
        </div>
        <div>
          <dt className="text-[11px] font-medium uppercase tracking-[0.12em] text-stone">
            Do
          </dt>
          <dd className="mt-1 text-cool/80 leading-relaxed">{doLabel}</dd>
        </div>
      </dl>

      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="mt-6 inline-flex items-center gap-2 text-[13.5px] font-medium text-alert-deep transition-colors hover:text-cool"
      >
        {hrefLabel}
        <span>→</span>
      </a>
    </div>
  );
}

function Author() {
  return (
    <section className="border-b border-grid bg-panel">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone">Author</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-cool">
              Vicky Muller Ferreira, <span className="text-stone">MD</span>
            </h2>
            <p className="mt-5 text-[14.5px] leading-relaxed text-cool/70">
              Independent clinical researcher. Sole author and architect of the
              HEARTLAND Protocol. Dedicated to extending evidence-based heart failure
              care to underserved rural communities across the United States.
            </p>
          </div>

          <div className="md:col-span-7">
            <ul className="space-y-4 text-[14.5px] text-cool/85">
              <li className="flex items-baseline gap-3">
                <span className="text-[12px] uppercase tracking-[0.18em] text-stone">
                  ORCID
                </span>
                <a
                  href={HEARTLAND_EXTERNAL_LINKS.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-alert"
                >
                  0009-0009-1099-5690 ↗
                </a>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-[12px] uppercase tracking-[0.18em] text-stone">
                  Email
                </span>
                <a href={HEARTLAND_EXTERNAL_LINKS.email} className="hover:text-alert">
                  vickymuller@heartlandprotocol.org
                </a>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-[12px] uppercase tracking-[0.18em] text-stone">
                  Source
                </span>
                <a
                  href={HEARTLAND_EXTERNAL_LINKS.githubOrg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-alert"
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
    <section className="border-b border-grid bg-terminal">
      <div className="mx-auto max-w-[1200px] px-6 py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <aside className="rounded-2xl border border-grid bg-panel p-7">
            <p className="text-[11px] uppercase tracking-[0.2em] text-alert">
              Implementation support
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-cool/80">
              The protocol and companion tools provide educational implementation
              support for licensed professionals. This release does not establish FDA
              clearance or authorization, resolve medical-device classification, replace
              clinical judgment, or supersede institutional policy. Public demonstrations
              use fictional scenarios; authenticated workspaces remain controlled evaluation only.
            </p>
          </aside>

          <aside className="rounded-2xl border border-grid bg-panel p-7">
            <p className="text-[11px] uppercase tracking-[0.2em] text-alert">
              Framework validation status
            </p>
            <p className="mt-3 text-[14px] leading-relaxed text-cool/80">
              The HEARTLAND Risk Stratification Framework is a proposed pragmatic
              heuristic designed to supplement — not replace — validated prognostic
              instruments such as MAGGIC or SHFM. It has not yet been prospectively
              validated against clinical outcomes data. Formal registry-based validation
              is a defined research objective.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="bg-cool text-terminal">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <ClosingCard
            title="Read"
            body="The authoritative 8-module clinical text, peer-reviewed and archived on Zenodo."
            ctaLabel="Access on Zenodo"
            ctaHref={HEARTLAND_EXTERNAL_LINKS.zenodo}
          />
          <ClosingCard
            title="Explore"
            body="Run a fictional clinic day end to end. Inspect the displayed source, registered rule, draft, handoff, and human checkpoint."
            ctaLabel="Open the synthetic sandbox"
            ctaHref={appHref('/sandbox')}
          />
          <ClosingCard
            title="Cite"
            body="Use the DOI in manuscripts, grant applications, clinical notes, and policy briefs."
            ctaLabel="Copy citation from above"
            ctaHref="#evidence"
          />
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
  const external = ctaHref.startsWith('http');
  return (
    <div className="rounded-2xl bg-terminal/5 p-7 ring-1 ring-terminal/20">
      <p className="text-[11px] uppercase tracking-[0.2em] text-terminal/60">{title}</p>
      <p className="mt-4 text-[15px] leading-relaxed text-terminal/90">{body}</p>
      <a
        href={ctaHref}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-alert px-5 py-2.5 text-[13.5px] font-medium text-cool transition-colors hover:bg-terminal"
      >
        {ctaLabel}
        <span>→</span>
      </a>
    </div>
  );
}
