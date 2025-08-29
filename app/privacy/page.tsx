import Link from 'next/link';
import Image from 'next/image';

export default function PrivacyPage() {
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
            <p className="text-sm text-stone-600 mb-2"><strong>Last updated:</strong> August 29, 2025</p>
            <p className="text-sm text-stone-600 mb-2"><strong>Operated by:</strong> Pentridge Media LLC (Pennsylvania, United States)</p>
            <p className="text-sm text-stone-600"><strong>Contact:</strong> team@dropcard.app</p>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">Privacy Policy</h2>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">1. Scope</h2>
            <p className="text-stone-700">
              This Policy explains what we collect, how we use it, and your choices when you use DropCard, our website, and related services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">2. What We Collect</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium text-stone-900 mb-2">Account Data:</h3>
                <p className="text-stone-700">Email address (required for signup).</p>
              </div>
              <div>
                <h3 className="font-medium text-stone-900 mb-2">Usage Data:</h3>
                <p className="text-stone-700">Counts of scans/selfies, general interaction events, subscription status, device/app version, and basic diagnostics.</p>
              </div>
              <div>
                <h3 className="font-medium text-stone-900 mb-2">Content You Add:</h3>
                <p className="text-stone-700">Photos/selfies and other info you upload or attach to contacts.</p>
              </div>
              <div>
                <h3 className="font-medium text-stone-900 mb-2">Payments:</h3>
                <div className="bg-white border border-stone-200 rounded-lg p-3 mt-2">
                  <ul className="list-disc pl-6 text-stone-700 space-y-1 text-sm">
                    <li><strong>Apple IAP:</strong> Apple processes your payment; we receive subscription status, not full payment details.</li>
                    <li><strong>Superwall:</strong> Handles paywall and subscription management through Apple IAP.</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-stone-700 mt-4">
              <strong>We do not sell your personal information.</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">3. Why We Use Your Data</h2>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li>Provide, operate, and improve the App.</li>
              <li>Enforce plan limits (e.g., scan thresholds) and manage subscriptions.</li>
              <li>Secure the service, prevent abuse, and troubleshoot.</li>
              <li>Communicate with you about updates, billing, and support.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">4. Legal Bases (EEA/UK only)</h2>
            <p className="text-stone-700">
              Where applicable, our legal bases include contract (to provide the App), legitimate interests (improve and secure the App), and consent (where required by law).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">5. Sharing & Disclosure</h2>
            <p className="text-stone-700 mb-4">We share data only with service providers that help us run DropCard:</p>
            <div className="bg-white border border-stone-200 rounded-lg p-4">
              <ul className="list-disc pl-6 text-stone-700 space-y-2">
                <li><strong>Superwall</strong> (paywall & entitlements)</li>
                <li><strong>Apple</strong> (IAP billing & subscription status)</li>
                <li><strong>Supabase</strong> (database & secure storage)</li>
                <li><strong>Vercel</strong> (hosting for web profiles/pages)</li>
              </ul>
            </div>
            <p className="text-stone-700 mt-4">
              We don't rent or sell your personal data. We may disclose if required by law or to protect rights, safety, and security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">6. Data Retention</h2>
            <p className="text-stone-700">
              We retain data for as long as needed to provide the service and for legitimate business needs (e.g., security, accounting). If you delete your account, we'll delete or anonymize personal data within a reasonable period (typically 30 days), subject to legal/backup constraints (backups may persist up to 90 days).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">7. Security</h2>
            <p className="text-stone-700">
              We use administrative, technical, and organizational measures to protect your data, including encrypted transport and storage (via Supabase and other trusted providers). No system is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">8. International Transfers</h2>
            <p className="text-stone-700">
              We may process and store information in the United States and other countries. Where required, we use appropriate safeguards for cross-border transfers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">9. Your Rights & Choices</h2>
            <ul className="list-disc pl-6 text-stone-700 space-y-2">
              <li><strong>Access / Update / Delete:</strong> Email team@dropcard.app to access, correct, export, or delete your data.</li>
              <li><strong>EEA/UK:</strong> You may have rights to object/restrict processing and to lodge a complaint with your local authority.</li>
              <li><strong>California (CCPA/CPRA):</strong> You have rights to know, delete, and correct personal information. We do not "sell" personal information as defined by CCPA.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">10. Children's Privacy</h2>
            <p className="text-stone-700">
              The App is not intended for children under 13. If we learn we collected data from a child without proper consent, we will delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">11. App Permissions (iOS examples)</h2>
            <div className="bg-white border border-stone-200 rounded-lg p-4">
              <ul className="list-disc pl-6 text-stone-700 space-y-2">
                <li><strong>Camera:</strong> To take selfies and scan business cards.</li>
                <li><strong>Photos:</strong> To save or attach images to contacts.</li>
                <li><strong>NFC (where supported):</strong> To enable tap/scan experiences.</li>
                <li><strong>Notifications (optional):</strong> For account, billing, or feature updates.</li>
              </ul>
            </div>
            <p className="text-stone-700 mt-4">
              Permission prompts explain the purpose; you can disable permissions in device settings (some features may not work without them).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">12. Changes to this Policy</h2>
            <p className="text-stone-700">
              We may update this Policy. Material changes will be posted in-app or on our website with an updated "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-stone-900 mb-4">13. Contact</h2>
            <p className="text-stone-700 mb-4">Privacy questions or requests:</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-900 font-medium">team@dropcard.app</p>
            </div>
          </section>

          <div className="border-t border-stone-200 pt-8 mt-12">
            <p className="text-sm text-stone-500 text-center">
              Last updated: August 29, 2025
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
