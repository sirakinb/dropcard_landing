import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { utm, meta, ua } = await req.json();
    const webhookUrl = 'https://hook.us2.make.com/adail5fohnfnxya9qk44pnp1xhusenpf';
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'pageview',
          ts: new Date().toISOString(),
          utm,
          meta,
          ua,
        }),
        cache: 'no-store',
      });
    } catch (err) {
      console.error('Make.com pageview webhook failed', err);
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
  }
}


