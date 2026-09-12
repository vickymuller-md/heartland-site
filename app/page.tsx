import { HEARTLAND_NETWORK, HEARTLAND_EXTERNAL_LINKS } from '@heartland/ui';

const APP_CAMPAIGN = 'utm_source=heartlandprotocol.org&utm_medium=referral&utm_campaign=ecosystem_navigation';

function appHref(path = ''): string {
  return `https://app.heartlandprotocol.org${path}?${APP_CAMPAIGN}`;
}

// ---------------------------------------------------------------------------
// Content tables
// ---------------------------------------------------------------------------

interface ModuleSpec {
  number: string;
  slug: string;
  title: string;
  problem: string;
  points: { label: string; detail: string }[];
  artifact: { label: string; href: string };
  callout: string;
}

const MODULES: ModuleSpec[] = [
  {
    number: '01', slug: 'module-01', title: 'Risk Stratification',
    problem: 'Bring access barriers and social context into a structured discussion of heart failure follow-up.',
    points: [
      { label: 'Proposed HEARTLAND score', detail: 'An educational heuristic incorporating clinical and rural-access variables. It is not a validated prognosis or a substitute for established instruments.' },
      { label: 'Context before interpretation', detail: 'Review the inputs, missing information and source dates alongside the clinical situation.' },
      { label: 'Research boundary', detail: 'Explore the calculator with fictional values. Prospective validation remains a research objective.' },
    ],
    artifact: { label: 'Explore risk calculator', href: appHref('/risk-calculator') },
    callout: 'A calculated category is not a diagnosis, a treatment order or evidence that the framework improves outcomes.',
  },
  {
    number: '02', slug: 'module-02', title: 'GDMT Optimization',
    problem: 'Organize medication review, access barriers and the information needed for clinician-led decisions.',
    points: [
      { label: 'Medication context', detail: 'Explore the guideline-directed medical therapy (GDMT) pathway and its source references.' },
      { label: 'Access planning', detail: 'The Generic Bridge material discusses affordability and assistance pathways. Actual price, coverage, availability and eligibility require verification.' },
      { label: 'Individual review', detail: 'Medication selection and changes require qualified review of the full clinical record, current guidance and institutional policy.' },
    ],
    artifact: { label: 'Explore GDMT pathway', href: appHref('/gdmt-pathway') },
    callout: 'This overview is not a dosing card or permission to start, hold or substitute a medication.',
  },
  {
    number: '03', slug: 'module-03', title: 'Telephone-Based Titration',
    problem: 'Make room for telephone and paper workflows when digital access is limited.',
    points: [
      { label: 'Digital and analog routes', detail: 'Compare communication channels, documentation needs, escalation ownership and contingency plans.' },
      { label: 'Clinician-led follow-up', detail: 'Review the checklist as educational material. Contact cadence and medication decisions require an approved local plan.' },
      { label: 'Hózhó trial context', detail: 'The trial studied clinician-led telephone medication optimization with home blood pressure monitoring in Navajo Nation.' },
    ],
    artifact: { label: 'Explore titration checklist', href: appHref('/titration-checklist') },
    callout: 'Hózhó did not establish equivalence between a telephone call and smart-home sensors, or validate the HEARTLAND App.',
  },
  {
    number: '04', slug: 'module-04', title: 'Discharge Transitions',
    problem: 'Connect education, medication reconciliation and follow-up responsibility across a transition.',
    points: [
      { label: 'Education and teach-back', detail: 'Review understanding, accessible materials and the means to seek help. Resource tiers do not remove the need for essential safety education.' },
      { label: 'Medication access', detail: 'Identify reconciliation, supply and affordability issues for the responsible clinical team.' },
      { label: 'Follow-up ownership', detail: 'Make the planned contact, responsible person, unresolved questions and escalation route explicit.' },
    ],
    artifact: { label: 'Explore discharge bundle', href: appHref('/discharge') },
    callout: 'An educational checklist is not evidence that a patient received teaching, medication or follow-up.',
  },
  {
    number: '05', slug: 'module-05', title: 'Remote Monitoring',
    problem: 'Show how measurements, missing data, review capacity and follow-up fit together.',
    points: [
      { label: 'Source and recency', detail: 'Distinguish when a measurement was collected from when it was entered or reviewed.' },
      { label: 'Review responsibility', detail: 'A displayed alert does not prove delivery or review. Emergency procedures and staffing must be defined locally.' },
      { label: 'Operational feasibility', detail: 'Equipment, connectivity, workload and reimbursement need setting-specific assessment; this site promises no billing eligibility or revenue.' },
    ],
    artifact: { label: 'Explore remote monitoring', href: appHref('/remote-monitoring') },
    callout: 'Remote-monitoring trials evaluate specific care programs. Their findings do not establish the performance of this platform.',
  },
  {
    number: '06', slug: 'module-06', title: 'Comorbidity Management',
    problem: 'Keep coexisting conditions visible during heart failure review.',
    points: [
      { label: 'Connected clinical context', detail: 'Explore material covering rhythm disorders, kidney disease, diabetes and other coexisting conditions.' },
      { label: 'Questions for review', detail: 'Identify missing assessments and questions to bring to the responsible clinician.' },
      { label: 'Individualized decisions', detail: 'Screening, testing and treatment depend on the full record and current clinical guidance, not a promotional-page cutoff.' },
    ],
    artifact: { label: 'Explore comorbidity manager', href: appHref('/comorbidity-manager') },
    callout: 'A topic appearing in a checklist is not a diagnosis or an instruction to order a test or treatment.',
  },
  {
    number: '07', slug: 'module-07', title: 'Primary Care Coordination',
    problem: 'Make the next owner, unresolved question and handoff visible.',
    points: [
      { label: 'Structured handoff', detail: 'Situation, Background, Assessment and Recommendation (SBAR) provide a shared documentation structure.' },
      { label: 'Assisted drafting', detail: 'In the synthetic sandbox, compare AI-proposed Situation and Background wording before accepting it. Assessment and Recommendation remain provider-owned.' },
      { label: 'Accountable follow-up', detail: 'Explore assignment, deadlines and next steps in fictional cases; real referrals and delivery require a governed operational workflow.' },
    ],
    artifact: { label: 'Explore SBAR in the synthetic sandbox', href: appHref('/sandbox') },
    callout: 'A draft, a saved handoff and a completed real-world contact are different states.',
  },
  {
    number: '08', slug: 'module-08', title: 'Implementation Guidance',
    problem: 'Plan around local staffing, infrastructure and governance before any real-world activation.',
    points: [
      { label: 'Resource tiers', detail: 'Compare paper-first, mixed digital/analog and regional coordination settings without treating a tier as clinical authorization.' },
      { label: 'Readiness', detail: 'Define ownership, essential education, downtime procedures, review capacity and escalation coverage.' },
      { label: 'Evaluation', detail: 'Start with synthetic rehearsal. Any study or clinical activation requires its own approved plan and applicable institutional permissions.' },
    ],
    artifact: { label: 'Explore tier selector', href: appHref('/tier-selector') },
    callout: 'More features do not establish readiness. Approval, trained people and a tested workflow remain necessary.',
  },
];

const TIERS = [
  { tier: 'Tier 1', setting: 'Critical Access Hospital', staffing: 'Paper-first or low-connectivity planning',
    foundation: 'Identify the clinical lead, essential education and follow-up owner.',
    rehearsal: 'Walk through a fictional case using a paper diary and telephone workflow.',
    gate: 'Confirm coverage, documentation and escalation before any real-world use.',
    question: 'Can the team identify who owns each unresolved item?' },
  { tier: 'Tier 2', setting: 'FQHC / Community Hospital', staffing: 'Mixed digital and analog planning',
    foundation: 'Map review capacity, access needs and the digital/analog handoff.',
    rehearsal: 'Test missing answers, unavailable staff and downtime with fictional cases.',
    gate: 'Verify approved clinical content, security and communication arrangements.',
    question: 'Does every handoff retain its source and next owner?' },
  { tier: 'Tier 3', setting: 'Regional HF Center', staffing: 'Regional coordination planning',
    foundation: 'Define responsibilities across the hub and participating sites.',
    rehearsal: 'Rehearse cross-site escalation, access boundaries and reconciliation.',
    gate: 'Confirm institutional approvals, validation and an evaluation plan.',
    question: 'Can the network trace a case without assuming a contact was completed?' },
];

const READINESS_STEPS = [
  { title: 'Read and reconcile', task: 'Compare the article, versioned toolkit and software documentation; record unresolved clinical questions.', owner: 'Clinical lead' },
  { title: 'Assign responsibility', task: 'Name review, follow-up, escalation and downtime owners; check realistic coverage.', owner: 'Local leadership and clinical team' },
  { title: 'Rehearse with fictional cases', task: 'Practice missing answers, draft rejection, handoffs and failure recovery without real patient data.', owner: 'Trained evaluation team' },
  { title: 'Review activation gates', task: 'Resolve clinical, institutional, privacy, security and study requirements before deciding whether to progress.', owner: 'Accountable institutional reviewers' },
];

const SANDBOX_JOURNEY = [
  { step: '01', title: 'Collection', body: 'Start with the answer, its source and its time.',
    detail: 'Fictional check-in, demo day 1 at 09:00: “I did not record my weight today.” The example contains no measured weight.' },
  { step: '02', title: 'Record', body: 'Separate the original answer from structured fields.',
    detail: 'AI may structure language, but an unprovided weight stays unknown. Selected input and generated-text screens apply on supported paths.' },
  { step: '03', title: 'Signal', body: 'Expose a required-input gap for review.',
    detail: 'Registered rules and documented monitoring-gap policies set simulated routing. The language model does not assign the disposition.' },
  { step: '04', title: 'Human review', body: 'Check the evidence before choosing an action.',
    detail: 'Example owner: demo reviewer. Source, unknown fields and routing reason are reviewed together; AI wording is only a proposal.' },
  { step: '05', title: 'Documented outcome', body: 'Keep the next owner and unresolved work visible.',
    detail: 'Illustrated outcome: clarification remains pending. No real contact, delivery or clinical benefit is demonstrated.' },
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
      <ReadinessPlan />
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
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
          <p className="text-sm font-medium text-signal">Published resources · Toolkit V3.3 · App v1.9.0</p>
          <h1 className="mt-6 text-[clamp(2.6rem,6vw,5rem)] leading-[1.04] tracking-tight text-cool">
            Heart failure care{' '}<span className="font-display italic text-[#b4372d]">where there's no</span>{' '}cardiologist.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cool/80">
            HEARTLAND connects a published implementation framework, a versioned toolkit and an open-source companion App for rural and resource-limited settings.
            Explore the workflow with fictional cases; clinical judgment stays with people.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="https://doi.org/10.5281/zenodo.19101219" className="inline-flex min-h-12 items-center rounded-full bg-cool px-6 text-base font-medium text-terminal hover:bg-alert">Read Toolkit V3.3 →</a>
            <a href="#evidence-lab" className="inline-flex min-h-12 items-center rounded-full border border-cool/30 px-6 text-base font-medium text-cool hover:bg-panel">Follow one fictional case ↓</a>
          </div>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-cool/80">
            Public demonstration only. Do not enter real patient, personal, or health information.
            Privacy-minimized interaction metadata may be recorded. No clinical or regulatory authorization is implied.
          </p>
        </div>
        <aside className="rounded-3xl border border-grid bg-panel p-6 md:col-span-5 md:p-8" aria-labelledby="start-title">
          <p className="text-sm uppercase tracking-widest text-[#b4372d]">Start here</p>
          <h2 id="start-title" className="mt-4 text-2xl font-semibold text-cool">Three ways to inspect the work.</h2>
          <ol className="mt-6 divide-y divide-grid text-base leading-relaxed text-cool/80">
            <li className="py-5"><a href="#evidence" className="flex min-h-11 items-center font-semibold text-cool underline underline-offset-4">01 · Read the sources</a><p className="mt-2">Article, toolkit and software have distinct records and versions.</p></li>
            <li className="py-5"><a href={appHref('/sandbox')} className="flex min-h-11 items-center font-semibold text-cool underline underline-offset-4">02 · Explore the synthetic App</a><p className="mt-2">Try population replay, conversations, evidence and human-controlled drafts.</p></li>
            <li className="py-5"><a href="#local-candidate" className="flex min-h-11 items-center font-semibold text-cool underline underline-offset-4">03 · Inspect the local candidate</a><p className="mt-2">Understand laboratory recovery changes that are not deployed.</p></li>
          </ol>
        </aside>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section id="the-gap" className="border-b border-grid bg-panel">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-20 md:grid-cols-3">
        <div><p className="text-sm uppercase tracking-widest text-[#b4372d]">The implementation gap</p><h2 className="mt-4 text-3xl leading-tight text-cool">From a recommendation to an accountable workflow.</h2></div>
        <div className="space-y-5 text-base leading-relaxed text-cool/80 md:col-span-2">
          <p>The framework addresses practical questions for rural teams: how to organize follow-up, accommodate access barriers, identify missing information and make the next responsible person explicit.</p>
          <p>The article explains the framework; the toolkit contains implementation material; the App offers interactive educational and controlled-evaluation workflows. These are complementary resources, not proof of clinical effectiveness.</p>
          <a href="https://doi.org/10.7759/cureus.104817" className="inline-flex min-h-11 items-center font-medium text-[#b4372d] underline underline-offset-4">Read the HEARTLAND technical report ↗</a>
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
            <p className="text-base uppercase tracking-[0.2em] text-cool/75">Protocol architecture</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-cool">
              Eight modules, one workflow.
            </h2>
          </div>
          <p className="max-w-md text-base text-cool/70">
            Explore eight educational topics and their companion tools. The article, toolkit and software are distinct resources; public access does not authorize clinical activation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m) => (
            <a
              key={m.number}
              href={`#${m.slug}`}
              className="group flex flex-col rounded-2xl border border-grid bg-panel p-5 transition-transform hover:-translate-y-0.5 hover:border-alert"
            >
              <p className="text-base font-medium uppercase tracking-[0.2em] text-[#b4372d]">
                Module {m.number}
              </p>
              <h3 className="mt-2 text-[16px] font-medium text-cool">{m.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-cool/70">
                {m.problem}
              </p>
              <p className="mt-4 text-base text-cool/75 transition-colors group-hover:text-[#b4372d]">
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
  return (
    <section id="evidence-lab" className="scroll-mt-24 border-b border-grid bg-panel">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <p className="text-sm font-semibold text-signal">Published release · v1.9.0</p>
        <h2 className="mt-4 max-w-4xl text-[clamp(2rem,4.4vw,3.7rem)] leading-[1.08] tracking-tight text-cool">
          Follow the evidence.{' '}<span className="font-display italic text-[#b4372d]">Keep people in charge.</span>
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-cool/80">
          Explore population replay, simulated outreach, English/Spanish check-ins, Copilot, Patient 360, pathways, coordination and assisted SBAR.
          AI handles bounded language; registered rules set simulated routing; people own clinical judgment.
        </p>
        <div className="mt-10 rounded-3xl border border-grid bg-terminal p-5 md:p-8">
          <p className="text-sm font-semibold text-[#b4372d]">Synthetic walkthrough · No clinical care</p>
          <h3 className="mt-3 text-2xl font-semibold text-cool">One answer, five visible handoffs.</h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-cool/80">Open a step to inspect this fixed fictional example. This explanation runs no AI, saves no patient record and makes no contact. This is not the laboratory recovery candidate below.</p>
          <ol id="synthetic-walkthrough" className="mt-6 space-y-3">
            {SANDBOX_JOURNEY.map(item => (
              <li key={item.step}>
                <details open={item.step === '01'} className="rounded-2xl border border-grid bg-panel">
                  <summary className="min-h-12 cursor-pointer rounded-2xl px-5 py-5 text-cool marker:text-[#b4372d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b4372d]">
                    <span className="ml-2 text-sm font-semibold text-[#b4372d]">{item.step}</span>{' '}
                    <span className="ml-2 text-lg font-semibold">{item.title}</span>
                    <span className="mt-2 block text-base leading-relaxed text-cool/80">{item.body}</span>
                  </summary>
                  <p className="border-t border-grid px-5 py-5 text-base leading-relaxed text-cool/80">{item.detail}</p>
                </details>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-grid bg-terminal p-6">
            <h3 className="text-xl font-semibold text-cool">Choose the scale, then inspect a case.</h3>
            <p className="mt-4 text-base leading-relaxed text-cool/80">Replay 500, 2,500 or 5,000 synthetic check-ins across five fictional clinic days. Counts describe a simulation, not observed clinical performance or staffing savings.</p>
            <p className="mt-4 text-base leading-relaxed text-cool/80">The Evidence Flow and Decision Receipt expose source, extraction, unknowns, routing reason and the next human action.</p>
          </div>
          <dl className="divide-y divide-grid rounded-2xl border border-grid bg-terminal px-6">
            {RESPONSIBILITY_LAYERS.map(([label, detail]) => (
              <div key={label} className="py-4"><dt className="text-sm font-semibold text-cool">{label}</dt><dd className="mt-1 text-base leading-relaxed text-cool/80">{detail}</dd></div>
            ))}
          </dl>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {SANDBOX_CAPABILITIES.map(capability => (
            <article key={capability.label} className="rounded-2xl border border-grid bg-terminal p-6">
              <p className="text-sm font-semibold text-[#b4372d]">{capability.label}</p>
              <h3 className="mt-3 text-xl font-semibold text-cool">{capability.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-cool/80">{capability.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-alert/30 bg-alert/10 p-6">
          <p className="text-base leading-relaxed text-cool/80">Selected emergency phrases and identifier patterns are screened; supported generated-text paths check selected prescriptive wording. Missing required answers remain visible. These bounded safeguards are not a guarantee that all unsafe input is detected. AI capacity limits and fallbacks apply.</p>
          <a href={appHref('/sandbox')} className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-cool px-6 text-base font-medium text-terminal hover:bg-alert">Explore the published synthetic sandbox →</a>
        </div>
        <aside id="local-candidate" aria-labelledby="lab-candidate-title" className="mt-10 scroll-mt-24 rounded-3xl border-2 border-dashed border-cool/40 bg-terminal p-6 md:p-8">
          <p className="text-sm font-semibold text-cool">Local candidate · Not deployed</p>
          <h3 id="lab-candidate-title" className="mt-3 text-2xl font-semibold text-cool">Laboratory submission recovery</h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-cool/80">Implemented and tested locally; not available in the public sandbox or hosted workspace. Hosted integration and coordinated rollout remain pending.</p>
          <dl className="mt-6 grid gap-6 text-base leading-relaxed md:grid-cols-2">
            <div><dt className="font-semibold text-cool">Collection and reports</dt><dd className="mt-2 text-cool/80">Keep the recorded collection time in reports. Patient-summary printouts label a missing classification “Not recorded”; CSV leaves it blank. Neither export assumes “Normal”.</dd></div>
            <div><dt className="font-semibold text-cool">Saved result ≠ completed evaluation</dt><dd className="mt-2 text-cool/80">A durable receipt and pending alert evaluation are distinct. Retrying evaluation does not insert a second exam.</dd></div>
            <div><dt className="font-semibold text-cool">Return without resending</dt><dd className="mt-2 text-cool/80">Check a prepared submission after leaving the page. Recovery reads the saved receipt; it does not retransmit the exam or recreate unsaved values.</dd></div>
            <div><dt className="font-semibold text-cool">Explicit acknowledgment or cancellation</dt><dd className="mt-2 text-cool/80">Acknowledgment is not clinical review. Protected cancellation rejects a late submission without erasing a saved result.</dd></div>
          </dl>
          <p className="mt-6 border-t border-grid pt-5 text-base leading-relaxed text-cool/80">Earlier submissions without a prepared attempt need their exact known identifier. Revised English/Spanish scripts are also local; matching audio review is pending. No new public release is announced here.</p>
        </aside>
      </div>
    </section>
  );
}

function ModuleDeepDives() {
  return (
    <section className="border-b border-grid bg-panel">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="mb-16">
          <p className="text-base uppercase tracking-[0.2em] text-cool/75">Deep dive</p>
          <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-cool">
            The protocol, module by module.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-cool/70">
            These summaries explain scope and questions for review. Links open educational tools, not treatment orders. Review the full versioned sources and current institutional guidance.
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
                <p className="text-base font-medium uppercase tracking-[0.2em] text-[#b4372d]">
                  Module {m.number}
                </p>
                <h3 className="mt-3 text-[clamp(1.4rem,2.6vw,2rem)] leading-[1.15] tracking-tight text-cool">
                  {m.title}
                </h3>
                <p className="mt-4 text-sm font-medium text-signal">Educational overview</p>
                <p className="mt-5 text-base leading-relaxed text-cool/70">
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
                      <dt className="text-base font-medium uppercase tracking-[0.12em] text-cool">
                        {p.label}
                      </dt>
                      <dd className="mt-2 text-base leading-relaxed text-cool/80">
                        {p.detail}
                      </dd>
                    </div>
                  ))}
                </dl>

                <aside className="mt-6 rounded-xl border-l-4 border-alert bg-terminal-deep px-6 py-5">
                  <p className="text-base italic leading-relaxed text-cool/85">
                    {m.callout}
                  </p>
                </aside>

                <a
                  href={m.artifact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 text-base font-medium text-[#b4372d] transition-colors hover:text-cool"
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
          <p className="text-base uppercase tracking-[0.2em] text-cool/75">Scale</p>
          <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-cool">
            Three tiers for three realities.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-cool/70">
            Illustrative planning contexts, not staffing prescriptions or validated service levels. Essential safety education and accountable review apply across tiers; no tier is automatically authorized for clinical use.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.tier}
              className="flex flex-col rounded-2xl border border-grid bg-panel p-6"
            >
              <p className="text-base font-medium uppercase tracking-[0.2em] text-[#b4372d]">
                {t.tier}
              </p>
              <h3 className="mt-2 text-[18px] font-semibold text-cool">{t.setting}</h3>
              <p className="mt-3 text-base text-cool/75">{t.staffing}</p>

              <dl className="mt-6 space-y-4 text-base text-cool/80">
                <TierRow label="Foundation">{t.foundation}</TierRow>
                <TierRow label="Synthetic rehearsal">{t.rehearsal}</TierRow>
                <TierRow label="Before activation">{t.gate}</TierRow>
              </dl>

              <div className="mt-6 rounded-lg bg-terminal p-4">
                <p className="text-base font-medium uppercase tracking-[0.15em] text-cool/75">
                  Question to verify
                </p>
                <p className="mt-1 text-base text-cool">{t.question}</p>
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
      <dt className="text-base font-medium uppercase tracking-[0.12em] text-cool/75">
        {label}
      </dt>
      <dd className="mt-1 leading-relaxed">{children}</dd>
    </div>
  );
}

function ReadinessPlan() {
  return (
    <section id="readiness" className="border-b border-grid bg-panel">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <p className="text-sm uppercase tracking-widest text-[#b4372d]">Readiness, not a launch schedule</p>
        <h2 className="mt-4 text-3xl leading-tight text-cool">Rehearse before considering real-world use.</h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-cool/80">A suggested preparation sequence, not a treatment timetable or authorization to enroll patients. Progress depends on evidence and responsible approval, not elapsed days.</p>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {READINESS_STEPS.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-grid bg-terminal p-6">
              <h3 className="text-xl font-semibold text-cool"><span className="text-[#b4372d]">0{index + 1}</span> · {step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-cool/80">{step.task}</p>
              <p className="mt-4 text-sm text-cool"><span className="font-semibold">Suggested owner:</span> {step.owner}</p>
            </li>
          ))}
        </ol>
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
            <p className="text-base uppercase tracking-[0.2em] text-cool/75">
              The ecosystem
            </p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-cool">
              A connected, open research ecosystem.
            </h2>
          </div>
          <p className="max-w-md text-base text-cool/70">
            Each resource has its own scope, version and readiness conditions. Explore the relevant documentation before considering adoption.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HEARTLAND_NETWORK.filter((s) => s.id !== 'home').map((site) => (
            <a
              key={site.id}
              href={site.url}
              className="group flex flex-col rounded-2xl border border-grid bg-panel p-6 transition-transform hover:-translate-y-0.5 hover:border-alert"
            >
              <p className="text-base font-medium uppercase tracking-[0.2em] text-[#b4372d]">
                {site.shortLabel}
              </p>
              <h3 className="mt-3 text-[17px] font-medium text-cool">{site.id === 'app' ? 'Clinical Implementation App' : site.label}</h3>
              <p className="mt-3 text-base leading-relaxed text-cool/70">
                {site.id === 'app' ? 'Educational companion with synthetic workflows, calculators, bounded AI and human review.' : site.tagline}
              </p>
              <p className="mt-6 text-base text-cool/75 transition-colors group-hover:text-[#b4372d]">
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
    <section id="evidence" className="border-b border-grid bg-panel">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="grid gap-10 md:grid-cols-3">
          <header>
            <p className="text-sm uppercase tracking-widest text-[#b4372d]">Published records</p>
            <h2 className="mt-4 text-3xl leading-tight text-cool">One ecosystem. Distinct evidence.</h2>
            <p className="mt-5 text-base leading-relaxed text-cool/80">The peer-reviewed HEARTLAND technical report describes the framework. The toolkit and App have separate versioned archives. Publication, software testing and clinical validation are not interchangeable.</p>
            <p className="mt-5 text-base leading-relaxed text-cool/80">Clinical trials informing the framework did not evaluate the HEARTLAND App or its AI. Three companion systematic reviews address their own research questions.</p>
          </header>
          <div className="space-y-5 md:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2">
              <ResearchCard title="HEARTLAND article" subtitle="Cureus · peer-reviewed technical report" href="https://doi.org/10.7759/cureus.104817" note="Article DOI 10.7759/cureus.104817 · PMID 41948265. Not a clinical validation trial." />
              <ResearchCard title="Toolkit V3.3" subtitle="Zenodo · versioned implementation material" href="https://doi.org/10.5281/zenodo.19101219" note="Version DOI 10.5281/zenodo.19101219. Separate from the journal article and software." />
              <ResearchCard title="App v1.9.0" subtitle="Zenodo · published software baseline" href="https://doi.org/10.5281/zenodo.22233054" note="Version DOI 10.5281/zenodo.22233054. Does not include the local laboratory recovery candidate." />
              <ResearchCard title="OSF project" subtitle="Project materials and collaboration" href={HEARTLAND_EXTERNAL_LINKS.osf} note="Check each file and its date; a project page is not itself a new validation study." />
              <ResearchCard title="GLP-1 RA · Systematic Review" subtitle="Cureus · PMID 42292722" href="https://doi.org/10.7759/cureus.110621" note="Meta-analysis across the heart failure spectrum." />
              <ResearchCard title="Remote Monitoring · Systematic Review" subtitle="Cureus · PMID 42164012" href="https://doi.org/10.7759/cureus.109198" note="Meta-analysis with trial sequential analysis." />
              <ResearchCard title="SGLT2 · Systematic Review" subtitle="Cureus · separate research publication" href="https://doi.org/10.7759/cureus.113025" note="Systematic review of early SGLT2 inhibitor initiation in acute heart failure." />
              <ResearchCard title="Software Heritage" subtitle="Historical site-source snapshot" href="https://archive.softwareheritage.org/swh:1:snp:b7570a1570f1c42c8282ad5a72b62d3a54f2baa8/" note="Immutable earlier snapshot of this site repository, not the current local changes." />
            </div>
            <div className="rounded-2xl border border-grid bg-terminal p-6">
              <h3 className="text-lg font-semibold text-cool">Cite the resource you used.</h3>
              <p className="mt-3 text-base leading-relaxed text-cool/80">Use the article DOI for the journal report, the Toolkit V3.3 DOI for its archived files, or the App v1.9.0 DOI for that software baseline. Local changes have no new published DOI.</p>
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
      <p className="text-base uppercase tracking-[0.2em] text-[#b4372d]">{title}</p>
      <p className="mt-2 text-base font-medium text-cool">{subtitle}</p>
      <p className="mt-3 text-base text-cool/75">{note}</p>
    </a>
  );
}

function Audience() {
  return (
    <section className="border-b border-grid bg-terminal">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <div className="mb-12">
          <p className="text-base uppercase tracking-[0.2em] text-cool/75">
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
            doLabel="Review the pathway and its sources with your clinical team; use fictional cases for evaluation."
            href={appHref('/gdmt-pathway')}
            hrefLabel="Open GDMT pathway"
          />
          <AudienceCard
            role="Health-System Admin"
            body="Hospital leadership, nurse informatics, or implementation science lead."
            read="Module 8 (Implementation) + the Tier Selector quiz."
            doLabel="Map staffing, training, privacy and review responsibilities before planning an evaluation."
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
      <p className="text-base font-medium uppercase tracking-[0.2em] text-[#b4372d]">
        {role}
      </p>
      <p className="mt-3 text-base text-cool/70 leading-relaxed">{body}</p>

      <dl className="mt-6 space-y-4 text-base">
        <div>
          <dt className="text-base font-medium uppercase tracking-[0.12em] text-cool/75">
            Read
          </dt>
          <dd className="mt-1 text-cool/80 leading-relaxed">{read}</dd>
        </div>
        <div>
          <dt className="text-base font-medium uppercase tracking-[0.12em] text-cool/75">
            Do
          </dt>
          <dd className="mt-1 text-cool/80 leading-relaxed">{doLabel}</dd>
        </div>
      </dl>

      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="mt-6 inline-flex min-h-11 items-center gap-2 text-base font-medium text-[#b4372d] transition-colors hover:text-cool"
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
            <p className="text-base uppercase tracking-[0.2em] text-cool/75">Author</p>
            <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.15] tracking-tight text-cool">
              Vicky Muller Ferreira, <span className="text-cool/75">MD</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-cool/70">
              Independent clinical researcher. Sole author and architect of the
              HEARTLAND Protocol. Dedicated to extending evidence-based heart failure
              care to underserved rural communities across the United States.
            </p>
          </div>

          <div className="md:col-span-7">
            <ul className="space-y-4 text-base text-cool/85">
              <li className="flex flex-wrap items-baseline gap-3">
                <span className="text-base uppercase tracking-[0.18em] text-cool/75">
                  ORCID
                </span>
                <a
                  href={HEARTLAND_EXTERNAL_LINKS.orcid}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 max-w-full items-center break-all hover:text-[#b4372d]"
                >
                  0009-0009-1099-5690 ↗
                </a>
              </li>
              <li className="flex flex-wrap items-baseline gap-3">
                <span className="text-base uppercase tracking-[0.18em] text-cool/75">
                  Email
                </span>
                <a href={HEARTLAND_EXTERNAL_LINKS.email} className="inline-flex min-h-11 max-w-full items-center break-all hover:text-[#b4372d]">
                  vickymuller@heartlandprotocol.org
                </a>
              </li>
              <li className="flex flex-wrap items-baseline gap-3">
                <span className="text-base uppercase tracking-[0.18em] text-cool/75">
                  Source
                </span>
                <a
                  href={HEARTLAND_EXTERNAL_LINKS.githubOrg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 max-w-full items-center break-all hover:text-[#b4372d]"
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
            <p className="text-base uppercase tracking-[0.2em] text-[#b4372d]">
              Implementation support
            </p>
            <p className="mt-3 text-base leading-relaxed text-cool/80">
              The protocol and companion tools provide educational implementation
              support for licensed professionals. This release does not establish FDA
              clearance or authorization, resolve medical-device classification, replace
              clinical judgment, or supersede institutional policy. Public demonstrations
              use fictional scenarios; authenticated workspaces remain controlled evaluation only.
            </p>
          </aside>

          <aside className="rounded-2xl border border-grid bg-panel p-7">
            <p className="text-base uppercase tracking-[0.2em] text-[#b4372d]">
              Framework validation status
            </p>
            <p className="mt-3 text-base leading-relaxed text-cool/80">
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
            body="The versioned eight-module implementation toolkit. The peer-reviewed article is a separate publication."
            ctaLabel="Access on Zenodo"
            ctaHref="https://doi.org/10.5281/zenodo.19101219"
          />
          <ClosingCard
            title="Explore"
            body="Run a fictional clinic day end to end. Inspect the displayed source, registered rule, draft, handoff, and human checkpoint."
            ctaLabel="Open the synthetic sandbox"
            ctaHref={appHref('/sandbox')}
          />
          <ClosingCard
            title="Cite"
            body="Cite the specific article, toolkit or software version actually used. Their records are not interchangeable."
            ctaLabel="View publication records"
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
      <p className="text-base uppercase tracking-[0.2em] text-terminal/60">{title}</p>
      <p className="mt-4 text-base leading-relaxed text-terminal/90">{body}</p>
      <a
        href={ctaHref}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-alert px-5 py-2.5 text-base font-medium text-cool transition-colors hover:bg-terminal"
      >
        {ctaLabel}
        <span>→</span>
      </a>
    </div>
  );
}
