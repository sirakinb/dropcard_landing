import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email, utm, meta } = await req.json();
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }
    // TODO: Integrate with ESP (e.g., Mailchimp, ConvertKit). For now, log.
    console.log('New beta signup:', { email });

    // Forward to Make.com webhook (server-side to avoid exposing the URL in the client)
    const webhookUrl = 'https://hook.us2.make.com/adail5fohnfnxya9qk44pnp1xhusenpf';
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          source: 'dropcard-waitlist',
          ts: new Date().toISOString(),
          utm,
          meta,
        }),
        cache: 'no-store',
      });
    } catch (err) {
      // Swallow webhook errors to not block the UX; still return 200
      console.error('Make.com webhook failed', err);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
  }
}


