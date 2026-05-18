'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string> }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

function labelForLink(anchor: HTMLAnchorElement): string {
  return anchor.getAttribute('aria-label') ?? anchor.textContent?.trim().replace(/\s+/g, ' ').slice(0, 120) ?? '';
}

function eventNameForLink(anchor: HTMLAnchorElement): string | null {
  const explicit = anchor.dataset.analyticsEvent;
  if (explicit) return explicit;

  const href = anchor.getAttribute('href') ?? '';
  if (!href) return null;

  if (href.startsWith('/newsletter')) return 'newsletter_cta_click';
  if (href.startsWith('/reports/ai-creator-platform-index-2026')) return 'platform_index_click';
  if (href.startsWith('/tools')) return 'tool_index_click';
  if (href.startsWith('/comparisons')) return 'comparison_click';

  try {
    const url = new URL(anchor.href);
    if (url.hostname && url.hostname !== window.location.hostname) return 'outbound_link_click';
  } catch {
    return null;
  }

  return null;
}

function track(eventName: string, props: Record<string, string>) {
  window.plausible?.(eventName, { props });
  window.gtag?.('event', eventName, props);
}

export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest('a');
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const eventName = eventNameForLink(anchor);
      if (!eventName) return;

      track(eventName, {
        href: anchor.href,
        label: labelForLink(anchor),
        path: window.location.pathname
      });
    };

    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
