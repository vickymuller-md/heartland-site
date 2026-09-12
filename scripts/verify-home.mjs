import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Run after the normal Next build. No requests, credentials or source-string checks.
const path = fileURLToPath(new URL('../.next/server/app/index.html', import.meta.url));
const html = readFileSync(path, 'utf8'); // Missing output is a failure, never a skip.
const visible = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<!--[^]*?-->/g, '');
const textOf = value => value.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
const text = textOf(visible);
let checks = 0;
function check(condition, message) { assert.ok(condition, message); checks++; }
function section(id, tag = 'section') {
  const match = visible.match(new RegExp(`<${tag}\\b[^>]*\\bid="${id}"[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  assert.ok(match, `Missing rendered ${tag} #${id}`);
  return match[1];
}

check(/<!DOCTYPE html>/i.test(html), 'Expected generated HTML, not source or an error payload');
for (const label of ['Published release · v1.9.0', 'Synthetic walkthrough · No clinical care', 'Local candidate · Not deployed']) {
  check(text.includes(label), `Missing explicit state: ${label}`);
}
const walkthrough = section('synthetic-walkthrough', 'ol');
const summaries = [...walkthrough.matchAll(/<summary\b[^>]*>([\s\S]*?)<\/summary>/g)].map(match => textOf(match[1]));
check(summaries.length === 5, 'Walkthrough must contain five native disclosures');
['Collection', 'Record', 'Signal', 'Human review', 'Documented outcome'].forEach((title, index) => {
  check(summaries[index]?.includes(title), `Step ${index + 1}: ${title}`);
});
const candidate = section('local-candidate', 'aside');
for (const label of ['Laboratory submission recovery', 'not available in the public sandbox', 'Not recorded', 'Acknowledgment is not clinical review', 'audio']) {
  check(textOf(candidate).includes(label), `Candidate boundary missing: ${label}`);
}
check(!/<(?:a|button|form|input|audio)\b/i.test(candidate), 'Candidate must not offer an operational control');
check(!/<(?:form|input|audio|iframe)\b/i.test(walkthrough), 'Explanatory flow must not collect or transmit data');
check(text.includes('No real contact, delivery or clinical benefit is demonstrated'), 'Missing synthetic outcome limit');
for (const label of ['AI language', 'Registered rules', 'Human review', 'Optional voice']) {
  check(text.includes(label), `Missing responsibility: ${label}`);
}
for (const doi of ['10.7759/cureus.104817', '10.5281/zenodo.19101219', '10.5281/zenodo.22233054']) {
  check(visible.includes(`href="https://doi.org/${doi}"`), `Missing exact publication link: ${doi}`);
}
check(text.includes('Toolkit V3.3') && text.includes('App v1.9.0'), 'Toolkit and App versions must be distinct');
check(text.includes('did not evaluate the HEARTLAND App or its AI'), 'Studies must not imply product validation');
check(visible.includes('href="https://app.heartlandprotocol.org/sandbox?utm_source=heartlandprotocol.org&amp;utm_medium=referral&amp;utm_campaign=ecosystem_navigation"'), 'Preserve the sandbox referral destination');
check(!/18566403|v3\.2|Not a medical device|No patient health information is ever stored|first titration in 14 days|same clinical endpoint as a smart-home sensor|Initiate ARNI|98\.1%|outlives|net revenue|decision.support PWA/i.test(text), 'Stale identity, promotional efficacy or activation claim remains');
check(!/href="https:\/\/(?:www\.)?(?:cureus\.com|medrxiv\.org)\/?"/.test(visible), 'Generic homepages must not stand in for a publication');
const metadata = html.match(/<meta name="description" content="([^"]+)"/)?.[1] ?? '';
check(metadata.includes('synthetic') && !metadata.includes('peer-reviewed implementation framework and open-source toolkit'), 'Metadata must distinguish scope, not endorse all software as peer-reviewed');
const ids = [...visible.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
check(new Set(ids).size === ids.length, 'Duplicate IDs in generated home');
for (const match of visible.matchAll(/href="#([^"]+)"/g)) check(ids.includes(match[1]), `Broken in-page destination #${match[1]}`);
console.log(`Home verification passed: ${checks} checks on ${path}`);
