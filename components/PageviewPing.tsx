"use client";
import { useEffect } from 'react';

export default function PageviewPing() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const keys = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content'];
      const utm: Record<string, string> = {};
      keys.forEach((k) => {
        const v = params.get(k);
        if (v) utm[k] = v;
      });

      const payload = {
        utm,
        meta: {
          path: window.location.pathname,
          url: window.location.href,
          referrer: document.referrer || undefined,
        },
        ua: navigator.userAgent,
      };

      // fire-and-forget
      fetch('/api/pageview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    } catch {
      // no-op
    }
  }, []);

  return null;
}


