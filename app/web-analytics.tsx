'use client';

import { useEffect } from 'react';
import { track } from '@vercel/analytics';
import { Analytics, type BeforeSendEvent } from '@vercel/analytics/next';

const INTERNAL_TRAFFIC_KEY = 'heartland_internal_analytics_v1';
const CAMPAIGN_EVENT_KEY = 'heartland_campaign_event_v1';
const CAMPAIGN_VALUE = /^[A-Za-z0-9._~-]{1,80}$/;

function isInternalTraffic(): boolean {
  try {
    const marker = new URLSearchParams(window.location.search).get('hl_internal');
    if (marker === '1') localStorage.setItem(INTERNAL_TRAFFIC_KEY, '1');
    if (marker === '0') localStorage.removeItem(INTERNAL_TRAFFIC_KEY);
    return marker === '1' || localStorage.getItem(INTERNAL_TRAFFIC_KEY) === '1';
  } catch {
    return true;
  }
}

function filterPublicEvent(event: BeforeSendEvent): BeforeSendEvent | null {
  if (isInternalTraffic()) return null;
  try {
    const url = new URL(event.url, window.location.origin);
    url.search = '';
    url.hash = '';
    return { ...event, url: url.toString() };
  } catch {
    return null;
  }
}

export function WebAnalytics() {
  useEffect(() => {
    if (isInternalTraffic()) return;
    const params = new URLSearchParams(window.location.search);
    const source = params.get('utm_source');
    const campaign = params.get('utm_campaign');
    if (!source || !campaign || !CAMPAIGN_VALUE.test(source) || !CAMPAIGN_VALUE.test(campaign)) return;

    const eventKey = `${source}:${campaign}:${window.location.pathname}`;
    try {
      if (sessionStorage.getItem(CAMPAIGN_EVENT_KEY) === eventKey) return;
      sessionStorage.setItem(CAMPAIGN_EVENT_KEY, eventKey);
    } catch {
      return;
    }
    track('campaign_visit', { source, campaign });
  }, []);

  return <Analytics beforeSend={filterPublicEvent} />;
}
