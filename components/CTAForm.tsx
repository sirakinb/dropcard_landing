"use client";
import { useEffect, useState } from 'react';

type Props = { formLocation?: string };

export default function CTAForm({ formLocation }: Props) {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [utm, setUtm] = useState<Record<string, string>>({});

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const keys = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content'];
      const utmObj: Record<string, string> = {};
      keys.forEach((k) => {
        const v = params.get(k);
        if (v) utmObj[k] = v;
      });
      if (Object.keys(utmObj).length) setUtm(utmObj);
    } catch {}
  }, []);

  const isValidEmail = (value: string) => /\S+@\S+\.\S+/.test(value);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!isValidEmail(email)) {
      setError('Please enter a valid email');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          utm,
          meta: {
            path: typeof window !== 'undefined' ? window.location.pathname : undefined,
            referrer: typeof document !== 'undefined' ? document.referrer : undefined,
            formLocation: formLocation ?? 'unknown',
          },
        })
      });
      if (!res.ok) throw new Error('Failed to subscribe');
      setSuccess(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-xl bg-white shadow-sm ring-1 ring-stone-200 px-4 py-3 text-sm text-stone-800">
        You’re on the list!
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl">
      <div className="flex gap-3 items-center">
        <div className="flex-1">
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-stone-400 text-stone-900 placeholder-stone-400"
            aria-invalid={!!error}
            required
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="rounded-xl px-5 py-3 font-medium text-white disabled:opacity-60 accent-gradient shadow-sm hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-300"
        >
          {submitting ? 'Joining…' : 'Join the waitlist'}
        </button>
      </div>
      {error && (
        <div className="mt-2 text-xs text-red-600" role="alert">{error}</div>
      )}
    </form>
  );
}


