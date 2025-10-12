import Link from 'next/link';
import Image from 'next/image';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <Image src="/card/dc_logo.png" alt="DropCard logo" width={48} height={48} className="h-12 w-12" />
            <span>DropCard</span>
          </Link>
          <Link href="/" className="text-sm text-stone-600 hover:text-stone-900">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <div className="prose prose-stone max-w-none">
          <h1 className="text-3xl font-bold text-stone-900 mb-8">DropCard Legal</h1>
          
          <div className="bg-stone-50 rounded-lg p-4 mb-8">
            <p className="text-sm text-stone-600 mb-2"><strong>Last updated:</strong> October 11, 2025</p>
            <p className="text-sm text-stone-600 mb-2"><strong>Operated by:</strong> Pentridge Media LLC (Pennsylvania, United States)</p>
            <p className="text-sm text-stone-600"><strong>Contact:</strong> team@dropcard.app</p>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">Terms of Service</h2>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">1. Overview</h2>
            <p className="text-stone-700 mb-4">
              DropCard (the "App") is a digital business card & contact management app that lets you exchange contact info, scan business cards, share a QR code, and take/attach selfies to remember who you met. The App is provided by Pentridge Media LLC ("DropCard," "we," "us," or "our"). By downloading or using the App, you agree to these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">2. Eligibility</h2>
            <p className="text-stone-700">
              You must be at least 13 years old (or the age of digital consent in your region) to use the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">3. Accounts & Security</h2>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>You register with a valid email and are responsible for safeguarding your login.</li>
              <li>You agree that your account info is accurate and you won't impersonate others or use the App for unlawful purposes.</li>
              <li>We may suspend or terminate accounts that violate these Terms.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">4. Free & Pro Features</h2>
            <div className="bg-white border border-stone-200 rounded-lg p-4 mb-4">
              <p className="text-stone-700 mb-2"><strong>Free:</strong> Limited usage of features.</p>
              <p className="text-stone-700 mb-2"><strong>Pro:</strong> $4.99/month or $49.99/year (auto-renewing).</p>
              <ul className="list-disc pl-6 text-stone-700 space-y-1">
                <li>5 selfie scans → requires Pro</li>
                <li>AIChat (coming soon) → requires Pro</li>
              </ul>
              <p className="text-stone-700 mt-4 text-sm">We may change plan names, features, or limits with notice.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">5. Subscriptions, Billing & Refunds</h2>
            <p className="text-stone-700 mb-4">Payments are processed through Apple In-App Purchase (IAP) via our Superwall paywall.</p>
            
            <div className="bg-white border border-stone-200 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-stone-900 mb-2">Payment Processing:</h3>
              <ul className="list-disc pl-6 text-stone-700 space-y-2 mb-4">
                <li>Payments are processed via Apple In-App Purchase (IAP) through our Superwall paywall.</li>
                <li>Your Apple ID is charged at confirmation. Subscriptions auto-renew unless canceled at least 24 hours before the end of the period.</li>
                <li>Renewal charges occur within 24 hours before the current period ends.</li>
                <li>Manage or cancel in Settings → [your name] → Subscriptions on your device.</li>
                <li>Refunds for Apple IAP are governed by Apple's policies and requested via Apple.</li>
              </ul>
            </div>



            <p className="text-stone-700">We may offer free trials, which convert to paid unless you cancel before the trial ends.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">6. Acceptable Use</h2>
            <p className="text-stone-700 mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>Post or transmit unlawful, harmful, harassing, hateful, obscene, infringing, or deceptive content.</li>
              <li>Spam, scrape, harvest data, or interfere with others' use.</li>
              <li>Attempt to reverse-engineer, bypass security, or misuse APIs/SDKs.</li>
            </ul>
            <p className="text-stone-700 mt-4">We may remove content or restrict accounts that violate these rules.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">7. Your Content & License</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-stone-900 mb-2">Ownership:</h3>
                <p className="text-stone-700">You retain ownership of photos, text, and other content you upload ("User Content").</p>
              </div>
              <div>
                <h3 className="font-medium text-stone-900 mb-2">License to us:</h3>
                <p className="text-stone-700">You grant us a non-exclusive, worldwide license to host, store, reproduce, and display your User Content solely to provide and improve the App.</p>
              </div>
              <div>
                <p className="text-stone-700">You represent you have the rights to your content and it doesn't violate third-party rights.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">8. Our Intellectual Property</h2>
            <p className="text-stone-700">
              The App, including its software, features, templates, branding, logos, and other materials, is owned by Pentridge Media LLC and protected by law. Except for your User Content and rights expressly granted, no licenses are granted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">9. Third-Party Services</h2>
            <p className="text-stone-700">
              We integrate services like Firebase and Apple IAP. Your use of those services may be subject to their terms and policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">10. Beta & AI Features</h2>
            <p className="text-stone-700">
              Some features (e.g., AIChat) may be labeled beta or "coming soon" and could change, be rate-limited, or be discontinued. Results may be imperfect; use discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">11. Availability; Changes</h2>
            <p className="text-stone-700">
              We may modify, suspend, or discontinue features or plans with notice where practical. We are not liable for outages, data loss, or changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">12. Disclaimer; Limitation of Liability</h2>
            <p className="text-stone-700">
              The App is provided "as is" and "as available." To the fullest extent permitted by law, we disclaim all warranties and limit our total liability to the greater of (a) $100 or (b) amounts you paid to us for the App in the 12 months before the claim. Some jurisdictions don't allow certain limits; those limits apply to the maximum extent permitted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">13. Indemnity</h2>
            <p className="text-stone-700">
              You agree to defend and hold harmless Pentridge Media LLC from claims arising out of your misuse of the App or violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">14. Governing Law; Venue</h2>
            <p className="text-stone-700">
              These Terms are governed by the laws of the Commonwealth of Pennsylvania, USA, without regard to conflict of laws. Where permitted, exclusive venue is in courts located in Pennsylvania.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">15. Changes to Terms</h2>
            <p className="text-stone-700">
              We may update these Terms at any time. Material changes will be posted in the App or on our site. Continued use means you accept the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">16. Contact</h2>
            <p className="text-stone-700">
              Questions about these Terms: team@dropcard.app
            </p>
          </section>

          <div className="border-t border-stone-200 pt-8 mt-12">
            <p className="text-sm text-stone-500 text-center">
              Last updated: October 11, 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
